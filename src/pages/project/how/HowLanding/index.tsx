import React from "react";
import HeroSection from "./HeroSection";
import ComparisonsSection from "./ComparisonsSection";

interface HowLandingProps {
  heroImageUrl?: string;
  transformationImageUrl?: string;
  promotersImageUrl?: string;
  cultivationImageUrl?: string;
  optimizationImageUrl?: string;
}

const HowLanding: React.FC<HowLandingProps> = ({
  heroImageUrl = "https://static.igem.wiki/teams/5642/images/how/howlanding/header-pic-how.webp",
  transformationImageUrl = "https://static.igem.wiki/teams/5642/images/how/howlanding/igem-graf-02.webp",
  promotersImageUrl = "https://static.igem.wiki/teams/5642/images/how/native-promoters.webp",
  cultivationImageUrl = "https://static.igem.wiki/teams/5642/images/how/howlanding/cultivator.webp",
  optimizationImageUrl = "https://static.igem.wiki/teams/5642/images/how/howlanding/predictor-how-graf.webp"
}) => {
  return (
    <div className="relative w-full bg-white" style={{ fontFamily: 'Urbanist, sans-serif' }}>
      <HeroSection heroImageUrl={heroImageUrl} />
      <ComparisonsSection 
        transformationImageUrl={transformationImageUrl}
        promotersImageUrl={promotersImageUrl}
        cultivationImageUrl={cultivationImageUrl}
        optimizationImageUrl={optimizationImageUrl}
      />
    </div>
  );
};

export default HowLanding;