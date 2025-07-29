import React from 'react';
import { Calculator, Database, Microscope, Download } from 'lucide-react';

const ToolboxTools = () => {
  const tools = [
    {
      name: "Protein Calculator",
      description: "Calculate optimal protein content and nutritional balance for different livestock feeds",
      icon: Calculator,
      color: "bg-blue-500",
      features: ["Feed optimization", "Cost analysis", "Nutritional balance", "ROI calculator"],
      status: "Available"
    },
    {
      name: "Growth Simulator",
      description: "Simulate duckweed growth under various environmental conditions",
      icon: Database,
      color: "bg-green-500",
      features: ["Environmental modeling", "Yield prediction", "Resource planning", "Scenario analysis"],
      status: "Available"
    },
    {
      name: "Quality Analyzer",
      description: "Analyze protein quality and nutritional composition",
      icon: Microscope,
      color: "bg-purple-500",
      features: ["Protein profiling", "Amino acid analysis", "Digestibility testing", "Quality scoring"],
      status: "Beta"
    },
    {
      name: "Production Planner",
      description: "Plan and optimize duckweed production schedules",
      icon: Download,
      color: "bg-orange-500",
      features: ["Production scheduling", "Resource allocation", "Capacity planning", "Timeline optimization"],
      status: "Coming Soon"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-6xl mx-auto px-8">
          <h1 className="text-5xl font-bold mb-6">Research Tools</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Comprehensive suite of computational tools designed to support duckweed research, 
            production planning, and optimization.
          </p>
        </div>
      </div>

      {/* Tools Grid */}
      <div className="max-w-6xl mx-auto px-8 py-16">
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {tools.map((tool, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start justify-between mb-6">
                <div className={`w-16 h-16 ${tool.color} rounded-full flex items-center justify-center`}>
                  <tool.icon className="w-8 h-8 text-white" />
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  tool.status === 'Available' ? 'bg-green-100 text-green-800' :
                  tool.status === 'Beta' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-gray-100 text-gray-600'
                }`}>
                  {tool.status}
                </span>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{tool.name}</h3>
              <p className="text-gray-600 mb-6">{tool.description}</p>
              
              <div className="mb-6">
                <h4 className="font-semibold text-gray-800 mb-3">Key Features:</h4>
                <ul className="space-y-2">
                  {tool.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <button className={`w-full py-3 rounded-lg transition-colors flex items-center justify-center space-x-2 ${
                tool.status === 'Available' ? 'bg-gray-800 hover:bg-gray-900 text-white' :
                tool.status === 'Beta' ? 'bg-yellow-600 hover:bg-yellow-700 text-white' :
                'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}>
                <Download className="w-4 h-4" />
                <span>
                  {tool.status === 'Available' ? 'Launch Tool' :
                   tool.status === 'Beta' ? 'Try Beta' : 'Coming Soon'}
                </span>
              </button>
            </div>
          ))}
        </div>

        {/* Tool Categories */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Tool Categories</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Analysis Tools</h3>
              <div className="space-y-3">
                <div className="p-3 bg-blue-50 rounded-lg">
                  <h4 className="font-medium text-blue-800 text-sm">Nutritional Analysis</h4>
                  <p className="text-xs text-blue-600">Comprehensive nutrient profiling</p>
                </div>
                <div className="p-3 bg-blue-50 rounded-lg">
                  <h4 className="font-medium text-blue-800 text-sm">Growth Analysis</h4>
                  <p className="text-xs text-blue-600">Growth rate and biomass tracking</p>
                </div>
                <div className="p-3 bg-blue-50 rounded-lg">
                  <h4 className="font-medium text-blue-800 text-sm">Economic Analysis</h4>
                  <p className="text-xs text-blue-600">Cost-benefit calculations</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Simulation Tools</h3>
              <div className="space-y-3">
                <div className="p-3 bg-green-50 rounded-lg">
                  <h4 className="font-medium text-green-800 text-sm">Environmental Modeling</h4>
                  <p className="text-xs text-green-600">Climate and condition simulation</p>
                </div>
                <div className="p-3 bg-green-50 rounded-lg">
                  <h4 className="font-medium text-green-800 text-sm">Production Modeling</h4>
                  <p className="text-xs text-green-600">Yield and efficiency prediction</p>
                </div>
                <div className="p-3 bg-green-50 rounded-lg">
                  <h4 className="font-medium text-green-800 text-sm">Scale-up Modeling</h4>
                  <p className="text-xs text-green-600">Commercial scaling simulation</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Planning Tools</h3>
              <div className="space-y-3">
                <div className="p-3 bg-purple-50 rounded-lg">
                  <h4 className="font-medium text-purple-800 text-sm">Production Planning</h4>
                  <p className="text-xs text-purple-600">Schedule and resource optimization</p>
                </div>
                <div className="p-3 bg-purple-50 rounded-lg">
                  <h4 className="font-medium text-purple-800 text-sm">Facility Design</h4>
                  <p className="text-xs text-purple-600">Layout and system design tools</p>
                </div>
                <div className="p-3 bg-purple-50 rounded-lg">
                  <h4 className="font-medium text-purple-800 text-sm">Risk Assessment</h4>
                  <p className="text-xs text-purple-600">Risk analysis and mitigation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolboxTools;