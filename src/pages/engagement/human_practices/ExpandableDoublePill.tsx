import React, {useEffect, useState} from "react";
import {ChevronDown, ChevronUp} from "lucide-react";

interface ExpandableDoublePillProps {
    leftImage: string;
    rightImage: string;
    title: string;
    subtitle?: string;
    children: React.ReactNode;
    defaultOpen?: boolean;
}

const ExpandableDoublePill: React.FC<ExpandableDoublePillProps> = ({
                                                                       leftImage,
                                                                       rightImage,
                                                                       title,
                                                                       subtitle,
                                                                       children,
                                                                       defaultOpen = false,
                                                                   }) => {
    const [expanded, setExpanded] = useState(defaultOpen);
    const [closing, setClosing] = useState(false);

    useEffect(() => {
        if (!expanded && closing) {
            const timeout = setTimeout(() => setClosing(false), 300);
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
        <div className="max-w-4xl mx-auto mb-8">
            {/* Pill Header */}
            <div
                onClick={toggle}
                className={`flex items-center justify-between cursor-pointer border border-gray-400 shadow-md overflow-hidden max-w-4xl mx-auto transition-all duration-300
        ${expanded || closing ? "rounded-t-[72px] rounded-b-none" : "rounded-[72px]"}`}
            >
                {/* Left image */}
                <div className="flex justify-center items-center w-1/3 p-3">
                    <img
                        src={leftImage}
                        alt="Left person"
                        className="h-28 w-28 object-cover rounded-full"
                    />
                </div>

                {/* Center text */}
                <div className="flex-1 text-center px-4 py-6">
                    <p
                        className="font-semibold"
                        style={{fontFamily: "Space Grotesk, sans-serif"}}
                    >
                        {title}
                    </p>
                    {subtitle && <p className="text-sm">{subtitle}</p>}
                </div>

                {/* Right image */}
                <div className="flex justify-center items-center w-1/3 p-3">
                    <img
                        src={rightImage}
                        alt="Right person"
                        className="h-28 w-28 object-cover rounded-full"
                    />
                </div>

                {/* Chevron */}
                <div className="pr-6">
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
                    className="rounded-b-[80px] border border-gray-300 shadow-md p-6 md:p-10 font-[Urbanist,sans-serif] bg-white">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default ExpandableDoublePill;
