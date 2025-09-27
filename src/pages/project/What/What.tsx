import React from 'react';

// Import všetkých komponentov z components folder
import HeroSection from './components/HeroSection';
import IntroTextSection from './components/IntroTextSection';
import ProblemsSection from './components/ProblemsSection';
import AccordionSection from './components/AccordionSection';
import SolutionMessageSection from './components/SolutionMessageSection';
import DuckweedShowcaseSection from './components/DuckweedShowcaseSection';
import StruggleSection from './components/StruggleSection';
import ExpertQuoteSection from './components/ExpertQuoteSection';
import CallToActionSection from './components/CallToActionSection';

const What: React.FC = () => {
  return (
    <div className="w-full bg-white max-w-none">
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