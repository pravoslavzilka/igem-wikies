import React from "react";

interface StaticPillProps {
    image: string;
    name: string;
    subtitle?: string;
    location?: string;
}

const StaticPill: React.FC<StaticPillProps> = ({image, name, subtitle, location}) => {
    return (
        <div className="max-w-4xl mx-auto mb-8">
            <div
                className="flex items-center border border-gray-400 shadow-md overflow-hidden max-w-4xl mx-auto rounded-[72px]"
            >
                {/* Left: image */}
                <div className="h-32 w-32 flex-shrink-0 m-3">
                    <img
                        src={image}
                        alt={name}
                        className="h-full w-full object-cover rounded-full"
                    />
                </div>

                {/* Middle: name + info */}
                <div className="flex-1 px-6 py-6">
                    <p
                        className="font-semibold"
                        style={{fontFamily: "Space Grotesk, sans-serif"}}
                    >
                        {name}
                    </p>
                    {subtitle && <p className="text-sm">{subtitle}</p>}
                    {location && <p className="text-sm">{location}</p>}
                </div>
            </div>
        </div>
    );
};

export default StaticPill;
