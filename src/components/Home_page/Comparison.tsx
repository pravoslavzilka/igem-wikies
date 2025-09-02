import React, { useState, useEffect } from "react";
import "@fontsource/space-grotesk";

// Cow image components
const CowIcon = ({ src }: { src: string }) => (
  <img src={src} alt="cow" width={32} height={20} style={{ display: "inline-block" }} />
);

const getCowCols = (width: number) => {
  // Always 10 columns for 10x10 grid
  return 10;
};

const Comparison = () => {
  const [cols, setCols] = useState(getCowCols(window.innerWidth));

  useEffect(() => {
    const handleResize = () => setCols(getCowCols(window.innerWidth));
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 100 cows per group
  // Soybean: 33 green, 67 gray
  const cowsSoy = Array.from({ length: 100 }, (_, i) =>
    i < 33
      ? <CowIcon key={i} src="https://static.igem.wiki/teams/5642/icons/vector.webp" />
      : <CowIcon key={i} src="https://static.igem.wiki/teams/5642/icons/vector-f.webp" />
  );
  // Duckweed: 99 green, 1 gray
  const cowsDuckweed = Array.from({ length: 100 }, (_, i) =>
    i < 99
      ? <CowIcon key={i} src="https://static.igem.wiki/teams/5642/icons/vector.webp" />
      : <CowIcon key={i} src="https://static.igem.wiki/teams/5642/icons/vector-f.webp" />
  );

  return (
    <div className="bg-white " style={{ padding: "5rem", paddingBottom: "12rem" }}>
      <h2 className="text-4xl font-bold mb-8 text-center" style={{ fontFamily: "Space Grotesk" }} >
        Duckweeds could save <span style={{ color: "#779E45" }}>farmers money </span> and protect <span style={{ color: "#779E45" }}>Cerrado ecosystems</span>
      </h2>
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
      <div style={{ fontFamily: "Space Grotesk" }} className="text-center text-md text-black-700 mt-12">
        Feeding 100 cows for a week requires three times less land with duckweed than with soybean.
      </div>
    </div>
  );
};

export default Comparison;