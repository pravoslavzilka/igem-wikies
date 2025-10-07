import React, { useState, useEffect } from "react";
import "@fontsource/space-grotesk";

// Cow image components
const CowIcon = ({ src }: { src: string }) => {
  // Použijeme Tailwind triedy (alebo fixné in-line style) pre lepšiu konzistenciu,
  // ale pre zachovanie pôvodnej responzívnej logiky ju len mierne upravím.
  // Výška 18px pri väčších obrazovkách (desktop)
  const baseHeight = 18;
  return (
    <img 
      src={src} 
      alt="cow" 
      style={{ display: "inline-block", height: baseHeight }} 
      className="h-4 sm:h-[17px] lg:h-[18px]" // Pridané Tailwind triedy pre responzívnu veľkosť
    />
  );
};

const getCowCols = (width: number) => {
  return width < 768 ? 3 : 10;
};

const getCowRows = (width: number) => {
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

  const soyGreen = cols === 10 ? 33 : 5;
  const cowsSoy = Array.from({ length: totalCows }, (_, i) =>
    i < soyGreen
      ? <CowIcon key={i} src="https://static.igem.wiki/teams/5642/icons/homepage/other/vector.webp" />
      : <CowIcon key={i} src="https://static.igem.wiki/teams/5642/icons/homepage/other/vector-f.webp" />
  );
  
  const duckweedGreen = cols === 10 ? 99 : 14;
  const cowsDuckweed = Array.from({ length: totalCows }, (_, i) =>
    i < duckweedGreen
      ? <CowIcon key={i} src="https://static.igem.wiki/teams/5642/icons/homepage/other/vector.webp" />
      : <CowIcon key={i} src="https://static.igem.wiki/teams/5642/icons/homepage/other/vector-f.webp" />
  );

  // Zjednotené medzery (colGap, rowGap) pre menšie monitory a desktop
  const colGap = window.innerWidth < 768 ? "8px" : "18px";
  const rowGap = window.innerWidth < 768 ? "20px" : "13px";
  const tablesGap = cols === 10 ? "8rem" : "2rem";

  // Zjednotená štruktúra Features - odstránené tooltip a color
  const Features = [
    { title: "High nutrient uptake", description:"Great phytoremediation potential", icon: "https://static.igem.wiki/teams/5642/icons/homepage/features/fi-9997472.webp" },
    { title: "Wide pH and temperature cultivation range", description:"", icon: "https://static.igem.wiki/teams/5642/icons/homepage/features/fi-9997473.webp" },
    { title: "Small genome for a monocot plant", description:"150 - 500 Mbp", icon: "https://static.igem.wiki/teams/5642/icons/features/fi-7006038.webp" },
    { title: "No gene silencing", description:"", icon: "https://static.igem.wiki/teams/5642/icons/homepage/features/fi-11294443.webp" },
  ];

  return (
    <div
      className="bg-white"
      style={{
        position: "relative",
        zIndex: 10,
        padding: "2rem",
        paddingBottom: "3rem",
        paddingTop: "2.5rem",
        ...(window.innerWidth >= 768
          ? { padding: "5rem", paddingBottom: "6rem" }
          : {}),
      }}
    >
      <h2
        className="font-bold text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight px-2" // Zjednotené responzívne triedy pre veľkosť textu
        style={{
          fontFamily: "Space Grotesk",
          marginTop: window.innerWidth < 768 ? "1.5rem" : "1.9rem",
          marginBottom: window.innerWidth < 768 ? "1.5rem" : "2rem",
        }}
      >
        With the same land, <span style={{ color: "#779E45" }}>duckweed</span> can feed <span style={{ color: "#779E45" }}>three times more cows</span> than soybean
      </h2>
      <div
        className="flex flex-row justify-center items-end"
        style={{
          gap: tablesGap,
          marginTop: window.innerWidth < 768 ? "1.5rem" : "2rem",
        }}
      >
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
        {cols !== 10 && (
          <div
            style={{
              borderLeft: "2px solid #779E45",
              height: window.innerWidth < 768 ? "180px" : "300px",
            }}
          />
        )}
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
          marginTop: window.innerWidth < 768 ? "1.5rem" : "3rem",
        }}
        className="text-center font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl"
      >
        <h2 style={{fontFamily: "Space Grotesk"}}>Duckweeds could save <span style={{ color: "#779E45" }}>farmers money </span>
        and protect <span style={{ color: "#779E45" }}>Cerrado ecosystems</span></h2>
      </div>

      {/* Features section - OPRAVENÉ MIN-WIDTH A GAP PRE ZABEZPEČENIE JEDNOHO RIADKU */}
      <div className="hidden md:block w-full mt-8 px-4 sm:px-6 md:px-8 overflow-hidden">
        <div className="flex flex-wrap justify-center gap-y-8 sm:gap-y-10 gap-x-12 md:gap-x-10 lg:gap-x-14 max-w-7xl mx-auto">
          {Features.map((feature, idx) => (
            <div
              key={idx}
              // ZVÄČŠENÁ MINIMÁLNA ŠÍRKA pre zaistenie jedného riadku na bežných desktopoch
              className="flex flex-col items-center text-center min-w-[200px] sm:min-w-[200px] max-w-xs" 
            >
              <img
                src={feature.icon}
                alt={feature.title}
                className="mb-3 sm:mb-4"
                style={{ width: 56, height: 56 }}
              />
              <div 
                className="flex flex-col justify-end items-center w-full"
                style={{ minHeight: '65px' }} 
              >
                <div
                  className="font-semibold text-black px-2 mb-2" 
                  style={{ 
                    fontFamily: "Space Grotesk, sans-serif", 
                    fontSize: "1.1rem" 
                  }}
                >
                  {feature.title}
                </div>
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
};

export default Comparison;