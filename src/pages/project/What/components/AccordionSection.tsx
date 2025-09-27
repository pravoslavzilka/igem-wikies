import React, { useState } from 'react';

interface AccordionItem {
  title: string;
  content: string[];
  isOpen: boolean;
}

const AccordionSection: React.FC = () => {
  const [accordionItems, setAccordionItems] = useState<AccordionItem[]>([
    {
      title: "Running a farm is less and less profitable",
      content: [
        "Czech - and more broadly - European livestock production today heavily reliant on imported high-protein feeds: 80% of the EU's high-protein animal feed is imported, and the most widely used source - soybean - accounts for 68% of it. That is roughly 33 million tons of soy products costing around 14 billion euros.",
        "Rising feed costs are hitting farmers hard—feed makes up 65% of the production cost in poultry, 35% in pigs, and over 14% in cattle. Even though meat and milk prices are high, livestock producers continue to see shrinking profit margins.",
        "Quality protein feed is becoming less affordable. Read more on the farmers' burden - farmer HF link"
      ],
      isOpen: true
    },
    {
      title: "And the costs go far beyond just money",
      content: [
        "Environmental impact content here..."
      ],
      isOpen: false
    },
    {
      title: "The whole value chain is linear – it should be a cycle",
      content: [
        "Circular economy content here..."
      ],
      isOpen: false
    }
  ]);

  const toggleAccordion = (index: number) => {
    setAccordionItems(prev => 
      prev.map((item, i) => ({
        ...item,
        isOpen: i === index ? !item.isOpen : false
      }))
    );
  };

  return (
    <section className="flex flex-col items-start px-32 pt-20 pb-10 gap-16 w-full h-[800px] bg-white">
      <div className="flex flex-row justify-between items-center gap-[200px] w-full max-w-[1184px] h-[680px]">
        
        {/* Left side - Accordion */}
        <div className="flex flex-col items-start gap-10 w-[584px] h-[589px] mx-auto">
          <div className="flex flex-col items-start gap-6 w-full h-[408px]">
            
            {accordionItems.map((item, index) => (
              <div key={index} className="w-full">
                {/* Accordion Header */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className="flex flex-row items-center gap-8 w-full h-[39px] text-left"
                >
                  {/* Icon */}
                  <div className="flex flex-col items-start p-2 gap-2 w-5 h-5 bg-green-800 flex-shrink-0">
                    <div className={`w-2.5 h-0.5 bg-white transition-transform ${item.isOpen ? 'rotate-0' : 'rotate-0'}`}></div>
                    {!item.isOpen && <div className="w-0.5 h-2.5 bg-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>}
                  </div>
                  
                  {/* Title */}
                  <h3 
                    className="flex-grow text-3xl font-semibold leading-[140%] text-black"
                    style={{ fontFamily: 'Urbanist, sans-serif' }}
                  >
                    {item.title}
                  </h3>
                </button>

                {/* Accordion Content */}
                {item.isOpen && (
                  <div className="flex flex-col items-start pl-13 gap-6 w-full mt-6">
                    {item.content.map((paragraph, pIndex) => (
                      <p 
                        key={pIndex}
                        className="w-[532px] text-base leading-[168%] text-black/75"
                        style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
          </div>
        </div>

        {/* Right side - Image */}
        <div className="w-[484px] h-[680px] rounded-2xl overflow-hidden mx-auto">
          <img 
            src="https://static.igem.wiki/teams/5642/images/what/duckweed-in-hands.webp" 
            alt="Duckweed in Hands"
            className="w-full h-full object-cover"
          />
        </div>
        
      </div>
    </section>
  );
};

export default AccordionSection;