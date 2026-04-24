"""
AI Service - Handles LLM interactions with OpenAI/Claude
"""

import os
from typing import Optional, List, Dict, Any
import openai
from config import settings

class AIService:
    def __init__(self):
        self.provider = settings.llm_provider
        if self.provider == "openai":
            openai.api_key = settings.openai_api_key
        else:
            # Claude or other providers
            self.api_key = settings.claude_api_key
    
    async def validate_business_idea(self, idea: str, target_market: str, budget: str) -> Dict[str, Any]:
        """
        Validate a business idea using AI
        Returns: feasibility score, strengths, weaknesses, opportunities, threats
        """
        prompt = f"""
        Analyze this business idea and provide comprehensive feedback:
        
        Business Idea: {idea}
        Target Market: {target_market}
        Initial Budget: {budget}
        
        Provide analysis in this format:
        1. Feasibility Score (0-100)
        2. Key Strengths (3-5 points)
        3. Potential Weaknesses (3-5 points)
        4. Market Opportunities (2-3 points)
        5. Threats to Consider (2-3 points)
        6. Initial Recommendations
        """
        
        response = await self._call_llm(prompt)
        return {"analysis": response, "idea": idea}
    
    async def create_business_plan(self, idea: str, timeline: str, team_size: int) -> Dict[str, Any]:
        """
        Create a comprehensive business plan
        """
        prompt = f"""
        Create a detailed business plan for:
        
        Business: {idea}
        Timeline: {timeline}
        Team Size: {team_size}
        
        Include sections:
        1. Executive Summary
        2. Business Description
        3. Market Analysis
        4. Organization & Management
        5. Marketing & Sales Strategy
        6. Funding Requirements
        7. Financial Projections (3-year)
        8. Risk Analysis & Mitigation
        """
        
        response = await self._call_llm(prompt)
        return {"business_plan": response}
    
    async def market_research(self, industry: str, target_demographic: str, location: str) -> Dict[str, Any]:
        """
        Perform market research and competitor analysis
        """
        prompt = f"""
        Conduct market research for:
        
        Industry: {industry}
        Target Demographic: {target_demographic}
        Location: {location}
        
        Provide:
        1. Market Size & Growth Trends
        2. Key Competitors & Analysis
        3. Market Gaps & Opportunities
        4. Customer Pain Points
        5. Industry Challenges
        6. Growth Potential Assessment
        """
        
        response = await self._call_llm(prompt)
        return {"market_research": response}
    
    async def financial_projections(self, startup_cost: float, monthly_revenue: float, 
                                   operating_costs: float, years: int = 3) -> Dict[str, Any]:
        """
        Generate financial projections
        """
        prompt = f"""
        Create 3-year financial projections:
        
        Initial Investment: ${startup_cost}
        Projected Monthly Revenue: ${monthly_revenue}
        Monthly Operating Costs: ${operating_costs}
        
        Generate:
        1. Monthly Cash Flow Projections (Year 1)
        2. Annual Profit & Loss Statement (3 years)
        3. Break-even Analysis
        4. Key Financial Metrics (ROI, Payback Period)
        5. Sensitivity Analysis (best case, worst case)
        6. Funding Requirements & Use of Funds
        """
        
        response = await self._call_llm(prompt)
        return {"financial_projections": response}
    
    async def _call_llm(self, prompt: str) -> str:
        """
        Internal method to call LLM
        """
        try:
            if self.provider == "openai":
                response = openai.ChatCompletion.create(
                    model="gpt-3.5-turbo",
                    messages=[{"role": "user", "content": prompt}],
                    temperature=0.7,
                    max_tokens=2000
                )
                return response.choices[0].message.content
            else:
                # Handle other providers
                return "LLM response"
        except Exception as e:
            # Return mock response for testing
            if "quota" in str(e).lower() or "billing" in str(e).lower():
                return f"""**DEMO MODE** (No OpenAI credits available)

This is a sample response showing what the AI would generate.

For a real response, please:
1. Add a payment method to https://platform.openai.com/account/billing/overview
2. Restart the backend
3. Try again

Sample analysis includes:
- Market opportunity assessment
- Competitive analysis
- Growth potential
- Implementation roadmap
- Success metrics"""
            return f"Error: {str(e)}"

# Singleton instance
ai_service = AIService()
