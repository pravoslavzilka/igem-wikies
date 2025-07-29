import React from 'react';
import { Beaker, Dna, Microscope, Leaf } from 'lucide-react';

const Project = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-6xl mx-auto px-8">
          <h1 className="text-5xl font-bold mb-6">Our Project</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Developing programmable duckweed as a sustainable protein source for agricultural feed, 
            revolutionizing farming practices through synthetic biology.
          </p>
        </div>
      </div>

      {/* Project Overview */}
      <div className="max-w-6xl mx-auto px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Project Overview</h2>
            <p className="text-gray-600 mb-4">
              Our team is engineering duckweed (Lemna minor) to produce high-quality protein that can 
              replace expensive soybean meal in animal feed. Through synthetic biology approaches, we're 
              creating a sustainable, local alternative that reduces environmental impact.
            </p>
            <p className="text-gray-600">
              The project focuses on optimizing protein content, improving digestibility, and ensuring 
              scalable production methods that farmers can implement locally.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <img 
              src="https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=600" 
              alt="Duckweed research"
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Laboratory Research</h3>
            <p className="text-gray-600 text-sm">
              Advanced genetic engineering techniques to enhance duckweed protein production
            </p>
          </div>
        </div>

        {/* Key Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Dna className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Genetic Engineering</h3>
            <p className="text-gray-600">
              Modifying duckweed genetics to enhance protein content and nutritional value
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Beaker className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Bioprocessing</h3>
            <p className="text-gray-600">
              Developing scalable cultivation and processing methods for commercial viability
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Microscope className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Quality Analysis</h3>
            <p className="text-gray-600">
              Comprehensive testing to ensure safety, nutrition, and effectiveness
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Project Timeline</h2>
          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <div className="w-4 h-4 bg-green-500 rounded-full"></div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-800">Phase 1: Research & Development</h3>
                <p className="text-gray-600">Genetic modification and initial testing (Completed)</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-800">Phase 2: Optimization</h3>
                <p className="text-gray-600">Scaling production and improving efficiency (In Progress)</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-800">Phase 3: Field Testing</h3>
                <p className="text-gray-600">Real-world trials with partner farms (Upcoming)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;