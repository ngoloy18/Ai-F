# 🚀 Merchant AI - Startup Assistant

**Merchant AI** is a comprehensive AI-powered platform designed to help entrepreneurs validate business ideas, create strategic plans, conduct market research, and generate financial projections.

## Features

✅ **Business Idea Validation** - Get AI feedback on feasibility, strengths, weaknesses, and opportunities
✅ **Business Planning** - Create comprehensive business plans with strategic guidance
✅ **Market Research** - Analyze markets, competitors, and target demographics
✅ **Financial Projections** - Generate detailed financial forecasts and analysis
✅ **Web & Mobile Ready** - Responsive design for all devices

## Tech Stack

- **Backend**: Python + FastAPI
- **Frontend**: React + Vite + Tailwind CSS
- **AI**: OpenAI/Claude API
- **Database**: PostgreSQL (configurable)
- **Deployment**: Docker-ready

## Project Structure

```
Merchant-AI/
├── backend/
│   ├── main.py                 # FastAPI app entry point
│   ├── config.py               # Configuration settings
│   ├── ai_service.py           # AI service with LLM integration
│   ├── routes/
│   │   ├── business_validation.py
│   │   ├── business_planning.py
│   │   ├── market_research.py
│   │   └── financial_projections.py
│   ├── requirements.txt
│   └── .env.example
├── frontend/
│   ├── src/
│   │   ├── pages/              # Page components
│   │   ├── components/         # Reusable components
│   │   ├── api/                # API client
│   │   ├── store/              # State management
│   │   └── App.jsx
│   ├── package.json
│   ├── vite.config.js
│   └── tailwind.config.js
├── docs/
│   ├── API.md                  # API documentation
│   ├── INSTALLATION.md         # Setup guide
│   └── DEVELOPMENT.md          # Development guide
└── README.md
```

## Quick Start

### Prerequisites
- Python 3.8+
- Node.js 16+
- OpenAI/Claude API key

### Backend Setup

```bash
cd backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
cp .env.example .env
# Update .env with your API keys
python main.py
```

Backend runs on `http://localhost:8000`

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on `http://localhost:3000`

## API Endpoints

### Business Idea Validation
- `POST /api/validation/idea`
  - Body: `{ idea, target_market, budget }`

### Business Planning
- `POST /api/planning/create`
  - Body: `{ idea, timeline, team_size }`

### Market Research
- `POST /api/research/market`
  - Body: `{ industry, target_demographic, location }`

### Financial Projections
- `POST /api/financial/projections`
  - Body: `{ startup_cost, monthly_revenue, operating_costs, years }`

See [docs/API.md](docs/API.md) for complete API documentation.

## Configuration

Create a `.env` file in the backend directory:

```env
OPENAI_API_KEY=your_api_key_here
CLAUDE_API_KEY=your_claude_key_here
DATABASE_URL=sqlite:///./merchant_ai.db
FRONTEND_URL=http://localhost:3000
DEBUG=true
```

See [docs/INSTALLATION.md](docs/INSTALLATION.md) for detailed setup instructions.

## Usage Examples

### 1. Validate a Business Idea
Navigate to `/validation` and submit:
- Business idea description
- Target market information
- Initial budget

Receive AI-powered analysis with feasibility scores and recommendations.

### 2. Create a Business Plan
Go to `/planning` and provide:
- Detailed business description
- Launch timeline
- Team size

Get a comprehensive business plan with strategic guidance.

### 3. Market Research
Visit `/research` to analyze:
- Industry dynamics
- Target demographic profiles
- Geographic opportunities

### 4. Financial Planning
Use `/financial` for:
- Startup cost projections
- Revenue forecasting
- Break-even analysis

## Development

### Adding New Features

1. **Backend**: Add routes in `routes/` directory
2. **Frontend**: Create page components in `src/pages/`
3. **State**: Update `businessStore.js` for state management
4. **API**: Update `api/client.js` with new endpoints

See [docs/DEVELOPMENT.md](docs/DEVELOPMENT.md) for detailed development guide.

## Deployment

### Docker Deployment

```bash
docker-compose up --build
```

### Vercel (Frontend)
```bash
npm run build
vercel
```

### Heroku (Backend)
```bash
git push heroku main
```

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `OPENAI_API_KEY` | OpenAI API key | Required |
| `DATABASE_URL` | Database connection string | sqlite |
| `FRONTEND_URL` | Frontend URL | http://localhost:3000 |
| `DEBUG` | Debug mode | false |

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## Documentation

- [Installation Guide](docs/INSTALLATION.md) - Setup and configuration
- [Development Guide](docs/DEVELOPMENT.md) - Architecture and development
- [API Reference](docs/API.md) - Complete API documentation

## Support

For issues and questions:
- Open a GitHub issue
- Email: support@merchantai.com
- Check [docs/](docs/) for more information

## Roadmap

- [ ] Database integration for saving projects
- [ ] User authentication & profiles
- [ ] Export to PDF/Excel
- [ ] Real-time collaboration
- [ ] Mobile native apps (iOS/Android)
- [ ] Advanced analytics dashboard
- [ ] Integration with funding platforms

## Future Enhancements

- Multi-language support
- Advanced competitor analysis
- Investor pitch deck generation
- Business metric benchmarking
- Integration with accounting software
- Team collaboration features
- Video tutorials and guides

## License

MIT License - See LICENSE file for details

---

**Built with ❤️ to help entrepreneurs succeed**
