import React from "react";
import ExpandablePill from "./ExpandablePill";
import ExpandablePillNoImage from "./ExpandablePillNoImage.tsx";

export default function HumanPracticesPage1() {
    const circles = [
        {
            id: "ideation",
            title: "IDEATION",
            subtitle: "Our journey from nitroduckweed, through biomass-boosted duckweed, to programmable duckweed.",
            imgSrc: "https://static.igem.wiki/teams/5642/images/toolbox/toolbox/ideation.webp",
        },
        {
            id: "hacking",
            title: "HACKING",
            subtitle: "What did we actually have to understand to make duckweed programmable?\n",
            imgSrc: "https://static.igem.wiki/teams/5642/images/toolbox/toolbox/hacking.webp",
        },
        {
            id: "real-world-check",
            title: "REAL WORLD CHECK",
            subtitle: "Where does our project stand when facing the stakeholders that are affected the most?\n",
            imgSrc: "https://static.igem.wiki/teams/5642/images/toolbox/toolbox/rwc.webp",
        },
    ];

    const handleScroll = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({behavior: "smooth"});
        }
    };
    return (
        <div className="max-w-6xl mx-auto bg-white text-gray-900 leading-relaxed p-8">
            {/* Big Header */}
            <div className="text-center mb-10">
                <h1
                    className="font-bold mb-6"
                    style={{
                        fontFamily: "Space Grotesk, sans-serif",
                        fontSize: window.innerWidth < 768 ? "1.6rem" : "2rem",
                    }}
                >
                    Integrated human practices
                </h1>

                <div className="mb-6 px-6">
                    <img
                        src="https://static.igem.wiki/teams/5642/images/engagement/humanpractices/2/stakeholders-copy.webp"
                        alt="Human Practices"
                        className="rounded-2xl  mx-auto"
                    />
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
                        142 stakeholders
                    </p>
                    <p className="text-lg font-[Urbanist,sans-serif]">
                        to make something the world actually needs
                    </p>
                </div>

                <p className="text-lg max-w-3xl mx-auto font-[Urbanist,sans-serif] mt-4">
                    Take a look how we <span className="font-bold">integrated</span> all these
                    conversations across our project to ensure we are building the best
                    engineering solution that is{" "}
                    <span className="font-bold">user-friendly, responsible,</span> and{" "}
                    <span className="font-bold">applicable in the real world.</span>
                </p>
            </div>

            <div className="w-full flex flex-col md:flex-row justify-center items-start gap-10 text-center mt-12 mb-20">
                {circles.map((circle) => (
                    <div
                        key={circle.id}
                        className="cursor-pointer max-w-xs mx-auto"
                        onClick={() => handleScroll(circle.id)}
                    >
                        <img
                            src={circle.imgSrc}
                            alt={circle.title}
                            className="w-48 h-48 mx-auto rounded-full object-cover transition-transform duration-300 hover:scale-105"
                        />
                        <div className="mt-4">
                            <p className="text-gray-900 font-bold text-lg">{circle.subtitle}</p>
                        </div>
                    </div>
                ))}
            </div>


            {/* Ideation Section */}
            <div className="bg-white rounded-lg mb-16 max-w-6xl mx-auto">
                {/* Green pill header - fixed width */}
                <div
                    id="ideation"
                    className="bg-green-[#6ca033] text-gray-900 font-bold px-6 py-4 rounded-t-xl"
                    style={{fontFamily: "Space Grotesk, sans-serif", fontSize: "2rem",backgroundColor: '#6ca033'}}
                >
                    Ideation
                </div>

                {/* Section title */}
                <h2
                    className="font-bold mb-4 px-6"
                    style={{
                        fontFamily: "Space Grotesk, sans-serif",
                        fontSize: window.innerWidth < 768 ? "1.6rem" : "2rem",
                    }}
                >
                    Starting at the end: NitroDuck
                </h2>

                {/* Paragraphs */}
                <div className="space-y-4 font-[Urbanist,sans-serif] text-lg leading-relaxed mb-8 px-6">
                    <p>
                        Our project begun somewhat peculiarly. At first, we wanted to build a
                        startup and even took part in{" "}
                        <span className="font-bold">iGEM Startups</span> program last year (you
                        can read more about it in our{" "}
                        <a
                            href="/engagement/entrepreneurship"
                            className="text-[#538b5e] underline hover:text-[#25512b]"
                        >
                            entrepreneurship
                        </a>{" "}
                        section), contrary to most of the projects that start this program only
                        after finishing the iGEM Competition. But that’s because we approached
                        iGEM from the<span className="font-bold"> ‘problem first’</span>{" "}
                        perspective.
                    </p>
                    <p>
                        This is how we first learnt about the{" "}
                        <span className="font-bold">
              unsustainable production of protein for animal feed
            </span>
                        . Here we came up with the idea of using duckweed grown in vertical
                        cultivation systems, where liquid part of manure would be pumped.
                        Duckweed, genetically engineered for higher ammonium tolerance, would
                        take up the ammonium, prevent it from being evaporated and utilize it
                        into protein. This duckweed was meant to be fed back to cows that
                        produced the manure. Closing the nitrogen loop right on the farm!
                        Sounds amazing right?
                    </p>
                </div>

                {/* Image */}
                <div className="mb-6 px-6">
                    <img
                        src="https://static.igem.wiki/teams/5642/images/engagement/humanpractices/1-1.webp"
                        alt="NitroDuck farm visualization"
                        className="rounded-2xl  mx-auto"
                    />
                </div>

                {/* Closing sentence */}
                <p className="text-lg font-[Urbanist,sans-serif] px-6 pb-6">
                    Well, people liked it and so did we. To get deeper into why the nitrogen
                    handling in agriculture is so inefficient, we went out to talk with the
                    ones that are closest to the problem – farmers.
                </p>
            </div>

            <ExpandablePillNoImage
                name="Ing. Jakub Neužil"
                subtitle="South Moravian cattle farmer"
                location="from Nesovice"
                defaultOpen={true}
            >
                <div className="grid md:grid-cols-2 gap-8 leading-relaxed text-lg">
                    {/* Left column */}
                    <div className="space-y-4">
                        <p>
                            We met with <span className="font-bold">Jakub Neužil</span>, owner
                            of the cattle farm in Nesovice, with around 500 cows. We told him
                            about the problem of{" "}
                            <span className="font-bold">inefficient nitrogen handling</span> in
                            agriculture and asked whether it's really real. He surely confirmed
                            and elaborated on the{" "}
                            <span className="font-bold">problems he has with manure handling</span>{" "}
                            – he needs to treat the wastewater produced in his cow barn in a
                            purifying station which is{" "}
                            <span className="font-bold">costly to build.</span>
                        </p>

                        <img
                            src="https://static.igem.wiki/teams/5642/images/engagement/humanpractices/1-2.webp"
                            alt="Meeting with farmer Jakub Neužil"
                            className="rounded-2xl  mt-4"
                        />
                    </div>

                    {/* Right column */}
                    <div className="space-y-4">
                        <p>
                            After presenting him the solution we ideated he was thrilled. He
                            confirmed that the feed for his cows is{" "}
                            <span className="font-bold">one of the main cost drivers</span> of
                            the entire farm operation. He is aware that soybean is not ideal in
                            terms of its environmental impact but at the same time, it is{" "}
                            <span className="font-bold">
                the best available source of protein on the market.
              </span>{" "}
                            When we talked about duckweed's amazing traits, he said he is{" "}
                            <span className="font-bold">ready to try out our system</span> as
                            soon as it's finished. But he stressed the fact, that it has to be{" "}
                            <span className="font-bold">profitable and cost-competitive</span>{" "}
                            with current options, as that is what matters to him the most.
                        </p>

                        <p>
                            We were also positively surprised by the fact that he is{" "}
                            <span className="font-bold">open to genetically modified crops</span>{" "}
                            and hopes that the European legislation will soon shift towards
                            approving their use.
                        </p>
                    </div>
                </div>
            </ExpandablePillNoImage>
        </div>
    );
}
