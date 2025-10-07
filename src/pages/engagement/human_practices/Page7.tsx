import React from "react";
import ExpandablePill from "./ExpandablePill";

export default function HumanPracticesPage7() {
    return (
        <div>
            <div
                className="max-w-6xl mx-auto bg-white text-gray-900 leading-relaxed p-8 font-[Urbanist,sans-serif] space-y-8">
                {/* Dr. Přerovská pill */}
                <ExpandablePill
                    image="https://static.igem.wiki/teams/5642/images/engagement/humanpractices/7-1.webp"
                    name="Dr. Tereza Přerovská"
                    subtitle="Chromatin Molecular Complexes Laboratory"
                    location="Plant Developmental Biology"
                    defaultOpen={false}
                >
                    <p className="text-lg">
                        <span className="font-bold">Dr. Přerovská </span>
                        gave us workshop on primer design back in the days, when we were struggling
                        with PCRs. She taught us the basics and we{" "}
                        <span className="font-bold">improved our PCR results </span>
                        significantly after applying this knowledge.
                    </p>
                </ExpandablePill>

                {/* Prof. Kan Wang pill */}
                <ExpandablePill
                    image="https://static.igem.wiki/teams/5642/images/engagement/humanpractices/7-2.webp"
                    name="Prof. Kan Wang"
                    subtitle="Iowa State University"
                    location="Plant Transformation and Genome Editing"
                    defaultOpen={true}
                >
                    <div className="leading-relaxed text-lg space-y-6">
                        <p>
                            We were lucky enough to sneak in to the lecture that{" "}
                            <span className="font-bold">professor Wang </span>
                            gave at CEITEC. At the time, we were{" "}
                            <span className="font-bold">struggling with low transformation efficiencies </span>
                            of our duckweeds. Even positive controls were barely shining. And our efficiencies
                            were dropping over time!
                        </p>

                        <p>
                            After a thrilling lecture about pioneering{" "}
                            <span className="italic">Agrobacterium </span> engineering, we asked what could be
                            the problem. She asked us to describe our whole workflow. We did so… and{" "}
                            <span className="font-bold">she immediately found the mistake </span> – to save time,
                            we were avoiding the inoculation of our <span className="italic">Agrobacterium </span>
                            from a glycerol stock and were keeping the culture refrigerated. According to professor
                            Wang, this way our bacteria{" "}
                            <span className="font-bold">lose the ability to infect the plant.</span>
                        </p>

                        <p>
                            We went to restart our transformation experiments with fresh cultures and guess what?{" "}
                            <span className="font-bold">It worked!</span>
                        </p>

                        {/* Two-column layout: text + group photo */}
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div className="space-y-4">
                                <p>
                                    Professor Wang left us with a sentence: ‘Hacking duckweed is a very important and
                                    hard quest. You’re so bold you are doing that!’
                                </p>
                                <p>
                                    Dr. Boisivon standing nearby replied: ‘They’re just young!’ And Miro added: ‘Or
                                    dumb…’
                                </p>
                                <p>
                                    <span className="font-bold">Well, who knows.</span>
                                </p>
                            </div>

                            <div className="flex justify-center">
                                <img
                                    src="https://static.igem.wiki/teams/5642/images/engagement/humanpractices/7-3.webp"
                                    alt="Group photo after Prof. Wang lecture"
                                    className="rounded-2xl max-w-md"
                                />
                            </div>
                        </div>
                    </div>
                </ExpandablePill>
            </div>


            <div
                className="max-w-6xl mx-auto bg-white text-gray-900 leading-relaxed p-8 font-[Urbanist,sans-serif] space-y-12">
                {/* Section Title */}
                <h2
                    className="font-bold"
                    style={{
                        fontFamily: "Space Grotesk, sans-serif",
                        fontSize: window.innerWidth < 768 ? "1.6rem" : "2rem",
                    }}
                >
                    Promoter library construction
                </h2>

                {/* Intro paragraph */}
                <p className="text-lg">
                    From our consultations with Dr. Ordóñez, we knew that constructing{" "}
                    <span className="font-bold">endogenous duckweed promoters </span>
                    would significantly advance the field. Thus, we started to develop our own workflow.
                    We were not very successful and thankfully met the team from the{" "}
                    <span className="font-bold">iGEM Marburg 2024</span> on the European iGEM Meetup in Frankfurt.
                </p>

                {/* iGEM Marburg 2024 pill */}
                <ExpandablePill
                    image="https://static.igem.wiki/teams/5642/images/engagement/humanpractices/7-5.webp"
                    name="iGEM Marburg 2024"
                    subtitle="European iGEM Meetup in Frankfurt"
                    defaultOpen={true}
                >
                    <div className="leading-relaxed text-lg space-y-10">

                        <div className="space-y-4">
                            <p>
                                We met few members of <span className="font-bold">iGEM Marburg team </span>
                                from 2024 on the European iGEM Meetup in Frankfurt. They judged both our
                                presentation and poster (read more on our{" "}
                                <a href="#" className="text-[#538b5e] underline hover:text-[#25512b]">
                                    Outreach page
                                </a>
                                ). After the event (besides having fun), we discussed our project and plants
                                in general for hours and we got into{" "}
                                <span className="font-bold">plant regulatory parts exploration. </span>
                                They directed us to their project page and suggested to have a look at it.
                            </p>
                            <p>
                                We did so and were amazed how much work they have done. And most importantly,
                                we were happy to see that we could{" "}
                                <span className="font-bold">easily adopt a lot of processes </span>
                                they described on dandelion with duckweed!
                            </p>
                        </div>

                        {/* Block 2: text LEFT, image RIGHT */}
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div className="space-y-4">
                                <p>
                                    We reached out to them once again to ask about the practical details of
                                    their workflow. Thanks to that, we{" "}
                                    <span className="font-bold">used eggNOG </span>
                                    for functional gene annotation in duckweeds, opted for a{" "}
                                    <span className="font-bold">modification of their ratiometric approach </span>
                                    in regulatory part testing and could estimate the timeline for the whole
                                    workflow well. Take a look how we implemented their advice into our{" "}
                                    <a href="#" className="text-[#538b5e] underline hover:text-[#25512b]">
                                        in silico workflow
                                    </a>{" "}
                                    and{" "}
                                    <a href="#" className="text-[#538b5e] underline hover:text-[#25512b]">
                                        promoter testing
                                    </a>
                                    .
                                </p>
                            </div>
                            <div className="flex justify-center">
                                <img
                                    src="https://static.igem.wiki/teams/5642/images/engagement/humanpractices/7-8.webp"
                                    alt="Second photo with iGEM Marburg"
                                    className="rounded-2xl max-w-md"
                                />
                            </div>
                        </div>
                    </div>
                </ExpandablePill>

                {/* Dr. Eric Yang pill */}
                <ExpandablePill
                    image="https://static.igem.wiki/teams/5642/images/engagement/humanpractices/7-6.webp"
                    name="Dr. Eric Yang"
                    subtitle="University of Missouri"
                    location="Synthetic Biology and Genetic Circuits"
                >
                    {/* Text LEFT, selfie RIGHT */}
                    <div>
                        <p>
                            Although Marburg workflow was very robust and user-friendly, they didn’t have
                            to face the problem of lack of transcriptomes available for one species (read
                            more about that in{" "}
                            <a href="#" className="text-[#538b5e] underline hover:text-[#25512b]">
                                in silico promoter workflow
                            </a>
                            ). Therefore, we had to opt for{" "}
                            <span className="font-bold">orthology analysis </span> – grouping genes across
                            multiple species into groups of ones with similar origin – orthogroups. From
                            there we had to decide on what gene out of the orthogroup should we actually
                            use. <span className="font-bold">And Dr. Yang </span> was very helpful with that.
                        </p>


                        <div className="grid md:grid-cols-2 gap-8 items-center text-lg leading-relaxed">
                            <div className="space-y-6">
                                <p>
                                    He suggested to look only at the{" "}
                                    <span className="font-bold">highest expressings </span>
                                    ones for each species in the orthogroup and then proceed with the workflow from
                                    Marburg. He confirmed the strategy we wanted to pursue.
                                </p>

                                <p>
                                    Dr. Yang also stressed that we should treat this as an{" "}
                                    <span className="font-bold">engineering problem, </span>
                                    as there are not precise workflows established in the promoter discovery.
                                </p>


                            </div>

                            <div className="flex justify-center">
                                <img
                                    src="https://static.igem.wiki/teams/5642/images/engagement/humanpractices/7-4.webp"
                                    alt="Group selfie with Dr. Eric Yang"
                                    className="rounded-2xl max-w-md"
                                />
                            </div>
                        </div>

                        <p>
                            If the promoter works, then great.{" "}
                            <span className="font-bold">We just have to make it work.</span>
                        </p>
                    </div>

                </ExpandablePill>
            </div>

            <div
                className="max-w-6xl mx-auto bg-white text-gray-900 leading-relaxed p-8 font-[Urbanist,sans-serif] space-y-12">
                {/* Dr. Veronika Jedličková */}
                <ExpandablePill
                    image="https://static.igem.wiki/teams/5642/images/engagement/humanpractices/7-9.webp"
                    name="Dr. Veronika Jedličková"
                    subtitle="Central European Institute of Technology"
                    location="Hormonal Crosstalk in Plant Development"
                >
                    <div className="leading-relaxed text-lg space-y-4">
                        <p>
                            <span className="font-bold">Dr. Jedličková</span> was helping us with
                            brainstorming for our first concept. Back at the time, we were
                            considering trying to construct a{" "}
                            <span className="font-bold">synthetic duckweed promoter. </span>
                            She stressed that obtaining and trying out the native ones should be
                            our first priority before attempting for the synthetic one. She also
                            helped us with{" "}
                            <span className="font-bold">
                            designing the qPCR probes and also consulted our CRISPR construct strategy.
                        </span>
                        </p>
                    </div>
                </ExpandablePill>

                {/* Dr. Markéta Šámalová */}
                <ExpandablePill
                    image="https://static.igem.wiki/teams/5642/images/engagement/humanpractices/7-7.webp"
                    name="Dr. Markéta Šámalová"
                    subtitle="Department of Experimental Plant Biology"
                    location="Plant Molecular Biology"
                >
                    <div className="leading-relaxed text-lg space-y-4">
                        <p>
                            We reached out to <span className="font-bold">Dr. Šámalová</span> for
                            help with cloning strategies and the{" "}
                            <span className="font-bold">design of our promoter testing constructs. </span>
                            She was also one of the first people seeing our regeneration assay design
                            and frond transformation strategy. She confirmed it makes sense and
                            skipping calli in the transformation process is a must to make duckweed
                            engineering more user-friendly.
                        </p>
                    </div>
                </ExpandablePill>

                {/* Dr. Petra Procházková Schrumpfová */}
                <ExpandablePill
                    image="https://static.igem.wiki/teams/5642/images/engagement/humanpractices/7-10.webp"
                    name="Dr. Petra Procházková Schrumpfová"
                    subtitle="Chromatin Molecular Complexes Laboratory"
                    location="Plant Developmental Biology"
                >
                    <div className="leading-relaxed text-lg space-y-4">
                        <p>
                            <span className="font-bold">Dr. Schrumpfová</span> addressed our
                            questions about searching for motifs in promoters and we consulted with
                            her the strategy we wanted to employ for comparing the genes across
                            species. We{" "}
                            <span className="font-bold">abandoned the motif search</span> after this
                            consultation as for our purposes it was not suitable.
                        </p>
                    </div>
                </ExpandablePill>
            </div>

        </div>


    );
}
