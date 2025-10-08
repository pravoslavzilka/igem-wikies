import A from "../../../A.tsx";

export default function Page1() {
    return (
        <div>
            <div
                className="max-w-6xl mx-auto bg-white text-gray-900 leading-relaxed p-8 font-[Urbanist,sans-serif] space-y-8">
                {/* Title */}
                <h2
                    className="font-bold text-center"
                    style={{
                        fontFamily: "Space Grotesk, sans-serif",
                        fontSize: window.innerWidth < 768 ? "1.6rem" : "2.2rem",
                    }}
                >
                    The Duckweed Toolbox
                </h2>

                <div className="grid md:grid-cols-2 gap-6">
                    <div className="grid-span-1">
                        {/* Intro paragraphs */}
                            <div className="text-justify text-lg mt-8 space-y-4">
                                <p className="font-bold ">
                                    We inserted a transgene into the nuclear genome of<span className="text-[#6ca033]"> duckweed</span> fronds using{" "}
                                    <span className="text-[#6ca033]">transposase-assisted insertion</span>.
                                </p>
                                <p className="font-bold text-2xl">
                                    <span className="text-[#6ca033]">The first </span>  achievement of its kind <span className="text-[#6ca033]">in plant synthetic biology.</span>
                                </p>

                                <p className="font-bold">
                                    We went that far <span className="text-[#6ca033]">to make duckweed genetic engineering user-friendly </span>and accessible for everyone                                    –
                                    starting with us.
                                </p>

                                <p className="font-bold ">
                                    Even if we didn’t succeed completely, we laid a strong foundation so that <span className="text-[#6ca033]">future iGEM teams</span> will
                                    have the chance to <span className="text-[#6ca033]">engineer many stellar use </span> cases with <span className="text-[#6ca033]">duckweed!</span>
                                </p>
                            </div>
                    </div>
                    <div className="grid-span-1">
                        <img
                            src="https://static.igem.wiki/teams/5642/images/toolbox/toolbox/duckweed.avif"
                            alt="The Duckweed Toolbox"
                            className="w-full rounded-lg object-cover"
                        />

                    </div>

                </div>

                {/* Section 1 */}
                <div className="space-y-6">
                    <h3
                        className="font-bold text-center underline"
                        style={{
                            fontFamily: "Space Grotesk, sans-serif",
                            fontSize: window.innerWidth < 768 ? "1.2rem" : "1.5rem",
                        }}
                    >
                        <A href="#programmable">

                            iGEM Brno is making Duckweed Programmable
                        </A>
                    </h3>

                    <div className="grid md:grid-cols-3 gap-6">
                        {/* TAirF parts */}
                        <div className="text-center rounded-3xl overflow-hidden">
                            <A href="#taifr">
                                <img
                                    src="https://static.igem.wiki/teams/5642/images/toolbox/toolbox/plantsynbio/slide1.avif"
                                    alt="TAirF parts"
                                    className="w-full object-cover"
                                />
                            </A>
                        </div>

                        {/* Transformation protocol */}
                        <div className="text-center rounded-3xl overflow-hidden">
                            <A href="#transformation">
                                <img
                                    src="https://static.igem.wiki/teams/5642/images/toolbox/toolbox/plantsynbio/slide1-copy.avif"
                                    alt="Transformation protocol"
                                    className="w-full object-cover"
                                />
                            </A>
                        </div>

                        {/* CRISPR parts */}
                        <div className="text-center rounded-3xl overflow-hidden">
                            <A href="#crispr">
                                <img
                                    src="https://static.igem.wiki/teams/5642/images/toolbox/toolbox/plantsynbio/slide1-copy-2.avif"
                                    alt="CRISPR parts"
                                    className="w-full object-cover"
                                />
                            </A>
                        </div>
                    </div>
                </div>

                {/* Section 2 */}
                <div className="space-y-6">
                    <h3
                        className="font-bold text-center underline"
                        style={{
                            fontFamily: "Space Grotesk, sans-serif",
                            fontSize: window.innerWidth < 768 ? "1.2rem" : "1.5rem",
                        }}
                    >
                        <A href="#predictable">
                            iGEM Brno is making Duckweed Predictable
                        </A>
                    </h3>

                    <div className="grid md:grid-cols-3 gap-6">
                        {/* Cultivation protocol */}
                        <div className="text-center rounded-3xl overflow-hidden">
                            <A href="#cultivation">
                                <img
                                    src="https://static.igem.wiki/teams/5642/images/toolbox/toolbox/plantsynbio/slide2-copy-2.avif"
                                    alt="Cultivation protocol"
                                    className="w-full object-cover"
                                />
                            </A>
                        </div>

                        {/* Cultivator hardware */}
                        <div className="text-center rounded-3xl overflow-hidden">
                            <A href="#cultivator">

                                <img
                                    src="https://static.igem.wiki/teams/5642/images/toolbox/toolbox/plantsynbio/slide2-copy.avif"
                                    alt="Cultivator hardware"
                                    className="w-full object-cover"
                                />
                            </A>
                        </div>

                        {/* Predictor model */}
                        <div className="text-center rounded-3xl overflow-hidden">
                            <A href="#prediction">
                                <img
                                    src="https://static.igem.wiki/teams/5642/images/toolbox/toolbox/plantsynbio/slide2.avif"
                                    alt="Predictor model"
                                    className="w-full object-cover"
                                />
                            </A>
                        </div>
                    </div>
                </div>
            </div>


            <div className="max-w-6xl mx-auto bg-white text-gray-900 leading-relaxed p-8 font-[Urbanist,sans-serif]">
                <div className="grid md:grid-cols-[1fr_auto_1fr] gap-6 items-center">
                    {/* LEFT COLUMN */}
                    <div className="space-y-4">
                        <h3
                            className="font-bold text-[#6ca033]"
                            style={{
                                fontFamily: "Space Grotesk, sans-serif",
                                fontSize: window.innerWidth < 768 ? "1.2rem" : "1.6rem",
                            }}
                        >
                            WHAT LOOKED LIKE A PROBLEM
                            <br/>
                            TO SOLVE USING DUCKWEED...
                        </h3>

                        <p className="text-justify">
            <span className="font-bold">
              <A className='hover:underline text-[#6ca033]' href="/human-practices#boosted-duckweed">“DUCKWEED BESTIE,”</A> with an improved growth rate to be not just 3 times but at least 10 times higher than
              soybean, would grow on manure, converting it into protein-rich biomass right on farms – saving farmers
              money, Brazilian nature and reducing nitrogen emissions.
            </span>{" "}
                            At least, that was our initial goal at the beginning of iGEM project.
                        </p>

                        <p className="text-justify">
                            To achieve this, we developed <span
                            className="font-bold">two detailed scientific concepts</span> for
                            engineering duckweed. These ranged from enhancing the enzymatic activity of{" "}
                            <span className="font-bold">glutamine synthetase</span> through continuous directed
                            evolution — and
                            subsequently introducing the improved enzyme gene into duckweed — to boosting duckweed’s
                            growth rate by
                            inserting <span className="font-bold">plant transcription factors</span> known to increase
                            biomass yield,
                            and even to <span className="font-bold">engineering the duckweed chloroplast</span> itself.
                            <A className='hover:underline text-[#6ca033]' href="/human-practices#ideation"> Check it out here!</A> We really went quite wild!
                        </p>
                    </div>

                    {/* ARROW — CENTERED */}
                    <div className="flex justify-center items-center md:h-full">
                        <svg
                            viewBox="0 0 140 60"
                            className="w-16 h-8 md:w-24 md:h-12 mx-auto md:my-auto"
                            aria-hidden="true"
                        >
                            <polygon points="0,25 95,25 95,10 140,30 95,50 95,35 0,35" fill="black"/>
                        </svg>
                    </div>

                    {/* RIGHT COLUMN */}
                    <div className="space-y-4">
                        <h3
                            className="font-bold text-[#6ca033]"
                            style={{
                                fontFamily: "Space Grotesk, sans-serif",
                                fontSize: window.innerWidth < 768 ? "1.2rem" : "1.6rem",
                            }}
                        >
                            ...TURNED INTO A PROBLEM
                            <br/>
                            WITH THE DUCKWEED ITSELF!
                        </h3>

                        <p className="text-justify">
            <span className="font-bold">
              But we just COULD NOT DO IT within iGEM timeframe. Getting a gene into duckweed takes months of work with
              unpredictable results.
            </span>{" "}
                            Calli must be generated, transformed with <span className="italic">Agrobacterium</span>,
                            selected, and
                            regenerated – a process of 5 months, nearly an entire iGEM season for one iteration. We knew
                            it wouldn’t be
                            as fast as bacteria, but expected two months like <span
                            className="italic">Arabidopsis</span>.
                        </p>

                        <p className="text-justify">
                            Not only the slowness, but experts warned that callus-mediated transformation often causes
                            somaclonal
                            mutations or duplicated genomes, leaving transgenic lines slow, ineffective, and{" "}
                            <span className="font-bold">
              discouraging efforts of scientists and iGEMers to engineer duckweeds to do useful stuff
            </span>{" "}
                            (read more at{" "}
                            <A  href="/toolbox/why-plant-suck"className='hover:underline text-[#6ca033]'>
                                Why plants suck
                            </A>
                            )...
                        </p>
                    </div>
                </div>
            </div>


            <div
                className="max-w-6xl mx-auto bg-white text-gray-900 leading-relaxed p-8 font-[Urbanist,sans-serif] space-y-8">
                <div className="grid md:grid-cols-[1fr_auto_1fr] gap-6 items-center">
                    {/* === LEFT COLUMN === */}
                    <div className="space-y-6">
                        <p className="text-justify">
            <span className="font-bold">
              Duckweed, the smallest and fastest-growing flowering plant,
            </span>{" "}
                            hides immense <span className="font-bold">biotechnological potential.</span> Being a rich
                            source of plant-based protein with a full amino acid spectrum, which we aimed to use to
                            address the affordability of protein feedstock — is just one of duckweed’s superior
                            characteristics (read more and see references at {" "}
                            <A href="/toolbox/deep-dive-on-duckweed/" className='hover:underline text-[#6ca033]'>
                                Deep dive on duckweed page
                            </A>
                            ). Other features make duckweed a promising phytoremediation chassis, a complex
                            recombinant protein factory, and even a new model for studying monocot plants (read more
                            at{" "}
                            <A href="/plant/why-duckweed" className='mt-4 hover:underline text-[#6ca033]'>
                                Why duckweed page
                            </A>
                            ).{" "}
                        </p>


                    </div>
                    {/* === ARROW === */}
                    <div className="flex justify-center items-end md:h-full my-6 md:my-0">
                        <svg
                            viewBox="0 0 140 140"
                            className="w-16 h-16 md:w-20 md:h-20 rotate-45"
                            aria-hidden="true"
                        >
                            <polygon points="0,60 90,60 90,40 140,70 90,100 90,80 0,80" fill="black"/>
                        </svg>
                    </div>


                    {/* Top banner image */}
                    <div className="relative w-full text-center space-y-4">
                        <A href="/toolbox/deep-dive-on-duckweed/">
                            <img
                                src="https://static.igem.wiki/teams/5642/images/toolbox/toolbox/deep-dive.webp"
                                alt="Deep dive on duckweed"
                                className="w-full rounded-lg object-cover"
                            />
                        </A>
                        <A href="/plant/why-duckweed">
                            <img
                                src="https://static.igem.wiki/teams/5642/images/toolbox/toolbox/why-duckweed.webp"
                                alt="Why duckweed"
                                className="w-full rounded-lg object-cover mt-4"
                            />
                        </A>
                    </div>
                </div>


                <div className="grid md:grid-cols-[1fr_auto_1fr] gap-6 items-start">

                    {/* WHY PLANTS SUCK box */}
                    <div className=" overflow-hidden space-y-2">
                        <A href="/toolbox/why-plant-suck/">
                            <img
                                src="https://static.igem.wiki/teams/5642/images/toolbox/toolbox/why-plant-sucks.webp"
                                alt="Why plants suck? And why duckweed could be the answer?"
                                className="w-full object-cover"
                            />
                        </A>
                        <img
                            src="https://static.igem.wiki/teams/5642/images/toolbox/toolbox/plantsynbio12.webp"
                            alt="Plant synbio"
                            className="w-full object-cover"
                        />
                        <div className="bg-gray-100 rounded-2xl p-4 text-justify text-gray-800 text-base">
                            <p>
                                <span className="font-bold">Figure 1.</span> A subjective comparison of widely used
                                plants in plant synthetic biology in terms of their “user-friendliness” and
                                application potential.
                            </p>
                        </div>
                    </div>

                    {/* === FILLER === */}
                    <div className="flex justify-center items-end md:h-full my-6 md:my-0">
                        <svg
                            viewBox="0 0 140 140"
                            className="w-16 h-16 md:w-20 md:h-20 rotate-45"
                            aria-hidden="true"
                        >
                            <polygon points="0,60 90,60 90,40 140,70 90,100 90,80 0,80" fill="white"/>
                        </svg>
                    </div>


                    {/* === RIGHT COLUMN === */}
                    <div className="space-y-6 items-start">

                        {/* Paragraphs */}
                        <p className="text-justify">
            <span className="font-bold">
              At iGEM Brno, we have fallen in love with this potential — just like many other
              scientists and companies.
            </span>{" "}
                            More bitter was the realization that, like others, we could not engineer duckweed
                            quickly and efficiently — and that cultivating duckweed, as simple as it seems, is
                            completely unpredictable. That is why we set out to make duckweed <A className='hover:underline text-[#6ca033]' href="#programmable">programmable</A> and
                            <A className='hover:underline text-[#6ca033]' href="#predictable"> predictable</A>…
                            <span className="font-bold">
              {" "}
                                To finally unlock its potential, so that together with other iGEM Teams, scientists
              and companies we can build cool and useful things using duckweed and plant synthetic
              biology!
            </span>
                        </p>

                        <p className="text-justify">
                            The more we worked with duckweed and other plants, the clearer it became that{" "}
                            <span className="font-bold">
              duckweed has the fewest typical “plant problems”
            </span>{" "}(see Fig. 1).
                            It grows fast, scales easily, and lacks a complex genome or strong transgene silencing.
                            This makes it perfectly positioned to provide solutions in agriculture,
                            pharmaceuticals, and even in accelerating basic plant science at lower cost{" "}
                            (read more and see references at <A className='hover:underline text-[#6ca033]' href="/plant/why-duckweed" >Why{" "}
                            duckweed page</A>){" "}
                            <span className="font-bold">
              But duckweed also has its own challenges, which we set out to address in our iGEM
              project.
            </span>{" "}
                            What began as an ambition to tackle the affordability of protein feedstock for farmers
                            grew into a mission to make duckweed accessible to other{" "}
                            <span className="font-bold">iGEMers, scientists,</span> and the{" "}
                            <span className="font-bold">SynBio community</span> — potentially
                            contributing to solving many problems within plant synthetic biology. We hope that
                            duckweed and our project help make plants less frustrating and more exciting to work
                            with!
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
}
