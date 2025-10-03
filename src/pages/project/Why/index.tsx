import { useState } from 'react';
import HeroSection from './components/HeroSection';
import AccordionSection from './components/AccordionSection';
import StatusSection from './components/StatusSection';
import MessageSection from './components/MessageSection';
import FutureSection from './components/FutureSection';
import FinalMessageSection from './components/FinalMessageSection';
import References from '../../../components/References';
import { whyReferences } from './data/references';
import { WhyProps } from './types';

const ProjectWhy = ({ 
  heroImageUrl = "https://static.igem.wiki/teams/5642/images/why/duckweed.webp",
  firstSectionImageUrl = "https://static.igem.wiki/teams/5642/images/what/duckweed-default.webp", 
  secondSectionImageUrl = "https://static.igem.wiki/teams/5642/images/why/duckweed-08408.webp",
  futureSectionImageUrl = "https://static.igem.wiki/teams/5642/images/why/duckweed-future.webp",
  // Images for different accordion states
  novelProteinImageUrl = "https://static.igem.wiki/teams/5642/images/why/soybean.webp",
  phytoremediationImageUrl = "https://static.igem.wiki/teams/5642/images/why/why6.webp",
  recombinantImageUrl = "https://static.igem.wiki/teams/5642/images/why/why7.webp",
  monocotImageUrl = "https://static.igem.wiki/teams/5642/images/why/why8.webp",
  // Images for status accordion states
  foodImageUrl = "https://static.igem.wiki/teams/5642/images/why/wanna-greens.webp",
  phytoremediationStatusImageUrl = "https://static.igem.wiki/teams/5642/images/why/fyto.webp",
  biomanufacturingImageUrl = "https://static.igem.wiki/teams/5642/images/why/red-duckweed.webp",
  basicResearchImageUrl = "https://static.igem.wiki/teams/5642/images/why/why4.webp"
}: WhyProps) => {
  const [activeAccordion, setActiveAccordion] = useState<string | null>('novel-protein');
  const [activeStatusAccordion, setActiveStatusAccordion] = useState<string | null>('food');

  return (
    <div className="w-full bg-white max-w-none">
      <HeroSection heroImageUrl={heroImageUrl} />
      
      <AccordionSection 
        activeAccordion={activeAccordion}
        setActiveAccordion={setActiveAccordion}
        firstSectionImageUrl={firstSectionImageUrl}
        novelProteinImageUrl={novelProteinImageUrl}
        phytoremediationImageUrl={phytoremediationImageUrl}
        recombinantImageUrl={recombinantImageUrl}
        monocotImageUrl={monocotImageUrl}
      />
      
      <StatusSection 
        activeStatusAccordion={activeStatusAccordion}
        setActiveStatusAccordion={setActiveStatusAccordion}
        secondSectionImageUrl={secondSectionImageUrl}
        foodImageUrl={foodImageUrl}
        phytoremediationStatusImageUrl={phytoremediationStatusImageUrl}
        biomanufacturingImageUrl={biomanufacturingImageUrl}
        basicResearchImageUrl={basicResearchImageUrl}
      />
      
      <MessageSection />
      
      <FutureSection futureSectionImageUrl={futureSectionImageUrl} />
      
      <FinalMessageSection />
      
      <References references={whyReferences} />
    </div>
  );
};

export default ProjectWhy;