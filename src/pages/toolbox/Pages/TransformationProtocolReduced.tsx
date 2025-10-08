import React, {useState} from 'react';
import TextModal, {textSlide} from '../../../components/ui/TextModal.tsx';
import {Link} from 'react-router-dom';
import A from "../../../A.tsx";


const agrobacteriumInfection: textSlide[] = [
    {
        src: "https://static.igem.wiki/teams/5642/images/how/cultivator/watercycle/water-cycle-schema-old.webp",
        title: "AIM (agrobacterium infection medium)",
        description: [
            "50g/l sucrose",
            "1 g/l MgCl2 (10mM final)",
            "pH 5.2 - 5.5 (measure by pH strips as there is not enough salts to properly measure by pH meter)",
            "40 mg/l acetosyringone (add just before use)",
        ],
    },
];


const appropriateAntibiotic: textSlide[] = [
    {
        src: "https://static.igem.wiki/teams/5642/images/how/cultivator/watercycle/water-cycle-schema-old.webp",
        title: "Appropriate antibiotics",
        description: [
            "A.tumefaciens EHA105 : use rifampicin (50 mg/l) and streptomycin (50 mg/l)",
            "A.tumefaciens GV3101 : use rifampicin (50 mg/l) and gentamicin (50 mg/l)",
            "Do not forget to also add antibiotics specific for your binary vector.",

        ],
    },
];


const dcmn: textSlide[] = [
    {
        src: "https://static.igem.wiki/teams/5642/images/how/cultivator/watercycle/water-cycle-schema-old.webp",
        title: "DPIM",
        description: [
            "DCMN + 400mg/l of Cefotaxime + 400mg/l of Ticarcillin",

        ],
    },
];


const TransformationProtocolReduced = () => {
    const [isOpenagrobacteriumInfection, setIsOpenagrobacteriumInfection] = useState(false);
    const [isOpenAntibioticSlides, setIsOpenAntibioticSlides] = useState(false);
    const [isOpenDcmnSlides, setIsOpenDcmnSlides] = useState(false);
    return (
        <div className="max-w-6xl mx-auto p-6 bg-white text-lg text-justify">

            <div className="p-8" >
                <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>

                    <div className='col-span-1 hidden md:block'>
                        <img
                            src="https://static.igem.wiki/teams/5642/images/toolbox/transformationprotocol/transformation-protocol-copy.webp"
                            alt="Transformation Protocol Overview" className="w-full h-auto rounded-lg"/>
                    </div>

                    <div className='col-span-3'>
                        <div className="space-y-8">
                            {/* Day -5 to -3 */}
                            <div className="bg-white p-6 border border-gray-300 border-l-4 border-l-green-600">
                                <h2 className="text-2xl font-semibold text-gray-900 mb-4"
                                    style={{fontFamily: 'Space Grotesk'}}>
                                    Day -5 to -3 • PREPARATION OF DUCKWEED
                                </h2>
                                <div className="space-y-2" style={{fontFamily: 'Urbanist'}}>

                                    1) Depending on the confluence on trays, spill duckweed to new trays with
                                    fresh medium to app. 50% of confluence.
                                    <br/>
                                    2) Let fronds grow until ~75% surface coverage before use.
                                    <br/>

                                    <div className="bg-red-50 border border-red-300 p-3 mt-4">
                                        <p className="text-red-800 font-medium">
                                            <strong>NOTE 1:</strong> Crowded fronds stop dividing and produce fewer
                                            transformed offspring; sparse fronds are fragile and often do not survive
                                            infiltration. ~75% coverage gives robust, actively dividing fronds that are
                                            easiest to transform.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Day 1-2 */}
                            <div className="bg-white p-6 border border-gray-300 border-l-4 border-l-blue-600">

                                <TextModal
                                    slides={appropriateAntibiotic}
                                    isOpen={isOpenAntibioticSlides}
                                    onClose={() => setIsOpenAntibioticSlides(false)}
                                />
                                <TextModal
                                    slides={agrobacteriumInfection}
                                    isOpen={isOpenagrobacteriumInfection}
                                    onClose={() => setIsOpenagrobacteriumInfection(false)}
                                />
                                <h2 className="text-2xl font-semibold text-gray-900 mb-4"
                                    style={{fontFamily: 'Space Grotesk'}}>
                                    Day 1 - 2 • PREPARATION OF A<i> GROBACTERIUM</i>
                                </h2>
                                <div className="space-y-2" style={{fontFamily: 'Urbanist'}}>
                                    <p className="text-gray-700"><strong>1)</strong> From the glycerol stock, inoculate
                                        5 mL LB + <button onClick={() => setIsOpenAntibioticSlides(true)}
                                                          className=" text-bold"><span className='text-green-600'><b>appropriate antibiotics</b></span>
                                        </button>. Grow
                                        O/N at 28°C, 200 rpm (<em>keep in mind, this can take up to 16-18 hours</em>).
                                    </p>
                                    <p className="text-gray-700"><strong>2)</strong> Next day, inoculate 100 mL LB +
                                        antibiotics with 1:100—1:500 dilution of O/N
                                        culture. Grow until OD₆₀₀ = 1—2.</p>
                                    <ul className="text-gray-700 space-y-1 ml-6 list-disc">
                                        <li>1:500 dilution typically reaches OD₆₀₀ = 0.7 in 12 - 18 hours (depending on
                                            your construct)
                                        </li>
                                        <li>1:100 dilution typically reaches OD₆₀₀ = 0.7 in 6 - 12 hours</li>
                                    </ul>

                                </div>
                            </div>

                            {/* Day 3 - Vacuum Infiltration */}
                            <div className="bg-white p-6 border border-gray-300 border-l-4 border-l-purple-600">
                                <h2 className="text-2xl font-semibold text-gray-900 mb-4"
                                    style={{fontFamily: 'Space Grotesk'}}>
                                    Day 3 • VACUUM INFILTRATION
                                </h2>
                                <div className="space-y-2" style={{fontFamily: 'Urbanist'}}>
                                    <p className="text-gray-700"><strong>1)</strong> Pellet culture by centrifugation
                                        (20 min, 3000 g). Leave ~0.1 cm LB above pellet
                                        to avoid stress.</p>
                                    <p className="text-gray-700"><strong>2)</strong> Resuspend pellet gently in <button
                                        onClick={() => setIsOpenagrobacteriumInfection(true)} className=" text-bold">
                                        <span className='text-green-600'><b>AIM</b></span></button> (<i>Agrobacterium</i>
                                        Infiltration Medium).
                                    </p>
                                    <ul className="text-gray-700 space-y-1 ml-6 list-disc">
                                        <li>Resuspend to final OD₆₀₀ = 0.7</li>
                                        <li>25-30 ml of <em>Agrobacterium </em> solution (OD₆₀₀ = 0.7) results in 2 plates of
                                            transformed duckweed (confluence 50-75 %)
                                        </li>
                                    </ul>
                                    <p className="text-gray-700"><strong>3)</strong> Add acetosyringone to final
                                        concentration of 40 mg/L. Adjust pH to 5.5.
                                        Incubate 1 h at 28°C, 100 rpm, protected from light.</p>
                                    <div className="bg-red-50 border border-red-300 p-3 mt-4">
                                        <p className="text-red-800 font-medium">
                                            <strong>NOTE 2:</strong> Do not let <em>Agrobacterium</em> grow over OD₆₀₀ = 3.
                                            Overgrown cells are
                                            stressed and inefficient at T-DNA transfer.
                                        </p>
                                    </div>
                                    <p className="text-gray-700"><strong>4)</strong> Transfer fronds into <em>Agrobacterium</em>
                                        solution. Apply vacuum (−70 kPa) for 10 minutes.</p>
                                    <p className="text-gray-700"><strong>5)</strong> Release the vacuum slowly while
                                        gently swirling.</p>
                                    <p className="text-gray-700"><strong>6)</strong> Wash infiltrated duckweeds in dH20
                                        for 60 seconds to get rid of AIM with sucrose.</p>
                                    <div className="bg-red-50 border border-red-300 p-3 mt-4">
                                        <p className="text-red-800 font-medium">
                                            <strong>NOTE 3:</strong> Swirling during vacuum infiltration ensures dorsal
                                            stomata are exposed
                                            to <em>Agrobacterium</em> solution, but vigorous swirling precipitates the
                                            <em> Agrobacterium</em>
                                            and reduces efficiency.
                                        </p>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-4 mt-4">
                                        <div className="bg-gray-50 p-4 border border-gray-200">
                                            <div className=" ">
                                                <img
                                                    src="https://static.igem.wiki/teams/5642/images/toolbox/transformationprotocol/duckweed-08356-min.webp"
                                                    alt="Vacuum Infiltration Setup" className="h-full mb-4 rounded-lg"/>
                                            </div>
                                            <p className="text-sm text-gray-600">Falcon tubes with duckweed fronds in
                                                 AIM solution with <em>Agrobacterium</em> </p>
                                        </div>
                                        <div className="bg-gray-50 p-4 border border-gray-200">
                                            <div className=" ">
                                                <img
                                                    src="https://static.igem.wiki/teams/5642/images/toolbox/transformationprotocol/duckweed-08365-min.webp"
                                                    alt="Vacuum Infiltration Setup" className="h-full mb-4 rounded-lg"/>
                                            </div>
                                            <p className="text-sm text-gray-600">Vacuum infiltration</p>
                                        </div>
                                    </div>

                                    <div className="space-y-2" style={{fontFamily: 'Urbanist'}}>
                                        <p className="text-gray-700"><strong>7)</strong> Put the infiltrated duckweed
                                            and <em> Agrobacterium</em> suspension into plates</p>
                                        <p className="text-gray-700"><strong>8)</strong> Add <A
                                            className='text-green-600 font-bold'
                                            href="#cultivation">DCMN</A> (25 - 30 mL per
                                            plate). Do not seal plates.</p>

                                        <div className="bg-red-50 border border-red-300 p-3 mt-4">
                                            <p className="text-red-800 font-medium">
                                                <strong>NOTE 4:</strong> Unsealed plates allow easier medium changes and
                                                microscopy.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            {/* Day 4-5 */}
                            <div className="bg-white p-6 border border-gray-300 border-l-4 border-l-teal-600">
                                <h2 className="text-2xl font-semibold text-gray-900 mb-4"
                                    style={{fontFamily: 'Space Grotesk'}}>
                                    Day 4 - 5 • CO-CULTIVATION
                                </h2>
                                <div className="space-y-2" style={{fontFamily: 'Urbanist'}}>
                                    <p className="text-gray-700"><strong>1)</strong> Incubate plates for 48 h at 21°C,
                                        16/8 photoperiod, 200 µmol/m²/s light.</p>
                                    <div className="bg-red-50 border border-red-300 p-3 mt-4">
                                        <p className="text-red-800 font-medium">
                                            <strong>NOTE 5:</strong> 48 h is optimal. Shorter → low transfer. Longer →
                                            <em>Agrobacterium</em> overgrows and kills fronds.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Day 6 */}
                            <div className="bg-white p-6 border border-gray-300 border-l-4 border-l-indigo-600">
                                <TextModal
                                    slides={dcmn}
                                    isOpen={isOpenDcmnSlides}
                                    onClose={() => setIsOpenDcmnSlides(false)}
                                />
                                <h2 className="text-2xl font-semibold text-gray-900 mb-4"
                                    style={{fontFamily: 'Space Grotesk'}}>
                                    Day 6 • ELIMINATING <em>AGROBACTERIUM</em>
                                </h2>
                                <div className="space-y-2" style={{fontFamily: 'Urbanist'}}>
                                    <p className="text-gray-700"><strong>1)</strong> Transfer fronds to Duckweed
                                        Post-Infiltration Medium (<span className="text-red-600 font-semibold"><button
                                            onClick={() => setIsOpenDcmnSlides(true)}>DPIM</button></span>).
                                    </p>
                                    <p className="text-gray-700"><strong>2)</strong> Incubate at 21°C, 16/8 photoperiod,
                                        200 µmol/m²/s light.</p>
                                    <p className="text-gray-700"><strong>3)</strong> Refresh medium every 6 days.</p>
                                </div>
                            </div>

                            {/* Day 7-20 */}
                            <div className="bg-white p-6 border border-gray-300 border-l-4 border-l-emerald-600">
                                <h2 className="text-2xl font-semibold text-gray-900 mb-4"
                                    style={{fontFamily: 'Space Grotesk'}}>
                                    Day 7-20 • SIGNAL EVALUATION
                                </h2>
                                <div className="space-y-2" style={{fontFamily: 'Urbanist'}}>
                                    <p className="text-gray-700"><strong>1)</strong> Evaluate transient expression at
                                        6th, 12th, and 18th day post
                                        infiltration (dpi). When checking the expression, always refresh the medium by
                                        aspirating the old and adding new.</p>
                                    <ul className="text-gray-700 space-y-1 ml-6 list-disc">
                                        <li><strong>6 dpi:</strong> usually, a strong expression is already visible</li>
                                        <li><strong>12 dpi:</strong> expression is usually quite strong but may start
                                            fading
                                        </li>
                                        <li><strong>18 dpi:</strong> expression is still visible, but noticeably faded
                                        </li>
                                    </ul>
                                    <p className="text-gray-700"><strong>2)</strong> Even if no signal is visible by day
                                        6, keep the plants until at least day 12
                                        before discarding them. Both the strength of expression and the timing of
                                        its appearance depend on the construct design, specifically the promoter
                                        strength or the position of the marker relative to
                                        the <strong>P2A/T2A</strong> linkers.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default TransformationProtocolReduced;



