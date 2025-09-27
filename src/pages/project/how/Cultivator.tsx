import React, {useState} from "react";
import ImageViewer, {ImageSlide} from "../../../components/ui/ImageViewer.tsx";

const traySlides: ImageSlide[] = [
    {
        src: "https://static.igem.wiki/teams/5642/images/how/cultivator/trays/tray-blueprint.webp",
        title: "Tray laser cutting blueprint",
        bottomNote: "The second iteration with slotted edges for improved durability.",
    },
    {
        src: "https://static.igem.wiki/teams/5642/images/how/cultivator/trays/tray-silicone-seam.webp",
        title: "The edges as waterproofed using silicone.",
    },
];

export default function LivingLayers() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="bg-white text-gray-900 leading-relaxed">


            {/* Full-width hero image with floating title */}
            <section className="relative w-full">
                <img
                    src="https://static.igem.wiki/teams/5642/images/how/cultivator/cultivator-background.webp"
                    alt="Duckweed Cultivator"
                    className="w-full object-cover"
                />
                <div className="absolute inset-0 flex flex-col justify-start items-center text-center pt-12 md:pt-24">
                    <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg">
                        Living Layers
                    </h1>
                    <p className="mt-2 text-xl md:text-2xl text-white drop-shadow-md">
                        Autonomous vertical duckweed cultivation!
                    </p>
                </div>
            </section>

            {/* Constrained content */}
            <section className="max-w-6xl mx-auto p-8">
                <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-8">
                    Growing Duckweed Is Exhausting.
                    <br/>
                    We Make It Easy!
                </h2>

                <p className="text-lg mb-6">
                    Plant scientists spend a large part of their time on routine culture
                    maintenance—refreshing medium, measuring biomass, and preventing overcrowding.
                    For duckweed, the fastest-growing plant on Earth, this burden is even greater.
                    Maintaining healthy cultures demands constant attention, leaving less time for
                    actual experimentation.
                </p>

                <p className="text-lg mb-6">
                    <span className="font-semibold">Our autonomous cultivation system</span>{' '}
                    changes that. With integrated sensors and control algorithms, it <span className="font-semibold">maintains
                    nutrient</span>{' '} levels, <span className="font-semibold">monitors duckweed</span>{' '} coverage,
                    and triggers harvesting
                    automatically once optimal density is reached. The result is a culture
                    that takes care of itself, freeing scientists to <span
                    className="font-semibold">focus on research</span>{' '} rather
                    than routine handling.
                </p>

                <p className="text-lg mb-6">
                    Throughout development, we <span className="font-semibold">tested the system</span>{' '} with
                    researchers and <span className="font-semibold">refined its
                    design</span>{' '} around their needs. Those insights shaped features like water reuse,
                    nutrient control, and real-time monitoring, helping us build a reliable
                    proof-of-concept prototype. In practice, it <span className="font-semibold">reduced routine handling by several
                    hours per day</span>{' '} while sustaining optimal growth.
                </p>

                <p className="text-lg">
                    To make this technology accessible, we’ve <span className="font-semibold">released the full design as open-source</span>{' '}.
                    With complete documentation, build plans, and source code available, <span
                    className="font-semibold">any lab can
                    reproduce</span>{' '} and adapt the cultivator for their own work—for about $800 in materials.
                </p>
            </section>

            <div className="max-w-6xl mx-auto p-8 bg-white text-gray-900 leading-relaxed">
                {/* Top section with list + schematic */}
                <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
                    {/* Feature list */}
                    <div>
                        <h2 className="text-2xl font-bold text-green-700 mb-4">
                            We developed a vertical duckweed cultivator featuring:
                        </h2>
                        <ul className="list-disc list-inside space-y-2 text-lg">
                            <li><span className="font-semibold">5 cultivation layers</span>{' '}, spaced 15 cm apart
                            </li>
                            <li>A total <span className="font-semibold">cultivation area of 2.5 m²</span>{' '}</li>
                            <li>75 liters of water capacity</li>
                            <li>Custom-designed acrylic trays for optimal plant growth</li>
                            <li>
                                A bespoke aluminum support structure for stability and durability
                            </li>
                            <li>
                                <span className="font-semibold">Compact dimensions</span>{' '}: 120 cm tall, with a 60
                                cm × 100 cm footprint
                            </li>
                        </ul>
                    </div>

                    {/* Schematic */}
                    <div className="flex justify-center">
                        <img
                            src="https://static.igem.wiki/teams/5642/images/how/cultivator/cultivator-layers.webp"
                            className="w-full max-w-md object-contain"
                        />
                    </div>
                </div>

                {/* Image + explanatory text side by side */}
                <div className="grid md:grid-cols-2 gap-8 items-center mb-6">
                    {/* Left: image */}
                    <div className="flex justify-center">
                        <div
                            className="bg-gray-200 border-2 border-dashed border-gray-400 h-64 flex items-center justify-center rounded-lg">
                            <div className="text-center text-gray-600">
                                <div className="text-sm mb-2">📸 IMAGE PLACEHOLDER</div>
                                <div className="text-xs italic">(Photo of a tray.)</div>
                            </div>
                        </div>
                    </div>

                    {/* Right: explanatory text */}
                    <div className="text-lg">
                        <p>
                            Each layer of the cultivator is fitted with a large water tray that
                            provides the surface on which duckweed naturally grows. These trays
                            are manufactured from 4 mm thick opaque acrylic sheets, cut with
                            high precision using a computer-controlled laser cutter according
                            to our custom design. While our early prototypes used simple
                            straight-edged trays, we soon improved the concept by introducing
                            interlocking components that slot securely together, greatly
                            enhancing strength and durability. The trays are bonded with
                            specialized acrylic glue, and all joints are sealed using non-toxic
                            silicone to ensure complete water resistance.
                        </p>
                        <p>
                            Initial user testing with transparent acrylic revealed that light
                            entering from the sides promoted unwanted algae growth. By switching
                            to opaque acrylic we effectively suppressed this issue, resulting in
                            cleaner cultures and healthier duckweed growth.
                        </p>

                        {/* Add space above link */}
                        <div className="mt-6 flex justify-center md:justify-center">
                            <button
                                onClick={() => setIsOpen(true)}
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
                    isOpen={isOpen}
                    onClose={() => setIsOpen(false)}
                />
            </div>


        </div>
    );
}
