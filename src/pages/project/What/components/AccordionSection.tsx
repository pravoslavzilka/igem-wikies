import React, { useState } from 'react';
import { ChevronDown, Plus, Minus } from 'lucide-react';

const AccordionComponent = () => {
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (index) => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const accordionItems = [
    {
      title: "Running a farm is less and less profitable",
      content: [
        "Czech - and more broadly - European livestock production is heavily reliant on imported high-protein feeds. 66 % of the EU’s high‑protein animal feed is imported, and the most widely used source - soybean - accounts for 96 % (1). That is roughly 33 million tons of soy products, at the cost of costing around 14 billion euros (2).",
        "Rising feed costs are hitting farmers hard—feed makes up 55 % of the production cost in poultry, 32% in pigs, and over 14% in cattle (3). Even though meat and milk prices are high, livestock producers continue to see shrinking profit margins (4).",
        "Quality protein feed is becoming less affordable. Read more on the farmers’ burden - farmer HP link"
      ],
      isExpanded: false
    },
    {
      title: "And the costs go far beyond just money",
      content: [
        "Conservationists emphasized that Europe's demand for animal feed is a major driver of deforestation abroad. Approximately 75 % of global soybean production is used for animal feed, and its cultivation has been directly linked to large-scale environmental degradation (5).",
        "In Brazil alone, over 5 million hectares of Key Biodiversity Areas – particularly within the tropical savannas of the Cerrado region – have been cleared to make way for soybean monocultures (6).",
        "These vast soybean plantations not only threaten biodiversity but also contribute to the displacement of Indigenous communities, destruction of native ecosystems, and long-term soil erosion (7). Our soy-based animal feed fuels deforestation and biodiversity losses. Read more on the environmental toll - conservationist HP"
      ],
      isExpanded: false
    },
    {
      title: "The whole value chain is linear – it should be a cycle",
      content: [
        "Most nitrogen excreted in manure is lost because it's too concentrated for plants to absorb efficiently (8). As a result, over 50% of nitrogen from livestock production never returns to the soil (9).",
        "Instead, it's washed away by rain, polluting rivers, lakes, and coastal zones. This causes eutrophication — excessive nutrient enrichment of waters that triggers algal blooms, depletes oxygen, and kills aquatic life.",
        "Beyond harming ecosystems, nitrogen loss also means farmers lose the fertilizer value of manure, while society bears the costs of water treatment, health impacts, and greenhouse gas emissions. In Europe alone, nitrogen pollution from agriculture causes losses of about €70 billion annually (10)."
      ],
      isExpanded: false
    }
  ];

  return (
    <div className="w-full min-h-screen bg-white">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-48 px-8 lg:px-32 py-20">
        {/* Accordion Section */}
        <div className="flex flex-col gap-10 w-full lg:w-[584px]">
          <div className="flex flex-col gap-6">
            {accordionItems.map((item, index) => (
              <div key={index} className="flex flex-col">
                {/* Header */}
                <div 
                  className="flex items-center gap-8 cursor-pointer py-2 hover:bg-gray-50 rounded-lg transition-colors"
                  onClick={() => toggleItem(index)}
                >
                  {/* Icon */}
                  <div className="flex items-center justify-center w-5 h-5 bg-gray-100 rounded-sm">
                    {openItems[index] || (index === 0 && openItems[0] !== false) ? (
                      <div className="w-3 h-0.5 bg-green-800"></div>
                    ) : (
                      <Plus size={12} className="text-gray-600" />
                    )}
                  </div>
                  
                  {/* Title */}
                  <h3 className={`flex-1 text-xl lg:text-2xl font-semibold leading-tight ${
                    index === 2 ? 'text-green-800' : 'text-gray-900'
                  }`} style={{ fontFamily: 'Urbanist, sans-serif' }}>
                    {item.title}
                  </h3>
                  
                  {/* Chevron */}
                  <ChevronDown 
                    size={16} 
                    className={`text-gray-600 transition-transform ${
                      openItems[index] || (index === 0 && openItems[0] !== false) ? 'rotate-180' : ''
                    }`}
                  />
                </div>
                
                {/* Content */}
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openItems[index] || (index === 0 && openItems[0] !== false) 
                    ? 'max-h-screen opacity-100 mt-4'
                    : 'max-h-0 opacity-0'
                }`}>
                  <div className="pl-13 flex flex-col gap-6" style={{ marginLeft: '52px' }}>
                    {item.content.map((paragraph, pIndex) => (
                      <p 
                        key={pIndex}
                        className="text-gray-700 text-base leading-relaxed"
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
            ))}
          </div>
          

        </div>
        
        {/* Image Section */}
        <div className="w-full lg:w-[484px] h-[400px] lg:h-[680px] rounded-2xl overflow-hidden flex-shrink-0">
          <img 
            src="https://static.igem.wiki/teams/5642/images/what/pxl-20250807-163451932.webp" 
            alt="Farm image"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default AccordionComponent;