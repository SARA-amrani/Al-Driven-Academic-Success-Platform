# SARA - Smart Adaptive Learning Roadmap Assistant

![SARA Banner](./docs/images/banner.png)

SARA is an intelligent educational platform that combines AI-powered adaptive learning with interactive course roadmaps to provide personalized learning experiences for students. Using advanced AI algorithms and interactive visualizations, SARA creates dynamic learning paths that adapt to each student's progress, understanding, and learning style.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.2-blue.svg)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18.0-blue.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.0-purple.svg)](https://vitejs.dev/)

## 🌟 Key Features

### For Students 📚
- **AI-Powered Learning Paths**
  - Dynamic course progression based on performance
  - Real-time adaptation to learning style
  - Personalized content recommendations
  - Intelligent difficulty scaling

### For Educators 👨‍🏫
- **Comprehensive Analytics Dashboard**
  - Student progress tracking
  - Performance metrics visualization
  - Learning pattern analysis
  - Intervention opportunity identification

### Technical Highlights 🛠
- **Advanced AI Integration**
  - Groq API for real-time AI processing
  - Natural language understanding
  - Predictive learning analytics
  - Adaptive content generation

## 📸 Screenshots & Interface Guide

### Student Dashboard
![Student Dashboard](./docs/images/dashboard.png)
- Main student interface showing:
  - Course overview cards
  - Progress statistics
  - Recent activity feed
  - AI assistant quick access
  - Upcoming deadlines
  - Course recommendations

### Interactive Learning Roadmap
![Learning Roadmap](./docs/images/roadmap.png)
- Dynamic course progression visualization:
  - Node-based learning path
  - Color-coded status indicators
  - Progress tracking
  - AI-adapted difficulty levels
  - Resource recommendations

### Course View Interface
![Course View](./docs/images/course-view.png)
- Comprehensive course management:
  - Course materials and resources
  - Progress tracking
  - Assignment submissions
  - Discussion forums
  - Interactive content

### Assessment Interface
![Assessment Interface](./docs/images/assessment.png)
- Advanced assessment features:
  - AI-powered question generation
  - Real-time feedback
  - Performance analytics
  - Adaptive difficulty

### Professor Dashboard
![Professor Dashboard](./docs/images/professor-dashboard.png)
- Complete teaching management:
  - Student progress monitoring
  - Course analytics
  - Content management
  - Assessment tools

![Course Roadmap](./docs/images/roadmap.png)
*Screenshot: Interactive Course Roadmap*

- **Smart Assessment System**
  - Automated skill level evaluation
  - Performance-based content adaptation
  - Comprehensive progress tracking
  - Instant feedback and recommendations

- **AI Learning Assistant**
  - Context-aware learning support
  - Real-time question answering
  - Resource recommendations
  - Personalized learning tips

### 👨‍🏫 For Professors

- **Course Management Dashboard**
  - Student progress monitoring
  - Performance analytics
  - Content customization tools
  - Assessment management

![Professor Dashboard](./docs/images/professor-dashboard.png)
*Screenshot: Professor Dashboard Interface*

## Technology Stack

- **Frontend**
  - React with TypeScript
  - Vite for build tooling
  - Tailwind CSS for styling
  - shadcn/ui for UI components
  - React Flow for interactive roadmaps

- **AI/ML Integration**
  - Groq API for AI processing
  - Custom ML models for learning path adaptation
  - Real-time content personalization

- **State Management & Routing**
  - React Context for state management
  - React Router for navigation
  - Custom hooks for business logic

## Getting Started

### Prerequisites

- Node.js 18 or higher
- Bun package manager
- Groq API key for AI features

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/sara.git
cd sara
```

2. Install dependencies:
```bash
bun install
```

3. Set up environment variables:
```bash
cp .env.example .env
```
Edit the .env file with your API keys and configuration.

4. Start the development server:
```bash
bun dev
```

The application will be available at `http://localhost:5173`

## Project Structure

```
sara/
├── src/
│   ├── components/        # Reusable UI components
│   │   ├── assistant/    # AI chat interface components
│   │   ├── auth/        # Authentication components
│   │   ├── professor/   # Professor-specific components
│   │   ├── student/     # Student-specific components
│   │   └── ui/          # Base UI components
│   ├── context/         # React context providers
│   ├── data/           # Mock data and constants
│   ├── hooks/          # Custom React hooks
│   ├── lib/            # Utility functions and APIs
│   ├── pages/          # Page components
│   └── types/          # TypeScript type definitions
```

## Key Features Implementation

### Adaptive Learning Roadmap

The platform uses a sophisticated algorithm to generate personalized learning paths:

```typescript
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
}
```

### Assessment System

Comprehensive assessment system that evaluates:
- Topic proficiency
- Learning pace
- Difficulty adaptation
- Resource effectiveness

## Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details on how to submit pull requests, report issues, and contribute to the project.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- shadcn/ui for the beautiful component library
- React Flow for the interactive graph visualization
- Groq for AI capabilities
- All contributors who have helped shape this project

## Support

For support, please open an issue in the GitHub repository or contact our support team at support@sara-learning.com.

---

Built with ❤️ for better education
