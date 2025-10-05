import React, {useEffect, useState} from "react";
import {ChevronDown, ChevronUp} from "lucide-react";

interface ExpandableDualPillProps {
    leftName: string;
    leftSubtitle?: string;
    leftLocation?: string;
    rightName: string;
    rightSubtitle?: string;
    rightLocation?: string;
    centerImage: string;
    children: React.ReactNode;
    defaultOpen?: boolean;
}

const ExpandableDualPill: React.FC<ExpandableDualPillProps> = ({
                                                                   leftName,
                                                                   leftSubtitle,
                                                                   leftLocation,
                                                                   rightName,
                                                                   rightSubtitle,
                                                                   rightLocation,
                                                                   centerImage,
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
                className={`flex items-center justify-between cursor-pointer border border-gray-400 shadow-md overflow-hidden transition-all duration-300
          ${expanded || closing ? "rounded-t-[72px] rounded-b-none" : "rounded-[72px]"}`}
            >
                {/* Left Person */}
                <div className="flex-1 text-center py-6 px-4">
                    <p
                        className="font-semibold"
                        style={{fontFamily: "Space Grotesk, sans-serif"}}
                    >
                        {leftName}
                    </p>
                    {leftSubtitle && <p className="text-sm">{leftSubtitle}</p>}
                    {leftLocation && <p className="text-sm">{leftLocation}</p>}
                </div>

                {/* Center Institution Image */}
                <div className="h-24 flex-shrink-0 m-3">
                    <img
                        src={centerImage}
                        alt="Institution"
                        className="h-full w-full"
                    />
                </div>

                {/* Right Person */}
                <div className="flex-1 text-center py-6 px-4">
                    <p
                        className="font-semibold"
                        style={{fontFamily: "Space Grotesk, sans-serif"}}
                    >
                        {rightName}
                    </p>
                    {rightSubtitle && <p className="text-sm">{rightSubtitle}</p>}
                    {rightLocation && <p className="text-sm">{rightLocation}</p>}
                </div>

                {/* Arrow */}
                <div className="pr-8">
                    {expanded ? (
                        <ChevronUp className="w-6 h-6 text-gray-700"/>
                    ) : (
                        <ChevronDown className="w-6 h-6 text-gray-700"/>
                    )}
                </div>
            </div>

            {/* Expandable Content */}
            <div
                className={`transition-all duration-700 ease-in-out overflow-hidden
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

export default ExpandableDualPill;
