import React, {useState} from "react";
import ExpandablePill from "./ExpandablePill";

export default function HumanPracticesPage9() {
    const [hovered, setHovered] = useState<string | null>(null);
    return (
        <div>

            <div
                className="max-w-6xl mx-auto bg-white text-gray-900 leading-relaxed p-8 font-[Urbanist,sans-serif] space-y-12">
                {/* Vojtěch Florián */}
                <ExpandablePill
                    image="https://static.igem.wiki/teams/5642/images/engagement/humanpractices/9-5.webp"
                    name="Vojtěch Florián"
                    subtitle="Brno University of Technology"
                    location="Reverse engineering and additive technologies"
                >
                    <div className="leading-relaxed text-lg space-y-4">
                        <p>
                            <span className="font-bold">Vojtěch Florián</span> helped us mainly with{" "}
                            <span className="font-bold">3D printing and pipe connecting. </span>For 3D
                            printing, we consulted with him what would be the proper type of plastic (the filament)
                            and the right 3D print settings for wanted material properties. He also helps us with the
                            PRUSA XL setup.
                        </p>
                    </div>
                </ExpandablePill>

                {/* Dr. Martin Malý */}
                <ExpandablePill
                    image="https://static.igem.wiki/teams/5642/images/engagement/humanpractices/9-1.webp"
                    name="Dr. Martin Malý"
                    subtitle="Brno University of Technology"
                    location="Reverse engineering and additive technologies"
                >
                    <div className="leading-relaxed text-lg space-y-4">
                        <p>
                            <span className="font-bold">Dr. Martin Malý</span> was our regular mentor in terms of
                            material usage and material processing for different purposes in the{" "}
                            <a href="#" className="text-green-700 underline hover:text-green-900">
                                CULTIVATOR
                            </a>
                            , such as the structure, the plastic layers, the water jets, etc. For spraying duckweed
                            from the tubes, we encountered problems of damaged water flow. Dr. Malý{" "}
                            <span className="font-bold">suggested using very thin pipes</span> that can be used
                            as water jets to make the water flow as smoothly as possible, which turned out to be
                            effective.
                        </p>
                    </div>
                </ExpandablePill>

                {/* Pavel Zach */}
                <ExpandablePill
                    image="https://static.igem.wiki/teams/5642/images/engagement/humanpractices/9-2.webp"
                    name="Pavel Zach"
                    subtitle="Technical University of Valencia"
                    location="Synthetic Biology and Control Engineering"
                >
                    <div className="leading-relaxed text-lg space-y-4">
                        <p>
                            <span className="font-bold">Pavel</span> was a member of the first ever{" "}
                            <span className="font-bold">Czech iGEM team back in 2015.</span> When he
                            heard that another one emerged ten years later, he contacted us immediately. With his
                            expertise in software, hardware and SynBio, he was helpful with perfecting our{" "}
                            <a href="#" className="text-green-700 underline hover:text-green-900">
                                PREDICTOR
                            </a>.
                        </p>
                        <p>
                            He assisted our Cultivation Hustlers team in{" "}
                            <span className="font-bold">chewing through literature on duckweed growth modelling</span>,
                            advised us on our first approach to constructing our own model and suggested using limiting
                            biomass experiments with us making our model better and better.
                        </p>
                        <p>
                            And when we had our model, his thoughts on{" "}
                            <span className="font-bold">optimizing it and prioritizing experiments</span> were very
                            helpful.
                        </p>
                    </div>
                </ExpandablePill>

                {/* Prof. Marcel Jansen */}
                <ExpandablePill
                    image="https://static.igem.wiki/teams/5642/images/engagement/humanpractices/9-3.webp"
                    name="prof. Marcel Jansen"
                    subtitle="University College Cork"
                    location="Duckweed cultivation for applied research"
                >
                    <div className="leading-relaxed text-lg space-y-6">
                        <p>
                            Throughout our iGEM project, we tried to reach out to most of the people that are{" "}
                            <span className="font-bold">working with duckweed around the world</span> (check them out
                            also in Real World Check).
                            And <span className="font-bold">professor Jansen</span> is one of those that are constantly
                            designing new systems for its cultivation.
                            We had to get his feedback on our{" "}
                            <a href="#" className="text-green-700 underline hover:text-green-900">
                                CULTIVATOR
                            </a>, right?
                        </p>

                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            {/* Left column */}
                            <div className="space-y-4">
                                <p>
                                    We showed him pictures of our system and he was pretty impressed! He liked all the
                                    features of automation and said{" "}
                                    <span className="font-bold">the harvesting strategy is very clever. </span>
                                    The only thing he was concerned about was mixing the medium in the individual trays,
                                    as our current setup could disrupt duckweed layer on the which might hinder
                                    duckweeds’ growth.
                                </p>
                                <p>
                                    That’s why we{" "}
                                    <span
                                        className="font-bold">submerged our pipe-based harvesting under the surface. </span>
                                    This way, duckweed won’t be harmed and can do what it is best at – grow extremely
                                    fast.
                                </p>
                            </div>

                            {/* Right column: image */}
                            <div className="space-y-4">
                                <div className="flex justify-center">
                                    <img
                                        src="https://static.igem.wiki/teams/5642/images/engagement/humanpractices/9-4.webp"
                                        alt="Call with prof. Marcel Jansen"
                                        className="rounded-2xl max-w-md"
                                    />
                                </div>
                                <p>
                                    Professor was also excited about our{" "}
                                    <span className="font-bold">photoresistor based system (PROBE)</span> for measuring
                                    biomass
                                    growth in real time.
                                </p>
                                <p>
                                    His sentence <span
                                    className="font-bold">‘You’re probably onto a perfect setup…’ </span>
                                    sticked with us and motivated us even further.
                                </p>
                            </div>
                        </div>


                    </div>
                </ExpandablePill>
            </div>


            <div className="max-w-6xl mx-auto bg-white text-gray-900 leading-relaxed font-[Urbanist,sans-serif]">
                {/* Green Header */}
                <div
                    id="real-world-check"
                    className="bg-green-300 text-gray-900 font-bold px-6 py-4 rounded-t-xl"
                    style={{fontFamily: "Space Grotesk, sans-serif", fontSize: "2rem"}}
                >
                    Real World Check
                </div>

                {/* Intro text */}
                <div className="p-8 text-lg leading-relaxed">
                    <p className="mb-6">
                        We built complicated and sophisticated stuff. But for what? To apply it in a real
                        world! And that’s why we were constantly checking whether we are really building
                        something people need and how they would be affected by our project. Is our project
                        still standing when facing these stakeholders? What do we have to do to get duckweed
                        as close to real world application as possible? Keep reading…
                    </p>

                    {/* Hover circles (4 on top, 3 centered below) */}
                    <div className="flex flex-col items-center space-y-6 mb-12">
                        {/* Row 1: 4 items */}
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 place-items-center">
                            {[
                                {label: "Farmers & Agriculture Specialists", href: "#farmers"},
                                {label: "Safety & Regulations", href: "#safety"},
                                {label: "Duckweed as a Biotechnology Platform", href: "#platform"},
                                {label: "CULTIVATOR User Testing", href: "#cultivator-testing"},
                            ].map(({label, href}) => (
                                <a
                                    key={label}
                                    href={href}
                                    onMouseEnter={() => setHovered(label)}
                                    onMouseLeave={() => setHovered(null)}
                                    className="block"
                                    aria-label={label}
                                >
                                    <div
                                        className={`w-40 h-40 rounded-full border border-gray-400 flex items-center justify-center 
                      text-center p-4 text-sm leading-tight transition-colors
                      ${hovered === label ? "bg-green-200 text-green-700" : "bg-gray-50"}`}
                                        style={{fontFamily: "Space Grotesk, sans-serif"}}
                                    >
                                        {label}
                                    </div>
                                </a>
                            ))}
                        </div>

                        {/* Row 2: 3 items (centered) */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 place-items-center">
                            {[
                                {label: "Entrepreneurship", href: "#entrepreneurship"},
                                {label: "Excellence in iGEM", href: "#excellence"},
                                {
                                    label: "Building CzechoSlovak SynBio Community from the Ground Up",
                                    href: "#community"
                                },
                            ].map(({label, href}) => (
                                <a
                                    key={label}
                                    href={href}
                                    onMouseEnter={() => setHovered(label)}
                                    onMouseLeave={() => setHovered(null)}
                                    className="block"
                                    aria-label={label}
                                >
                                    <div
                                        className={`w-40 h-40 rounded-full border border-gray-400 flex items-center justify-center 
                      text-center p-4 text-sm leading-tight transition-colors
                      ${hovered === label ? "bg-green-200 text-green-700" : "bg-gray-50"}`}
                                        style={{fontFamily: "Space Grotesk, sans-serif"}}
                                    >
                                        {label}
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Farmers & Agriculture Specialists section */}
                    <section id="farmers">
                        <h2
                            className="font-bold mb-4"
                            style={{
                                fontFamily: "Space Grotesk, sans-serif",
                                fontSize: window.innerWidth < 768 ? "1.6rem" : "2rem",
                            }}
                        >
                            Farmers & Agriculture Specialists
                        </h2>
                    </section>

                    <p>
                        The first person from a real world we spoke to was a farmer{" "}
                        <a
                            href="#"
                            className="text-green-700 underline hover:text-green-900"
                        >
                            Jakub Neužil
                        </a>
                        . He told us that the problem we want to focus on needs to be solved, besides many
                        more insights. However, we really wanted to understand, what other problems are
                        farmers facing, how does the operation on the farm look like regarding their manure
                        treatment and feed they are using. Of course, we asked what would it mean to
                        implement our solution on their farm and use duckweed as a next protein crop for
                        feeding their livestock.
                    </p>

                    <p className="mt-6">
                        Anyway, read further to see what we were asking and what we found out!
                    </p>
                </div>
            </div>
        </div>
    );
}
