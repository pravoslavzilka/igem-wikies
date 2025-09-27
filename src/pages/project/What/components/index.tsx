import React from 'react';
import HeroSection from './HeroSection';
import IntroTextSection from './IntroTextSection';
import ProblemsSection from './ProblemsSection';
import AccordionSection from './AccordionSection';
import SolutionMessageSection from './SolutionMessageSection';
import DuckweedShowcaseSection from './DuckweedShowcaseSection';
import StruggleSection from './StruggleSection';
import ExpertQuoteSection from './ExpertQuoteSection';
import CallToActionSection from './CallToActionSection';

const What: React.FC = () => {
  return (
    <div className="relative w-full bg-white">
      <HeroSection />
      <IntroTextSection />
      <ProblemsSection />
      <AccordionSection />
      <SolutionMessageSection />
      <DuckweedShowcaseSection />
      <StruggleSection />
      <ExpertQuoteSection />
      <CallToActionSection />
    </div>
  );
};

export default What;