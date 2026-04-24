import React, { useState } from 'react';
import { businessAPI } from '../api/client';

export default function FinancialProjections() {
  const [formData, setFormData] = useState({
    startupCost: '',
    monthlyRevenue: '',
    operatingCosts: '',
    years: 3,
  });
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await businessAPI.financialProjections({
        startup_cost: parseFloat(formData.startupCost),
        monthly_revenue: parseFloat(formData.monthlyRevenue),
        operating_costs: parseFloat(formData.operatingCosts),
        years: parseInt(formData.years),
      });
      setResult(response.data);
    } catch (error) {
      console.error('Error generating projections:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Financial Projections</h2>
      
      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow p-6 mb-6">
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Initial Startup Cost ($)</label>
          <input
            type="number"
            value={formData.startupCost}
            onChange={(e) => setFormData({ ...formData, startupCost: e.target.value })}
            placeholder="e.g., 50000"
            step="1000"
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Projected Monthly Revenue ($)</label>
          <input
            type="number"
            value={formData.monthlyRevenue}
            onChange={(e) => setFormData({ ...formData, monthlyRevenue: e.target.value })}
            placeholder="e.g., 5000"
            step="100"
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Monthly Operating Costs ($)</label>
          <input
            type="number"
            value={formData.operatingCosts}
            onChange={(e) => setFormData({ ...formData, operatingCosts: e.target.value })}
            placeholder="e.g., 2000"
            step="100"
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 font-semibold mb-2">Projection Period (Years)</label>
          <select
            value={formData.years}
            onChange={(e) => setFormData({ ...formData, years: e.target.value })}
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>5</option>
          </select>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="btn-primary w-full"
        >
          {loading ? 'Generating...' : 'Generate Projections'}
        </button>
      </form>

      {result && (
        <div className="bg-gray-50 rounded-lg shadow p-6">
          <h3 className="text-2xl font-bold mb-4 text-gray-800">Financial Projections</h3>
          <div className="bg-white p-4 rounded border-l-4 border-yellow-500">
            <pre className="whitespace-pre-wrap text-gray-700">{result.financial_projections}</pre>
          </div>
        </div>
      )}
    </div>
  );
}
