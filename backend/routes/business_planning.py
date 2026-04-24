"""
Business Planning endpoints
"""

from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from ai_service import ai_service

router = APIRouter(prefix="/api/planning", tags=["Business Planning"])

class BusinessPlanRequest(BaseModel):
    idea: str
    timeline: str
    team_size: int

@router.post("/create")
async def create_business_plan(request: BusinessPlanRequest):
    """
    Create a comprehensive business plan
    """
    try:
        result = await ai_service.create_business_plan(
            idea=request.idea,
            timeline=request.timeline,
            team_size=request.team_size
        )
        return result
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
