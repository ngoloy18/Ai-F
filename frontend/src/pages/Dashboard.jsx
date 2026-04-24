import React from 'react';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  const features = [
    {
      icon: '💡',
      title: 'Idea Validation',
      description: 'Get AI-powered feedback on your business idea',
      path: '/validation'
    },
    {
      icon: '📋',
      title: 'Business Planning',
      description: 'Create a comprehensive business plan',
      path: '/planning'
    },
    {
      icon: '📊',
      title: 'Market Research',
      description: 'Analyze markets and competitors',
      path: '/research'
    },
    {
      icon: '💰',
      title: 'Financial Projections',
      description: 'Generate financial forecasts',
      path: '/financial'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <div className="bg-white shadow">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <h1 className="text-4xl font-bold text-gray-800">🚀 Merchant AI</h1>
          <p className="text-xl text-gray-600 mt-2">Your AI-Powered Startup Assistant</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Welcome to Merchant AI</h2>
          <p className="text-lg text-gray-600">
            Transform your business ideas into reality with AI-powered guidance. From validating your concept 
            to planning finances, we're here to help every step of the way.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {features.map((feature, index) => (
            <Link
              key={index}
              to={feature.path}
              className="bg-white rounded-lg shadow-lg hover:shadow-xl transition p-8 group"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition">
                {feature.title}
              </h3>
              <p className="text-gray-600 mt-3">{feature.description}</p>
              <div className="mt-4 text-blue-600 font-semibold group-hover:translate-x-2 transition">
                Get Started →
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg shadow-lg p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-3">Ready to Start Your Journey?</h3>
          <p className="mb-6">Let's validate your business idea and create a path to success.</p>
          <Link
            to="/validation"
            className="inline-block bg-white text-blue-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition"
          >
            Validate Your Idea
          </Link>
        </div>
      </div>
    </div>
  );
}
