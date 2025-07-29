import React from 'react';
import { Download, FileText, Package, Code } from 'lucide-react';

const ToolboxDownloads = () => {
  const downloadCategories = [
    {
      title: "Software Tools",
      icon: Package,
      color: "bg-blue-500",
      items: [
        {
          name: "Duckweed Growth Simulator",
          version: "v2.1.0",
          size: "45 MB",
          format: "Windows/Mac/Linux",
          description: "Complete simulation environment for duckweed cultivation modeling",
          downloads: "2,341"
        },
        {
          name: "Protein Calculator Suite",
          version: "v1.8.2",
          size: "12 MB",
          format: "Web App",
          description: "Comprehensive protein analysis and optimization tools",
          downloads: "5,672"
        },
        {
          name: "Quality Control Dashboard",
          version: "v1.5.1",
          size: "28 MB",
          format: "Windows/Mac",
          description: "Real-time monitoring and analysis dashboard for production facilities",
          downloads: "1,234"
        }
      ]
    },
    {
      title: "Documentation",
      icon: FileText,
      color: "bg-green-500",
      items: [
        {
          name: "Complete Implementation Guide",
          version: "2024 Edition",
          size: "8.5 MB",
          format: "PDF",
          description: "Step-by-step guide for setting up duckweed production systems",
          downloads: "12,456"
        },
        {
          name: "Technical Specifications",
          version: "v3.2",
          size: "2.1 MB",
          format: "PDF",
          description: "Detailed technical requirements and specifications",
          downloads: "8,901"
        },
        {
          name: "Safety Protocols Manual",
          version: "2024",
          size: "4.2 MB",
          format: "PDF",
          description: "Comprehensive safety guidelines and emergency procedures",
          downloads: "6,789"
        }
      ]
    },
    {
      title: "Source Code",
      icon: Code,
      color: "bg-purple-500",
      items: [
        {
          name: "Growth Modeling Library",
          version: "v1.4.0",
          size: "156 KB",
          format: "Python Package",
          description: "Open-source library for duckweed growth prediction algorithms",
          downloads: "3,421"
        },
        {
          name: "Data Analysis Scripts",
          version: "v2.0.1",
          size: "89 KB",
          format: "R Package",
          description: "Statistical analysis tools for protein content and quality assessment",
          downloads: "2,876"
        },
        {
          name: "Automation Control System",
          version: "v1.2.3",
          size: "2.3 MB",
          format: "Arduino/Raspberry Pi",
          description: "IoT-based monitoring and control system for cultivation facilities",
          downloads: "1,567"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-purple-600 to-purple-800 text-white py-20">
        <div className="max-w-6xl mx-auto px-8">
          <h1 className="text-5xl font-bold mb-6">Downloads</h1>
          <p className="text-xl text-purple-100 max-w-3xl">
            Access our complete suite of software tools, documentation, and source code 
            to support your duckweed research and production implementation.
          </p>
        </div>
      </div>

      {/* Download Statistics */}
      <div className="max-w-6xl mx-auto px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
            <h3 className="text-3xl font-bold text-gray-800 mb-2">45,000+</h3>
            <p className="text-gray-600">Total Downloads</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
            <h3 className="text-3xl font-bold text-gray-800 mb-2">12</h3>
            <p className="text-gray-600">Software Tools</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
            <h3 className="text-3xl font-bold text-gray-800 mb-2">25</h3>
            <p className="text-gray-600">Documentation Files</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
            <h3 className="text-3xl font-bold text-gray-800 mb-2">8</h3>
            <p className="text-gray-600">Open Source Projects</p>
          </div>
        </div>

        {/* Download Categories */}
        {downloadCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="bg-white rounded-2xl p-8 shadow-lg mb-8">
            <div className="flex items-center mb-6">
              <div className={`w-12 h-12 ${category.color} rounded-full flex items-center justify-center mr-4`}>
                <category.icon className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800">{category.title}</h2>
            </div>
            
            <div className="grid md:grid-cols-1 gap-6">
              {category.items.map((item, itemIndex) => (
                <div key={itemIndex} className="p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
                        <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                          {item.version}
                        </span>
                      </div>
                      
                      <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                      
                      <div className="flex items-center space-x-6 text-sm text-gray-500">
                        <span><strong>Size:</strong> {item.size}</span>
                        <span><strong>Format:</strong> {item.format}</span>
                        <span><strong>Downloads:</strong> {item.downloads}</span>
                      </div>
                    </div>
                    
                    <button className="ml-4 flex items-center space-x-2 bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-lg transition-colors">
                      <Download className="w-4 h-4" />
                      <span>Download</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Installation Instructions */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Installation & Setup</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">System Requirements</h3>
              <div className="space-y-3">
                <div className="p-3 bg-gray-50 rounded-lg">
                  <h4 className="font-medium text-gray-800 text-sm">Operating System</h4>
                  <p className="text-xs text-gray-600">Windows 10+, macOS 10.15+, Ubuntu 18.04+</p>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <h4 className="font-medium text-gray-800 text-sm">Memory</h4>
                  <p className="text-xs text-gray-600">Minimum 4GB RAM, Recommended 8GB+</p>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <h4 className="font-medium text-gray-800 text-sm">Storage</h4>
                  <p className="text-xs text-gray-600">500MB free space for basic installation</p>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <h4 className="font-medium text-gray-800 text-sm">Dependencies</h4>
                  <p className="text-xs text-gray-600">Python 3.8+, R 4.0+, Node.js 16+ (depending on tools)</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Quick Start Guide</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold">1</div>
                  <div>
                    <h4 className="font-medium text-gray-800 text-sm">Download</h4>
                    <p className="text-xs text-gray-600">Select and download the appropriate tool for your platform</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold">2</div>
                  <div>
                    <h4 className="font-medium text-gray-800 text-sm">Install</h4>
                    <p className="text-xs text-gray-600">Run the installer and follow the setup wizard</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold">3</div>
                  <div>
                    <h4 className="font-medium text-gray-800 text-sm">Configure</h4>
                    <p className="text-xs text-gray-600">Set up your preferences and connect data sources</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold">4</div>
                  <div>
                    <h4 className="font-medium text-gray-800 text-sm">Start</h4>
                    <p className="text-xs text-gray-600">Launch the application and begin your analysis</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolboxDownloads;