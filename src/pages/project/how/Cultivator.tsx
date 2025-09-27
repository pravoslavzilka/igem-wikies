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

const waterCycleSlides: ImageSlide[] = [
    {
        src: "https://static.igem.wiki/teams/5642/images/how/cultivator/watercycle/water-cycle-schema-old.webp",
        title: "High level overview of the water circulation system.",
    },

];

const nutrientSlides: ImageSlide[] = [
    {
        src: "https://static.igem.wiki/teams/5642/images/how/cultivator/watercycle/nutrient-mixing-schema-old.webp",
        title: "High level overview of the water enrichment system.",
    },

];

const harvestingSlides: ImageSlide[] = [
    {
        src: "https://static.igem.wiki/teams/5642/images/how/cultivator/harvest/iterations/cultivator-history-1.webp",
        title: "Iteration 1",
        rightNote: [
            "Densely packed jets near the harvesting edge to push the duckweed over.",
            "Sparse jets at the back to evenly re-distribute the duckweed.",
            "1mm jet diameter."
        ]
    },
    {
        src: "https://static.igem.wiki/teams/5642/images/how/cultivator/harvest/iterations/cultivator-history-2.webp",
        title: "Iteration 2",
        rightNote: [
            "Uniformly spaced jets at a shallow 30° angle, to gently push the duckweed forward while raising the water level.",
            "1mm jet diameter."
        ]
    },
    {
        src: "https://static.igem.wiki/teams/5642/images/how/cultivator/harvest/iterations/cultivator-history-4.webp",
        title: "Iteration 3",
        rightNote: [
            "Jets at a shallow 30° angle, to gently push the duckweed forward while raising the water level.",
            "Front jets targeted to push duckweed over the edge with maximum force.",
            "1mm jet diameter."
        ]
    },
    {
        src: "https://static.igem.wiki/teams/5642/images/how/cultivator/harvest/iterations/cultivator-history-3.webp",
        title: "Iteration 4",
        rightNote: [
            "Uniformly spaced jets at a steep 45° angle, to push the duckweed forward more quickly.",
            "1mm jet diameter."
        ]
    },
    {
        src: "https://static.igem.wiki/teams/5642/images/how/cultivator/harvest/iterations/cultivator-history-5.webp",
        title: "Iteration 5",
        rightNote: [
            "45° angled jets but only at the back, to create a steady current that pushes the duckweed over the edge.",
            "No jets in the front to avoid distributing the flowing duckweed.",
            "1mm jet diameter."
        ]
    },
    {
        src: "https://static.igem.wiki/teams/5642/images/how/cultivator/harvest/iterations/cultivator-history-6.webp",
        title: "Iteration 6",
        rightNote: [
            "45° angled parsely placed jets with a larger throughput.",
            "3mm jet diameter."
        ]
    },

];

export default function LivingLayers() {
    const [isOpenTraySlides, setIsOpenTraySlides] = useState(false);
    const [isOpenCycleSlides, setIsOpenCycleSlides] = useState(false);
    const [isOpenNutrientSlides, setIsOpenNutrientSlides] = useState(false);
    const [isOpenHarvestingSlides, setIsOpenHarvestingSlides] = useState(false);

    return (
        <div className="bg-white text-gray-900 leading-relaxed text-justify">
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
                    maintenance—refreshing medium, measuring biomass, and preventing
                    overcrowding. For duckweed, the fastest-growing plant on Earth, this
                    burden is even greater. Maintaining healthy cultures demands constant
                    attention, leaving less time for actual experimentation.
                </p>

                <p className="text-lg mb-6">
                    <span className="font-semibold">Our autonomous cultivation system</span>{" "}
                    changes that. With integrated sensors and control algorithms, it{" "}
                    <span className="font-semibold">maintains nutrient</span> levels,{" "}
                    <span className="font-semibold">monitors duckweed</span> coverage, and
                    triggers harvesting automatically once optimal density is reached. The
                    result is a culture that takes care of itself, freeing scientists to{" "}
                    <span className="font-semibold">focus on research</span> rather than
                    routine handling.
                </p>

                <p className="text-lg mb-6">
                    Throughout development, we{" "}
                    <span className="font-semibold">tested the system</span> with
                    researchers and <span className="font-semibold">refined its design</span>{" "}
                    around their needs. Those insights shaped features like water reuse,
                    nutrient control, and real-time monitoring, helping us build a reliable
                    proof-of-concept prototype. In practice, it{" "}
                    <span className="font-semibold">
            reduced routine handling by several hours per day
          </span>{" "}
                    while sustaining optimal growth.
                </p>

                <p className="text-lg">
                    To make this technology accessible, we’ve{" "}
                    <span className="font-semibold">released the full design as open-source</span>
                    . With complete documentation, build plans, and source code available,{" "}
                    <span className="font-semibold">any lab can reproduce</span> and adapt
                    the cultivator for their own work—for about $800 in materials.
                </p>
            </section>

            <hr className="my-8 w-1/2 mx-auto border-t-2 border-gray-400"/>


            <div className="max-w-6xl mx-auto p-8 bg-white text-gray-900 leading-relaxed">
                {/* Top section with list + schematic */}
                <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
                    {/* Feature list */}
                    <div>
                        <h2 className="text-2xl font-bold text-green-700 mb-4">
                            We developed a vertical duckweed cultivator featuring:
                        </h2>
                        <ul className="list-disc list-inside space-y-2 text-lg">
                            <li>
                                <span className="font-semibold">5 cultivation layers</span>, spaced
                                15 cm apart
                            </li>
                            <li>
                                A total <span className="font-semibold">cultivation area of 2.5 m²</span>
                            </li>
                            <li>75 liters of water capacity</li>
                            <li>Custom-designed acrylic trays for optimal plant growth</li>
                            <li>
                                A bespoke aluminum support structure for stability and durability
                            </li>
                            <li>
                                <span className="font-semibold">Compact dimensions</span>: 120 cm
                                tall, with a 60 cm × 100 cm footprint
                            </li>
                        </ul>
                    </div>

                    {/* Schematic */}
                    <div className="flex justify-center">
                        <img
                            src="https://static.igem.wiki/teams/5642/images/how/cultivator/cultivator-layers.webp"
                            className="max-w-x rounded-lg object-contain"
                            alt="Cultivator schematic"
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
                        <p className="text-justify">
                            Each layer of the cultivator is fitted with a large water tray that
                            provides the surface on which duckweed naturally grows. These trays
                            are manufactured from 4 mm thick opaque acrylic sheets, cut with high
                            precision using a computer-controlled laser cutter according to our
                            custom design. While our early prototypes used simple straight-edged
                            trays, we soon improved the concept by introducing interlocking
                            components that slot securely together, greatly enhancing strength and
                            durability. The trays are bonded with specialized acrylic glue, and all
                            joints are sealed using non-toxic silicone to ensure complete water
                            resistance.
                        </p>
                        <p className="text-justify">
                            Initial user testing with transparent acrylic revealed that light
                            entering from the sides promoted unwanted algae growth. By switching to
                            opaque acrylic we effectively suppressed this issue, resulting in
                            cleaner cultures and healthier duckweed growth.
                        </p>

                        {/* Add space above link */}
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

            <div className="grid md:grid-cols-2 gap-8 items-start max-w-6xl mx-auto p-8">
                {/* Left column */}
                <div>
                    <p className="text-lg mb-6">
                        While the duckweed grows, gentle water streams continuously stir the
                        medium, ensuring even nutrient distribution. As biomass accumulates, the
                        system monitors growth on each layer. Once a predefined density threshold
                        is reached, targeted water streams are activated to guide excess duckweed
                        over the tray’s edge, enabling precise, automated harvesting without
                        disturbing the remaining plants.
                    </p>

                    {/* Photo grid */}
                    <div className="grid grid-cols-1 gap-4">
                        <div className="flex justify-center">
                            <img
                                src="https://static.igem.wiki/teams/5642/images/how/cultivator/harvest/harvest-above.webp"
                                alt="Duckweed harvesting"
                                className="max-w-x rounded-lg object-contain"
                            />
                        </div>
                        <div className="flex justify-center">
                            <img
                                src="https://static.igem.wiki/teams/5642/images/how/cultivator/harvest/harvest-beak.webp"
                                alt="Cultivator system"
                                className="max-w-x rounded-lg object-contain"
                            />
                        </div>
                    </div>
                </div>

                {/* Right column */}
                <div>
                    <div className="flex justify-center mb-6">
                        <img
                            src="https://static.igem.wiki/teams/5642/images/how/cultivator/harvest/harvesting-current.webp"
                            alt="Harvesting and water current schema"
                            className="max-w-x rounded-lg object-contain"
                        />
                    </div>

                    <div className="text-lg space-y-4">
                        <p className="text-justify">
                            To achieve reliable and efficient harvesting, we tested water streams
                            of various diameters, adjusted jet spacing, and experimented with
                            different outlet angles. The most effective configuration features:
                        </p>
                        <ul className="list-disc list-inside space-y-2">
                            <li>1 mm diameter jets, spaced 7 cm apart</li>
                            <li>
                                Streams exiting at 45° along the harvesting direction and 30°
                                downward
                            </li>
                        </ul>
                        <p className="text-justify">
                            This setup enables consistent harvesting with minimal water usage,
                            gently guiding excess duckweed over the tray edge without disturbing
                            the remaining biomass.
                        </p>

                        {/* Add space above link */}
                        <div className="mt-6 flex justify-center md:justify-center">
                            <button
                                onClick={() => setIsOpenHarvestingSlides(true)}
                                className="text-green-600 hover:text-green-800 font-semibold text-lg underline"
                            >
                                See the design iterations we went through.
                            </button>
                        </div>

                    </div>
                </div>
            </div>
            <ImageViewer
                slides={harvestingSlides}
                isOpen={isOpenHarvestingSlides}
                onClose={() => setIsOpenHarvestingSlides(false)}
            />

            <div className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto p-8">
                {/* Left column */}
                <div>
                    <p className="text-justify">
                        Water is pumped from a central reservoir using a PWM-controlled pump,
                        allowing precise control of pressure across all layers. The flow is
                        directed through a ladder of electromagnetic valves, which selectively
                        channel water to individual layers. This architecture enables isolated
                        harvesting, making it possible to cultivate different duckweed strains
                        on separate layers without cross-contamination.
                    </p>
                    <p>
                        The harvested duckweed falls through a vertical drop chute, where it is separated from the
                        water, and stored until it is picked up by the operator. The collected water is immediately
                        filtered, ensuring that it remains free of duckweed and and suitable for reuse in future
                        cultivation cycles.
                    </p>

                    {/* Add space above link */}
                    <div className="mt-6 flex justify-center md:justify-center">
                        <button
                            onClick={() => setIsOpenCycleSlides(true)}
                            className="text-green-600 hover:text-green-800 font-semibold text-lg underline"
                        >
                            See the whole water circulation system.
                        </button>
                    </div>
                </div>

                {/* Right column */}
                <div>
                    <div
                        className="bg-gray-200 border-2 border-dashed border-gray-400 h-64 flex items-center
                        justify-center rounded-lg">
                        <div className="text-center text-gray-600">
                            <div className="text-sm mb-2">📸 IMAGE PLACEHOLDER</div>
                            <div className="text-xs italic">(Photo of a the valve ladder.)</div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Fullscreen image viewer */}
            <ImageViewer
                slides={waterCycleSlides}
                isOpen={isOpenCycleSlides}
                onClose={() => setIsOpenCycleSlides(false)}
            />


            <div className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto p-8">
                {/* Left column */}
                <div>
                    <div
                        className="bg-gray-200 border-2 border-dashed border-gray-400 h-64 flex items-center
                        justify-center rounded-lg">
                        <div className="text-center text-gray-600">
                            <div className="text-sm mb-2">📸 IMAGE PLACEHOLDER</div>
                            <div className="text-xs italic">(Photo of a the nutrient station.)</div>
                        </div>
                    </div>
                    <p className="text-justify">

                    </p>
                </div>

                {/* Right column */}
                <div>
                    <p className="text-justify">
                        The water is then directed into a central reservoir. Inside the reservoir, sensors automatically
                        measure the water’s electrical conductivity (EC) and the pH level to assess the dissolved
                        nutrient levels, while peristaltic pumps accurately inject the nutrients as needed. The system
                        allows for 4 different liquid additives to be separately mixed into the medium. In order to
                        prevent clumping in the liquid additives, dedicated electric DC motors periodically spin a metal
                        stirrer inside the containers, using neodymium magnets below the base of the containers. A
                        mixing pump then ensures an even distribution inside the main reservoir, maintaining an ideal
                        growth solution and preventing the crystallization of the combined additives.
                    </p>
                    <p className="text-justify">
                        Once enriched and balanced, the water is cycled back into the trays for the next round of
                        cultivation. This closed-loop design minimizes waste, conserves resources, and keeps the
                        duckweed growing under optimal conditions—harvest after harvest.
                    </p>
                    {/* Add space above link */}
                    <div className="mt-6 flex justify-center md:justify-center">
                        <button
                            onClick={() => setIsOpenNutrientSlides(true)}
                            className="text-green-600 hover:text-green-800 font-semibold text-lg underline"
                        >
                            See how our nutrient system works in detail.
                        </button>
                    </div>
                </div>
            </div>
            {/* Fullscreen image viewer */}
            <ImageViewer
                slides={nutrientSlides}
                isOpen={isOpenNutrientSlides}
                onClose={() => setIsOpenNutrientSlides(false)}
            />

        </div>
    );
}
