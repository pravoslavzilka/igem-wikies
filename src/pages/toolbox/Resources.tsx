import React from 'react';
import { FileText, Video, BookOpen, ExternalLink } from 'lucide-react';

const ToolboxResources = () => {
  const resourceCategories = [
    {
      title: "Research Papers",
      icon: FileText,
      color: "bg-blue-500",
      items: [
        {
          title: "Genetic Modification of Lemna minor for Enhanced Protein Production",
          authors: "Rodriguez, E. et al.",
          journal: "Journal of Synthetic Biology",
          year: "2024",
          type: "Research Article"
        },
        {
          title: "Sustainable Protein Alternatives in Livestock Feed",
          authors: "Chen, M. & Johnson, S.",
          journal: "Agricultural Systems Review",
          year: "2024",
          type: "Review"
        },
        {
          title: "Economic Viability of Duckweed-Based Protein Production",
          authors: "Petrov, A. et al.",
          journal: "Biotechnology Economics",
          year: "2023",
          type: "Analysis"
        }
      ]
    },
    {
      title: "Video Tutorials",
      icon: Video,
      color: "bg-red-500",
      items: [
        {
          title: "Introduction to Duckweed Cultivation",
          duration: "15 min",
          level: "Beginner",
          description: "Basic principles of duckweed growth and maintenance"
        },
        {
          title: "Genetic Transformation Techniques",
          duration: "25 min",
          level: "Advanced",
          description: "Step-by-step guide to genetic modification procedures"
        },
        {
          title: "Quality Control and Testing",
          duration: "20 min",
          level: "Intermediate",
          description: "Protocols for protein analysis and quality assessment"
        }
      ]
    },
    {
      title: "Technical Guides",
      icon: BookOpen,
      color: "bg-green-500",
      items: [
        {
          title: "Duckweed Cultivation Manual",
          pages: "45 pages",
          format: "PDF",
          description: "Comprehensive guide to setting up and maintaining duckweed cultures"
        },
        {
          title: "Protein Extraction Protocols",
          pages: "28 pages",
          format: "PDF",
          description: "Detailed procedures for protein isolation and purification"
        },
        {
          title: "Economic Analysis Framework",
          pages: "35 pages",
          format: "PDF",
          description: "Tools and methods for cost-benefit analysis"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-green-600 to-green-800 text-white py-20">
        <div className="max-w-6xl mx-auto px-8">
          <h1 className="text-5xl font-bold mb-6">Research Resources</h1>
          <p className="text-xl text-green-100 max-w-3xl">
            Access our comprehensive library of research papers, technical guides, video tutorials, 
            and educational materials to support your duckweed research and implementation.
          </p>
        </div>
      </div>

      {/* Resources */}
      <div className="max-w-6xl mx-auto px-8 py-16">
        {resourceCategories.map((category, categoryIndex) => (
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
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                      
                      {/* Research Paper Details */}
                      {item.authors && (
                        <div className="text-sm text-gray-600 mb-2">
                          <span className="font-medium">Authors:</span> {item.authors}
                        </div>
                      )}
                      {item.journal && (
                        <div className="text-sm text-gray-600 mb-2">
                          <span className="font-medium">Published in:</span> {item.journal} ({item.year})
                        </div>
                      )}
                      {item.type && (
                        <span className="inline-block px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full mb-2">
                          {item.type}
                        </span>
                      )}
                      
                      {/* Video Details */}
                      {item.duration && (
                        <div className="flex items-center space-x-4 mb-2">
                          <span className="text-sm text-gray-600">
                            <span className="font-medium">Duration:</span> {item.duration}
                          </span>
                          <span className={`px-2 py-1 text-xs rounded-full ${
                            item.level === 'Beginner' ? 'bg-green-100 text-green-800' :
                            item.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-red-100 text-red-800'
                          }`}>
                            {item.level}
                          </span>
                        </div>
                      )}
                      
                      {/* Guide Details */}
                      {item.pages && (
                        <div className="flex items-center space-x-4 mb-2">
                          <span className="text-sm text-gray-600">
                            <span className="font-medium">Length:</span> {item.pages}
                          </span>
                          <span className="px-2 py-1 bg-gray-200 text-gray-700 text-xs rounded-full">
                            {item.format}
                          </span>
                        </div>
                      )}
                      
                      {item.description && (
                        <p className="text-gray-600 text-sm">{item.description}</p>
                      )}
                    </div>
                    
                    <button className="ml-4 flex items-center space-x-2 bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded-lg transition-colors">
                      <ExternalLink className="w-4 h-4" />
                      <span>Access</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Additional Resources */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Additional Resources</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">External Links</h3>
              <div className="space-y-3">
                <a href="#" className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <h4 className="font-medium text-gray-800 text-sm">NCBI Duckweed Database</h4>
                  <p className="text-xs text-gray-600">Genetic information and sequences</p>
                </a>
                <a href="#" className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <h4 className="font-medium text-gray-800 text-sm">International Duckweed Society</h4>
                  <p className="text-xs text-gray-600">Research community and conferences</p>
                </a>
                <a href="#" className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <h4 className="font-medium text-gray-800 text-sm">FAO Feed Resources</h4>
                  <p className="text-xs text-gray-600">Global feed and nutrition data</p>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Software Tools</h3>
              <div className="space-y-3">
                <div className="p-3 bg-gray-50 rounded-lg">
                  <h4 className="font-medium text-gray-800 text-sm">BioPython Toolkit</h4>
                  <p className="text-xs text-gray-600">Sequence analysis and manipulation</p>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <h4 className="font-medium text-gray-800 text-sm">R Statistical Package</h4>
                  <p className="text-xs text-gray-600">Data analysis and visualization</p>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <h4 className="font-medium text-gray-800 text-sm">ImageJ Analysis</h4>
                  <p className="text-xs text-gray-600">Microscopy image processing</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Datasets</h3>
              <div className="space-y-3">
                <div className="p-3 bg-gray-50 rounded-lg">
                  <h4 className="font-medium text-gray-800 text-sm">Growth Rate Database</h4>
                  <p className="text-xs text-gray-600">Environmental condition effects</p>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <h4 className="font-medium text-gray-800 text-sm">Protein Composition Data</h4>
                  <p className="text-xs text-gray-600">Amino acid profiles and analysis</p>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <h4 className="font-medium text-gray-800 text-sm">Economic Data</h4>
                  <p className="text-xs text-gray-600">Feed prices and market trends</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolboxResources;