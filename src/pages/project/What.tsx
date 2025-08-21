import React, { useState } from 'react';

const ProjectWhat = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const problems = [
    {
      id: 1,
      title: "High protein feed costs and reliance on import:",
      icon: "🌾",
      quote: "Soybean is an amazing source of protein. I wish I could afford more!",
      author: "Štefan Strhársky",
      description: "Rising feed costs impact livestock farmers across Central Europe, forcing dependence on expensive imported protein sources."
    },
    {
      id: 2,
      title: "Deforestation caused by protein crops",
      icon: "🌿",
      quote: "Our land was taken from us and turned into a one giant soy field",
      author: "Ms. Conservationist",
      description: "Large-scale monoculture farming destroys natural ecosystems and biodiversity for protein crop production."
    },
    {
      id: 3,
      title: "Nitrogen runoffs and manure utilization",
      icon: "🚜",
      quote: "We tend to think manure is free fertilizer, but in reality, much of the nitrogen just disappears into the air or water. It's money and nutrients lost.",
      author: "Ing. Jakub Neužil",
      description: "Agricultural waste creates environmental challenges through nutrient loss and water contamination."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-6xl mx-auto px-8">
          <h1 className="text-5xl font-bold mb-6">Forgetting Arabidopsis or Soybean?</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            It's time to embrace duckweed as the next frontier in plant biotechnology. With unprecedented growth rates, nutritional density, and versatile applications, duckweed represents a paradigm shift in sustainable agriculture and biomanufacturing.
          </p>
        </div>
      </div>

      {/* Introduction with Map */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-5">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1">
              <p className="text-xl text-gray-600 leading-relaxed">
                We’re a team of Czechs and Slovaks. In both our countries, agricultural land takes up around half of all territory. 

              </p>
            </div>
            <div className="flex-shrink-0">
              <div className="w-96 h-56 bg-gradient-to-br from-blue-100 to-blue-50 rounded-xl flex items-center justify-center border-2 border-blue-200 shadow-lg">
                <svg className="w-80 h-40 text-blue-600" viewBox="0 0 400 200" fill="none">
                  <path d="M50 100 Q80 80 120 90 Q160 85 200 95 Q240 90 280 85 Q320 90 360 100 Q340 130 300 135 Q260 140 220 135 Q180 130 140 135 Q100 130 50 100" 
                        stroke="currentColor" strokeWidth="3" fill="rgba(34, 197, 94, 0.1)"/>
                  <path d="M200 95 Q240 105 280 100 Q320 105 350 115 Q330 145 290 150 Q250 155 210 150 Q200 125 200 95" 
                        stroke="currentColor" strokeWidth="3" fill="rgba(34, 197, 94, 0.1)"/>
                  <text x="120" y="115" className="fill-blue-700 text-sm font-semibold">Czech Republic</text>
                  <text x="260" y="130" className="fill-blue-700 text-sm font-semibold">Slovakia</text>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Introduction */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-5 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">
            Agricultural Challenges
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
           A lot of us grew up in villages, surrounded by farms, fields, livestock and farmers. We saw the challenges around us and realized that they are a part of much bigger, global issues:

          </p>
        </div>
      </section>

      {/* Problems Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {problems.map((problem) => (
              <div
                key={problem.id}
                className={`bg-white rounded-xl p-8 shadow-lg transition-all duration-300 border-t-4 border-blue-600 cursor-pointer ${
                  hoveredCard === problem.id ? 'transform -translate-y-2 shadow-2xl' : ''
                }`}
                onMouseEnter={() => setHoveredCard(problem.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                
                <h3 className="text-xl font-semibold text-gray-800 mb-4 leading-tight">
                  {problem.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6 text-sm">
                  {problem.description}
                </p>
                
                {/* Quote Section */}
                <div className="border-t border-gray-100 pt-6">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <blockquote className="text-gray-700 text-sm leading-relaxed italic mb-2">
                        "{problem.quote}"
                      </blockquote>
                      <cite className="text-blue-600 text-sm font-medium not-italic">
                        - {problem.author}
                      </cite>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="bg-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-5">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              The Global Impact
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              These local challenges reflect worldwide agricultural sustainability issues that demand innovative solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white bg-opacity-10 rounded-xl p-8 backdrop-blur-sm border border-white border-opacity-20 text-center">
              <div className="text-4xl font-bold mb-2">50%</div>
              <div className="text-white text-opacity-90">Agricultural land coverage in Central Europe</div>
            </div>
            <div className="bg-white bg-opacity-10 rounded-xl p-8 backdrop-blur-sm border border-white border-opacity-20 text-center">
              <div className="text-4xl font-bold mb-2">Rising</div>
              <div className="text-white text-opacity-90">Feed costs impacting farmers</div>
            </div>
            <div className="bg-white bg-opacity-10 rounded-xl p-8 backdrop-blur-sm border border-white border-opacity-20 text-center">
              <div className="text-4xl font-bold mb-2">Critical</div>
              <div className="text-white text-opacity-90">Environmental impact from current practices</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-blue-700 to-blue-600 text-white py-20 text-center">
        <div className="max-w-7xl mx-auto px-5">
          <h2 className="text-4xl md:text-5xl font-bold mb-5">
            Ready for Solutions?
          </h2>
          <p className="text-xl mb-10 opacity-90 max-w-3xl mx-auto leading-relaxed">
            These challenges inspired us to explore synthetic biology solutions that could transform agriculture sustainably.
          </p>
          <button className="inline-block bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold text-lg hover:transform hover:-translate-y-1 hover:shadow-xl transition-all duration-300 shadow-lg">
            Discover Our Solution
          </button>
        </div>
      </section>
    </div>
  );
};

export default ProjectWhat;