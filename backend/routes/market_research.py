"""
Market Research endpoints
"""

from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from ai_service import ai_service

router = APIRouter(prefix="/api/research", tags=["Market Research"])

class MarketResearchRequest(BaseModel):
    industry: str
    target_demographic: str
    location: str

@router.post("/market")
async def research_market(request: MarketResearchRequest):
    """
    Perform market research and competitor analysis
    """
    try:
        result = await ai_service.market_research(
            industry=request.industry,
            target_demographic=request.target_demographic,
            location=request.location
        )
        return result
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
