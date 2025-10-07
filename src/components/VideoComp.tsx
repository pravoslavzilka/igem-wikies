import React from "react";

const VideoComp = () => {
  // Odstránené tooltips pre zjednotenie štruktúry s Comparison.tsx
  const Features = [
    { title: "Grows on water surface", description:"Low cost for everyone", icon: "https://static.igem.wiki/teams/5642/icons/homepage/features/fi-2352851.webp" },
    { title: "The smallest flowering plant", description:"some species just 0,5 mm", icon: "https://static.igem.wiki/teams/5642/icons/homepage/features/fi-4264454.webp" },
    { title: "The fastest growing flowering plant", description:"16-48 h biomass doubling time", icon: "https://static.igem.wiki/teams/5642/icons/homepage/features/fi-8165228.webp" },
    { title: "High protein content", description:"20-45% of dry weight", icon: "https://static.igem.wiki/teams/5642/icons/homepage/features/fi-4300772.webp" },
  ];

  return (
    <div className="py-8 sm:py-12 md:py-16 bg-white mt-5 md:mt-0 overflow-x-hidden" style={{ position: "relative" }}>
      {/* Decorative background icons zostáva */}
      <img
        src="https://static.igem.wiki/teams/5642/icons/fi-11618743.webp"
        alt=""
        aria-hidden="true"
        className="hidden sm:block"
        style={{
          position: "absolute",
          top: "30px",
          left: "20px",
          width: "32px",
          opacity: 0.15,
          zIndex: 0,
          pointerEvents: "none"
        }}
      />
      <img
        src="https://static.igem.wiki/teams/5642/icons/fi-11618743.webp"
        alt=""
        aria-hidden="true"
        className="hidden sm:block"
        style={{
          position: "absolute",
          bottom: "60px",
          right: "40px",
          width: "36px",
          opacity: 0.13,
          zIndex: 0,
          pointerEvents: "none"
        }}
      />
      <img
        src="https://static.igem.wiki/teams/5642/icons/fi-11618743.webp"
        alt=""
        aria-hidden="true"
        className="hidden lg:block"
        style={{
          position: "absolute",
          top: "50%",
          left: "80%",
          width: "40px",
          opacity: 0.10,
          zIndex: 0,
          pointerEvents: "none",
          transform: "translate(-50%, -50%)"
        }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Nadpisy a videá zostávajú bez zmeny */}
        <div className="text-center mb-6 sm:mb-8 md:mb-12 mt-4 md:mt-0">
          <h2
            className="font-bold text-gray-800 mb-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight px-2"
            style={{
              fontFamily: "Space Grotesk",
              marginTop: "0.5rem",
            }}
          >
            Luckily, we have{" "}
            <span style={{ color: "#779E45" }}>duckweeds</span> - plants that are (almost) superior!
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 mb-8 sm:mb-10">
          {/* Soybean timelapse video */}
          <div className="space-y-3 sm:space-y-4 flex flex-col items-center w-full">
            <p
              className="text-center text-gray-600 font-medium"
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                fontWeight: 500,
                fontSize: "clamp(0.95rem, 2.5vw, 1.1rem)",
                lineHeight: "140%",
                letterSpacing: "0px",
                color: "#171F16",
              }}
            >
              Soybean
            </p>
            <div className="rounded-xl overflow-hidden w-full max-w-md mx-auto">
              <img 
                src="https://static.igem.wiki/teams/5642/images/homepage/maingifs/soybeantimeplase2-ezgif-com-video-to-webp-converter.webp" 
                alt="Soybean timelapse"
                className="w-full h-auto"
              />
            </div>
          </div>
          
          {/* Duckweed timelapse video */}
          <div className="space-y-3 sm:space-y-4 flex flex-col items-center w-full">
            <p
              className="text-center text-gray-600 font-medium"
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                fontWeight: 500,
                fontSize: "clamp(0.95rem, 2.5vw, 1.1rem)",
                lineHeight: "140%",
                letterSpacing: "0px",
                color: "#171F16",
              }}
            >
              Duckweed
            </p>
            <div className="rounded-xl overflow-hidden w-full max-w-md mx-auto">
              <img 
                src="https://static.igem.wiki/teams/5642/images/homepage/maingifs/duckweedtimelapse-ezgif-com-video-to-webp-converter.webp" 
                alt="Duckweed timelapse"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Features section - OPRAVA ZAROVNANIA (pre konzistentnosť) */}
      <div className="hidden md:block w-full mt-4 px-4 sm:px-6 md:px-8 overflow-hidden">
        <div className="flex flex-wrap justify-center gap-y-8 sm:gap-y-10 gap-x-8 md:gap-x-16 lg:gap-x-20 max-w-7xl mx-auto">
          {Features.map((feature, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center min-w-[160px] sm:min-w-[180px] max-w-xs"
            >
              <img
                src={feature.icon}
                alt={feature.title}
                className="mb-3 sm:mb-4"
                style={{ width: 56, height: 56 }}
              />
              {/* Flex kontajner pre titulok a popis s pevnou minimálnou výškou */}
              <div 
                className="flex flex-col justify-end items-center w-full"
                style={{ minHeight: '65px' }} // Pevná výška pre titulok + popis box
              >
                <div
                  className="font-semibold text-black px-2 mb-2" 
                  style={{ 
                    fontFamily: "Space Grotesk, sans-serif", 
                    fontSize: "1.1rem" // Zjednotená veľkosť písma
                  }}
                >
                  {feature.title}
                </div>
                {/* Box s popisom */}
                {feature.description && (
                  <div 
                    className="bg-[#F6F6F6] rounded-full px-6 py-2 text-sm font-medium text-gray-700" 
                    style={{ fontFamily: "Urbanist, sans-serif" }}
                  >
                    {feature.description}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}   

export default VideoComp;