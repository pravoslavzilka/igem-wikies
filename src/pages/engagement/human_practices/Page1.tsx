import React, {useState} from "react";
import {ChevronDown, ChevronUp} from "lucide-react"; // npm install lucide-react

export default function HumanPracticesPage1() {
    const [expanded, setExpanded] = useState(false);
    const [hovered, setHovered] = useState<string | null>(null);

    return (
        <div className="max-w-6xl mx-auto bg-white text-gray-900 leading-relaxed p-8">
            {/* Big Header */}
            <div className="text-center mb-10">
                <h1
                    className="font-bold mb-6 text-x4l"
                    style={{
                        fontFamily: "Space Grotesk, sans-serif",
                        fontSize: window.innerWidth < 768 ? "1.6rem" : "2rem",
                    }}
                >
                    Integrated human practices
                </h1>

                {/* Big leaf image placeholder */}
                <div className="mx-auto mb-6 h-40 w-40 bg-green-200 rounded-full flex items-center justify-center">
                    <span className="text-green-700 text-4xl">🌿</span>
                </div>

                {/* Subhead staggered */}
                <div className="space-y-2 mb-8">
                    <p className="text-lg">We talked and listened to</p>
                    <p
                        className="font-bold"
                        style={{
                            fontFamily: "Space Grotesk, sans-serif",
                            fontSize: window.innerWidth < 768 ? "1.6rem" : "2rem",
                        }}
                    >
                        XYZ stakeholders
                    </p>
                    <p className="text-lg font-[Urbanist,sans-serif]">
                        to make something world actually needs
                    </p>
                </div>

                <p className="text-lg max-w-3xl mx-auto font-[Urbanist,sans-serif] mt-4">
                    Take a look how we <span className="font-bold">integrated</span> all
                    these conversations across our project to ensure we are building the
                    best engineering solution that is{" "}
                    <span className="font-bold">user-friendly, responsible,</span> and{" "}
                    <span className="font-bold">applicable in the real world.</span>
                </p>

            </div>

            {/* Hover circles */}
            <div className="grid grid-cols-3 gap-6 text-center mb-24 relative">
                {["IDEATION", "HACKING", "REAL WORLD CHECK"].map((title) => (
                    <div
                        key={title}
                        className="flex flex-col items-center relative cursor-pointer"
                        onMouseEnter={() => setHovered(title)}
                        onMouseLeave={() => setHovered(null)}
                    >
                        <p
                            className="font-bold mb-2 transition-colors"
                            style={{
                                fontFamily: "Space Grotesk, sans-serif",
                                fontSize: window.innerWidth < 768 ? "1.2rem" : "1.6rem",
                            }}
                        >
                            <span
                                className={`${
                                    hovered === title ? "text-green-700" : "text-black"
                                }`}
                            >
                                {title}
                            </span>
                        </p>

                        <div
                            className={`absolute top-12 transition-all duration-300 ease-out transform ${
                                hovered === title
                                    ? "opacity-100 scale-100"
                                    : "opacity-0 scale-75 pointer-events-none"
                            }`}
                        >
                            <div
                                className="h-40 w-40 rounded-full bg-gray-100 border border-gray-400 flex items-center justify-center p-4 text-sm shadow-md">
                                {title === "IDEATION" &&
                                    "Our journey from nitroduckweed, through biomass-boosted duckweed, to programmable duckweed."}
                                {title === "HACKING" &&
                                    "What did we actually have to understand to make duckweed programmable?"}
                                {title === "REAL WORLD CHECK" &&
                                    "Where does our project stand when facing the stakeholders that are affected the most?"}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Ideation Section */}
            <div className="bg-white rounded-lg shadow-sm mb-16">
                {/* Green pill header */}
                <div className="bg-green-300 text-gray-900 font-bold px-6 py-2 rounded-t-xl w-fit mb-6"
                     style={{fontFamily: "Space Grotesk, sans-serif", fontSize: "1.4rem"}}>
                    Ideation
                </div>

                {/* Section title */}
                <h2 className="font-bold mb-4"
                    style={{
                        fontFamily: "Space Grotesk, sans-serif",
                        fontSize: window.innerWidth < 768 ? "1.6rem" : "2rem",
                    }}>
                    Starting at the end: NitroDuck
                </h2>

                {/* Paragraphs */}
                <div className="space-y-4 font-[Urbanist,sans-serif] text-lg leading-relaxed mb-8">
                    <p>
                        Our project begun somewhat peculiarly. At first, we wanted to build a startup and even
                        took part in <span className="font-bold">iGEM Startups</span> program last year (you can
                        read more about it in our{" "}
                        <a href="http://localhost:4176/engagement/entrepreneurship"
                           className="text-green-700 underline hover:text-green-900">
                            entrepreneurship
                        </a>{" "}
                        section), contrary to most of the projects that start this program only after finishing
                        the iGEM Competition. But that’s because we approached iGEM from the
                        <span className="font-bold"> ‘problem first’</span> perspective.
                    </p>
                    <p>
                        This is how we first learnt about the{" "}
                        <span className="font-bold">unsustainable production of protein for animal feed</span>.
                        Here we came up with the idea of using duckweed grown in vertical cultivation systems,
                        where liquid part of manure would be pumped. Duckweed, genetically engineered for higher
                        ammonium tolerance, would take up the ammonium, prevent it from being evaporated and
                        utilize it into protein. This duckweed was meant to be fed back to cows that produced the
                        manure. Closing the nitrogen loop right on the farm! Sounds amazing right?
                    </p>
                </div>

                {/* Image */}
                <div className="mb-6">
                    <img
                        src="https://static.igem.wiki/teams/5642/images/engagement/humanpractices/face.webp"
                        alt="NitroDuck farm visualization"
                        className="rounded-2xl shadow-md mx-auto"
                    />
                </div>

                {/* Closing sentence */}
                <p className="text-lg font-[Urbanist,sans-serif]">
                    Well, people liked it and so did we. To get deeper into why the nitrogen handling in
                    agriculture is so inefficient, we went out to talk with the ones that are closest to the
                    problem – farmers.
                </p>
            </div>


            {/* Farmer pill */}
            <div
                onClick={() => setExpanded((prev) => !prev)}
                className="flex items-center cursor-pointer border border-gray-400 rounded-full shadow-md overflow-hidden max-w-3xl mx-auto"
            >
                {/* Left: larger circular image */}
                <div className="h-32 w-32 flex-shrink-0 m-3">
                    <img
                        src="https://static.igem.wiki/teams/5642/images/engagement/humanpractices/face.webp"
                        alt="Farmer Jakub Neužil"
                        className="h-full w-full object-cover rounded-full"
                    />
                </div>

                {/* Middle: name + info */}
                <div className="flex-1 px-6 py-6">
                    <p
                        className="font-semibold"
                        style={{fontFamily: "Space Grotesk, sans-serif"}}
                    >
                        Ing. Jakub Neužil
                    </p>
                    <p className="text-sm">South Moravian cattle farmer</p>
                    <p className="text-sm">from Nesovice</p>
                </div>

                {/* Right: arrow */}
                <div className="pr-8">
                    {expanded ? (
                        <ChevronUp className="w-6 h-6 text-gray-700"/>
                    ) : (
                        <ChevronDown className="w-6 h-6 text-gray-700"/>
                    )}
                </div>
            </div>


            {/* Expandable text with smooth animation */}
            <div
                className={`transition-all duration-700 ease-in-out overflow-hidden ${
                    expanded ? "max-h-[2000px] opacity-100 mt-6" : "max-h-0 opacity-0 mt-0"
                }`}
            >
                <div
                    className="rounded-3xl border border-gray-300 shadow-md p-6 md:p-10 font-[Urbanist,sans-serif] bg-white">
                    <div className="grid md:grid-cols-2 gap-8 leading-relaxed text-lg">
                        {/* Left column */}
                        <div className="space-y-4">
                            <p>
                                We met with <span className="font-bold">Jakub Neužil</span>, owner of
                                the cattle farm in Nesovice, with around 500 cows. We told him about
                                the problem of{" "}
                                <span className="font-bold">inefficient nitrogen handling</span> in
                                agriculture and asked whether it's really real. He surely confirmed
                                and elaborated on the{" "}
                                <span className="font-bold">problems he has with manure handling</span>{" "}
                                – he needs to treat the wastewater produced in his cow barn in a
                                purifying station which is{" "}
                                <span className="font-bold">costly to build.</span>
                            </p>

                            {/* Farmer image */}
                            <img
                                src="https://static.igem.wiki/teams/5642/images/engagement/humanpractices/face.webp"
                                alt="Meeting with farmer Jakub Neužil"
                                className="rounded-2xl shadow-md mt-4"
                            />
                        </div>

                        {/* Right column */}
                        <div className="space-y-4">
                            <p>
                                After presenting him the solution we ideated he was thrilled. He
                                confirmed that the feed for his cows is{" "}
                                <span className="font-bold">one of the main cost drivers</span> of the
                                entire farm operation. He is aware that soybean is not ideal in terms
                                of its environmental impact but at the same time, it is{" "}
                                <span className="font-bold">
            the best available source of protein on the market.
          </span>{" "}
                                When we talked about duckweed's amazing traits, he said he is{" "}
                                <span className="font-bold">ready to try out our system</span> as soon
                                as it's finished. But he stressed the fact, that it has to be{" "}
                                <span className="font-bold">profitable and cost-competitive</span> with
                                current options, as that is what matters to him the most.
                            </p>

                            <p>
                                We were also positively surprised by the fact that he is{" "}
                                <span className="font-bold">open to genetically modified crops</span>{" "}
                                and hopes that the European legislation will soon shift towards
                                approving their use.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
