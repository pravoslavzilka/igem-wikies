import { useState } from 'react';

const ProjectWhy = ({ 
  heroImageUrl = "https://static.igem.wiki/teams/5642/images/why/duckweed.webp",
  firstSectionImageUrl = null, 
  secondSectionImageUrl = null,
  futureSectionImageUrl = null,
  // Images for different accordion states
  novelProteinImageUrl = null,
  phytoremediationImageUrl = null,
  recombinantImageUrl = null,
  monocotImageUrl = null,
  // Images for status accordion states
  foodImageUrl = null,
  phytoremediationStatusImageUrl = null,
  biomanufacturingImageUrl = null,
  basicResearchImageUrl = null
}: {
  heroImageUrl?: string | null;
  firstSectionImageUrl?: string | null;
  secondSectionImageUrl?: string | null;
  futureSectionImageUrl?: string | null;
  novelProteinImageUrl?: string | null;
  phytoremediationImageUrl?: string | null;
  recombinantImageUrl?: string | null;
  monocotImageUrl?: string | null;
  foodImageUrl?: string | null;
  phytoremediationStatusImageUrl?: string | null;
  biomanufacturingImageUrl?: string | null;
  basicResearchImageUrl?: string | null;
} = {}) => {
  const [activeAccordion, setActiveAccordion] = useState<string | null>('novel-protein');
  const [activeStatusAccordion, setActiveStatusAccordion] = useState<string | null>('food');

  type AccordionData = {
    [key: string]: {
      title: string;
      content: string[];
      imageUrl: string | null;
    };
  };

  const accordionData: AccordionData = {
    'novel-protein': {
      title: 'Novel Protein Crop',
      content: [
        'Duckweeds, especially Wolffia globosa, have been used traditionally as food in Southeast Asia and are now gaining interest globally for their nutritional potential. With as much protein as soybeans, full amino acid profile, and a biomass doubling time of just 48 hours, duckweed could be a novel source of protein for animal feed or even human consumption.',
        'Nutrient analyses across all five genera confirm alignment with WHO recommendations. Duckweed is also used as feed for livestock and fish, often surpassing corn in protein content. Though pricing limits widespread livestock use, it holds strong potential in premium pet food and functional foods.'
      ],
      imageUrl: novelProteinImageUrl
    },
    'phytoremediation': {
      title: 'Phytoremediation Chassis',
      content: ['Content for phytoremediation chassis would go here.'],
      imageUrl: phytoremediationImageUrl
    },
    'recombinant': {
      title: 'Recombinant Proteins Factory',
      content: ['Content for recombinant proteins factory would go here.'],
      imageUrl: recombinantImageUrl
    },
    'monocot': {
      title: 'Plant Monocot Model Organism',
      content: ['Content for plant monocot model organism would go here.'],
      imageUrl: monocotImageUrl
    }
  };

  // Function to get current image URL based on active accordion
  const getCurrentImageUrl = () => {
    if (activeAccordion && accordionData[activeAccordion] && accordionData[activeAccordion].imageUrl) {
      return accordionData[activeAccordion].imageUrl;
    }
    return firstSectionImageUrl;
  };

  const statusAccordionData: AccordionData = {
    'food': {
      title: 'Food',
      content: [
        'Early efforts are already underway. Startups like GreenOnyx (), PlantibleFoods (), microTERRA (), and LemnaPRO () are pioneers in duckweed cultivation for human use. With superior vegan greens and proteins that have egg-like properties, duckweed-based foods are slowly making their way into gastronomy!',
        'Some duckweed are approved for human consumption - recognized as GRAS in the USA and authorized as a novel food in the EU for use in protein-rich food products'
      ],
      imageUrl: foodImageUrl
    },
    'phytoremediation-status': {
      title: 'Phytoremediation',
      content: ['Content for phytoremediation status would go here.'],
      imageUrl: phytoremediationStatusImageUrl
    },
    'biomanufacturing': {
      title: 'Biomanufacturing',
      content: ['Content for biomanufacturing would go here.'],
      imageUrl: biomanufacturingImageUrl
    },
    'basic-research': {
      title: 'Basic Research',
      content: ['Content for basic research would go here.'],
      imageUrl: basicResearchImageUrl
    }
  };

  // Function to get current status image URL based on active accordion
  const getCurrentStatusImageUrl = () => {
    if (activeStatusAccordion && statusAccordionData[activeStatusAccordion] && statusAccordionData[activeStatusAccordion].imageUrl) {
      return statusAccordionData[activeStatusAccordion].imageUrl;
    }
    return secondSectionImageUrl;
  };

  interface AccordionItemProps {
    id: string;
    title: string;
    content: string[];
    isActive: boolean;
    onClick: (id: string | null) => void;
    showContent?: boolean;
  }

  const AccordionItem = ({ id, title, content, isActive, onClick, showContent = false }: AccordionItemProps) => (
    <div className="w-full">
      <div 
        className="flex items-center gap-8 cursor-pointer py-2"
        onClick={() => onClick(isActive ? null : id)}
      >
        <div className="flex items-center justify-center w-5 h-5">
          {isActive ? (
            <div className="w-5 h-5 bg-green-800 flex items-center justify-center">
              <div className="w-2.5 h-0.5 bg-white"></div>
            </div>
          ) : (
            <div className="w-5 h-5 bg-gray-100 flex items-center justify-center">
              <div className="w-3 h-3 text-gray-500">
                <svg viewBox="0 0 12 12" fill="currentColor">
                  <path d="M6 0v12M0 6h12" stroke="currentColor" strokeWidth="1"/>
                </svg>
              </div>
            </div>
          )}
        </div>
        <h3 
          className={`text-3xl font-semibold leading-tight ${isActive ? 'text-green-800' : 'text-gray-900'}`}
          style={{ fontFamily: 'Urbanist, sans-serif', fontWeight: 600, fontSize: '32px', lineHeight: '140%' }}
        >
          {title}
        </h3>
      </div>
      
      {isActive && showContent && (
        <div className="ml-13 mt-6 space-y-6">
          {content.map((paragraph: string, index: number) => (
            <p 
              key={index}
              className="text-gray-700 leading-relaxed max-w-lg"
              style={{ 
                fontFamily: 'Space Grotesk, sans-serif', 
                fontSize: '16px', 
                lineHeight: '168%',
                color: 'rgba(23, 31, 22, 0.75)'
              }}
            >
              {paragraph}
            </p>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <div className="w-full bg-white" style={{ width: '1440px', minHeight: '3908px' }}>
      {/* Hero Section */}
      <section 
        className="flex flex-col items-center px-10 py-10"
        style={{ width: '1440px', height: '849px', padding: '10px 40px' }}
      >
        <div 
          className="flex flex-col justify-center items-start gap-1"
          style={{ padding: '80px 128px', width: '1360px', height: '349px' }}
        >
          <p 
            className="text-gray-500 mb-1"
            style={{ 
              fontFamily: 'Urbanist, sans-serif',
              fontSize: '18px',
              fontWeight: 600,
              lineHeight: '140%',
              color: 'rgba(27, 27, 27, 0.5)'
            }}
          >
            Why
          </p>
          <h1 
            className="text-gray-900 mb-4 self-stretch"
            style={{ 
              fontFamily: 'Urbanist, sans-serif',
              fontSize: '48px',
              fontWeight: 600,
              lineHeight: '140%',
              color: '#1B1B1B',
              width: '1104px',
              height: '134px'
            }}
          >
            Forgetting Arabidopsis or soybean and bracing ourselves for duckweed!
          </h1>
          <p 
            className="text-gray-700"
            style={{ 
              fontFamily: 'Urbanist, sans-serif',
              fontSize: '16px',
              fontWeight: 400,
              lineHeight: '140%',
              color: 'rgba(27, 27, 27, 0.75)',
              width: '644px',
              height: '22px'
            }}
          >
            The smallest flowering plant on Earth hides a lot of potential - all of it waiting to be unlocked.
          </p>
        </div>

        {/* Hero Image */}
        <div 
          className="rounded-3xl relative overflow-hidden self-stretch"
          style={{ width: '1360px', height: '480px', borderRadius: '24px' }}
        >
          {heroImageUrl ? (
            <img 
              src={heroImageUrl} 
              alt="Duckweed hero image" 
              className="w-full h-full object-cover"
            />
          ) : (
            <>
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-green-600"></div>
              <div className="absolute inset-0 opacity-60">
                <div className="w-full h-full bg-repeat opacity-40" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23065f46' opacity='0.1'%3E%3Ccircle cx='15' cy='15' r='3'/%3E%3Ccircle cx='7' cy='7' r='2'/%3E%3Ccircle cx='23' cy='23' r='2'/%3E%3Ccircle cx='23' cy='7' r='1.5'/%3E%3Ccircle cx='7' cy='23' r='1.5'/%3E%3C/g%3E%3C/svg%3E")`,
                  backgroundSize: '30px 30px'
                }}></div>
              </div>
            </>
          )}
        </div>
      </section>

      {/* First Accordion Section */}
      <section 
        className="flex flex-col items-start bg-white"
        style={{ 
          padding: '80px 128px 40px', 
          gap: '64px',
          width: '1440px',
          height: '800px'
        }}
      >
        <div 
          className="flex justify-between items-center w-full"
          style={{ gap: '200px', width: '1184px', height: '680px' }}
        >
          {/* Left Content */}
          <div 
            className="flex flex-col items-start"
            style={{ gap: '40px', width: '584px', height: '613px' }}
          >
            <div className="flex flex-col items-start gap-6 self-stretch">
              <AccordionItem
                id="novel-protein"
                title={accordionData['novel-protein'].title}
                content={accordionData['novel-protein'].content}
                isActive={activeAccordion === 'novel-protein'}
                onClick={setActiveAccordion}
                showContent={true}
              />
              
              <div className="space-y-6 self-stretch">
                <AccordionItem
                  id="phytoremediation"
                  title={accordionData['phytoremediation'].title}
                  content={accordionData['phytoremediation'].content}
                  isActive={activeAccordion === 'phytoremediation'}
                  onClick={setActiveAccordion}
                />
                
                <AccordionItem
                  id="recombinant"
                  title={accordionData['recombinant'].title}
                  content={accordionData['recombinant'].content}
                  isActive={activeAccordion === 'recombinant'}
                  onClick={setActiveAccordion}
                />
                
                <AccordionItem
                  id="monocot"
                  title={accordionData['monocot'].title}
                  content={accordionData['monocot'].content}
                  isActive={activeAccordion === 'monocot'}
                  onClick={setActiveAccordion}
                />
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div 
            className="rounded-2xl relative overflow-hidden transition-all duration-500"
            style={{ width: '484px', height: '680px', borderRadius: '16px' }}
          >
            {getCurrentImageUrl() ? (
              <img 
                src={getCurrentImageUrl()!} 
                alt="Accordion content image" 
                className="w-full h-full object-cover transition-opacity duration-500"
              />
            ) : (
              <>
                <div className="absolute inset-0 bg-gradient-to-b from-blue-100 via-green-100 to-emerald-200"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-24 h-24 bg-green-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <div className="w-12 h-12 bg-green-500 rounded-full"></div>
                    </div>
                    <p className="text-gray-600 text-sm">
                      {activeAccordion ? `${accordionData[activeAccordion]?.title} image` : 'Select an accordion item'}
                    </p>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Second Accordion Section */}
      <section 
        className="flex flex-col items-start bg-white"
        style={{ 
          padding: '40px 128px', 
          gap: '64px',
          width: '1440px',
          height: '760px'
        }}
      >
        <div 
          className="flex justify-between items-center w-full"
          style={{ gap: '200px', width: '1184px', height: '680px' }}
        >
          {/* Left Image */}
          <div 
            className="rounded-2xl relative overflow-hidden transition-all duration-500"
            style={{ width: '484px', height: '680px', borderRadius: '16px' }}
          >
            {getCurrentStatusImageUrl() ? (
              <img 
                src={getCurrentStatusImageUrl()!} 
                alt="Status accordion content image" 
                className="w-full h-full object-cover transition-opacity duration-500"
              />
            ) : (
              <>
                <div className="absolute inset-0 bg-gradient-to-b from-amber-100 via-orange-100 to-red-200"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-24 h-24 bg-orange-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <div className="w-12 h-12 bg-orange-500 rounded-full"></div>
                    </div>
                    <p className="text-gray-600 text-sm">
                      {activeStatusAccordion ? `${statusAccordionData[activeStatusAccordion]?.title} image` : 'Select a status item'}
                    </p>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Right Content */}
          <div 
            className="flex flex-col items-start"
            style={{ gap: '40px', width: '584px', height: '597px' }}
          >
            <p 
              className="text-gray-500"
              style={{ 
                fontFamily: 'Urbanist, sans-serif',
                fontSize: '18px',
                fontWeight: 600,
                lineHeight: '140%',
                color: 'rgba(27, 27, 27, 0.5)'
              }}
            >
              But What is a current status quo of duckweed application?
            </p>
            
            <div className="flex flex-col items-start gap-6 self-stretch">
              <AccordionItem
                id="food"
                title={statusAccordionData['food'].title}
                content={statusAccordionData['food'].content}
                isActive={activeStatusAccordion === 'food'}
                onClick={setActiveStatusAccordion}
                showContent={true}
              />
              
              <div className="space-y-6 self-stretch">
                <AccordionItem
                  id="phytoremediation-status"
                  title={statusAccordionData['phytoremediation-status'].title}
                  content={statusAccordionData['phytoremediation-status'].content}
                  isActive={activeStatusAccordion === 'phytoremediation-status'}
                  onClick={setActiveStatusAccordion}
                />
                
                <AccordionItem
                  id="biomanufacturing"
                  title={statusAccordionData['biomanufacturing'].title}
                  content={statusAccordionData['biomanufacturing'].content}
                  isActive={activeStatusAccordion === 'biomanufacturing'}
                  onClick={setActiveStatusAccordion}
                />
                
                <AccordionItem
                  id="basic-research"
                  title={statusAccordionData['basic-research'].title}
                  content={statusAccordionData['basic-research'].content}
                  isActive={activeStatusAccordion === 'basic-research'}
                  onClick={setActiveStatusAccordion}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Message Section 1 */}
      <section 
        className="flex justify-center items-start bg-white relative"
        style={{ 
          padding: '80px 128px', 
          gap: '64px',
          width: '1440px',
          height: '484px'
        }}
      >
        <div className="absolute inset-x-0 top-1/2 h-0.5 bg-gray-100"></div>
        <div 
          className="bg-gray-100 rounded-2xl z-10 flex flex-col items-center text-center"
          style={{ 
            padding: '80px 200px', 
            gap: '16px',
            width: '1184px',
            height: '324px',
            borderRadius: '16px'
          }}
        >
          <h2 
            className="text-gray-900 text-center"
            style={{ 
              fontFamily: 'Urbanist, sans-serif',
              fontSize: '48px',
              fontWeight: 600,
              lineHeight: '140%',
              color: '#1B1B1B',
              width: '784px',
              height: '67px'
            }}
          >
            That's not enough
          </h2>
          <p 
            className="text-gray-700 text-center"
            style={{ 
              fontFamily: 'Space Grotesk, sans-serif',
              fontSize: '16px',
              fontWeight: 400,
              lineHeight: '168%',
              color: 'rgba(23, 31, 22, 0.75)',
              width: '784px',
              height: '81px'
            }}
          >
            There are only a few companies working with duckweed to produce food, feedstock, or remediate water. There's also just a handful of proof-of-concept studies for recombinant protein production in duckweed. Just several visionary research groups dedicated to advancing duckweed research…
          </p>
        </div>
      </section>

      {/* Future Section */}
      <section 
        className="flex items-center bg-white"
        style={{ 
          padding: '40px 128px', 
          gap: '64px',
          width: '1440px',
          height: '600px'
        }}
      >
        {/* Left Text */}
        <div 
          className="flex flex-col items-start"
          style={{ gap: '24px', width: '582px', height: '304px' }}
        >
          <h2 
            className="text-gray-900 self-stretch"
            style={{ 
              fontFamily: 'Urbanist, sans-serif',
              fontSize: '48px',
              fontWeight: 600,
              lineHeight: '140%',
              color: '#1B1B1B'
            }}
          >
            The Future is User-Friendly
          </h2>
          <p 
            className="text-gray-700 self-stretch"
            style={{ 
              fontFamily: 'Space Grotesk, sans-serif',
              fontSize: '16px',
              fontWeight: 400,
              lineHeight: '168%',
              color: 'rgba(23, 31, 22, 0.75)'
            }}
          >
            At iGEM Brno, we are convinced that this is not enough to fully utilize the amazing capabilities of duckweed. And because we believe that the success of technology lies in its user-friendliness
          </p>
          <p 
            className="text-gray-700 self-stretch"
            style={{ 
              fontFamily: 'Space Grotesk, sans-serif',
              fontSize: '16px',
              fontWeight: 400,
              lineHeight: '168%',
              color: 'rgba(23, 31, 22, 0.75)'
            }}
          >
            We developed TAIFR and characterized duckweed-native promoters, so anyone can engineer duckweed efficiently. We built an autonomous cultivation prototype, allowing anyone to grow duckweed in their lab cheaply and without labour.
          </p>
        </div>

        {/* Right Image */}
        <div 
          className="rounded-3xl relative overflow-hidden"
          style={{ width: '538px', height: '520px', borderRadius: '24px' }}
        >
          {futureSectionImageUrl ? (
            <img 
              src={futureSectionImageUrl} 
              alt="Future section image" 
              className="w-full h-full object-cover"
            />
          ) : (
            <>
              <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-blue-200"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-32 h-32 bg-green-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <div className="w-16 h-16 bg-green-600 rounded-full"></div>
                  </div>
                  <p className="text-gray-600">Lab equipment visualization</p>
                </div>
              </div>
            </>
          )}
        </div>
      </section>

      {/* Final Message Section */}
      <section 
        className="flex justify-center items-start bg-white relative"
        style={{ 
          padding: '40px 128px 80px', 
          gap: '64px',
          width: '1440px',
          height: '415px'
        }}
      >
        <div className="absolute inset-x-0 top-1/2 h-0.5 bg-gray-100"></div>
        <div 
          className="bg-gray-100 rounded-2xl z-10 flex flex-col items-center text-center"
          style={{ 
            padding: '80px 200px', 
            gap: '16px',
            width: '1184px',
            height: '295px',
            borderRadius: '16px'
          }}
        >
          <p 
            className="text-gray-900 text-center"
            style={{ 
              fontFamily: 'Urbanist, sans-serif',
              fontSize: '32px',
              fontWeight: 600,
              lineHeight: '140%',
              color: '#1B1B1B',
              width: '784px',
              height: '135px'
            }}
          >
            And that is also why we went to iGEM - to show the entire SynBio community the potential of duckweed and to make tools available for anyone to unlock it!
          </p>
        </div>
      </section>
    </div>
  );
};

export default ProjectWhy;