import A from "../../../A";

const PromoterLibraryConstruction = () => {
    return (
        <div>
            <div
                className="min-h-screen bg-white p-8 text-lg text-justify space-y-6"
                style={{fontFamily: "Urbanist, sans-serif"}}
            >
                <div className="max-w-6xl mx-auto">
                    {/* === Section Title === */}
                    <h1
                        className="text-5xl font-bold text-center mb-12 text-[#6ca033]"
                        style={{fontFamily: "Space Grotesk, sans-serif"}}
                    >
                        Promoter Library Construction
                    </h1>

                    {/* === Bullet Points Summary === */}
                    <div className="bg-gray-50 rounded-2xl p-6 mb-10 border-[#6ca033] border-2">
                        <ul className="list-disc list-inside space-y-3 text-gray-800 leading-relaxed">
                            <li>
                                We isolated or synthesized <b>7 endogenous duckweed promoters.</b>
                            </li>
                            <li>
                                We built <b>15 testing constructs</b> to test their functionality and
                                expression strength.
                            </li>
                            <li>
                                We tested these promoters in <b>3 different duckweed species</b> and
                                quantified their expression strength with <b>qPCR assays.</b>
                            </li>
                        </ul>
                    </div>

                    {/* === Main Paragraph === */}
                    <p className="leading-relaxed mb-6">
                        With our <em>in silico</em> promoter identification workflow, we obtained
                        the MoClo (Type IIS/RFC 1000) compatible promoter + 5′ UTR sequences of
                        the highest and most stably expressed genes across multiple duckweed
                        species. To test their function and expression performance, we had to
                        isolate or synthesize these sequences.
                    </p>

                    {/* === Subsection: Isolation === */}
                    <h2
                        className="text-2xl font-bold mt-10 mb-4"
                        style={{fontFamily: "Space Grotesk, sans-serif"}}
                    >
                        Isolation of Promoter + 5′ UTR from Genomic DNA
                    </h2>

                    <p className="leading-relaxed mb-4">
                        Initial isolation of high-purity genomic DNA from various duckweed clones
                        was necessary before the actual promoter isolation. We tried several
                        commercial plant DNA extraction kits, but neither the DNA concentrations,
                        nor the 260/230 ratios were satisfying. We then switched to a{" "}
                        <b>CTAB DNA isolation protocol [22]</b>. Initially, we struggled with
                        complete homogenization of the plant tissue, but after several iterations,
                        we found the prolonged lyophilization before extraction is optimal for
                        successful homogenization and subsequent DNA isolation. Genomic DNA was
                        successfully isolated from:
                    </p>

                    <ul className="list-disc list-inside space-y-1 text-gray-800 mb-6">
                        <li>
                            <em>Lemna gibba</em> 7742
                        </li>
                        <li>
                            <em>Lemna minor</em> 5500
                        </li>
                        <li>
                            <em>Lemna minor</em> 5930
                        </li>
                        <li>
                            <em>Lemna japonica</em> 8627
                        </li>
                        <li>
                            <em>Spirodela polyrhiza</em> 0162
                        </li>
                        <li>
                            <em>Spirodela polyrhiza</em> 7428
                        </li>
                        <li>
                            <em>Spirodela polyrhiza</em> 9509
                        </li>
                    </ul>

                    <p className="leading-relaxed mb-4">
                        At first, based on <b>MoClo compatibility filtering</b> we attempted to
                        isolate 13 different native endogenous promoters from genomic DNA of 4
                        different species:
                    </p>

                    <ul className="list-disc list-inside space-y-1 text-gray-800 mb-6">
                        <li>
                            <b>rLgCSR</b>, <b>rLgATG</b> and <b>rLgDJH</b> from{" "}
                            <em>Lemna gibba</em> 7742
                        </li>
                        <li>
                            <b>rLmSTK</b>, <b>rLmACC</b> and <b>rLmTIF</b> from{" "}
                            <em>Lemna minor</em> 5500
                        </li>
                        <li>
                            <b>rLjCCA</b> and <b>rLjTRM</b> from <em>Lemna japonica</em> 8627
                        </li>
                        <li>
                            <b>rSpARF</b>, <b>rSpPOL</b>, <b>rSpATP</b>, <b>rSpNCH</b> and{" "}
                            <b>rSpPIK</b> from <em>Spirodela polyrhiza</em> 9509
                        </li>
                    </ul>

                    <p className="leading-relaxed mb-4">
                        Since we designed our own primers (see{" "}
                        <A
                            href="/toolbox/programmable-duckweed/part-collection#primer-database"
                            className="text-[#6ca033] hover:underline font-semibold"
                        >
                            them here
                        </A>
                        ), we first needed to identify the optimal annealing temperatures for given
                        primer pairs using gradient PCRs.
                    </p>

                    <p className="leading-relaxed mb-10">
                        We then proceeded with the best annealing temperatures and amplified
                        promoters in larger PCR reactions, separated them using gel electrophoresis
                        and extracted corresponding bands from the gel using the GeneJET Gel
                        Extraction Kit, gifted to us by ThermoFisher Scientific [23].
                    </p>

                    {/* === Paragraphs === */}
                    <p className="leading-relaxed mb-4">
                        Even after four iterations of PCR conditions optimization, we{" "}
                        <b>managed to successfully isolate only 5 of the chosen promoters:</b>{" "}
                        <span className="font-bold text-[#6ca033]">
        rLgDJH, rLmACC, rSpARF, rSpPOL
      </span>{" "}
                        and{" "}
                        <span className="font-bold text-[#6ca033]">
        rSpPIK
      </span>.
                    </p>

                    <p className="leading-relaxed mb-4">
                        <b>To increase the odds of obtaining functional ones</b>, we returned back
                        to the top 20 orthogroups and randomly picked four. Out of them, the
                        highest expressing member of each orthogroup was chosen for the DNA
                        synthesis after removal of illegal Type IIS restriction sites. Before the
                        removal, all the promoter + 5′ UTR sequences were analyzed using the MEME
                        suite [24] to avoid the interference of sequence editing with known
                        regulatory motifs.
                    </p>

                    <p className="leading-relaxed mb-4">
                        The promoter + 5′ UTR sequences with removed Type IIS restriction sites and
                        overhangs with BbsI restriction sites were synthesized by Twist
                        Biosciences. We obtained these sequences for further work:
                    </p>

                    {/* === Promoter links === */}
                    <p className="text-[#6ca033] font-semibold mb-10 space-x-4 text-center">
                        <A href="https://registry.igem.org/parts/bba-25fq6hr0" className="hover:underline">rLmUBI</A>,
                        <A href="https://registry.igem.org/parts/bba-25goufcy" className="hover:underline">rLmAUX</A>,
                        <A href="https://registry.igem.org/parts/bba-25y6vxt4" className="hover:underline">rSpUBI</A>,
                        <A href="https://registry.igem.org/parts/bba-25boso9d" className="hover:underline">rSpWDP</A>
                    </p>

                    {/* === Subsection Header === */}
                    <h2
                        className="text-3xl font-bold mb-4 text-[#6ca033]"
                        style={{fontFamily: "Space Grotesk, sans-serif"}}
                    >
                        DESIGN of Promoter + 5′ UTR Performance Measurement
                    </h2>

                    <p className="leading-relaxed mb-4">
                        With the sequences being successfully isolated and synthesized, we could
                        proceed with assessing their functionality and expression strength. We
                        aimed to create a design that would enable us to quickly validate the
                        functionality of our promoters and at the same time allow us to quantify
                        their expression strength.
                    </p>

                    <p className="leading-relaxed mb-4">
                        After an extensive literature research and consultations with{" "}
                        <span className="font-bold">Dr. Ordóñez</span>,{" "}
                        <span className="font-bold">Julia Eva Fortmueller</span>,{" "}
                        <span className="font-bold">Dr. Jedličková</span>, and{" "}
                        <span className="font-bold">Dr. Šámalová</span>, we have chosen the
                        following strategy for our constructs.
                    </p>

                    <p className="leading-relaxed mb-8">
                        To easily assess its functionality, we{" "}
                        <b>cloned the RUBY reporter</b> under our testing promoters. This way, it
                        is possible to observe <b>betalain production</b> as a result of the
                        promoter + 5′ UTR sequence driving expression.
                    </p>

                    {/* === Figure === */}
                    <div className="">
                        <div className="bg-white rounded">
                            <img
                                src="https://static.igem.wiki/teams/5642/images/toolbox/promoterssilico/2/1-cropped.avif"
                                alt="Testing construct schematic"
                                className="w-full h-auto"
                            />
                        </div>
                        <p
                            className="text-sm text-gray-600 mt-3 p-4"
                            style={{fontFamily: "Urbanist, sans-serif"}}
                        >
                            <strong>Fig 10:</strong> The schematic representation of our visual
                            testing construct with the testing promoter + 5′ UTR sequence (
                            <A
                                href="#"
                                className="text-[#6ca033] hover:underline font-medium"
                            >
                                rTEST
                            </A>
                            ) driving the expression of RUBY betalain visual marker terminated by
                            t35S.
                        </p>
                    </div>

                    {/* === Additional Explanation === */}
                    <p className="leading-relaxed mt-8">
                        There are several ways to quantify the expression strength, including
                        fluorescence, colorimetry, luminescence [25],{" "}
                        <b>quantitative PCR (qPCR)</b> [26] or immunochemistry [27]. In all cases,
                        normalizing the expression of the gene under the tested promoter is needed
                        to reliably compare the expression between different constructs.
                    </p>

                    <p className="leading-relaxed">
                        In order to do that, we opted for a{" "}
                        <b>ratiometric approach</b>, similar to the one that{" "}
                        <A
                            href="https://2024.igem.wiki/marburg/#"
                            className="text-[#6ca033] hover:underline font-semibold"
                        >
                            iGEM Marburg 2024
                        </A>{" "}
                        employed in their project. It consists of having the fluorescence reporter
                        under the tested promoter + 5′ UTR sequence on the first transcriptional
                        unit and on the second transcriptional unit, there is the second reporter
                        under a standard promoter. Then, the ratio between the fluorescence
                        intensity of both reporters is determined.
                    </p>

                    <p className="leading-relaxed">
                        This approach is suitable when the fluorescence strength is easily
                        evaluated with high accuracy and throughput. This is the case with
                        measuring the fluorescence in plant protoplasts. However, we were
                        discouraged from attempting to isolate duckweed protoplasts by several
                        experts and trying to implement this approach in the adult duckweed plants
                        would be <b>laborious</b> and the reliability could be questionable.
                    </p>

                    <p className="leading-relaxed mb-10">
                        This is why we have chosen <b>qPCR</b> to quantify the regulatory sequence
                        strength. The advantage of this approach is that it is isolating solely
                        the level of transcription as a factor of comparison, its high accuracy
                        and very sensitivity. On the other hand, we are sacrificing the
                        quantification of the final protein expression.
                    </p>


                    <p className="leading-relaxed mb-4">
                        We had to design our measurement constructs with the need for reference in mind.
                        This is why we used the design with two transcriptional units on the same T-DNA
                        fragment delivered into the plant.
                    </p>

                    {/* === Figure === */}
                    <div className="mb-8">
                        <div className="bg-white rounded">
                            <img
                                src="https://static.igem.wiki/teams/5642/images/toolbox/promoterssilico/2/2-cropped.avif"
                                alt="Ratiometric measurement construct schematic"
                                className="w-full h-auto"
                            />
                        </div>
                        <p className="text-sm text-gray-600 mt-3 p-4" style={{fontFamily: "Urbanist, sans-serif"}}>
                            <strong>Figure 11:</strong> The schematic representation of our measurement construct with
                            the testing promoter + 5′UTR sequence (
                            rTEST
                            ) driving the expression of RFP which is terminated by t35S on the first transcriptional
                            unit.
                            The second transcriptional unit is used as a reference for conducting the ratiometric
                            measurement using quantitative PCR.
                        </p>
                    </div>

                    {/* === Explanation === */}
                    <p className="leading-relaxed mb-4">
                        The first transcriptional unit consists of the RFP coding sequence under our testing
                        promoter with <b>t35S terminator</b>, which was previously shown to work in duckweed [28].
                        We used RFP with the expectation that it will provide better distinction between the signal
                        and background, which was later shown not to be the case.
                    </p>

                    <p className="leading-relaxed mb-4">
                        The second transcriptional unit harbors the <b>NPTII gene</b> for neomycin
                        phosphotransferase, expression of which is driven by the standard promoter of{" "}
                        <b>nopaline synthase</b> gene from <em>Agrobacterium tumefaciens</em> and terminated by
                        the <b>octopine synthase terminator</b>, also from <em>Agrobacterium tumefaciens</em>.
                    </p>

                    <p className="leading-relaxed mb-4">
                        Before performing our measurement, this design allowed us to perform{" "}
                        <b>qualitative assessment</b> of the expression of the RFP gene.
                    </p>

                    <p className="leading-relaxed mb-4">
                        For <b>quantitative evaluation</b> of the transcriptional strength, we could easily
                        compare the RFP transcript amount to the amount of NPTII transcript in the same sample.
                        We can assume that <b>rNOS</b> will be driving transcription with{" "}
                        <b>the same intensity across all instances</b>, so the variation in ratios between
                        the RFP and NPTII transcripts amount will be solely dependent on the different
                        strengths of <b>rTEST-5′UTR</b>.
                    </p>

                    <p className="leading-relaxed mb-10">
                        With the design completed and consulted with Dr. Ordóñez and Dr. Karel Říha,
                        we could proceed to building it.
                    </p>

                    {/* === Section Header === */}
                    <h1
                        className="text-4xl font-bold mt-12 mb-6 text-[#6ca033]"
                        style={{fontFamily: "Space Grotesk, sans-serif"}}
                    >
                        BUILDING the Testing Constructs
                    </h1>

                    <p className="leading-relaxed mb-4">
                        To assemble our testing constructs, we opted for{" "}
                        <b>modular cloning assembly strategy</b> [29], similarly to our other engineering
                        projects due to its wide application potential and user-friendliness for other people using
                        them.
                    </p>

                    {/* === Subsection Header === */}
                    <h2
                        className="text-2xl font-bold mb-3"
                        style={{fontFamily: "Space Grotesk, sans-serif"}}
                    >
                        Level 0 Assembly (L0)
                    </h2>

                    <p className="leading-relaxed mb-4">
                        The goal of L0 assembly was to obtain standardized promoter parts that could later
                        be combined with different coding sequences (CDSs) and terminators in higher-level constructs.
                        At this stage, each isolated or synthesized promoter was cloned into the universal{" "}
                        <b>MoClo acceptor vector pG2T</b> (MoClo Plant Parts Kit [30], gifted to us by Marlionet Lab),
                        using <b>BbsI restriction enzyme</b>.
                    </p>

                    <p className="leading-relaxed mb-4">
                        The presence of the plasmids in L0 constructs was verified with PCR screenings and
                        restriction analyses. For the subsequent Level 1 Assembly, the following{" "}
                        <b>7 correct constructs were obtained and verified by whole plasmid sequencing:</b>
                    </p>

                    <ul className="list-disc list-inside space-y-1 text-gray-800">
                        <li>pG2T_rLmACC, pG2T_rLmUBI and pG2T_rLmAUX</li>
                        <li>pG2T_rSpARF, pG2T_rSpPOL, pG2T_rSpUBI and pG2T_rSpWDP</li>
                    </ul>

                    <p className="leading-relaxed mb-4">
                        We were unable to obtain correct L0 constructs for the rLgDJH and rSpPIK promoter + 5’ UTR
                        sequences, likely due to their internal BbsI sites, in which they differed from the reference
                        genomes used for extraction of these sequences. With the correct L0 vectors, we could move to
                        building the Level 1 constructs.
                    </p>


                    {/* === Section Header === */}
                    <h2
                        className="text-2xl font-bold mb-4"
                        style={{fontFamily: "Space Grotesk, sans-serif"}}
                    >
                        Level 1 Assembly (L1)
                    </h2>

                    <p className="leading-relaxed mb-4">
                        In L1, we focused on assembling two transcriptional units, where{" "}
                        <b>each promoter was combined with a reporter gene</b> to test promoter
                        activity in our measurement constructs. For assembling the testing
                        constructs with RUBY as a visual marker, assembling only one
                        transcriptional unit was sufficient.
                    </p>

                    <p className="leading-relaxed mb-4">
                        As for the acceptors, we used <b>pB3T</b> for the first transcriptional
                        unit and <b>pC3T</b> for the second transcriptional unit (MoClo Plant
                        Parts Kit [24]).
                    </p>

                    <p className="leading-relaxed mb-4">
                        For the first transcriptional unit, we cloned two coding sequences under
                        our testing promoter + 5′ UTR sequences:
                    </p>

                    <ul className="list-disc list-inside space-y-1 text-gray-800 mb-4">
                        <li>
                            <b>RFP</b> from pB10P1 (MoClo Plant Parts Kit [30])
                        </li>
                        <li>
                            <b>RUBY</b>, producing red betalain pigments in transformed tissues, from
                            pE5P3 (MoClo Plant Parts III: Transformation & Genome Engineering Kit
                            [32]), gifted to us by Voytas Lab
                        </li>
                    </ul>

                    <p className="leading-relaxed mb-4">
                        The <b>terminator used in both cases was t35S</b>, derived from the
                        Cauliflower Mosaic Virus, a widely used viral terminator in plant
                        biotechnology, from <b>pF12P3</b> (MoClo Plant Parts III).
                    </p>

                    <p className="leading-relaxed mb-4">
                        After the <b>digestion-ligation reaction with BsaI enzyme</b>, we therefore
                        obtained two types of constructs for each testing sequence. We also cloned
                        the measurement construct with RFP driven by rZmUBI which we used for most
                        of our constructs in other parts of our project and is supposed to work
                        well in duckweed [33]. For RUBY under rZmUBI, we already had the{" "}
                        <A
                            href="https://registry.igem.org/parts/bba-253a2zv8"
                            className="text-[#6ca033] hover:underline font-semibold"
                        >
                            pAM052
                        </A> – a construct gifted to us by Dr. Ordóñez. Hence, we had
                        these L1 constructs as the first transcriptional unit:
                    </p>

                    {/* === Construct Table === */}
                    <div className="mb-8">
                        <div className="bg-white rounded p-4">
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 text-sm">
                                <div className="border p-2 text-center rounded">pB3T-rLmSTK-RFP-t35S</div>
                                <div className="border p-2 text-center rounded">pB3T-rLmSTK-RUBY-t35S</div>
                                <div className="border p-2 text-center rounded">pB3T-rLmUBI-RFP-t35S</div>
                                <div className="border p-2 text-center rounded">pB3T-rLmUBI-RUBY-t35S</div>
                                <div className="border p-2 text-center rounded">pB3T-rLmAUX-RFP-t35S</div>
                                <div className="border p-2 text-center rounded">pB3T-rLmAUX-RUBY-t35S</div>
                                <div className="border p-2 text-center rounded">pB3T-rSpARF-RFP-t35S</div>
                                <div className="border p-2 text-center rounded">pB3T-rSpARF-RUBY-t35S</div>
                                <div className="border p-2 text-center rounded">pB3T-rSpPOL-RFP-t35S</div>
                                <div className="border p-2 text-center rounded">pB3T-rSpPOL-RUBY-t35S</div>
                                <div className="border p-2 text-center rounded">pB3T-rLmUBI-RFP-t35S</div>
                                <div className="border p-2 text-center rounded">pB3T-rLmUBI-RUBY-t35S</div>
                                <div className="border p-2 text-center rounded">pB3T-rSpWDP-RFP-t35S</div>
                                <div className="border p-2 text-center rounded">pB3T-rSpWDP-RUBY-t35S</div>
                                <div className="border p-2 text-center rounded">pB3T-rZmUBI-RFP-t35S</div>
                            </div>
                        </div>
                        <p
                            className="text-sm text-gray-600 mt-3 p-4 text-center"
                            style={{fontFamily: "Urbanist, sans-serif"}}
                        >
                            <strong>Figure 12:</strong> Set of our L1 constructs.
                        </p>
                    </div>

                    <p className="leading-relaxed mb-4">
                        For the <b>second transcriptional unit</b>, we used a L0 construct comprising
                        of <b>rNOS-NPTII-tOCS pC11P1</b> (part of MoClo Plant Parts Kit [24]). We could
                        easily clone this construct into the L1 acceptor C3T, again using the BsaI
                        restriction enzyme. We obtained the L1 construct{" "}
                        <b>pC3T-rNOS-NPTII-tOCS</b>. With that, we had all set to proceed with the
                        final Level 2 assembly.
                    </p>
                </div>
            </div>
            <div
                className="min-h-screen bg-white p-8 text-lg text-justify space-y-6"
                style={{fontFamily: "Urbanist, sans-serif"}}
            >
                <div className="max-w-6xl mx-auto">

                    {/* === Section Header === */}
                    <h2
                        className="text-2xl font-bold mb-4"
                        style={{fontFamily: "Space Grotesk, sans-serif"}}
                    >
                        Level 2 Assembly (L2)
                    </h2>

                    <p className="leading-relaxed mb-4">
                        To obtain the final constructs, we used L2 acceptor{" "}
                        <b>pH4T</b> and end-linker <b>pC5T</b> for the measurement constructs
                        (MoClo Plant Parts Kit [30]). We cloned both{" "}
                        <b>pB3T-rTEST-RFP-t35S</b> and <b>pC3T-rNOS-NPTII-tOCS</b> into{" "}
                        <b>pH4T</b> with <b>pC5T</b> using <b>BbsI</b> restriction enzyme.
                    </p>

                    <p className="leading-relaxed mb-4">
                        The final L2 assemblies of visual testing constructs with RUBY were
                        constructed using <b>pH4T</b> acceptor with <b>pB5T</b> end-linker
                        (MoClo Plant Parts Kit [30]) and <b>pB3T-rTEST-RUBY-t35S</b> in the
                        reaction with <b>BbsI</b>.
                    </p>

                    <p className="leading-relaxed mb-4">
                        All the constructs were verified using analytical restriction and whole
                        plasmid sequencing. Finally, these are all the constructs related to our
                        endogenous promoter + 5′ UTR parts testing that we are contributing to the
                        iGEM community:
                    </p>

                    {/* === Table === */}
                    <div className="overflow-x-auto bg-gray-50 rounded-lg shadow-sm">
                        <table className="min-w-full border border-gray-200">
                            <thead className="bg-[#6ca033]">
                            <tr>
                                <th
                                    className="border border-gray-200 px-3 py-2 text-xs font-semibold text-gray-900 text-left"
                                    style={{fontFamily: "Space Grotesk, sans-serif"}}
                                >
                                    Part Identifier
                                </th>
                                <th
                                    className="border border-gray-200 px-3 py-2 text-xs font-semibold text-gray-900 text-left"
                                    style={{fontFamily: "Space Grotesk, sans-serif"}}
                                >
                                    Part Name
                                </th>
                                <th
                                    className="border border-gray-200 px-3 py-2 text-xs font-semibold text-gray-900 text-left"
                                    style={{fontFamily: "Space Grotesk, sans-serif"}}
                                >
                                    Short Description of the Gene
                                </th>
                                <th
                                    className="border border-gray-200 px-3 py-2 text-xs font-semibold text-gray-900 text-left"
                                    style={{fontFamily: "Space Grotesk, sans-serif"}}
                                >
                                    RFP Measurement Construct for qPCR
                                </th>
                                <th
                                    className="border border-gray-200 px-3 py-2 text-xs font-semibold text-gray-900 text-left"
                                    style={{fontFamily: "Space Grotesk, sans-serif"}}
                                >
                                    RUBY Visual Testing Construct
                                </th>
                            </tr>
                            </thead>

                            <tbody className="bg-white divide-y divide-gray-200 text-sm">
                            <tr className="hover:bg-gray-50">
                                <td className="px-3 py-2 text-[#6ca033] font-semibold border-r border-gray-200">
                                    <A href="https://registry.igem.org/parts/bba-25i17jf4"
                                       className="hover:underline">BBa_25I17JFJ4</A>
                                </td>
                                <td className="px-3 py-2 border-r border-gray-200">rSpARF</td>
                                <td className="px-3 py-2 border-r border-gray-200">ARF guanine-nucleotide exchange
                                    factor GNOM-like
                                </td>
                                <td className="px-3 py-2 border-r border-gray-200 text-[#6ca033]">
                                    <A href="https://registry.igem.org/parts/bba-2585t3nw"
                                       className="hover:underline">BBa_2585T3NW</A>
                                </td>
                                <td className="px-3 py-2 text-[#6ca033]">
                                    <A href="https://registry.igem.org/parts/bba-25y8huhl"
                                       className="hover:underline">BBa_25Y8HUHL</A>
                                </td>
                            </tr>

                            <tr className="hover:bg-gray-50">
                                <td className="px-3 py-2 text-[#6ca033] font-semibold border-r border-gray-200">
                                    <A href="https://registry.igem.org/parts/bba-25bkki5t"
                                       className="hover:underline">BBa_25BKK15T</A>
                                </td>
                                <td className="px-3 py-2 border-r border-gray-200">rSpPOL</td>
                                <td className="px-3 py-2 border-r border-gray-200">DNA polymerase epsilon catalytic
                                    subunit A
                                </td>
                                <td className="px-3 py-2 border-r border-gray-200 text-[#6ca033]">
                                    <A href="https://registry.igem.org/parts/bba-250pddo2"
                                       className="hover:underline">BBa_250PDDO2</A>
                                </td>
                                <td className="px-3 py-2 text-[#6ca033]">
                                    <A href="https://registry.igem.org/parts/bba-2517vdhr"
                                       className="hover:underline">BBa_2517VDHR</A>
                                </td>
                            </tr>

                            <tr className="hover:bg-gray-50">
                                <td className="px-3 py-2 text-[#6ca033] font-semibold border-r border-gray-200">
                                    <A href="https://registry.igem.org/parts/bba-25y6vxt4"
                                       className="hover:underline">BBa_25Y6VXT4</A>
                                </td>
                                <td className="px-3 py-2 border-r border-gray-200">rSpUBI</td>
                                <td className="px-3 py-2 border-r border-gray-200">E3 ubiquitin protein-ligase</td>
                                <td className="px-3 py-2 border-r border-gray-200 text-[#6ca033]">
                                    <A href="https://registry.igem.org/parts/bba-25s6ohzt"
                                       className="hover:underline">BBa_25S6OHZT</A>
                                </td>
                                <td className="px-3 py-2 text-[#6ca033]">
                                    <A href="https://registry.igem.org/parts/bba-25j4ra0e"
                                       className="hover:underline">BBa_25J4RA0E</A>
                                </td>
                            </tr>

                            <tr className="hover:bg-gray-50">
                                <td className="px-3 py-2 text-[#6ca033] font-semibold border-r border-gray-200">
                                    <A href="https://registry.igem.org/parts/bba-25boso9d"
                                       className="hover:underline">BBa_25BOSO9D</A>
                                </td>
                                <td className="px-3 py-2 border-r border-gray-200">rSpWDP</td>
                                <td className="px-3 py-2 border-r border-gray-200">WD domain containing protein</td>
                                <td className="px-3 py-2 border-r border-gray-200 text-[#6ca033]">
                                    <A href="https://registry.igem.org/parts/bba-25ke7jlc"
                                       className="hover:underline">BBa_25KE7JLC</A>
                                </td>
                                <td className="px-3 py-2 text-[#6ca033]">
                                    <A href="https://registry.igem.org/parts/bba-251aym84"
                                       className="hover:underline">BBa_251AYM84</A>
                                </td>
                            </tr>

                            <tr className="hover:bg-gray-50">
                                <td className="px-3 py-2 text-[#6ca033] font-semibold border-r border-gray-200">
                                    <A href="https://registry.igem.org/parts/bba-2583vr6z"
                                       className="hover:underline">BBa_2583VR6Z</A>
                                </td>
                                <td className="px-3 py-2 border-r border-gray-200">rLmACC</td>
                                <td className="px-3 py-2 border-r border-gray-200">Acetyl-CoA carboxylase</td>
                                <td className="px-3 py-2 border-r border-gray-200 text-[#6ca033]">
                                    <A href="https://registry.igem.org/parts/bba-256r1oj3"
                                       className="hover:underline">BBa_256R1OJ3</A>
                                </td>
                                <td className="px-3 py-2 text-[#6ca033]">
                                    <A href="https://registry.igem.org/parts/bba-252l515x"
                                       className="hover:underline">BBa_252L515X</A>
                                </td>
                            </tr>

                            <tr className="hover:bg-gray-50">
                                <td className="px-3 py-2 text-[#6ca033] font-semibold border-r border-gray-200">
                                    <A href="https://registry.igem.org/parts/bba-25fq6hr0"
                                       className="hover:underline">BBa_25FQ6HR0</A>
                                </td>
                                <td className="px-3 py-2 border-r border-gray-200">rLmUBI</td>
                                <td className="px-3 py-2 border-r border-gray-200">E3 ubiquitin protein-ligase</td>
                                <td className="px-3 py-2 border-r border-gray-200 text-[#6ca033]">
                                    <A href="https://registry.igem.org/parts/bba-25roor0n"
                                       className="hover:underline">BBa_25R0OR0N</A>
                                </td>
                                <td className="px-3 py-2 text-[#6ca033]">
                                    <A href="https://registry.igem.org/parts/bba-25fwsdzy"
                                       className="hover:underline">BBa_25FWSDZY</A>
                                </td>
                            </tr>

                            <tr className="hover:bg-gray-50">
                                <td className="px-3 py-2 text-[#6ca033] font-semibold border-r border-gray-200">
                                    <A href="https://registry.igem.org/parts/bba-25goufcy"
                                       className="hover:underline">BBa_25GOUFCY</A>
                                </td>
                                <td className="px-3 py-2 border-r border-gray-200">rLmAUX</td>
                                <td className="px-3 py-2 border-r border-gray-200">Auxin transport protein</td>
                                <td className="px-3 py-2 border-r border-gray-200 text-[#6ca033]">
                                    <A href="https://registry.igem.org/parts/bba-25rbvhjq"
                                       className="hover:underline">BBa_25RBVHJQ</A>
                                </td>
                                <td className="px-3 py-2 text-[#6ca033]">
                                    <A href="https://registry.igem.org/parts/bba-251t5tqy"
                                       className="hover:underline">BBa_251T5TQY</A>
                                </td>
                            </tr>

                            <tr className="hover:bg-gray-50">
                                <td className="px-3 py-2 text-[#6ca033] font-semibold border-r border-gray-200">
                                    <A href="https://registry.igem.org/parts/bba-25qfse2x"
                                       className="hover:underline">BBa_25QFSE2X</A>
                                </td>
                                <td className="px-3 py-2 border-r border-gray-200">rZmUBI</td>
                                <td className="px-3 py-2 border-r border-gray-200">Maize ubiquitin</td>
                                <td className="px-3 py-2 border-r border-gray-200 text-[#6ca033]">
                                    <A href="https://registry.igem.org/parts/bba-250pl3f0"
                                       className="hover:underline">BBa_250PL3F0</A>
                                </td>
                                <td className="px-3 py-2 text-[#6ca033]">
                                    <A href="https://registry.igem.org/parts/bba-253a2zv8"
                                       className="hover:underline">BBa_253A2ZV8</A>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* === Figure Caption === */}
                    <p
                        className="text-sm text-gray-600 mt-3 p-4 text-center"
                        style={{fontFamily: "Urbanist, sans-serif"}}
                    >
                        <strong>Figure 13:</strong> All the parts associated with our endogenous part testing.
                    </p>

                </div>
                <div className="max-w-6xl mx-auto">

                    {/* === Section Header === */}
                    <h1
                        className="text-4xl font-bold mb-8 text-[#6ca033] text-left"
                        style={{fontFamily: "Space Grotesk, sans-serif"}}
                    >
                        TESTING of Visual Testing Constructs
                    </h1>

                    <p className="leading-relaxed mb-4">
                        After the successful assembly of our constructs, we could proceed to{" "}
                        <b>testing them in duckweed</b>. As previously mentioned, we opted for{" "}
                        <b>in planta</b> testing and did not attempt protoplast transformation. First,
                        we tested our visual testing constructs with RUBY as a visual marker to
                        quickly verify the functionality of our promoter + 5′ UTR sequences.
                    </p>

                    <p className="leading-relaxed mb-4">
                        To deliver DNA harboring our testing constructs, we used{" "}
                        <b>Agrobacterium</b>-mediated transformation using{" "}
                        <em>Agrobacterium tumefaciens</em> EHA105. We delivered our L2 visual testing
                        constructs into the cells via electroporation (
                        <A href="/toolbox/agrobacterium-mediated-transformation-protocol/"
                           className="text-[#6ca033] hover:underline">
                            read Agrobacterium electroporation protocol
                        </A>
                        ) and PCR-verified the colonies grown on our plates to confirm correct
                        construct and absence of any recombination event. Positive colonies were
                        selected for liquid pre-cultures and these were used to prepare liquid
                        cultures on the next day. Then, we transiently transformed all our promoter
                        constructs into duckweed (
                        <A href="/plant#transformation" className="text-[#6ca033] hover:underline">
                            read our Vacuum transformation protocol
                        </A>
                        ).
                    </p>

                    <p className="leading-relaxed mb-4">
                        We conducted <b>one iteration of our RUBY visual testing</b> in{" "}
                        <em>Spirodela polyrhiza</em> 7428. Unfortunately, with{" "}
                        <b>negative results</b>. Even after 18 days post-infiltration we did not see
                        any <b>signs of RUBY developing</b> in our duckweeds. The mistake here was{" "}
                        <b>not including the positive control</b> for successful transformation, in
                        this case verified RUBY construct <b>pAM052</b>. Due to time constraints, we
                        did not repeat this experiment and moved directly to testing our measurement
                        constructs.
                    </p>

                    {/* === LEARNING Section === */}
                    <h2
                        className="text-3xl font-bold mb-6 mt-12 text-[#6ca033] "
                        style={{fontFamily: "Space Grotesk, sans-serif"}}
                    >
                        LEARNING from the Visual Testing Constructs Transformation
                    </h2>

                    <p className="leading-relaxed mb-4">
                        As mentioned previously, we did not attempt further iterations of visual
                        constructs testing, but based on the literature research and discussion with
                        Dr. Ordóñez, we might not see the betalain production due to the{" "}
                        <b>depletion of tyrosine</b> in plants as a result of RUBY expression [34].
                        The next iteration should therefore definitely comprise proper positive
                        transformation control and we might consider{" "}
                        <b>supplementing tyrosine</b> to the medium to compensate for its loss during
                        RUBY expression.
                    </p>

                    {/* === TESTING the Measurement Constructs === */}
                    <h2
                        className="text-3xl font-bold mb-6 mt-12  text-[#6ca033] "
                        style={{fontFamily: "Space Grotesk, sans-serif"}}
                    >
                        TESTING the Measurement Constructs Using Fluorescence
                    </h2>

                    <p className="leading-relaxed mb-4">
                        Even after not seeing the RUBY expression in our visual testing constructs,
                        we moved to trying out our measurement constructs. The procedure used for{" "}
                        <em>Agrobacterium</em> transformation and duckweed transient transformation
                        was the same as with visual testing constructs.
                    </p>

                    <p className="leading-relaxed mb-4">
                        We conducted <b>two iterations</b> of the measurement construct testing using
                        fluorescence.
                    </p>

                    <h3
                        className="text-2xl font-bold mb-4"
                        style={{fontFamily: "Space Grotesk, sans-serif"}}
                    >
                        1st Iteration
                    </h3>

                    <p className="leading-relaxed mb-4">
                        In the first iteration, we <b>transformed all of our constructs</b> into{" "}
                        <b>three duckweed species</b> to see whether our regulatory sequences drive
                        expression in multiple duckweed species. This is reasonable to assume for{" "}
                        <em>Spirodela</em> and <em>Lemna</em> species, as these are the ones that were
                        included in our <em>in silico</em> identification of the regulatory sequences.
                        However, this may not be the case for <em>Wolffia</em>, <em>Wolffiella</em> or{" "}
                        <em>Landoltia</em>. Based on the results of{" "}
                        <A href="/plant#vacuum-testing" className="text-[#6ca033] hover:underline">
                            Vacuum Infiltration Testing
                        </A>
                        , we have chosen these 3 species for transformation with our measurement
                        constructs:
                    </p>

                    <ul className="list-disc list-inside space-y-1 text-gray-800 mb-4">
                        <li><em>Spirodela polyrhiza</em> 7428</li>
                        <li><em>Lemna gibba</em> 7742</li>
                        <li><em>Wolffia globosa</em> 9527</li>
                    </ul>

                    <p className="leading-relaxed mb-4">
                        We evaluated RFP expression at 6, 12 and 18 days post-infiltration using
                        fluorescence microscope ZEISS Axio Zoom V16, but we did not detect any
                        positive result for neither of the constructs in none of the species (see
                        Figure 14). The worse thing is, that we did not observe any fluorescence on
                        the positive control <b>pAM0101</b>, which suggested unsuccessful
                        transformation event.
                    </p>

                </div>
            </div>

            <div
                className="min-h-screen bg-white p-8 text-lg text-justify space-y-6"
                style={{fontFamily: "Urbanist, sans-serif"}}
            >
                <div className="max-w-6xl mx-auto">

                    {/* === Figure Section === */}
                    <div className="flex flex-col items-center space-y-4">
                        <div className="flex flex-col md:flex-row justify-center items-center">
                            <img
                                src="https://static.igem.wiki/teams/5642/images/toolbox/promoterssilico/2/3-light.avif"
                                alt="Wolffia globosa fluorescence test"
                            />
                        </div>

                        <p
                            className="text-sm text-gray-600 text-center max-w-4xl mt-3"
                            style={{fontFamily: "Urbanist, sans-serif"}}
                        >
                            <strong>Figure 14:</strong> First iteration of measurement constructs testing using
                            fluorescence.
                            All pictures were taken using ZEISS AxioZoom V16 with 587 nm excitation wavelength 12 days
                            post-infiltration
                            with our testing constructs, in this case rSpPOL
                            No signal was observed for (A) <em>Wolffia globosa</em> 9527, (B) <em>Lemna gibba</em> 7742,
                            nor (C) <em>Spirodela polyrhiza</em> 7428.
                        </p>
                    </div>

                    {/* === Learning Section === */}
                    <h2
                        className="text-3xl font-bold mb-6 mt-12 text-[#6ca033]"
                        style={{fontFamily: "Space Grotesk, sans-serif"}}
                    >
                        LEARNING from the 1st Iteration
                    </h2>

                    <p className="leading-relaxed mb-4">
                        At this time, we luckily encountered{" "}
                        <A
                            href="/human-practices#prof-wang"
                            className="text-[#6ca033] hover:underline"
                        >
                            professor Kan Wang
                        </A>, who shed light on our problem with low transformation efficiencies.
                        We were using <b>old <em>Agrobacterium</em> pre-cultures</b> for inoculating the culture for
                        transformation which,
                        according to professor Wang, has <b>significant negative impact</b> on the transformation
                        efficiency.
                    </p>

                    <p className="leading-relaxed mb-4">
                        We also realized that <b>using RFP as a reporter gene was not the best decision</b> as the{" "}
                        <b>background chlorophyll fluorescence was significant</b> and detecting any positive result
                        would be difficult.
                        Another learning from this iteration is that performing microscopy on{" "}
                        <b>Wolffia plates is especially difficult</b>. Its small size, large amounts of water present on
                        fronds,
                        as well as high variability of distribution of fronds on the plate make signal detection very
                        hard.
                    </p>

                </div>

                <div className="max-w-6xl mx-auto">

                    {/* === Section Title === */}
                    <h2
                        className="text-3xl font-bold mb-6 mt-12"
                        style={{fontFamily: "Space Grotesk, sans-serif"}}
                    >
                        2nd Iteration
                    </h2>

                    <p className="leading-relaxed mb-4">
                        In the second iteration of our measurement constructs testing, we applied what we learned in the
                        first one and{" "}
                        <b>started our pre-cultures from fresh glycerol stocks</b>. We did not have time to re-design
                        our constructs and
                        switch the reporter used, so we stuck with the same setting, but used only <em>S.
                        polyrhiza</em> 7428 and{" "}
                        <em>L. gibba</em> 7742 for transformations to avoid struggles with <em>Wolffia</em>.
                    </p>

                    <p className="leading-relaxed mb-4">
                        This time, our <b>positive control (<A href="https://registry.igem.org/parts/bba-25dnbygj"
                                                               className="text-[#6ca033] hover:underline">pAM0101</A>)</b> was{" "}
                        <b>positive at 6 days post-infiltration</b> already and we could detect signal even at 18 days
                        post-infiltration
                        in both tested species (see Figure 15). We were very happy to see that also our{" "}
                        <A href="https://registry.igem.org/parts/bba-250pl3f0"
                           className="text-[#6ca033] hover:underline">
                            measurement construct with rZmUBI
                        </A>{" "}
                        was producing positive signal in both <em>S. polyrhiza</em> and <em>L. gibba</em> (Figure 16),
                        although significantly
                        weaker one when compared to pAM0101. To our disappointment, none of our constructs has shown a
                        positive signal.
                    </p>

                    {/* === Figure 15 === */}
                    <div className="flex flex-col items-center space-y-4 mt-10">
                        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
                            <img
                                src="https://static.igem.wiki/teams/5642/images/toolbox/promoterssilico/2/4-light.avif"
                                alt="Spirodela polyrhiza 7428 fluorescence with pAM0101"
                            />
                        </div>

                        <p
                            className="text-sm text-gray-600 text-center max-w-4xl mt-3"
                            style={{fontFamily: "Urbanist, sans-serif"}}
                        >
                            <strong>Figure 15:</strong> Second iteration of measurement constructs testing using
                            fluorescence.
                            These pictures are showing positive controls transformed with{" "}
                            pAM0101 with visible eGFP signal
                            (arrows)
                            were taken using ZEISS AxioZoom V16 with 587 nm and 488 nm excitation wavelength 9 days
                            post-infiltration,
                            and 2500 ms exposure time. Both tested species (A) <em>Spirodela polyrhiza</em> 7428 and
                            (B) <em>Lemna gibba</em> 7742 were expressing fluorescence.
                        </p>
                    </div>

                    {/* === Figure 16 === */}
                    <div className="flex flex-col items-center space-y-4 mt-12">
                        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
                            <img
                                src="https://static.igem.wiki/teams/5642/images/toolbox/promoterssilico/2/5-light.avif"
                                alt="Spirodela polyrhiza 7428 rZmUBI RFP signal"
                            />
                        </div>

                        <p
                            className="text-sm text-gray-600 text-center max-w-4xl mt-3"
                            style={{fontFamily: "Urbanist, sans-serif"}}
                        >
                            <strong>Figure 16:</strong> Second iteration of measurement constructs testing using ZEISS
                            AxioZoom V16
                            with 587 nm excitation wavelength 9 days post-infiltration with our testing constructs, in
                            this case{" "}
                            rZmUBI. We observed weak
                            transformation efficiency
                            but detected the RFP signal in both (A) <em>Spirodela polyrhiza</em> 7428 and (B) <em>Lemna
                            gibba</em> 7742.
                        </p>
                    </div>

                </div>
            </div>


            <div
                className="min-h-screen bg-white p-8 text-lg text-justify space-y-6"
                style={{fontFamily: "Urbanist, sans-serif"}}
            >
                <div className="max-w-6xl mx-auto">

                    {/* === LEARNING from the 2nd Iteration === */}
                    <h2
                        className="text-3xl font-bold mb-6 mt-12 text-[#6ca033]"
                        style={{fontFamily: "Space Grotesk, sans-serif"}}
                    >
                        LEARNING from the 2nd Iteration
                    </h2>

                    <p className="leading-relaxed mb-4">
                        We tried to come up with an explanation for our observations. The first one could be that our
                        promoters simply{" "}
                        <b>do not work</b>, which would <b>not be that unexpected</b>. It was previously shown that
                        constructing working
                        monocot promoters is a very hard quest and often does not yield positive results [35]. However,
                        we were not
                        satisfied with this explanation and tried to go deeper.
                    </p>

                    <p className="leading-relaxed mb-4">
                        The peculiar thing is that the construct we were using as a positive control (pAM0101) has
                        technically the{" "}
                        <b>same architecture as our measurement one with RFP under rZmUBI</b>. The difference is in the
                        backbone, but the
                        backbone itself is <b>not part of the T-DNA</b> that is delivered into duckweed and therefore
                        should not play a
                        role in expression. Backbone could influence the amount of plasmid DNA in{" "}
                        <em>Agrobacterium</em>, but as pH4T is optimized for replication in{" "}
                        <em>Agrobacterium</em>, it seems <b>improbable that it would negatively affect the
                        expression</b>.
                    </p>

                    <p className="leading-relaxed mb-4">
                        Secondly, the constructs differ in the gene for antibiotic resistance, as pAM0101 is carrying
                        resistance against{" "}
                        <b>hygromycin</b> while our measurement construct harbors the gene for{" "}
                        <b>neomycin</b> resistance. However, the <b>total T-DNA length</b> is in both cases around{" "}
                        <b>5 kb</b>, therefore this should not be the limiting factor of the expression.
                    </p>

                    <p className="leading-relaxed mb-4">
                        The last and the <b>most obvious difference</b> between these two constructs is the{" "}
                        <b>reporter gene used</b> – pAM0101 carries plant codon-optimized <b>eGFP</b> and our construct
                        carries plant codon
                        optimized <b>RFP</b>. Both proteins are very similar in structure [36]. Most importantly,{" "}
                        <b>expression of the reporter</b> in both constructs is{" "}
                        <b>driven by rZmUBI and terminated by t35S</b>. Therefore, the level of transcription{" "}
                        <b>should not differ at all</b> between these two constructs. What could differ is the
                        translation level between
                        eGFP and RFP as a result of several phenomena – <b>different mRNA stability, codon usage,
                        folding</b>, etc.
                        At the same time, RFP could be expressed but the level of expression may not be strong enough to
                        be detected via
                        fluorescence methods.
                    </p>

                    <p className="leading-relaxed mb-4">
                        Hence, instead of trying out more iterations, we opted for trying to detect the RFP transcript
                        in the samples to
                        see whether at least transcription is present.
                    </p>

                    {/* === TESTING of Measurement Constructs === */}
                    <h2
                        className="text-3xl font-bold mb-6 mt-12 text-[#6ca033]"
                        style={{fontFamily: "Space Grotesk, sans-serif"}}
                    >
                        TESTING of our Measurement Constructs Using Quantitative PCR
                    </h2>

                    <p className="leading-relaxed mb-4">
                        To <b>detect the presence of RFP and NPTII transcripts</b> in the transformed duckweeds, we had
                        to{" "}
                        <b>isolate their RNA</b> first. For that, we randomly picked 10–15 fronds for each of the
                        samples from the second
                        iteration of the fluorescence testing. We <b>lyophilized the tissue and homogenized it</b>. We
                        used TRIzol
                        isolation method to isolate total RNA from duckweed [37]. Subsequently, we used the{" "}
                        <b>DNase I treatment</b> to remove any DNA contamination in our RNA samples and could move to
                        cDNA preparation.
                    </p>

                    <p className="leading-relaxed mb-4">
                        For that, we used <b>DBscript cDNA Synthesis Kit</b> gifted to us by{" "}
                        <b>DiANA Biotechnologies</b>. We used PCR with primers o145, o146 to{" "}
                        <b>verify the presence of NPTII transcript</b> and o158, o159 for{" "}
                        <b>RFP transcript presence verification</b>.
                    </p>

                </div>
            </div>

            <div
                className="min-h-screen bg-white p-8 text-lg text-justify space-y-6"
                style={{fontFamily: "Urbanist, sans-serif"}}
            >
                <div className="max-w-6xl mx-auto">

                    {/* === Figure 17 === */}
                    <div className="flex flex-col items-center space-y-4 mb-12">
                        <img
                            src="https://static.igem.wiki/teams/5642/images/toolbox/promoterssilico/2/6.avif"
                            alt="PCR verification of RFP and NPTII transcripts"
                            className="rounded-lg w-full max-w-3xl"
                        />
                        <p
                            className="text-sm text-gray-600 text-center max-w-5xl mt-3"
                            style={{fontFamily: "Urbanist, sans-serif"}}
                        >
                            <strong>Figure 17:</strong> cDNA from <em>S. polyrhiza</em> 7428 (left) and <em>L.
                            gibba</em> 7742 (right)
                            was used as a template for PCR reactions to verify the presence of <b>RFP (upper
                            row)</b> and{" "}
                            <b>NPTII (bottom row)</b> transcripts. The samples are ordered from left to right as:{" "}
                            <b>rZmUBI - rSpARF - rSpPOL - rLmACC - rLmUBI - rLmAUX - rSpUBI - rSpWDP.</b> Pooled cDNA
                            from all samples was
                            used as a <b>negative control (NC)</b> to confirm successful DNase I treatment. The
                            rZmUBI-RFP-t35S L2 plasmid
                            was used as a positive control (PC).
                        </p>
                    </div>

                    <p className="leading-relaxed mt-4">
                        The PCR reaction performed on cDNA confirmed presence of both RFP and NPTII transcripts in most
                        of the samples.
                        Interestingly, the NPTII bands were more intense than those confirming the RFP presence,
                        suggesting higher amount
                        of the NPTII transcript. Visually, in <em>L. gibba</em> 7742 template samples, RFP-specific band
                        was missing in samples
                        with RFP under rSpARF, rSpUBI and rSpWDP promoter + 5′ UTR. The RFP-specific band was also
                        missing in the sample
                        from <em>S. polyrhiza</em> 7428 with RFP under rSpUBI. Having confirmed the cDNA presence in
                        most of the samples,
                        we could proceed with quantitative PCR.
                    </p>

                    {/* === Measurement of Promoter + 5' UTR Activity === */}
                    <h2
                        className="text-3xl font-bold mb-6 mt-12"
                        style={{fontFamily: "Space Grotesk, sans-serif"}}
                    >
                        Measurement of Promoter + 5′ UTR Transcriptional Activity Using qPCR
                    </h2>

                    <p className="leading-relaxed mb-4">
                        With <b>confirmed presence of both RFP and NPTII transcripts</b> in most of the samples, we
                        could move to
                        attempting their <b>quantification</b>. Our design allowed for <b>easy and high-throughput
                        ratiometric method</b>.
                        For qPCR, we used <b>KAPA SYBR FAST qPCR 2x Master Mix</b> gifted to us by <b>Dr. Ordóñez</b>.
                        We used the same
                        primers as for the cDNA transcript verification (
                        <A href="/toolbox/programmable-duckweed/part-collection#primer-database"
                           className="text-[#6ca033] hover:underline">
                            o145 and o146 for NPTII quantification and o158 together with o159 for RFP quantification
                        </A>
                        ). Reaction mixes were pipetted onto a 96-well plate followed by template
                        DNA, and the reaction
                        ran in the <b>LightCycler® 96 Instrument</b>.
                    </p>

                    <p className="leading-relaxed mb-4">
                        We conducted several <b>qPCR</b> reactions in which we adjusted the primer annealing
                        temperatures and extension times,
                        as well as optimal cDNA amounts in the reaction mixtures.
                    </p>

                    {/* === Suitable Template Amount === */}
                    <h3
                        className="text-2xl font-semibold mb-4 mt-10"
                        style={{fontFamily: "Space Grotesk, sans-serif"}}
                    >
                        Suitable Template Amount Determination
                    </h3>

                    <p className="leading-relaxed mb-4">
                        In our first measurement iteration, we ran dilution series of four cDNA concentrations starting
                        at{" "}
                        <b>25 ng of RNA equivalent per reaction</b> and ranging down to 0.2 ng of RNA equivalent per
                        reaction.
                        Reactions were performed in duplicates and the mean Cq (quantification cycle) parameter was used
                        to evaluate the
                        optimal reaction
                        conditions. For both <em>S. polyrhiza</em> 7428 and <em>L. gibba</em> 7742 cDNA samples, the
                        best concentration
                        of cDNA proved to be <b>25 ng of RNA equivalent</b>, as the Cq values were consistently lower
                        than 30 cycles and
                        the difference between the mean Cq and mean Cq of the negative control was more than 5 cycles.
                    </p>

                    {/* === Standard Curve Construction === */}
                    <h3
                        className="text-2xl font-semibold mb-4 mt-10"
                        style={{fontFamily: "Space Grotesk, sans-serif"}}
                    >
                        Standard Curve Construction
                    </h3>

                    <p className="leading-relaxed mb-4">
                        In the second iteration we tried to optimize the standard curve we could use for quantification
                        of the transcript
                        copies in our samples. For that, we used this program:
                    </p>

                </div>
            </div>

            <div
                className="min-h-screen bg-white p-8 text-lg text-justify space-y-6"
                style={{fontFamily: "Urbanist, sans-serif"}}
            >
                <div className="max-w-6xl mx-auto">

                    {/* === qPCR Program Table === */}
                    <div className="overflow-x-auto mt-8">
                        <table className="min-w-full border border-gray-300 text-center text-sm">
                            <thead className="bg-[#6ca033] text-gray-900">
                            <tr>
                                <th className="border border-gray-300 px-4 py-2 font-semibold">Step</th>
                                <th className="border border-gray-300 px-4 py-2 font-semibold">Time</th>
                                <th className="border border-gray-300 px-4 py-2 font-semibold">Temperature</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2 font-semibold">Preincubation</td>
                                <td className="border border-gray-300 px-4 py-2">600 s</td>
                                <td className="border border-gray-300 px-4 py-2">95 °C</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2 font-semibold" rowSpan={3}>
                                    3 Step Amplification (40×)
                                </td>
                                <td className="border border-gray-300 px-4 py-2">3 s</td>
                                <td className="border border-gray-300 px-4 py-2">95 °C</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2">20 s</td>
                                <td className="border border-gray-300 px-4 py-2">60 °C</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2">10 s</td>
                                <td className="border border-gray-300 px-4 py-2">72 °C (detection)</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2 font-semibold" rowSpan={3}>Melting</td>
                                <td className="border border-gray-300 px-4 py-2">10 s</td>
                                <td className="border border-gray-300 px-4 py-2">95 °C</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2">60 s</td>
                                <td className="border border-gray-300 px-4 py-2">65 °C</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2">1 s</td>
                                <td className="border border-gray-300 px-4 py-2">97 °C</td>
                            </tr>
                            </tbody>
                        </table>
                        <p
                            className="text-sm text-gray-600 mt-3 p-4 text-center"
                            style={{fontFamily: "Urbanist, sans-serif"}}
                        >
                            <strong>Figure 18:</strong> Program used for qPCR measurements.
                        </p>
                    </div>

                    <p className="leading-relaxed mt-6">
                        We used this program to create our standard curves for both RFP and NPTII DNA amounts.
                        For this purpose, dilution series of triplicates starting with 25 ng going down to 0.04 ng
                        of our{" "}
                        <A href="https://registry.igem.org/parts/bba-250pl3f0"
                           className="text-[#6ca033] hover:underline">
                            L2 plasmid with RFP under rZmUBI
                        </A>{" "}
                        was used. We obtained these standard curves:
                    </p>

                    {/* === Figure 20 (Calibration Curves) === */}
                    <div className="flex flex-col items-center space-y-4 mt-10">
                        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
                            <img
                                src="https://static.igem.wiki/teams/5642/images/toolbox/promoterssilico/2/7.avif"
                                alt="RFP calibration curve"
                                className="rounded-lg max-w-lg"
                            />
                            <img
                                src="https://static.igem.wiki/teams/5642/images/toolbox/promoterssilico/2/8.avif"
                                alt="NPTII calibration curve"
                                className="rounded-lg max-w-lg"
                            />
                        </div>

                        <p
                            className="text-sm text-gray-600 text-center max-w-4xl mt-3"
                            style={{fontFamily: "Urbanist, sans-serif"}}
                        >
                            <strong>Figure 19.</strong> Calibration curves for both (A) RFP and (B) NPTII transcript
                            quantification.
                            The linear equations for (A) Cq = −2.45 log₁₀(c) + 10.33, (B) Cq = −2.57 log₁₀(c) + 9.52.
                        </p>
                    </div>

                    {/* === Equation Explanation === */}
                    <div className="text-center mt-10">
                        <p className="mb-3">We can calculate the amplification efficiency of the reaction as:</p>
                        <div className="bg-white rounded max-w-xs mx-auto">
                            <img
                                src="https://static.igem.wiki/teams/5642/images/toolbox/promoterssilico/2/equation-2.avif"
                                alt="Testing construct schematic"
                                className="w-full h-auto"
                            />
                        </div>
                    </div>

                    <p className="leading-relaxed mt-3">
                        Where <em>b</em> is the slope of the line. The efficiencies are E = 2.56 for RFP and E = 2.45
                        for NPTII,
                        which means more than 100 % amplification efficiency for both reactions, suggesting formation of
                        non-specific products.
                        Also other parameters of standard curves are not ideal, as R² and the standard error. These
                        standard curves would be ideally
                        repeated and then used for quantification; however, due to time constraints, we were unable to
                        do so and proceeded
                        with transcriptional level evaluation.
                    </p>

                </div>
            </div>
            <div
                className="min-h-screen bg-white p-8 text-lg text-justify space-y-6"
                style={{fontFamily: "Urbanist, sans-serif"}}
            >
                <div className="max-w-6xl mx-auto">

                    {/* === Transcriptional Level Evaluation === */}
                    <h2
                        className="text-3xl font-bold mb-6 mt-12"
                        style={{fontFamily: "Space Grotesk, sans-serif"}}
                    >
                        Transcriptional Level Evaluation
                    </h2>

                    <p className="leading-relaxed mb-4">
                        Despite non-ideal results from our standard curves preparation, we moved to attempting to
                        evaluate the
                        level of transcription. We used the same reaction conditions as previously for the reactions
                        with cDNA
                        templates and concentration of 25 ng for both <em>Spirodela polyrhiza</em> 7428 and
                        <em> Lemna gibba</em> 7742 transformed with our measurement constructs.
                    </p>

                    <p className="leading-relaxed mb-4">
                        Based on the standard curves for both RFP and NPTII, we calculated initial concentrations of
                        both transcripts
                        in the cDNA samples and also calculated the ratio between the RFP and NPTII transcripts.
                        This is how we technically calculated how many times stronger the tested promoter + 5′ UTR was
                        than rNOS.
                    </p>

                    <p className="leading-relaxed mb-4">
                        Or we should rather say weaker. To our surprise, for all the tested samples, NPTII concentration
                        was higher
                        than that of RFP. This confirmed the visual observation of stronger NPTII bands when conducting
                        the regular PCR
                        (see Figure 17). For the detailed results, see Figure 20.
                    </p>

                    {/* === Figure 20 === */}
                    <div className="flex flex-col items-center space-y-4 mt-10">
                        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
                            <img
                                src="https://static.igem.wiki/teams/5642/images/toolbox/promoterssilico/2/9-cropped.avif"
                                alt="RFP vs NPTII ratio in Spirodela polyrhiza"
                                className="rounded-lg max-w-6xl mx-auto"
                            />
                        </div>

                        <p
                            className="text-sm text-gray-600 text-center max-w-4xl mt-3"
                            style={{fontFamily: "Urbanist, sans-serif"}}
                        >
                            <strong>Figure 20.</strong> Ratio of NPTII and RFP transcript concentration in (A)
                            <em>Spirodela polyrhiza</em> 7428 and (B) <em>Lemna gibba</em> 7742 transformed with our
                            measurement constructs.
                            All samples were evaluated in duplicates and the mean Cq was used to calculate the
                            concentrations based on the
                            standard curves in Figure 19.
                        </p>
                    </div>

                </div>
            </div>

            <div
                className="max-w-6xl mx-auto bg-white text-lgtext-gray-900 leading-relaxed p-8 font-[Urbanist,sans-serif]">
                {/* LEARNING Section */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-[#6ca033] mb-4"
                        style={{fontFamily: "Space Grotesk, sans-serif"}}
                    >
                        LEARNING from Measurement Constructs Testing Using Quantitative PCR
                    </h2>

                    <p className="mb-4 text-lg">
                        Based on our qPCR results, it seems that all the tested promoter+5′UTRs
                        are driving <span className="font-bold">weaker transcript production</span>
                        than the standard rNOS, which is unexpected as especially{" "}
                        <span className="font-bold text-green-700">rZmUBI</span> should be the
                        regulatory part producing high amounts of transcript in duckweed. For some
                        regulatory parts (for instance rSpPOL in{" "}
                        <span className="italic">S. polyrrhiza</span> 7428 and rLmAUX, together with
                        rLmACC in <span className="italic">L. gibba</span> 7742), it looks like they
                        might be stronger than rZmUBI. As expected, rSpWDP regulatory part is{" "}
                        <span className="font-bold">showing practically no expression</span> in both
                        tested species, as was previously shown by regular PCR. In general, it looks
                        like the regulatory parts with origin in{" "}
                        <span className="italic">Spirodela</span> tend to produce higher amounts of
                        transcript in the native species, which is also suggested for the parts
                        originated in <span className="italic">Lemna</span>.
                    </p>

                    <p className="mb-4 text-lg">
                        However, this assay should be{" "}
                        <span className="font-bold">repeated with different conditions</span>, for
                        instance higher annealing temperatures or shorter extension time to eliminate
                        the non-specific products formation (suggested by high amplification
                        efficiency), as well as with{" "}
                        <span className="font-bold">more precise standard curve</span>. Therefore, no
                        definite conclusions should be drawn out of results, yet.
                    </p>
                </section>

                {/* Outlook Section */}
                <section>
                    <h3 className="text-3xl font-bold  mb-4"
                        style={{fontFamily: "Space Grotesk, sans-serif"}}
                    >Outlook</h3>

                    <p className="mb-4 text-lg">
                        After completing the suggested optimization steps and{" "}
                        <span className="font-bold">fine-tuning the qPCR conditions</span>, it would
                        be interesting to examine the difference between expression of the tested
                        regulatory parts and rNOS, as well as between the same constructs driving the
                        expression of different genes. For instance,{" "}
                        <span className="font-bold">switching the coding sequences</span> between the
                        tested constructs and rNOS to account for possible differences between the{" "}
                        <span className="font-bold">mRNA stability</span> of the genes in duckweed
                        environment.
                    </p>

                    <p className="text-lg">
                        Furthermore, testing{" "}
                        <span className="font-bold">more regulatory parts</span> obtained from our{" "}
                        <span className="italic"><em>in silico</em></span> workflow could elucidate the parts
                        that are actually able to drive strong protein expression in duckweed. With
                        our suggested workflow, researchers can easily isolate and characterize also{" "}
                        <span className="font-bold">terminator+3′UTR regulatory sequences</span> in
                        multiple duckweed species. Eventually, our pipeline can be expanded across{" "}
                        <span className="font-bold">
            multiple duckweed species with more available transcriptomes emerging,
            opening doors to true user-friendliness of duckweed genetic engineering.
          </span>
                    </p>
                </section>
            </div>

        </div>
    );
};


export default PromoterLibraryConstruction;
