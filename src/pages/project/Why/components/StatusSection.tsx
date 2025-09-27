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
  );
};

export default StatusSection;