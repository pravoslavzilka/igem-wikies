import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ProjectWhat = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const problems = [
    {
      id: 1,
      title: "High protein feed costs and reliance on import:",
      icon: "https://static.igem.wiki/teams/5642/images/what/problem-soybean-feed.webp",
      quote: "Soybean is an amazing source of protein. I wish I could afford more!",
      author: "Štefan Strhársky",
      description: "Rising feed costs impact livestock farmers across Central Europe, forcing dependence on expensive imported protein sources."
    },
    {
      id: 2,
      title: "Deforestation caused by protein crops",
      icon: "https://static.igem.wiki/teams/5642/images/what/problem-nitrogen.webp",
      quote: "Our land was taken from us and turned into a one giant soy field",
      author: "Ms. Conservationist",
      description: "Large-scale monoculture farming destroys natural ecosystems and biodiversity for protein crop production."
    },
    {
      id: 3,
      title: "Nitrogen runoffs and manure utilization",
      icon: "https://static.igem.wiki/teams/5642/images/what/problem-deforestation.webp",
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
                  <div style={{ marginTop: "20px"}} className="w-full md:w-64 h-48 flex items-center justify-center rounded-lg">
                  
                    <img src={problem.icon} alt={problem.title} className="w-full h-full rounded-lg object-cover" />
                  
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
                <img className='rounded-xl' src="https://static.igem.wiki/teams/5642/images/what/problem-soybean-feed.webp" alt="" />
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
                  Most nitrogen excreted in manure is lost because it’s too concentrated for plants to absorb efficiently (8). As a result, over 50 % of nitrogen from livestock production never returns to the soil (9). Instead, it’s washed away by the rain, polluting rivers, lakes, and coastal zones. This drives eutrophication and contributes to bluehouse gas emissions. In Europe alone, nitrogen pollution from agriculture causes losses of €70 billion annually (10).
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


      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-5">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
              Some SynBio solutions came to mind immediately:
            </h2>
            
            <div className="max-w-3xl mx-auto space-y-4 text-xl text-gray-600 leading-relaxed mb-12">
              <p>engineering bacteria to fix nitrogen faster</p>
              <p>engineering soybean for enhanced protein content</p>
              <p>or drought resistance...</p>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-8 max-w-4xl mx-auto mb-8">
              <p className="text-2xl text-gray-700 leading-relaxed mb-4">
                ...but that would only reinforce the unsustainable status quo
              </p>
              <p className="text-3xl font-bold text-blue-700">
                We wanted to uproot it!
              </p>
            </div>
          </div>
        </div>
      </section>


      <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-20">
        <div className="max-w-7xl mx-auto px-5">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-black-800 mb-8">
              This is the superior plant - duckweed
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            {/* Left benefits */}
            <div className="space-y-8">
              <div className="text-right lg:text-right">
                <div className="inline-block bg-white rounded-xl p-6 shadow-lg max-w-xs">
                  <h3 className="font-semibold text-gray-800 mb-2">Protein Powerhouse</h3>
                  <p className="text-gray-600">as much protein as soybean</p>
                </div>
              </div>
              <div className="text-right lg:text-right">
                <div className="inline-block bg-white rounded-xl p-6 shadow-lg max-w-xs">
                  <h3 className="font-semibold text-gray-800 mb-2">Rapid Growth</h3>
                  <p className="text-gray-600">48 hour doubling time</p>
                </div>
              </div>
            </div>
            
            {/* Center - Duckweed image */}
            <div className="flex flex-col items-center">
              <div className="w-80 h-80 bg-blue-200 rounded-2xl flex items-center justify-center shadow-2xl mb-6 relative overflow-hidden">
                <div className="text-9xl">🌿</div>
                <div className="absolute inset-0 bg-gradient-to-t from-blue-300/20 to-transparent"></div>
              </div>
              <div className="text-center">
                <p className="text-gray-700 mb-2">Dive deeper 
                  <a href="#" className="text-blue-600 hover:text-blue-800 underline font-semibold ml-1">
                    here!
                  </a>
                </p>
              </div>
            </div>
            
            {/* Right benefits */}
            <div className="space-y-8">
              <div className="text-left lg:text-left">
                <div className="inline-block bg-white rounded-xl p-6 shadow-lg max-w-xs">
                  <h3 className="font-semibold text-gray-800 mb-2">Nitrogen Absorption</h3>
                  <p className="text-gray-600">absorbs excess nitrogen in manure quickly</p>
                </div>
              </div>
              <div className="text-left lg:text-left">
                <div className="inline-block bg-white rounded-xl p-6 shadow-lg max-w-xs">
                  <h3 className="font-semibold text-gray-800 mb-2">Versatile Growth</h3>
                  <p className="text-gray-600">thrives in a wide range of conditions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-5">
          <div className=" mb-16">
            
            
            <div className="max-w-3xl mx-auto space-y-4 text-xl text-gray-600 leading-relaxed mb-12">
              <p>We had ideas on what to do with duckweed, like engineering it to 
                uptake ammonium faster for manure remediation- nitroduck link or 
                  to grow faster and bigger - hanson bbd hp link.</p>
              <p>But we realized we just wouldn’t be able to do it. 
              Duckweeds are very hard to engineer.
              </p>
            </div>
          </div>
        </div>
      </section>


      <section className="bg-gray-50 py-20">
        <div className="bg-gray-50 rounded-xl p-8 max-w-4xl mx-auto mb-8">
              <p className="text-2xl text-gray-700 leading-relaxed mb-4">
               And we were not the only ones struggling. World-class experts do, too:
              </p>
              
            </div>
       
        <div className="max-w-7xl mx-auto px-5">
          
          <div className="max-w-5xl mx-auto">
            
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                {/* Expert Photo */}
                <div className="flex-shrink-0">
                  <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 overflow-hidden shadow-lg">
                    <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                      <svg className="w-16 h-16 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                      </svg>
                    </div>
                  </div>
                </div>
                
                {/* Quote Content */}
                <div className="flex-1 text-center md:text-left">
                  <div className="mb-4">
                    <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">
                      Julia-Eva Fortmueller
                    </h3>
                    <p className="text-blue-600 font-medium">
                      Weizmann Institute of Science
                    </p>
                  </div>
                  
                  {/* Quote */}
                  <div className="relative">
                    <div className="absolute -top-4 -left-4 text-6xl text-blue-200 font-serif">"</div>
                    <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed italic pl-8">
                      Transient expression works very well in duckweeds. But getting stable lines is an extremely laborious, lengthy and often unpredictable process. Also, a number of duckweed species have never been transformed at all.
                    </blockquote>
                    <div className="absolute -bottom-4 -right-4 text-6xl text-blue-200 font-serif">"</div>
                  </div>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="flex justify-center mt-8">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-blue-300 rounded-full"></div>
                  <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                </div>
              </div>
            </div>

            


          </div>
        </div>
      </section>


      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-5">
          <div className="max-w-5xl mx-auto">
            <div className="bg-gray-50 rounded-2xl shadow-xl p-8 md:p-12 border border-gray-200">
              <div className="flex flex-col md:flex-row-reverse items-center md:items-start gap-8">
                {/* Expert Photo - Now on the right */}
                <div className="flex-shrink-0">
                  <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 overflow-hidden shadow-lg">
                    <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                      <svg className="w-16 h-16 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                      </svg>
                    </div>
                  </div>
                </div>
                
                {/* Quote Content - Now on the left */}
                <div className="flex-1 text-center md:text-right">
                  <div className="mb-4">
                    <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">
                      Arturo Mari Ordoñez
                    </h3>
                    <p className="text-blue-600 font-medium">
                      GMI Institute
                    </p>
                  </div>
                  
                  {/* Quote */}
                  <div className="relative">
                    <div className="absolute -top-4 -left-4 text-6xl text-blue-200 font-serif">"</div>
                    <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed italic pl-8 md:pr-8 md:pl-0">
                      Duckweeds are monocotyledonous plants. Most available tools and parts are designed for dicotyledons and often don't work in duckweeds. There's a general shortage of working duckweed parts.
                    </blockquote>
                    <div className="absolute -bottom-4 -right-4 text-6xl text-blue-200 font-serif">"</div>
                  </div>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="flex justify-center mt-8">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-blue-300 rounded-full"></div>
                  <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      <section className="bg-gray-50 py-20">
        
       
        <div className="max-w-7xl mx-auto px-5">
          
          <div className="max-w-5xl mx-auto">
            
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                {/* Expert Photo */}
                <div className="flex-shrink-0">
                  <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 overflow-hidden shadow-lg">
                    <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                      <svg className="w-16 h-16 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                      </svg>
                    </div>
                  </div>
                </div>
                
                {/* Quote Content */}
                <div className="flex-1 text-center md:text-left">
                  <div className="mb-4">
                    <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">
                      Django Mangalam
                    </h3>
                    <p className="text-blue-600 font-medium">
                      Plantible
                    </p>
                  </div>
                  
                  {/* Quote */}
                  <div className="relative">
                    <div className="absolute -top-4 -left-4 text-6xl text-blue-200 font-serif">"</div>
                    <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed italic pl-8">
                      Duckweed cultivation is very hard to get right, they’re quite tricky to work with. There’s a million parameters to fine-tune. At PlantibleFoods, we have been perfecting it in ponds for almost ten years.   
                    </blockquote>
                    <div className="absolute -bottom-4 -right-4 text-6xl text-blue-200 font-serif">"</div>
                  </div>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="flex justify-center mt-8">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-blue-300 rounded-full"></div>
                  <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                </div>
              </div>
            </div>

            


          </div>
        </div>
      </section>



      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-5">
          <div className="text-center mb-16">
           
            
            <div className="bg-gray-50 rounded-xl p-8 max-w-4xl mx-auto mb-8">
              <p className="text-2xl text-gray-700 leading-relaxed mb-4">
                Duckweed has the potential to became a novel crop, but a lot of pieces are missing

              </p>
              <p className="text-3xl font-bold text-red-700">
                 <Link to="/project/how/">See how we filled the gaps! </Link>
              </p>
            </div>
          </div>
        </div>
      </section>


      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-5">
          <div className="max-w-5xl mx-auto">
            <div className="mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8 text-center">
                References
              </h2>
            </div>
            
            <div className="bg-gray-50 rounded-2xl p-8 md:p-12 shadow-lg">
              <ol className="space-y-6 text-gray-700">
                <li className="flex gap-4 leading-relaxed">
                  <span className="text-blue-600 font-semibold flex-shrink-0">1.</span>
                  <div>
                    <a 
                      href="https://publications.jrc.ec.europa.eu/repository/bitstream/JRC137180/JRC137180_01.pdf" 
                      className="text-blue-600 hover:text-blue-800 underline break-all"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://publications.jrc.ec.europa.eu/repository/bitstream/JRC137180/JRC137180_01.pdf
                    </a>
                  </div>
                </li>
                
                <li className="flex gap-4 leading-relaxed">
                  <span className="text-blue-600 font-semibold flex-shrink-0">2.</span>
                  <div>
                    <a 
                      href="https://www.europarl.europa.eu/RegData/etudes/BRIE/2023/739328/EPRS_BRI%282023%29739328_EN" 
                      className="text-blue-600 hover:text-blue-800 underline break-all"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://www.europarl.europa.eu/RegData/etudes/BRIE/2023/739328/EPRS_BRI%282023%29739328_EN
                    </a>
                  </div>
                </li>
                
                <li className="flex gap-4 leading-relaxed">
                  <span className="text-blue-600 font-semibold flex-shrink-0">3.</span>
                  <div>
                    <a 
                      href="https://www.nature.com/articles/s41598-024-57522-z" 
                      className="text-blue-600 hover:text-blue-800 underline break-all"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://www.nature.com/articles/s41598-024-57522-z
                    </a>
                  </div>
                </li>
                
                <li className="flex gap-4 leading-relaxed">
                  <span className="text-blue-600 font-semibold flex-shrink-0">4.</span>
                  <div>
                    <a 
                      href="https://www.thecattlesite.com/articles/weekly-global-protein-digest-usdas-eu-annual-and-us-monthly-livestock-reports" 
                      className="text-blue-600 hover:text-blue-800 underline break-all"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://www.thecattlesite.com/articles/weekly-global-protein-digest-usdas-eu-annual-and-us-monthly-livestock-reports
                    </a>
                  </div>
                </li>
                
                <li className="flex gap-4 leading-relaxed">
                  <span className="text-blue-600 font-semibold flex-shrink-0">5.</span>
                  <div>
                    <a 
                      href="https://wwf.panda.org/discover/our_focus/food_practice/sustainable_production/soy/" 
                      className="text-blue-600 hover:text-blue-800 underline break-all"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://wwf.panda.org/discover/our_focus/food_practice/sustainable_production/soy/
                    </a>
                  </div>
                </li>
                
                <li className="flex gap-4 leading-relaxed">
                  <span className="text-blue-600 font-semibold flex-shrink-0">6.</span>
                  <div>
                    <a 
                      href="https://trase.earth/explore/spatial-data/map?country=brazil&node_type_slug=municipality&indicatorName=SOY_DEFORESTATION_5_YEAR_TOTAL&indicatorYear=2023" 
                      className="text-blue-600 hover:text-blue-800 underline break-all"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://trase.earth/explore/spatial-data/map?country=brazil&node_type_slug=municipality&indicatorName=SOY_DEFORESTATION_5_YEAR_TOTAL&indicatorYear=2023
                    </a>
                  </div>
                </li>
                
                <li className="flex gap-4 leading-relaxed">
                  <span className="text-blue-600 font-semibold flex-shrink-0">7.</span>
                  <div>
                    <a 
                      href="https://www.earthsight.org.uk/secret-ingredient#group-section-Introduction-kxgLd" 
                      className="text-blue-600 hover:text-blue-800 underline break-all"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://www.earthsight.org.uk/secret-ingredient#group-section-Introduction-kxgLdnqSpx
                    </a>
                  </div>
                </li>
                
                <li className="flex gap-4 leading-relaxed">
                  <span className="text-blue-600 font-semibold flex-shrink-0">8.</span>
                  <div>
                    <a 
                      href="https://www.fairr.org/resources/reports/index-2021-how-animal-waste-mismanagement-drives-biodiversity-loss-and-accelerates-climate-risk" 
                      className="text-blue-600 hover:text-blue-800 underline break-all"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://www.fairr.org/resources/reports/index-2021-how-animal-waste-mismanagement-drives-biodiversity-loss-and-accelerates-climate-risk
                    </a>
                  </div>
                </li>
                
                <li className="flex gap-4 leading-relaxed">
                  <span className="text-blue-600 font-semibold flex-shrink-0">9.</span>
                  <div>
                    <a 
                      href="https://environment.ec.europa.eu/topics/water/nitrates_en" 
                      className="text-blue-600 hover:text-blue-800 underline break-all"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://environment.ec.europa.eu/topics/water/nitrates_en
                    </a>
                  </div>
                </li>
                
                <li className="flex gap-4 leading-relaxed">
                  <span className="text-blue-600 font-semibold flex-shrink-0">10.</span>
                  <div>
                    <a 
                      href="https://www.unep.org/interactives/beat-nitrogen-pollution/" 
                      className="text-blue-600 hover:text-blue-800 underline break-all"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://www.unep.org/interactives/beat-nitrogen-pollution/
                    </a>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>


  </div>          
      
  );
};

export default ProjectWhat;