import React, {useState} from "react";
import ExpandablePill from "./ExpandablePill";
import A from "../../../A.tsx";

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
                            CULTIVATOR, such as the structure, the plastic layers, the water jets, etc. For spraying
                            duckweed
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
                            <A href="/model" className="text-[#538b5e] underline hover:text-[#25512b]">
                                PREDICTOR
                            </A>.
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
                <div id="marcel-jansen"></div>
                <ExpandablePill
                    image="https://static.igem.wiki/teams/5642/images/engagement/humanpractices/9-3.webp"
                    name="prof. Marcel Jansen"
                    subtitle="University College Cork"
                    location="Duckweed cultivation for applied research"
                    defaultOpen={true}
                >
                    <div className="leading-relaxed text-lg space-y-6">
                        <p>
                            Throughout our iGEM project, we tried to reach out to most of the people that are{" "}
                            <span className="font-bold">working with duckweed around the world</span> (check them out
                            also in Real World Check).
                            And <span className="font-bold">professor Jansen</span> is one of those that are constantly
                            designing new systems for its cultivation.
                            We had to get his feedback on our{" "}
                            CULTIVATOR.
                        </p>

                        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center text-lg leading-relaxed">
                            {/* Left column */}
                            <div className="space-y-4">
                                <p>
                                    We showed him pictures of our system and he was pretty impressed! He liked all the
                                    features of automation and said{" "}
                                    <span className="font-bold">the harvesting strategy is very clever.</span> The only
                                    thing
                                    he was concerned about was mixing the medium in the individual trays, as our current
                                    setup
                                    could disrupt the duckweed layer, which might hinder its growth.
                                </p>
                                <p>
                                    That’s why we{" "}
                                    <span className="font-bold">
        submerged our pipe-based harvesting system under the surface.
      </span>{" "}
                                    This way, duckweed won’t be harmed and can do what it does best – grow extremely
                                    fast.
                                </p>
                            </div>

                            {/* Right column */}
                            <div className="space-y-4">
                                <div className="flex justify-center">
                                    <img
                                        src="https://static.igem.wiki/teams/5642/images/engagement/humanpractices/9-4.webp"
                                        alt="Call with Prof. Marcel Jansen"
                                        className="rounded-2xl max-w-md"
                                    />
                                </div>
                                <p>
                                    The professor was also excited about our{" "}
                                    <span className="font-bold">photoresistor-based system (PROBE)</span> for measuring
                                    biomass growth in real time.
                                </p>
                                <p>
                                    His sentence{" "}
                                    <span className="font-bold">‘You’re probably onto a perfect setup…’</span>{" "}
                                    stuck with us and motivated us even further.
                                </p>
                            </div>
                        </div>


                    </div>
                </ExpandablePill>

                <ExpandablePill
                    image="https://static.igem.wiki/teams/5642/images/toolbox/toolbox/bartak.webp"
                    name="Prof. Miloš Barták, PhD"
                    subtitle="Masaryk University Brno"
                    location="Photosynthesis"
                >
                    <div className="leading-relaxed text-lg space-y-4">
                        <p>
                            <span className="font-bold">Professor Barták</span> is a world-renowned
                            expert on chlorophyll fluorescence and the light-dependent reactions of photosynthesis. We
                            reached out to him regarding the design of our duckweed lighting experiment. He helped us
                            with the experimental design and lent us his PAR meter, which we used to better understand
                            the light available to us.
                        </p>
                    </div>
                </ExpandablePill>
            </div>


            <div
                className="max-w-6xl mx-auto bg-white text-gray-900 leading-relaxed font-[Urbanist,sans-serif] space-y-4">
                {/* Green Header */}
                <div
                    id="real-world-check"
                    className="text-gray-900 font-bold px-6 py-4 rounded-t-xl"
                    style={{fontFamily: "Space Grotesk, sans-serif", fontSize: "2rem", backgroundColor: '#6ca033'}}
                >
                    Real World Check
                </div>

                {/* Intro text */}
                <div className="p-8 text-lg leading-relaxed space-y-6">
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
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 place-items-center">
                            {[
                                {
                                    label: "The soybean problem from both side (Czech & Brazilian stakeholders)",
                                    src: "https://static.igem.wiki/teams/5642/images/engagement/humanpractices/2/soybean.webp",
                                    href: "#farmers"
                                },
                                {
                                    label: "Safety & Regulations",
                                    src: "https://static.igem.wiki/teams/5642/images/engagement/humanpractices/2/safety.webp",
                                    href: "#safety"
                                },
                                {
                                    label: "Duckweed as a Biotechnology Platform",
                                    src: "https://static.igem.wiki/teams/5642/images/engagement/humanpractices/2/platform.webp",
                                    href: "#platform"
                                },
                            ].map(({label, src, href}) => (
                                <A
                                    key={label}
                                    href={href}
                                    onMouseEnter={() => setHovered(label)}
                                    onMouseLeave={() => setHovered(null)}
                                    className="block"
                                    aria-label={label}
                                >
                                    <div className="flex justify-center">
                                        <img
                                            src={src}
                                            alt={label}
                                            className="rounded-2xl max-w-xs"
                                        />
                                    </div>
                                </A>
                            ))}
                        </div>

                        {/* Row 2: 3 items (centered) */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 place-items-center">
                            {[
                                {
                                    label: "Excellence in iGEM",
                                    src: "https://static.igem.wiki/teams/5642/images/engagement/humanpractices/2/excellence.webp",
                                    href: "#excellence"
                                },
                                {
                                    label: "Building CzechoSlovak SynBio Community from the Ground Up",
                                    src: "https://static.igem.wiki/teams/5642/images/engagement/humanpractices/2/czsk-new.webp",
                                    href: "#czsk-community"
                                },
                            ].map(({label, src, href}) => (
                                <A
                                    key={label}
                                    href={href}
                                    onMouseEnter={() => setHovered(label)}
                                    onMouseLeave={() => setHovered(null)}
                                    className="block"
                                    aria-label={label}
                                >
                                    <div className="flex justify-center">
                                        <img
                                            src={src}
                                            alt={label}
                                            className="rounded-2xl max-w-xs"
                                        />
                                    </div>
                                </A>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-12">

                        <h2
                            className="font-bold text-start"
                            style={{
                                fontFamily: "Space Grotesk, sans-serif",
                                fontSize: window.innerWidth < 768 ? "1.6rem" : "2rem",
                            }}
                            id="farmers"
                        >
                            The Soybean Problem from both Sides (Czech & Brazilian)
                        </h2>

                        <p className="text-lg">
                            The first person from a real <span className="font-bold">world of agriculture</span> we
                            spoke to was a farmer{" "}
                            <A href="#jakub-neuzil" className="underline hover:text-gray-700">
                                Jakub Neužil
                            </A>
                            . He told us many valuable insights, and agreed that the problem we are focusing on has to
                            be solved.
                            However, we really wanted to understand, <span className="font-bold">what other problems are farmers facing,</span>{" "}
                            how does the operation on the farm look like regarding their{" "}
                            <span className="font-bold">manure treatment and the kind of feed they are using.</span>
                        </p>

                    </div>
                    <div className="space-y-12">

                        <p className="text-lg">
                            To gain a comprehensive perspective, we spoke (by phone) with <span className="font-bold">40 farmers</span> from
                            the Czech Republic and Slovakia. Curious what we were asking and what did we find out?
                        </p>

                        <h2
                            className="font-bold"
                            style={{
                                fontFamily: "Space Grotesk, sans-serif",
                                fontSize: window.innerWidth < 768 ? "1.6rem" : "2rem",
                            }}>
                            What type of feed do you use as a source of protein?
                        </h2>

                        <p className="text-lg">
                            Our research showed that 50% of the surveyed farms use <span
                            className="font-bold">soy</span> at least partly as a
                            protein source. However, only 15% rely on it as their main protein source, primarily due to
                            its{" "}
                            <span className="font-bold">high cost.</span> The most common protein source is <span
                            className="font-bold">rapeseed,</span>{" "}
                            used by 30% of the farms. Another 7.5% combine <span
                            className="font-bold">rapeseed and soy</span> in a 1:1 ratio.
                            Around 20% of the farms operate organically, with their cattle grazing freely on{" "}
                            <span className="font-bold">pastures.</span>
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
}
