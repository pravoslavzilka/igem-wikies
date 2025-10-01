import React from "react";
import ExpandablePill from "./ExpandablePill";

export default function HumanPracticesPage3() {
    return (
        <div>
            <div className="max-w-6xl mx-auto bg-white text-gray-900 leading-relaxed p-8 font-[Urbanist,sans-serif]">
                {/* Intro paragraph */}
                <p className="mb-6 text-lg">
                    We learnt from our previous mistake of diving too deep into scientific concept
                    before knowing if it is feasible and we{" "}
                    <span className="font-bold">sought to consult</span> someone that has more
                    experience than just 2 weeks of literature research. We reached out to{" "}
                    <span className="font-bold">Karen McDonald and Tressa Smalley.</span>
                </p>

                {/* Karen McDonald pill */}
                <ExpandablePill
                    image="https://static.igem.wiki/teams/5642/images/engagement/humanpractices/face.webp"
                    name="Dr. Karen McDonald"
                    subtitle="Professor at UC Davis"
                    location="Recombinant protein production in plants"
                >
                    <div className="leading-relaxed text-lg space-y-6">
                        <p>
                            <span className="font-bold">Karen and Tressa</span>, a Ph.D. candidate
                            in Karen’s research group, are one of a few people that tried to{" "}
                            <span className="font-bold">genetically engineer duckweed chloroplasts</span>[5].
                            They recognize the huge potential of having multiple gene copies in one cell
                            and in the fastest growing plant in the world,{" "}
                            <span className="font-bold">producing the recombinant protein.</span>
                        </p>

                        <p>
                            They both discouraged us from trying{" "}
                            <span className="font-bold">protoplast isolation</span> and
                            PEG-mediated transformation as they achieved{" "}
                            <span className="font-bold">very low efficiencies</span> and the whole
                            process is extremely laborious.
                        </p>

                        {/* Two-column layout with image beside paragraph */}
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div className="space-y-4">
                                <p>
                                    Both ladies emphasized that, if we want to try to transform chloroplasts,
                                    we need to achieve{" "}
                                    <span className="font-bold">homoplasmy</span> – state where all the
                                    chloroplasts in the organism are transgenic[6].
                                </p>
                            </div>
                            <div className="flex justify-center">
                                <img
                                    src="https://static.igem.wiki/teams/5642/images/engagement/humanpractices/face.webp"
                                    alt="Zoom call with Karen McDonald and Tressa Smalley"
                                    className="rounded-2xl max-w-md"
                                />
                            </div>
                        </div>

                        <p>
                            Currently, they focus on{" "}
                            <span className="font-bold">perfecting the stable nuclear transformation</span>
                            of duckweed but they mentioned that it is very long (reported 6 months to
                            obtain stable transformants). This is the{" "}
                            <span className="font-bold">first time</span> we were placed in front of
                            the real bottleneck of duckweed research and application, but at the time,
                            we didn’t pay too much attention. We wanted to do something pretty wild and
                            chloroplasts were very compelling.
                        </p>
                    </div>
                </ExpandablePill>

                {/* Closing paragraph */}
                <p className="mt-8 text-lg">
                    This didn’t sound well but we needed more inputs. After sneaking in to the{" "}
                    <span className="font-bold">Applied Synthetic Biology in Europe (ASBE)</span>
                    conference and hearing the fascinating talk of professor{" "}
                    <span className="font-bold">Tobias Erb</span> about metabolic engineering of
                    photosynthesis, we contacted him to help us. He passed us to the fantastic{" "}
                    <span className="font-bold">René Inckemann</span> with whom we discussed how we
                    can hack the duckweed chloroplast.
                </p>
            </div>

            <div className="max-w-6xl mx-auto bg-white text-gray-900 leading-relaxed p-8 font-[Urbanist,sans-serif]">
                {/* René Inckemann pill */}
                <ExpandablePill
                    image="https://static.igem.wiki/teams/5642/images/engagement/humanpractices/face.webp"
                    name="Dr. René Inckemann"
                    subtitle="Postdoctoral researcher at Stanford University"
                    location="Plant synthetic biology and chloroplast engineering"
                >
                    <div className="leading-relaxed text-lg space-y-6">
                        <p>
                            <span className="font-bold">René</span> has been involved with iGEM
                            for years now and his work on chloroplast engineering[7] made him
                            a great person to talk to.
                        </p>

                        <p>
                            He confirmed that achieving{" "}
                            <span className="font-bold">homoplasmy is an absolute must</span>
                            with chloroplast transformation and quoted:{" "}
                            <span className="italic">
                                “Getting the DNA inside the chloroplast is not hard. Killing those without it is.”
                            </span>
                        </p>

                        {/* Two-column layout with text + image */}
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div className="space-y-4">
                                <p>
                                    We discussed, whether we can{" "}
                                    <span className="font-bold">knock-out an essential gene</span>
                                    in duckweed nucleus (e.g. arginine synthase) and co-deliver it
                                    with the gene of interest into chloroplast via particle
                                    bombardment transformation.
                                </p>
                            </div>
                            <div className="flex justify-center">
                                <img
                                    src="https://static.igem.wiki/teams/5642/images/engagement/humanpractices/face.webp"
                                    alt="Zoom call with René Inckemann"
                                    className="rounded-2xl max-w-md"
                                />
                            </div>
                        </div>

                        <p>
                            We were also warned about{" "}
                            <span className="font-bold">high resistance of plant monocot species</span>
                            against multiple antibiotics and were advised to try out several of those
                            to achieve effective selection. René encouraged us to try to play with
                            different methods of gene delivery but also suggested that this kind of
                            project might be{" "}
                            <span className="font-bold">well over iGEM team limits.</span>
                        </p>
                    </div>
                </ExpandablePill>

                {/* Closing paragraph */}
                <p className="mt-8 text-lg">
                    After hearing all these inputs, we started to{" "}
                    <span className="font-bold">rethink</span> for the first time. So far, we were
                    taking the{" "}
                    <span className="font-bold">duckweed engineering for granted.</span> We knew
                    that as a plant, it will take longer than with bacteria, but only{" "}
                    <span className="font-bold">after this call</span> we thought it might be wise
                    to actually talk to someone who{" "}
                    <span className="font-bold">works with duckweed on daily basis.</span> Still
                    excited about chloroplasts, we reached out to{" "}
                    <span className="font-bold">Julia</span> to learn more about basics of duckweed
                    engineering.
                </p>
            </div>


            <div className="max-w-6xl mx-auto bg-white text-gray-900 leading-relaxed p-8 font-[Urbanist,sans-serif]">
                {/* Julia-Eva Fortmueller pill */}
                <ExpandablePill
                    image="https://static.igem.wiki/teams/5642/images/engagement/humanpractices/face.webp"
                    name="Julia-Eva Fortmueller"
                    subtitle="Ph.D. candidate at Weizmann Institute of Science"
                    location="Duckweed genetic engineering and protein production"
                >
                    <div className="leading-relaxed text-lg space-y-6">
                        {/* Two-column layout with text + image */}
                        <div className="grid md:grid-cols-2 gap-8 items-start">
                            {/* Left text */}
                            <div className="space-y-4">
                                <p>
                                    Julia does fascinating stuff with duckweed – she produces{" "}
                                    <span className="font-bold">spider silk proteins</span> in it
                                    and tries to make them secreted into the medium.
                                </p>

                                <p>
                                    We learnt so much from her, mainly that we should:
                                </p>

                                <ul className="list-disc list-inside space-y-2">
                                    <li>use <span className="font-bold">monocot promoters</span> for all constructs</li>
                                    <li>use <span className="font-bold">fluorescence reporters</span> (avoid using GUS
                                        reporter assay)
                                    </li>
                                    <li>
                                        start preparing calli as early as possible, because{" "}
                                        <span className="font-bold">
                                            stable transformation of duckweed takes a very long time
                                        </span>
                                    </li>
                                    <li>
                                        always <span className="font-bold">check constructs transiently</span>
                                        before trying the stable transformation via callus
                                    </li>
                                </ul>
                            </div>

                            {/* Right image */}
                            <div className="flex justify-center">
                                <img
                                    src="https://static.igem.wiki/teams/5642/images/engagement/humanpractices/face.webp"
                                    alt="Meeting with Julia-Eva Fortmueller"
                                    className="rounded-2xl max-w-md"
                                />
                            </div>
                        </div>

                        <p>
                            We incorporated everything we learnt into our{" "}
                            <a
                                href="/duckweed-protocols"
                                className="text-green-700 underline hover:text-green-900"
                            >
                                duckweed protocols
                            </a>{" "}
                            after we optimized it ourselves, so anyone can make use of this knowledge now.
                        </p>

                        <p>
                            Julia also confirmed that duckweed is becoming{" "}
                            <span className="font-bold">more and more recognized</span> in the biotech
                            and research community and might become the next plant biology chassis. She
                            was generally quite <span
                            className="font-bold">sceptical about chloroplast transformation</span>
                            and advised us to <span className="font-bold">focus on the nuclear one. </span>
                        </p>
                    </div>
                </ExpandablePill>

                {/* Closing paragraphs */}
                <div className="mt-8 text-lg space-y-6">
                    <p>
                        From this point on, we started to{" "}
                        <span className="font-bold">take the nuclear transformation problem seriously. </span>
                        We realized that doing the chloroplast transformation in duckweed is not gonna be
                        easy with the nuclear one being so terrible. But again, looking at the project
                        from the ‘problem first’ perspective, we started thinking about{" "}
                        <span className="font-bold">ways other than chloroplast engineering</span> that
                        could lead to duckweed biomass increase.
                    </p>

                    <p>
                        But before we dived deep into more SynBio concepts, we managed to land a call
                        with <span className="font-bold">master duckweed cultivators from <a
                                href="https://www.plantiblefoods.com/"
                                className="text-green-700 underline hover:text-green-900"
                            >
                                Plantible Foods
                            </a>{" "}. </span>
                        Despite the fact that we were not focusing on the right genetic bottleneck of duckweed
                        application from the start, we knew what is the technical one we needed to address –{" "}
                        <span className="font-bold">
                            scattered and inconsistent data about duckweed biomass yields and the extreme laboriousness
                            of duckweed cultivation at scale.
                        </span>{" "}
                        We hoped that Django could help us navigate better in this area.
                    </p>
                </div>
            </div>
        </div>
    );
}
