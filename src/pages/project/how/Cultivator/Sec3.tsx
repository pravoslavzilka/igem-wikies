import ImageViewer, {ImageSlide} from "../../../../components/ui/ImageViewer.tsx";
import {useState} from "react";
import A from "../../../../A.tsx";

const nutrientSlides: ImageSlide[] = [
    {
        src: "https://static.igem.wiki/teams/5642/images/how/cultivator/watercycle/nutrient-mixing-schema-old.webp",
        title: "High level overview of the water enrichment system",
    },
    {
        src: "https://static.igem.wiki/teams/5642/images/how/cultivator/watercycle/davkovac-pivot.webp",
        title: "Additive Station",
        rightNote: [
            "Capacity for up to 4 separate liquid additives",
            "The bottles pivot out for easy access",
            "When locked in, the station ensures a tight bond"
        ]
    },
    {
        src: "https://static.igem.wiki/teams/5642/images/how/cultivator/watercycle/davkovac-open.webp",
        title: "The peristaltic pumps and the bottle holding mechanisms are hidden in the custom designed 3D printed case",
    },
    {
        src: "https://static.igem.wiki/teams/5642/images/how/cultivator/watercycle/davkovac-hadicky.webp",
        title: "Interconnectivity",
        rightNote: [
            "Hoses carrying the pumped additives lead to the reservoir",
            "Cables powering the peristaltic pumps lead from the control box"
        ]
    },
    {
        src: "https://static.igem.wiki/teams/5642/images/how/cultivator/watercycle/reservoir-inside.webp",
        title: "The internals of the reservoir",
        rightNote: [
            "The reservoir contains the harvesting pump, the mixing pump, and the EC and pH sensors"
        ]
    },
    {
        src: "https://static.igem.wiki/teams/5642/images/how/cultivator/watercycle/reservoir-harvesting-pump.webp",
        title: "Harvesting pump",
        rightNote: [
            "Encased in a custom 3D printed holder",
            "Surrounded by filter nets to ensure no duckweed gets inside",
            "12 V",
            "60 W maximum power",
            "18 litres of water per minute"
        ]
    },
    {
        src: "https://static.igem.wiki/teams/5642/images/how/cultivator/watercycle/reservoir-mixing-pump.webp",
        title: "Mixing pump",
        rightNote: [
            "Encased in a custom 3D printed holder",
            "Surrounded by filter nets to ensure no duckweed gets inside",
            "12 V",
            "36 W",
            "30 litres of water per minute"
        ]
    },
    {
        src: "https://static.igem.wiki/teams/5642/images/how/cultivator/watercycle/reservoir-sensors.webp",
        title: "Sensors",
        rightNote: [
            "A custom waterproof 3D printed box (on the right) houses the pH (blue) and EC (black) sensors",
            "The 3D printed box on the left contains the electronic connections and the additive carrying hoses"
        ]
    },
];

const iterationSlides: ImageSlide[] = [
    {
        src: "https://static.igem.wiki/teams/5642/images/how/cultivator/watercycle/station-1.webp",
        title: "Iteration #1",
        rightNote: [
            "The Snap Lock mechanism secured the bottle from the front and back",
            "We found out it wouldn’t be tight enough to handle the whole bottle, and it would also be hard to operate as the rotation axis was located behind the 'head'"
        ]
    },
    {
        src: "https://static.igem.wiki/teams/5642/images/how/cultivator/watercycle/station-2.webp",
        title: "Iteration #2",
        rightNote: [
            "We placed the rotation axis above rather than behind the head",
            "We used a design for small bottles for faster prototyping",
            "After several adjustments, this was the correct approach"
        ]
    },
    {
        src: "https://static.igem.wiki/teams/5642/images/how/cultivator/watercycle/station-3.webp",
        title: "Iteration #3",
        rightNote: [
            "We switched to sizes for regular additive bottles",
            "We had problems with the bottle securing, as the payload was too heavy for this type of design that used front and back “jaws” to secure the bottle",
            "We built the first tower for the bottle, which was too impractical to have in 2 parts"
        ]
    },
    {
        src: "https://static.igem.wiki/teams/5642/images/how/cultivator/watercycle/station-4.webp",
        title: "Iteration #4",
        rightNote: [
            "Snap Lock mechanism changed design to secure the bottle from the sides not from front and back, resulting in better carrying capacity",
            "However, the jaws were too small, so it often resulted in jaws with a bottle neck being stuck in the system",
            "We also switched to a different upper part in which the Snap Lock mechanism is installed"
        ]
    },
    {
        src: "https://static.igem.wiki/teams/5642/images/how/cultivator/watercycle/station-5.webp",
        title: "Iteration #5",
        rightNote: [
            "We used wider jaws with deeper 'teeth' that are permanently mounted in the head, making the system robust to handle heavy payloads and also easy to operate thanks to the working Snap Lock mechanism"
        ]
    },
];

export default function CultivatorSec3() {
    const [isOpenNutrientSlides, setIsOpenNutrientSlides] = useState(false);
    const [isOpenIterationSlides, setIsOpenIterationSlides] = useState(false);

    return (
        <div>
            <h2
                className="font-bold text-green-700 mb-4 text-center"
                style={{
                    fontFamily: "Space Grotesk, sans-serif",
                    fontSize: window.innerWidth < 768 ? "1.6rem" : "2rem",
                }}
            >
                Automatic Subculturing
            </h2>
            <div className="font-[Urbanist,sans-serif] text-lg leading-relaxed">
                <div className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto p-8">
                    {/* Left column */}
                    <div>

                        <div className="flex justify-center mb-6">
                            <img
                                src="https://static.igem.wiki/teams/5642/images/how/cultivator/watercycle/additive-hand.webp"
                                className="max-w-x rounded-lg object-contain"
                            />
                        </div>
                        <div className="flex justify-center mb-6">
                            <img
                                src="https://static.igem.wiki/teams/5642/images/how/cultivator/watercycle/davkovac-pivot.webp"
                                className="max-w-x rounded-lg object-contain"
                            />
                        </div>
                    </div>

                    {/* Right column */}
                    <div className="space-y-4">
                        <p className="text-justify">
                            After harvesting, the water is directed into a{" "}
                            <span className="font-bold text-[#6ca033]">central reservoir</span>. Inside,{" "}
                            <span className="font-bold">sensors continuously measure</span> both{" "}
                            <span className="font-bold text-[#6ca033]">electrical conductivity (EC)</span> and{" "}
                            <span className="font-bold text-[#6ca033]">pH levels</span> to monitor nutrient
                            concentration.
                        </p>

                        <p className="text-justify">
                            Based on these readings,{" "}
                            <span className="font-bold text-[#6ca033]">peristaltic pumps</span> accurately inject
                            nutrients
                            as needed. The system supports{" "}
                            up to <A href="/plant#duckweed-cultivation"
                                     className="hover:text-[#25512b] font-bold underline text-[#6ca033]">four
                            different liquid additives</A>, which can be
                            individually
                            mixed into the growth medium for precise control.
                        </p>

                        <p>
                            When the water’s <span
                            className="font-bold text-[#6ca033]">electrical conductivity</span> drifts
                            outside the defined range, the optimized{" "}
                            <span
                                className="hover:text-[#25512b] font-bold underline text-[#6ca033]">
                                <A href="/plant#duckweed-cultivation">
                                Duckweed Cultivation Medium – Nitrogen (DCMN){" "}
                                </A>
                            </span>
                            is automatically injected into the reservoir.
                            The medium is divided into <span
                            className="font-bold">three separate stock solutions</span> to
                            prevent the <span className="font-bold">precipitation of salts</span> and maintain nutrient
                            stability.
                        </p>

                        <p>
                            The final additive container holds a 15% solution of <span
                            className="font-bold text-[#6ca033]">nitric acid</span>,
                            which is precisely dosed whenever the{" "}
                            <span className="font-bold">pH level rises above the user-defined threshold</span>.
                            This gentle correction keeps the system in perfect balance for consistent duckweed growth.
                        </p>

                        <p className="text-justify">
                            To prevent clumping in the additives,{" "}
                            <span className="font-bold">small DC motors</span> periodically spin a magnetic stirrer
                            inside
                            each container — powered by{" "}
                            <span className="font-bold text-[#6ca033]">neodymium magnets</span> mounted beneath the
                            base.
                        </p>


                        <p className="text-justify">
                            A <span className="font-bold">mixing pump</span> then ensures a{" "}
                            <span className="font-bold text-[#6ca033]">uniform nutrient distribution</span> throughout
                            the
                            reservoir, maintaining an ideal growth solution and preventing crystallization of additives.
                        </p>

                        {/* Button */}
                        <div className="mt-6 flex justify-center md:justify-center">
                            <button
                                onClick={() => setIsOpenNutrientSlides(true)}
                                className="text-green-600 hover:text-green-800 font-semibold text-2xl underline"
                            >
                                See how our nutrient system works in detail.
                            </button>
                        </div>

                        <p className="text-justify">
                            Once balanced, the water is{" "}
                            <span className="font-bold text-[#6ca033]">recirculated back into the trays</span> for the
                            next
                            cultivation round. This{" "}
                            <span className="font-bold text-[#6ca033]">closed-loop design</span> minimizes waste,
                            conserves
                            resources, and ensures{" "}
                            <span className="font-bold">consistent optimal growth</span> — harvest after harvest.
                        </p>

                        {/* Button */}
                        <div className="mt-6 flex justify-center md:justify-center">
                            <button
                                onClick={() => setIsOpenIterationSlides(true)}
                                className="text-green-600 hover:text-green-800 font-semibold text-2xl underline"
                            >
                                See all 4 design iterations of the additive station
                            </button>
                        </div>

                    </div>
                </div>

            </div>
            {/* Fullscreen image viewer */}
            <ImageViewer
                slides={iterationSlides}
                isOpen={isOpenIterationSlides}
                onClose={() => setIsOpenIterationSlides(false)}
            />
            <ImageViewer
                slides={nutrientSlides}
                isOpen={isOpenNutrientSlides}
                onClose={() => setIsOpenNutrientSlides(false)}
            />
        </div>
    );
}
