import React from "react";

interface ComparisonCardProps {
  type: "before" | "after";
  time: string;
  description: string;
  details: string;
  accentColor?: string;
}

const ComparisonCard: React.FC<ComparisonCardProps> = ({
  type,
  time,
  description,
  details,
  accentColor = "#779E45"
}) => {
  const isAfter = type === "after";
  
  return (
    <div className="flex flex-col justify-center items-center gap-6 w-[284px] h-[233px]">
      <div 
        className="flex flex-col items-center p-6 gap-1 w-full h-[128px] rounded-lg"
        style={{ 
          backgroundColor: isAfter ? accentColor : "#F5F5F5" 
        }}
      >
        <div 
          className={`text-lg leading-[120%] text-center ${
            isAfter ? "font-bold text-white" : "font-semibold text-black"
          }`}
        >
          {time}
        </div>
        <div 
          className={`text-base leading-[168%] text-center font-normal ${
            isAfter ? "text-white" : "text-black/75"
          }`}
          style={{ fontFamily: 'Space Grotesk, sans-serif' }}
        >
          {description}
        </div>
      </div>
      <div 
        className="text-base leading-[168%] text-center text-black/75 w-full" 
        style={{ fontFamily: 'Space Grotesk, sans-serif' }}
      >
        {details}
      </div>
    </div>
  );
};

export default ComparisonCard;