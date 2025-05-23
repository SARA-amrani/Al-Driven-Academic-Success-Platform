import React from 'react';
import { EnhancedAIChatInterface } from "@/components/assistant/EnhancedAIChatInterface";

const quickSuggestions = [
  "Explain the concept of recursion",
  "How do I prepare for my next quiz?",
  "What are the key topics for this course?",
  "Can you help me with my homework?",
];

const Assistant = () => {
  return (
    <div className="edu-container">
      <div className="container py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">AI Learning Assistant</h1>
          <p className="text-muted-foreground">
            Get help with your studies and course materials
          </p>
        </div>
        <EnhancedAIChatInterface quickActionSuggestions={quickSuggestions} />
      </div>
    </div>
  );
};

// Make sure this is a default export
export default Assistant;
