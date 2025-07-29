import React from 'react';
import { BookOpen, Download, FileText, Video } from 'lucide-react';

const Handbook = () => {
  const sections = [
    {
      title: "Getting Started",
      description: "Basic principles and setup for duckweed cultivation",
      icon: BookOpen,
      color: "bg-blue-500",
      pages: 25
    },
    {
      title: "Genetic Modifications",
      description: "Technical guide to protein enhancement techniques",
      icon: FileText,
      color: "bg-green-500", 
      pages: 40
    },
    {
      title: "Cultivation Systems",
      description: "Design and operation of duckweed production facilities",
      icon: Video,
      color: "bg-purple-500",
      pages: 35
    },
    {
      title: "Quality Control",
      description: "Testing protocols and safety standards",
      icon: Download,
      color: "bg-orange-500",
      pages: 20
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-indigo-600 to-indigo-800 text-white py-20">
        <div className="max-w-6xl mx-auto px-8">
          <h1 className="text-5xl font-bold mb-6">Duckweed Handbook</h1>
          <p className="text-xl text-indigo-100 max-w-3xl">
            Your comprehensive guide to implementing programmable duckweed technology 
            for sustainable protein production in agricultural settings.
          </p>
        </div>
      </div>

      {/* Handbook Overview */}
      <div className="max-w-6xl mx-auto px-8 py-16">
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Complete Implementation Guide</h2>
              <p className="text-gray-600 mb-6">
                This handbook provides step-by-step instructions for farmers, researchers, and 
                agricultural professionals looking to implement duckweed protein production systems.
              </p>
              <div className="flex items-center space-x-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-indigo-600">120</div>
                  <div className="text-sm text-gray-600">Pages</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-indigo-600">50+</div>
                  <div className="text-sm text-gray-600">Diagrams</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-indigo-600">25</div>
                  <div className="text-sm text-gray-600">Case Studies</div>
                </div>
              </div>
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg transition-colors flex items-center space-x-2">
                <Download className="w-5 h-5" />
                <span>Download Full Handbook (PDF)</span>
              </button>
            </div>
            <div>
              <img 
                src="https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Handbook"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Handbook Sections */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {sections.map((section, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className={`w-16 h-16 ${section.color} rounded-full flex items-center justify-center mb-6`}>
                <section.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{section.title}</h3>
              <p className="text-gray-600 mb-6">{section.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">{section.pages} pages</span>
                <button className="text-indigo-600 hover:text-indigo-700 font-medium">
                  View Section →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Reference */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Quick Start Checklist</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-700">Site assessment</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-700">Equipment procurement</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                <span className="text-sm text-gray-700">System installation</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
                <span className="text-sm text-gray-700">Initial cultivation</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Support Resources</h3>
            <div className="space-y-3">
              <div className="p-3 bg-gray-50 rounded-lg">
                <h4 className="font-medium text-gray-800 text-sm">24/7 Technical Support</h4>
                <p className="text-xs text-gray-600">support@igembrno.org</p>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg">
                <h4 className="font-medium text-gray-800 text-sm">Video Tutorials</h4>
                <p className="text-xs text-gray-600">Step-by-step guides</p>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg">
                <h4 className="font-medium text-gray-800 text-sm">Community Forum</h4>
                <p className="text-xs text-gray-600">Connect with other users</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Latest Updates</h3>
            <div className="space-y-3">
              <div className="p-3 bg-blue-50 rounded-lg">
                <h4 className="font-medium text-gray-800 text-sm">Version 2.1 Released</h4>
                <p className="text-xs text-gray-600">Enhanced cultivation protocols</p>
              </div>
              <div className="p-3 bg-green-50 rounded-lg">
                <h4 className="font-medium text-gray-800 text-sm">New Case Studies</h4>
                <p className="text-xs text-gray-600">Success stories from Brazil</p>
              </div>
              <div className="p-3 bg-purple-50 rounded-lg">
                <h4 className="font-medium text-gray-800 text-sm">Webinar Series</h4>
                <p className="text-xs text-gray-600">Monthly expert sessions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Handbook;