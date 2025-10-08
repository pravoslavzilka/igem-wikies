import React from "react";
import ExpandablePill from "./ExpandablePill";
import ExpandablePillNoCircle from "./ExpandablePillNoCircle.tsx";
import A from "../../../A.tsx";

export default function HumanPracticesPage12() {
    return (
        <div>

            (
            <div
                className="max-w-6xl mx-auto bg-white text-lg text-gray-900 leading-relaxed p-8 font-[Urbanist,sans-serif] space-y-12">

                {/* Section Title */}
                <h2
                    className="font-bold"
                    style={{
                        fontFamily: "Space Grotesk, sans-serif",
                        fontSize: window.innerWidth < 768 ? "1.6rem" : "2rem",
                    }}
                    id="safety"
                >
                    Safety & Regulations
                </h2>

                {/* Intro paragraph */}
                <p>
                    When we pivoted our project to making{" "}
                    <A href="#" className="text-[#538b5e] underline hover:text-[#25512b]">
                        duckweed programmable
                    </A>
                    , we wanted to hear an opinion of the person that{" "}
                    <span className="font-bold">destroyed our initial concept.</span> You know, just to be sure that
                    it won’t happen again. The one and only,{" "}
                    <span className="font-bold">professor Andrew D. Hanson.</span> Fortunately, he liked making
                    duckweed programmable! And we got a very valuable advice from him on how to ensure biosafe
                    operation of our vertical{" "}
                    <A href="#" className="text-[#538b5e] underline hover:text-[#25512b]">
                        CULTIVATORs
                    </A>{" "}
                    around the world, even at farms.
                </p>

                {/* Dr. Hanson Pill */}
                <ExpandablePill
                    image="https://static.igem.wiki/teams/5642/images/engagement/humanpractices/2/12-1.webp"
                    name="Dr. Andrew D. Hanson"
                    subtitle="professor at University of Florida"
                    location="biochemistry and plant metabolism"
                    defaultOpen={true}
                >
                    <div className="leading-relaxed text-lg space-y-6">
                        <p>
                            Since duckweed is growing extremely fast, it is{" "}
                            <span className="font-bold">considered invasive</span> in some regions. If we would
                            create a strain enhanced for even better growth rates or would somehow thrive in its
                            unnatural conditions, its escape might{" "}
                            <span className="font-bold">pose a significant threat for ecosystems.</span>
                        </p>

                        <div className="grid md:grid-cols-2 gap-8 items-start">
                            {/* Left column: text + link */}
                            <div className="space-y-6">
                                <p>
                                    If we want to apply duckweed in the real world, we need to address this.{" "}
                                    <span className="font-bold">Professor Hanson</span> suggested a very clever way
                                    to do it. The most user-friendly solution would be making duckweed{" "}
                                    <span className="font-bold">auxotrophic</span> to some cheap compound that can be
                                    easily added to the medium. For instance{" "}
                                    <span className="font-bold">thiamine.</span>
                                </p>
                                <p>
                                    You can take a look at our{" "}
                                    <A
                                        href="#"
                                        className="text-[#538b5e] underline hover:text-[#25512b]"
                                    >
                                        Safety
                                    </A>{" "}
                                    page to see, how we integrated this feedback into our project and are making{" "}
                                    <A
                                        href="#"
                                        className="text-[#538b5e] underline hover:text-[#25512b]"
                                    >
                                        duckweed biosafe
                                    </A>{" "}
                                    with our{" "}
                                    <A
                                        href="#"
                                        className="text-[#538b5e] underline hover:text-[#25512b]"
                                    >
                                        CRISPR construct!
                                    </A>
                                </p>
                            </div>

                            {/* Right column: image + gray condolence box */}
                            <div className="space-y-6">
                                <div className="flex justify-center">
                                    <img
                                        src="https://static.igem.wiki/teams/5642/images/engagement/humanpractices/2/12-2.webp"
                                        alt="Professor Hanson online meeting"
                                        className="rounded-2xl max-w-full"
                                    />
                                </div>

                                <div className="bg-gray-800 text-white rounded-2xl p-6 shadow-md">
                                    <p>
                                        Sadly, professor Hanson passed away few weeks ago (as of October 1st 2025).
                                    </p>
                                    <p>
                                        As we are writing this page, we are realizing how great of an impact his
                                        initial feedback had on us and our project.
                                    </p>
                                    <p>
                                        ‘Build something that will make a difference’. <br/>
                                        That’s what he told us. And we are trying our best to make him proud.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </ExpandablePill>

                {/* Follow-up paragraph */}
                <div className="space-y-6 text-lg">
                    <p>
                        By this point we knew that: 1) farmers need our solution, 2) we might be able to deliver
                        them the next protein crop and 3) we can make our duckweed safe to use anywhere in the
                        world.
                    </p>

                    <p>
                        Wait, anywhere? Let’s circle back to the regulations. To understand them better, we
                        contacted{" "}
                        <span className="font-bold">
                        Hana Jiřáková, the Head of the Department of Genetically Modified Organisms at the
                        Ministry of the Environment of the Czech Republic,
                    </span>{" "}
                        to find out whether Czech and European farmers could benefit from our solution and, if so,
                        when and what needs to be done to get it to them.
                    </p>
                </div>
            </div>


            <ExpandablePillNoCircle
                image="https://static.igem.wiki/teams/5642/images/engagement/humanpractices/2/ministry.webp"
                name="Ing. Hana Jiřáková, Ph.D"
                subtitle="Head of the Department of Genetically Modified Organisms"
                location="at the Ministry of the Environment of the Czech Republic"
                defaultOpen={true}
            >
                <div className="leading-relaxed text-lg space-y-6">
                    <p>
                        During a consultation with{" "}
                        <span className="font-bold">Dr. Hana Jiřáková</span>, we discussed the legislation governing
                        genetically modified organisms (GMO) in Czech Republic and Europe. This legislation is divided
                        according to the level of handling of GMOs.
                    </p>

                    <ul className="list-disc pl-6 space-y-2">
                        <li>
                            <span className="font-bold">Directive 2009/41/EC</span> relates to contained use, i.e.,
                            research and experiments in laboratories where GMOs do not come into contact with the
                            environment.
                        </li>
                        <li>
                            <span className="font-bold">Directive 2001/18/EC</span> governs the deliberate release of
                            GMOs into the environment, for example in field trials, and represents the intermediate
                            stage between research and placing on the market. Decisions under this directive are issued
                            by the <span className="font-bold">Ministry of the Environment.</span>
                        </li>
                        <li>
                            Placing a GMO crop on the market is governed by{" "}
                            <span className="font-bold">Regulation (EC) No 1829/2003</span>, which establishes a very
                            strict and costly approval process at the European Union level under the oversight of{" "}
                            <span className="font-bold">EFSA</span> and the{" "}
                            <span className="font-bold">European Commission.</span> So far, approvals for cultivation
                            have been granted only to Monsanto (maize MON810, cultivated mainly in Spain and to a lesser
                            extent in Portugal) and{" "}
                            <span className="font-bold">
                            BASF (Amflora potatoes, whose approval was annulled in 2013).
                        </span>
                        </li>
                    </ul>

                    <p className="font-bold">Hope for a better tomorrow?</p>

                    <p>
                        We also discussed the new draft EU legislation on plants produced by{" "}
                        <span className="font-bold">new genomic techniques (NGT),</span> such as targeted mutagenesis
                        by <span className="font-bold">CRISPR.</span> Since{" "}
                        <span className="font-bold">2023</span>, an EU-level legislative process has been underway to
                        exempt some new gene techniques from certain requirements of{" "}
                        <span className="font-bold">Directive 2001/18/EC</span> on deliberate release of GMOs into the
                        environment. The proposal divides plants into two categories:
                    </p>

                    <ul className="list-disc pl-6 space-y-2">
                        <li>
                            <span className="font-bold">NGT1</span> – includes plants that could also arise naturally
                            or through conventional breeding and therefore would not be subject to the full GMO rules,
                            only to mandatory seed labeling.
                        </li>
                        <li>
                            <span className="font-bold">NGT2</span> – includes plants with more extensive genetic
                            changes that would continue to be regulated as GMOs.
                        </li>
                    </ul>

                    <p>
                        <span className="font-bold">NGT1 plants will not be permitted in organic agriculture</span>, and
                        national rules will likely be adjusted after adoption by the EU through new Union regulations.
                    </p>

                    <p>
                        A <span className="italic">trilogue</span> is currently taking place — intensive, non-public
                        negotiations between the{" "}
                        <span className="font-bold">European Commission</span>, which submitted the proposal, and
                        the{" "}
                        <span className="font-bold">European Parliament and the Council of the EU,</span> which will
                        give the legislation its final form. Dr. Jiřáková told us that there is currently no agreement
                        on some points and she cannot estimate when approval will occur — it could be a few weeks or as
                        long as six months. From approval to implementation may still take several years.
                    </p>

                    {/* Last section with image and text in columns */}
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        {/* Left column: text */}
                        <div className="space-y-4">
                            <p className="font-bold">What does this mean for us?</p>

                            <p>
                                Dr. Jiřáková concluded that pursuing market authorisation in the EU{" "}
                                <span className="font-bold">
                                would be a lengthy and demanding process with, in practical terms, little chance
                                of success.
                            </span>{" "}
                                Our prospects would improve dramatically, however, if we focused solely on imports,
                                since the{" "}
                                <span className="font-bold">
                                European Union is largely not self-sufficient in feed.
                            </span>
                            </p>
                        </div>

                        {/* Right column: image */}
                        <div className="flex justify-center">
                            <img
                                src="https://static.igem.wiki/teams/5642/images/engagement/humanpractices/2/jirakova-full-2.webp"
                                alt="Dr. Jiřáková during consultation"
                                className="rounded-2xl max-w-full shadow-md"
                            />
                        </div>
                    </div>
                </div>
            </ExpandablePillNoCircle>


            <div
                className="max-w-6xl mx-auto bg-white text-gray-900 leading-relaxed p-8 font-[Urbanist,sans-serif] space-y-6 text-lg">

                <p>
                    Well…that’s not exactly what we wanted to hear. But we expected something like this. It will
                    probably not be anytime soon that our farmers will use the engineered duckweed on their farms.
                    But we believe this will change soon! One part of this process is higher public education about
                    GMOs and that is exactly what we tried to do with our{" "}
                    <A
                        href="#"
                        className="text-[#538b5e] underline hover:text-[#25512b]"
                    >
                        Outreach
                    </A>{" "}
                    activities.
                </p>

                <p>
                    Thankfully, by that time, duckweed can be used for a lot of amazing things other than animal feed.
                    Read all about it in{" "}
                    <A
                        href="#"
                        className="text-[#538b5e] underline hover:text-[#25512b]"
                    >
                        Why duckweed!
                    </A>{" "}
                    And if you want to know how we investigated what it takes to make duckweed the{" "}
                    <span className="font-bold">next biotechnology platform</span> for all kinds of applications
                    discussed on that page, continue reading here…
                </p>
            </div>
        </div>
    );
}
