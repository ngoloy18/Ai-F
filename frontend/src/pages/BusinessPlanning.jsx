import React, { useState } from 'react';
import { businessAPI } from '../api/client';

export default function BusinessPlanning() {
  const [formData, setFormData] = useState({
    idea: '',
    timeline: '12 months',
    teamSize: 1,
  });
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await businessAPI.createPlan({
        idea: formData.idea,
        timeline: formData.timeline,
        team_size: parseInt(formData.teamSize),
      });
      setResult(response.data);
    } catch (error) {
      console.error('Error creating business plan:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Create Business Plan</h2>
      
      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow p-6 mb-6">
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Business Description</label>
          <textarea
            value={formData.idea}
            onChange={(e) => setFormData({ ...formData, idea: e.target.value })}
            placeholder="Describe your business..."
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            rows="4"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Timeline</label>
          <select
            value={formData.timeline}
            onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          >
            <option>3 months</option>
            <option>6 months</option>
            <option>12 months</option>
            <option>24 months</option>
          </select>
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 font-semibold mb-2">Team Size</label>
          <input
            type="number"
            value={formData.teamSize}
            onChange={(e) => setFormData({ ...formData, teamSize: e.target.value })}
            min="1"
            max="100"
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="btn-primary w-full"
        >
          {loading ? 'Creating Plan...' : 'Generate Business Plan'}
        </button>
      </form>

      {result && (
        <div className="bg-gray-50 rounded-lg shadow p-6">
          <h3 className="text-2xl font-bold mb-4 text-gray-800">Your Business Plan</h3>
          <div className="bg-white p-4 rounded border-l-4 border-green-500">
            <pre className="whitespace-pre-wrap text-gray-700">{result.business_plan}</pre>
          </div>
        </div>
      )}
    </div>
  );
}
