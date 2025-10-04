import ImageViewer, {ImageSlide} from "../../../../components/ui/ImageViewer.tsx";
import {useState} from "react";

const guiSlides: ImageSlide[] = [
    {
        src: "",
        title: "TODO",
    },
];

const suitcaseSlides: ImageSlide[] = [
    {
        src: "https://static.igem.wiki/teams/5642/images/how/cultivator/tech/case-label.webp",
        title: "Electronics in the suitcase",
        rightNote: [
            "1: Voltage step-down modules, which provide 9V for the router and 5V for the RaspberryPi",
            "2: RaspberryPi in a custom 3D printed case with a built-in cooling fan",
            "3: WiFi router",
            "4: Circuit breakers and current protection system",
            "5: 230V AC to 12V DC rectifier, with 500W maximum output power",
            "6: Intake 12V fan",
            "7: Output 12V fan",
            "8: Input 230V AC connector",
            "9: Output 12V DC connector",
        ]
    },
    {
        src: "https://static.igem.wiki/teams/5642/images/how/cultivator/tech/case-air-flow.webp",
        title: "Air circulation",
        rightNote: [
            "Cool air flows in from the left",
            "Warm air is exhausted on the right"
        ]
    },
];

const schematicsSlides: ImageSlide[] = [
    {
        src: "https://static.igem.wiki/teams/5642/images/how/cultivator/tech/schematics/light-valve-pcb-schematic.webp",
        title:
            "Schematic of the electronic box which controls the lights, the electromagnetic valves, and the PROBEs.",
    },
    {
        src: "https://static.igem.wiki/teams/5642/images/how/cultivator/tech/schematics/pump-schematic.webp",
        title:
            "Schematic of the electronic box which controls the pumps and the medium sensors.",
    },
    {
        src: "https://static.igem.wiki/teams/5642/images/how/cultivator/tech/schematics/suitcase-schematic.webp",
        title: "Schematic of the insides of the suitcase.",
    },
    {
        src: "https://static.igem.wiki/teams/5642/images/how/cultivator/tech/schematics/probe-schematic.webp",
        title: "Schematic of a single PROBE module.",
    },
];

export default function CultivatorSec5() {
    const [isOpenGUISlides, setIsOpenGUISlides] = useState(false);
    const [isOpenSuitcaseSlides, setIsOpenSuitcaseSlides] = useState(false);
    const [isOpenSchematicsSlides, setIsOpenSchematicsSlides] = useState(false);

    return (
        <div className="font-[Urbanist,sans-serif] text-lg leading-relaxed text-gray-900 bg-white">
            {/* === System Architecture === */}
            <div className="max-w-6xl mx-auto p-8 space-y-8">
                <h2
                    className="font-bold text-green-700 mb-4 text-center"
                    style={{
                        fontFamily: "Space Grotesk, sans-serif",
                        fontSize: window.innerWidth < 768 ? "1.6rem" : "2rem",
                    }}
                >
                    Smart Control and Connectivity
                </h2>

                <p className="text-justify">
                    At the core of the system lies a{" "}
                    <span className="font-bold text-[#6ca033]">Raspberry Pi single-board computer</span>,
                    acting as both the central server and the control hub. It communicates wirelessly
                    via Wi-Fi and the{" "}
                    <span className="font-bold text-[#6ca033]">MQTT protocol</span> with multiple
                    <span className="font-bold"> ESP32 microcontrollers</span> distributed across the
                    cultivator.
                </p>

                <p className="text-justify">
                    MQTT (<span className="font-bold">Message Queuing Telemetry Transport</span>) is
                    designed for{" "}
                    <span className="font-bold text-[#6ca033]">
            reliable communication in IoT applications
          </span>
                    , even under unstable network conditions. It uses a{" "}
                    <span className="font-bold">publish–subscribe model</span> with a central broker,
                    ensuring stable, real-time data flow between all components [2].
                </p>

                {/* Diagram */}
                <div className="flex justify-center mb-6">
                    <img
                        src="https://static.igem.wiki/teams/5642/images/how/cultivator/tech/communication-schema.webp"
                        className="max-w-lg rounded-lg object-contain"
                    />
                </div>

                <p className="text-justify">
                    Each <span className="font-bold text-[#6ca033]">ESP32</span> handles specific
                    subsystems—such as LED grow lights, electromagnetic valves, or pumps—based on
                    commands sent by the Raspberry Pi. The result is a{" "}
                    <span className="font-bold text-[#6ca033]">modular and fault-tolerant architecture</span>{" "}
                    that simplifies maintenance and scalability.
                </p>

                <p className="text-justify">
                    Users interact with the system through a{" "}
                    <span className="font-bold text-[#6ca033]">
            web-based graphical interface (GUI)
          </span>
                    , hosted directly on the Raspberry Pi. The GUI offers a{" "}
                    <span className="font-bold">real-time dashboard</span> with live system data and
                    control options accessible from any device on the network.
                </p>

                <p className="text-justify">
                    All software, firmware, and design files are{" "}
                    <span className="font-bold text-[#6ca033]">fully open-source</span> and available on our
                    GitHub repositories [3, 4, 5], enabling others to reproduce or build upon our system.
                </p>

                <div className="mt-6 flex justify-center md:justify-center">
                    <button
                        onClick={() => setIsOpenGUISlides(true)}
                        className="text-green-600 hover:text-green-800 font-semibold text-2xl underline"
                    >
                        Check out the GUI
                    </button>
                </div>

            </div>


            {/* === Suitcase Section === */}
            <div className="max-w-6xl mx-auto p-8 space-y-16">
                <h2
                    className="font-bold text-green-700 mb-4 text-center"
                    style={{
                        fontFamily: "Space Grotesk, sans-serif",
                        fontSize: window.innerWidth < 768 ? "1.6rem" : "2rem",
                    }}
                >
                    Compact and Safe Power Hub
                </h2>

                <div className="grid md:grid-cols-2 gap-8 items-center">
                    {/* Suitcase image placeholder */}
                    <div className="flex justify-center mb-6">
                        <img
                            src="https://static.igem.wiki/teams/5642/images/how/cultivator/tech/case-far.webp"
                            className="max-w-lg rounded-lg object-contain"
                        />
                    </div>
                    <div className="space-y-4 items-center">
                        <p className="text-justify">
                            The main power and communication components are housed in a{" "}
                            <span className="font-bold text-[#6ca033]">portable suitcase module</span>. It
                            contains the <span className="font-bold">Raspberry Pi</span>, Wi-Fi router, and
                            regulated power supply, all connected through a single external power cable.
                        </p>
                        <p className="text-justify">
                            All data transmission between the suitcase and cultivator occurs{" "}
                            <span className="font-bold text-[#6ca033]">wirelessly</span>. For safety, the
                            suitcase integrates <span className="font-bold">circuit breakers</span> and{" "}
                            <span className="font-bold">current protection systems</span> that automatically
                            cut off power during electrical faults, ensuring{" "}
                            <span className="font-bold text-[#6ca033]">complete operational safety</span>.
                        </p>

                        <div className="flex justify-center mb-6">
                            <img
                                src="https://static.igem.wiki/teams/5642/images/how/cultivator/tech/case-open-1.webp"
                                className="max-w-lg rounded-lg object-contain"
                            />
                        </div>
                        <div className="mt-6 flex justify-center md:justify-center">
                            <button
                                onClick={() => setIsOpenSuitcaseSlides(true)}
                                className="text-green-600 hover:text-green-800 font-semibold text-2xl underline"
                            >
                                View the suitcase contents
                            </button>
                        </div>

                    </div>
                </div>


                {/* === Waterproof Electronics Boxes === */}
                <div className="space-y-2">

                    <h2
                        className="font-bold text-green-700 mb-4 text-center"
                        style={{
                            fontFamily: "Space Grotesk, sans-serif",
                            fontSize: window.innerWidth < 768 ? "1.6rem" : "2rem",
                        }}
                    >
                        Distributed Control Units
                    </h2>


                    <p className="text-justify">
                        Additional control electronics are housed directly on the cultivator in{" "}
                        <span className="font-bold text-[#6ca033]">two waterproof boxes</span>, each
                        containing an <span className="font-bold">ESP32 microcontroller</span>.
                    </p>


                    <div className="grid md:grid-cols-2 gap-8 items-start">
                        {/* Left column: placeholders */}

                        <div className="space-y-6">
                            <span className="font-semibold">The first box primarily includes:</span>
                            <ul className="list-disc list-inside ml-6 space-y-1 text-base">
                                <li>Five relays for switching grow lights on each layer</li>
                                <li>Five relays for actuating electromagnetic valves</li>
                                <li>Five connectors for PROBE sensor outputs</li>
                            </ul>


                        </div>

                        {/* Right column: text */}
                        <div className="space-y-4">
                            <span className="font-semibold">The second box contains:</span>
                            <ul className="list-disc list-inside ml-6 space-y-1 text-base">
                                <li>Electronics for measuring water conductivity</li>
                                <li>
                                    MOSFET transistors for controlling the{" "}
                                    <span className="font-bold text-[#6ca033]">peristaltic and circulation pumps</span>
                                </li>
                                <li>
                                    A PWM (Pulse Width Modulation) DC motor driver for the{" "}
                                    <span className="font-bold">harvesting pump</span>
                                </li>
                            </ul>


                        </div>
                    </div>


                    <div className="grid md:grid-cols-2 gap-8 items-start">
                        <div className="flex justify-center mb-6">
                            <img
                                src="https://static.igem.wiki/teams/5642/images/how/cultivator/tech/box-1.webp"
                                className="max-w-lg rounded-lg object-contain"
                            />
                        </div>
                        <div className="flex justify-center mb-6">

                            <img
                                src="https://static.igem.wiki/teams/5642/images/how/cultivator/tech/box-2.webp"
                                className="max-w-lg rounded-lg object-contain"
                            />
                        </div>
                    </div>

                    <div className="mt-6 flex justify-center md:justify-center">
                        <button
                            onClick={() => setIsOpenSchematicsSlides(true)}
                            className="text-green-600 hover:text-green-800 font-semibold text-2xl underline"
                        >
                            View the detailed schematics
                        </button>
                    </div>

                </div>
            </div>
            <ImageViewer
                slides={guiSlides}
                isOpen={isOpenGUISlides}
                onClose={() => setIsOpenGUISlides(false)}
            />
            <ImageViewer
                slides={schematicsSlides}
                isOpen={isOpenSchematicsSlides}
                onClose={() => setIsOpenSchematicsSlides(false)}
            />
            <ImageViewer
                slides={suitcaseSlides}
                isOpen={isOpenSuitcaseSlides}
                onClose={() => setIsOpenSuitcaseSlides(false)}
            />
        </div>
    );
}
