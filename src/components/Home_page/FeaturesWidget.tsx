import "@fontsource/space-grotesk/500.css";





const Features = [
    { title: "High protein content", description:"20-45% of dry weight", icon: "https://static.igem.wiki/teams/5642/icons/features/fi-4300772.webp" , tooltip: "Low cost for everyone" },
  
    { title: "The fastest growing flowering plant", description:"16-48 h biomass doubling time", icon: "https://static.igem.wiki/teams/5642/icons/features/fi-8165228.webp", tooltip: "" },
  
    { title: "High nutrient uptake", description:"Great phytoremediation potential", icon: "https://static.igem.wiki/teams/5642/icons/features/fi-9997472.webp", tooltip: "High nutritional value", color: "#FFB2FF" },
  
    { title: "Wide pH and temperature cutlivation range", description:"", icon: "https://static.igem.wiki/teams/5642/icons/features/ph-9997472.webp", tooltip: ""},
  
    { title: "No gene silencing", description:"", icon: "https://static.igem.wiki/teams/5642/icons/features/fi-11294443.webp", tooltip: "" }
    
  ];








const FeaturesWidget = () => {
  return (
    <div>
      <div className="py-16 bg-white" style={{paddingBottom: "9rem" }}>
        <div className="flex flex-wrap justify-between items-start gap-8">
          {Features.map((item, idx) => (
            <div className="group flex-1 min-w-40 text-center cursor-pointer relative" key={idx}>
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

              {/* Card under each feature */}
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

              {/* Hover content */}
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none">
                <div
                  className="bg-gray-800 text-white p-3 rounded-lg text-xs whitespace-nowrap"
                  style={{
                    fontFamily: "Space Grotesk, sans-serif",
                    fontWeight: 500,
                    lineHeight: "140%",
                    fontSize: "1rem",
                  }}
                >
                  Floats naturally on water
                </div>
                <div className="w-2 h-2 bg-gray-800 transform rotate-45 mx-auto -mt-1"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FeaturesWidget;