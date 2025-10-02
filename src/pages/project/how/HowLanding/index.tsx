import React from "react";
import HeroSection from "./HeroSection";
import ComparisonsSection from "./ComparisonsSection";
import IgemNevadaSection from "./components/IgemNevadaSection";
import Goal6ExperimentalResults from "./components/ExperimentSteps.tsx";
import ProgressAndFindings from "./components/ProgressAndFindings.tsx";
interface HowLandingProps {
  heroImageUrl?: string;
  transformationImageUrl?: string;
  promotersImageUrl?: string;
  cultivationImageUrl?: string;
  optimizationImageUrl?: string;
}

const HowLanding: React.FC<HowLandingProps> = ({
  transformationImageUrl = "https://static.igem.wiki/teams/5642/images/how/howlanding/igem-graf-02.webp",
  promotersImageUrl = "https://static.igem.wiki/teams/5642/images/how/promoters-how.webp",
  cultivationImageUrl = "https://static.igem.wiki/teams/5642/images/how/howlanding/cultivator.webp",
  optimizationImageUrl = "https://static.igem.wiki/teams/5642/images/how/howlanding/predictor-how-graf.webp"
}) => {
  return (
    <div className="relative w-full bg-white" style={{ fontFamily: 'Urbanist, sans-serif' }}>
      <HeroSection />
      <ComparisonsSection 
        transformationImageUrl={transformationImageUrl}
        promotersImageUrl={promotersImageUrl}
        cultivationImageUrl={cultivationImageUrl}
        optimizationImageUrl={optimizationImageUrl}
      />
      <IgemNevadaSection />
      <Goal6ExperimentalResults />
      <ProgressAndFindings />
      <br />
      
    </div>
  );
};

export default HowLanding;