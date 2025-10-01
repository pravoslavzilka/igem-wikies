import React from "react";
import ExpandablePill from "./ExpandablePill";

export default function HumanPracticesPage11() {
    return (
        <div>

            <div id="regulations"
                 className="max-w-6xl mx-auto bg-white text-gray-900 leading-relaxed p-8 font-[Urbanist,sans-serif]">
                {/* Intro paragraphs */}
                <p className="mb-6 text-lg">
                    By now we knew, that farmers need our solution, that we might be able to deliver them the
                    next protein crop and that we can make our duckweed safe to use anywhere in the world.
                </p>
                <p className="mb-6 text-lg">
                    Wait, can that be anywhere? Regulations, of course. To understand them better, we contacted
                    XY (Zdenkina právnička) to get to know, whether our local Czech and European farmers could
                    benefit from our solution and if so, when and what has to be done in order to get it to them.
                </p>

                {/* Zdenkina pill */}
                <ExpandablePill
                    image="https://static.igem.wiki/teams/5642/images/engagement/humanpractices/face.webp"
                    name="Zdenkina právnička"
                    subtitle="Regulatory specialist"
                    location="Czech Republic / EU Regulations"
                >
                    <p>TODO</p>
                </ExpandablePill>

                <div className="leading-relaxed text-lg space-y-6">
                    <p>
                        Well…that’s not exactly what we wanted to hear. But we expected something like this.
                        It will probably not be anytime soon that our farmers will use the engineered duckweed
                        on their farms. But we believe this will change soon! One part of this process is higher
                        public education about GMOs and this is exactly what we tried to work on in our{" "}
                        <a href="#outreach" className="underline text-green-700">
                            Outreach
                        </a>{" "}
                        activities.
                    </p>
                    <p>
                        Thankfully, by that time, duckweed can be used for a lot of amazing things other than
                        animal feed. Read all about it in{" "}
                        <a href="#why-duckweed" className="underline text-green-700">
                            Why duckweed!
                        </a>{" "}
                        And if you want to know how we investigated what it takes to make duckweed the next
                        biotechnology platform for all kinds of applications discussed on that page, continue
                        reading here…
                    </p>
                </div>

                {/* Section transition */}
                <section id="platform">

                    <h2
                        id="platform"
                        className="font-bold mt-16 mb-6"
                        style={{fontFamily: "Space Grotesk, sans-serif", fontSize: "2rem"}}
                    >
                        Duckweed as a Biotechnology Platform
                    </h2>
                </section>
            </div>


            <div
                className="max-w-6xl mx-auto bg-white text-gray-900 leading-relaxed p-8 font-[Urbanist,sans-serif]"
            >
                {/* Intro paragraphs */}
                <p className="mb-6 text-lg">
                    We never really buried our{" "}
                    <a href="#entrepreneurship" className="underline text-green-700">
                        Entrepreneurship
                    </a>{" "}
                    ambitions and throughout our whole project, we were speaking with people about how we can
                    make programmable duckweed something that can people benefit from and how we can bring that
                    to market. In order to do that, we consulted companies working with duckweed and plants,
                    startup founders and investors from all around the world.
                </p>
                <p className="mb-6 text-lg">
                    And with who else could we start than with the company that already almost mastered duckweed
                    vertical farming.
                </p>

                {/* Tsipi Shoham pill */}
                <ExpandablePill
                    image="https://static.igem.wiki/teams/5642/images/engagement/humanpractices/face.webp"
                    name="Dr. Tsipi Shoham"
                    subtitle="CEO at GreenOnyx"
                    location="Vertically cultivating duckweed for human consumption"
                >
                    <div className="leading-relaxed text-lg space-y-6">
                        <p>
                            Tsipi is the CEO of{" "}
                            <a href="https://greenonyx.ag/" target="_blank" rel="noopener noreferrer"
                               className="underline text-green-700">
                                GreenOnyx
                            </a>
                            , Israeli company that makes{" "}
                            <span className="font-bold">WannaGreens</span>. This product is basically the tiniest
                            and the most nutritionally dense duckweed –{" "}
                            <span className="italic">Wolffia</span> – in the fresh form, delicious and ready for
                            salads, packed with nutrients.
                        </p>
                        <p>
                            At the meeting, Tsipi went straight to the point and asked, when we can provide the
                            better engineering strategy for duckweed. She stressed that although being the first,
                            engineering is not the only obstacle hindering duckweed application. After sorting out
                            easier engineering, we need to see, how is the protein expression sustained and what
                            levels does it achieve. Moreover, we need to think of ways how to secrete protein
                            products out of the plant into the medium to ease their purification. Regarding the
                            cultivation, sterile conditions for applications other than animal feed are probably a
                            must have.
                        </p>
                        <p>
                            We got great insights from Tsipi and she liked our project that much, that she decided
                            to become a sponsor of our iGEM team. So proud that{" "}
                            <a href="https://greenonyx.ag/" target="_blank" rel="noopener noreferrer"
                               className="underline text-green-700">
                                GreenOnyx
                            </a>{" "}
                            is a part of the{" "}
                            <a href="#duckweed-mafia" className="underline text-green-700">
                                duckweed mafia
                            </a>
                            .
                        </p>
                    </div>
                </ExpandablePill>

            </div>
        </div>
    );
}
