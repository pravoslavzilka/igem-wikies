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
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-16">
          {/* Left Content - Accordion Items */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <div className="space-y-6">
              <AccordionItem
                id="novel-protein"
                title={accordionData['novel-protein'].title}
                content={accordionData['novel-protein'].content}
                isActive={activeAccordion === 'novel-protein'}
                onClick={setActiveAccordion}
                showContent={true}
              />
              
              <div className="space-y-6">
                <AccordionItem
                  id="phytoremediation"
                  title={accordionData['phytoremediation'].title}
                  content={accordionData['phytoremediation'].content}
                  isActive={activeAccordion === 'phytoremediation'}
                  onClick={setActiveAccordion}
                  showContent={true}
                />
                
                <AccordionItem
                  id="recombinant"
                  title={accordionData['recombinant'].title}
                  content={accordionData['recombinant'].content}
                  isActive={activeAccordion === 'recombinant'}
                  onClick={setActiveAccordion}
                  showContent={true}
                />
                
                <AccordionItem
                  id="monocot"
                  title={accordionData['monocot'].title}
                  content={accordionData['monocot'].content}
                  isActive={activeAccordion === 'monocot'}
                  onClick={setActiveAccordion}
                  showContent={true}
                />
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <div 
              className="rounded-xl lg:rounded-2xl relative overflow-hidden w-full transition-all duration-500"
              style={{ 
                aspectRatio: '4/5',
                minHeight: '400px',
                maxHeight: '680px'
              }}
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
                      <div className="w-16 h-16 lg:w-24 lg:h-24 bg-green-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <div className="w-8 h-8 lg:w-12 lg:h-12 bg-green-500 rounded-full"></div>
                      </div>
                      <p className="text-gray-600 text-sm">
                        {activeAccordion ? `${accordionData[activeAccordion]?.title} image` : 'Tu dať default IMG'}
                      </p>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccordionSection;