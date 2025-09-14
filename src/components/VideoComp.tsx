import React from "react";

const VideoComp = () => {



  const Features = [
    
    { title: "Grows on water surface", description:"", icon: "https://static.igem.wiki/teams/5642/icons/homepage/features/fi-2352851.webp" , tooltip: "Low cost for everyone" },
  
    { title: "The smallest flowering plant", description:"some species just 0,5 mm", icon: "https://static.igem.wiki/teams/5642/icons/homepage/features/fi-4264454.webp", tooltip: "" },

    {title: "The fastest growing flowering plant", description:"16-48 h biomass doubling time", icon: "https://static.igem.wiki/teams/5642/icons/homepage/features/fi-8165228.webp", tooltip: "Sustainable"},

    { title: "High protein content", description:"20-45% of dry weight", icon: "https://static.igem.wiki/teams/5642/icons/homepage/features/fi-4300772.webp", tooltip: "Rich in vitamins and minerals" },
  
  ];



  return (
    <div className="py-16 bg-white mt-20 md:mt-0" style={{ position: "relative", overflowX: "auto" }}>
      {/* Decorative background icons */}
      <img
        src="https://static.igem.wiki/teams/5642/icons/fi-11618743.webp"
        alt=""
        aria-hidden="true"
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
      
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-8 md:mb-12 mt-4 md:mt-0">
          <h2
            className="font-bold text-gray-800 mb-4 text-2xl md:text-4xl leading-tight md:leading-normal"
            style={{
              fontFamily: "Space Grotesk",
              marginTop: "0.5rem",
            }}
          >
            {/* On mobile, smaller font and more margin */}
            Luckily, we have{" "}
            <span style={{ color: "#779E45" }}>duckweeds</span> - plants that are (almost) superior!
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Soybean timelapse video */}
          <div className="space-y-4 flex flex-col items-center">
            <div className="rounded-xl overflow-hidden relative w-full" style={{ maxWidth: "100%" }}>
              <video autoPlay loop muted playsInline>
                <source src="https://github.com/pravoslavzilka/igem-wikies-off/raw/refs/heads/main/src/soybean%20timeplase2.mp4" type="video/mp4"></source>
              </video>
            </div>
            <p
              className="text-center pt-6 md:pt-10 text-md text-gray-600 font-medium"
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                fontWeight: 500,
                fontSize: "1.1rem",
                lineHeight: "140%",
                fontStyle: "medium",
                letterSpacing: "0px",
                color: "#171F16",
              }}
            >
              Soybean
            </p>
          </div>
          {/* Duckweed timelapse video */}
          <div className="space-y-4 flex flex-col items-center">
            <div className="rounded-xl overflow-hidden relative w-full" style={{ maxWidth: "100%" }}>
              <video autoPlay loop muted playsInline>
                <source src="https://github.com/pravoslavzilka/igem-wikies-off/raw/refs/heads/main/src/duckweed%20timelapse_.mp4" type="video/mp4"></source>
              </video>
            </div>
            <p
              className="text-center text-gray-600 pt-6 md:pt-10 font-medium"
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                fontWeight: 500,
                fontSize: "1.1rem",
                lineHeight: "140%",
                fontStyle: "medium",
                letterSpacing: "0px",
                color: "#171F16",
              }}
            >
              Duckweed
            </p>
          </div>
        </div>
      </div>
      {/* Features section at the end */}
      <div className="w-screen max-w-none mt-12 px-2 md:px-8" style={{ position: "relative", left: "50%", right: "50%", marginLeft: "-50vw", marginRight: "-50vw", display: window.innerWidth < 768 ? 'none' : 'block' }}>
        <div className="flex flex-wrap justify-center gap-y-10 gap-x-8 md:gap-x-16">
          {Features.map((feature, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center min-w-[180px] max-w-xs"
            >
              <img
                src={feature.icon}
                alt={feature.title}
                className="mb-4"
                style={{ width: 56, height: 56 }}
              />
              <div
                className="font-semibold text-black mb-2"
                style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1.1rem" }}
              >
                {feature.title}
              </div>
              {feature.description && (
                <div className="bg-[#F6F6F6] rounded-full px-6 py-2 text-sm font-medium text-gray-700" style={{ fontFamily: "Urbanist, sans-serif" }}>
                  {feature.description}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}   

export default VideoComp;

