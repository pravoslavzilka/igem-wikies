import React from 'react';
import { Users, Heart, MessageSquare, Handshake } from 'lucide-react';

const EngagementCommunity = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-6xl mx-auto px-8">
          <h1 className="text-5xl font-bold mb-6">Community Engagement</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Building strong relationships with farming communities, researchers, and stakeholders 
            to create sustainable solutions together.
          </p>
        </div>
      </div>

      {/* Community Stats */}
      <div className="max-w-6xl mx-auto px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-3xl font-bold text-gray-800 mb-2">500+</h3>
            <p className="text-gray-600">Community Members</p>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-3xl font-bold text-gray-800 mb-2">150</h3>
            <p className="text-gray-600">Active Farmers</p>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageSquare className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-3xl font-bold text-gray-800 mb-2">2,500</h3>
            <p className="text-gray-600">Forum Posts</p>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Handshake className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-3xl font-bold text-gray-800 mb-2">25</h3>
            <p className="text-gray-600">Partner Organizations</p>
          </div>
        </div>

        {/* Community Programs */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Community Programs</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Farmer Network</h3>
              <p className="text-gray-600 mb-4">
                Our farmer network connects agricultural professionals implementing duckweed technology, 
                sharing experiences, best practices, and supporting each other's success.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-600">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                  Monthly virtual meetups and knowledge sharing
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                  Peer-to-peer mentoring and support system
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                  Access to exclusive resources and early updates
                </li>
              </ul>
            </div>
            <div>
              <img 
                src="https://images.pexels.com/photos/2132250/pexels-photo-2132250.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Farmer community"
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Success Stories */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Success Stories</h3>
            <div className="space-y-6">
              <div className="p-4 bg-green-50 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">São Paulo Dairy Cooperative</h4>
                <p className="text-green-700 text-sm mb-2">
                  "Implementing duckweed protein reduced our feed costs by 35% while maintaining milk quality. 
                  The community support was invaluable during the transition."
                </p>
                <p className="text-xs text-green-600">- Maria Santos, Cooperative President</p>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">Minas Gerais Cattle Ranch</h4>
                <p className="text-blue-700 text-sm mb-2">
                  "The peer mentoring program helped us avoid common pitfalls. Our cattle adapted quickly 
                  and we're seeing improved weight gain."
                </p>
                <p className="text-xs text-blue-600">- João Silva, Ranch Owner</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Community Forum</h3>
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-medium text-gray-800 text-sm">Optimal pH levels for growth?</h4>
                  <span className="text-xs text-gray-500">2 hours ago</span>
                </div>
                <p className="text-xs text-gray-600">Discussion about maintaining ideal water conditions...</p>
                <div className="flex items-center space-x-4 mt-2 text-xs text-gray-500">
                  <span>12 replies</span>
                  <span>45 views</span>
                </div>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-medium text-gray-800 text-sm">Harvesting techniques comparison</h4>
                  <span className="text-xs text-gray-500">1 day ago</span>
                </div>
                <p className="text-xs text-gray-600">Sharing different approaches to efficient harvesting...</p>
                <div className="flex items-center space-x-4 mt-2 text-xs text-gray-500">
                  <span>8 replies</span>
                  <span>67 views</span>
                </div>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-medium text-gray-800 text-sm">Cost analysis spreadsheet template</h4>
                  <span className="text-xs text-gray-500">3 days ago</span>
                </div>
                <p className="text-xs text-gray-600">Free template for tracking production costs and ROI...</p>
                <div className="flex items-center space-x-4 mt-2 text-xs text-gray-500">
                  <span>25 replies</span>
                  <span>156 views</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EngagementCommunity;