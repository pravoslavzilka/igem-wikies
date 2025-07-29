import React from 'react';
import { Users, MessageCircle, Calendar, Award } from 'lucide-react';

const Engagement = () => {
  const events = [
    {
      title: "Farmer Workshop Series",
      date: "March 2024",
      description: "Educational workshops for local farmers on sustainable protein alternatives",
      participants: 150
    },
    {
      title: "University Collaboration",
      date: "April 2024", 
      description: "Partnership with agricultural universities for research validation",
      participants: 45
    },
    {
      title: "Community Outreach",
      date: "May 2024",
      description: "Public awareness campaign about sustainable farming practices",
      participants: 300
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-purple-600 to-purple-800 text-white py-20">
        <div className="max-w-6xl mx-auto px-8">
          <h1 className="text-5xl font-bold mb-6">Community Engagement</h1>
          <p className="text-xl text-purple-100 max-w-3xl">
            Building bridges between scientific research and agricultural communities through 
            education, collaboration, and sustainable innovation.
          </p>
        </div>
      </div>

      {/* Engagement Stats */}
      <div className="max-w-6xl mx-auto px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-3xl font-bold text-gray-800 mb-2">500+</h3>
            <p className="text-gray-600">Farmers Reached</p>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-3xl font-bold text-gray-800 mb-2">25</h3>
            <p className="text-gray-600">Workshops Held</p>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-3xl font-bold text-gray-800 mb-2">12</h3>
            <p className="text-gray-600">Partner Organizations</p>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-3xl font-bold text-gray-800 mb-2">3</h3>
            <p className="text-gray-600">Awards Received</p>
          </div>
        </div>

        {/* Events Timeline */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Recent Events</h2>
          <div className="space-y-8">
            {events.map((event, index) => (
              <div key={index} className="flex items-start space-x-6 p-6 bg-gray-50 rounded-xl">
                <div className="w-4 h-4 bg-purple-500 rounded-full mt-2"></div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-gray-800">{event.title}</h3>
                    <span className="text-sm text-gray-500">{event.date}</span>
                  </div>
                  <p className="text-gray-600 mb-2">{event.description}</p>
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-500">{event.participants} participants</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Impact Stories */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Farmer Testimonials</h3>
            <div className="space-y-6">
              <div className="p-4 bg-green-50 rounded-lg">
                <p className="text-gray-700 italic mb-2">
                  "The duckweed protein has reduced our feed costs by 30% while maintaining milk production quality."
                </p>
                <p className="text-sm text-gray-600">- Maria Santos, Dairy Farmer</p>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg">
                <p className="text-gray-700 italic mb-2">
                  "Easy to implement and environmentally friendly. Our cattle love it!"
                </p>
                <p className="text-sm text-gray-600">- João Silva, Cattle Rancher</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Educational Impact</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                <span className="text-gray-700">Students Educated</span>
                <span className="font-semibold text-gray-800">1,200+</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                <span className="text-gray-700">Research Papers Published</span>
                <span className="font-semibold text-gray-800">15</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                <span className="text-gray-700">Media Coverage</span>
                <span className="font-semibold text-gray-800">25 articles</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Engagement;