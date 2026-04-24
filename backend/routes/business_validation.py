"""
Business Idea Validation endpoints
"""

from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from ai_service import ai_service

router = APIRouter(prefix="/api/validation", tags=["Business Validation"])

class BusinessIdeaRequest(BaseModel):
    idea: str
    target_market: str
    budget: str

@router.post("/idea")
async def validate_idea(request: BusinessIdeaRequest):
    """
    Validate a business idea
    """
    try:
        result = await ai_service.validate_business_idea(
            idea=request.idea,
            target_market=request.target_market,
            budget=request.budget
        )
        return result
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
