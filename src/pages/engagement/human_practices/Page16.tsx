import React from "react";
import ExpandablePill from "./ExpandablePill";
import ExpandablePillNoImage from "./ExpandablePillNoImage.tsx";
import A from "../../../A.tsx";

export default function HumanPracticesPage16() {
    return (
        <div className="text-lg">
            <div
                className="max-w-6xl mx-auto bg-white text-gray-900 leading-relaxed p-8 font-[Urbanist,sans-serif] space-y-12">

                {/* iGEM Marburg 2024 */}
                <ExpandablePill
                    image="https://static.igem.wiki/teams/5642/images/engagement/humanpractices/2/16-1.webp"
                    name="iGEM Marburg 2024"
                >
                    <div className="leading-relaxed text-lg space-y-6">
                        <p>
                            Besides consulting our promoter design and{" "}
                            <A
                                href="#"
                                className="text-[#538b5e] underline hover:text-[#25512b]"
                            >
                                in silico workflow
                            </A>
                            , we talked with iGEM Marburg 2024 about good wiki practices,
                            prioritizing our work and team performance. This sentence resonates
                            with us the most:{" "}
                            <em>
                                ‘You will be glad there are your teammates around you in the
                                middle of the night before the Wiki freeze.’
                            </em>{" "}
                            And they were right.
                        </p>
                    </div>
                </ExpandablePill>

                {/* iGEM Plant Synthetic Biology Meetup */}
                <ExpandablePillNoImage
                    name="iGEM Plant Synthetic Biology Meetup"
                >
                    <div className="leading-relaxed text-lg space-y-6">
                        <p>
                            We had a chance to present our work on the iGEM Plant Meetup and
                            receive feedback from the{" "}
                            <span className="font-bold">Plant Engineering Committee.</span> Based
                            on that, we tried to construct our pages as user-friendly as possible
                            and came up with the whole concept of the{" "}
                            <A
                                href="#"
                                className="text-[#538b5e] underline hover:text-[#25512b]"
                            >
                                programmable duckweed
                            </A>{" "}
                            page, so that anyone can benefit from our work and build upon it.
                        </p>

                        {/* Embedded image */}
                        <div className="flex justify-center">
                            <img
                                src="https://static.igem.wiki/teams/5642/images/engagement/humanpractices/2/16-2.webp"
                                alt="iGEM Plant Synthetic Biology Meetup presentation"
                                className="rounded-2xl shadow-md max-w-2xl"
                            />
                        </div>
                    </div>
                </ExpandablePillNoImage>
            </div>


            <div
                className="max-w-6xl mx-auto bg-white text-gray-900 leading-relaxed p-8 font-[Urbanist,sans-serif] space-y-10">

                {/* Section title */}
                <h2
                    className="font-bold"
                    style={{
                        fontFamily: "Space Grotesk, sans-serif",
                        fontSize: window.innerWidth < 768 ? "1.6rem" : "2rem",
                    }}
                    id="czsk-community"
                >
                    Building the CzechoSlovak SynBio Community from the Bottom Up
                </h2>

                {/* Intro paragraph */}
                <p className="text-lg">
                    <span className="font-bold">Synthetic biology</span> is not the most popular field in our
                    region. Mostly because people don’t know it exists at all! However, there are great
                    initiatives addressing this issue, for instance{" "}
                    <A
                        href="#"
                        className="text-[#538b5e] underline hover:text-[#25512b]"
                    >
                        Czech SynBio Node
                    </A>{" "}
                    founded by our PI{" "}
                    <span className="font-bold">Pavel Dvořák</span>. We also came up with activities in
                    order to help tried to help, and you can read more about it in{" "}
                    <A
                        href="#"
                        className="text-[#538b5e] underline hover:text-[#25512b]"
                    >
                        Outreach
                    </A>
                    .
                </p>

                {/* Paragraph about Czech iGEM teams */}
                <p className="text-lg">
                    However, the thing that we are the most proud of are the{" "}
                    <span className="font-bold">two iGEM Teams from Czechia</span> competing this year,
                    with a significant number of Slovaks who took part in forming them. And how did the
                    second team start? We were there…
                </p>

                {/* First image + text block */}
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    {/* Left text box */}
                    <div className="p-6 text-lg">
                        <p>
                            We were{" "}
                            <span className="font-bold">invited to pitch iGEM at Charles University</span>{" "}
                            after our success at last year’s Jamboree. Apparently, we did a good job as
                            couple of people who attended this pitch{" "}
                            <span className="font-bold">started the iGEM team</span>, for the first time in
                            Prague. Since then, we took part in three meetups together and shared our
                            experience. <span className="font-bold">They even helped us</span> by attempting{" "}
                            <A
                                href="#"
                                className="text-[#538b5e] underline hover:text-[#25512b]"
                            >
                                metabolomics analysis
                            </A>{" "}
                            on our duckweeds to evaluate their potential as animal feed, though the results could{" "}
                            not be obtained in the end.
                        </p>
                    </div>

                    {/* Right image */}
                    <div className="flex justify-center">
                        <img
                            src="https://static.igem.wiki/teams/5642/images/engagement/humanpractices/2/16-3.webp"
                            alt="iGEM Charles University team"
                            className="rounded-2xl max-w-full md:max-w-sm shadow-md"
                        />
                    </div>
                </div>

                {/* Second row with group image and text */}
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    {/* Left: group photo */}
                    <div className="flex justify-center">
                        <img
                            src="https://static.igem.wiki/teams/5642/images/engagement/humanpractices/2/16-4.webp"
                            alt="iGEM team presentation at Běstvina"
                            className="rounded-2xl max-w-full md:max-w-md shadow-md"
                        />
                    </div>

                    {/* Right: text */}
                    <div className="space-y-6 text-lg">
                        <p>
                            Besides that, we pitched iGEM together at{" "}
                            <span className="font-bold">Běstvina</span> to{" "}
                            <span className="font-bold">motivate young Czech biologists</span> to not only
                            become doctors, but also biology engineers.
                        </p>

                        <p>
                            Similarly, we headed to the{" "}
                            <span className="font-bold">Slovak biology olympiad</span> gathering and
                            attempted the same. And who knows, maybe we will witness the first Slovak iGEM
                            team emerge.
                        </p>
                    </div>
                </div>

                {/* Green banner footer */}
                <div className="text-white text-center rounded-2xl py-8 px-8 shadow-md text-2xl"
                     style={{backgroundColor: '#6ca033'}}>
                    <p className="text-lg font-[Urbanist,sans-serif] leading-relaxed">
                        You have seen how we integrated all these conversions, encounters and experiences
                        into our project. There is still much more to learn from the real world and we
                        won’t stop confronting it
                    </p>
                    <p
                        className="text-2xl font-bold mt-3"
                        style={{fontFamily: "Space Grotesk, sans-serif"}}
                    >
                        on our journey to <br/> making plants truly scalable.
                    </p>
                </div>

            </div>
        </div>
    );
}
