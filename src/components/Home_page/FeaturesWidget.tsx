





const Features = [
    { title: "Affordable", icon: "https://static.igem.wiki/teams/5642/icons/fi-45165.webp", description:"ranodm " , tooltip: "Low cost for everyone" },
  
    { word: "local", icon: "", tooltip: "" },
  
    { word: "protein", icon: "https://static.igem.wiki/teams/5642/icons/fi-11618743.webp", tooltip: "High nutritional value", color: "#FFB2FF" },
  
    { word: "for", icon: "", tooltip: ""},
  
    { word: "every", icon: "", tooltip: "" }
    
  ];








const FeaturesWidget = () => {
  return (


<div>
   

     <div className="py-16 bg-white">
      <div className="flex flex-wrap justify-between items-start gap-8">
    {Features.map((item, idx) => (
                  <div className="group flex-1 min-w-40 text-center cursor-pointer relative">
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
                src="https://static.igem.wiki/teams/5642/icons/features/fi-4300772.webp"
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
              fontSize: "1.5rem",
              lineHeight: "140%",
              fontStyle: "bold",
              color: "#171F16",
            }}
          >
            High protein content
          </h3>



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