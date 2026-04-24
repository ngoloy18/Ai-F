# Merchant AI - API Reference

## Base URL
- Development: `http://localhost:8000/api`
- Production: `https://api.merchantai.com/api`

## Authentication
Currently uses no authentication (development phase).
*Note: Add JWT authentication in production.*

---

## 1. Business Idea Validation

### Validate Business Idea
**POST** `/validation/idea`

**Request**
```json
{
  "idea": "An AI-powered scheduling platform for small businesses",
  "target_market": "Small business owners aged 25-45",
  "budget": "$75,000"
}
```

**Response**
```json
{
  "analysis": "Feasibility Score: 85/100\n\nKey Strengths:\n1. Large addressable market\n2. Clear use case...",
  "idea": "An AI-powered scheduling platform for small businesses"
}
```

**Status Codes**
- 200: Success
- 400: Invalid request
- 500: Server error

---

## 2. Business Planning

### Create Business Plan
**POST** `/planning/create`

**Request**
```json
{
  "idea": "An AI-powered scheduling platform for small businesses",
  "timeline": "12 months",
  "team_size": 3
}
```

**Response**
```json
{
  "business_plan": "Executive Summary\n\nThis plan outlines...\n\n1. Executive Summary\n2. Business Description\n...",
  "created_at": "2024-01-15T10:30:00Z"
}
```

**Timeline Options**
- "3 months"
- "6 months"  
- "12 months"
- "24 months"

---

## 3. Market Research

### Conduct Market Research
**POST** `/research/market`

**Request**
```json
{
  "industry": "Software as a Service (SaaS)",
  "target_demographic": "Small and medium-sized businesses",
  "location": "North America"
}
```

**Response**
```json
{
  "market_research": "Market Size & Growth Trends:\nThe global SaaS market is valued at...\n\nKey Competitors:\n1. Company A\n2. Company B\n..."
}
```

**Supported Locations**
- North America
- Europe
- Asia Pacific
- Latin America
- Middle East & Africa
- Global

---

## 4. Financial Projections

### Generate Financial Projections
**POST** `/financial/projections`

**Request**
```json
{
  "startup_cost": 75000,
  "monthly_revenue": 8000,
  "operating_costs": 3500,
  "years": 3
}
```

**Response**
```json
{
  "financial_projections": "3-Year Financial Projections\n\nMonth 1-12 (Year 1):\nJanuary\n  Revenue: $8,000\n  Costs: $3,500\n  Profit: $4,500\n...\n\nBreak-even Analysis:\nBased on projections, break-even expected in Month 9",
  "timestamp": "2024-01-15T10:35:00Z"
}
```

**Parameters**
- `startup_cost`: Initial investment (number)
- `monthly_revenue`: Projected monthly revenue (number)
- `operating_costs`: Monthly operating costs (number)
- `years`: Projection period - 1, 2, 3, or 5 (default: 3)

---

## Error Responses

### 400 Bad Request
```json
{
  "detail": "Invalid request format. Please check your input."
}
```

### 500 Server Error
```json
{
  "detail": "An error occurred processing your request. Please try again."
}
```

---

## Rate Limiting
*To be implemented in production*

---

## Webhooks
*To be implemented in future release*

---

## Response Codes Summary

| Code | Meaning |
|------|---------|
| 200 | Success |
| 400 | Bad Request |
| 401 | Unauthorized |
| 404 | Not Found |
| 500 | Server Error |

---

## Example cURL Requests

### Validate Idea
```bash
curl -X POST http://localhost:8000/api/validation/idea \
  -H "Content-Type: application/json" \
  -d '{
    "idea": "Social media platform for businesses",
    "target_market": "B2B marketing teams",
    "budget": "$100,000"
  }'
```

### Create Business Plan
```bash
curl -X POST http://localhost:8000/api/planning/create \
  -H "Content-Type: application/json" \
  -d '{
    "idea": "Social media platform for businesses",
    "timeline": "12 months",
    "team_size": 5
  }'
```

### Market Research
```bash
curl -X POST http://localhost:8000/api/research/market \
  -H "Content-Type: application/json" \
  -d '{
    "industry": "Social Media",
    "target_demographic": "Marketing professionals",
    "location": "North America"
  }'
```

### Financial Projections
```bash
curl -X POST http://localhost:8000/api/financial/projections \
  -H "Content-Type: application/json" \
  -d '{
    "startup_cost": 100000,
    "monthly_revenue": 15000,
    "operating_costs": 5000,
    "years": 3
  }'
```

---

## API Versioning

Current version: **v1**

Future versions will be accessible at `/api/v2/`, etc.

---

## Support

For API issues or questions:
- Email: api-support@merchantai.com
- GitHub Issues: [Merchant AI Issues](https://github.com/merchantai/issues)
- Documentation: [Merchant AI Docs](https://docs.merchantai.com)

---

Last Updated: January 2024
