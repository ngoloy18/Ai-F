# Merchant AI - Quick Start Guide

## 🚀 Get Started in 5 Minutes

### Step 1: Install Backend Dependencies
```bash
cd backend
pip install -r requirements.txt
```

### Step 2: Configure API Key
```bash
cp .env.example .env
```
Edit `.env` and add your OpenAI API key:
```env
OPENAI_API_KEY=sk_test_your_key_here
```

### Step 3: Start Backend
```bash
python main.py
```
✅ Backend running at http://localhost:8000

### Step 4: Install Frontend Dependencies (new terminal)
```bash
cd frontend
npm install
```

### Step 5: Start Frontend
```bash
npm run dev
```
✅ Frontend running at http://localhost:3000

### Step 6: Open in Browser
Visit **http://localhost:3000** and start using Merchant AI!

---

## 📝 Usage

### Validate Your Business Idea
1. Click "Validate Idea" in the navigation
2. Enter your business idea, target market, and budget
3. Get AI-powered analysis

### Create a Business Plan
1. Go to "Plan" section
2. Describe your business and timeline
3. Receive comprehensive business plan

### Market Research
1. Navigate to "Research"
2. Enter industry, target demographic, location
3. Get market analysis and competitor insights

### Financial Projections
1. Click "Financial"
2. Input startup costs and revenue projections
3. See 3-year financial forecasts

---

## 🛠️ Troubleshooting

### Port Already in Use?
```bash
# Kill process on port 8000
# Windows
netstat -ano | findstr :8000
taskkill /PID <PID> /F

# Mac/Linux
lsof -ti:8000 | xargs kill -9
```

### Module Not Found?
```bash
# Activate virtual environment and reinstall
cd backend
source venv/bin/activate  # Mac/Linux
# or venv\Scripts\activate  # Windows
pip install -r requirements.txt
```

### API Key Error?
- Verify `.env` file exists in backend folder
- Check API key format (starts with `sk_`)
- Regenerate key at https://platform.openai.com

---

## 📚 Full Documentation

- **Setup Details**: See [docs/INSTALLATION.md](docs/INSTALLATION.md)
- **API Reference**: See [docs/API.md](docs/API.md)  
- **Development**: See [docs/DEVELOPMENT.md](docs/DEVELOPMENT.md)

---

## 🎯 Next Steps

1. ✅ Validate a business idea
2. 📋 Create your first business plan
3. 📊 Run market research
4. 💰 Generate financial projections
5. 📤 Export and share your results

---

**Need Help?**
- Check the docs folder
- Open an issue on GitHub
- Email support@merchantai.com

Happy Building! 🚀
