import React from "react";

// Simple SVG cow icon
const CowIcon = ({ color = "#BDBDBD" }) => (
  <svg width="32" height="20" viewBox="0 0 32 20" fill="none">
    <path
      d="M2 16V12C2 8 6 6 10 6H22C26 6 30 8 30 12V16"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="8" cy="16" r="2" fill={color} />
    <circle cx="24" cy="16" r="2" fill={color} />
  </svg>
);

const Comparison = () => {
  // 10 cows per group, 6 green, 4 gray
  const cowsSoy = Array.from({ length: 10 }, (_, i) =>
    i < 6 ? <CowIcon key={i} color="#8BC34A" /> : <CowIcon key={i} color="#BDBDBD" />
  );
  const cowsDuckweed = Array.from({ length: 10 }, (_, i) =>
    i < 8 ? <CowIcon key={i} color="#8BC34A" /> : <CowIcon key={i} color="#BDBDBD" />
  );

  return (
    <div className="bg-white " style={{ padding: "5rem", paddingBottom: "12rem" }}>
      <h2 className="text-3xl font-bold mb-8 text-center">Nadpis</h2>
      <div className="flex flex-row gap-16 justify-center items-end">
        {/* Soybean group */}
        <div className="flex flex-col items-center">
          <div className="grid grid-cols-10 gap-2 mb-4">
            {cowsSoy}
          </div>
          <div className="text-center text-sm text-gray-700 mt-4">
            Tol'koto kravičiek vieme za XY času
            <br />
            nakŕmiť soybeanom
          </div>
        </div>
        {/* Duckweed group */}
        <div className="flex flex-col items-center">
          <div className="grid grid-cols-10 gap-2 mb-4">
            {cowsDuckweed}
          </div>
          <div className="text-center text-sm text-gray-700 mt-4">
            Tol'koto kravičiek vieme za XY času
            <br />
            nakŕmiť duckweedom
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comparison;