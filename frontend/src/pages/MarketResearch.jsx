import React, { useState } from 'react';
import { businessAPI } from '../api/client';

export default function MarketResearch() {
  const [formData, setFormData] = useState({
    industry: '',
    targetDemographic: '',
    location: '',
  });
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await businessAPI.marketResearch({
        industry: formData.industry,
        target_demographic: formData.targetDemographic,
        location: formData.location,
      });
      setResult(response.data);
    } catch (error) {
      console.error('Error performing market research:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Market Research & Analysis</h2>
      
      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow p-6 mb-6">
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Industry</label>
          <input
            type="text"
            value={formData.industry}
            onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
            placeholder="e.g., SaaS, E-commerce, Health & Wellness"
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Target Demographic</label>
          <input
            type="text"
            value={formData.targetDemographic}
            onChange={(e) => setFormData({ ...formData, targetDemographic: e.target.value })}
            placeholder="e.g., Ages 25-35, entrepreneurs, tech-savvy"
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 font-semibold mb-2">Location/Region</label>
          <input
            type="text"
            value={formData.location}
            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
            placeholder="e.g., North America, Southeast Asia, Global"
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="btn-primary w-full"
        >
          {loading ? 'Researching...' : 'Analyze Market'}
        </button>
      </form>

      {result && (
        <div className="bg-gray-50 rounded-lg shadow p-6">
          <h3 className="text-2xl font-bold mb-4 text-gray-800">Market Research Results</h3>
          <div className="bg-white p-4 rounded border-l-4 border-purple-500">
            <pre className="whitespace-pre-wrap text-gray-700">{result.market_research}</pre>
          </div>
        </div>
      )}
    </div>
  );
}
