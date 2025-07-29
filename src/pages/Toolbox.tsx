import React from 'react';
import { Wrench, Database, Calculator, Download } from 'lucide-react';

const Toolbox = () => {
  const tools = [
    {
      name: "Protein Calculator",
      description: "Calculate optimal protein content for different livestock feeds",
      icon: Calculator,
      color: "bg-blue-500",
      features: ["Feed optimization", "Cost analysis", "Nutritional balance"]
    },
    {
      name: "Growth Simulator",
      description: "Simulate duckweed growth under various conditions",
      icon: Database,
      color: "bg-green-500",
      features: ["Environmental modeling", "Yield prediction", "Resource planning"]
    },
    {
      name: "Lab Protocols",
      description: "Standardized protocols for duckweed cultivation and analysis",
      icon: Wrench,
      color: "bg-purple-500",
      features: ["Step-by-step guides", "Quality control", "Safety procedures"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-green-600 to-green-800 text-white py-20">
        <div className="max-w-6xl mx-auto px-8">
          <h1 className="text-5xl font-bold mb-6">Research Toolbox</h1>
          <p className="text-xl text-green-100 max-w-3xl">
            Access our comprehensive suite of tools and resources designed to support 
            duckweed research and implementation in agricultural settings.
          </p>
        </div>
      </div>

      {/* Tools Grid */}
      <div className="max-w-6xl mx-auto px-8 py-16">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {tools.map((tool, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className={`w-16 h-16 ${tool.color} rounded-full flex items-center justify-center mb-6`}>
                <tool.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{tool.name}</h3>
              <p className="text-gray-600 mb-6">{tool.description}</p>
              <ul className="space-y-2 mb-6">
                {tool.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full bg-gray-800 hover:bg-gray-900 text-white py-3 rounded-lg transition-colors flex items-center justify-center space-x-2">
                <Download className="w-4 h-4" />
                <span>Access Tool</span>
              </button>
            </div>
          ))}
        </div>

        {/* Documentation Section */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Documentation & Resources</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Research Papers</h3>
              <div className="space-y-3">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-medium text-gray-800">Genetic Modification of Lemna minor</h4>
                  <p className="text-sm text-gray-600">Published in Journal of Synthetic Biology, 2024</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-medium text-gray-800">Protein Enhancement Strategies</h4>
                  <p className="text-sm text-gray-600">Biotechnology Letters, 2024</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-medium text-gray-800">Sustainable Feed Alternatives</h4>
                  <p className="text-sm text-gray-600">Agricultural Systems Review, 2024</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Technical Guides</h3>
              <div className="space-y-3">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-medium text-gray-800">Cultivation Best Practices</h4>
                  <p className="text-sm text-gray-600">Complete guide to duckweed farming</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-medium text-gray-800">Quality Control Protocols</h4>
                  <p className="text-sm text-gray-600">Ensuring consistent protein content</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-medium text-gray-800">Economic Analysis Framework</h4>
                  <p className="text-sm text-gray-600">Cost-benefit analysis tools</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Toolbox;