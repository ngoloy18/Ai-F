# Merchant AI - Installation & Setup Guide

## System Requirements

- **Python**: 3.8 or higher
- **Node.js**: 16 or higher  
- **npm**: 8 or higher
- **PostgreSQL**: 12+ (optional, SQLite default)
- **Git**: Latest version

## Step-by-Step Installation

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/Merchant-AI.git
cd Merchant-AI
```

### 2. Backend Setup

#### 2.1 Create Virtual Environment
```bash
cd backend

# Windows
python -m venv venv
venv\Scripts\activate

# Mac/Linux
python3 -m venv venv
source venv/bin/activate
```

#### 2.2 Install Dependencies
```bash
pip install -r requirements.txt
```

#### 2.3 Configure Environment
```bash
cp .env.example .env
```

Edit `.env` file:
```env
OPENAI_API_KEY=your_openai_api_key_here
LLM_PROVIDER=openai
DATABASE_URL=sqlite:///./merchant_ai.db
DEBUG=true
ENVIRONMENT=development
```

#### 2.4 Run Backend
```bash
python main.py
```

Backend will start at `http://localhost:8000`

### 3. Frontend Setup

#### 3.1 Install Dependencies
```bash
cd frontend
npm install
```

#### 3.2 Start Development Server
```bash
npm run dev
```

Frontend will start at `http://localhost:3000`

## Getting API Keys

### OpenAI API Key

1. Visit [OpenAI Platform](https://platform.openai.com)
2. Sign up or log in
3. Go to API keys section
4. Create new API key
5. Copy and paste in `.env` file

### Claude API Key (Optional)

1. Visit [Anthropic Claude](https://console.anthropic.com)
2. Create account
3. Navigate to API keys
4. Generate API key
5. Add to `.env` if using Claude

## Docker Setup

### Prerequisites
- Docker Desktop installed
- Docker Compose

### Deploy with Docker

```bash
# Build and start containers
docker-compose up --build

# In separate terminal, if needed
docker-compose exec backend python -m pytest
docker-compose exec frontend npm run test

# Stop containers
docker-compose down
```

Access:
- Frontend: http://localhost:3000
- Backend: http://localhost:8000
- Database: localhost:5432

## Verify Installation

### Backend Check
```bash
curl http://localhost:8000/health
# Expected response: {"status": "healthy", "service": "Merchant AI"}
```

### Frontend Check
Open http://localhost:3000 in browser
- You should see the Merchant AI dashboard
- Navigation menu should load

## Database Setup

### Using SQLite (Default)
No setup needed - SQLite database creates automatically.

### Using PostgreSQL

1. Install PostgreSQL
2. Create database:
```bash
psql -U postgres
CREATE DATABASE merchant_ai;
```

3. Update `.env`:
```env
DATABASE_URL=postgresql://postgres:password@localhost:5432/merchant_ai
```

4. Run migrations (when available):
```bash
python migrate.py
```

## Troubleshooting

### Python Version Issue
```bash
# Check Python version
python --version

# Install Python 3.8+
# Download from python.org or use package manager
```

### Port Already in Use
```bash
# Find process using port 8000
# Windows
netstat -ano | findstr :8000

# Kill process
taskkill /PID <PID> /F

# Mac/Linux
lsof -ti:8000 | xargs kill -9
```

### Module Not Found Error
```bash
# Ensure virtual environment is activated
# Windows: venv\Scripts\activate
# Mac/Linux: source venv/bin/activate

# Reinstall dependencies
pip install -r requirements.txt
```

### CORS Error
If you get CORS errors:
- Verify backend is running on http://localhost:8000
- Verify frontend is running on http://localhost:3000
- Check CORS middleware in `backend/main.py`

### API Key Error
```bash
# Verify .env file exists in backend directory
# Check API key format (should start with sk- for OpenAI)
# Regenerate API key if needed
```

## Quick Start Script

### Windows
```batch
@echo off
cd backend
python -m venv venv
call venv\Scripts\activate
pip install -r requirements.txt
cp .env.example .env
echo Edit .env with your API keys
pause
start python main.py

cd ..\frontend
npm install
npm run dev
```

### Mac/Linux
```bash
#!/bin/bash
cd backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
cp .env.example .env
echo "Edit .env with your API keys"
python main.py &

cd ../frontend
npm install
npm run dev
```

## Next Steps

1. ✅ Backend running at http://localhost:8000
2. ✅ Frontend running at http://localhost:3000
3. ✅ API keys configured
4. 👉 Visit http://localhost:3000 to start using Merchant AI

## Support

- Check [DEVELOPMENT.md](DEVELOPMENT.md) for development guide
- Review API documentation in [docs/](docs/)
- Open an issue on GitHub for problems

## Happy Building! 🚀
