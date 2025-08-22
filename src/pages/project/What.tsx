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
              <div className="">
                <img
                  src="https://domalenka.cz/uploads/_cache/uploads-images-atrakcie-hrady-zamky-zrucaniny-zvolen-hrad-jpg-crop-1216x684.jpg"
                  alt="Czech Flag"
                  className="w-96 h-56 bg-gradient-to-br from-blue-100 to-blue-50 rounded-xl flex items-center justify-center border-2 border-blue-200 shadow-lg"
                />
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
                  <div style={{ marginTop: "20px"}} className="bg-gray-200 border-2 border-dashed border-gray-400 w-full md:w-64 h-48 flex items-center justify-center rounded-lg">
                  <div className="text-center text-gray-600">
                    <div className="text-sm mb-2">🔬 IMAGE PLACEHOLDER</div>
                    
                  </div>
                </div>
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


      
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-blue-100 rounded-full p-4 w-16 h-16 flex items-center justify-content-center mb-6 lg:hidden">
              <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
              </svg>
            </div>
            <div className="order-2 lg:order-1">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-6 hidden lg:flex">
                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4 pb-2 border-b-2 border-blue-200 inline-block">
                &quot;Running a farm is less and less profitable&quot;
              </h3>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Czech - and more broadly - European livestock production today heavily reliant on imported high-protein feeds: <span className="font-semibold">80% of the EU's high-protein animal feed is imported</span>, and the most widely used source - soybean - accounts for <span className="font-semibold">68% of it</span>. That is roughly 33 million tons of soy products, at the cost of costing around 14 billion euros.
                </p>
                <p>
                  Rising feed costs are hitting farmers hard—<span className="font-semibold">feed makes up 65% of the production cost in poultry, 35% in pigs, and over 14% in cattle</span>. Even though meat and milk prices are high, livestock producers continue to see shrinking profit margins.
                </p>
                <p className="font-medium text-blue-700">
                  Quality protein feed is becoming less affordable.
                  <a href="#" className="text-blue-600 hover:text-blue-800 underline ml-2">
                    Read more on the farmers' burden - farmer HF link
                  </a>
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="w-full h-64 bg-amber-100 rounded-xl flex items-center justify-center shadow-lg">
                <div className="text-8xl">🌾</div>
              </div>
            </div>
          </div>
        </div>
      </section>


      
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-1">
              <div className="w-full h-64 bg-blue-100 rounded-xl flex items-center justify-center shadow-lg">
                <div className="text-8xl">🌿</div>
              </div>
            </div>
            <div className="order-2">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4 pb-2 border-b-2 border-blue-200 inline-block">
                &quot;And the costs go far beyond just money&quot;
              </h3>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Conservationists emphasised that Europe's demand for animal feed is a major driver of deforestation abroad. Approximately <span className="font-semibold">75% of global soybean production is used for animal feed</span>, and its cultivation has been directly linked to large-scale environmental degradation. In Brazil alone, over 5 million hectares of Key Biodiversity Areas – home to species found nowhere else in the world – have been cleared to make way for soybean monocultures.
                </p>
                <p>
                  These vast soybean plantations not only threaten biodiversity but also contribute to the displacement of Indigenous communities, destruction of soil through long-term soil erosion. <span className="font-semibold"> Our soy-based animal feed fuels deforestation and biodiversity losses.</span>
                </p>
                <p className="font-medium text-blue-700">
                  <a href="#" className="text-blue-600 hover:text-blue-800 underline">
                    Read more on the environmental toll - conservationist HF link
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>



           
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-blue-100 rounded-full p-4 w-16 h-16 flex items-center justify-content-center mb-6 lg:hidden">
              <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
              </svg>
            </div>
            <div className="order-2 lg:order-1">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-6 hidden lg:flex">
                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4 pb-2 border-b-2 border-blue-200 inline-block">
                &quot;The whole value chain is linear – it should be a cycle &quot;
              </h3>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Most nitrogen excreted in manure is lost because it’s too concentrated for plants to absorb efficiently (8). As a result, over 50 % of nitrogen from livestock production never returns to the soil (9). Instead, it’s washed away by the rain, polluting rivers, lakes, and coastal zones. This drives eutrophication and contributes to greenhouse gas emissions. In Europe alone, nitrogen pollution from agriculture causes losses of €70 billion annually (10).
                </p>
                <p>
                    <span className="font-semibold"> Manure - a potentially valuable resource is being mishandled.</span>

                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="w-full h-64 bg-amber-100 rounded-xl flex items-center justify-center shadow-lg">
                <div className="text-8xl">🌾</div>
              </div>
            </div>
          </div>
        </div>
      </section>





      {/* Waste Management Section */}
      <section className="bg-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-5">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              The whole value chain is linear – it should be a cycle
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-white bg-opacity-10 rounded-xl p-8 backdrop-blur-sm border border-white border-opacity-20">
                <div className="space-y-4 text-white leading-relaxed">
                  <p>
                    Most nitrogen excreted in manure is lost because it's too concentrated to use efficiently – <span className="font-semibold">only 20-50% of the nitrogen from livestock production never returns to the soil</span>. Instead, it's washed away by the rain, polluting rivers, lakes, and coastal zones.
                  </p>
                  <p>
                    This drives eutrophication and contributes to bluehouse gas emissions. In Europe alone, nitrogen pollution from agriculture causes losses of <span className="font-semibold">€70 billion annually</span>.
                  </p>
                  <div className="mt-6 p-4 bg-white bg-opacity-20 rounded-lg">
                    <p className="font-semibold text-lg">
                      Manure - a potentially valuable resource is being mishandled.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="w-full h-64 bg-white bg-opacity-10 rounded-xl flex items-center justify-center shadow-lg backdrop-blur-sm">
                <div className="text-8xl">🔄</div>
              </div>
            </div>
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