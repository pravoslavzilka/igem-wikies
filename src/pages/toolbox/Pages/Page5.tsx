import React, {useEffect, useState} from "react";
import {ChevronDown, ChevronUp} from "lucide-react";
import PredictorInteractive from "./PredictorInteractive.tsx";
import LimitingBiomassReduced from "./LimitingBiomassReduced.tsx";
import HarvestingStrategyReduced from "./HarvestingStrategyReduced.tsx";
import A from "../../../A.tsx";

export default function Page5() {
    const [open, setOpen] = useState(false);
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    useEffect(() => {
        // Listen for custom event from main page
        const openHandler = (e: CustomEvent) => {

            if (e.detail === "harvesting") {
                setOpen1(true);
                const el = document.getElementById("harvesting");
                if (el) el.scrollIntoView({behavior: "smooth", block: "start"});
            }
            if (e.detail === "limit_biomass") {
                setOpen1(true);
                const el = document.getElementById("limit_biomass");
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
            <hr className="my-8 w-3/5 mx-auto border-t-4 border-gray-400"/>
            <div
                className="max-w-6xl mx-auto bg-white text-gray-900 leading-relaxed p-8 font-[Urbanist,sans-serif] space-y-6">
                {/* Green subsection title */}
                <h3
                    className="font-bold text-[#6ca033] mt-14"
                    style={{
                        fontFamily: "Space Grotesk, sans-serif",
                        fontSize: window.innerWidth < 768 ? "1.6rem" : "2rem",
                    }}
                    id="prediction"
                >
                    Reliable prediction of duckweed yields for large-scale cultivation

                </h3>
                <div className="grid md:grid-cols-[2fr_1fr] gap-8 text-lg items-center">
                    {/* === Left Column: Text === */}
                    <div>

                        <p className="text-justify mb-4">
                            Duckweed growth rates <b>vary widely </b> across species, nutrient levels, and environmental
                            conditions (4, 5, 6, 7 and 8). That’s why every duckweed company or
                            research
                            group <b>must overcome lengthy optimization</b> before they can tap into the
                            power of duckweed.
                        </p>

                        <p className="text-justify">
                            <b>We fed months of our cultivation data</b> into our <b>computational</b> growth
                            PREDICTOR that enables optimization of harvesting schedules and resource
                            inputs and maximizes biomass yield — essential for efficient large-scale
                            cultivation.
                        </p>
                    </div>

                    {/* === Right Column: Image === */}
                    <div className="flex justify-center">
                        <img
                            src="https://static.igem.wiki/teams/5642/images/toolbox/toolbox/k-pia-s-boru-predictor.webp"
                            alt="Duckweed yield prediction chart"
                            className="rounded-lg object-contain w-full max-w-xs"
                        />
                    </div>
                </div>
            </div>

            <div
                className="max-w-6xl mx-auto bg-white text-gray-900 leading-relaxed p-8 font-[Urbanist,sans-serif] space-y-6">
                {/* === Header with toggle === */}
                <div
                    onClick={() => setOpen(!open)}
                    className="flex items-center justify-between cursor-pointer border-b border-gray-300 pb-3 mb-6"
                >
                    <h2
                        className="font-bold text-2xl md:text-3xl"
                        style={{fontFamily: "Space Grotesk, sans-serif"}}
                    >
                        How can you use <span className="underline">PREDICTOR</span>?
                    </h2>
                    {open ? (
                        <ChevronUp className="text-gray-600 w-7 h-7"/>
                    ) : (
                        <ChevronDown className="text-gray-600 w-7 h-7"/>
                    )}
                </div>

                {/* === Expandable content === */}
                {open && (
                    <div className="space-y-4 text-base md:text-lg leading-relaxed">
                        <p className="text-justify">
                            You can use <span className="font-bold">PREDICTOR</span> as a web
                            interface here without any additional IT knowledge, or you can
                            download our source code{" "}
                            <A
                                href="https://github.com/karatedava/DUCKTOOLS"
                                className="underline font-semibold hover:text-[#6ca033] transition-colors duration-200"
                            >
                                (available here)
                            </A>{" "}
                            and modify it for your own use — for example, to predict the growth
                            rate of your duckweed.
                        </p>

                        <p>
                            To <span className="font-semibold">predict yield</span> under your
                            specific conditions, you can choose from the following parameters:
                        </p>

                        <div className="grid md:grid-cols-2 gap-4">
                            <ul className="list-disc list-inside space-y-2">
                                <li>
                                    <span className="font-semibold">Duckweed species:</span> We have
                                    generated enough data for the model to be very precise for two
                                    species so far — <i>Lemna minor</i> and <i>Lemna japonica</i>.
                                </li>
                                <li>
                                    <span className="font-semibold">Cultivation surface (m²):</span>{" "}
                                    The surface area of your experiment or production site.
                                </li>
                                <li>
                                    <span className="font-semibold">Cultivation time (days):</span>{" "}
                                    The duration for which you plan to generate biomass.
                                </li>
                            </ul>

                            <ul className="list-disc list-inside space-y-2">
                                <li>
                                    <span className="font-semibold">Initial biomass (g/m²):</span>{" "}
                                    What will be the inoculation density of your experiment? We
                                    generally recommend starting with{" "}
                                    <span className="font-bold">100 g/m²</span> of fresh duckweed
                                    weight.
                                </li>
                                <li>
                                    <span className="font-semibold">Harvesting ratio (%):</span> The
                                    proportion of the duckweed surface harvested during each
                                    harvesting cycle.
                                </li>
                                <li>
                                    <span className="font-semibold">Harvesting frequency (days):</span>{" "}
                                    How often do you harvest your experimental or production
                                    surface?
                                </li>
                            </ul>
                        </div>

                        <p className="font-semibold">
                            We experimentally found that harvesting{" "}
                            <span className="text-[#6ca033] font-bold">
                40% of the surface every 3rd day
              </span>{" "}
                            results in the highest overall yield. Try it for yourself!
                        </p>

                        <PredictorInteractive/>
                    </div>
                )}
            </div>


            <div
                className="max-w-6xl mx-auto bg-white text-gray-900 leading-relaxed p-8 font-[Urbanist,sans-serif] space-y-6">
                {/* === Header with toggle === */}
                <div
                    onClick={() => setOpen1(!open1)}
                    className="flex items-center justify-between cursor-pointer border-b border-gray-300 pb-3 mb-6"
                >
                    <h2
                        className="font-bold text-2xl md:text-3xl"
                        style={{fontFamily: "Space Grotesk, sans-serif"}}
                        id="limit_biomass"
                    >
                        How we developed the <span className="underline">PREDICTOR</span>?
                    </h2>
                    {open1 ? (
                        <ChevronUp className="text-gray-600 w-7 h-7"/>
                    ) : (
                        <ChevronDown className="text-gray-600 w-7 h-7"/>
                    )}
                </div>

                {/* === Expandable content (insert yours below) === */}
                {open1 && (
                    <div>
                        <div
                            className="max-w-6xl mx-auto bg-white text-gray-900 leading-relaxed p-8 font-[Urbanist,sans-serif]">
                            <div className="grid md:grid-cols-[2fr_1fr] gap-8 items-center">
                                {/* === Left column (text) === */}
                                <div className="space-y-4">
                                    <p className="text-justify">
                                        When we began building the model based on data available in the literature,
                                        the results were not very consistent, as the reported <b>values varied </b>widely
                                        (see Fig. 19). Therefore, we decided to conduct several cultivation experiments
                                        under controlled conditions.
                                    </p>


                                    <p className="text-justify">
                                        The first set of experiments aimed to determine the growth rates and the
                                        limiting biomass density of several clones available to us. The{" "}
                                        <span className="font-bold">limiting biomass density</span> is a key
                                        parameter for further mathematical modelling of duckweed growth, as it
                                        directly appears in the <b>logistic growth equation</b> — the most widely known
                                        mathematical approximation of population growth.
                                    </p>


                                </div>

                                {/* === Right column (image + caption) === */}
                                <div className="flex flex-col items-center">
                                    <div>

                                        <img
                                            src="https://static.igem.wiki/teams/5642/images/toolbox/toolbox/tbx-chart.webp"
                                            alt="Figure 1. Growth rate variation of Lemna minor"
                                            className="w-full max-w-sm object-contain rounded-lg"
                                        />
                                        <p className="text-base  mt-2 text-gray-800 text-justify">
                                            <strong>Figure 19.</strong> Widely varying growth rates of{" "}
                                            <em>Lemna minor</em> reported in the literature (4, 5, 6, 7 and 8).
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4 text-base md:text-lg leading-relaxed">

                            <div>
                                <LimitingBiomassReduced/>
                                <h1 className="text-4xl font-bold mb-12 text-gray-900 text-center "
                                 style={{fontFamily: 'Space Grotesk, sans-serif'}} id="harvesting">
                                    Harvesting Strategy Experiment
                                </h1>
                                <p>
                                    The second set of experiments aimed to determine optimal harvesting strategies by
                                    testing different <b>harvesting frequencies and ratios</b> to identify which combination
                                    resulted in the highest biomass yield, as duckweed grows fastest at a specific
                                    surface
                                    confluence. The goal was to maintain the long-term sustainability of the duckweed
                                    culture.
                                </p>

                                <HarvestingStrategyReduced/>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
