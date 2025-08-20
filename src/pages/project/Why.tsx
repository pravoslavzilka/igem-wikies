import React from 'react';
import { TrendingUp, DollarSign, Globe, AlertTriangle } from 'lucide-react';

const ProjectWhy = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-red-600 to-red-800 text-white py-20">
        <div className="max-w-6xl mx-auto px-8">
          <h1 className="text-5xl font-bold mb-6">Forgetting Arabidopsis or soybean and bracing ourselves for duckweed</h1>
          <p className="text-xl text-red-100 max-w-3xl">
            The global food system faces unprecedented challenges. Our solution addresses 
            critical issues in sustainability, economics, and food security.
          </p>
        </div>
      </div>

      {/* Problem Statement */}
      <div className="max-w-6xl mx-auto px-8 py-16">
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">The Global Challenge</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Rising Feed Costs</h3>
              <p className="text-gray-600 mb-6">
                Soybean prices have tripled in the last 30 years, making up 75% of farm operation costs. 
                This unsustainable trend threatens the viability of livestock farming worldwide.
              </p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="font-semibold text-red-800 mb-2">Critical Statistics:</h4>
                <ul className="text-red-700 text-sm space-y-1">
                  <li>• Feed costs represent 75% of total farm expenses</li>
                  <li>• Soybean protein costs have increased 300% since 1990</li>
                  <li>• 15% of beef price is attributed to soybean feed</li>
                </ul>
              </div>
            </div>
            <div>
              <img 
                src="https://images.pexels.com/photos/422218/pexels-photo-422218.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Farm costs"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>




        
        {/* Key Issues */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-8 h-8 text-red-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Price Volatility</h3>
            <p className="text-gray-600 text-sm">
              Unpredictable soybean prices make farm planning and budgeting extremely difficult
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Globe className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Environmental Impact</h3>
            <p className="text-gray-600 text-sm">
              64% of natural ecosystems destroyed by soybean cultivation, causing massive deforestation
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <DollarSign className="w-8 h-8 text-yellow-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Economic Pressure</h3>
            <p className="text-gray-600 text-sm">
              Small farmers struggle to compete with rising feed costs and shrinking profit margins
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <AlertTriangle className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Supply Chain Risk</h3>
            <p className="text-gray-600 text-sm">
              Dependence on global soybean markets creates vulnerability to supply disruptions
            </p>
          </div>
        </div>

        {/* Environmental Impact */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Environmental Crisis</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Deforestation Impact</h3>
              <div className="space-y-4">
                <div className="p-4 bg-red-50 rounded-lg">
                  <h4 className="font-semibold text-red-800 mb-2">Amazon Rainforest</h4>
                  <p className="text-red-700 text-sm">
                    Over 17% of the Amazon has been cleared, primarily for soybean cultivation
                  </p>
                </div>
                <div className="p-4 bg-orange-50 rounded-lg">
                  <h4 className="font-semibold text-orange-800 mb-2">Biodiversity Loss</h4>
                  <p className="text-orange-700 text-sm">
                    Thousands of species face extinction due to habitat destruction
                  </p>
                </div>
                <div className="p-4 bg-yellow-50 rounded-lg">
                  <h4 className="font-semibold text-yellow-800 mb-2">Carbon Emissions</h4>
                  <p className="text-yellow-700 text-sm">
                    Deforestation contributes 15% of global greenhouse gas emissions
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Resource Consumption</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600">Water Usage</span>
                    <span className="font-semibold text-gray-800">2,000L per kg protein</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{width: '90%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600">Land Usage</span>
                    <span className="font-semibold text-gray-800">16m² per kg protein</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{width: '85%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600">CO₂ Emissions</span>
                    <span className="font-semibold text-gray-800">6kg per kg protein</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-red-600 h-2 rounded-full" style={{width: '95%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Solution */}
        <div className="bg-gradient-to-br from-green-600 to-green-800 text-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold mb-6 text-center">Our Solution</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-2">90%</h3>
              <p className="text-green-100">Reduction in production costs</p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-2">95%</h3>
              <p className="text-green-100">Less land required</p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-2">80%</h3>
              <p className="text-green-100">Lower carbon footprint</p>
            </div>
          </div>
          <p className="text-center text-green-100 mt-6 max-w-3xl mx-auto">
            Programmable duckweed offers a sustainable, cost-effective alternative that addresses 
            all major challenges in the current protein supply chain.
          </p>
        </div>

        {/* PDF Structure Section */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Why Duckweed?</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Duckweed vs Soybean</h3>
              <p className="text-gray-600 mb-6">
                Duckweed is the fastest growing plant on Earth, with a doubling time of 36-48 hours. Unlike soybean, it requires minimal land and water, and can be cultivated locally, reducing transportation costs and carbon footprint.
              </p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">Key Advantages:</h4>
                <ul className="text-green-700 text-sm space-y-1">
                  <li>• 20-45% protein content (dry weight)</li>
                  <li>• Thrives on water surface, no arable land needed</li>
                  <li>• High nutrient uptake, excellent for phytoremediation</li>
                  <li>• Can be programmed for desired traits using synthetic biology</li>
                </ul>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=compress&fit=crop&w=600&q=80" 
                alt="Duckweed"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Comparison: Duckweed vs Soybean</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full text-left border-separate border-spacing-y-2">
              <thead>
                <tr>
                  <th className="px-4 py-2 text-gray-700 font-semibold">Parameter</th>
                  <th className="px-4 py-2 text-green-700 font-semibold">Duckweed</th>
                  <th className="px-4 py-2 text-red-700 font-semibold">Soybean</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-2 text-gray-600">Protein Content</td>
                  <td className="px-4 py-2 text-green-800 font-bold">20-45%</td>
                  <td className="px-4 py-2 text-red-800 font-bold">35-40%</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-gray-600">Doubling Time</td>
                  <td className="px-4 py-2 text-green-800 font-bold">36-48h</td>
                  <td className="px-4 py-2 text-red-800 font-bold">7-10 days</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-gray-600">Land Usage</td>
                  <td className="px-4 py-2 text-green-800 font-bold">Minimal (water surface)</td>
                  <td className="px-4 py-2 text-red-800 font-bold">High (arable land)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-gray-600">Water Usage</td>
                  <td className="px-4 py-2 text-green-800 font-bold">Low</td>
                  <td className="px-4 py-2 text-red-800 font-bold">High</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-gray-600">Carbon Footprint</td>
                  <td className="px-4 py-2 text-green-800 font-bold">Low</td>
                  <td className="px-4 py-2 text-red-800 font-bold">High</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-gray-600">Programmability</td>
                  <td className="px-4 py-2 text-green-800 font-bold">Yes (synbio)</td>
                  <td className="px-4 py-2 text-red-800 font-bold">Limited</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectWhy;