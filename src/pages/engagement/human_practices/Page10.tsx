import React from "react";
import ExpandablePill from "./ExpandablePill";

export default function HumanPracticesPage10() {
    return (
        <div>

            <div className="max-w-6xl mx-auto bg-white text-gray-900 leading-relaxed p-8 font-[Urbanist,sans-serif]">
                {/* Intro */}
                <p className="mb-6 text-lg">
                    Hearing the farmers’ opinions and feedback was the most valuable for us. However, the
                    question that was among the most frequent ones that we were asked about our solution
                    was <span className="italic">‘What nutritional values duckweed has?’</span>. We knew these
                    from literature, but were mainly interested in protein. Duckweed is 30–50% protein (20,
                    21), that’s it, right? Well, not quite.
                </p>
                <p className="mb-6 text-lg">
                    We were told that to be a good choice for livestock protein feed, duckweed has to meet
                    much more criteria than only being high in protein. That’s why we reached out to{" "}
                    <span className="font-bold">Dr. Ludmila Křížová</span> – specialist on cow feed composition.
                </p>

                {/* Dr. Křížová pill */}
                <ExpandablePill
                    image="https://static.igem.wiki/teams/5642/images/engagement/humanpractices/face.webp"
                    name="Dr. Ludmila Křížová"
                    subtitle="Department of Biochemistry"
                    location="Cow feed digestibility and processing"
                    defaultOpen={false}
                >
                    <div className="leading-relaxed text-lg space-y-6">
                        <p>
                            <span className="font-bold">Dr. Křížová</span> specializes in different parts of
                            livestock feed and their processing in the animal digestive system.
                        </p>
                        <p>
                            We presented our solution to her (apparently she was not used to someone talking
                            so enthusiastically about cow feed) and asked for feedback. She immediately warned
                            us about <span className="font-bold">pesticides and hormones</span> in animal
                            manure that might get sucked by duckweed and return into animal body.
                        </p>
                        <p>
                            Most importantly, we need to know how is duckweed digested in the tract. Some
                            compounds that might be present (e.g. oxalic acid or tannins) can{" "}
                            <span className="font-bold">harm</span> animals.
                        </p>
                        <p>
                            Besides adding protein supplements into feed, minerals and other micronutrients
                            are also an important addition into the feed and delivering them in duckweed might
                            be very interesting solution to another problem in livestock nutrition.
                        </p>
                        <p>
                            If we want to get to know which role can duckweed play in animal feed, we should
                            contact animal nutritional specialists as they are the ones working directly with
                            feed, preparing the right mix.
                        </p>
                    </div>
                </ExpandablePill>

                {/* Outro */}
                <p className="mt-8 text-lg">
                    After hearing these insights, we realized we know even less about how feed works than we
                    thought. To address the digestibility problem, we contacted XY (Zdenkin chlap) that is
                    among the best nutritional experts on animal feed in Slovakia. We also had to address the
                    content of antinutrients in duckweed, as they might negatively interfere with animal
                    digestion. That’s where our fellow iGEMers from Prague came in and helped us by conducting
                    metabolomic analysis of all our duckweed clones. What a help! Read more in{" "}
                    <a href="#community" className="underline text-green-700">
                        Building CzechoSlovak SynBio Community from the Ground Up
                    </a>
                    .
                </p>
            </div>


            <div className="max-w-6xl mx-auto bg-white text-gray-900 leading-relaxed p-8 font-[Urbanist,sans-serif]">
                {/* Lead-in from previous section */}
                <p className="mb-6 text-lg">
                    After hearing these insights, we realized we know even less about how feed works than we
                    thought. To address the digestibility problem, we contacted XY{" "}
                    <span className="font-bold">(Zdenkin chlap)</span> that is among the best nutritional
                    experts on animal feed in Slovakia. We also had to address the content of antinutrients in
                    duckweed, as they might negatively interfere with animal digestion. That’s where our fellow{" "}
                    <span className="font-bold">iGEMers from Prague</span> came in and helped us by conducting
                    metabolomic analysis of all our duckweed clones. What a help! Read more in{" "}
                    <a href="#community" className="underline text-green-700">
                        Building CzechoSlovak SynBio Community from the Ground Up
                    </a>
                    .
                </p>

                {/* Zdenkin chlap pill */}
                <ExpandablePill
                    image="https://static.igem.wiki/teams/5642/images/engagement/humanpractices/face.webp"
                    name="Zdenkin chlap"
                    subtitle="Nutritional expert on animal feed"
                    location="Slovakia"
                    defaultOpen={false}
                >
                    <div className="leading-relaxed text-lg space-y-6">
                        <p>
                            TODO
                        </p>
                    </div>
                </ExpandablePill>

                {/* Closing paragraph */}
                <p className="mt-8 text-lg">
                    Amazing! So seems like duckweed is a suitable feed…
                </p>
                <p className="text-lg">
                    Now we can start to think about the thing that hackers don’t really like most of the times:
                    <span className="font-bold"> Regulations.</span> But the truth is, that we will never be
                    able to apply SynBio in the real world if we will not do our best to meet the safety and
                    regulations standards.
                </p>
            </div>


            <div className="max-w-6xl mx-auto bg-white text-gray-900 leading-relaxed p-8 font-[Urbanist,sans-serif]">
                <section id="safety">

                    {/* Section title */}
                    <h2
                        className="font-bold mb-6"
                        style={{fontFamily: "Space Grotesk, sans-serif", fontSize: "2rem"}}
                    >
                        Safety & Regulations
                    </h2>
                </section>

                {/* Intro paragraph */}
                <p className="mb-6 text-lg">
                    When we pivoted our project to making{" "}
                    <a href="#programmable" className="underline text-green-700">
                        duckweed programmable
                    </a>
                    , we wanted to hear an opinion of the person that{" "}
                    <a href="#concept" className="underline text-green-700">
                        destroyed our initial concept
                    </a>
                    . You know, just to be sure that won’t happen again. The one and only,{" "}
                    <span className="font-bold">professor Andrew D. Hanson</span>. Fortunately, he liked making
                    duckweed programmable! And we got a very valuable advice from him on how to ensure biosafe
                    operation of our vertical{" "}
                    <a href="#cultivator" className="underline text-green-700">
                        CULTIVATORs
                    </a>{" "}
                    around the world, even at farms.
                </p>

                {/* Hanson pill */}
                <ExpandablePill
                    image="https://static.igem.wiki/teams/5642/images/engagement/humanpractices/face.webp"
                    name="Dr. Andrew D. Hanson"
                    subtitle="Professor at University of Florida"
                    location="Biochemistry and plant metabolism"
                >
                    <div className="leading-relaxed text-lg space-y-6">
                        <p>
                            Since duckweed is growing extremely fast, it{" "}
                            <span className="font-bold">is considered invasive</span> in some regions.
                            If we would create a strain enhanced for even better growth rates or would
                            somehow thrive in its unnatural conditions, its escape might{" "}
                            <span className="font-bold">
                                    pose a significant threat for ecosystems.
                                </span>
                        </p>
                        {/* Two-column layout with text and zoom call */}
                        <div className="grid md:grid-cols-2 gap-8 items-start">
                            <div className="space-y-4">

                                <p>
                                    If we want to <span className="font-bold">apply duckweed in the real world</span>
                                    , we need to address this. <span className="font-bold">Professor Hanson</span>{" "}
                                    suggested a very clever way on how to do it. The most user-friendly solution
                                    would be making duckweed{" "}
                                    <span className="font-bold">auxotrophic</span> to some cheap compound that can
                                    be easily added to the medium. For instance thiamine. You can take a look at
                                    our{" "}
                                    <a href="#safety" className="underline text-green-700">
                                        Safety
                                    </a>{" "}
                                    page to see, how we integrated this feedback into our project and are making
                                    <a href="#crispr" className="underline text-green-700">
                                        {" "}
                                        duckweed biosafe with our CRISPR construct
                                    </a>
                                    !
                                </p>
                            </div>

                            {/* Zoom call image */}
                            <div className="flex justify-center">
                                <img
                                    src="https://static.igem.wiki/teams/5642/images/engagement/humanpractices/face.webp"
                                    alt="Zoom call with Prof. Andrew Hanson"
                                    className="rounded-2xl max-w-md"
                                />
                            </div>
                        </div>

                        {/* Tribute box */}
                        <div className="bg-gray-100 border border-gray-300 rounded-2xl p-6 text-center mt-6">
                            <p className="italic text-lg mb-4">
                                Sadly, professor Hanson passed away a few weeks ago. <br/>
                                As we are writing this page, we are realizing how great of an impact his initial
                                feedback had on us and our project.
                            </p>
                            <p className="font-bold">
                                ‘Build something that will make a difference’. <br/>
                                That’s what he told us. And we are trying our best to make him proud.
                            </p>
                        </div>
                    </div>
                </ExpandablePill>
            </div>
        </div>
    );
}
