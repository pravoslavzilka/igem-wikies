import AccordionItem from './AccordionItem';
import { getStatusAccordionData } from '../data/accordionData';

interface StatusSectionProps {
  activeStatusAccordion: string | null;
  setActiveStatusAccordion: (id: string | null) => void;
  secondSectionImageUrl?: string | null;
  foodImageUrl?: string | null;
  phytoremediationStatusImageUrl?: string | null;
  biomanufacturingImageUrl?: string | null;
  basicResearchImageUrl?: string | null;
}

const StatusSection = ({
  activeStatusAccordion,
  setActiveStatusAccordion,
  secondSectionImageUrl,
  foodImageUrl,
  phytoremediationStatusImageUrl,
  biomanufacturingImageUrl,
  basicResearchImageUrl
}: StatusSectionProps) => {
  const statusAccordionData = getStatusAccordionData(
    foodImageUrl,
    phytoremediationStatusImageUrl,
    biomanufacturingImageUrl,
    basicResearchImageUrl
  );

  // Function to get current status image URL based on active accordion
  const getCurrentStatusImageUrl = () => {
    if (activeStatusAccordion && statusAccordionData[activeStatusAccordion] && statusAccordionData[activeStatusAccordion].imageUrl) {
      return statusAccordionData[activeStatusAccordion].imageUrl;
    }
    return secondSectionImageUrl;
  };

  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-16">
          {/* Left Image */}
          <div className="w-full lg:w-1/2 order-1">
            <div 
              className="rounded-xl lg:rounded-2xl relative overflow-hidden w-full transition-all duration-500"
              style={{ 
                aspectRatio: '4/5',
                minHeight: '400px',
                maxHeight: '680px'
              }}
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
                      <div className="w-16 h-16 lg:w-24 lg:h-24 bg-orange-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <div className="w-8 h-8 lg:w-12 lg:h-12 bg-orange-500 rounded-full"></div>
                      </div>
                      <p className="text-gray-600 text-sm">
                        {activeStatusAccordion ? `${statusAccordionData[activeStatusAccordion]?.title} image` : 'Default Status Image'}
                      </p>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Right Content */}
          <div className="w-full lg:w-1/2 order-2">
            <div className="space-y-6 lg:space-y-10">
              <p 
                className="text-gray-900 text-lg lg:text-lg font-semibold"
                style={{ 
                  fontFamily: 'Urbanist, sans-serif',
                }}
              >
                But What is a current status quo of duckweed application?
              </p>
              
              <div className="space-y-6">
                <AccordionItem
                  id="food"
                  title={statusAccordionData['food'].title}
                  content={statusAccordionData['food'].content}
                  isActive={activeStatusAccordion === 'food'}
                  onClick={setActiveStatusAccordion}
                  showContent={true}
                />
                
                <div className="space-y-6">
                  <AccordionItem
                    id="phytoremediation-status"
                    title={statusAccordionData['phytoremediation-status'].title}
                    content={statusAccordionData['phytoremediation-status'].content}
                    isActive={activeStatusAccordion === 'phytoremediation-status'}
                    onClick={setActiveStatusAccordion}
                    showContent={true}
                  />
                  
                  <AccordionItem
                    id="biomanufacturing"
                    title={statusAccordionData['biomanufacturing'].title}
                    content={statusAccordionData['biomanufacturing'].content}
                    isActive={activeStatusAccordion === 'biomanufacturing'}
                    onClick={setActiveStatusAccordion}
                    showContent={true}
                  />
                  
                  <AccordionItem
                    id="basic-research"
                    title={statusAccordionData['basic-research'].title}
                    content={statusAccordionData['basic-research'].content}
                    isActive={activeStatusAccordion === 'basic-research'}
                    onClick={setActiveStatusAccordion}
                    showContent={true}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatusSection;