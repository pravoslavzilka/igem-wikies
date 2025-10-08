import React, {useEffect, useState} from "react";
import {ChevronDown, ChevronUp} from "lucide-react";
import DuckweedProtocolReduced from "./DuckweedProtocolReduced.tsx";
import MediumChangeReduced from "./MediumChangeReduced.tsx";
import A from "../../../A.tsx";

export default function Page4() {
    const [open, setOpen] = useState(false);
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);

    useEffect(() => {
        // Listen for custom event from main page
        const openHandler = (e: CustomEvent) => {
            if (e.detail === "duckweed-cultivation") {
                setOpen(true);
                const el = document.getElementById("duckweed-cultivation");
                if (el) el.scrollIntoView({behavior: "smooth", block: "start"});
            }
            if (e.detail === "media-exchange") {
                setOpen1(true);
                const el = document.getElementById("media-exchange");
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
                className="max-w-6xl mx-auto bg-white text-gray-900 leading-relaxed p-8 font-[Urbanist,sans-serif] space-y-6">
                {/* Main title */}
                <h2
                    className="font-bold text-black pb-3 border-b border-gray-300"
                    style={{
                        fontFamily: "Space Grotesk, sans-serif",
                        fontSize: window.innerWidth < 768 ? "2rem" : "3.2rem",
                    }}
                    id="predictable"
                >
                    Duckweed becoming PREDICTABLE
                </h2>

                {/* Intro paragraph */}
                <p className="text-justify text-lg">
                    Although duckweed cultivation is relatively simple, maintaining consistent and healthy cultures for
                    experimental work requires careful optimization. For scientists and iGEM teams working with
                    duckweed,
                    having fresh and reliable plant material is essential. Routine maintenance — including subculturing,
                    watering, and monitoring growth — can be time-consuming, particularly for duckweed, the
                    fastest-growing
                    plant on Earth. Moreover, growth rates vary greatly across species, nutrient levels, and
                    environmental
                    conditions, making reproducibility a challenge. We attempted to address all of those problems with
                    duckweed.
                </p>
            </div>
            <div
                className="max-w-6xl mx-auto bg-white text-gray-900 leading-relaxed p-8 font-[Urbanist,sans-serif] space-y-6">
                {/* Green subsection title */}
                <h3
                    className="font-bold text-[#6ca033] mt-14"
                    style={{
                        fontFamily: "Space Grotesk, sans-serif",
                        fontSize: window.innerWidth < 768 ? "1.6rem" : "2rem",
                    }}
                    id="cultivation"
                >
                    Cultivating duckweed under small-scale laboratory
                    <br className="hidden md:block"/>
                    {" "}conditions
                </h3>

                {/* Two-column content */}
                <div className="grid md:grid-cols-[2fr_1fr] gap-6 items-start">
                    {/* Left text */}
                    <p className="text-justify text-lg">
                        Duckweed cultivation is not a rocket science :) But for us iGEMers and scientists working
                        intensively
                        with duckweed, it’s essential to always have fresh plants ready for experiments — that’s why we
                        developed
                        a strategy for small-scale cultivation in the lab. The protocol was greatly inspired by the work
                        of our
                        advisor, Dr. Ordoñez, who shared a wealth of duckweed knowledge with us — some of it is already
                        published (2).
                    </p>

                    {/* Right image */}
                    <div className="flex justify-center">
                        <img
                            src="https://static.igem.wiki/teams/5642/images/toolbox/toolbox/presentation1.webp"
                            alt="Small-scale duckweed cultivation in the lab"
                            className="rounded-lg object-contain w-full max-w-sm"
                        />
                    </div>
                </div>
            </div>
            <div
                className="max-w-6xl mx-auto bg-white text-gray-900 leading-relaxed p-8 font-[Urbanist,sans-serif] space-y-24">

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
                            id="duckweed-cultivation"
                        >
                            How you can CULTIVATE duckweed?
                        </h2>
                        {open ? (
                            <ChevronUp className="text-gray-600 w-7 h-7"/>
                        ) : (
                            <ChevronDown className="text-gray-600 w-7 h-7"/>
                        )}
                    </div>

                    {/* Expandable content */}
                    {open && (
                        <DuckweedProtocolReduced/>
                    )}
                </div>
            </div>


            <div
                className="max-w-6xl mx-auto bg-white text-gray-900 leading-relaxed p-8 font-[Urbanist,sans-serif] space-y-6">
                {/* Header with toggle */}
                <div
                    onClick={() => setOpen1(!open1)}
                    className="flex items-center justify-between cursor-pointer border-b border-gray-300 pb-3 mb-6"
                >
                    <h2
                        className="font-bold text-2xl md:text-3xl"
                        style={{fontFamily: "Space Grotesk, sans-serif"}}
                        id="media-exchange"
                    >
                        How did we optimize duckweed{" "}
                        <span className="underline">CULTIVATION</span> protocol?
                    </h2>
                    {open1 ? (
                        <ChevronUp className="text-gray-600 w-7 h-7"/>
                    ) : (
                        <ChevronDown className="text-gray-600 w-7 h-7"/>
                    )}
                </div>

                {/* Expandable content */}
                {open1 && (
                    <MediumChangeReduced/>
                )}
            </div>

            <hr className="my-8 w-3/5 mx-auto border-t-4 border-gray-400"/>
            <div
                className="max-w-6xl mx-auto bg-white text-gray-900 leading-relaxed p-8 font-[Urbanist,sans-serif] space-y-6">
                {/* === Section Header === */}
                <h2
                    className="font-bold text-[#6ca033] mt-16"
                    style={{
                        fontFamily: "Space Grotesk, sans-serif",
                        fontSize: window.innerWidth < 768 ? "1.6rem" : "2.2rem",
                    }}
                    id="cultivator"
                >
                    Cultivating duckweed under large-scale laboratory conditions
                </h2>

                {/* === Two-column layout === */}
                <div className="grid md:grid-cols-[2fr_1fr] gap-8 items-start">
                    {/* === Left Column: Text === */}
                    <div className="space-y-4 text-justify text-lg">
                        <p>
                            Plant scientists spend a large part of their time on routine plant
                            maintenance...
                        </p>

                        <p>
                            Subculturing, watering, fertilizing, and measuring growth or other
                            parameters of their plants. For duckweed, the fastest-growing plant
                            on Earth, this burden is even greater. Maintaining healthy cultures
                            demands daily attention, leaving less time for conducting actual
                            science aimed at unlocking the immense biotechnological potential of
                            duckweed.
                        </p>

                        <p className="font-semibold">
                            Our autonomous duckweed cultivation system –{" "}
                            <span className="text-[#6ca033] font-bold">CULTIVATOR</span> – changes that!
                        </p>

                        <p>
                            With integrated sensors (light, pH, and EC) and control algorithms,
                            it maintains nutrient levels, monitors duckweed coverage, and
                            automatically triggers harvesting to keep the culture at optimal
                            density at all times. The result is a self-sustaining culture that
                            allows scientists to focus on research rather than routine handling.
                        </p>
                    </div>

                    {/* === Right Column: Image === */}
                    <div className="flex justify-center md:justify-end">
                        <img
                            src="https://static.igem.wiki/teams/5642/images/toolbox/toolbox/presentation1-copy.webp"
                            alt="Large-scale duckweed cultivation system"
                            className="rounded-[2rem] object-contain w-full max-w-sm"
                        />
                    </div>
                </div>
            </div>


            <div
                className="max-w-6xl mx-auto bg-white text-gray-900 leading-relaxed p-8 font-[Urbanist,sans-serif] space-y-6">
                {/* === Header with toggle === */}
                <div
                    onClick={() => setOpen2(!open2)}
                    className="flex items-center justify-between cursor-pointer border-b border-gray-300 pb-3 mb-6"
                >
                    <h2
                        className="font-bold text-2xl md:text-3xl"
                        style={{fontFamily: "Space Grotesk, sans-serif"}}
                    >
                        How can you use the <span className="underline">CULTIVATOR</span>?
                    </h2>
                    {open2 ? (
                        <ChevronUp className="text-gray-600 w-7 h-7"/>
                    ) : (
                        <ChevronDown className="text-gray-600 w-7 h-7"/>
                    )}
                </div>

                {/* === Expandable content === */}
                {open2 && (
                    <div className="space-y-6">
                        {/* Description */}
                        <p className="text-justify text-base md:text-lg">
                            With complete documentation, build plans, and source code
                            available, any lab can reproduce and adapt the cultivator for
                            their own work – for about <strong>$1,000 in materials</strong>.
                            Then you can use it very easily! The entire{" "}
                            <strong>CULTIVATOR</strong> can be operated through a{" "}
                            <strong>mobile app</strong>, accessible locally via the{" "}
                            <strong>CULTIVATOR’s Wi-Fi</strong>, without the need to download
                            anything. The app’s <strong>UX</strong> is simple and{" "}
                            <strong>user-friendly</strong>.
                        </p>

                        {/* App screenshots */}
                        <div className="flex justify-center">
                            <img
                                src="https://static.igem.wiki/teams/5642/images/toolbox/toolbox/slide3.webp"
                                alt="Nitroduck BioReactor mobile app interface"
                                className="w-full max-w-4xl object-contain rounded-lg"
                            />
                        </div>

                        <p className="text-justify text-base md:text-lg">
                            <strong>Figure 18.</strong> Any scientist can intuitively operate the cultivator
                            from the{" "}
                            <strong>home screen (1)</strong> using preset modes:{" "}
                            <strong>“AUTONOMOUS CULTIVATION”</strong> (the system autonomously
                            maintains a 16/8 photoperiod with 100 µmol·m⁻²·s⁻¹ light intensity and
                            recirculates the medium every 30 minutes),{" "}
                            <strong>“FULL HARVEST”</strong> (all duckweed is harvested), and{" "}
                            <strong>“OFF”</strong> (the system shuts down regardless of mode). The
                            system allows up to <strong>five parallel experiments (2)</strong>,
                            each layer operating independently with separate cultivation
                            conditions and harvesting strategies.
                            <strong>pH</strong> and <strong>EC sensors</strong> continuously
                            monitor these parameters, and if values drop below or exceed the
                            threshold, the system automatically balances them by adding either
                            fresh medium or nitric acid. The entire parameter history can be
                            reviewed at any time (3).
                        </p>

                        <div
                            className="max-w-6xl mx-auto bg-white text-gray-900 leading-relaxed p-8 font-[Urbanist,sans-serif] space-y-8">
                            <div className="grid md:grid-cols-[1.3fr_1fr] gap-8 items-start">
                                {/* === Left Column: Image === */}
                                <div className="flex justify-center">
                                    <img
                                        src="https://static.igem.wiki/teams/5642/images/toolbox/toolbox/slide4.webp"
                                        alt="Nitroduck BioReactor monitoring interface"
                                        className="w-full max-w-xl object-contain rounded-lg"
                                    />
                                </div>

                                {/* === Right Column: Text === */}
                                <div className="text-justify text-base md:text-lg space-y-4">


                                    <p>
                                        Each layer consists of a{" "}
                                        <strong>PROBE (PhotoResistor Occlusion-based Biomass Estimator)</strong>,
                                        which measures the thickness of the duckweed layer by monitoring how
                                        much light is absorbed at the water surface. Based on calibration, the
                                        PROBE can <strong>accurately estimate duckweed yield (g)</strong> at
                                        each layer (4).
                                    </p>

                                    <p>
                                        Just as the <strong>CULTIVATOR</strong> is easy to operate from the
                                        app’s <strong>home screen</strong>, scientists also have access to
                                        detailed control options in the <strong>“FINE CONTROLS”</strong> and{" "}
                                        <strong>“CONFIG”</strong> sections of the app. The{" "}
                                        <strong>sensor reading frequency (5)</strong>,{" "}
                                        <strong>photoperiod (6)</strong>,{" "}
                                        <strong>medium exchange conditions (7)</strong>, and{" "}
                                        <strong>water mixing at each layer (8)</strong> can all be manually
                                        configured.
                                    </p>

                                    <p>
                                        This functionality makes the{" "}
                                        <strong>CULTIVATOR</strong> a <strong>simple and intuitive</strong> yet{" "}
                                        <strong>scientifically advanced tool</strong>, designed to help
                                        researchers expand their duckweed experiments without spending their
                                        valuable time on manual subculturing every few days.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <div
                className="max-w-6xl mx-auto bg-white text-gray-900 leading-relaxed p-8 font-[Urbanist,sans-serif] space-y-6">
                {/* === Header with toggle === */}
                <div
                    onClick={() => setOpen3(!open3)}
                    className="flex items-center justify-between cursor-pointer border-b border-gray-300 pb-3 mb-6"
                >
                    <h2
                        className="font-bold text-2xl md:text-3xl"
                        style={{fontFamily: "Space Grotesk, sans-serif"}}
                    >
                        How we developed the <span className="underline">CULTIVATOR</span>?
                    </h2>
                    {open3 ? (
                        <ChevronUp className="text-gray-600 w-7 h-7"/>
                    ) : (
                        <ChevronDown className="text-gray-600 w-7 h-7"/>
                    )}
                </div>

                {/* === Expandable content === */}
                {open3 && (
                    <div className="text-center text-base md:text-lg">
                        <p>
                            Read how we designed, built, and tested the{" "}
                            <span className="font-bold ">CULTIVATOR</span> on our{" "}
                            <A
                                href="/project/how/cultivator/"
                                className="font-semibold underline text-[#6ca033] hover:text-green-700 transition-colors duration-200"
                            >
                                Hardware page
                            </A>
                            !
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}
