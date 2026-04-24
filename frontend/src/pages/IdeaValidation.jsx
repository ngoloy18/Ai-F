import React, { useState } from 'react';
import { businessAPI } from '../api/client';
import { useBusinessStore } from '../store/businessStore';

export default function IdeaValidation() {
  const [formData, setFormData] = useState({
    idea: '',
    targetMarket: '',
    budget: '',
  });
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await businessAPI.validateIdea({
        idea: formData.idea,
        target_market: formData.targetMarket,
        budget: formData.budget,
      });
      setResult(response.data);
    } catch (error) {
      console.error('Error validating idea:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Validate Your Business Idea</h2>
      
      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow p-6 mb-6">
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Business Idea</label>
          <textarea
            value={formData.idea}
            onChange={(e) => setFormData({ ...formData, idea: e.target.value })}
            placeholder="Describe your business idea..."
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            rows="4"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Target Market</label>
          <input
            type="text"
            value={formData.targetMarket}
            onChange={(e) => setFormData({ ...formData, targetMarket: e.target.value })}
            placeholder="e.g., Young professionals, small businesses"
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 font-semibold mb-2">Initial Budget</label>
          <input
            type="text"
            value={formData.budget}
            onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
            placeholder="e.g., $50,000 - $100,000"
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="btn-primary w-full"
        >
          {loading ? 'Analyzing...' : 'Validate Idea'}
        </button>
      </form>

      {result && (
        <div className="bg-gray-50 rounded-lg shadow p-6">
          <h3 className="text-2xl font-bold mb-4 text-gray-800">Analysis Results</h3>
          <div className="bg-white p-4 rounded border-l-4 border-blue-500">
            <pre className="whitespace-pre-wrap text-gray-700">{result.analysis}</pre>
          </div>
        </div>
      )}
    </div>
  );
}
