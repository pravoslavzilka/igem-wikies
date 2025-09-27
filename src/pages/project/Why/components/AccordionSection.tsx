import AccordionItem from './AccordionItem';
import { getAccordionData } from '../data/accordionData';

interface AccordionSectionProps {
  activeAccordion: string | null;
  setActiveAccordion: (id: string | null) => void;
  firstSectionImageUrl?: string | null;
  novelProteinImageUrl?: string | null;
  phytoremediationImageUrl?: string | null;
  recombinantImageUrl?: string | null;
  monocotImageUrl?: string | null;
}

const AccordionSection = ({
  activeAccordion,
  setActiveAccordion,
  firstSectionImageUrl,
  novelProteinImageUrl,
  phytoremediationImageUrl,
  recombinantImageUrl,
  monocotImageUrl
}: AccordionSectionProps) => {
  const accordionData = getAccordionData(
    novelProteinImageUrl,
    phytoremediationImageUrl,
    recombinantImageUrl,
    monocotImageUrl
  );

  // Function to get current image URL based on active accordion
  const getCurrentImageUrl = () => {
    if (activeAccordion && accordionData[activeAccordion] && accordionData[activeAccordion].imageUrl) {
      return accordionData[activeAccordion].imageUrl;
    }
    return firstSectionImageUrl;
  };

  return (
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
  );
};

export default AccordionSection;