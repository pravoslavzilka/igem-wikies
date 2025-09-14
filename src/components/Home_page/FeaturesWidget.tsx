import "@fontsource/space-grotesk/500.css";





const Features = [
    { title: "Grows on water surface", description:"", icon: "https://static.igem.wiki/teams/5642/icons/homepage/features/fi-2352851.webp" , tooltip: "Low cost for everyone" },
  
    { title: "The smallest flowering plant", description:"some species just 0,5 mm", icon: "https://static.igem.wiki/teams/5642/icons/homepage/features/fi-4264454.webp", tooltip: "" },

    {title: "The fastest growing flowering plant", description:"16-48 h biomass doubling time", icon: "https://static.igem.wiki/teams/5642/icons/homepage/features/fi-8165228.webp", tooltip: "Sustainable"},

    { title: "High protein content", description:"20-45% of dry weight", icon: "https://static.igem.wiki/teams/5642/icons/homepage/features/fi-4300772.webp", tooltip: "Rich in vitamins and minerals" },
  
    { title: "High nutrient uptake", description:"Great phytoremediation potential", icon: "https://static.igem.wiki/teams/5642/icons/homepage/features/fi-9997472.webp", tooltip: "High nutritional value", color: "#FFB2FF" },
  
    { title: "Wide pH and temperature cultivation range", description:"", icon: "https://static.igem.wiki/teams/5642/icons/homepage/features/fi-9997473.webp", tooltip: "" },

    { title: "Small genome for a monocot plant", description:"150 - 500 Mbp", icon: "https://static.igem.wiki/teams/5642/icons/features/fi-7006038.webp", tooltip: "" },

    { title: "No gene silencing", description:"", icon: "https://static.igem.wiki/teams/5642/icons/homepage/features/fi-11294443.webp", tooltip: "" },
    
  ];








const FeaturesWidget = () => {
  // Repeat features 4 times for a longer seamless loop
  const repeatedFeatures = Features.concat(Features).concat(Features).concat(Features);

  return (
    <div className="mt-20" style={{ overflow: "hidden", display: window.innerWidth < 768 ? 'block' : 'none' }}>
      <div
        className="py-16 p-10 bg-white"
        style={{
          paddingBottom: "6rem",
          marginTop: "-70px",
          overflow: "hidden",
          position: "relative"
        }}
      >
        <div
          className="flex flex-nowrap items-start gap-20 features-marquee-track"
          style={{
            width: "max-content",
            animation: "features-marquee-loop 48s linear infinite" // slower for longer loop
          }}
        >
          {repeatedFeatures.map((item, idx) => (
            <div className="group flex-1 min-w-40 text-center cursor-pointer relative" key={idx} style={{ flex: "0 0 220px" }}>
              <div className="mb-4">
                <div
                  className="mx-auto mb-3"
                  style={{
                    width: "72px",
                    height: "72px",
                    fontFamily: "Space Grotesk, sans-serif",
                    fontWeight: 500,
                    lineHeight: "140%",
                  }}
                >
                  <img
                    src={item.icon}
                    alt="Feature 1"
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
              </div>
              <h3
                className="mb-2"
                style={{
                  fontFamily: "Space Grotesk, sans-serif",
                  fontWeight: 500,
                  fontSize: "1.3rem",
                  lineHeight: "140%",
                  fontStyle: "medium",
                  letterSpacing: "0px",
                  color: "#171F16",
                }}
              >
                {item.title}
              </h3>
              {/* Only render description div if description is not empty */}
              {item.description && (
                <div
                  className="mx-auto mt-4 bg-[#F6F6F6] rounded-full px-6 py-2 w-fit text-base font-medium"
                  style={{
                    fontFamily: "Space Grotesk, sans-serif",
                    fontWeight: 500,
                    lineHeight: "140%",
                    color: "#171F16",
                    boxShadow: "none",
                    fontSize: "0.8rem",
                  }}
                >
                  {item.description}
                </div>
              )}
            </div>
          ))}
        </div>
        <style>
          {`
            @keyframes features-marquee-loop {
              0% { transform: translateX(0); }
              100% { transform: translateX(-25%); }
            }
            .features-marquee-track {
              will-change: transform;
            }
          `}
        </style>
      </div>
    </div>
  );
}

export default FeaturesWidget;