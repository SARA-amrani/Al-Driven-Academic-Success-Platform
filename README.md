# 🎓 EduNexus: AI-Driven Academic Success Platform

![EduNexus Banner](./docs/images/banner.png)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js](https://img.shields.io/badge/Node.js-18.0-green.svg)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-18.0-blue.svg)](https://reactjs.org/)
[![Python](https://img.shields.io/badge/Python-3.9-blue.svg)](https://python.org/)
[![FastAPI](https://img.shields.io/badge/FastAPI-0.100-green.svg)](https://fastapi.tiangolo.com/)
[![Docker](https://img.shields.io/badge/Docker-Ready-blue.svg)](https://docker.com/)

## 🌟 Overview

**EduNexus** is a comprehensive AI-powered education platform designed for schools and universities. It provides personalized learning experiences through adaptive roadmaps, intelligent assessments, and multi-agent AI systems that work together to optimize student success.

### Key Features

- 🗺️ **Personalized Academic Roadmaps** - AI-generated learning paths based on real course enrollments
- 🛡️ **Secure Adaptive Quizzing** - Anti-cheating measures with real-time difficulty adjustment
- 📊 **Professor Analytics Dashboard** - Comprehensive student performance tracking
- 🤖 **AI Learning Assistant** - 24/7 conversational support for students
- 🔄 **Multi-Agent System** - Coordinated AI agents for automated learning workflows
- 📱 **Responsive Design** - Works seamlessly across desktop, tablet, and mobile devices

## 📸 Platform Screenshots

### Student Dashboard
![Student Dashboard](./docs/images/dashboard.png)
*Main student interface showing course progress, AI assistant, and learning analytics*

### Interactive Learning Roadmap
![Learning Roadmap](./docs/images/roadmap.png)
*Dynamic course progression with node-based visualization and adaptive difficulty*

### Professor Analytics Dashboard
![Professor Dashboard](./docs/images/professor-dashboard.png)
*Comprehensive teaching management with student progress monitoring and intervention tools*

### AI Assistant Interface
![AI Assistant](./docs/images/ai-assistant.png)
*24/7 conversational learning support with context-aware recommendations*

### Secure Quiz Environment
![Quiz Interface](./docs/images/quiz-interface.png)
*Fullscreen assessment environment with anti-cheating measures and real-time adaptation*

## 🏗️ Architecture Overview

EduNexus is built using a **microservices architecture** with multiple intelligent agents, each responsible for core education-related features. The platform is designed to be scalable, modular, and AI-integrated.

### 🧩 Core Services

| Service Name | Description | Technologies |
|-------------|-------------|--------------|
| **Frontend** | React-based UI for students and professors | React 18, TypeScript, Tailwind CSS |
| **Auth Service** | JWT-based authentication and role management | Node.js, PostgreSQL, JWT |
| **Enrollment Service** | Course and syllabus management | Python, FastAPI, PostgreSQL |
| **Learning Engine** | AI roadmaps, progress tracking, adaptive evaluation | Python, ML models, Redis |
| **Quiz Service** | Secure quiz delivery with adaptive questions | Node.js, Redis, WebSockets |
| **Content Service** | Learning material curation and recommendations | Python, NLP, Vector DB |
| **Feedback Service** | Analytics dashboards and reporting | Python, Plotly, Chart.js |
| **AI Assistant** | GPT-powered conversational interface | Python, LangChain, OpenAI API |
| **Security Monitor** | Anti-cheating and proctoring system | Node.js, WebRTC, Computer Vision |
| **API Gateway** | Request routing and load balancing | Kong/NGINX, Rate Limiting |

### 🤖 AI Multi-Agent System

| Agent Name | Responsibility | Implementation |
|------------|---------------|----------------|
| **EnrollmentAgent** | Retrieves course registrations and syllabi | Python + FastAPI |
| **StudyPlannerAgent** | Creates personalized learning roadmaps | ML models + Graph algorithms |
| **ContentAgent** | Recommends learning resources | NLP + Vector similarity |
| **ProgressAgent** | Tracks student activity and performance | Real-time analytics |
| **QuizAgent** | Delivers secure, adaptive assessments | IRT + Anti-cheating |
| **LevelEvaluatorAgent** | Adapts difficulty using ML models | Scikit-learn + TensorFlow |
| **FeedbackAgent** | Generates reports for professors | Data aggregation + Visualization |
| **StudentHelperAgent** | Provides 24/7 conversational support | GPT-4 + RAG system |
| **SecurityAgent** | Monitors for cheating behaviors | Computer Vision + Pattern detection |
| **MentorshipAgent** | Facilitates peer learning connections | Collaborative filtering |

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18.0 or higher
- **Python** 3.9 or higher
- **Docker** and **Docker Compose**
- **PostgreSQL** 14 or higher
- **Redis** 6.0 or higher

### Installation Steps

1. **Clone the Repository**
```bash
git clone https://github.com/yourusername/edunexus.git
cd edunexus
```

2. **Environment Setup**
```bash
# Copy environment templates
cp .env.example .env
cp frontend/.env.example frontend/.env
cp backend/.env.example backend/.env

# Edit environment files with your configurations
```

3. **Docker Setup (Recommended)**
```bash
# Start all services
docker-compose up -d

# View logs
docker-compose logs -f

# Stop services
docker-compose down
```

4. **Manual Setup (Alternative)**
```bash
# Install dependencies
npm install
cd frontend && npm install
cd ../backend && pip install -r requirements.txt

# Start services
npm run dev:all
```

5. **Access the Platform**
- **Frontend**: http://localhost:3000
- **API Gateway**: http://localhost:8000
- **API Documentation**: http://localhost:8000/docs

## 🛠️ Development Guide

### Project Structure

```
edunexus/
├── frontend/                    # React frontend application
│   ├── src/
│   │   ├── components/         # Reusable UI components
│   │   │   ├── auth/          # Authentication components
│   │   │   ├── dashboard/     # Dashboard components
│   │   │   ├── roadmap/       # Learning roadmap components
│   │   │   ├── quiz/          # Quiz interface components
│   │   │   ├── chat/          # AI assistant chat
│   │   │   └── common/        # Shared components
│   │   ├── pages/             # Page components
│   │   │   ├── Login.jsx      # Authentication page
│   │   │   ├── Dashboard.jsx  # Main dashboard
│   │   │   ├── Quiz.jsx       # Quiz interface
│   │   │   └── Profile.jsx    # User profile
│   │   ├── services/          # API services
│   │   │   ├── api.js         # Axios configuration
│   │   │   ├── auth.js        # Authentication service
│   │   │   ├── quiz.js        # Quiz service
│   │   │   └── roadmap.js     # Roadmap service
│   │   ├── hooks/             # Custom React hooks
│   │   ├── context/           # React context providers
│   │   ├── utils/             # Utility functions
│   │   └── styles/            # CSS and styling
│   ├── public/                # Static assets
│   └── package.json
│
├── backend/                     # Microservices backend
│   ├── services/
│   │   ├── auth/              # Authentication service
│   │   │   ├── app.py
│   │   │   ├── models.py
│   │   │   ├── routes.py
│   │   │   └── requirements.txt
│   │   ├── enrollment/        # Course enrollment service
│   │   ├── learning-engine/   # AI learning engine
│   │   ├── quiz/              # Quiz management service
│   │   ├── content/           # Content recommendation
│   │   ├── feedback/          # Analytics and reporting
│   │   ├── ai-assistant/      # Conversational AI
│   │   └── security/          # Anti-cheating monitoring
│   ├── shared/                # Shared utilities
│   │   ├── database.py        # Database connections
│   │   ├── models.py          # Shared data models
│   │   ├── utils.py           # Common utilities
│   │   └── middleware.py      # Authentication middleware
│   └── gateway/               # API Gateway
│       ├── nginx.conf
│       └── kong.yml
│
├── ai-agents/                   # AI agent implementations
│   ├── enrollment_agent.py
│   ├── study_planner_agent.py
│   ├── content_agent.py
│   ├── progress_agent.py
│   ├── quiz_agent.py
│   ├── level_evaluator_agent.py
│   ├── feedback_agent.py
│   ├── student_helper_agent.py
│   ├── security_agent.py
│   └── mentorship_agent.py
│
├── infrastructure/              # DevOps and deployment
│   ├── docker/                # Docker configurations
│   │   ├── frontend.Dockerfile
│   │   ├── backend.Dockerfile
│   │   └── nginx.Dockerfile
│   ├── k8s/                   # Kubernetes manifests
│   ├── terraform/             # Infrastructure as Code
│   └── monitoring/            # Monitoring configurations
│
├── docs/                        # Documentation
│   ├── api/                   # API documentation
│   ├── deployment/            # Deployment guides
│   ├── architecture/          # Architecture diagrams
│   └── images/                # Screenshots and assets
│
├── tests/                       # Test suites
│   ├── unit/                  # Unit tests
│   ├── integration/           # Integration tests
│   └── e2e/                   # End-to-end tests
│
├── scripts/                     # Development scripts
│   ├── setup.sh              # Initial setup script
│   ├── deploy.sh              # Deployment script
│   └── test.sh                # Test runner
│
├── docker-compose.yml           # Docker Compose configuration
├── docker-compose.dev.yml       # Development environment
├── .env.example                 # Environment template
├── .gitignore
├── README.md
└── LICENSE
```

### Frontend Development

#### Tech Stack
- **React 18** with Hooks and Context API
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **React Flow** for interactive roadmaps
- **Axios** for API communication
- **React Router** for navigation
- **Socket.io** for real-time features

#### Key Components

1. **Authentication System**
```javascript
// services/auth.js
export const login = async (credentials) => {
  const response = await api.post('/auth/login', credentials);
  localStorage.setItem('token', response.data.token);
  return response.data;
};

export const logout = () => {
  localStorage.removeItem('token');
  window.location.href = '/login';
};

export const getUser = () => {
  const token = localStorage.getItem('token');
  return token ? JSON.parse(atob(token.split('.')[1])) : null;
};
```

2. **Roadmap Visualization**
```javascript
// components/roadmap/RoadmapGraph.jsx
import ReactFlow, { Controls, Background } from 'react-flow-renderer';

const RoadmapGraph = ({ nodes, edges, onNodeClick }) => {
  return (
    <div className="h-96 w-full">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodeClick={onNodeClick}
        fitView
      >
        <Controls />
        <Background />
      </ReactFlow>
    </div>
  );
};
```

3. **AI Assistant Chat**
```javascript
// components/chat/ChatBot.jsx
const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const sendMessage = async () => {
    const response = await api.post('/ai-assistant/chat', {
      message: input,
      context: messages.slice(-5)
    });
    
    setMessages([...messages, 
      { role: 'user', content: input },
      { role: 'assistant', content: response.data.message }
    ]);
    setInput('');
  };

  return (
    <div className="chat-container">
      {/* Chat implementation */}
    </div>
  );
};
```

#### Development Commands
```bash
# Start development server
npm run dev

# Run tests
npm test

# Build for production
npm run build

# Type checking
npm run type-check

# Linting
npm run lint
```

### Backend Development

#### Tech Stack
- **Python FastAPI** for API services
- **Node.js Express** for real-time features
- **PostgreSQL** for relational data
- **Redis** for caching and sessions
- **MongoDB** for content and chat history
- **Celery** for background tasks
- **WebSockets** for real-time communication

#### Service Implementation Example

1. **Authentication Service**
```python
# services/auth/app.py
from fastapi import FastAPI, HTTPException, Depends
from fastapi.security import HTTPBearer
import jwt
from datetime import datetime, timedelta

app = FastAPI()
security = HTTPBearer()

@app.post("/login")
async def login(credentials: LoginCredentials):
    user = authenticate_user(credentials.username, credentials.password)
    if not user:
        raise HTTPException(status_code=401, detail="Invalid credentials")
    
    token = create_access_token({"sub": user.id, "role": user.role})
    return {"access_token": token, "token_type": "bearer"}
```

2. **Learning Engine Service**
```python
# services/learning-engine/app.py
from fastapi import FastAPI
import numpy as np
from sklearn.linear_model import LogisticRegression

app = FastAPI()

@app.post("/generate-roadmap")
async def generate_roadmap(student_id: str, course_id: str):
    # AI logic for generating personalized roadmap
    student_data = get_student_performance(student_id)
    course_syllabus = get_course_syllabus(course_id)
    
    roadmap = ai_generate_roadmap(student_data, course_syllabus)
    return {"roadmap": roadmap}

def ai_generate_roadmap(student_data, syllabus):
    # Implementation of AI roadmap generation
    pass
```

3. **Quiz Service**
```python
# services/quiz/app.py
from fastapi import FastAPI, WebSocket
import asyncio

app = FastAPI()

@app.websocket("/quiz/{quiz_id}")
async def quiz_websocket(websocket: WebSocket, quiz_id: str):
    await websocket.accept()
    
    # Adaptive quiz logic
    while True:
        data = await websocket.receive_json()
        response = process_quiz_response(data)
        await websocket.send_json(response)
```

#### Development Commands
```bash
# Start all services
docker-compose up -d

# View service logs
docker-compose logs -f [service-name]

# Run specific service
cd services/auth && python app.py

# Run tests
pytest tests/

# Database migrations
alembic upgrade head
```

### AI Agents Development

#### Agent Architecture
Each AI agent is implemented as an independent service that communicates via message queues or direct API calls.

```python
# ai-agents/base_agent.py
from abc import ABC, abstractmethod
import asyncio
import json

class BaseAgent(ABC):
    def __init__(self, name: str):
        self.name = name
        self.is_active = False
    
    @abstractmethod
    async def process_message(self, message: dict):
        pass
    
    async def start(self):
        self.is_active = True
        await self.listen_for_messages()
    
    async def listen_for_messages(self):
        while self.is_active:
            # Message queue implementation
            await asyncio.sleep(0.1)
```

#### Example Agent Implementation
```python
# ai-agents/study_planner_agent.py
from base_agent import BaseAgent
import numpy as np
from sklearn.cluster import KMeans

class StudyPlannerAgent(BaseAgent):
    def __init__(self):
        super().__init__("StudyPlannerAgent")
        self.ml_model = self.load_model()
    
    async def process_message(self, message: dict):
        if message["type"] == "generate_roadmap":
            return await self.generate_roadmap(message["data"])
    
    async def generate_roadmap(self, student_data: dict):
        # AI logic for roadmap generation
        difficulty_level = self.assess_difficulty(student_data)
        learning_path = self.create_learning_path(difficulty_level)
        
        return {
            "roadmap": learning_path,
            "difficulty": difficulty_level,
            "estimated_completion": self.estimate_completion_time(learning_path)
        }
    
    def assess_difficulty(self, student_data: dict):
        # ML model to assess appropriate difficulty
        features = self.extract_features(student_data)
        return self.ml_model.predict([features])[0]
```

## 🔧 Configuration

### Environment Variables

#### Frontend Environment (`.env`)
```bash
REACT_APP_API_URL=http://localhost:8000
REACT_APP_WS_URL=ws://localhost:8000
REACT_APP_GROQ_API_KEY=your_groq_api_key
REACT_APP_ENVIRONMENT=development
REACT_APP_ENABLE_MOCK_DATA=true
```

#### Backend Environment (`.env`)
```bash
# Database
DATABASE_URL=postgresql://user:password@localhost:5432/edunexus
REDIS_URL=redis://localhost:6379
MONGODB_URL=mongodb://localhost:27017/edunexus

# Authentication
JWT_SECRET=your_jwt_secret_key
JWT_EXPIRATION=24h
REFRESH_TOKEN_EXPIRATION=7d

# AI Services
OPENAI_API_KEY=your_openai_api_key
GROQ_API_KEY=your_groq_api_key
HUGGINGFACE_API_KEY=your_huggingface_api_key

# External Services
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USERNAME=your_email@gmail.com
SMTP_PASSWORD=your_app_password

# Security
CORS_ORIGINS=http://localhost:3000,https://yourdomain.com
RATE_LIMIT_REQUESTS=100
RATE_LIMIT_WINDOW=3600

# Monitoring
SENTRY_DSN=your_sentry_dsn
LOG_LEVEL=INFO
```

### Docker Configuration

#### Docker Compose (Development)
```yaml
# docker-compose.dev.yml
version: '3.8'

services:
  frontend:
    build:
      context: ./frontend
      dockerfile: Dockerfile.dev
    ports:
      - "3000:3000"
    volumes:
      - ./frontend:/app
      - /app/node_modules
    environment:
      - REACT_APP_API_URL=http://localhost:8000

  backend:
    build:
      context: ./backend
      dockerfile: Dockerfile.dev
    ports:
      - "8000:8000"
    volumes:
      - ./backend:/app
    environment:
      - DATABASE_URL=postgresql://postgres:password@db:5432/edunexus
    depends_on:
      - db
      - redis

  db:
    image: postgres:14
    environment:
      POSTGRES_DB: edunexus
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: password
    volumes:
      - postgres_data:/var/lib/postgresql/data
    ports:
      - "5432:5432"

  redis:
    image: redis:6-alpine
    ports:
      - "6379:6379"

volumes:
  postgres_data:
```

## 🧪 Testing

### Test Structure
```bash
tests/
├── unit/                    # Unit tests
│   ├── frontend/
│   │   ├── components/
│   │   └── services/
│   └── backend/
│       ├── auth/
│       ├── quiz/
│       └── learning-engine/
├── integration/             # Integration tests
│   ├── api/
│   └── database/
└── e2e/                     # End-to-end tests
    ├── student-journey/
    └── professor-workflow/
```

### Running Tests
```bash
# Frontend tests
cd frontend && npm test

# Backend tests
cd backend && pytest

# E2E tests
npm run test:e2e

# All tests
npm run test:all
```

### Test Examples
```javascript
// frontend/src/components/__tests__/Dashboard.test.jsx
import { render, screen } from '@testing-library/react';
import Dashboard from '../Dashboard';

test('renders dashboard with course cards', () => {
  render(<Dashboard />);
  expect(screen.getByText('My Courses')).toBeInTheDocument();
});
```

```python
# backend/tests/test_auth.py
import pytest
from fastapi.testclient import TestClient
from services.auth.app import app

client = TestClient(app)

def test_login_success():
    response = client.post("/login", json={
        "username": "test@example.com",
        "password": "testpassword"
    })
    assert response.status_code == 200
    assert "access_token" in response.json()
```

## 🚀 Deployment

### Production Deployment

#### Docker Production Build
```bash
# Build production images
docker-compose -f docker-compose.prod.yml build

# Deploy to production
docker-compose -f docker-compose.prod.yml up -d

# Health check
docker-compose ps
```

#### Kubernetes Deployment
```bash
# Apply Kubernetes manifests
kubectl apply -f infrastructure/k8s/

# Check deployment status
kubectl get pods
kubectl get services
```

### Monitoring and Logging

#### Health Checks
```bash
# API Gateway health
curl http://localhost:8000/health

# Individual service health
curl http://localhost:8001/auth/health
curl http://localhost:8002/quiz/health
```

#### Monitoring Stack
- **Prometheus** for metrics collection
- **Grafana** for visualization
- **ELK Stack** for log management
- **Sentry** for error tracking

## 📚 API Documentation

### Authentication Endpoints
```bash
POST /auth/login          # User login
POST /auth/logout         # User logout
POST /auth/refresh        # Refresh token
GET  /auth/profile        # Get user profile
```

### Student Endpoints
```bash
GET  /student/dashboard   # Student dashboard data
GET  /student/roadmap     # Learning roadmap
POST /student/progress    # Update progress
GET  /student/courses     # Enrolled courses
```

### Quiz Endpoints
```bash
GET  /quiz/list          # Available quizzes
POST /quiz/start         # Start quiz session
POST /quiz/submit        # Submit quiz answers
GET  /quiz/results       # Quiz results
```

### AI Assistant Endpoints
```bash
POST /ai/chat            # Chat with AI assistant
GET  /ai/suggestions     # Get learning suggestions
POST /ai/feedback        # Provide feedback
```

### Professor Endpoints
```bash
GET  /professor/dashboard    # Professor dashboard
GET  /professor/students     # Student list
POST /professor/quiz         # Create quiz
GET  /professor/analytics    # Student analytics
```

## 🤝 Contributing

### Development Workflow

1. **Fork the Repository**
2. **Create Feature Branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Make Changes and Test**
   ```bash
   npm run test
   npm run lint
   ```
4. **Commit Changes**
   ```bash
   git commit -m "Add: your feature description"
   ```
5. **Push and Create PR**
   ```bash
   git push origin feature/your-feature-name
   ```

### Code Standards

#### Frontend
- Use TypeScript for type safety
- Follow React best practices
- Use functional components with hooks
- Implement proper error boundaries
- Follow accessibility guidelines (WCAG 2.1)

#### Backend
- Use Python type hints
- Follow PEP 8 style guide
- Implement proper error handling
- Use async/await for I/O operations
- Write comprehensive tests

#### General
- Write clear commit messages
- Add documentation for new features
- Maintain test coverage above 80%
- Use semantic versioning

## 🔒 Security

### Security Measures
- **JWT Authentication** with refresh tokens
- **HTTPS Encryption** for all communications
- **Input Validation** and sanitization
- **Rate Limiting** on all endpoints
- **CORS Configuration** for cross-origin requests
- **SQL Injection Prevention** using parameterized queries
- **XSS Protection** with content security policies

### Anti-Cheating Features
- **Fullscreen Mode** enforcement during quizzes
- **Tab Switch Detection** with automatic warnings
- **Time Tracking** for each question
- **Randomized Questions** from question banks
- **Proctoring Integration** (optional)
- **Behavioral Analysis** for suspicious patterns

## 📈 Performance

### Optimization Strategies
- **Code Splitting** for faster loading
- **Lazy Loading** of components and routes
- **Caching** with Redis for frequent queries
- **Database Indexing** for optimal query performance
- **CDN Integration** for static assets
- **Compression** of API responses

### Monitoring Metrics
- **Response Time** for API endpoints
- **Database Query Performance**
- **User Engagement** metrics
- **Error Rates** and exceptions
- **System Resource Usage**

## 🌍 Internationalization

### Supported Languages
- English (default)
- French
- Spanish
- German
- Mandarin Chinese

### Implementation
```javascript
// i18n configuration
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: require('./locales/en.json') },
    fr: { translation: require('./locales/fr.json') },
    es: { translation: require('./locales/es.json') }
  },
  lng: 'en',
  fallbackLng: 'en'
});
```

## 🗺️ Roadmap

### Phase 1 (Current) - Core Platform
- ✅ Basic authentication system
- ✅ Student dashboard and roadmaps
- ✅ Quiz system with adaptive difficulty
- ✅ AI assistant integration
- ✅ Professor analytics dashboard

### Phase 2 - Enhanced AI Features
- 🔄 Advanced learning analytics
- 🔄 Personalized content recommendations
- 🔄 Predictive performance modeling
- 🔄 Natural language processing for content analysis
- 🔄 Voice-based interactions

### Phase 3 - Platform Expansion
- 📅 Mobile applications (iOS/Android)
- 📅 LMS integrations (Moodle, Canvas, Blackboard)
- 📅 Gamification elements
- 📅 Collaborative learning features
- 📅 Advanced proctoring capabilities

### Phase 4 - Enterprise Features
- 📅 Multi-tenant architecture
- 📅 White-label solutions
- 📅 Advanced reporting and analytics
- 📅 API marketplace for third-party integrations
- 📅 Enterprise SSO integration

## 🆘 Support

### Getting Help
- **Documentation**: [docs.edunexus.com](https://docs.edunexus.com)
- **GitHub Issues**: [Create an issue](https://github.com/yourusername/edunexus/issues)
- **Email Support**: support@edunexus.com
- **Community Discord**: [Join our Discord](https://discord.gg/edunexus)

### Troubleshooting

#### Common Issues

1. **Docker Container Won't Start**
   ```bash
   # Check logs
   docker-compose logs [service-name]
   
   # Rebuild containers
   docker-compose down
   docker-compose up --build
   ```

2. **Database Connection Issues**
   ```bash
   # Check database status
   docker-compose ps
   
   # Reset database
   docker-compose down -v
   docker-compose up -d
   ```

3. **AI Service Timeout**
   ```bash
   # Check API keys in environment
   echo $OPENAI_API_KEY
   
   # Restart AI services
   docker-compose restart ai-assistant
   ```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Contributors

- **Team Lead**: [Your Name](https://github.com/yourusername)
- **Frontend Developer**: [Developer Name](https://github.com/developer)
- **Backend Developer**: [Developer Name](https://github.com/developer)
- **AI Engineer**: [Developer Name](https://github.com/developer)
- **DevOps Engineer**: [Developer Name](https://github.com/developer)

## 🙏 Acknowledgments

- OpenAI for GPT API integration
- Groq for high-performance AI inference
- React Flow for interactive roadmap visualization
- FastAPI for robust backend development
- The education technology community for inspiration

---

**Built with ❤️ for better education worldwide**

*EduNexus - Empowering students and educators through AI-driven personalized learning*