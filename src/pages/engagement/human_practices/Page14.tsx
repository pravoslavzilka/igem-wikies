import React from "react";
import ExpandablePill from "./ExpandablePill";
import StaticPill from "./StaticPill.tsx";
import A from "../../../A.tsx";

export default function HumanPracticesPage14() {
    return (
        <div className="text-lg">
            <div
                className="max-w-6xl mx-auto bg-white text-gray-900 leading-relaxed p-8 font-[Urbanist,sans-serif] space-y-12">

                {/* Intro paragraph */}
                <p>
                    We continued to speak to a lot of people in the{" "}
                    <A href="#" className="text-[#538b5e] underline hover:text-[#25512b]">
                        biomanufacturing
                    </A>{" "}
                    field. We won’t elaborate too much on every valuable conversation, but here they are.
                </p>

                {/* Sajjad Kamal Shuvro */}
                <ExpandablePill
                    image="https://static.igem.wiki/teams/5642/images/engagement/humanpractices/2/14-2.webp"
                    name="Sajjad Kamal Shuvro"
                    subtitle="CTO in Floatmeal"
                    location="Duckweed for human consumption"
                >
                    <div className="leading-relaxed text-lg space-y-6">
                        <p>
                            We talked about the sterile cultivation of duckweed and possibility of using microbial
                            consortia to enhance duckweed growth.
                        </p>

                        <div className="flex flex-wrap justify-center gap-4">
                            <img
                                src="https://static.igem.wiki/teams/5642/images/engagement/humanpractices/2/14-1.webp"
                                alt="Meeting with Sajjad Kamal Shuvro and Floatmeal team"
                                className="rounded-2xl max-w-full md:max-w-3xl shadow-md"
                            />
                        </div>
                    </div>
                </ExpandablePill>

                {/* Mercedes Diez */}
                <ExpandablePill
                    image="https://static.igem.wiki/teams/5642/images/engagement/humanpractices/2/14-3.webp"
                    name="Mercedes Diez"
                    subtitle="Head of Technical Development at MadeInPlant"
                    location="Plant Biomanufacturing"
                >
                    <div className="leading-relaxed text-lg space-y-6">
                        <p>
                            We discussed how{" "}
                            <span className="font-bold">MadeInPlant</span> is manufacturing vegan antibodies and
                            growth factors in tobacco. They stressed that downstream processing is very expensive and
                            avoiding it with duckweed would be a great advancement of the field.
                        </p>
                    </div>
                </ExpandablePill>

                {/* Final paragraph */}
                <p>
                    We also conducted{" "}
                    <span className="font-bold">discussions with stakeholders</span> who might be interested in using
                    duckweed as a platform for bioproduction – whether those would be{" "}
                    <span className="font-bold">
                    crude proteins, complex therapeutics or small regulatory proteins.
                </span>{" "}
                    These are the people and companies we talked to:
                </p>
            </div>


            <div
                className="max-w-6xl mx-auto bg-white text-gray-900 leading-relaxed p-8 font-[Urbanist,sans-serif] space-y-8">

                <StaticPill
                    image="https://static.igem.wiki/teams/5642/images/engagement/humanpractices/2/14-4.webp"
                    name="Roman Kříž"
                    subtitle="CEO at Bene Meat"
                    location="Cultivated Meat Production"
                />

                <StaticPill
                    image="https://static.igem.wiki/teams/5642/images/engagement/humanpractices/2/14-5.webp"
                    name="Marián Kupčulák"
                    subtitle="CSO at Sensible Biotechnologies"
                    location="mRNA production in cells"
                />

                <StaticPill
                    image="https://static.igem.wiki/teams/5642/images/engagement/humanpractices/2/14-6.webp"
                    name="Miroslav Gašpárek"
                    subtitle="CEO at Sensible Biotechnologies"
                    location="mRNA production in cells"
                />

                <StaticPill
                    image="https://static.igem.wiki/teams/5642/images/engagement/humanpractices/2/14-7.webp"
                    name="Ivan R. Jaubert"
                    subtitle="Director of Entrepreneurship at SynBioBeta"
                    location="Fostering SynBio around the World"
                />

                <StaticPill
                    image="https://static.igem.wiki/teams/5642/images/engagement/humanpractices/2/14-8.webp"
                    name="Marek Atanasčev"
                    subtitle="CEO at Enantis"
                    location="Production of Thermostable Growth Factors"
                />

                <StaticPill
                    image="https://static.igem.wiki/teams/5642/images/engagement/humanpractices/2/14-9.webp"
                    name="Václav Navrátil"
                    subtitle="CEO at DIANA Biotechnologies"
                    location="Ultraspecific Sepsis Diagnostics"
                />

                <StaticPill
                    image="https://static.igem.wiki/teams/5642/images/engagement/humanpractices/2/14-10.webp"
                    name="Kelsey Weimer"
                    subtitle="Strategy & Partnerships at Synonym Bio"
                    location="Scaling Bioproduction Around the World"
                />

                <StaticPill
                    image="https://static.igem.wiki/teams/5642/images/engagement/humanpractices/2/14-11.webp"
                    name="Nicolas Krink"
                    subtitle="CEO at BioHalo"
                    location="Developing Biohalogens"
                />

            </div>
        </div>
    );
}
