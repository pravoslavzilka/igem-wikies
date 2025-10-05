import React from "react";
import StaticPill from "./StaticPill.tsx";
import ExpandableDoublePill from "./ExpandableDoublePill.tsx";

export default function HumanPracticesPage15() {
    return (
        <div>
            <div
                className="max-w-6xl mx-auto bg-white text-gray-900 leading-relaxed p-8 font-[Urbanist,sans-serif] space-y-8">

                <StaticPill
                    image="https://static.igem.wiki/teams/5642/images/engagement/humanpractices/2/15-1.webp"
                    name="Nikolay Dobrev"
                    subtitle="CEO at Data Powered Therapeutics"
                    location="Protein Design and Lab Automation"
                />

                <StaticPill
                    image="https://static.igem.wiki/teams/5642/images/engagement/humanpractices/2/15-2.webp"
                    name="Elliot Roth"
                    subtitle="BioPunk Community Lab"
                    location="Solving Basic Needs Using Biotechnology"
                />

                <StaticPill
                    image="https://static.igem.wiki/teams/5642/images/engagement/humanpractices/2/15-3.webp"
                    name="Patrick Grossman"
                    subtitle="CEO at Invitris"
                    location="In Vitro Technologies for Bioengineering"
                />

                <StaticPill
                    image="https://static.igem.wiki/teams/5642/images/engagement/humanpractices/2/15-4.webp"
                    name="Amine Kamen"
                    subtitle="professor at McGill University"
                    location="Adeno-Associated Viral Vectors"
                />

                <StaticPill
                    image="https://static.igem.wiki/teams/5642/images/engagement/humanpractices/2/15-5.webp"
                    name="Radoslav Janoštiak"
                    subtitle="group leader at BIOCEV"
                    location="Molecular Oncology"
                />

                {/* Paragraph after pills */}
                <div className="text-lg space-y-6">
                    <p>
                        We also discussed how can duckweed, as a next biotechnology platform, be brought to market with
                        investors from{" "}
                        <span className="font-bold">Kaya VC, ZAKA VC, Tensor Ventures, i&i fund,</span> and{" "}
                        <span className="font-bold">Czech Founders VC.</span> We now know, what people need and are
                        developing tools to make exactly that.
                    </p>
                </div>

                {/* Green banner */}
                <div className="bg-green-700 text-white text-center rounded-2xl py-6 px-8 shadow-md">
                    <p className="text-lg font-semibold">
                        Come and see our special live stage talk at Grand Jamboree to learn what we are up to!
                    </p>
                    <p className="text-xl font-bold mt-2">
                        From iGEM Start-Up to iGEM Team and Back: The Story & Future of NitroDuck
                    </p>
                </div>
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
                    id="excellence"
                >
                    Excellence in iGEM
                </h2>

                <p>
                    When we do something, we always try to do it the best way we can. And that is also true for iGEM.
                    That’s why the first thing when beginning with our iGEM project, besides searching for a problem,
                    was contacting the previous iGEMers who knew how to do it well. The first ones we talked to were
                    Baru and Matúš, who worked in the same lab as we were about to.
                </p>

                {/* Baru & Matúš */}
                <ExpandableDoublePill
                    leftImage="https://static.igem.wiki/teams/5642/images/engagement/humanpractices/2/15-6.webp"
                    rightImage="https://static.igem.wiki/teams/5642/images/engagement/humanpractices/2/15-7.webp"
                    title="Baru Jankovičová and Matúš Pešta"
                    subtitle="iGEM Brno 2021"
                >
                    <div className="gap-8 items-start leading-relaxed text-lg space-y-6">

                        <p>
                            <span className="font-bold">Baru</span> was a student leader of the two previous iGEM
                            teams
                            from Brno in 2020 and 2021, respectively. <span
                            className="font-bold">Matúš</span> joined
                            the moment team as a student and was its core. We received their views on how to make
                            the most
                            of the iGEM experience and discussed practical details that we have been dealing with
                            the lab
                            access, <span className="font-bold">fundraising and team communication.</span>
                        </p>
                        <div className="grid md:grid-cols-2 gap-8 items-start leading-relaxed text-lg">
                            {/* Left: text */}
                            <div className="space-y-6">

                                <p>
                                    Both Baru and Matúš have kept supporting us throughout our whole iGEM journey
                                    scientifically,
                                    materially (sorry about all the “borrowed” tubes) and emotionally.
                                </p>
                            </div>

                            {/* Right: image */}
                            <div className="flex justify-center">
                                <img
                                    src="https://static.igem.wiki/teams/5642/images/engagement/humanpractices/2/15-8.webp"
                                    alt="Baru Jankovičová and Matúš Pešta"
                                    className="rounded-2xl max-w-full md:max-w-md shadow-md"
                                />
                            </div>
                        </div>
                    </div>

                </ExpandableDoublePill>

                {/* Nina & Marta */}
                <ExpandableDoublePill
                    leftImage="https://static.igem.wiki/teams/5642/images/engagement/humanpractices/2/15-10.webp"
                    rightImage="https://static.igem.wiki/teams/5642/images/engagement/humanpractices/2/15-9.webp"
                    title="Nina Kurowska and Marta Luterek"
                    subtitle="iGEM Krakow 2024"
                >
                    <div className="leading-relaxed text-lg space-y-6">
                        <p>
                            As we attended the last year’s Jamboree, we not only made use of it in terms of pushing{" "}
                            <span className="font-bold">NitroDuck</span> concept further but also to gain knowledge from
                            the
                            best teams. Even before we knew that they took the first Runner Up, we had almost three
                            hour{" "}
                            <span className="font-bold">iGEM masterclass</span> session with the team leaders from{" "}
                            <span className="font-bold">iGEM Krakow</span> – Nina and Marta. And this conversation, in
                            mixed
                            English, Polish and Slovak if we may add, was one of the most important for us in forming
                            our iGEM
                            team.
                        </p>
                        <p>
                            This discussion touched <span className="font-bold">iGEM experience</span> from all points
                            of view –
                            team formation, team roles, project idea, fundraising, practical small tips and much more.
                            The most
                            important was the feedback on our initial recruiting process and the people we want to work
                            with.
                            Thanks to this, we managed to build this fantastic team. We returned to Nina and Marta again
                            for
                            consultations about our videos and strategy for the storytelling. We chose our special
                            prizes based
                            on their advice and adjusted the wiki content.
                        </p>
                    </div>
                </ExpandableDoublePill>
            </div>
        </div>
    );
}
