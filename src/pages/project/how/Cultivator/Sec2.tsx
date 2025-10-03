import ImageViewer, {ImageSlide} from "../../../../components/ui/ImageViewer.tsx";
import {useState} from "react";

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
            "45° angled sparsely placed jets with a larger throughput",
            "3mm jet diameter."
        ]
    },
];

const waterCycleSlides: ImageSlide[] = [
    {
        src: "https://static.igem.wiki/teams/5642/images/how/cultivator/watercycle/water-cycle-schema-old.webp",
        title: "High level overview of the water circulation system",
    },
    {
        src: "https://static.igem.wiki/teams/5642/images/how/cultivator/watercycle/reservoir-side.webp",
        title: "The central reservoir.",
        rightNote: [
            "The water is pumped out through the opaque black tube",
            "Our first iterations used a transparent tube, but user testing with Kateřina Patloková revealed that it leads to unwanted algae growth",
            "40l water capacity"
        ]
    },
    {
        src: "https://static.igem.wiki/teams/5642/images/how/cultivator/harvest/ladder-2.webp",
        title: "Water distribution ladder",
        rightNote: [
            "The water then enters a ladder with an electromagnetic valve on each layer",
            "Electronically opening a valve provides access for the water to flow to a specific layer"
        ]
    },
    {
        src: "https://static.igem.wiki/teams/5642/images/how/cultivator/harvest/harvest-above.webp",
        title: "Each layer contains our custom designed harvesting apparatus with water jets which squirt water into the cultivation trays",
    },
    {
        src: "https://static.igem.wiki/teams/5642/images/how/cultivator/watercycle/shute-1.webp",
        title: "Excess water carrying the harvested duckweed flows down the shaft",
    },
    {
        src: "https://static.igem.wiki/teams/5642/images/how/cultivator/watercycle/shute-bucket.webp",
        title: "The end of the shaft exhausts to a collection basket, where the duckweed is separated from the water",
    },
    {
        src: "https://static.igem.wiki/teams/5642/images/how/cultivator/watercycle/reservoir-top-basket.webp",
        title: "The basked can be easily removed to retrieve the collected duckweed",
    },
    {
        src: "https://static.igem.wiki/teams/5642/images/how/cultivator/watercycle/reservoir-top-net.webp",
        title: "Any stray pieces of duckweed get caught by the safety net",
        rightNote: [
            "The medium in the reservoir does not contain any duckweed",
            "The pumps are protected from jamming",
            "The entire circulation system will never get clogged"

        ]
    },


];


export default function CultivatorSec2() {
    const [isOpenHarvestingSlides, setIsOpenHarvestingSlides] = useState(false);
    const [isOpenCycleSlides, setIsOpenCycleSlides] = useState(false);

    return (
        <div>
            <h2
                className="font-bold text-green-700 mb-4 text-center"
                style={{
                    fontFamily: "Space Grotesk, sans-serif",
                    fontSize: window.innerWidth < 768 ? "1.6rem" : "2rem",
                }}
            >
                Automatic Harvesting
            </h2>

            <div className="grid md:grid-cols-2 gap-8 items-start max-w-6xl mx-auto p-8">
                {/* Left column */}
                <div className="font-[Urbanist,sans-serif] text-lg leading-relaxed space-y-4">
                    <p>
                        While the duckweed grows, <span className="font-bold">gentle water streams </span>
                        continuously stir the medium, ensuring{" "}
                        <span className="font-bold text-[#6ca033]">even nutrient distribution</span>.
                    </p>
                    <p>
                        As biomass accumulates, the system <span className="font-bold">monitors growth </span>
                        on each layer. Once a predefined density is reached,{" "}
                        <span className="font-bold text-[#6ca033]">targeted water streams are activated </span>
                        to guide excess duckweed over the tray’s edge.
                    </p>
                    <p>
                        This enables <span className="font-bold">precise, automated harvesting </span>
                        without disturbing the remaining plants.
                    </p>

                    {/* Photo grid */}
                    <div className="grid grid-cols-1 gap-4 mt-6">
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
                <div className="font-[Urbanist,sans-serif] text-lg leading-relaxed space-y-4">
                    <div className="flex justify-center mb-6">
                        <img
                            src="https://static.igem.wiki/teams/5642/images/how/cultivator/harvest/harvesting-current.webp"
                            alt="Harvesting and water current schema"
                            className="max-w-x rounded-lg object-contain"
                        />
                    </div>

                    <p>
                        To achieve <span className="font-bold">reliable and efficient harvesting</span>,
                        we tested different <span className="font-bold">jet diameters</span>,
                        adjusted spacing, and experimented with multiple outlet angles.
                    </p>

                    <p>After 6 iterations, we identified the most effective configuration to be</p>
                    <ul className="list-disc list-inside space-y-2">
                        <li>
                            <span className="font-bold text-[#6ca033]">1 mm jets</span>, spaced{" "}
                            <span className="font-bold">7 cm</span> apart
                        </li>
                        <li>
                            Streams exiting at{" "}
                            <span className="font-bold text-[#6ca033]">45° forward</span> and{" "}
                            <span className="font-bold">30° downward</span>
                        </li>
                    </ul>

                    <p>
                        This setup enables <span className="font-bold">consistent harvesting</span> with{" "}
                        <span className="font-bold text-[#6ca033]">minimal water usage </span>,
                        gently guiding excess duckweed over the tray edge without disturbing the culture.
                    </p>

                    {/* Button */}
                    <div className="mt-6 flex justify-center md:justify-center">
                        <button
                            onClick={() => setIsOpenHarvestingSlides(true)}
                            className="text-green-600 hover:text-green-800 font-semibold text-lg underline"
                        >
                            See the design iterations we went through
                        </button>
                    </div>
                </div>


            </div>




            <div
                className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto p-8 font-[Urbanist,sans-serif] text-lg leading-relaxed">
                {/* Left column */}
                <div className="space-y-4">
                    <p className="text-justify">
                        Water is pumped from a <span
                        className="font-bold text-[#6ca033]">central reservoir</span> using a
                        <span className="font-bold"> PWM-controlled pump</span>, allowing
                        <span className="font-bold text-[#6ca033]"> precise control of pressure</span> across all
                        layers.
                    </p>

                    <p className="text-justify">
                        The flow is directed through a <span
                        className="font-bold">ladder of electromagnetic valves</span>,
                        which selectively channel water to individual layers. This architecture enables{" "}
                        <span className="font-bold text-[#6ca033]">isolated harvesting</span>, making it possible to
                        cultivate{" "}
                        <span className="font-bold">different duckweed strains</span> on separate layers without
                        cross-contamination.
                    </p>

                    <p className="text-justify">
                        The harvested duckweed then falls through a <span
                        className="font-bold">vertical drop chute</span>,
                        where it is <span className="font-bold text-[#6ca033]">separated from the water</span> and
                        safely collected
                        for removal by the operator.
                    </p>

                    <p className="text-justify">
                        The collected water is immediately <span className="font-bold">filtered</span> to remove any
                        remaining duckweed,
                        ensuring it stays <span className="font-bold text-[#6ca033]">clean and reusable</span> for
                        future cultivation cycles.
                    </p>

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
                <div className="flex justify-center">
                    <img
                        src="https://static.igem.wiki/teams/5642/images/how/cultivator/harvest/ladder-2.webp"
                        className="max-w-x rounded-lg object-contain"
                        alt="Cultivator schematic"
                    />
                </div>

            </div>
                {/* Fullscreen image viewer */}
            <ImageViewer
                slides={waterCycleSlides}
                isOpen={isOpenCycleSlides}
                onClose={() => setIsOpenCycleSlides(false)}
            />
            {/* Fullscreen image viewer */}
            <ImageViewer
                slides={harvestingSlides}
                isOpen={isOpenHarvestingSlides}
                onClose={() => setIsOpenHarvestingSlides(false)}
            />
        </div>
    );
}
