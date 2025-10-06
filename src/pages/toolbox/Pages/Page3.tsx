import {useState} from "react";
import {ChevronDown, ChevronUp} from "lucide-react";
import TransformationProtocol from "../programable_duckweed/TransformationProtocol.tsx";
import VacuumInfiltrationTesting from "../programable_duckweed/VacuumInfiltrationTesting.tsx"; // npm install lucide-react

export default function Page3() {
    const [open, setOpen] = useState(false);
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);

    return (
        <div>
            <div
                className="max-w-6xl mx-auto bg-white text-gray-900 leading-relaxed p-8 font-[Urbanist,sans-serif] space-y-24">
                {/* === Always visible section === */}
                <div className="grid md:grid-cols-[2fr_1fr] gap-6 items-start">
                    {/* Left: text */}
                    <div>
                        <h2
                            className="font-bold text-[#6ca033] mb-3"
                            style={{
                                fontFamily: "Space Grotesk, sans-serif",
                                fontSize: window.innerWidth < 768 ? "1.5rem" : "1.9rem",
                            }}
                            id="transformation"

                        >
                            TRANSFORMATION protocol for duckweed
                        </h2>

                        <p className="text-justify">
                            We built on the duckweed transformation approaches described by{" "}
                            <i>Ordoñez Lab</i> (Barragán-Borrero et al., 2025) from the Gregor Mendel Institute
                            in Vienna. We simplified the protocol, tested it on 12 clones, and used three{" "}
                            <i>Agrobacterium</i> strains.
                        </p>
                    </div>

                    {/* Right: image */}
                    <div className="flex justify-center">
                        <img
                            src="https://static.igem.wiki/teams/5642/images/toolbox/toolbox/presentation1.webp"
                            alt="Duckweed transformation setup"
                            className="rounded-lg object-contain w-full max-w-xs"
                        />
                    </div>
                </div>

                {/* === Expandable section === */}
                <div>
                    {/* Header with toggle */}
                    <div
                        onClick={() => setOpen(!open)}
                        className="flex items-center justify-between cursor-pointer border-b border-gray-300 pb-3 mb-6"
                    >
                        <h2
                            className="font-bold text-2xl md:text-3xl"
                            style={{fontFamily: "Space Grotesk, sans-serif"}}
                        >
                            How you can TRANSFORM duckweed?
                        </h2>
                        {open ? (
                            <ChevronUp className="text-gray-600 w-7 h-7"/>
                        ) : (
                            <ChevronDown className="text-gray-600 w-7 h-7"/>
                        )}
                    </div>

                    {/* Expandable content */}
                    {open && (
                        <TransformationProtocol/>
                    )}
                </div>

                {/* === Expandable section === */}
                <div>
                    {/* Header with toggle */}
                    <div
                        onClick={() => setOpen1(!open1)}
                        className="flex items-center justify-between cursor-pointer border-b border-gray-300 pb-3 mb-6"
                    >
                        <h2
                            className="font-bold text-2xl md:text-3xl"
                            style={{fontFamily: "Space Grotesk, sans-serif"}}
                        >
                            How did we optimize duckweed TRANSFORMATION protocol?
                        </h2>
                        {open1 ? (
                            <ChevronUp className="text-gray-600 w-7 h-7"/>
                        ) : (
                            <ChevronDown className="text-gray-600 w-7 h-7"/>
                        )}
                    </div>

                    {/* Expandable content */}
                    {open1 && (
                        <VacuumInfiltrationTesting/>
                    )}
                </div>
            </div>

            <div
                className="max-w-6xl mx-auto bg-white text-gray-900 leading-relaxed p-8 font-[Urbanist,sans-serif] space-y-6">
                <h2
                    className="font-bold text-[#6ca033] mb-3"
                    style={{
                        fontFamily: "Space Grotesk, sans-serif",
                        fontSize: window.innerWidth < 768 ? "1.5rem" : "1.9rem",
                    }}
                    id="crispr"

                >
                    CRISPR/Cas9-based gene knockout tool for duckweed
                </h2>
                <div className="grid md:grid-cols-[2fr_1fr] gap-6 items-start">
                    {/* === Left column: text === */}
                    <div>


                        <p className="text-justify mb-4">
                            During the development of our <span className="font-bold">TAIFR method</span>, we realized
                            the
                            need to <span className="font-bold">knock out a gene in duckweed</span> to answer one of our
                            questions. However, we didn’t have a suitable tool available to do that. We discovered that
                            assembling a gene knockout construct required multiple, relatively laborious and
                            time-consuming cloning steps. This process was made even more difficult by the large size of
                            the
                            individual parts.
                        </p>

                        <p className="text-justify mb-4">
                            That’s why we <span className="font-bold">designed and built pIB006</span> — a construct
                            that
                            requires just a simple <span className="font-bold">cut-and-paste</span> of your gRNA,
                            followed by
                            transformation of the resulting construct to deliver a{" "}
                            <span className="font-bold">knockout</span> of any gene in duckweed.
                        </p>

                        <p className="text-justify">
                            Read more about pIB006 part at our{" "}
                            <a
                                href="#"
                                className="underline hover:text-[#6ca033] transition-colors"
                            >
                                Registry
                            </a>
                            .
                        </p>
                    </div>

                    {/* === Right column: circle image === */}
                    <div className="flex justify-center">
                        <img
                            src="https://static.igem.wiki/teams/5642/images/toolbox/toolbox/pib006-copy.webp"
                            alt="Duckweed transformation setup"
                            className="rounded-lg object-contain w-full max-w-xs"
                        />
                    </div>
                </div>
            </div>

            <div
                className="max-w-6xl mx-auto bg-white text-gray-900 leading-relaxed p-8 font-[Urbanist,sans-serif] space-y-6">
                {/* Header with toggle */}
                <div
                    onClick={() => setOpen2(!open2)}
                    className="flex items-center justify-between cursor-pointer border-b border-gray-300  pb-3 mb-6"
                >
                    <h2
                        className="font-bold text-2xl md:text-3xl"
                        style={{fontFamily: "Space Grotesk, sans-serif"}}
                    >
                        How can you use duckweed CRISPR tool?
                    </h2>
                    {open2 ? (
                        <ChevronUp className="text-gray-600 w-7 h-7"/>
                    ) : (
                        <ChevronDown className="text-gray-600 w-7 h-7"/>
                    )}
                </div>

                {/* Expandable content */}
                {open2 && (
                    <div className="space-y-6">

                        <div className="grid md:grid-cols-[2fr_1fr] gap-6 items-start">
                            {/* Left column */}
                            <div className="space-y-4 text-base md:text-lg leading-relaxed">
                                <ul className="list-disc list-inside space-y-2">
                                    <li>
                                        Design, order, and anneal oligos for <span
                                        className="font-bold">gRNAs</span>{" "}
                                        suitable for knocking out the gene of your interest. The oligos must contain
                                        a{" "}
                                        <span className="font-bold">GTTG</span> overhang at the 5′ end and a{" "}
                                        <span className="font-bold">CAAA</span> overhang at the 3′ end.
                                    </li>
                                    <li>
                                        Digest and ligate your annealed oligos using the{" "}
                                        <span className="font-bold italic">Esp3I</span> enzyme. Transform the reaction
                                        into competent <i>E. coli</i> cells, then prepare overnight cultures and isolate
                                        plasmids.
                                    </li>
                                </ul>

                                {/* Gray info box */}
                                <div className="bg-gray-100 p-4 rounded-lg text-sm border border-gray-200">
                                    You will obtain a <span className="font-bold">modified pIB006 construct</span>{" "}
                                    containing your desired <span className="font-bold">gRNA</span>. The expression of
                                    the{" "}
                                    <span className="font-bold italic">plant codon-optimized Cas9 enzyme</span> in
                                    duckweed
                                    will be driven by the <span className="font-bold italic">rZmUBI promoter</span> and
                                    terminated by the <span className="font-bold italic">t35S terminator</span>,
                                    allowing
                                    seamless transient expression in duckweed. The expression of your{" "}
                                    <span className="font-bold">gRNA</span> will be driven by the{" "}
                                    <span className="font-bold italic">rOsU6 promoter</span>, enabling Cas9 to target
                                    the{" "}
                                    <span className="font-bold">sequence in the duckweed genome</span> that you want to
                                    knock out.
                                </div>

                                <ul className="list-disc list-inside space-y-2">
                                    <li>
                                        Transform the obtained <span className="font-bold">
                                        modified pIB006 construct</span>{" "}
                                        into electrocompetent <i>Agrobacterium</i> cells using our{" "}
                                        <a href="/toolbox/agrobacterium-mediated-transformation-protocol/"
                                           className="underline hover:text-[#6ca033]">
                                            Electroporation Protocol
                                        </a>
                                        .
                                    </li>
                                    <li>
                                        Select positive <i>Agrobacterium</i> colonies using primers o147 and o148.
                                        Inoculate
                                        a pre-culture from a positive colony, prepare sufficient{" "}
                                        <span className="font-bold">glycerol stocks</span> for future transformations,
                                        and
                                        establish a main culture.
                                    </li>
                                    <li>
                                        Finally, transform duckweed with <i>Agrobacterium</i> containing the{" "}
                                        <span className="font-bold">modified pIB006 construct</span> following our{" "}
                                        <a href="/toolbox/programable-duckweed-protocol/"
                                           className="underline hover:text-[#6ca033]">
                                            Duckweed Transformation Protocol
                                        </a>
                                        .
                                    </li>
                                </ul>


                            </div>

                            {/* Right column */}
                            <div className="flex flex-col justify-start items-center space-y-4">
                                <div className="flex justify-center">
                                    <img
                                        src="https://static.igem.wiki/teams/5642/images/toolbox/toolbox/protocol-pib006.webp"
                                        alt="Duckweed transformation setup"
                                        className="rounded-lg object-contain w-full max-w-xs"
                                    />
                                </div>

                                <p className="text-sm text-gray-600 italic text-center max-w-xs">
                                    <span className="font-bold">Figure 1.</span> End sequences your oligos for gRNA must
                                    have to be insertable into our pIB006 construct. The simplified protocol for
                                    digestion
                                    and ligation of your gene into pIB006.
                                </p>
                            </div>
                        </div>
                        {/* Highlight box */}
                        <div
                            className="bg-gray-100 p-3 text-center rounded-lg font-semibold border border-gray-200">
                            As Cas9 and your gRNA will be expressed for the next 2–3 weeks, you can test the
                            duckweed for the functionality of the gene you targeted for knockout!
                        </div>

                        <p className="text-justify text-base">
                            Unfortunately, we didn’t have the chance to test the functionality of our{" "}
                            <span className="font-bold">pIB006 part</span>, as we designed and built it during
                            the{" "}
                            <span className="font-bold">fifth (final) DBTL cycle of TAIFR</span>, just as the Wiki
                            Freeze was approaching. However, there is no logical constraint as to why it shouldn’t
                            work, since <span className="font-bold italic">Cas9</span>, driven by the{" "}
                            <span className="font-bold italic">rZmUBI promoter</span> and terminated by the{" "}
                            <span className="font-bold italic">t35S terminator</span>, has been successfully used to
                            knock out genes in duckweed.
                        </p>
                    </div>
                )}
            </div>
        </div>
    )
        ;
}
