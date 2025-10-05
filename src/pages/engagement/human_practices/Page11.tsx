import React from "react";
import ExpandablePill from "./ExpandablePill";
import ExpandablePillNoImage from "./ExpandablePillNoImage";

export default function HumanPracticesPage11() {
    return (
        <div>
            <div
                className="max-w-6xl mx-auto bg-white text-gray-900 leading-relaxed p-8 font-[Urbanist,sans-serif] space-y-10">

                {/* Intro paragraphs */}
                <p>
                    Hearing the farmers’ opinions and feedback was of the utter most value to us. However, we
                    weren’t the only ones asking question. Every farmer was interested in the same thing:{" "}
                    <em>‘What nutritional values does duckweed have?’</em> We knew these from literature, but
                    were mainly interested in protein. Duckweed is 30–50% protein (20, 21), that’s it, right?
                    Well, not quite.
                </p>

                <p>
                    We were told that for duckweed to be a good choice for livestock protein feed, it has to
                    meet more criteria than only being high in protein. That’s why we reached out to{" "}
                    <span className="font-bold">Dr. Ludmila Křížová</span> — a specialist on cow feed composition.
                </p>

                {/* Expandable pill */}
                <ExpandablePillNoImage
                    name="Dr. Ludmila Křížová"
                    subtitle="Department of Biochemistry"
                    location="Cow feed digestibility and processing"
                >
                    <div className="leading-relaxed text-lg space-y-6">
                        <p>
                            <span className="font-bold">Dr. Křížová</span> specializes in different parts of livestock
                            feed and their processing in the animal digestive system.
                        </p>

                        <p>
                            We presented our solution to her (apparently she was not used to someone talking so
                            enthusiastically about cow feed) and asked for a feedback. She immediately warned us
                            about{" "}
                            <span className="font-bold">pesticides and hormones</span> in animal manure that might get
                            sucked by duckweed and return into animal body.
                        </p>

                        <p>
                            Most importantly, we need to know how is duckweed digested in the tract. Some compounds
                            that might be present (e.g. oxalic acid or tannins) can <span
                            className="font-bold">harm</span> animals.
                        </p>

                        <p>
                            Besides adding protein supplements into feed, minerals and other micronutrients are also
                            an important part of the feed and delivering them in duckweed might be very interesting
                            solution to another problem in livestock nutrition.
                        </p>

                        <p>
                            If we want to get to know what role can duckweed play in animal feed, we should contact
                            animal nutritional specialists as they are the ones preparing the right mix, and working
                            directly with feed.
                        </p>
                    </div>
                </ExpandablePillNoImage>
                <p className="text-lg leading-relaxed font-[Urbanist,sans-serif]">
                    After hearing these insights, we realized we know even less about how feed works than we initially
                    thought. To address the <span className="font-bold">digestibility problem</span>, we contacted{" "}
                    <span className="font-bold">Milan Nahalka</span> nutritional experts on animal feed in Slovakia.
                    We also had to address the content of antinutrients in duckweed, as they might negatively
                    interfere with animal digestion. That’s where our fellow{" "}
                    <span className="font-bold">iGEMers from Prague</span> came in and helped us by conducting a{" "}
                    <span className="font-bold">metabolomic analysis</span> of all our duckweed clones. What a help!
                    Read more about our collaboration in{" "}
                    <a
                        href="#"
                        className="text-green-700 underline hover:text-green-900"
                    >
                        Building CzechoSlovak SynBio Community from the Bottom Up
                    </a>
                    !
                </p>
            </div>


            <div
                className="max-w-6xl mx-auto bg-white text-gray-900 leading-relaxed p-8 font-[Urbanist,sans-serif] space-y-12">
                {/* Intro paragraph */}
                <p>
                    Amazing! Seems like duckweed is a suitable feed... A suitable feed to replace unsustainable
                    soybean... To save that Brazil Cerrado savanna... Eager to tell the conservationist world about
                    our “the planet saving solution” we went to talk with{" "}
                    <span className="font-bold">Prof. Carlos Klink</span> - the founder of the Cerrado Initiative!
                </p>

                {/* Expandable pill for Prof. Carlos Klink */}
                <ExpandablePill
                    image="https://static.igem.wiki/teams/5642/images/engagement/humanpractices/2/11-2.webp"
                    name="prof. Carlos Klink"
                    subtitle="Professor at Dept. of Ecology at the University of Brasília"
                    location="Founder of Cerrado Initiative"
                >
                    <div className="leading-relaxed text-lg space-y-6">
                        <p>
                            We enthusiastically presented our solution to Professor Klink, explaining how soybean “is
                            bad” and how its cultivation has been destroying the ecosystems of his homeland, the
                            Cerrado. We also described how duckweed could replace it. Professor Klink liked our
                            concept quite a lot, but he told us that the context of soybean cultivation and Cerrado
                            deforestation in Brazil is much more complex than it appears from the outside.
                        </p>

                        <ul className="list-disc pl-6 space-y-3">
                            <li>
                                Fifty years ago, there were almost no soybean plantations in the Cerrado. However, the
                                region was also much poorer and its infrastructure underdeveloped. Soybean
                                substantially boosted the Cerrado’s economy and helped local farmers achieve more
                                prosperous lives.
                            </li>

                            <li>
                                Unfortunately, soybean expansion has cost the region a significant portion of its
                                natural Cerrado biome. Approximately{" "}
                                <span className="font-bold">15 million hectares</span> of tropical savannas have been
                                destroyed, which not only threatens biodiversity but also starts to affect local
                                farmers — as essential ecosystem services, such as abundant water and healthy soils,
                                are becoming harder to find.
                            </li>

                            <li>
                                He explained that Brazilian farmers, the government, and conservationists are
                                increasingly aware of this issue and are working together to make agriculture in
                                Brazil both sustainable and profitable. People in the Cerrado region now understand
                                that cutting down more trees is not only illegal but also counterproductive in the
                                long run, as the country cannot sustain such environmental pressure.
                            </li>

                            <li>
                                That is why stakeholders in the Cerrado are shifting toward increasing yields — getting
                                more from the land they already have. They are experimenting with different
                                fertilizers and irrigation systems, often testing biofertilizers, biopesticides, and
                                novel crop breeds, including genetically modified varieties, to make the most of
                                their existing farmland.
                            </li>

                            <li>
                                This shift is reflected in the emergence of new Brazilian companies focused on
                                developing and producing biofertilizers and biopesticides, such as{" "}
                                <span className="font-bold">SoluBio, Symbiomics,</span> and others.
                            </li>

                            <li>
                                Professor Klink and the Cerrado Initiative play a crucial role in connecting local
                                stakeholders and shaping a long-term strategy for sustainable development. He believes
                                that Brazil — and especially the Cerrado — will{" "}
                                <span className="font-bold">double its agricultural productivity</span> thanks to the
                                adoption of new technologies.
                            </li>

                            <li>
                                In conclusion, he emphasized that soybean remains important for the people of the
                                Cerrado, but they are very open to cultivating{" "}
                                <span className="font-bold">new and better protein sources,</span> such as duckweed —
                                powered by the technology that iGEM Brno is developing.
                            </li>
                        </ul>

                        <div className="flex justify-center">
                            <img
                                src="https://static.igem.wiki/teams/5642/images/engagement/humanpractices/2/11-1.webp"
                                alt="Dr. Tučková and Mr. Doležal"
                                className="rounded-2xl max-w-full"
                            />
                        </div>
                    </div>
                </ExpandablePill>
            </div>
        </div>
    );
}
