"""
Configuration module for Merchant AI backend
"""

from pydantic_settings import BaseSettings
from typing import Optional

class Settings(BaseSettings):
    # App settings
    app_name: str = "Merchant AI"
    debug: bool = False
    environment: str = "development"
    
    # LLM Configuration
    llm_provider: str = "openai"
    openai_api_key: Optional[str] = None
    claude_api_key: Optional[str] = None
    
    # Database
    database_url: str = "sqlite:///./merchant_ai.db"
    database_echo: bool = False
    
    # Frontend
    frontend_url: str = "http://localhost:3000"
    
    # API Keys for external services
    rapidapi_key: Optional[str] = None
    serpapi_key: Optional[str] = None
    
    class Config:
        env_file = ".env"
        case_sensitive = False

settings = Settings()
