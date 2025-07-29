import React from 'react';
import { Dna, Microscope, Leaf, Target } from 'lucide-react';

const ProjectWhat = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-6xl mx-auto px-8">
          <h1 className="text-5xl font-bold mb-6">What We're Building</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Programmable duckweed engineered to produce high-quality protein as a sustainable 
            alternative to traditional animal feed sources.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-8 py-16">
        {/* Overview */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Project Overview</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-gray-600 mb-4">
                Our project focuses on genetically modifying Lemna minor (common duckweed) to enhance 
                its protein content and nutritional profile. Through synthetic biology approaches, we're 
                creating a sustainable protein source that can replace expensive soybean meal in livestock feed.
              </p>
              <p className="text-gray-600">
                The engineered duckweed will be optimized for rapid growth, high protein yield, and 
                improved digestibility, making it an economically viable solution for farmers worldwide.
              </p>
            </div>
            <div>
              <img 
                src="https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Duckweed research"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Key Components */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Dna className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Genetic Engineering</h3>
            <p className="text-gray-600 text-sm">
              Modifying duckweed DNA to enhance protein production and nutritional content
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Microscope className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Quality Control</h3>
            <p className="text-gray-600 text-sm">
              Rigorous testing to ensure safety, nutrition, and consistency of the final product
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Leaf className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Sustainability</h3>
            <p className="text-gray-600 text-sm">
              Environmentally friendly production with minimal water and land requirements
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Optimization</h3>
            <p className="text-gray-600 text-sm">
              Continuous improvement of growth rates, protein content, and production efficiency
            </p>
          </div>
        </div>

        {/* Technical Specifications */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Technical Specifications</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Protein Content</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Target Protein %</span>
                  <span className="font-semibold text-gray-800">35-40%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Essential Amino Acids</span>
                  <span className="font-semibold text-gray-800">Complete</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Digestibility</span>
                  <span className="font-semibold text-gray-800">85%+</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Growth Parameters</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Doubling Time</span>
                  <span className="font-semibold text-gray-800">2-3 days</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Temperature Range</span>
                  <span className="font-semibold text-gray-800">15-30°C</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">pH Tolerance</span>
                  <span className="font-semibold text-gray-800">6.0-8.0</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Production Metrics</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Yield per m²</span>
                  <span className="font-semibold text-gray-800">10-15 kg/day</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Water Usage</span>
                  <span className="font-semibold text-gray-800">90% less</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Land Usage</span>
                  <span className="font-semibold text-gray-800">95% less</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectWhat;