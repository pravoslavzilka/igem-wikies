import React, {useState, useEffect} from "react";
import {ChevronDown, ChevronUp} from "lucide-react";
import A from "../../../A.tsx"; // npm install lucide-react

export default function Page2() {
    const [open, setOpen] = useState(false);
    const [open1, setOpen1] = useState(false);


     useEffect(() => {
            // Listen for custom event from main page
            const openHandler = (e: CustomEvent) => {
                if (e.detail === "how-to-use-taifr") {
                    setOpen(true);
                    const el = document.getElementById("how-to-use-taifr");
                    if (el) el.scrollIntoView({behavior: "smooth", block: "start"});
                }
                
            };
    
            window.addEventListener("openSection", openHandler as EventListener);
    
            return () => {
                window.removeEventListener("openSection", openHandler as EventListener);
            };
        }, []);

    return (
        <div>
            <div
                className="max-w-6xl mx-auto bg-white text-gray-900 leading-relaxed p-8 font-[Urbanist,sans-serif] space-y-8">
                {/* Title */}
                <h2
                    className="font-bold"
                    style={{
                        fontFamily: "Space Grotesk, sans-serif",
                        fontSize: window.innerWidth < 768 ? "1.8rem" : "2.4rem",
                    }}
                    id="programmable"
                >
                    Duckweed becoming <span className="">PROGRAMMABLE</span>
                </h2>

                {/* Intro paragraph */}
                <p className="text-justify text-lg">
                    Generating stable transgenic lines remains a laborious, time-consuming, and often unpredictable
                    process.
                    Moreover, several duckweed species have not yet been successfully transformed, and most available
                    genetic
                    parts are designed primarily for dicotyledonous plants, thus rendering them ineffective in
                    duckweeds, as
                    monocot plants. To address this limitation, we developed a specialized part collection containing
                    constructs
                    for strong transient expression within a week, inserting transgene within two to three weeks, under
                    unsterile
                    conditions using our customizable{" "}
                    <span className="font-bold ">PING/PONG TAIFR system</span>. This toolkit also includes
                    user-friendly <span className="font-bold">CRISPR/Cas9 knock-out components</span>.
                </p>
            </div>
            <div
                className="max-w-6xl mx-auto bg-white text-gray-900 leading-relaxed p-8 font-[Urbanist,sans-serif] space-y-8">
                {/* Subsection */}
                <h3
                    className="font-bold text-[#6ca033] mt-14"
                    style={{
                        fontFamily: "Space Grotesk, sans-serif",
                        fontSize: window.innerWidth < 768 ? "1.4rem" : "1.8rem",
                    }}
                    id="taifr"

                >
                    TAIFR - method for inserting a gene into duckweed
                </h3>

                <div className="grid md:grid-cols-2 gap-8 items-start">
                    {/* LEFT COLUMN TEXT */}
                    <div className="space-y-4 text-lg">
                        <p className="text-justify">
            <span className="font-bold">
              To enable any biotechnological application based on duckweed,
            </span>{" "}
                            the fastest-growing higher plant, we had to develop a method for its rapid and efficient
                            genetic
                            engineering. We designed and are developing{" "}
                            <span className="font-bold ">TAIFR</span>, a method that aims to reduce the time
                            required to
                            generate a stable transgenic duckweed line from{" "}
                            <span className="font-bold">5 months to just 1 month</span> by omitting the lengthy callus
                            stage of plant
                            genetic engineering, inserting the transgene into the genome via{" "}
                            <span className="font-bold ">transposase</span>, and leveraging duckweed
                            unique regeneration
                            ability to produce new transgenic fronds in planta.
                        </p>

                        <p className="text-justify">
                            Within the timeframe of our iGEM project, we succeeded in completing the first part of our
                            TAIFR method —{" "}
                            the <span className="font-bold ">transposase-assisted insertion</span> of a
                            transgene into
                            the duckweed genome directly in the frond (see Fig. xy, and results here). However, we did
                            not succeed with
                            the second part — frond regeneration. Although we have identified a probable solution for
                            frond
                            regeneration (see here), we are not including this step in our current workflow for{" "}
                            <span className="font-bold">rapid transient genetic engineering of duckweed</span>.
                        </p>
                        {/* Second image */}
                        <div className="flex flex-col items-center mt-8">
                            <img
                                src="https://static.igem.wiki/teams/5642/images/toolbox/toolbox/tbx2.webp"
                                alt="TAIFR co-transformation results"
                                className="w-full object-contain"
                            />
                            <p className="text-sm italic mt-2 text-center text-gray-700">
                                <span className="font-bold">Figure 2.</span> Co-transformation of pIB005 and pIB003
                                results in
                                randomly
                                distributed spots of GFP fluorescence, confirming successful insertion of the construct
                                into the
                                nuclear
                                genome facilitated by PONG transposase.
                            </p>
                        </div>
                    </div>

                    {/* RIGHT COLUMN IMAGE */}
                    <div className="flex flex-col items-center">
                        <img
                            src="https://static.igem.wiki/teams/5642/images/toolbox/toolbox/tbx.webp"
                            alt="TAIFR transposase method diagram"
                            className="w-full object-contain"
                        />
                        <p className="text-sm italic mt-2 text-center text-gray-700">
                            <span className="font-bold">Figure 1.</span> TAIFR is a system that uses PONG transposase to
                            deliver the gene of interest (GOI) into a duckweed nucleus. The GOI is flanked by two halves
                            of PONG’s target – the mPing transposon. PONG cleaves this construct, performs a
                            double-strand break (DSB) in the genomic DNA, and inserts the construct into this site.
                            Then, selection pressure favours the transformed cells, which propagate more and give rise
                            to a new transformed generation of duckweeds. Our TAIFR method builds on the TATSI method
                            developed by Slotkin's Lab (1).
                        </p>
                    </div>
                </div>


            </div>


            <div className="max-w-6xl mx-auto p-8 bg-white text-gray-900 font-[Urbanist,sans-serif] leading-relaxed">
                {/* Header with toggle */}
                <div
                    onClick={() => setOpen(!open)}
                    className="flex items-center justify-between cursor-pointer border-b border-gray-300 pb-3 mb-6"
                >
                    <h2
                        className="font-bold text-2xl md:text-3xl"
                        style={{fontFamily: "Space Grotesk, sans-serif"}}
                        id="how-to-use-taifr"
                    >
                        How can you use <span className="underline">TAIFR</span>?
                    </h2>
                    {open ? (
                        <ChevronUp className="text-gray-600 w-7 h-7"/>
                    ) : (
                        <ChevronDown className="text-gray-600 w-7 h-7"/>
                    )}
                </div>

                {/* Content (visible when open) */}
                {open && (
                    <div className="justify-center">
                        <div className="grid md:grid-cols-[2fr_1fr] gap-10 items-start">
                            {/* === LEFT: TEXT === */}
                            <div className="space-y-4 text-base md:text-lg">
                                <ol className="list-decimal list-inside space-y-3">
                                    <li>
                                        Amplify or synthesize your target coding sequence so that its ends
                                        contain restriction sites enabling cleavage by <strong>Esp3I</strong>,
                                        which will result in an <strong>AATG</strong> overhang on the 5′ end
                                        and a <strong>TTCG</strong> overhang on the 3′ end. See these overhangs
                                        in Fig. Xy.
                                    </li>
                                    <li>
                                        Digest and ligate your sequence with our composite part{" "}
                                        <strong>pIB005</strong> using the <strong>Esp3I enzyme</strong> and
                                        transform the reaction into competent <em>E. coli</em> cells.
                                        Incubate overnight, prepare overnight cultures, and isolate plasmids
                                        using conventional protocols. See Fig. Xy for the exact digestion
                                        protocol.
                                    </li>
                                </ol>

                                <div className="border border-gray-300 rounded-lg p-4 text-sm md:text-base">
                                    You will obtain a <strong>modified pIB005 construct</strong> containing
                                    your desired sequence in place of the original GFP. The expression of
                                    your gene in duckweed will be driven by the{" "}
                                    <strong>rZmUBI promoter</strong> and terminated by the{" "}
                                    <strong>t35S terminator</strong>, allowing seamless transient expression
                                    in duckweed.
                                </div>

                                <ul className="list-disc list-inside space-y-3">
                                    <li>
                                        Transform the obtained <strong>modified pIB005</strong> construct,
                                        original pIB005 (as transformation efficiency control), and{" "}
                                        <strong>pIB003</strong> construct into electropotent{" "}
                                        <em>Agrobacterium</em> cells using our{" "}
                                        <u>
                                            <A href="/toolbox/agrobacterium-mediated-transformation-protocol/">
                                                Electroporation Protocol
                                            </A></u>.
                                    </li>
                                    <li>
                                        Select positive <em>Agrobacterium</em> colonies using primers o160 and
                                        o161 for all three constructs. Inoculate a pre-culture, prepare
                                        glycerol stocks, and establish a main culture.
                                    </li>
                                    <li>
                                        Depending on your desired outcome and using{" "}
                                        <u>
                                            <A href="/toolbox/programable-duckweed-protocol/">
                                                Duckweed Transformation Protocol
                                            </A></u>, transform duckweed with{" "}
                                        <em>Agrobacterium</em> containing:
                                        <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                                            <li>
                                                <strong>Transformation efficiency:</strong> original pIB005
                                                <ul className="list-disc list-inside ml-6 mt-1">
                                                    <li>
                                                        After 6 days post-transformation, observe green fluorescence
                                                        (~509 nm excitation).
                                                    </li>
                                                    <li>
                                                        If signal is present in duckweeds transformed by non-modified
                                                        pIB005, you successfully transformed your first duckweeds.
                                                    </li>
                                                </ul>
                                            </li>

                                            <li>
                                                <strong>Transient expression of your gene:</strong> modified pIB005
                                                <ul className="list-disc list-inside ml-6 mt-1">
                                                    <li>
                                                        If transformation efficiency is sufficient, test expression
                                                        between day 6–18 post-infiltration.
                                                    </li>
                                                </ul>
                                            </li>

                                            <li>
                                                <strong>Transgene insertion into nuclear genome:</strong> modified
                                                pIB005 + pIB003
                                                <ul className="list-disc list-inside ml-6 mt-1">
                                                    <li>
                                                        Wait about 12 days for PONG transposase from pIB003 to excise
                                                        and move the mPing cassette into the nuclear genome.
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>


                            {/* === RIGHT COLUMN === */}
                            <div className="space-y-4 flex flex-col items-center">
                                <img
                                    src="https://static.igem.wiki/teams/5642/images/toolbox/toolbox/taifr-protocol.webp"
                                    alt="pIB003 diagram 1"
                                    className="w-full max-w-xs object-contain"
                                />
                                <p className="text-sm italic text-center  max-w-xs text-gray-700">
                                    <strong>Figure 1.</strong> End sequences your gene of interest must have to be
                                    swappable with GFP in our pIB005 construct (1). Green codon (ATG) represent start
                                    codon of your gene. The simplified protocol for digestion and ligation of your gene
                                    into pIB005 (2).
                                </p>


                            </div>
                        </div>
                        <div className="flex justify-center">
                            <div className="grid md:grid-cols-2 gap-10 items-start justify-items-center">
                                <img
                                    src="https://static.igem.wiki/teams/5642/images/toolbox/toolbox/pib003-1.webp"
                                    alt="pIB003 diagram"
                                    className="w-full max-w-md object-contain"
                                />
                                <img
                                    src="https://static.igem.wiki/teams/5642/images/toolbox/toolbox/pib005-copy-1.webp"
                                    alt="pIB005 diagram 2"
                                    className="w-full max-w-md object-contain"
                                />
                            </div>
                        </div>
                    </div>
                )}
            </div>


            <div className="max-w-6xl mx-auto p-8 bg-white text-gray-900 font-[Urbanist,sans-serif] leading-relaxed">
                {/* Header */}
                <div
                    onClick={() => setOpen1(!open1)}
                    className="flex items-center justify-between cursor-pointer border-b border-gray-300 pb-3 mb-6"
                >
                    <h2
                        className="font-bold text-2xl md:text-3xl text-black"
                        style={{fontFamily: "Space Grotesk, sans-serif"}}
                    >
                        How did we develop <span className="underline">TAIFR?</span>
                    </h2>
                    {open1 ? (
                        <ChevronUp className="text-gray-700 w-7 h-7"/>
                    ) : (
                        <ChevronDown className="text-gray-700 w-7 h-7"/>
                    )}
                </div>

                {/* Toggle Content */}
                {open1 && (
                    <div className="space-y-6">
                        {/* Intro paragraph */}
                        <p className="text-lg">
                            We performed four and half DBTL cycles to enable fast and
                            user-friendly genetic engineering of duckweed (
                            <A
                                href="#"
                                className="underline text-gray-800 hover:text-gray-600"
                            >
                                read more here
                            </A>
                            ).
                        </p>

                        {/* Chart */}
                        <div className="flex justify-center">
                            <img
                                src="https://static.igem.wiki/teams/5642/images/toolbox/toolbox/figure17.webp"
                                alt="Bar chart showing GFP fluorescence intensity comparison"
                                className="w-full md:w-4/5 object-contain"
                            />
                        </div>

                        {/* Figure description */}
                        <p className="text-sm italic text-gray-800 text-justify">
                            <strong>Figure 1.</strong> After three DBTL cycles of the “PING part”
                            (mPing-bordered cargo rZmUBI-GFP-p2a-NPTII-t35S) of our TAIFR method,
                            we built and tested a functional and user-friendly composite part,
                            pIB005, which — compared to pIB001 and pIB002 — showed the greatest
                            difference in fluorescence between groups of “non-shining” and
                            “shining” duckweeds, normalized on each plate. However, the intensity
                            of its fluorescence was approximately half of the positive control
                            (pAMO101). We do not yet fully understand the reason for this, but a
                            probable explanation is a difference in the plasmid backbone,
                            resulting in a lower copy number of the binary vector in
                            <em> Agrobacterium</em>, and consequently, a smaller amount of
                            T-DNA transferred to duckweed. Nevertheless, the fluorescence of
                            pIB005 is clearly visible and expressed as early as in the positive
                            control. Combined with GFP being swappable as the CDS1 part (with no
                            stop codon) and the excisability of the p2a-NPTII resistance marker
                            via mutated lox71 and lox66 sites (not yet tested), this composite
                            part represents a crucial element of our TAIFR method.
                        </p>
                        <img
                            src="https://static.igem.wiki/teams/5642/images/toolbox/toolbox/figure2.webp"
                            alt="pIB005 transformation image 1"
                            className="w-full object-contain"
                        />
                        {/* === Top image section (Figures 2 & 3) === */}
                        <div className="grid md:grid-cols-[2fr_1fr] gap-8 items-start">
                            {/* Left images */}
                            <div className="flex flex-col items-center space-y-4">


                                <p className="text-sm italic text-gray-800 text-justify">
                                    <strong>Figure 2.</strong> Transformation of pIB005 (mPing-bordered
                                    rZmUBI-GFP-p2a-NPTII-t35S) into wild-type{" "}
                                    <em>Spirodela polyrhiza 7428</em> (1) results in transient expression
                                    of GFP (2). Co-transformation with pIB003 (PONG transposase) leads to
                                    excision of the mPing-bordered translational unit, resulting in no
                                    transient fluorescence (3). After two to three weeks, speckles of GFP
                                    fluorescence appear in fronds as a result of random insertions of the
                                    mPing-bordered translational unit into the duckweed nuclear genome (4).
                                </p>

                                <p className="text-sm italic text-gray-800 text-justify">
                                    <strong>Figure 3.</strong> To determine the threshold concentration of
                                    neomycin that would kill duckweeds, thus providing a selection
                                    pressure for presence of mPing cargo (containing gene for NPTII),
                                    we performed the neomycin test. Sensitivity tests on{" "}
                                    <em>Spirodela polyrhiza</em> clones (162, 7428, and 9509) showed that
                                    they are much more sensitive to G418 than expected, with all fronds
                                    killed at ≥ 0.5 mg/L of G418 in all three clones. These tests were
                                    performed twice, each time with three biological replicates.
                                </p>

                                <img
                                    src="https://static.igem.wiki/teams/5642/images/toolbox/toolbox/figure16.webp"
                                    alt="figure 4 part 1"
                                    className="w-full md:w-5/6 object-contain mb-3"
                                />
                                <p className="text-sm italic text-gray-800 text-justify">
                                    <strong>Figure 4.</strong> Fronds of
                                    <em> Spirodela polyrhiza 7428 (Sp7428)</em> were co-transformed with two{" "}
                                    <em>Agrobacterium</em> cultures: one carrying pIB005 (mPing-bordered{" "}
                                    GFP-p2a-NPTII unit) and the other carrying pIB003 (PONG transposase).
                                    GFP fluorescence appeared 12 days post-infiltration (dpi). At 18 dpi, all
                                    transformed fronds were transferred
                                    to medium containing 5 mg/L G418 – ten times higher than the tolerance threshold
                                    of Sp7428 (0.5 mg/L).
                                    Transformed fronds survived, while controls died within 24 days. Some
                                    transformed daughter fronds remained
                                    healthy yet smaller, indicating potential stable integration – confirmed later
                                    by PCR testing.
                                </p>


                            </div>

                            {/* Right chart */}
                            <div className="flex flex-col items-center space-y-2 max-w-xs">
                                <img
                                    src="https://static.igem.wiki/teams/5642/images/toolbox/toolbox/figure11.webp"
                                    alt="G418 sensitivity chart"
                                    className="w-full object-contain"
                                />
                            </div>
                        </div>

                        {/* === Figure 4 (bottom section) === */}
                        <div className="space-y-8">
                            {/* Figure 5 */}
                            <div className="flex flex-col items-center text-center">
                                <img
                                    src="https://static.igem.wiki/teams/5642/images/toolbox/toolbox/taifr-pcrs.webp"
                                    alt="figure 4 part 2"
                                    className="w-full md:w-5/6 object-contain mb-3"
                                />
                                <p className="text-sm italic text-gray-800 text-justify max-w-[90%]">
                                    <strong>Figure 5.</strong> Genomic DNA isolated from <em>Spirodela polyrhiza
                                    7428</em> at 30 days post
                                    co-transformation with pIB005 and pIB003 (iteration RA4.1) was separated on a
                                    gel to avoid conceivable{" "}
                                    <em>Agrobacterium</em> DNA contamination, purified, and subsequently subjected
                                    to two PCR reactions.
                                    The first reaction (upper gel), using primers o128 and o129, tested for the
                                    presence of GFP – presumably
                                    inserted into the genome via PONG transposase activity from pIB003. It yielded
                                    the expected 250 bp product
                                    in 9 out of 20 samples. The second reaction (lower gel), using primers o55 and
                                    o56, tested for the presence
                                    of <em>Agrobacterium</em> DNA in the samples to rule out the possibility that
                                    GFP was present as the binary
                                    vector pIB005 residing in <em>Agrobacterium</em>. This reaction produced the
                                    expected product in 3 out of 20
                                    samples, indicating that GFP detection in 7 out of 20 samples resulted from
                                    Transposase-Assisted Insertion.
                                    The first negative control (non-transformed <em>S. polyrhiza</em> DNA) did not
                                    yield any bands, as expected.
                                    The second negative control (water instead of DNA) also showed no amplification.
                                    The positive control (pIB005
                                    construct) yielded the expected 250 bp band.
                                </p>
                            </div>
                        </div>

                        {/* === Final paragraph === */}
                        <p className="text-justify text-base md:text-lg leading-relaxed">
                            We succeeded in inserting a transgene into the{" "}
                            <strong>nuclear genome of duckweed fronds</strong> using a{" "}
                            <strong>transposase-assisted insertion method</strong> — the first{" "}
                            <strong>achievement of its kind</strong> in plant synthetic biology.
                            Unfortunately, we did not manage to develop a reliable{" "}
                            <strong>frond regeneration approach</strong> for the transformed cells.
                            We unsuccessfully performed{" "}
                            <strong>five iterations of regeneration experiments</strong>, testing
                            different <strong>neomycin concentrations</strong>,{" "}
                            <strong>timing of its addition</strong>, and various{" "}
                            <strong>hormones and their combinations</strong>, but due to a flaw in the
                            transformation process, those results were lost. On our{" "}
                            <strong>Engineering page</strong>, we propose{" "}
                            <strong>future strategies</strong> to complete the development of the{" "}
                            <strong>TAIFR method</strong>, which we — or any future iGEM team — can
                            pursue (see more here).
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}
