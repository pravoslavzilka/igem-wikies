import React, { useState, useEffect } from "react";
import "@fontsource/space-grotesk";

// Cow image components
const CowIcon = ({ src }: { src: string }) => (
  <img src={src} alt="cow" width={32} height={20} style={{ display: "inline-block" }} />
);

const getCowCols = (width: number) => {
  if (width < 480) return 3;
  if (width < 768) return 5;
  if (width < 1024) return 7;
  return 10;
};

const Comparison = () => {
  const [cols, setCols] = useState(getCowCols(window.innerWidth));

  useEffect(() => {
    const handleResize = () => setCols(getCowCols(window.innerWidth));
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 10 cows per group, 6 green, 4 gray for soy; 8 green, 2 gray for duckweed
  const cowsSoy = Array.from({ length: 10 }, (_, i) =>
    i < 5
      ? <CowIcon key={i} src="https://static.igem.wiki/teams/5642/icons/vector.webp" />
      : <CowIcon key={i} src="https://static.igem.wiki/teams/5642/icons/vector-f.webp" />
  );
  const cowsDuckweed = Array.from({ length: 10 }, (_, i) =>
    i < 8
      ? <CowIcon key={i} src="https://static.igem.wiki/teams/5642/icons/vector.webp" />
      : <CowIcon key={i} src="https://static.igem.wiki/teams/5642/icons/vector-f.webp" />
  );

  return (
    <div className="bg-white " style={{ padding: "5rem", paddingBottom: "12rem" }}>
      <h2 className="text-4xl font-bold mb-8 text-center" style={{ fontFamily: "Space Grotesk" }} >Duckweeds could save farmers money and protect Cerrado ecosystems</h2>
      <div className="flex flex-row gap-16 justify-center items-end">
        {/* Soybean group */}
        <div className="flex flex-col items-center" style={{paddingTop: "4rem"}}>
          <div
            className="grid gap-2 mb-4"
            style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}
          >
            {cowsSoy}
          </div>
          
        </div>
        {/* Duckweed group */}
        <div style={{ fontFamily: "Space Grotesk" }} className="flex flex-col items-center">
          <div
            className="grid gap-2 mb-4"
            style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}
          >
            {cowsDuckweed}
          </div>
          
        </div>
      </div>
      <div style={{ fontFamily: "Space Grotesk" }} className="text-center text-sm text-black-700 mt-4">
            Feeding 100 cows for a week requires three times less land with duckweed than with soybean.
          </div>
    </div>
  );
};

export default Comparison;