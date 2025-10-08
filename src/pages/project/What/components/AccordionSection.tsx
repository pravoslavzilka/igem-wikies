// src/pages/project/What/components/AccordionSection.tsx
import React, { useState } from 'react';
import { ChevronDown, Plus } from 'lucide-react';

// Actual accordion data with real content
const accordionData = [
  {
    title: "Running a farm is less and less profitable",
    content: [ <>
      <p className='mt-4'>Czech - and more broadly - European livestock production is heavily reliant on imported high-protein feeds. <b>66 % of the EU's high‑protein animal feed is imported</b>, and the most widely used source - <b>soybean - accounts for 96 %</b> (1). That is roughly <b>33 million tons</b> of soy products, at the cost of costing around <b>14 billion euros</b> (2)., <br/> </p>
      <p className='mt-4'>Rising feed costs are hitting farmers hard - feed makes up 55 % of the production cost in poultry, 32% in pigs, and over 14% in cattle (3). Even though meat and milk prices are high, livestock producers continue to see <b>shrinking profit margins</b> (4).,  <br/> </p>
      
      <p className='mt-4'><b>Quality protein feed is becoming less affordable. </b></p>

      </>
    ]
  },
  {
    title: "And the costs go far beyond just money",
    content: [
      <>
      <p className='mt-4'>Conservationists emphasized that Europe's demand for animal feed is a major driver of deforestation abroad, with approximately <b>75% of global soybean production used for animal feed</b> and its cultivation <b>directly linked to large-scale environmental degradation</b> (5). </p>
      <p className='mt-4'>In Brazil alone, <b>over 5 million hectares of Key Biodiversity Areas </b> – particularly within the tropical savannas of the Cerrado region – <b>have been cleared to make way for soybean </b> monocultures (6). </p>
      <p className='mt-4'>These vast soybean plantations not only <b>threaten biodiversity</b>, but agribusinesses themselves rely on natural resources like water and soil - resources now at risk from unsustainable practices. In response, a new business model is emerging in the Cerrado, where stakeholders aim to boost productivity sustainably through improved practices and new technologies.</p>
    </>
    ]
  },
  {
    title: "The whole value chain is linear – it should be a cycle",
    content: [
      <>
      <p className="mt-4"><b>Most nitrogen excreted in manure is lost</b> because it's too concentrated for plants to absorb efficiently (8). As a result, over 50% of nitrogen from livestock production never returns to the cycle (9).</p>
      <p className="mt-4">Instead, it's washed away by rain, <b>polluting rivers, lakes, and coastal zones</b>. This causes <b>eutrophication</b> — excessive nutrient enrichment of waters that triggers algal blooms, depletes oxygen, and <b>kills aquatic life</b>.</p>
      <p className="mt-4">Beyond harming ecosystems, nitrogen loss also means farmers lose the fertilizer value of manure, while society bears the costs of water treatment, health impacts, and greenhouse gas emissions. In Europe alone, <b>nitrogen pollution from agriculture causes losses of about €70 billion annually</b> (10).</p>
    </>
    ]
  }
];

const AccordionSection: React.FC = () => {
  const [openItems, setOpenItems] = useState<{ [key: number]: boolean }>({ 0: true });

  const toggleItem = (index: number) => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <div className="w-full bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-8 lg:px-32">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col xl:flex-row gap-8 lg:gap-12 xl:gap-16">
          
          {/* Accordion Content */}
          <div className="flex-1 min-w-0">
            <div className="space-y-4 sm:space-y-6">
              {accordionData.map((item, index) => (
                <div key={index} className="border-b border-gray-200 last:border-b-0">
                  
                  {/* Header */}
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full flex items-center gap-4 sm:gap-6 lg:gap-8 py-4 sm:py-6 text-left hover:bg-gray-50 transition-colors duration-200 rounded-lg px-2 sm:px-4 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                  >
                    {/* Icon */}
                    <div className="flex items-center justify-center w-4 h-4 sm:w-5 sm:h-5 bg-gray-100 rounded-sm flex-shrink-0">
                      {openItems[index] || (index === 0 && openItems[0] !== false) ? (
                        <div className="w-2 sm:w-3 h-0.5 bg-green-800"></div>
                      ) : (
                        <Plus size={10} className=" sm:w-3 sm:h-3" />
                      )}
                    </div>
                    
                    {/* Title */}
                    <h3 
                      className={`flex-1 text-lg sm:text-xl lg:text-2xl font-semibold leading-tight pr-2 text-gray-900'
                      }`} 
                      style={{ fontFamily: 'Urbanist, sans-serif' }}
                    >
                      {item.title}
                    </h3>
                    
                    {/* Chevron */}
                    <div className="flex-shrink-0">
                      <ChevronDown
                        size={16}
                        className={` transform transition-transform duration-300 ${
                          openItems[index] || (index === 0 && openItems[0] !== false) ? 'rotate-180' : ''
                        }`}
                      />
                    </div>
                  </button>
                  
                  {/* Content */}
                  <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openItems[index] || (index === 0 && openItems[0] !== false) 
                      ? 'max-h-screen opacity-100 pb-6'
                      : 'max-h-0 opacity-0'
                  }`}>
                    <div className="pl-6 sm:pl-8 lg:pl-[52px] pr-4 sm:pr-8">
                      <div className="space-y-4 sm:space-y-6">
                        {item.content.map((paragraph, pIndex) => (
                          <p 
                            key={pIndex}
                            className="text-sm sm:text-base leading-relaxed text-gray-700 text-justify"
                            style={{ 
                              fontFamily: 'Space Grotesk, sans-serif',
                              lineHeight: '168%',
                              color: 'rgba(23, 31, 22, 0.75)'
                            }}
                          >
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Image Section */}
          <div className="w-full xl:w-[484px] xl:flex-shrink-0">
            <div className="h-64 sm:h-80 lg:h-96 xl:h-[680px] rounded-2xl overflow-hidden">
              <img 
                src="https://static.igem.wiki/teams/5642/images/what/pxl-20250807-163451932.webp" 
                alt="Farm image"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccordionSection;