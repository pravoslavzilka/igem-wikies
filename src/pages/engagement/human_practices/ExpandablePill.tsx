import React, {useEffect, useState} from "react";
import {ChevronDown, ChevronUp} from "lucide-react";

interface ExpandablePillProps {
    image: string;
    name: string;
    subtitle?: string;
    location?: string;
    children: React.ReactNode;
    defaultOpen?: boolean; // NEW prop, optional
}

const ExpandablePill: React.FC<ExpandablePillProps> = ({
                                                           image,
                                                           name,
                                                           subtitle,
                                                           location,
                                                           children,
                                                           defaultOpen = false, // default is false, so old code works the same
                                                       }) => {
    const [expanded, setExpanded] = useState(defaultOpen);
    const [closing, setClosing] = useState(false);

    // Delay corner reset when collapsing
    useEffect(() => {
        if (!expanded && closing) {
            const timeout = setTimeout(() => setClosing(false), 300); // match transition
            return () => clearTimeout(timeout);
        }
    }, [expanded, closing]);

    const toggle = () => {
        if (expanded) {
            setClosing(true);
            setExpanded(false);
        } else {
            setExpanded(true);
        }
    };

    return (
        <div className="max-w-4xl mx-auto mb-8"> {/* Added vertical spacing between pills */}
            {/* Pill */}
            <div
                onClick={toggle}
                className={`flex items-center cursor-pointer border border-gray-400 shadow-md overflow-hidden max-w-4xl mx-auto transition-all duration-300
          ${expanded || closing ? "rounded-t-[72px] rounded-b-none" : "rounded-[72px]"}`}
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

                {/* Right: arrow */}
                <div className="pr-8">
                    {expanded ? (
                        <ChevronUp className="w-6 h-6 text-gray-700"/>
                    ) : (
                        <ChevronDown className="w-6 h-6 text-gray-700"/>
                    )}
                </div>
            </div>

            {/* Expandable content */}
            <div
                className={`transition-all duration-700 ease-in-out overflow-hidden max-w-4xl mx-auto
          ${expanded ? "max-h-[2000px] opacity-100 mt-0" : "max-h-0 opacity-0 mt-0"}`}
            >
                <div
                    className="rounded-b-[80px] border border-gray-300 shadow-md p-6 md:p-10 font-[Urbanist,sans-serif] bg-white"
                >
                    {children}
                </div>
            </div>
        </div>
    );
};

export default ExpandablePill;
