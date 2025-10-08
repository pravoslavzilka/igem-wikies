import React from "react";
import ExpandablePill from "./ExpandablePill";
import A from "../../../A.tsx";

export default function HumanPracticesPage11() {
    return (
        <div>
            <div
                className="max-w-6xl mx-auto text-lg bg-white text-gray-900 leading-relaxed p-8 font-[Urbanist,sans-serif] space-y-10">

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
                <ExpandablePill
                    name="Dr. Ludmila Křížová"
                    subtitle="Department of Biochemistry"
                    location="Cow feed digestibility and processing"
                    image="https://static.igem.wiki/teams/5642/images/toolbox/toolbox/krizova.webp"
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
                </ExpandablePill>
                <p className="text-lg leading-relaxed font-[Urbanist,sans-serif]">
                    After hearing these insights, we realized we know even less about how feed works than we initially
                    thought. To address the <span className="font-bold">digestibility problem</span>, we contacted{" "}
                    <span className="font-bold">Milan Nahalka</span> nutritional experts on animal feed in Slovakia.
                    We also had to address the content of antinutrients in duckweed, as they might negatively
                    interfere with animal digestion. That’s where our fellow{" "}
                    <span className="font-bold">iGEMers from Prague</span> came in and helped us by conducting a{" "}
                    <span className="font-bold">metabolomic analysis</span> of all our duckweed clones. What a help!
                    Read more about our collaboration in{" "}
                    <A
                        href="/human-practices#czsk-community"
                        className="text-[#538b5e] underline hover:text-[#25512b]"
                    >
                        Building CzechoSlovak SynBio Community from the Bottom Up
                    </A>
                    !
                </p>
            </div>

            <ExpandablePill
                name="Milan Nahalka"
                subtitle="SIGI Trade"
                location="Animal feed nutrition"
                image="https://static.igem.wiki/teams/5642/images/toolbox/toolbox/sigi.webp"
            >
                <div className="leading-relaxed font-[Urbanist,sans-serif] text-lg space-y-6">
                    <p>
                        Mr. Nahalka collaborates with several farms in eastern Slovakia, for which he{" "}
                        <span className="font-bold">tailors feed rations individually.</span>
                    </p>

                    <p>
                        During our first phone call we introduced him to the superplant duckweed. He{" "}
                        <span className="font-bold">had not heard of using duckweed in animal feed</span>{" "}
                        before, but its high protein content motivated him to learn more.
                    </p>

                    <p>
                        We agreed that, based on the literature, we would prepare documentation on{" "}
                        <span className="font-bold">duckweed’s biochemical composition</span> so he could
                        assess its <span className="font-bold">digestibility</span> and suggest specific
                        ways to include it in a <span className="font-bold">feed ration</span>.
                    </p>

                    <p>
                        Literature data made Mr. Nahalka even more enthusiastic about duckweed: the
                        combination of <span className="font-bold">macro- and micronutrients</span> is{" "}
                        ideal for cattle, and the fact that including it in the diet can{" "}
                        <span className="font-bold">reduce methane production</span> was taken as the
                        cherry on top.<sup>**</sup>
                    </p>

                    <p>
                        However, to determine the exact composition of a feed mix in which duckweed would
                        serve as the primary protein source, he wants to{" "}
                        <span className="font-bold">
            analyze the composition of duckweed himself
          </span>{" "}
                        and use the results directly in the{" "}
                        <span className="font-bold">feed-formulation software</span> he uses. We will
                        provide the duckweed sample for analysis.
                    </p>

                    <p>
                        As usual, the discussion then turned to price. Mr. Nahalka was clear: “If you can
                        reach a price comparable to or better than soy,{" "}
                        <span className="font-bold italic">
            I believe duckweed is the future of protein feed.
          </span>
                        ”
                    </p>

                    {/* Notes and footnotes */}
                    <p className="text-gray-600 text-base mt-6">
                        *The data in the tables come from the analysis of{" "}
                        <em>Spirodela polyrrhiza</em> (21).
                    </p>

                    <p className="text-gray-900 ">
                        Supplementation with <em>Wolffia globosa</em> powder (DWP) at a level of 4% of
                        the substrate dry matter represents a promising strategy to{" "}
                        <span className="font-bold">
            improve rumen fermentation, enhance nutrient digestibility,
          </span>{" "}
                        and effectively{" "}
                        <span className="font-bold">
            reduce methanogen populations and methane emissions
          </span>{" "}
                        under in vitro conditions (22).
                    </p>


                    {/* Two-column table layout */}
                    <div className="grid md:grid-cols-2 gap-8  text-gray-900">
                        {/* Column 1 */}
                        <div className="space-y-8">

                            <div className="overflow-x-auto">
                                <table className="w-full border border-gray-300 rounded-lg text-sm">
                                    <caption className="text-center font-semibold mb-2 p-2">
                                        Table 2. Amino acid composition of greater duckweed (<em>Spirodela
                                        polyrrhiza</em>), g/kg DM
                                    </caption>
                                    <tbody>
                                    <tr>
                                        <td>Histidine (HIS)</td>
                                        <td>15.6</td>
                                    </tr>
                                    <tr>
                                        <td>Threonine (THR)</td>
                                        <td>28.9</td>
                                    </tr>
                                    <tr>
                                        <td>Arginine (ARG)</td>
                                        <td>34.8</td>
                                    </tr>
                                    <tr>
                                        <td>Tyrosine (TYR)</td>
                                        <td>22.8</td>
                                    </tr>
                                    <tr>
                                        <td>Valine (VAL)</td>
                                        <td>29.1</td>
                                    </tr>
                                    <tr>
                                        <td>Leucine (LEU)</td>
                                        <td>35.3</td>
                                    </tr>
                                    <tr>
                                        <td>Isoleucine (ILE)</td>
                                        <td>23.9</td>
                                    </tr>
                                    <tr>
                                        <td>Methionine (MET)</td>
                                        <td>12.7</td>
                                    </tr>
                                    <tr>
                                        <td>Lysine (LYS)</td>
                                        <td>35.9</td>
                                    </tr>
                                    <tr>
                                        <td>Total EAA</td>
                                        <td>238.9</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Column 2 */}
                        <div className="overflow-x-auto">
                            <div className="overflow-x-auto">
                                <table className="w-full border border-gray-300 rounded-lg text-sm">
                                    <caption className="text-center font-semibold mb-2 p-2">
                                        Table 1. Main composition of greater duckweed (<em>Spirodela polyrrhiza</em>), %
                                        dry weight
                                    </caption>
                                    <tbody>
                                    <tr>
                                        <td>Dry matter, DM</td>
                                        <td>6.6</td>
                                    </tr>
                                    <tr>
                                        <td>Organic matter</td>
                                        <td>82.1</td>
                                    </tr>
                                    <tr>
                                        <td>Crude protein</td>
                                        <td>31.3</td>
                                    </tr>
                                    <tr>
                                        <td>Crude fiber</td>
                                        <td>5.7</td>
                                    </tr>
                                    <tr>
                                        <td>Crude ash</td>
                                        <td>17.9</td>
                                    </tr>
                                    <tr>
                                        <td>Crude fat</td>
                                        <td>2.5</td>
                                    </tr>
                                    <tr>
                                        <td>NDF</td>
                                        <td>52.9</td>
                                    </tr>
                                    <tr>
                                        <td>ADF</td>
                                        <td>21.1</td>
                                    </tr>
                                    <tr>
                                        <td>Starch</td>
                                        <td>7.8</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>

                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8  text-gray-900 items-center">
                        <div className="overflow-x-auto">
                            <p className="text-gray-900 ">
                                The duckweed powder (DWP) showed a rich content of{" "}
                                <span className="font-bold">bioactive compounds</span>, indicating its potential
                                as a functional feed ingredient. The analysis revealed that DWP contained
                                significant amounts of{" "}
                                <span className="font-bold">
            total phenolic compounds (TPC)
          </span>{" "}
                                — 56.13 mg GAE/g DE,{" "}
                                <span className="font-bold">total flavonoids (TFC)</span> — 11.64 mg QE/g DE, and{" "}
                                <span className="font-bold">condensed tannins (TCT)</span> — 11.33 mg CE/g DE
                                (22).
                            </p>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full border border-gray-300 rounded-lg text-sm">
                                <caption className="text-center font-semibold mb-2 p-2">
                                    Table 3. Macro- and micronutrients (g/100 g crude ash) in greater duckweed (<em>Spirodela
                                    polyrrhiza</em>)
                                </caption>
                                <tbody>
                                <tr>
                                    <td>Calcium</td>
                                    <td>16.3 ± 0.20</td>
                                </tr>
                                <tr>
                                    <td>Magnesium</td>
                                    <td>3.8 ± 0.05</td>
                                </tr>
                                <tr>
                                    <td>Phosphorus</td>
                                    <td>3.6 ± 0.07</td>
                                </tr>
                                <tr>
                                    <td>Sodium</td>
                                    <td>4.9 ± 0.23</td>
                                </tr>
                                <tr>
                                    <td>Copper</td>
                                    <td>0.012</td>
                                </tr>
                                <tr>
                                    <td>Zinc</td>
                                    <td>0.08</td>
                                </tr>
                                <tr>
                                    <td>Iron</td>
                                    <td>0.39</td>
                                </tr>
                                <tr>
                                    <td>Total micronutrients</td>
                                    <td>0.48 ± 0.02</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Final footnote */}
                    <p className="text-gray-600 text-base mt-4">
                        **From conversations with farmers, we know that some milk buyers require the inclusion
                        of 3-nitrooxypropanol (3-NOP) in feed to reduce methane production in the animals’
                        digestive systems.
                    </p>
                </div>
            </ExpandablePill>


            <div
                className="max-w-6xl mx-auto bg-white text-lg text-gray-900 leading-relaxed p-8 font-[Urbanist,sans-serif] space-y-12">
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
                    defaultOpen={true}
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

                <p>
                    We found out what Czechoslovak farmers needed, and we knew that it could be beneficial even for
                    farmers in Brazil. But what had to be done if we truly wanted to bring this technology to life? The
                    genetically engineered, fastest-growing plant on Earth — used for real-world applications? We had to
                    make duckweed not only more productive, but also safe… and possibly compliant with regulations.
                </p>

            </div>
        </div>
    );
}
