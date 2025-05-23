import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetFooter } from '@/components/ui/sheet';
import {
  ReactFlow,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  MiniMap,
  Panel,
  Node,
  Edge
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { mockRoadmapNodes, mockRoadmapEdges, courseResources } from '@/data/mockData';
import { generateMixtralResponse } from '@/lib/groq';
import { RoadmapModule, Resource } from '@/types';
import { BookOpenIcon, CalendarIcon, ClockIcon, FileTextIcon, LockIcon, MonitorIcon, GraduationCapIcon, ChevronRightIcon, FileIcon, Loader2Icon } from 'lucide-react';
import { toast } from 'sonner';

interface RoadmapNodeData {
  title: string;
  description: string;
  status: 'locked' | 'available' | 'in_progress' | 'completed';
  difficulty: number;
  estimatedHours: number;
  prerequisites: string[];
  resources: Resource[];
  assessments: any[];
  curriculumWeek: number;
  learningObjectives: string[];
  adaptedContent: boolean;
  [key: string]: any;
}

interface RoadmapNode extends Node {
  type: 'topic' | 'assessment' | 'milestone' | 'start';
  data: RoadmapNodeData;
}

interface RoadmapEdge extends Edge {
  type: 'prerequisite' | 'suggested';
  style?: {
    stroke: string;
    strokeDasharray?: string;
  };
}

type RoadmapEdge = Edge<EdgeData>;

interface TopicProficiency {
  total: number;
  correct: number;
  avgDifficulty: number;
}

interface AssessmentData {
  overallScore: number;
  recommendedStartingLevel: number;
  completedAt: string;
  topicProficiency: Record<string, TopicProficiency>;
}

// Node components
const TopicNode: React.FC<{ data: RoadmapNodeData }> = ({ data }) => {
  const getStatusColor = () => {
    switch (data.status) {
      case 'completed':
        return 'bg-edu-green-500/20 border-edu-green-500 text-edu-green-700 dark:text-edu-green-300';
      case 'in_progress':
        return 'bg-edu-blue-500/20 border-edu-blue-500 text-edu-blue-700 dark:text-edu-blue-300';
      case 'available':
        return 'bg-edu-purple-500/20 border-edu-purple-500 text-edu-purple-700 dark:text-edu-purple-300';
      case 'locked':
        return 'bg-gray-300/20 border-gray-300 text-gray-500';
      default:
        return 'bg-gray-100 border-gray-300';
    }
  };

  const getIcon = () => {
    switch (data.status) {
      case 'completed':
        return <GraduationCapIcon className="h-4 w-4" />;
      case 'in_progress':
        return <BookOpenIcon className="h-4 w-4" />;
      case 'available':
        return <ChevronRightIcon className="h-4 w-4" />;
      case 'locked':
        return <LockIcon className="h-4 w-4" />;
      default:
        return <BookOpenIcon className="h-4 w-4" />;
    }
  };

  return (
    <div className={`edu-flow-node-topic ${getStatusColor()} w-48`}>
      <div className="flex items-center justify-between mb-1">
        <Badge variant="outline" className="text-xs px-2 py-0">
          {getIcon()}
          <span className="ml-1">
            {data.status === 'completed' ? 'Completed' : 
             data.status === 'in_progress' ? 'In Progress' : 
             data.status === 'available' ? 'Available' : 'Locked'}
          </span>
        </Badge>
        {data.adaptedContent && (
          <Badge className="bg-edu-purple-500 text-white text-xs px-1.5 py-0">AI</Badge>
        )}
      </div>
      <h3 className="font-medium text-sm">{data.title}</h3>
      <div className="text-xs mt-1 opacity-80">{data.description}</div>
      <div className="flex items-center justify-between mt-2 text-xs">
        <div className="flex items-center">
          <ClockIcon className="h-3 w-3 mr-1" />
          <span>{data.estimatedHours}h</span>
        </div>
        <div className="flex items-center">
          <FileTextIcon className="h-3 w-3 mr-1" />
          <span>{data.resources.length}</span>
        </div>
      </div>
    </div>
  );
};

const AssessmentNode: React.FC<{ data: RoadmapNodeData }> = ({ data }) => {
  const getStatusColor = () => {
    switch (data.status) {
      case 'completed':
        return 'bg-edu-green-500/20 border-edu-green-500 text-edu-green-700 dark:text-edu-green-300';
      case 'in_progress':
        return 'bg-edu-blue-500/20 border-edu-blue-500 text-edu-blue-700 dark:text-edu-blue-300';
      case 'available':
        return 'bg-edu-purple-500/20 border-edu-purple-500 text-edu-purple-700 dark:text-edu-purple-300';
      case 'locked':
        return 'bg-gray-300/20 border-gray-300 text-gray-500';
      default:
        return 'bg-gray-100 border-gray-300';
    }
  };

  return (
    <div className={`edu-flow-node-assessment ${getStatusColor()} w-40`}>
      <div className="flex items-center justify-between mb-1">
        <Badge variant="outline" className="text-xs px-2 py-0">Quiz</Badge>
      </div>
      <h3 className="font-medium text-sm">{data.title}</h3>
      <div className="flex items-center mt-2 text-xs">
        <ClockIcon className="h-3 w-3 mr-1" />
        <span>{data.estimatedHours}h</span>
      </div>
    </div>
  );
};

const MilestoneNode: React.FC<{ data: RoadmapNodeData }> = ({ data }) => {
  return (
    <div className="edu-flow-node-milestone w-40">
      <div className="flex items-center justify-between mb-1">
        <Badge variant="outline" className="text-xs px-2 py-0">Milestone</Badge>
      </div>
      <h3 className="font-medium text-sm">{data.title}</h3>
      <div className="text-xs mt-1 opacity-80">{data.description}</div>
    </div>
  );
};

const StartNode: React.FC<{ data: RoadmapNodeData }> = ({ data }) => {
  return (
    <div className="edu-flow-node-start w-40">
      <div className="flex items-center justify-between mb-1">
        <Badge variant="outline" className="text-xs px-2 py-0">Start</Badge>
      </div>
      <h3 className="font-medium text-sm">{data.title}</h3>
      <div className="text-xs mt-1 opacity-80">{data.description}</div>
    </div>
  );
};

// Resource item component
const ResourceItem: React.FC<{ resource: Resource }> = ({ resource }) => {
  const getResourceIcon = () => {
    switch (resource.type) {
      case 'video':
        return <MonitorIcon className="h-4 w-4 text-edu-blue-500" />;
      case 'reading':
        return <FileTextIcon className="h-4 w-4 text-edu-purple-500" />;
      case 'exercise':
        return <BookOpenIcon className="h-4 w-4 text-edu-green-500" />;
      default:
        return <FileIcon className="h-4 w-4 text-gray-500" />;
    }
  };

  return (
    <div className="border rounded-md p-3 flex items-start">
      <div className="rounded-md bg-background p-2 mr-3">
        {getResourceIcon()}
      </div>
      <div className="flex-1">
        <h4 className="font-medium text-sm">{resource.title}</h4>
        <div className="flex items-center mt-2">
          <Badge variant="outline" className="text-xs mr-2">
            <ClockIcon className="h-3 w-3 mr-1" />
            {resource.duration} min
          </Badge>
          <Badge variant="outline" className="text-xs">
            {resource.type}
          </Badge>
        </div>
      </div>
    </div>
  );
};

const CourseRoadmap: React.FC = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const location = useLocation();
  const assessmentData: AssessmentData | undefined = location.state?.assessmentData;
  
  const [nodes, setNodes, onNodesChange] = useNodesState(mockRoadmapNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(mockRoadmapEdges);
  const [selectedNode, setSelectedNode] = useState<RoadmapNode | null>(null);
  const [sheetOpen, setSheetOpen] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  
  
  const handleGenerateAIRoadmap = async () => {
    setIsGenerating(true);
    try {
      const flowchartPrompt = `Generate an adaptive learning roadmap as a JSON object. Strictly use the following format and DO NOT include any explanatory text:
{
  "nodes": [
    {
      "id": "node-1",
      "type": "topic",
      "position": { "x": 100, "y": 100 },
      "data": {
        "title": "Example Topic",
        "description": "Topic description",
        "status": "available",
        "difficulty": 0.5,
        "estimatedHours": 2,
        "prerequisites": [],
        "resources": [],
        "assessments": [],
        "curriculumWeek": 1,
        "learningObjectives": [],
        "adaptedContent": false
      }
    }
  ],
  "edges": [
    {
      "id": "edge-1",
      "source": "node-1",
      "target": "node-2",
      "type": "prerequisite",
      "animated": false,
      "style": { "stroke": "#3385FF" }
    }
  ]
}

Use this student's assessment data to personalize the roadmap:
${assessmentData ? `
Overall Score: ${assessmentData.overallScore * 100}%
Starting Level: ${assessmentData.recommendedStartingLevel}
Topic Proficiency:
${Object.entries(assessmentData.topicProficiency)
  .map(([topic, data]) => 
    `${topic}: ${Math.round(data.correct/data.total * 100)}% correct, Difficulty: ${data.avgDifficulty}`
  ).join('\n')}
` : 'No assessment data available. Generate a standard progression path.'}`;

      const response = await generateMixtralResponse(flowchartPrompt);
      
      // Extract JSON from the response using regex
      const jsonMatch = response.match(/\{[\s\S]*\}/);
      if (!jsonMatch) {
        throw new Error('No valid JSON object found in the response');
      }

      const jsonStr = jsonMatch[0].trim();
      try {
        const flowchartData = JSON.parse(jsonStr);
        
        // Validate required structure
        if (!flowchartData.nodes || !Array.isArray(flowchartData.nodes) || 
            !flowchartData.edges || !Array.isArray(flowchartData.edges)) {
          throw new Error('Invalid roadmap structure: missing nodes or edges arrays');
        }

        // Validate and process nodes
        const validatedNodes = flowchartData.nodes.map(node => {
          if (!node.id || !node.type || !node.position || !node.data) {
            throw new Error(`Invalid node structure: ${JSON.stringify(node)}`);
          }
          return {
            ...node,
            data: {
              ...node.data,
              resources: node.data.resources || [],
              assessments: node.data.assessments || [],
              prerequisites: node.data.prerequisites || [],
              learningObjectives: node.data.learningObjectives || [],
              status: node.data.status || 'locked',
              difficulty: typeof node.data.difficulty === 'number' ? node.data.difficulty : 0.5,
              estimatedHours: typeof node.data.estimatedHours === 'number' ? node.data.estimatedHours : 1,
              curriculumWeek: typeof node.data.curriculumWeek === 'number' ? node.data.curriculumWeek : 1
            }
          };
        });

        // Validate and process edges
        const validatedEdges = flowchartData.edges.map(edge => {
          if (!edge.id || !edge.source || !edge.target) {
            throw new Error(`Invalid edge structure: ${JSON.stringify(edge)}`);
          }
          return {
            ...edge,
            type: edge.type || 'prerequisite',
            animated: Boolean(edge.animated),
            style: {
              stroke: edge.type === 'prerequisite' ? '#3385FF' : '#8533FF',
              strokeDasharray: edge.type === 'suggested' ? '5,5' : undefined
            }
          };
        });

        setNodes(validatedNodes);
        setEdges(validatedEdges);
        toast.success('AI Roadmap generated successfully!');
      } catch (parseError) {
        console.error('Failed to parse AI response:', parseError);
        console.error('Raw response:', jsonStr);
        toast.error('Failed to parse roadmap data. Please try again.');
      }
    } catch (error) {
      console.error('Failed to generate roadmap:', error);
      toast.error(error instanceof Error ? error.message : 'Failed to generate roadmap. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  // Auto-generate roadmap when assessment data is available
  useEffect(() => {
    const generateInitialRoadmap = async () => {
      if (assessmentData && !isGenerating && nodes === mockRoadmapNodes) {
        await handleGenerateAIRoadmap();
      }
    };

    generateInitialRoadmap();
  }, [assessmentData, nodes, isGenerating, handleGenerateAIRoadmap]);

  // Update page title
  useEffect(() => {
    const title = document.title;
    document.title = 'Learning Roadmap - SARA';
    return () => {
      document.title = title;
    };
  }, []);

  // Define node types
  const nodeTypes = {
    topic: TopicNode,
    assessment: AssessmentNode,
    milestone: MilestoneNode,
    start: StartNode,
  };

  const handleNodeClick = (_: React.MouseEvent, node: any) => {
    const nodeData = nodes.find(n => n.id === node.id);
    if (nodeData) {
      setSelectedNode(nodeData);
      setSheetOpen(true);
    }
  };

  return (
    <div className="edu-container h-[calc(100vh-5rem)]">
      <header className="mb-4 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Interactive Learning Roadmap</h1>
          <p className="text-muted-foreground">
            Navigate your personalized path through the curriculum
          </p>
        </div>
        <Button 
          onClick={handleGenerateAIRoadmap}
          disabled={isGenerating}
          className="flex items-center gap-2"
        >
          {isGenerating ? (
            <>
              <Loader2Icon className="h-4 w-4 animate-spin" />
              Generating Roadmap...
            </>
          ) : (
            <>
              <BookOpenIcon className="h-4 w-4" />
              Generate AI Roadmap
            </>
          )}
        </Button>
      </header>

      <div className="relative h-[calc(100%-4rem)] rounded-lg overflow-hidden border">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          nodeTypes={nodeTypes}
          onNodeClick={handleNodeClick}
          fitView
          className="bg-background"
        >
          <Controls position="bottom-right" />
          <MiniMap position="top-right" zoomable pannable />
          <Background color="#ddd" gap={16} />
          
          <Panel position="top-left" className="bg-background/80 backdrop-blur-sm p-3 rounded-lg border shadow-sm">
            <div className="space-y-2">
              <h3 className="font-medium">Course Progress</h3>
              <div className="flex items-center text-sm text-muted-foreground">
                <CalendarIcon className="h-4 w-4 mr-1" />
                <span>Week {nodes.find(n => n.data.status === 'in_progress')?.data.curriculumWeek || 1} of 15</span>
              </div>
              <div className="space-y-1">
                <div className="flex items-center justify-between text-sm">
                  <span>Overall Progress</span>
                  <span>{Math.round((nodes.filter(n => n.data.status === 'completed').length / nodes.length) * 100)}%</span>
                </div>
                <Progress value={(nodes.filter(n => n.data.status === 'completed').length / nodes.length) * 100} className="h-2" />
              </div>
            </div>
          </Panel>
        </ReactFlow>
      </div>

      <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
        <SheetContent className="w-full sm:max-w-md overflow-y-auto">
          {selectedNode && (
            <>
              <SheetHeader>
                <SheetTitle>{selectedNode.data.title}</SheetTitle>
                <SheetDescription>
                  {selectedNode.data.description}
                </SheetDescription>
              </SheetHeader>
              
              <div className="py-4">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <Card>
                    <CardContent className="pt-4 text-center">
                      <ClockIcon className="h-5 w-5 mx-auto mb-1 text-muted-foreground" />
                      <div className="text-sm font-medium">{selectedNode.data.estimatedHours} hours</div>
                      <div className="text-xs text-muted-foreground">Estimated time</div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-4 text-center">
                      <CalendarIcon className="h-5 w-5 mx-auto mb-1 text-muted-foreground" />
                      <div className="text-sm font-medium">Week {selectedNode.data.curriculumWeek}</div>
                      <div className="text-xs text-muted-foreground">Curriculum</div>
                    </CardContent>
                  </Card>
                </div>
                
                {selectedNode.data.learningObjectives.length > 0 && (
                  <div className="mb-6">
                    <h3 className="text-sm font-medium mb-2">Learning Objectives</h3>
                    <ul className="space-y-1">
                      {selectedNode.data.learningObjectives.map((objective, index) => (
                        <li key={index} className="text-sm flex items-start">
                          <ChevronRightIcon className="h-4 w-4 mr-2 mt-0.5 text-primary" />
                          <span>{objective}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {selectedNode.data.resources.length > 0 && (
                  <div className="mb-6">
                    <h3 className="text-sm font-medium mb-2">Resources</h3>
                    <div className="space-y-3">
                      {selectedNode.data.resources.map((resource) => (
                        <ResourceItem key={resource.id} resource={resource} />
                      ))}
                    </div>
                  </div>
                )}
                
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className={`
                    ${selectedNode.data.status === 'completed' ? 'bg-edu-green-100 text-edu-green-700 border-edu-green-300' : 
                      selectedNode.data.status === 'in_progress' ? 'bg-edu-blue-100 text-edu-blue-700 border-edu-blue-300' : 
                      selectedNode.data.status === 'available' ? 'bg-edu-purple-100 text-edu-purple-700 border-edu-purple-300' : 
                      'bg-gray-100 text-gray-700 border-gray-300'}
                  `}>
                    {selectedNode.data.status === 'completed' ? 'Completed' : 
                     selectedNode.data.status === 'in_progress' ? 'In Progress' : 
                     selectedNode.data.status === 'available' ? 'Available' : 'Locked'}
                  </Badge>
                  
                  {selectedNode.data.adaptedContent && (
                    <Badge className="bg-edu-purple-500 text-white">AI Adapted</Badge>
                  )}
                </div>
              </div>
              
              <SheetFooter>
                {selectedNode.data.status === 'locked' ? (
                  <Button disabled className="w-full">
                    <LockIcon className="h-4 w-4 mr-2" />
                    Locked
                  </Button>
                ) : selectedNode.data.status === 'completed' ? (
                  <Button variant="outline" className="w-full">
                    <BookOpenIcon className="h-4 w-4 mr-2" />
                    Review Again
                  </Button>
                ) : selectedNode.data.status === 'in_progress' ? (
                  <Button className="w-full">
                    <BookOpenIcon className="h-4 w-4 mr-2" />
                    Continue Learning
                  </Button>
                ) : (
                  <Button className="w-full">
                    <ChevronRightIcon className="h-4 w-4 mr-2" />
                    Start Learning
                  </Button>
                )}
              </SheetFooter>
            </>
          )}
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default CourseRoadmap;
