import React from "react";
import ExpandablePill from "./ExpandablePill";

export default function HumanPracticesPage13() {
    return (
        <div className="text-lg">
            <div
                className="max-w-6xl mx-auto bg-white text-lg text-gray-900 leading-relaxed p-8 font-[Urbanist,sans-serif] space-y-12">

                {/* Section Title */}
                <h2
                    className="font-bold"
                    style={{
                        fontFamily: "Space Grotesk, sans-serif",
                        fontSize: window.innerWidth < 768 ? "1.6rem" : "2rem",
                    }}
                    id="platform"
                >
                    Duckweed as a Biotechnology Platform
                </h2>

                {/* Intro paragraphs */}
                <p>
                    We never really buried our{" "}
                    <a
                        href="#"
                        className="text-[#538b5e] underline hover:text-[#25512b]"
                    >
                        Entrepreneurship
                    </a>{" "}
                    ambitions and throughout our whole project, we were talking with experts about how we can make
                    programmable duckweed something that people can benefit from and how we can bring it to the
                    market. In order to do that, we consulted companies working with duckweed and plants, startup
                    founders and investors from all around the world.
                </p>

                <p>
                    And our first talk was with no one else but the company that already{" "}
                    <span className="font-bold">almost mastered duckweed vertical farming.</span>
                </p>

                {/* Tsipi Shoham Pill */}
                <ExpandablePill
                    image="https://static.igem.wiki/teams/5642/images/engagement/humanpractices/2/13-1.webp"
                    name="Tsipi Shoham"
                    subtitle="CEO at GreenOnyx"
                    location="Vertically cultivating duckweed for human consumption"
                    defaultOpen={true}
                >
                    <div className="leading-relaxed text-lg space-y-6">
                        <p>
                            Tsipi is the CEO of{" "}
                            <a
                                href="#"
                                className="text-[#538b5e] underline hover:text-[#25512b]"
                            >
                                GreenOnyx
                            </a>
                            , the company that makes{" "}
                            <span className="font-bold italic">WannaGreens.</span> This product is basically the tiniest
                            and the most nutritionally dense duckweed –{" "}
                            <span className="italic">Wolffia</span> – in the fresh form, delicious and ready for salads,
                            packed with nutrients.
                        </p>

                        <p>
                            At the meeting, Tsipi went straight to the point and asked us when can we provide a{" "}
                            <span className="font-bold">better engineering strategy</span> for duckweed. She stressed
                            that although being the first, engineering is{" "}
                            <span
                                className="font-bold">not the only obstacle hindering duckweed application.</span> After
                            sorting out easier engineering, we need to see, how is the{" "}
                            <span className="font-bold">protein expression sustained</span> and what levels does it
                            achieve. Additionally, we need to think of ways how to{" "}
                            <span className="font-bold">secrete protein products</span> out of the plant into the medium
                            to ease their purification. Regarding the cultivation,{" "}
                            <span className="font-bold">sterile conditions</span> for applications other than animal
                            feed
                            are a must have.
                        </p>

                        <p>
                            We got great insights from Tsipi and she liked our project so much, that she decided to
                            become a sponsor of our iGEM team, so we can now proudly say that{" "}
                            <a
                                href="#"
                                className="text-[#538b5e] underline hover:text-[#25512b]"
                            >
                                GreenOnyx
                            </a>{" "}
                            is a part of the{" "}
                            <span className="font-bold italic">duckweed mafia.</span>
                        </p>
                    </div>
                </ExpandablePill>
            </div>


            <div
                className="max-w-6xl mx-auto bg-white text-lg text-gray-900 leading-relaxed p-8 font-[Urbanist,sans-serif] space-y-12">

                {/* Intro paragraph */}
                <p>
                    Having space-like cultivation systems is cool! But we are synthetic biologists, we needed to
                    talk to someone that{" "}
                    <span className="font-bold">hacked duckweed’s genetic code</span> and produced something in it.
                    And there are only two companies known to us that managed to do this.{" "}
                    <span className="font-bold">Biolex</span> produced antibodies in{" "}
                    <span className="italic">Lemna</span> around 20 years ago! And we managed to speak to the Head of
                    Research of this company and her team that is starting again, with{" "}
                    <a
                        href="#"
                        className="text-[#538b5e] underline hover:text-[#25512b]"
                    >
                        Phylloceuticals
                    </a>
                    .
                </p>

                {/* Lynn Dickey Pill */}
                <ExpandablePill
                    image="https://static.igem.wiki/teams/5642/images/engagement/humanpractices/2/13-2.webp"
                    name="Lynn Dickey"
                    subtitle="CTO at Phylloceuticals"
                    location="Production of therapeutics in duckweed"
                    defaultOpen={true}
                >
                    <div className="leading-relaxed text-lg space-y-6">
                        <p>
                            We were trying to get to <span className="font-bold">Biolex</span> founders ever since we
                            read about their story. After several months,{" "}
                            <span className="font-bold">Lynn</span> agreed to a call and brought along her colleagues
                            from{" "}
                            <a
                                href="#"
                                className="text-[#538b5e] underline hover:text-[#25512b]"
                            >
                                Phylloceuticals
                            </a>
                            . We wanted to know, what Biolex achieved with duckweed, why did they fail and what is the
                            new company up to.
                        </p>

                        <p>
                            At Biolex, they achieved{" "}
                            <span className="font-bold">frond regeneration</span> of duckweed but with{" "}
                            <span className="font-bold">mosaic results</span> and they were very excited about our{" "}
                            <span className="font-bold">TAIFR system.</span> They wanted to see our results immediately
                            as we have them. We asked about promoters they use in duckweed protein expression.
                            Apparently, they are using native ones isolated by themselves. This only strengthens our
                            conviction that we are aiming for the right bottlenecks.
                        </p>

                        <p>
                            At the same time, they stressed the same things as Tsipi mentioned previously concerning
                            further duckweed application - sterility, secretion into the medium, but she also added
                            engineering the right glycosylation pathways in duckweed.
                        </p>

                        <p>
                            We asked the question, that was already pressing us for some time -{" "}
                            <span className="font-bold italic">
                            why isn’t duckweed everywhere already?
                        </span>{" "}
                            We settled on the fact that no one knows duckweed, despite its obvious{" "}
                            <span className="font-bold">advantages</span>, because it is not user-friendly.
                        </p>

                        <p>
                            So why did Biolex fail? “It was a business problem, not a technology problem.” A competitor
                            brought to market the drug we had been developing using duckweed earlier than we did,
                            making it hard to raise additional capital needed to finish development.
                        </p>

                        {/* Team image row */}
                        <div className="flex flex-wrap justify-center gap-4 mt-6">
                            <img
                                src="https://static.igem.wiki/teams/5642/images/engagement/humanpractices/2/13-3.webp"
                                alt="Lynn Dickey and Phylloceuticals team"
                                className="rounded-2xl max-w-full md:max-w-3xl shadow-md"
                            />
                        </div>
                    </div>
                </ExpandablePill>
            </div>
        </div>
    );
}
