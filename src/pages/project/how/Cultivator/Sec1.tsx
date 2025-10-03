import ImageViewer, {ImageSlide} from "../../../../components/ui/ImageViewer.tsx";
import {useState} from "react";

const traySlides: ImageSlide[] = [
    {
        src: "https://static.igem.wiki/teams/5642/images/how/cultivator/trays/tray-template-iteration-1.webp",
        title: "Tray laser cutting blueprint. Iteration #1",
        rightNote: [
            "Simple straight edges",
            "One wall is shorter to allow the duckweed to fall over the edge during harvesting",
            "5cm water level",
            "8cm high walls",
            "3mm thick transparent acrylic",
        ],
    },
    {
        src: "https://static.igem.wiki/teams/5642/images/how/cultivator/trays/tray-blueprint.webp",
        title: "Tray laser cutting blueprint. Iteration #2",
        rightNote: [
            "Slotted edges which fit together to improve stability and reliability",
            "The right wall has a notch in the middle to only allow the duckweed to fall through the designated area.",
            "Opaque acrylic to suppress algae growth",
            "3cm water level",
            "5cm high walls",
            "4mm thick acrylic",
        ],
    },
    {
        src: "https://static.igem.wiki/teams/5642/images/how/cultivator/trays/tray-silicone-seam.webp",
        title: "The edges as waterproofed using silicone",
    },
];

export default function CultivatorSec1() {
    const [isOpenTraySlides, setIsOpenTraySlides] = useState(false);

    return (
        <div className="max-w-6xl mx-auto p-8 bg-white text-gray-900 leading-relaxed">
            {/* Top section with list + schematic */}
            <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
                {/* Feature list */}
                <div>
                    <h2
                        className="font-bold mb-8 text-green-700"
                        style={{
                            fontFamily: "Space Grotesk, sans-serif",
                            fontSize: window.innerWidth < 768 ? "1.8rem" : "2.5rem",
                        }}
                    >
                        We developed a vertical duckweed cultivator with:
                    </h2>
                    <ul className="list-disc list-inside space-y-2 font-[Urbanist,sans-serif] text-lg">
                        <li>
                            <span className="font-bold text-[#6ca033]">5 cultivation layers</span>, spaced 15 cm apart
                        </li>
                        <li>
                            A total <span className="font-bold text-[#6ca033]">cultivation area of 2.5 m²</span>
                        </li>
                        <li>
                            <span className="font-bold">75 liters</span> of water capacity
                        </li>
                        <li>
                            <span className="font-bold">Custom-designed acrylic trays</span> for optimal plant growth
                        </li>
                        <li>
                            A bespoke <span className="font-bold">aluminum support structure</span> for stability and
                            durability
                        </li>
                        <li>
                            <span className="font-bold text-[#6ca033]">Compact dimensions</span>: 120 cm tall, with a 60
                            cm × 100 cm footprint
                        </li>
                    </ul>
                </div>

                {/* Schematic */}
                <div className="flex justify-center">
                    <img
                        src="https://static.igem.wiki/teams/5642/images/how/cultivator/layers-2.webp"
                        className="max-w-x rounded-lg object-contain"
                        alt="Cultivator schematic"
                    />
                </div>
            </div>

            <h2
                className="font-bold text-green-700 mb-4 text-center"
                style={{
                    fontFamily: "Space Grotesk, sans-serif",
                    fontSize: window.innerWidth < 768 ? "1.6rem" : "2rem",
                }}
            >
                Cultivation Trays
            </h2>
            {/* Image + explanatory text side by side */}
            <div className="grid md:grid-cols-2 gap-8 items-center mb-6">
                {/* Left: image */}
                <div className="flex justify-center">
                    <img
                        src="https://static.igem.wiki/teams/5642/images/how/cultivator/trays/side-tray.webp"
                        className="max-w-x rounded-lg object-contain"
                        alt="Cultivator schematic"
                    />
                </div>

                {/* Right: explanatory text */}
                <div className="font-[Urbanist,sans-serif] text-lg leading-relaxed space-y-4">
                    <p>
                        Each layer of the cultivator is fitted with a{" "}
                        <span className="font-bold text-[#6ca033]">large water tray</span> that provides the
                        surface on which duckweed naturally grows.
                    </p>
                    <p>
                        These trays are manufactured from{" "}
                        <span className="font-bold">4 mm thick opaque acrylic sheets</span>, cut with{" "}
                        <span className="font-bold text-[#6ca033]">high precision using a computer-controlled laser cutter</span>{" "}
                        according to our custom design.
                    </p>
                    <p>
                        Early prototypes used <span className="font-bold">simple straight-edged trays</span>,
                        but we soon improved the concept by introducing{" "}
                        <span className="font-bold text-[#6ca033]">interlocking components</span> that slot securely
                        together, greatly enhancing strength and durability.
                    </p>
                    <p>
                        The trays are bonded with <span className="font-bold">specialized acrylic glue</span>, and
                        all joints are sealed using <span
                        className="font-bold text-[#6ca033]">non-toxic silicone</span>{" "}
                        to ensure complete water resistance.
                    </p>
                    <p>
                        <span className="font-bold">Initial user testing</span> with transparent acrylic revealed
                        that light entering from the sides promoted unwanted algae growth.
                        By switching to <span className="font-bold ">opaque acrylic</span> we effectively
                        suppressed this issue, resulting in{" "}
                        <span className="font-bold text-[#6ca033]">cleaner cultures</span> and{" "}
                        <span className="font-bold text-[#6ca033]">healthier duckweed growth</span>.
                    </p>

                    {/* Button */}
                    <div className="mt-6 flex justify-center md:justify-center">
                        <button
                            onClick={() => setIsOpenTraySlides(true)}
                            className="text-green-600 hover:text-green-800 font-semibold text-lg underline"
                        >
                            See the trays in detail
                        </button>
                    </div>
                </div>
            </div>

            {/* Fullscreen image viewer */}
            <ImageViewer
                slides={traySlides}
                isOpen={isOpenTraySlides}
                onClose={() => setIsOpenTraySlides(false)}
            />
        </div>
    );
}
