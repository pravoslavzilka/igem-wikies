import React from 'react';
import { Users, Target, Zap, Shield } from 'lucide-react';

const DuckweedMafia = () => {
  const teamMembers = [
    {
      name: "Dr. Elena Rodriguez",
      role: "Lead Researcher",
      specialty: "Synthetic Biology",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=300"
    },
    {
      name: "Marcus Chen",
      role: "Bioprocess Engineer", 
      specialty: "Cultivation Systems",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300"
    },
    {
      name: "Sarah Johnson",
      role: "Agricultural Specialist",
      specialty: "Farm Integration",
      image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=300"
    },
    {
      name: "Alex Petrov",
      role: "Data Analyst",
      specialty: "Optimization Models",
      image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=300"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-gray-800 to-gray-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">The Duckweed Mafia</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Meet the elite team of researchers, engineers, and innovators who are revolutionizing 
            agriculture through programmable duckweed technology.
          </p>
        </div>
      </div>

      {/* Team Mission */}
      <div className="max-w-6xl mx-auto px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="w-8 h-8 text-red-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Precision</h3>
            <p className="text-gray-600 text-sm">Targeting exact protein compositions for optimal nutrition</p>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="w-8 h-8 text-yellow-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Speed</h3>
            <p className="text-gray-600 text-sm">Rapid development and deployment of solutions</p>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Security</h3>
            <p className="text-gray-600 text-sm">Ensuring food security through sustainable practices</p>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Unity</h3>
            <p className="text-gray-600 text-sm">Collaborative approach to global challenges</p>
          </div>
        </div>

        {/* Team Members */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Core Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-4">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-gray-200"
                  />
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white"></div>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-1">{member.name}</h3>
                <p className="text-gray-600 mb-1">{member.role}</p>
                <p className="text-sm text-gray-500">{member.specialty}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Team Achievements</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-gray-700">First successful genetic modification of Lemna minor for protein enhancement</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-gray-700">Developed scalable cultivation system reducing costs by 40%</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                <span className="text-gray-700">Published 15 peer-reviewed papers in top journals</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                <span className="text-gray-700">Secured partnerships with 50+ farms across 3 countries</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Our Code</h3>
            <div className="space-y-4 text-gray-700">
              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold mb-2">🌱 Sustainability First</h4>
                <p className="text-sm">Every solution must benefit both farmers and the environment</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold mb-2">🔬 Science-Driven</h4>
                <p className="text-sm">All decisions backed by rigorous research and data</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold mb-2">🤝 Community Focused</h4>
                <p className="text-sm">Solutions designed with and for farming communities</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DuckweedMafia;