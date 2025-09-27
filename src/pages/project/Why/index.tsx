import { useState } from 'react';
import HeroSection from './components/HeroSection';
import AccordionSection from './components/AccordionSection';
import StatusSection from './components/StatusSection';
import FutureSection from './components/FutureSection';
import FinalMessageSection from './components/FinalMessageSection';
import { WhyProps } from './types';

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
}: WhyProps) => {
  const [activeAccordion, setActiveAccordion] = useState<string | null>('novel-protein');
  const [activeStatusAccordion, setActiveStatusAccordion] = useState<string | null>('food');

  return (
    <div className="w-full bg-white" style={{ width: '1440px', minHeight: '3908px' }}>
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
      
      <FutureSection futureSectionImageUrl={futureSectionImageUrl} />
      
      <FinalMessageSection />
    </div>
  );
};

export default ProjectWhy;