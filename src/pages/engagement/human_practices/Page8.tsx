import React from "react";
import ExpandablePill from "./ExpandablePill";
import A from "../../../A.tsx";

export default function HumanPracticesPage8() {
    return (
        <div>

            <div
                className="max-w-6xl mx-auto bg-white text-gray-900 leading-relaxed p-8 font-[Urbanist,sans-serif] space-y-12"
                id="hw-and-cultivation"
            >
                {/* Section Title */}
                <h2
                    className="font-bold"
                    style={{
                        fontFamily: "Space Grotesk, sans-serif",
                        fontSize: window.innerWidth < 768 ? "1.6rem" : "2rem",
                    }}
                >
                    Hardware & Cultivation
                </h2>

                {/* Intro paragraphs */}
                <p className="text-lg">
                    Duckweed being user-friendly doesn’t mean making it only{" "}
                    <span className="font-bold">programmable,</span> but also{" "}
                    <span className="font-bold">predictable.</span>
                </p>

                <p className="text-lg">
                    The data about duckweed growth and biomass yields are very scattered and often differ dramatically
                    across literature.
                    We decided to gather our own dataset for 12 clones on their growth rates and optimal cultivation
                    conditions and we
                    constructed a{" "}
                    <A href="/model" className="text-[#538b5e] underline hover:text-[#25512b]">
                        PREDICTOR
                    </A>{" "}
                    based on them. Now, anyone can use it to conduct their experiments predictably.
                </p>

                <p className="text-lg">
                    But collecting our data was extremely laborious process. Thus, we built{" "}
                    <A href="/hardware" className="text-[#538b5e] underline hover:text-[#25512b]">
                        CULTIVATOR
                    </A>{" "}
                    to automate the cultivation process for duckweed researchers and make it repeatable, controlled and
                    easy.
                </p>

                <p className="font-bold text-lg">
                    Take a look how different people helped us along the way with constructing our prediction model and
                    cultivator.
                </p>

                {/* Kateřina Patloková pill */}
                <ExpandablePill
                    image="https://static.igem.wiki/teams/5642/images/engagement/humanpractices/8-1.webp"
                    name="Ing. Kateřina Patloková"
                    subtitle="Mendel University"
                    location="Duckweed cultivation"
                    defaultOpen={true}
                >
                    <div className="leading-relaxed text-lg space-y-8">
                        {/* Text with portrait */}
                        <p>
                            <span className="font-bold">Kateřina</span> is a Ph.D. candidate at Mendel University and
                            has
                            been working with duckweed for a couple of years now.
                        </p>
                        <p>
                            When we started thinking about making duckweed cultivation more user-friendly we immediately
                            contacted her for help. She invited us to have a look at their cultivation system in Brno.
                            We
                            have seen similar systems in an article we originally drew inspiration from, but looking at
                            it
                            in person was an amazing experience. This system is the closest to{" "}
                            <span className="font-bold">scaling duckweed vertical cultivation</span> in Czechia.
                        </p>

                        {/* Image beside bullet list */}
                        <div>

                            <div className="grid md:grid-cols-2 gap-8 items-center">
                                <div className="space-y-4">
                                    <p>While watching the mesmerizing flow of duckweed inside the system we discussed
                                        how to
                                        make our own one even better:</p>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li>we can probably go as low as 5 centimeters with the water level in
                                            individual
                                            layers
                                        </li>
                                        <li>their system is unnecessarily large which makes it hard to work with</li>
                                        <li>we need to make sure that algae are not overgrowing in our setup, so we
                                            should
                                            make layers dark or at least avoid transparent materials
                                        </li>

                                    </ul>
                                </div>
                                <div className="flex justify-center">
                                    <img
                                        src="https://static.igem.wiki/teams/5642/images/engagement/humanpractices/8-2.webp"
                                        alt="Duckweed cultivation system"
                                        className="rounded-2xl max-w-md"
                                    />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-8 items-center">
                                <div className="flex justify-center items-center">
                                    <img
                                        src="https://static.igem.wiki/teams/5642/images/engagement/humanpractices/8-3.webp"
                                        alt="Duckweed cultivation system"
                                        className="rounded-2xl max-w-md"
                                    />
                                </div>
                                <div className="space-y-4">
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li>
                                            <span className="font-bold">water should be ideally moving</span> to avoid
                                            algae
                                            growth and ensure even distribution of nutrients
                                        </li>
                                        <li>they are adding nutrients only twice a month due to the laboriousness of the
                                            process. Ideally, we have nutrient levels constant throughout the whole
                                            cultivation
                                        </li>
                                        <li>they are harvesting the whole system manually to about 80% of surface
                                            coverage
                                            but that is only an estimate. If we would be able to develop a system for
                                            monitoring duckweed biomass and surface coverage in real time, that would be
                                            a
                                            huge help
                                        </li>
                                    </ul>
                                </div>

                            </div>

                        </div>


                        <p>
                            Based on this meeting, we had a much better understanding of what{" "}
                            <span className="font-bold">duckweed cultivation</span> needs, to conduct their experiments
                            easily and we went to build that. You can take a look how we integrated Kateřina’s insights
                            into
                            our{" "}
                            <A href="/hardware" className="text-[#538b5e] underline hover:text-[#25512b]">
                                CULTIVATOR
                            </A>
                            .
                        </p>

                        <p>
                            From here, we had to do real engineering, grab screwdrivers and build it. Continue reading
                            through{" "}
                            <A href="#real-world-check" className="text-[#538b5e] underline hover:text-[#25512b]">
                                Real World Check
                            </A>{" "}
                            to see, how <span className="font-bold">Kateřina and her colleagues</span> came to try out
                            our
                            finished hardware!
                        </p>
                    </div>
                </ExpandablePill>
            </div>

            <div
                className="max-w-6xl mx-auto bg-white text-gray-900 leading-relaxed p-8 font-[Urbanist,sans-serif] space-y-12">
                {/* Dr. Vojtěch Mrázek */}
                <ExpandablePill
                    image="https://static.igem.wiki/teams/5642/images/engagement/humanpractices/8-4.webp"
                    name="Dr. Vojtěch Mrázek"
                    subtitle="Brno University of Technology"
                    location="Evolvable Hardware"
                >
                    <div className="leading-relaxed text-lg space-y-4">
                        <p>
                            We reached out to <span className="font-bold">Dr. Mrázek</span> to discuss the controlling
                            system for our CULTIVATOR. To make it robust and simple, he suggested to use ESP32 as a
                            microcontroller,{" "}
                            <span className="font-bold">RaspberryPi 4B</span> for server and{" "}
                            <span className="font-bold">Wi-Fi communication</span> between the components.
                        </p>
                    </div>
                </ExpandablePill>


                <ExpandablePill
                    image="https://static.igem.wiki/teams/5642/images/engagement/humanpractices/8-8.webp"
                    name="Petr Botek"
                    location="Light Design"
                >
                    <div className="leading-relaxed text-lg space-y-4">
                        <p>
                            <span className="font-bold">Petr</span> helped us with choosing the right lights for
                            our{" "}
                            CULTIVATOR
                            so that our duckweeds can grow happily and produce large amounts of biomass.
                        </p>
                    </div>
                </ExpandablePill>

                {/* Dr. Stanislav Véchet */}
                <ExpandablePill
                    image="https://static.igem.wiki/teams/5642/images/engagement/humanpractices/8-7.webp"
                    name="Dr. Stanislav Véchet"
                    subtitle="Brno University of Technology"
                    location="Autonomous systems"
                >
                    <div className="leading-relaxed text-lg space-y-4">
                        <p>
                            <span className="font-bold">Dr. Stanislav Véchet</span> helped us make the cultivator
                            according to industrial norms. Usage of the same type of components for one category of
                            parts, making parts and systems as simple as possible, and what to include in documentation
                            for anyone able to replicate our system. Dr. Véchet also introduced us to{" "}
                            <span className="font-bold">methods of sterilization</span> we want to incorporate in the
                            future.
                        </p>
                    </div>
                </ExpandablePill>

                {/* Marek Mertuš */}
                <ExpandablePill
                    image="https://static.igem.wiki/teams/5642/images/engagement/humanpractices/8-6.webp"
                    name="Marek Mertuš"
                    subtitle="Danubias Fructi"
                    location="Agronomist at Danubias Fructi"
                >
                    <div className="grid md:grid-cols-2 gap-8 items-center leading-relaxed text-lg">
                        {/* Left column: text */}
                        <div className="space-y-4">
                            <p>
                                To discuss the <span className="font-bold">proper use of fertilizers</span> in the
                                modern-day agriculture industry, we reached out to{" "}
                                <span className="font-bold">Marek Mertuš at Danubias Fructi</span>, the largest fruit
                                company in Slovakia. He suggested the use of a central reservoir with a{" "}
                                <span className="font-bold">sensor-controlled medium,</span> where, based on readings,
                                nutrients are added and mixed with water with a mixing pump. We currently use this setup
                                in our{" "}
                                CULTIVATOR. He also suggested a method of{" "}
                                <span className="font-bold">regularly cleaning</span> the whole pipe system via pumping
                                acid through the system.
                            </p>
                        </div>

                        {/* Right column: image */}
                        <div className="flex justify-center">
                            <img
                                src="https://static.igem.wiki/teams/5642/images/engagement/humanpractices/8-5.webp"
                                alt="Marek Mertuš consultation on fertilizers"
                                className="rounded-2xl max-w-md"
                            />
                        </div>
                    </div>
                </ExpandablePill>
            </div>
        </div>
    );
}
