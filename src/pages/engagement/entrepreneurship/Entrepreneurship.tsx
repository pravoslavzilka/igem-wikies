// src/pages/engagement/entrepreneurship/Entrepreneurship.tsx
import React from 'react';
import HeroSection from './components/HeroSection';
import OurSuccessesSection from './components/OurSuccessesSection';
import NitroDuckSection from './components/NitroDuckSection';
import IgemStartupSection from './components/IgemStartupSection';
import UnitEconomicsSection from './components/UnitEconomicsSection';
import SynBioHackathonSection from './components/SynBioHackathonSection';
import MakeSomethingSection from './components/MakeSomethingSection';
import SolutionSection from './components/SolutionSection';
import MarketCustomerSection from './components/MarketCustomerSection';
import MarketDiagram from './components/MarketDiagram';

import "@fontsource/urbanist";
import "@fontsource/urbanist/400.css";
import "@fontsource/urbanist/500.css";
import "@fontsource/urbanist/600.css";
import "@fontsource/space-grotesk";
import "@fontsource/space-grotesk/400.css";
import "@fontsource/space-grotesk/700.css";

const Entrepreneurship: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <OurSuccessesSection />
      <NitroDuckSection />
      <SolutionSection />
      <MarketCustomerSection />
      <MarketDiagram />
      <IgemStartupSection />
      <UnitEconomicsSection />
      <SynBioHackathonSection />
      <MakeSomethingSection />
    </div>
  );
};

export default Entrepreneurship;