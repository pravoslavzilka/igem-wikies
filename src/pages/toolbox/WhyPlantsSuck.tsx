import { useState, useEffect, useRef } from "react";





const WhyPlantsSuck = () => {

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-4xl mx-auto">
        {/* Main Title */}
        <h1 className="text-3xl font-bold text-center text-black mb-8" style={{ fontFamily: "Space Grotesk" }}>
          Plants Are Not Just Green Bacteria
        </h1>

        {/* Main Content Paragraph */}
        <div className="mb-12">
          <p className="text-base leading-relaxed text-black mb-4" style={{ fontFamily: "Urbanist" }}>
            <strong>Plants</strong> have enormous potential in biotechnology, but working with them comes with far more challenges 
            than working with microbes. Bacteria can be grown quickly, transformed in a matter of hours, and studied 
            in simple laboratory conditions. In contrast, plants grow slowly, require controlled environments, and carry 
            genomes that are often too complex and duplicated [1]. Genetic modifications in plants are rarely 
            straightforward, since most protocols depend on several demanding steps in tissue culture [2]. These steps 
            often cause further complications, such as poor regeneration or unintended genetic changes, which make 
            consistent results harder to achieve [3]. Despite all these difficulties, plants are worth the effort. Where 
            microbes end, plants are only getting started — they are indispensable for solving real-world problems in 
            agriculture, nutrition, pharmaceuticals, and green technologies.
          </p>
        </div>

        {/* The Waiting Game Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Left Column - Text */}
          <div className="lg:col-span-1">
            <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
              <h2 className="text-xl font-bold text-black mb-4" style={{ fontFamily: "Space Grotesk" }}>The Waiting Game</h2>
              <p className="text-sm leading-relaxed text-black" style={{ fontFamily: "Urbanist" }}>
                Time is the most immediate and obvious challenge in 
                plant biotechnology. Microbial systems such as <em>E. coli</em> 
                can be transformed and analyzed within 24–48 hours, 
                allowing researchers to quickly test new constructs, 
                obtain results and iterate [4]. In contrast, plant 
                transformations take far longer. In the standard model 
                <em>Arabidopsis thaliana</em>, stable transformation and 
                selection typically requires 2 - 3 months [5]. 
                Agricultural plants like corn, rice, wheat or soybeans 
                tend to be more recalcitrant and the process is even 
                more time-consuming. It often extends over 6 - 9 
                months due to tissue culture, regeneration, and 
                multiple rounds of selection [6]. These prolonged 
                iteration cycles make optimization far more laborious 
                and expensive, than in bacterial systems.
              </p>
            </div>
          </div>

          {/* Middle Column - Chart */}
          <div className="lg:col-span-2 flex flex-col items-center">
            <h3 className="text-lg font-semibold text-black mb-4 text-center" style={{ fontFamily: "Space Grotesk" }}>
              Days needed for transformation
            </h3>
            
            {/* Bar Chart */}
            <div className="w-full" style={{ fontFamily: "Urbanist" }}> {/* removed max-w-xs */}
              <div className="mb-3">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm text-black">E.coli</span>
                  <span className="text-sm text-black">1</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-6">
                  <div className="bg-blue-400 h-6 rounded-full" style={{width: '2%'}}></div>
                </div>
              </div>
              
              <div className="mb-3">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm text-black">Arabidopsis</span>
                  <span className="text-sm text-black">90</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-6">
                  <div className="bg-orange-400 h-6 rounded-full" style={{width: '45%'}}></div>
                </div>
              </div>
              
              <div className="mb-3">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm text-black">Soybean</span>
                  <span className="text-sm text-black">200</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-6">
                  <div className="bg-green-500 h-6 rounded-full" style={{width: '100%'}}></div>
                </div>
              </div>
            </div>

            {/* Image placeholder for the middle chart/graph */}
            
            <div className=" space-y-4">
            {/* E.coli Image */}
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1576671081837-49000212a370?w=300&h=150&fit=crop"
                alt="E.coli bacteria"
                className="w-full h-32 object-cover rounded-lg mb-2"
              />
              <p className="text-xs text-black font-medium text-center">E.coli</p>
            </div>

            {/* Plant seedlings Image */}
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=300&h=150&fit=crop"
                alt="Plant seedlings in laboratory"
                className="w-full h-32 object-cover rounded-lg mb-2"
              />
              <p className="text-xs text-gray-600 text-center">
                The budding seedling of an Arabidopsis thaliana triple mutant — Martin 
                Stübler, via Wikimedia Commons, CC BY-SA 4.0
              </p>
            </div>
          </div>
          </div>

         
          
        </div>
      </div>
    </div>
  );

}


export default WhyPlantsSuck;

