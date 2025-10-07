import React from "react";
import ExpandablePill from "./ExpandablePill";

export default function HumanPracticesPage2() {
    return (
        <div>
            <div className="max-w-6xl mx-auto bg-white text-gray-900 leading-relaxed p-8 font-[Urbanist,sans-serif]">
                {/* Scientific Concept Section */}
                <div className="mb-16 text-lg leading-relaxed mx-auto">
                    {/* Intro paragraph */}
                    <p className="mb-6">
                        Only thing that remained was to make that{" "}
                        <span className="font-bold">
            engineered ammonium-resistant duckweed
          </span>
                        . And that’s how we came up with our first scientific concept. It was
                        based on{" "}
                        <span className="font-bold">
            directed evolution of glutamine synthetase 1
          </span>{" "}
                        enzyme – the enzyme that catalyzes the reaction of glutamate and
                        ammonium to form glutamine. We wanted to use the fancy yeast system
                        called <span className="font-bold">OrthoRep</span>[1] to{" "}
                        <span className="font-bold">hypermutate</span> the duckweed enzyme
                        inserted into yeast with intention to obtain better functioning
                        variant of the protein. Below, you can see the basic scheme of the
                        concept.
                    </p>

                    {/* Centered diagram */}
                    <div className="mb-6 flex justify-center">
                        <img
                            src="https://static.igem.wiki/teams/5642/images/engagement/humanpractices/2-5.webp"
                            alt="Scheme of ammonium-resistant duckweed concept"
                            className="max-w-full rounded-lg"
                        />
                    </div>

                    {/* Closing paragraph */}
                    <p>
                        We prepared protocols, designs and even the list of lab materials we
                        required. But we were fortunate enough to need a construct from one of
                        the authors of the core article we were using as an inspiration –{" "}
                        <span className="font-bold">Professor Andrew D. Hanson</span>.
                    </p>
                </div>

                {/* Professor Hanson pill */}
                <ExpandablePill
                    image="https://static.igem.wiki/teams/5642/images/engagement/humanpractices/2-1.webp"
                    name="Dr. Andrew D. Hanson"
                    subtitle="Professor at University of Florida"
                    location="Biochemistry and plant metabolism"
                >
                    <div className="grid md:grid-cols-2 gap-8 leading-relaxed text-lg">
                        {/* Left column */}
                        <div className="space-y-4">
                            <p>
                                We presented to him what we wanted to achieve. In 30 minutes, he
                                explained why we are wrong and that our approach will{" "}
                                <span className="font-bold">almost certainly not lead</span> to
                                increasing duckweed ammonium tolerance.
                            </p>

                            <p>
                                In short, the enzyme we were targeting is{" "}
                                <span className="font-bold">very conserved</span> across species
                                and evolution has been acting on it for quite a while. Therefore
                                it is{" "}
                                <span className="font-bold">very improbable</span> to increase its
                                catalytic activity on the native substrate 20-fold, as we planned
                                to do.
                            </p>
                        </div>

                        {/* Right column */}
                        <div className="flex justify-center items-center">
                            <img
                                src="https://static.igem.wiki/teams/5642/images/engagement/humanpractices/2-2.webp"
                                alt="Call with Prof. Andrew D. Hanson"
                                className="rounded-2xl"
                            />
                        </div>
                    </div>

                    <p className="mt-6 text-lg">
                        At the same time, Prof. Hanson was{" "}
                        <span className="font-bold">excited about the problem</span> we were
                        trying to solve and encouraged us to continue. He also suggested other
                        possible approaches we can take, for instance{" "}
                        <span className="font-bold">
            targeting glutamate dehydrogenase (GDH)
          </span>{" "}
                        enzyme pathway. We needed to rethink our approach and come up with a
                        new one.
                    </p>
                </ExpandablePill>
            </div>

            <div className="max-w-6xl mx-auto bg-white text-gray-900 leading-relaxed p-8 font-[Urbanist,sans-serif]">
                {/* Intro paragraph */}
                <p className="mb-6 text-lg">
                    Despite being a bit frustrated, we got more wind into our sails. But we
                    had to stop thinking about the solution for a while to prepare for{" "}
                    <span className="font-bold">iGEM Startup Showcase</span> in Paris (read
                    more in{" "}
                    <a
                        href="/engagement/nitroduck"
                        className="text-[#538b5e] underline hover:text-[#25512b]"
                    >
                        NitroDuck story
                    </a>
                    ).
                </p>

                {/* Centered image */}
                <div className="flex justify-center mb-8">
                    <img
                        src="https://static.igem.wiki/teams/5642/images/engagement/humanpractices/2-3.webp"
                        alt="iGEM Startup Showcase in Paris"
                        className="rounded-2xl  max-w-full"
                    />
                </div>

                {/* Paragraphs below image */}
                <div className="space-y-6 text-lg">
                    <p>
                        We were overwhelmed by the support we got from everyone here. All the
                        people hearing our vision were extremely excited, loved the idea and
                        duckweed! The key takeaway from here was that we need to have our{" "}
                        <span className="font-bold">unit economics</span> counted right.{" "}
                        <span className="font-bold">
            John Cumbers, Patrick Torbey and Jake Wintermute
          </span>{" "}
                        all emphasized the same thing. So we sat down to run the numbers.
                    </p>

                    <p>
                        We realized we can <span className="font-bold">dilute manure</span>{" "}
                        with water and not worry that much about higher duckweed ammonium
                        tolerance. But we had another problem here. It was obvious from all
                        the calculations we have done – duckweed has to{" "}
                        <span className="font-bold">make 2–5x more biomass</span> than is the
                        literature average, to compete with soybean when cultivating it in our
                        indoor vertical system. And this posed a new challenge in front of us.
                    </p>
                </div>
            </div>


            {/* Section 1 */}
            <div className="bg-white rounded-lg mb-16 max-w-6xl mx-auto">
                {/* Section title */}
                <h2
                    className="font-bold mb-4 px-6"
                    style={{
                        fontFamily: "Space Grotesk, sans-serif",
                        fontSize: window.innerWidth < 768 ? "1.6rem" : "2rem",
                    }}
                >
                    Biomass-boosted Duckweed
                </h2>

                {/* Two-column layout */}
                <div className="grid md:grid-cols-2 gap-8 items-center px-6 mb-8">
                    {/* Paragraphs */}
                    <div className="space-y-4 font-[Urbanist,sans-serif] text-lg leading-relaxed">
                        <p>
                            At this time, we knew that founding a startup in our situation may not
                            be the best idea and we{" "}
                            <span className="font-bold">decided to do iGEM instead</span>, where we
                            could iterate over concepts with more space for mistakes.
                        </p>
                        <p>
                            But we had to start researching again to come up with a reasonable
                            project idea. This time for{" "}
                            <span className="font-bold">strategies to increase the duckweed biomass.</span>{" "}
                            It is obvious that pretty much the only way we can force duckweed to
                            make more biomass is to engineer it to{" "}
                            <span className="font-bold">utilize more matter</span>. And in all cases,
                            this comes down to improving photosynthesis.
                        </p>
                    </div>

                    {/* Image */}
                    <div className="flex justify-center">
                        <img
                            src="https://static.igem.wiki/teams/5642/images/engagement/humanpractices/2-4.webp"
                            alt="Duckweed biomass illustration"
                            className="rounded-2xl  max-w-xs"
                        />
                    </div>
                </div>
            </div>

            {/* Section 2 */}
            <div className="bg-white rounded-lg mb-16 max-w-6xl mx-auto">
                <div className="space-y-4 font-[Urbanist,sans-serif] text-lg leading-relaxed mb-8 px-6">
                    <p>
                        How? First low-hanging fruit idea was to{" "}
                        <span className="font-bold">overexpress RuBisCO</span> in duckweed
                        chloroplast. And that’s how we stumbled upon the very hard plant SynBio
                        problem –{" "}
                        <span className="font-bold">chloroplast genetic engineering.</span>
                    </p>
                </div>

                {/* Image */}
                <div className="mb-6 px-6">
                    <img
                        src="https://static.igem.wiki/teams/5642/images/engagement/humanpractices/2-6.webp"
                        alt="Chloroplast engineering illustration"
                        className="rounded-2xl mx-auto max-w-xl"
                    />
                </div>
            </div>

            {/* Section 3 */}
            <div className="bg-white rounded-lg mb-16 max-w-6xl mx-auto">

                <div className="space-y-4 font-[Urbanist,sans-serif] text-lg leading-relaxed mb-8 px-6">
                    <p>
                        Currently, there is{" "}
                        <span className="font-bold">
                            no reliable method of higher plants chloroplast engineering
                        </span>
                        , especially in duckweed. We came up with several ideas that could be
                        employed – reprogramming{" "}
                        <span className="font-bold">Agrobacterium</span> to target the T-DNA to
                        chloroplast instead of nucleus[2], using peptide-mediated transformation of
                        protoplast[3], or PEG-mediated transformation[4].
                    </p>
                    <p>
                        All were tried out before in different plants, and so far, with{" "}
                        <span className="font-bold">limited success.</span>
                    </p>
                </div>
            </div>


        </div>
    );
}
