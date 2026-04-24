"""
Merchant AI - Startup Assistant Backend
Main FastAPI application entry point
"""

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
import os

# Load environment variables
load_dotenv()

# Initialize FastAPI app
app = FastAPI(
    title="Merchant AI API",
    description="AI-powered startup assistant for entrepreneurs",
    version="1.0.0"
)

# CORS middleware
origins = [
    "http://localhost:3000",
    "http://localhost:5173",
    "http://127.0.0.1:3000",
    os.getenv("FRONTEND_URL", "http://localhost:3000")
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Health check endpoint
@app.get("/health")
async def health_check():
    return {"status": "healthy", "service": "Merchant AI"}

# Import and register routes
from routes.business_validation import router as validation_router
from routes.business_planning import router as planning_router
from routes.market_research import router as research_router
from routes.financial_projections import router as financial_router

app.include_router(validation_router)
app.include_router(planning_router)
app.include_router(research_router)
app.include_router(financial_router)

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(
        "main:app",
        host="0.0.0.0",
        port=8000,
        reload=True
    )
