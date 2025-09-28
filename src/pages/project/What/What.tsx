// src/pages/project/What/What.tsx
import React from 'react';
// Imports components folder
import './what-responsive.css';
import HeroSection from './components/HeroSection';
import IntroTextSection from './components/IntroTextSection';
import ProblemsSection from './components/ProblemsSection';
import AccordionSection from './components/AccordionSection';
import SolutionMessageSection from './components/SolutionMessageSection';
import DuckweedShowcaseSection from './components/DuckweedShowcaseSection';
import StruggleSection from './components/StruggleSection';
import ExpertQuoteSection from './components/ExpertQuoteSection';
import CallToActionSection from './components/CallToActionSection';

// Import References
import References from '../../../components/References';
import { whatReferences } from './data/references';

const What: React.FC = () => {
  return (
    <div className="w-full bg-white">
      <div className="min-h-screen">
        <HeroSection />
        <IntroTextSection />
        <ProblemsSection />
        <AccordionSection />
        <SolutionMessageSection />
        <DuckweedShowcaseSection />
        <StruggleSection />
        <ExpertQuoteSection />
        <CallToActionSection />
        <References references={whatReferences} />
      </div>
    </div>
  );
};

export default What;