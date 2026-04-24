import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import IdeaValidation from './pages/IdeaValidation';
import BusinessPlanning from './pages/BusinessPlanning';
import MarketResearch from './pages/MarketResearch';
import FinancialProjections from './pages/FinancialProjections';
import './index.css';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-50">
        {/* Navigation */}
        <nav className="bg-white shadow-md">
          <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold text-blue-600">
              🚀 Merchant AI
            </Link>
            <div className="flex gap-6">
              <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium">Home</Link>
              <Link to="/validation" className="text-gray-700 hover:text-blue-600 font-medium">Validate Idea</Link>
              <Link to="/planning" className="text-gray-700 hover:text-blue-600 font-medium">Plan</Link>
              <Link to="/research" className="text-gray-700 hover:text-blue-600 font-medium">Research</Link>
              <Link to="/financial" className="text-gray-700 hover:text-blue-600 font-medium">Financial</Link>
            </div>
          </div>
        </nav>

        {/* Routes */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/validation" element={<IdeaValidation />} />
            <Route path="/planning" element={<BusinessPlanning />} />
            <Route path="/research" element={<MarketResearch />} />
            <Route path="/financial" element={<FinancialProjections />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-gray-800 text-white text-center py-6">
          <p>&copy; 2024 Merchant AI. Empowering entrepreneurs worldwide.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
