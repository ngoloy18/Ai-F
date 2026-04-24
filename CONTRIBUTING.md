# Contributing to Merchant AI

Thank you for your interest in contributing to Merchant AI! This document provides guidelines and instructions for contributing.

## Code of Conduct

- Be respectful and inclusive
- Provide constructive feedback
- Help others succeed
- Report issues responsibly

## How to Contribute

### 1. Report a Bug
- Check if bug already exists in Issues
- Provide clear description with steps to reproduce
- Include error messages and screenshots
- Specify your environment (OS, Python version, etc.)

### 2. Suggest a Feature
- Check if feature already suggested
- Explain the use case and benefits
- Provide examples if possible
- Discuss implementation approach

### 3. Submit Code

#### Fork and Clone
```bash
git clone https://github.com/yourusername/Merchant-AI.git
cd Merchant-AI
git checkout -b feature/your-feature-name
```

#### Make Changes
- Follow existing code style
- Write clear commit messages
- Add tests for new features
- Update documentation

#### Backend Development
```bash
cd backend
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

#### Frontend Development
```bash
cd frontend
npm install
npm run dev
```

#### Commit and Push
```bash
git add .
git commit -m "feat: add new feature description"
git push origin feature/your-feature-name
```

#### Submit Pull Request
- Provide clear description of changes
- Link related issues
- Include screenshots if applicable
- Ensure tests pass

## Code Style

### Python (Backend)
- Follow PEP 8
- Use type hints
- Write docstrings
- Maximum line length: 100 characters

Example:
```python
def validate_business_idea(idea: str, market: str) -> Dict[str, Any]:
    """
    Validate a business idea using AI.
    
    Args:
        idea: Description of the business idea
        market: Target market information
    
    Returns:
        Dictionary with analysis results
    """
    # Implementation here
    pass
```

### JavaScript (Frontend)
- Use ES6+ syntax
- Use meaningful variable names
- Comment complex logic
- Use functional components with hooks

Example:
```javascript
function IdeaValidation() {
  const [formData, setFormData] = useState({
    idea: '',
    targetMarket: ''
  });

  // Handler functions and JSX
}
```

## Pull Request Process

1. Update documentation if needed
2. Add tests for new functionality
3. Ensure all tests pass locally
4. Describe changes in PR body
5. Address review comments
6. Ensure branch is up to date with main

## Testing

### Backend Tests
```bash
cd backend
pytest
pytest -v  # Verbose output
pytest --cov  # With coverage
```

### Frontend Tests
```bash
cd frontend
npm run test
npm run test -- --coverage
```

## Documentation

- Update README for major changes
- Add docstrings to functions
- Comment complex logic
- Update API.md if adding endpoints
- Add to DEVELOPMENT.md if architecture changes

## Commit Message Guidelines

Format: `<type>: <description>`

Types:
- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation
- `style:` - Code style (no logic change)
- `refactor:` - Code refactoring
- `test:` - Adding tests
- `chore:` - Maintenance

Examples:
```
feat: add export to PDF functionality
fix: resolve CORS error on market research API
docs: update API documentation
refactor: optimize AI service performance
```

## Review Process

1. Automated tests must pass
2. Code review by maintainers
3. Address feedback
4. Re-review if major changes
5. Merge when approved

## Feature Development Checklist

- [ ] Feature branch created
- [ ] Code written with tests
- [ ] Documentation updated
- [ ] All tests passing
- [ ] No linting errors
- [ ] Commit messages clear
- [ ] PR description detailed
- [ ] Screenshots/examples provided
- [ ] Review comments addressed
- [ ] Ready to merge

## Release Process

1. Version bump in package.json and pyproject.toml
2. Update CHANGELOG
3. Create release notes
4. Tag release in Git
5. Deploy to production

## Getting Help

- Check existing documentation
- Search closed issues for similar problems
- Ask in discussions
- Email maintainers

## Areas for Contribution

- Bug fixes
- Feature development
- Documentation improvements
- Test coverage
- Performance optimization
- UI/UX improvements
- Translations
- Examples and tutorials

## Thank You!

We appreciate all contributions to Merchant AI. Together, we're helping entrepreneurs succeed! 🚀

---

Questions? Open an issue or contact the team.
