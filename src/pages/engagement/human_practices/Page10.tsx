import React from "react";
import ExpandableDualPill from "./ExpandableDualPill";
import ExpandablePillNoCircle from "./ExpandablePillNoCircle.tsx";

export default function HumanPracticesPage10() {
    return (
        <div>
            <div
                className="max-w-6xl mx-auto bg-white text-gray-900 leading-relaxed p-8 font-[Urbanist,sans-serif] space-y-12">

                <h2
                    className="font-bold"
                    style={{
                        fontFamily: "Space Grotesk, sans-serif",
                        fontSize: window.innerWidth < 768 ? "1.6rem" : "2rem",
                    }}
                >
                    How do they manage slurry?
                </h2>

                <p className="text-lg">
                    In terms of slurry management, <span className="font-bold">52.5%</span> of the surveyed farms spread
                    slurry on their fields in <span className="font-bold">liquid form.</span> Twenty percent of the
                    farms, all practicing organic farming, <span className="font-bold italic">do not collect slurry at all.</span> Fifteen
                    percent process slurry in a <span className="font-bold">biogas plant.</span> The remaining 12.5% use
                    deep bedding, disposing of the slurry as <span className="font-bold">solid manure,</span> which they
                    then use as fertilizer.
                </p>

                <p className="text-lg">
                    We also talked with the farmers about the reasons behind their choices. They consider the <span
                    className="font-bold">origin of the feed</span> — which is one of the reasons why <span
                    className="font-bold">rapeseed dominates,</span> as they either grow it themselves or source it from
                    local producers. However, at the end of the day, <span className="font-bold">price remains the deciding factor.</span>
                </p>

                <p className="text-lg">
                    Calling and talking with 40 farmers was important for us, but we also wanted to understand the
                    concrete details regarding protein feedstock and manure handling. That is why we visited the “most
                    knowledgeable farm” here in the South Moravian region — the{" "}
                    <span className="font-bold italic">
                    Žabčice University Agricultural Farm,
                </span>{" "}
                    operated under the Faculty of Agronomy at Mendel University.
                </p>

                <p className="text-lg">
                    This farm combines deep academic knowledge about animal feeding and management with real, day-to-day
                    farming experience. It strives to maximize outputs, as it is mostly a self-financing enterprise.
                </p>
            </div>


            <ExpandableDualPill
                leftName="Ing. Kristýna Tučková, PhD."
                leftSubtitle="Head of Animal Production"
                rightName="Ing. Jakub Doležal"
                rightSubtitle="Head of Farm"
                centerImage="https://static.igem.wiki/teams/5642/images/engagement/humanpractices/2/10-1.webp"
                defaultOpen={false}
            >
                <div className="leading-relaxed text-lg space-y-6">
                    <p>
                        We explained our concept to <span className="font-bold">Dr. Tučková</span> and{" "}
                        <span className="font-bold">Mr. Doležal.</span> They liked it and shared with us details
                        about how farmers make decisions regarding protein feed and manure management, as well as
                        some interesting figures.
                    </p>

                    <p className="font-bold underline">
                        So, how is it with protein, soybeans and cows?
                    </p>

                    <ul className="list-disc pl-6 space-y-3">
                        <li>
                            Like most of the farmers we interviewed, they explained that{" "}
                            <span className="font-bold">
                            soybean is the most suitable supplemental protein source for cows,
                        </span>{" "}
                            especially for dairy cows. But why is that?
                        </li>

                        <li>
                            During the year, an average dairy cow produces about{" "}
                            <span className="font-bold">10,000 liters of milk</span> - if it receives enough
                            high-quality protein. Without sufficient protein, milk production drops to{" "}
                            <span className="font-bold">6000 - 8000 liters per year,</span> significantly reducing
                            the farm’s profitability.
                        </li>

                        <li>
                            How do farmers know whether their cows are getting enough protein? They feed them{" "}
                            <span className="font-bold">forage,</span> which consists of{" "}
                            <span className="font-bold">dry hay and wet silage.</span> Wet silage is made from
                            various crops depending on the farm (e.g., maize, grasses, etc.) and usually includes a{" "}
                            <span className="font-bold">
                            nitrogen-fixing crop such as a legume - most often alfalfa.
                        </span>{" "}
                            Farmers measure the{" "}
                            <span className="font-bold">amount of free nitrogen</span> in their silage. The
                            difference between this value and the nitrogen required to maintain high milk yields
                            indicates how much{" "}
                            <span className="font-bold">additional protein</span> must be supplied through crushed
                            grain feed from <span className="font-bold">soybeans or rapeseed.</span>
                        </li>

                        <li>
                            Soybeans provide a{" "}
                            <span className="font-bold">
                            more nutritionally suitable source of protein
                        </span>{" "}
                            than rapeseed, which is acceptable but less optimal. Most importantly,{" "}
                            <span className="font-bold">soybeans are more expensive</span> - which is why some
                            farmers, particularly those raising beef cattle rather than dairy cows, use{" "}
                            <span className="font-bold">rapeseed meal</span> instead. Unfortunately, although{" "}
                            <span className="font-bold">soymeal</span> is the best protein source, it is also the{" "}
                            <span className="font-bold">most costly.</span>
                        </li>

                        <li>
                            So, why can’t farmers simply grow their own soybeans, as they do alfalfa? In the{" "}
                            <span className="font-bold">Czech Republic,</span> soybean yields would average only
                            about <span className="font-bold">2 tons per hectare,</span> compared to rapeseed
                            yields of <span className="font-bold">4 tons per hectare</span> or maize, which also
                            sells at a higher price. In contrast, farmers with more nutritionally demanding{" "}
                            <span className="font-bold">dairy cows</span> use a purchased external herd batch that
                            can be stored as meal.
                        </li>
                    </ul>

                    {/* --- EXTENSION: two-column layout --- */}
                    <div className="grid md:grid-cols-2 gap-8 items-start">
                        {/* Left column */}
                        <div className="space-y-6">
                            <p>
                                “Every farm is trying to be self-sufficient in terms of feedstock, but with the
                                current protein demand of our cows, it’s just not possible,”{" "}
                                <span className="font-bold">Mr. Doležal</span> told us. “A ton of soybean meal
                                costs about <span className="font-bold">8,300 CZK</span> at the end of the harvest
                                season but can rise to <span className="font-bold">16,000 CZK</span> by the end of
                                winter.” <span className="font-bold">Dr. Tučková</span> added.
                            </p>

                            <p className="font-bold underline">So, how is it with manure?</p>

                            <ul className="list-disc pl-6 space-y-3">
                                <li>
                                    Both agreed that manure is a{" "}
                                    <span className="font-bold">burdensome aspect</span> of every cattle farm.
                                    Even though manure is used as a{" "}
                                    <span className="font-bold">
                                    liquid nitrogen fertilizer, it cannot be applied for about four months each year
                                </span>{" "}
                                    (during winter). During the months when it can be applied, it must be spread in{" "}
                                    <span className="font-bold">limited amounts</span> to avoid{" "}
                                    <span className="font-bold">over fertilizing the fields</span> and causing{" "}
                                    <span className="font-bold">nitrogen runoff.</span> And during the growing
                                    season, manure <span
                                    className="font-bold">cannot be applied to most crops,</span>{" "}
                                    as it can be toxic to plants.
                                </li>

                                <li>
                                    Each cow produces about{" "}
                                    <span className="font-bold">30 liters of liquid manure per day,</span> resulting
                                    in a huge amount of waste that cannot be used immediately after production.
                                </li>

                                <li>
                                    What does all this mean? Manure - especially{" "}
                                    <span className="font-bold">liquid manure</span> - must be stored in{" "}
                                    <span className="font-bold">special tanks,</span> which are{" "}
                                    <span className="font-bold">very expensive</span> to build and maintain. This
                                    additional cost adds to all the others, making farms{" "}
                                    <span className="font-bold">
                                    less profitable and less able to keep prices competitive
                                </span>{" "}
                                    with imported milk and meat from countries where such strict environmental
                                    regulations do not exist.
                                </li>
                            </ul>

                            <p>
                                A <span className="font-bold">radical technological solution</span> is needed!
                            </p>
                        </div>

                        {/* Right column (text + image) */}
                        <div className="space-y-6">
                            <div className="flex justify-center">
                                <img
                                    src="https://static.igem.wiki/teams/5642/images/engagement/humanpractices/2/hp-1.webp"
                                    alt="Dr. Tučková and Mr. Doležal"
                                    className="rounded-2xl max-w-full"
                                />
                            </div>

                            <p>
                                Both <span className="font-bold">Dr. Tučková</span> and{" "}
                                <span className="font-bold">Mr. Doležal</span> expressed great interest in
                                duckweed and the technology that iGEM Brno is developing, suggesting that the{" "}
                                <span className="font-bold italic">
                                Žabčice University Agricultural Farm
                            </span>{" "}
                                could perhaps cooperate in testing this technology in a real farm context in the
                                future.
                            </p>

                            <p>
                                However, they also expressed concern that our{" "}
                                <span className="font-bold">NitroDuckweed</span> would be{" "}
                                <span className="font-bold">genetically modified</span> - not because they are
                                afraid of it, but because it would involve many{" "}
                                <span className="font-bold">regulatory hurdles</span> for them.
                            </p>

                            <p>
                                “It’s a pity we don’t have a regulatory landscape and public attitude toward GMOs
                                similar to that in the USA,” <span className="font-bold">Mr. Neužil</span> noted.
                            </p>

                            <p className="italic">
                                Read more about the regulatory perspective in the following section.
                            </p>
                        </div>
                    </div>
                </div>
            </ExpandableDualPill>


            <div
                className="max-w-6xl mx-auto bg-white text-gray-900 leading-relaxed p-8 font-[Urbanist,sans-serif] space-y-12">

                <p>
                    The <span className="font-bold">Podpoľanie region</span> has long been one of Slovakia’s
                    traditional centers of cattle breeding. The rearing of{" "}
                    <span className="font-bold">Slovak Spotted Cattle</span> here is more than just an agricultural
                    activity — it’s an{" "}
                    <span className="font-bold italic">
                    essential part of the region’s cultural heritage and identity.
                </span>{" "}
                    We visited one of the local farms -{" "}
                    <span className="font-bold">The Agricultural Cooperative in Kriváň</span>, to see how this proud
                    tradition has evolved over time.
                </p>

                <ExpandablePillNoCircle
                    image="https://static.igem.wiki/teams/5642/images/engagement/humanpractices/2/krivan.webp"
                    name="Milan Belko"
                    subtitle="Head of Farm"
                >
                    <div className="leading-relaxed text-lg space-y-6">
                        <p>
                            <span className="font-bold">The Agricultural Cooperative in Kriváň</span> was founded in
                            1959, continuing the long-standing farming traditions of local breeders who joined
                            forces under one cooperative. Back then, feeding and milking were{" "}
                            <span className="font-bold">done entirely by hand.</span> Today, the farm is{" "}
                            <span className="font-bold">fully automated.</span> We spent nearly two hours on site,
                            observing the entire feeding process from start to finish.
                        </p>

                        <p className="font-bold">How do they feed their cows?</p>
                        <p>
                            Feeding takes place <span className="font-bold">twice a day</span> — in the morning and in
                            the afternoon. In the afternoon, workers check how much feed is left and adjust the
                            second portion accordingly. The cows are fed a balanced mix of{" "}
                            <span className="font-bold">hay, silage, rapeseed, and vitamins.</span> Everything is
                            blended and distributed with a{" "}
                            <span className="font-bold">feed mixer and spreader,</span> with tailored rations for
                            each category of cattle.
                        </p>

                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div className="space-y-6">
                                <p className="font-bold">Is there space for further automation?</p>
                                <p>
                                    We spoke with the farm’s manager,{" "}
                                    <span className="font-bold">Mr. Milan Belko,</span> about how automation has helped
                                    reduce operating costs. We also introduced him to our project.
                                </p>

                                <p>
                                    “I’m open to further innovations,” he said. “We have plenty of slurry, and I can
                                    imagine mixing duckweed into the feed instead of rapeseed.”
                                </p>

                                <p className="font-bold">What about GMOs?</p>
                                <p>
                                    When asked about his stance on GMOs beyond European legislation, Mr. Belko
                                    responded pragmatically: “Legislation is one thing, economics another. Of course,
                                    I’m in favor if it helps reduce costs.”
                                </p>
                            </div>

                            <div className="flex justify-center">
                                <img
                                    src="https://static.igem.wiki/teams/5642/images/engagement/humanpractices/2/farm.webp"
                                    alt="Agricultural Cooperative in Kriváň"
                                    className="rounded-2xl max-w-md"
                                />
                            </div>
                        </div>
                    </div>
                </ExpandablePillNoCircle>
            </div>
        </div>
    );
}
