# Merchant AI - Development Guide

## Project Overview

Merchant AI is a full-stack application designed to help entrepreneurs start and grow their businesses online. It provides AI-powered insights for business validation, planning, market research, and financial projections.

## Architecture

### Backend Architecture
```
FastAPI Server
├── AI Service (OpenAI/Claude)
├── Business Logic
└── API Endpoints
```

### Frontend Architecture
```
React App
├── Pages (Business Features)
├── Components (UI Elements)
├── API Client (Axios)
└── State Management (Zustand)
```

## Core Modules

### Backend

**main.py**: FastAPI application setup and routing
- CORS configuration
- Health check endpoint
- Route imports

**ai_service.py**: AI integration and business logic
- Business idea validation
- Plan creation
- Market research
- Financial projections

**config.py**: Configuration management
- Environment variables
- Settings validation
- API keys management

**routes/**: API endpoints
- `business_validation.py` - Idea validation endpoints
- `business_planning.py` - Plan creation endpoints
- `market_research.py` - Market analysis endpoints
- `financial_projections.py` - Financial forecasting endpoints

### Frontend

**pages/**: Main feature pages
- Dashboard: Overview and navigation
- IdeaValidation: Validate business ideas
- BusinessPlanning: Create business plans
- MarketResearch: Analyze markets
- FinancialProjections: Generate financial forecasts

**store/businessStore.js**: State management with Zustand
- Current idea state
- Business plan data
- Market research results
- Financial projections

**api/client.js**: API communication
- Axios instance configuration
- API method definitions
- Error handling

## Getting Started with Development

### 1. Clone Repository
```bash
git clone <repository-url>
cd Merchant-AI
```

### 2. Backend Development
```bash
cd backend
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
cp .env.example .env
# Edit .env with your API keys
python main.py
```

### 3. Frontend Development
```bash
cd frontend
npm install
npm run dev
```

## Adding New Features

### Adding a New Business Feature

1. **Create Backend Route**
   - Add file in `backend/routes/feature_name.py`
   - Define request/response models
   - Create endpoints

2. **Add AI Service Method**
   - Add method to `backend/ai_service.py`
   - Implement LLM prompting logic

3. **Create Frontend Page**
   - Add component in `frontend/src/pages/FeatureName.jsx`
   - Create form for user input
   - Display results

4. **Update Navigation**
   - Add route in `frontend/src/App.jsx`
   - Update navigation menu

5. **Update State Management**
   - Add store properties in `businessStore.js`

## API Documentation

### Validation Endpoint
```bash
POST /api/validation/idea
Content-Type: application/json

{
  "idea": "SaaS platform for scheduling",
  "target_market": "Small businesses",
  "budget": "$50,000"
}
```

### Planning Endpoint
```bash
POST /api/planning/create
Content-Type: application/json

{
  "idea": "SaaS platform for scheduling",
  "timeline": "12 months",
  "team_size": 3
}
```

### Research Endpoint
```bash
POST /api/research/market
Content-Type: application/json

{
  "industry": "SaaS",
  "target_demographic": "SMBs",
  "location": "North America"
}
```

### Financial Endpoint
```bash
POST /api/financial/projections
Content-Type: application/json

{
  "startup_cost": 50000,
  "monthly_revenue": 5000,
  "operating_costs": 2000,
  "years": 3
}
```

## Environment Setup

### Required Environment Variables

```env
# OpenAI Configuration
OPENAI_API_KEY=sk_test_...

# Database
DATABASE_URL=postgresql://user:password@localhost:5432/merchant_ai

# Frontend
FRONTEND_URL=http://localhost:3000

# Server
DEBUG=true
ENVIRONMENT=development
```

## Testing

### Backend Testing
```bash
cd backend
pytest tests/
```

### Frontend Testing
```bash
cd frontend
npm run test
```

## Deployment

### Local Docker Deployment
```bash
docker-compose up --build
```

### Production Deployment

**Backend (Heroku)**:
1. Create Heroku app
2. Set environment variables
3. Deploy via git

**Frontend (Vercel)**:
1. Connect GitHub repository
2. Deploy automatically on push
3. Configure environment variables

## Troubleshooting

### Backend Issues

**"ModuleNotFoundError: No module named 'fastapi'"**
```bash
pip install -r requirements.txt
```

**"OpenAI API key error"**
- Verify API key in .env
- Check API key is active
- Ensure proper format

### Frontend Issues

**"Cannot find module 'axios'"**
```bash
npm install
```

**"Port 3000 already in use"**
```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Mac/Linux
lsof -ti:3000 | xargs kill -9
```

## Performance Optimization

### Backend
- Implement caching for market data
- Use async/await for API calls
- Optimize database queries
- Add request rate limiting

### Frontend
- Code splitting with React.lazy()
- Image optimization
- CSS minification
- Lazy loading components

## Security Considerations

- Never commit API keys
- Validate user input on both ends
- Use HTTPS in production
- Implement rate limiting
- Add CSRF protection
- Sanitize user inputs

## Next Steps

1. Setup your development environment
2. Start with backend: `python main.py`
3. Start frontend in another terminal: `npm run dev`
4. Navigate to http://localhost:3000
5. Try validating a business idea!

Happy coding! 🚀
