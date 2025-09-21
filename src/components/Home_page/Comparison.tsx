import React, { useState, useEffect } from "react";
import "@fontsource/space-grotesk";

// Cow image components
const CowIcon = ({ src }: { src: string }) => {
  // Responsive cow size

  const height = window.innerWidth < 500 ? 16 : window.innerWidth < 1500 ? 17 : 18;
  return (
    <img src={src} alt="cow" height={height} style={{ display: "inline-block", height }} />
  );
};

const getCowCols = (width: number) => {
  // 5 columns for mobile, 10 for desktop
  return width < 768 ? 3 : 10;
};

const getCowRows = (width: number) => {
  // 3 rows for mobile, 10 for desktop
  return width < 768 ? 5 : 10;
};

const Comparison = () => {
  const [cols, setCols] = useState(getCowCols(window.innerWidth));
  const [rows, setRows] = useState(getCowRows(window.innerWidth));

  useEffect(() => {
    const handleResize = () => {
      setCols(getCowCols(window.innerWidth));
      setRows(getCowRows(window.innerWidth));
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalCows = cols * rows;

  // Soybean: 33 green, 67 gray (desktop); 5 green, 10 gray (mobile)
  const soyGreen = cols === 10 ? 33 : 5;
  const cowsSoy = Array.from({ length: totalCows }, (_, i) =>
    i < soyGreen
      ? <CowIcon key={i} src="https://static.igem.wiki/teams/5642/icons/homepage/other/vector.webp" />
      : <CowIcon key={i} src="https://static.igem.wiki/teams/5642/icons/homepage/other/vector-f.webp" />
  );
  // Duckweed: 99 green, 1 gray (desktop); 14 green, 1 gray (mobile)
  const duckweedGreen = cols === 10 ? 99 : 14;
  const cowsDuckweed = Array.from({ length: totalCows }, (_, i) =>
    i < duckweedGreen
      ? <CowIcon key={i} src="https://static.igem.wiki/teams/5642/icons/homepage/other/vector.webp" />
      : <CowIcon key={i} src="https://static.igem.wiki/teams/5642/icons/homepage/other/vector-f.webp" />
  );

  // Responsive gaps
  const colGap = window.innerWidth < 500 ? "8px" : window.innerWidth < 1500 ? "18px" : "32px";
  const rowGap = window.innerWidth < 500 ? "20px" : window.innerWidth < 1500 ? "13px" : "16px";

  // Set gap between tables: smaller on mobile, larger on desktop
  const tablesGap = cols === 10 ? "8rem" : "2rem";


  const Features = [
    { title: "High nutrient uptake", description:"Great phytoremediation potential", icon: "https://static.igem.wiki/teams/5642/icons/homepage/features/fi-9997472.webp", tooltip: "High nutritional value", color: "#FFB2FF" },
  
    { title: "Wide pH and temperature cultivation range", description:"", icon: "https://static.igem.wiki/teams/5642/icons/homepage/features/fi-9997473.webp", tooltip: "" },

    { title: "Small genome for a monocot plant", description:"150 - 500 Mbp", icon: "https://static.igem.wiki/teams/5642/icons/features/fi-7006038.webp", tooltip: "" },

    { title: "No gene silencing", description:"", icon: "https://static.igem.wiki/teams/5642/icons/homepage/features/fi-11294443.webp", tooltip: "" },
    
  ];

  return (
    <div
      className="bg-white"
      style={{
        padding: "2rem",
        paddingBottom: "3rem",
        paddingTop: "2.5rem",
        // On desktop, keep original padding
        ...(window.innerWidth >= 768
          ? { padding: "5rem", paddingBottom: "6rem" }
          : {}),
      }}
    >
      <h2
        className="font-bold text-center"
        style={{
          fontFamily: "Space Grotesk",
          fontSize: window.innerWidth < 768 ? "1.5rem" : "2.25rem", // text-2xl for mobile, text-4xl for desktop
          lineHeight: window.innerWidth < 768 ? "120%" : "normal",
          marginTop: window.innerWidth < 768 ? "1.5rem" : "1.9rem",
          marginBottom: window.innerWidth < 768 ? "1.5rem" : "2rem",
        }}
      >
        Duckweeds could save <span style={{ color: "#779E45" }}>farmers money </span>
        and protect <span style={{ color: "#779E45" }}>Cerrado ecosystems</span>
      </h2>
      <div
        className="flex flex-row justify-center items-end"
        style={{
          gap: tablesGap,
          marginTop: window.innerWidth < 768 ? "1.5rem" : "2rem",
        }}
      >
        {/* Soybean group */}
        <div className="flex flex-col items-center" style={{ paddingTop: window.innerWidth < 768 ? "0.5rem" : "1rem" }}>
          <div
            className="grid mb-4"
            style={{
              gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
              columnGap: colGap,
              rowGap: rowGap,
              margin: '0 auto'
            }}
          >
            {cowsSoy}
          </div>
        </div>
        {/* Division line for mobile */}
        {cols !== 10 && (
          <div
            style={{
              borderLeft: "2px solid #779E45",
              height: window.innerWidth < 768 ? "180px" : "300px",
              margin: ""
            }}
          />
        )}
        {/* Duckweed group */}
        <div style={{ fontFamily: "Space Grotesk" }} className="flex flex-col items-center">
          <div
            className="grid mb-4"
            style={{
              gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
              columnGap: colGap,
              rowGap: rowGap,
              margin: '0 auto'
            }}
          >
            {cowsDuckweed}
          </div>
        </div>
      </div>
      <div
        style={{
          fontFamily: "Space Grotesk",
          fontSize: window.innerWidth < 768 ? "1rem" : "20px",
          marginTop: window.innerWidth < 768 ? "1.5rem" : "3rem",
        }}
        className="text-center text-black-700"
      >
        With the same land, duckweed can feed three times more cows than soybean
      </div>


       {/* Features section at the end */}
      <div className="w-screen max-w-none mt-6 px-2 md:px-8" style={{ position: "relative", left: "50%", right: "50%", marginLeft: "-50vw", marginRight: "-50vw", display: window.innerWidth < 768 ? 'none' : 'block' }}>
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
};

export default Comparison;