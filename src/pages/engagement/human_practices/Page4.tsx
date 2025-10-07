import React from "react";
import ExpandablePill from "./ExpandablePill";

export default function HumanPracticesPage6() {
    return (
        <div>
            <div className="max-w-6xl mx-auto bg-white text-gray-900 leading-relaxed p-8 font-[Urbanist,sans-serif]">
                {/* Django Mangalam pill */}
                <ExpandablePill
                    image="https://static.igem.wiki/teams/5642/images/engagement/humanpractices/4-1.webp"
                    name="Django Mangalam"
                    subtitle="Farmlord at Plantible Foods"
                    location="Duckweed large-scale cultivation"
                >
                    <div className="leading-relaxed text-lg space-y-6">
                        {/* Intro with Zoom call image beside */}
                        <div className="grid md:grid-cols-2 gap-8 items-start">
                            <div className="space-y-4">
                                <p>
                                    <span className="font-bold">Django </span>
                                    greeted us from a greenhouse lab in Eldorado, Texas. We started
                                    discussing duckweed cultivation and soon realized that all of us are
                                    crazy about duckweed – Django justified that with pulling up the
                                    duckweed tattoo on his forehead!
                                </p>
                            </div>
                            <div className="flex justify-center">
                                <img
                                    src="https://static.igem.wiki/teams/5642/images/engagement/humanpractices/4-2.webp"
                                    alt="Zoom call with Django Mangalam"
                                    className="rounded-2xl max-w-md"
                                />
                            </div>
                        </div>

                        {/* Findings list */}
                        <p>These are the most important findings we learnt:</p>
                        <ul className="list-disc list-inside space-y-2">
                            <li>
                                Plantible uses only <span className="font-bold">synthetic fertilizers </span>
                                , they experimented with animal manure but faced challenges securing enough
                                for their operation
                            </li>
                            <li>
                                they are cultivating duckweed in <span className="font-bold">huge ponds </span>
                            </li>
                            <li>
                                getting and sustaining perfect conditions (pH, light intensity, harvesting
                                frequency and ratio…) is <span className="font-bold">really hard at scale </span>
                            </li>
                            <li>
                                Plantible’s final product is Rubi protein – extracted RuBisCO – and they are
                                selling it as an egg white replacement
                            </li>
                            <li>
                                <span className="font-bold">Downstream processing is a huge challenge </span>
                            </li>
                            <li>
                                most of their customers are R&amp;D departments of big companies
                            </li>
                        </ul>

                        {/* Text + Greenhouse photo side by side */}
                        <div className="grid md:grid-cols-2 gap-8 items-start">
                            {/* Greenhouse photo */}
                            <div className="flex justify-center">
                                <img
                                    src="https://static.igem.wiki/teams/5642/images/engagement/humanpractices/4-3.webp"
                                    alt="Plantible greenhouse ponds"
                                    className="rounded-2xl max-w-md"
                                />
                            </div>

                            <div className="space-y-4">
                                <p>
                                    <span className="font-bold">Django stressed to do the calculations </span>
                                    on our vertical system very carefully. We discussed whether they tried to
                                    use <span className="font-bold">genetically enhanced duckweed. </span>
                                    He said that there were some trials to boost RuBisCO content but they
                                    failed. They would be <span className="font-bold">very interested to try out our biomass-boosted duckweed </span>
                                    if we obtain one.
                                </p>

                                <p>
                                    At the end of the call, we even got an excursion around Plantible’s
                                    ponds! You can imagine how motivated we were after that.
                                </p>
                            </div>
                        </div>
                    </div>
                </ExpandablePill>

                {/* Closing paragraph */}
                <p className="mt-8 text-lg">
                    We knew that the <span className="font-bold">duckweed cultivation </span>
                    was going to be a pain. That’s why we dedicated the whole subteam to this quest –
                    our{" "}
                    <span className="font-bold">
                        Cultivation Hustlers
                    </span>
                    . You can read how they perfected the cultivation{" "}
                    <a
                        href="/project/how/cultivator"
                        className="text-[#538b5e] underline hover:text-[#25512b]"
                    >
                        hardware
                    </a>{" "}
                    and{" "}
                    <a
                        href="/project/how/predictor/in-silico-cultivation"
                        className="text-[#538b5e] underline hover:text-[#25512b]"
                    >
                        software
                    </a>{" "}
                    throughout our project that is now available to anyone!
                </p>
            </div>


            <div className="max-w-6xl mx-auto bg-white text-gray-900 leading-relaxed p-8 font-[Urbanist,sans-serif]">
                {/* Intro paragraphs */}
                <p className="mb-6 text-lg">
                    Meanwhile, our <span className="font-bold">Synbio Hackers </span> team was placed
                    into the quest of creating that <span className="font-bold">biomass-boosted duckweed </span>
                    we needed to make the numbers work. We were searching around for different strategies
                    and found one transcriptional factor from grapevine that reportedly increased{" "}
                    <span className="italic">Arabidopsis </span> biomass by 300%! That looked pretty cool!
                </p>

                <p className="mb-6 text-lg">
                    The whole team sat down and <span
                    className="font-bold">researched more than 20 candidate genes </span>
                    that were shown to increase the plant biomass. Out of these, we{" "}
                    <span className="font-bold">chose 4 </span> that we considered worth trying in duckweed
                    based on the type of their effect. You can check them out in the table below:
                </p>

                {/* Table */}
                <div className="overflow-x-auto mb-8">
                    <table className="table-auto border-collapse border border-gray-400 text-left w-full text-lg">
                        <thead className="bg-gray-100">
                        <tr>
                            <th className="border border-gray-400 px-4 py-2">Gene name</th>
                            <th className="border border-gray-400 px-4 py-2">Species of origin</th>
                            <th className="border border-gray-400 px-4 py-2">Effect</th>
                            <th className="border border-gray-400 px-4 py-2">Mechanism</th>
                            <th className="border border-gray-400 px-4 py-2">Source</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td className="border border-gray-400 px-4 py-2">VvCEB1</td>
                            <td className="border border-gray-400 px-4 py-2">
                                grapevine (<span className="italic">Vitis vinifera</span>)
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                                3-fold increase in biomass and leaf number
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                                Transcription factor overexpression lead to increased auxin content
                            </td>
                            <td className="border border-gray-400 px-4 py-2">[8]</td>
                        </tr>
                        <tr className="bg-gray-50">
                            <td className="border border-gray-400 px-4 py-2">AtCOG1</td>
                            <td className="border border-gray-400 px-4 py-2">
                                thale-cress (<span className="italic">Arabidopsis thaliana</span>)
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                                more than 2-fold increase in biomass
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                                Increasing photosynthesis by enhancing the expression of LHC-coding genes
                            </td>
                            <td className="border border-gray-400 px-4 py-2">[9]</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-400 px-4 py-2">AtNLP7</td>
                            <td className="border border-gray-400 px-4 py-2">
                                thale-cress (<span className="italic">Arabidopsis thaliana</span>)
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                                2-fold increase in biomass on high nitrogen media
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                                Transcription factor improves nitrogen uptake and carbon assimilation
                            </td>
                            <td className="border border-gray-400 px-4 py-2">[10]</td>
                        </tr>
                        <tr className="bg-gray-50">
                            <td className="border border-gray-400 px-4 py-2">OsEXPA8</td>
                            <td className="border border-gray-400 px-4 py-2">
                                rice (<span className="italic">Oryza sativa</span>)
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                                Modest increases in leaf number and leaf area
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                                Overexpression of expansin increases cell size
                            </td>
                            <td className="border border-gray-400 px-4 py-2">[11]</td>
                        </tr>
                        </tbody>
                    </table>
                </div>

                {/* Closing paragraphs */}
                <div className="text-lg space-y-6">
                    <p>
                        We set out to try this out and contacted authors of the original papers to
                        send us the parts with these biomass-boosting genes. They either answered
                        negatively or did not answer at all, so{" "}
                        <span className="font-bold">we had to isolate them from genomic DNA. </span>
                        Together with the preparation of media and competent cells, this was our
                        <span className="font-bold"> first iGEM lab endeavour. </span>
                    </p>

                    <p>
                        After multiple PCR optimizations,{" "}
                        <span className="font-bold">we succeeded in isolating OsEXPA8 and AtCOG1, </span>
                        but were not able to clone them inside a vector, most likely due to internal
                        restriction sites we did not expect to be present. Looking back, this taught us a
                        lot about basic lab techniques and{" "}
                        <span className="font-bold">we improved our skills dramatically </span>
                        over several unsuccessful iterations. We were almost ready to order a synthesis
                        of these genes, when our secondary PI{" "}
                        <span className="font-bold">Dr. Karel Říha </span> called us to a meeting with his
                        friend from Vienna that also happens to work on duckweed. This is how we met Arturo.
                    </p>
                </div>
            </div>
            <div className="max-w-6xl mx-auto bg-white text-gray-900 leading-relaxed p-8 font-[Urbanist,sans-serif]">
                {/* Arturo pill */}
                <ExpandablePill
                    image="https://static.igem.wiki/teams/5642/images/engagement/humanpractices/4-4.webp"
                    name="Dr. Arturo Mari-Ordóñez"
                    subtitle="PI at Gregor Mendel Institute Vienna"
                    location="Transposons and gene silencing in duckweed"
                >
                    <div className="leading-relaxed text-lg space-y-6">
                        <p>
                            <span className="font-bold">Arturo </span>
                            studies gene silencing in duckweeds. But because of the lengthy transformations
                            and lack of established reliable protocols, his lab went full on optimizing the
                            workflows for duckweed research on multiple clones.
                        </p>

                        <p>
                            We started with the explanation of our project.
                            <span className="font-bold"> Arturo was thrilled, </span>
                            but had huge amount of very interesting remarks. One’s that
                            <span className="font-bold"> saved us months of work. </span>
                            Let’s dive into them:
                        </p>

                        {/* Two-column layout with bullets + image + text */}
                        <div className="grid md:grid-cols-2 gap-8 items-start">
                            {/* Left column */}
                            <div className="space-y-4">
                                <p>
                                    <span className="font-bold">
                                        Frond-mediated stable transformation{" "}
                                    </span>
                                    (<span className="italic">in planta</span> transformation and
                                    subsequent regeneration into transgenic organism) reported in some
                                    articles [12] does not work at all! (we were relying on these papers
                                    quite heavily). The problems might be that:
                                </p>

                                <ul className="list-disc list-inside space-y-2">
                                    <li>
                                        the T-DNA is <span
                                        className="font-bold">not getting integrated into the genome. </span>
                                        Long-lasting transient expression means that duckweed
                                        (<span className="italic">Spirodela</span>) doesn’t have the typical
                                        RNAi-mediated silencing (read more in Arturo’s paper [13]).
                                    </li>
                                    <li>
                                        calli transformation is <span className="font-bold">huge pain and lasts for too long </span>
                                    </li>
                                </ul>
                            </div>

                            {/* Right column */}
                            <div className="space-y-4">
                                <div className="flex justify-center">
                                    <img
                                        src="https://static.igem.wiki/teams/5642/images/engagement/humanpractices/4-5.webp"
                                        alt="Zoom call with Arturo Mari-Ordóñez"
                                        className="rounded-2xl max-w-md"
                                    />
                                </div>

                                <p>
                                    He also told us that
                                    <span className="font-bold"> some native duckweed promoters </span>
                                    would be a huge help for his research as the
                                    <span className="font-bold"> conventional ones (35S) almost do not work </span>
                                    and maize ubiquitin gives a somehow solid expression. And a fun fact,
                                    they have <span className="font-bold">duckweed that flowers! </span>
                                </p>
                            </div>
                        </div>

                        <p>
                            We agreed that <span className="font-bold">Arturo will send us protocols </span>
                            and we will do a brainstorming session with his lab in Vienna (read more in hacking).
                            You can check out all the <span className="font-bold">protocols </span> in Arturo’s amazing
                            paper [14]!
                        </p>
                    </div>
                </ExpandablePill>
            </div>
        </div>
    );
}
