"""
Financial Projections endpoints
"""

from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from ai_service import ai_service

router = APIRouter(prefix="/api/financial", tags=["Financial Projections"])

class FinancialProjectionRequest(BaseModel):
    startup_cost: float
    monthly_revenue: float
    operating_costs: float
    years: int = 3

@router.post("/projections")
async def get_financial_projections(request: FinancialProjectionRequest):
    """
    Generate financial projections
    """
    try:
        result = await ai_service.financial_projections(
            startup_cost=request.startup_cost,
            monthly_revenue=request.monthly_revenue,
            operating_costs=request.operating_costs,
            years=request.years
        )
        return result
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
