import React, { useState, useEffect } from "react";
import "@fontsource/space-grotesk";

// Cow image components
const CowIcon = ({ src }: { src: string }) => (
  <img src={src} alt="cow" width={25} height={15} style={{ display: "inline-block" }} />
);

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

  const colGap = "20px";
  const rowGap = "40px";

  // Set gap between tables: smaller on mobile, larger on desktop
  const tablesGap = cols === 10 ? "8rem" : "2rem";

  return (
    <div className="bg-white " style={{ padding: "5rem", paddingBottom: "6rem" }}>
      <h2 className="text-4xl font-bold  text-center" style={{ fontFamily: "Space Grotesk" }} >
        Duckweeds could save <span style={{ color: "#779E45" }}>farmers money </span> and protect <span style={{ color: "#779E45" }}>Cerrado ecosystems</span>
      </h2>
      <div
        className="flex flex-row justify-center items-end"
        style={{ gap: tablesGap }}
      >
        {/* Soybean group */}
        <div className="flex flex-col items-center" style={{paddingTop: "4rem"}}>
          <div
            className="grid mb-4"
            style={{
              gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
              columnGap: colGap,
              rowGap: rowGap
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
              height: "300px",
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
              rowGap: rowGap
            }}
          >
            {cowsDuckweed}
          </div>
        </div>
      </div>
      <div style={{ fontFamily: "Space Grotesk", fontSize: "20px" }} className="text-center  text-black-700 mt-12">
        With the same land, duckweed can feed three times more cows than soybean     </div>
    </div>
  );
};

export default Comparison;