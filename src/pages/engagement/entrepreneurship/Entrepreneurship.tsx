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

// New components
import PowerGreens from './components/PowerGreens';
import RefiningTheVision from './components/RefiningTheVision';
import Survey from './components/Survey';
import GlobalDietaryMarket from './components/GlobalDietaryMarket';
import BoosterChallenge from './components/BoosterChallenge';
import WhatsNext from './components/WhatsNext';

// Import References component
import References from '../../../components/References';
import { entrepreneurshipReferences } from './data/entrepreneurship-references';

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
      
      {/* New sections */}
      <PowerGreens />
      <RefiningTheVision />
      <Survey />
      <GlobalDietaryMarket />
      <BoosterChallenge />
      
      {/* Final section */}
      <WhatsNext />

      {/* References section */}
      <References references={entrepreneurshipReferences} />
    </div>
  );
};

export default Entrepreneurship;