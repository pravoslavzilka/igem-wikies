import ImageViewer, {ImageSlide} from "../../../../components/ui/ImageViewer.tsx";
import {useState} from "react";

const lightSlides: ImageSlide[] = [
    {
        src: "https://static.igem.wiki/teams/5642/images/how/cultivator/lights/light-1.webp",
        title: "LED strip 1",
        rightNote: [
            "12 W",
            "Red and blue spectrum",
            "Intensity at water surface ~ 100 μmol/m²/s",
            "230 lm/m",
            "60 LEDs/m",
        ],
    },
    {
        src: "https://static.igem.wiki/teams/5642/images/how/cultivator/lights/light-2.webp",
        title: "LED strip 2",
        rightNote: [
            "12 W",
            "White 4500K",
            "Intensity at water surface ~ 100 μmol/m²/s",
            "1050 lm/m",
            "60 LEDs/m",
        ],
    },
    {
        src: "https://static.igem.wiki/teams/5642/images/how/cultivator/lights/light-3.webp",
        title: "LED strip 3",
        rightNote: [
            "20 W",
            "White 6000K",
            "Intensity at water surface ~ 160 μmol/m²/s",
            "2100 lm/m",
            "120 LEDs/m",
        ],
    },
    {
        src: "https://static.igem.wiki/teams/5642/images/how/cultivator/lights/light-6.webp",
        title: "LED strip 4",
        rightNote: [
            "24 W",
            "White 2800K",
            "Intensity at water surface ~ 170 μmol/m²/s",
            "1920 lm/m",
            "300 LEDs/m",
        ],
    },
    {
        src: "https://static.igem.wiki/teams/5642/images/how/cultivator/lights/light-5.webp",
        title: "LED strip 5",
        rightNote: [
            "24 W",
            "White 4000K",
            "Intensity at water surface ~ 175 μmol/m²/s",
            "1920 lm/m",
            "300 LEDs/m",
        ],
    },
    {
        src: "https://static.igem.wiki/teams/5642/images/how/cultivator/lights/light-4.webp",
        title: "LED strip 6",
        rightNote: [
            "24 W",
            "White 6500K",
            "Intensity at water surface ~ 180 μmol/m²/s",
            "1920 lm/m",
            "300 LEDs/m",
        ],
    },
];

const probeSlides: ImageSlide[] = [
    {
        src: "https://static.igem.wiki/teams/5642/images/how/cultivator/probe/probe-1.webp",
        title: "PROBE iteration #1",
        rightNote: [
            "Small scale trial",
            "10 x 40 cm",
            "The light dependent resistors are placed in custom 3D printed casings.",
            "This design requires glue to hold together and is less robust due to short plastic tubes and small overlap within the 3D printed pieces.",
            "All 3D printed pieces are 2cm long.",
        ],
    },
    {
        src: "https://static.igem.wiki/teams/5642/images/how/cultivator/probe/probe-2.webp",
        title: "PROBE iteration #2",
        rightNote: [
            "First full-size PROBE",
            "The LDR casings alternate with connective pieces with 12 cm gaps.",
            "40 x 90 cm",
            "3.5 mm jack connector"
        ]
    },
    {
        src: "https://static.igem.wiki/teams/5642/images/how/cultivator/probe/probe-3.webp",
        title: "PROBE iteration #3",
        rightNote: [
            "The Light Dependent Resistors are mounted directly into the plastic tubes",
            "22 cm tubes",
            "50% fewer 3D printed parts",
            "Connective pieces are 3 cm long",
            "Much more robust design",
            "40 x 90 cm",
            "3.5 mm jack connector"
        ]
    },
    {
        src: "https://static.igem.wiki/teams/5642/images/how/cultivator/probe/probe-4.webp",
        title: "PROBE iteration #4",
        rightNote: [
            "Same tube lengths as iteration #3",
            "Connective pieces are 4 cm long",
            "The extra overlap eliminates the need to use glue, resulting in much faster manufacturing",
            "40 x 90 cm",
            "3.5 mm jack connector"
        ]
    }
];

export default function CultivatorSec4() {
    const [isOpenLightSlides, setIsOpenLightSlides] = useState(false);
    const [isOpenPROBESlides, setIsOpenPROBESlides] = useState(false);

    return (
        <div className="font-[Urbanist,sans-serif] text-lg leading-relaxed text-gray-900 bg-white">
            {/* === Lighting Section === */}
            <h2
                className="font-bold text-green-700 mb-4 text-center"
                style={{
                    fontFamily: "Space Grotesk, sans-serif",
                    fontSize: window.innerWidth < 768 ? "1.6rem" : "2rem",
                }}
            >
                Lighting
            </h2>

            <div className="max-w-6xl mx-auto p-8 space-y-16">
                {/* Lighting grid */}
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    {/* Text */}
                    <div className="space-y-4">
                        <p className="text-justify">
                            Each cultivation layer is equipped with dedicated{" "}
                            <span className="font-bold text-[#6ca033]">LED lighting</span>, positioned just{" "}
                            <span className="font-bold">11 cm</span> above the water surface to provide high
                            illumination with minimal energy use.
                        </p>
                        <p className="text-justify">
                            This setup achieves{" "}
                            <span className="font-bold text-[#6ca033]">
                photosynthetically active radiation (PAR) levels up to 180 μmol/m²/s
              </span>{" "}
                            at the water surface, while maintaining{" "}
                            <span className="font-bold">power consumption between 36 W and 72 W per layer</span>.
                        </p>
                        <p className="text-justify">
                            The result is efficient, uniform lighting that supports strong duckweed growth
                            without unnecessary energy waste.
                        </p>

                        <div className="mt-6 flex justify-center md:justify-center">
                            <button
                                onClick={() => setIsOpenLightSlides(true)}
                                className="text-green-600 hover:text-green-800 font-semibold text-lg underline"
                            >
                                See which lights we experimented with.
                            </button>
                        </div>
                    </div>

                    {/* Image placeholder */}
                    <div className="flex justify-center mb-6">
                        <img
                            src="https://static.igem.wiki/teams/5642/images/how/cultivator/lights/layer-light.webp"
                            className="max-w-x rounded-lg object-contain"
                        />
                    </div>


                </div>

                {/* === Biomass Monitoring Section === */}
                <h2
                    className="font-bold text-green-700 mb-4 text-center"
                    style={{
                        fontFamily: "Space Grotesk, sans-serif",
                        fontSize: window.innerWidth < 768 ? "1.6rem" : "2rem",
                    }}
                >
                    Monitoring the Biomass
                </h2>

                <div className="grid md:grid-cols-2 gap-8 items-center">
                    {/* Image placeholder */}
                    <div className="flex justify-center">
                        <div
                            className="bg-gray-200 border-2 border-dashed border-gray-400 h-64 w-full flex items-center justify-center rounded-lg">
                            <div className="text-center text-gray-600">
                                <div className="text-sm mb-2">📸 IMAGE PLACEHOLDER</div>
                                <div className="text-xs italic">(Duckweed + light flux diagram)</div>
                            </div>
                        </div>
                    </div>

                    {/* Text */}
                    <div className="space-y-4">
                        <p className="text-justify">
                            To maintain <span className="font-bold">optimal growth conditions</span>, it’s
                            crucial to monitor the duckweed biomass on each layer. Since the plant grows most
                            efficiently when the surface is fully covered, we developed a custom sensor system
                            to track its density.
                        </p>
                        <p className="text-justify">
                            This system, called{" "}
                            <span className="font-bold text-[#6ca033]">PROBE — the PhotoResistor Occlusion-based Biomass Estimator</span>,
                            measures the <span className="font-bold">thickness of the duckweed layer</span> by
                            monitoring how much light is absorbed at the water surface.
                        </p>

                        <div className="mt-6 flex justify-center md:justify-center">
                            <button
                                onClick={() => setIsOpenPROBESlides(true)}
                                className="text-green-600 hover:text-green-800 font-semibold text-lg underline"
                            >
                                See the design iterations we went through.
                            </button>
                        </div>
                    </div>


                </div>

                {/* === Probe System Details === */}
                <div className="space-y-4">
                    <p className="text-justify">
                        The <span className="font-bold text-[#6ca033]">PROBE system</span> uses a grid of
                        chained, <span className="font-bold">light-sensitive photoresistors</span> submerged
                        beneath the water surface. These components change their resistance depending on
                        incident light [1], allowing the system to quantify how much light is blocked by the
                        duckweed above.
                    </p>
                    <p className="text-justify">
                        By measuring the voltage drop across the sensor grid and processing the data using{" "}
                        <span className="font-bold text-[#6ca033]">linear regression</span>, we obtain an{" "}
                        <span className="font-bold">accurate, real-time estimate</span> of the biomass
                        present on each layer.
                    </p>
                    <p className="text-justify">
                        The sensors are enclosed in a{" "}
                        <span className="font-bold">waterproof plastic casing</span> for easy installation and
                        maintenance. Each module connects to the system via a simple{" "}
                        <span className="font-bold text-[#6ca033]">3.5 mm jack cable</span>, making it both
                        modular and reliable.
                    </p>

                    <div className="flex justify-center mb-6">
                        <img
                            src="https://static.igem.wiki/teams/5642/images/how/cultivator/probe/full-probe-landscape.webp"
                            alt="PROBE sensor system"
                            className="max-w-x rounded-lg object-contain"
                        />
                    </div>
                </div>
            </div>
            {/* Light viewer */}
            <ImageViewer
                slides={lightSlides}
                isOpen={isOpenLightSlides}
                onClose={() => setIsOpenLightSlides(false)}
            />
            {/* PROBE viewer */}
            <ImageViewer
                slides={probeSlides}
                isOpen={isOpenPROBESlides}
                onClose={() => setIsOpenPROBESlides(false)}
            />
        </div>
    );
}
