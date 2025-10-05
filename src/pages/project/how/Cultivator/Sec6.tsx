export default function CultivatorSec5() {
    return (
        <div
            className="max-w-6xl mx-auto p-8 bg-white text-gray-900 font-[Urbanist,sans-serif] text-lg leading-relaxed space-y-8"
            id="user-testing"
        >

            {/* Section heading */}
            <h2
                className="font-bold text-green-700 text-center mb-6"
                style={{
                    fontFamily: "Space Grotesk, sans-serif",
                    fontSize: window.innerWidth < 768 ? "1.6rem" : "2rem",
                }}
            >
                Testing the Cultivator with Researchers
            </h2>

            {/* Intro paragraph */}
            <p className="text-justify font-[Urbanist,sans-serif] text-lg leading-relaxed">
                To evaluate the usability and reliability of our{" "}
                <span className="font-bold text-[#6ca033]">autonomous duckweed cultivator</span>,
                we invited several plant scientists working also with duckweed to test the system in person.
                Among them were{" "}
                <span className="font-bold">prof. Miloš Barták</span> of{" "}
                <span className="font-bold">Masaryk University in Brno</span>, and{" "}
                <span className="font-bold">Kateřina Patloková</span> with{" "}
                <span className="font-bold">Vojtěch Ferby</span> of{" "}
                <span className="font-bold">Mendel University in Brno</span>.
                Their visit allowed us to gather hands-on feedback from the people who would most directly
                benefit from this technology.
            </p>

            <p className="text-justify font-[Urbanist,sans-serif] text-lg leading-relaxed mt-4">
                Furthermore, we discussed the design of our cultivator with{" "}
                <span className="font-bold">prof. Jansen</span>, a world-renowned
                duckweed scientist, whose insights helped us align our system with current trends in
                plant physiology and automation.
                You can read more about these discussions and other expert consultations{" "}
                <a
                    href="/engagement/human-practices#hw-and-cultivation"
                    className="text-[#6ca033] font-semibold hover:underline transition-colors underline"
                >
                    on our Human Practices page
                </a>
                .
            </p>


            {/* Positive feedback */}
            <div className="grid md:grid-cols-2 gap-8 items-center px-2 sm:px-8 md:px-0">
                {/* Left: image */}
                <div className="flex justify-center mb-6 md:mb-0">
                    <img
                        src="https://static.igem.wiki/teams/5642/images/how/cultivator/testing/ut-1-cropped.webp"
                        alt="Researchers testing the cultivator"
                        className="w-full max-w-[600px] rounded-lg object-contain"
                    />
                </div>

                {/* Right: text */}
                <div className="space-y-4 font-[Urbanist,sans-serif] text-lg leading-relaxed md:pr-4">
                    <p className="text-justify">
                        The researchers commended several aspects of the system. They especially praised our{" "}
                        <span className="font-bold text-[#6ca033]">web application</span> for being{" "}
                        <span className="font-bold">intuitive and user-friendly</span>,
                        making it simple to control every function of the cultivator remotely.
                    </p>

                    <p className="text-justify">
                        They appreciated the system’s{" "}
                        <span className="font-bold text-[#6ca033]">modular design</span>,
                        which allows easy scaling, maintenance, and upgrades without requiring specialized tools.
                    </p>

                    <p className="text-justify">
                        Automatic harvesting proved to be{" "}
                        <span className="font-bold text-[#6ca033]">extremely valuable</span>,
                        significantly reducing the hands-on time required for culture management.
                    </p>

                    <p className="text-justify">
                        Even more impressive for them was the{" "}
                        <span className="font-bold text-[#6ca033]">automatic subculturing feature</span>,
                        which they described as one of the biggest advantages for daily lab operation.
                        The integrated{" "}
                        <span className="font-bold text-[#6ca033]">PROBE biomass monitoring system</span>{" "}
                        was recognized as both essential and innovative for accurate growth tracking.
                    </p>
                </div>
            </div>


            <p className="text-justify">
                Another important highlight was the{" "}
                <span className="font-bold text-[#6ca033]">closed water circulation system</span>.
                Thanks to its circular design, researchers noted that it eliminates the risk of water leakage
                even during an unexpected power outage — a major safety advantage for continuous experiments.
            </p>


            {/* Implemented Improvements Section */}
            <div className="grid md:grid-cols-2 gap-8 items-center my-12 px-3 sm:px-6 md:px-0">
                {/* Left column: bulletpoints */}
                <div className="space-y-5 font-[Urbanist,sans-serif] text-lg leading-relaxed w-full md:w-[95%] mx-auto">
                    <h3
                        className="font-bold text-green-700 mb-4 text-center md:text-left"
                        style={{
                            fontFamily: "Space Grotesk, sans-serif",
                            fontSize: window.innerWidth < 768 ? "1.6rem" : "1.8rem",
                        }}
                    >
                        Implemented Improvements
                    </h3>

                    <p className="text-justify">
                        The user testing session provided valuable insights, several of which we’ve already
                        integrated into the final design:
                    </p>

                    <ul className="list-disc list-inside space-y-3">
                        <li>
                            Added the ability to{" "}
                            <span className="font-bold text-[#6ca033]">harvest individual layers</span> directly
                            through the web interface.
                        </li>
                        <li>
                            Integrated{" "}
                            <span className="font-bold text-[#6ca033]">pH monitoring</span> and automated
                            injection of{" "}
                            <span className="font-bold">15% nitric acid</span> to keep the pH within the ideal
                            range of <span className="font-bold">5–6</span>, effectively reducing algae growth.
                        </li>
                        <li>
                            Replaced all transparent pipes with{" "}
                            <span className="font-bold text-[#6ca033]">opaque tubing</span> to block light and
                            prevent biofilm formation.
                        </li>
                    </ul>
                </div>

                {/* Right column: image */}
                <div className="flex justify-center md:justify-end mb-6 md:mb-0">
                    <img
                        src="https://static.igem.wiki/teams/5642/images/how/cultivator/testing/ut-5-cropped.webp"
                        alt="Implemented improvements being tested"
                        className="w-full max-w-[650px] rounded-lg object-contain"
                    />
                </div>
            </div>


            <div className="space-y-2">
                <p className="text-justify">
                    The experts also proposed several directions for{" "}
                    <span className="font-bold text-[#6ca033]">future development</span>.
                    These included minimizing edges and corners for easier cleaning,
                    incorporating a{" "}
                    <span className="font-bold">double-bottom tray design</span> to protect the PROBE sensors from
                    algae,
                    and enabling an{" "}
                    <span className="font-bold">automatic water replacement cycle every two months</span> to maintain
                    optimal quality.
                    They also suggested that the{" "}
                    <span className="font-bold">harvesting apparatus</span> could be placed{" "}
                    <span className="font-bold text-[#6ca033]">below the water surface</span>{" "}
                    to minimize stress on the duckweed during collection.
                </p>

                <p className="text-justify">
                    Finally, to improve hygiene and reduce humidity buildup, the researchers recommended
                    adding a small{" "}
                    <span className="font-bold text-[#6ca033]">ventilation fan</span> to each layer — an enhancement
                    we plan to integrate in future iterations.
                </p>

            </div>
            <div className="flex justify-center mb-6 px-2 sm:px-4 md:px-0">
                <img
                    src="https://static.igem.wiki/teams/5642/images/how/cultivator/testing/ut-2.webp"
                    alt="Researchers examining the cultivator"
                    className="w-full max-w-[900px] rounded-lg object-contain"
                />
            </div>


            {/* Closing paragraph */}
            <p className="text-justify">
                Overall, the user testing confirmed that the{" "}
                <span className="font-bold text-[#6ca033]">Living Layers cultivator</span> is
                both practical and ready for research environments.
                The feedback we received directly shaped several of our final design decisions,
                helping us build a system that truly meets the needs of plant scientists —
                bridging automation, precision, and sustainability in one platform.
            </p>
        </div>
    );
}
