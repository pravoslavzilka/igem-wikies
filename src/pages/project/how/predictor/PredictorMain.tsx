import React, { useEffect, useRef } from 'react';
import { useState } from "react";

const PredictorMain = () => {
    const [showModel, setShowModel] = useState(false);
    const [showGraph, setShowGraph] = useState(false);
    const [showDensity, setShowDensity] = useState(false);
    const [showBiomass, setShowBiomass] = useState(false);

    const [TT, setTT] = useState(40);
    const [HP, setHP] = useState(5);
    const [HR, setHR] = useState(0.5);
    const [W0, setW0] = useState(100);
    const [biomassValues, setBiomassValues] = useState<number[]>([]);
    const [harvestValues, setHarvestValues] = useState<number[]>([]);
    const biomassCanvasRef = useRef<HTMLCanvasElement>(null);
    const harvestCanvasRef = useRef<HTMLCanvasElement>(null);

    const runSingle = (
    TT: number,
    HP: number,
    HR: number,
    W0: number
    ): [number, number[], number[], number[]] => {
    const dt = 1;
    const times = Array.from({ length: TT }, (_, i) => i);
    const biomassValues: number[] = [];
    const harvestValues: number[] = [];
    const harvestTimes: number[] = [];
    let storage = 0;
    let nextHarvestTime = HP;
    let biomass = W0;

    for (const t of times) {
        if (t >= nextHarvestTime) {
        const harvested = HR * biomass;
        storage += harvested;
        biomass -= harvested;
        nextHarvestTime += HP;

        harvestValues.push(harvested);
        harvestTimes.push(t);
        }

        const gr = 0.3;
        const dW = gr * biomass * (1 - biomass / 1300) * dt;
        biomass += dW;
        biomassValues.push(biomass);
    }

    storage += biomass; // collect remaining biomass

    return [storage, biomassValues, harvestValues, harvestTimes];
    };

    useEffect(() => {
  const [_, biomass, harvest, harvestTimes] = runSingle(TT, HP, HR, W0);
  setBiomassValues(biomass);
  setHarvestValues(harvest);

  const canvasB = biomassCanvasRef.current;
  const canvasH = harvestCanvasRef.current;

  if (canvasB && canvasH) {
    const ctxB = canvasB.getContext("2d");
    const ctxH = canvasH.getContext("2d");
    if (!ctxB || !ctxH) return;

    // Clear both
    ctxB.clearRect(0, 0, canvasB.width, canvasB.height);
    ctxH.clearRect(0, 0, canvasH.width, canvasH.height);

    // --- Biomass curve (blue) ---
    ctxB.beginPath();
    ctxB.strokeStyle = "blue";
    biomass.forEach((value, index) => {
      const x = (index / TT) * canvasB.width;
      const y = canvasB.height - (value / 1300) * canvasB.height;
      if (index === 0) ctxB.moveTo(x, y);
      else ctxB.lineTo(x, y);
    });
    ctxB.stroke();

    // --- Harvest events (red bars/points) ---
    harvest.forEach((value, index) => {
      const x = (harvestTimes[index] / TT) * canvasH.width;
      const y = canvasH.height - (value / 1300) * canvasH.height;

      ctxH.fillStyle = "red";
      ctxH.beginPath();
      ctxH.arc(x, y, 8, 0, 2 * Math.PI);
      ctxH.fill();
    });

    // Optional: also connect harvest curve
    ctxH.beginPath();
    ctxH.strokeStyle = "red";
    harvest.forEach((value, index) => {
      const x = (harvestTimes[index] / TT) * canvasH.width;
      const y = canvasH.height - (value / 1300) * canvasH.height;
      if (index === 0) ctxH.moveTo(x, y);
      else ctxH.lineTo(x, y);
    });
    ctxH.stroke();
  }
}, [TT, HP, HR, W0]);



  return (
    <div
      className="max-w-6xl mx-auto p-8 bg-white"
      style={{ fontFamily: 'Urbanist, sans-serif' }}
    >
      {/* Header */}
      <h1
        className="text-4xl font-bold mb-12 text-gray-900"
        style={{ fontFamily: 'Space Grotesk, sans-serif' }}
      >
        IN SILICO DUCKWEED CULTIVATION
      </h1>

      <div className="mt-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6 text-center">
          Our PREDICTOR, a real-life data–based model, enables predictable large-scale duckweed cultivation

        </h2>
        <div className="flex justify-center mb-6">
          <img
            src="https://static.igem.wiki/teams/5642/images/how/predictor/page-0.webp"
            alt="Duckweed cultivation workflow"
            className="w-full max-w-3xl rounded-xl"
          />
        </div>

            {/* Open Modell Button */}
        <div className="flex justify-center">
            <button
            onClick={() => setShowGraph(true)}
            className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
            >
            More on Growth data
            </button>
        </div>
      </div>

        {/* Modell Popup */}
        {showGraph && (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
            onClick={() => setShowGraph(false)}
            aria-hidden="false"
        >
            <div
            role="dialog"
            aria-modal="true"
            aria-label="Variance in duckweed growth"
            className="bg-white rounded-lg shadow-lg p-6 max-w-5xl w-[92%] relative"
            onClick={(e) => e.stopPropagation()} // prevent backdrop click from closing when clicking content
            >
            <button
                onClick={() => setShowGraph(false)}
                className="absolute top-3 right-3 text-gray-600 hover:text-black text-xl"
                aria-label="Close"
            >
                ✕
            </button>

            <div className="flex justify-center">
                <img
                src="https://static.igem.wiki/teams/5642/images/how/predictor/growthvariance.webp"
                alt="Detailed predictive model"
                className="rounded-lg shadow-md w-full"
                />
            </div>
            </div>
        </div>
        )}


      {/* Divider */}
      <hr className="my-12 border-t-2 border-gray-300" />

      {/* New Subsection with Screenshot */}
      <div className="mt-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6 text-center">
          Transition from IN-SILICO to REALITY with ease
        </h2>
        <div className="flex justify-center mb-6">
          <img
            src="https://static.igem.wiki/teams/5642/images/how/predictor/page-1.webp"
            alt="Duckweed cultivation workflow"
          />
        </div>
        <p className="text-gray-700 text-center max-w-3xl mx-auto">
          Our streamlined pipeline enables seamless movement from computational
          simulations to real-world duckweed cultivation. By selecting a
          configuration, predicting optimal cultivation strategies, and
          translating them into action, you accelerate your path toward
          sustainable and high-yield duckweed production.
        </p>
      </div>

      {/* Divider */}
    <hr className="my-12 border-t-2 border-gray-300" />

    <section className="bg-gray-50 p-8 rounded-2xl shadow-sm">
    <h2 className="text-2xl font-semibold mb-6 text-gray-900" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
        INTERACTIVE CONTROLS
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Controls */}
        <div className="bg-white rounded-xl border border-gray-200 p-5">
        <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-700" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
            Cultivation Time (TT): <span className="inline-block ml-1 px-2 py-0.5 rounded bg-gray-100 text-gray-800">{TT}</span>
            </label>
            <input
            type="range"
            min="10"
            max="100"
            value={TT}
            onChange={(e) => setTT(Number(e.target.value))}
            className="w-full accent-black"
            />
        </div>

        <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-700" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
            Harvest Period (HP): <span className="inline-block ml-1 px-2 py-0.5 rounded bg-gray-100 text-gray-800">{HP}</span>
            </label>
            <input
            type="range"
            min="1"
            max="10"
            value={HP}
            onChange={(e) => setHP(Number(e.target.value))}
            className="w-full accent-black"
            />
        </div>

        <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-700" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
            Harvest Rate (HR): <span className="inline-block ml-1 px-2 py-0.5 rounded bg-gray-100 text-gray-800">{HR}</span>
            </label>
            <input
            type="range"
            min="0.1"
            max="1"
            step="0.1"
            value={HR}
            onChange={(e) => setHR(Number(e.target.value))}
            className="w-full accent-black"
            />
        </div>

        <div>
            <label className="block mb-2 text-sm font-medium text-gray-700" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
            Initial Biomass (W0): <span className="inline-block ml-1 px-2 py-0.5 rounded bg-gray-100 text-gray-800">{W0}</span>
            </label>
            <input
            type="range"
            min="50"
            max="500"
            value={W0}
            onChange={(e) => setW0(Number(e.target.value))}
            className="w-full accent-black"
            />
        </div>

        <p className="mt-4 text-sm text-gray-600" style={{ fontFamily: "Urbanist, sans-serif" }}>
            In real usage, the model will propose optimal parameters for these controls.
        </p>
        </div>

        {/* Biomass Plot */}
        <div className="bg-white rounded-xl border border-gray-200 p-5">
        <h3 className="text-lg font-semibold mb-2 text-gray-900" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
            BIOMASS PLOT
        </h3>
        <p className="mb-4 text-sm text-gray-600" style={{ fontFamily: "Urbanist, sans-serif" }}>
            Biomass trajectory over time.
        </p>
        <canvas
            ref={biomassCanvasRef}
            width={600}
            height={450}
            className="w-full h-auto border border-gray-200 rounded"
        />
        </div>

        {/* Harvest Plot */}
        <div className="bg-white rounded-xl border border-gray-200 p-5">
        <h3 className="text-lg font-semibold mb-2 text-gray-900" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
            HARVEST PLOT
        </h3>
        <p className="mb-4 text-sm text-gray-600" style={{ fontFamily: "Urbanist, sans-serif" }}>
            Harvest events / yield.
        </p>
        <canvas
            ref={harvestCanvasRef}
            width={600}
            height={450}
            className="w-full h-auto border border-gray-200 rounded"
        />
        </div>
    </div>

    <div className="mt-6 text-center">
        <a
        href="https://github.com/karatedava/DUCKTOOLS"
        className="text-blue-600 hover:underline mr-4"
        style={{ fontFamily: "Urbanist, sans-serif" }}
        >
        GITHUB
        </a>
        <a
        href="https://github.com/karatedava/DUCKTOOLS"
        className="text-blue-600 hover:underline"
        style={{ fontFamily: "Urbanist, sans-serif" }}
        >
        WEB APP
        </a>
    </div>
    </section>

    {/* New Subsection: How did we get the PREDICTOR? */}
    <section className="mt-12">
    <h2 className="text-3xl font-semibold text-gray-900 text-center mb-2">
        How did we get the PREDICTOR?
    </h2>
    <p className="text-gray-700 text-center mb-6">
        We combined literature data with 6 months of controlled-condition duckweed cultivation.
    </p>

    {/* Three side-by-side clickable images */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <a href="/project/how/predictor/limiting-biomass/" className="block group">
        <img
            src="https://static.igem.wiki/teams/5642/images/how/predictor/exp-lb.webp"
            alt="limiting biomass"
            className="group-hover:opacity-90 transition"
        />
        </a>

        <a href="/project/how/predictor/harvesting-strategy/" className="block group">
        <img
            src="https://static.igem.wiki/teams/5642/images/how/predictor/exp-hs.webp"
            alt="harvesting strategy"
            className="group-hover:opacity-90 transition"
        />
        </a>

        <a href="/project/how/predictor/medium-change/" className="block group">
        <img
            src="https://static.igem.wiki/teams/5642/images/how/predictor/exp-mc.webp"
            alt="medium change"
            className="group-hover:opacity-90 transition"
        />
        </a>
    </div>

    <p className="text-gray-700 text-center max-w-3xl mx-auto">
        The program integrates limiting-biomass thresholds, scalable harvesting strategies, and timed
        medium changes to train a robust in-silico model ready for real-world deployment.
    </p>
    </section>

    {/* Divider */}
<hr className="my-12 border-t-2 border-gray-300" />


    {/* New Subsection: Core Principles */}
    <section className="mt-12">
    <h2 className="text-3xl font-semibold text-gray-900 text-center mb-2">
        What are the core principles underlying duckweed magic?
    </h2>

    <div className="flex justify-center mb-6">
        <img
        src="https://static.igem.wiki/teams/5642/images/how/predictor/page-3.webp"
        alt="Core principles of duckweed cultivation"
        />
    </div>

    <p className="text-gray-700 text-center max-w-3xl mx-auto">
        Our predictor distinguishes between short-term and long-term cultivation strategies,
        identifying the critical parameters that optimize yield. By balancing harvest ratio,
        period, and initial density, we uncover the sweet spot that enables sustainable and
        scalable duckweed production.
    </p>
    </section>

    {/* Divider */}
    <hr className="my-12 border-t-2 border-gray-300" />

    {/* New Subsection: In-Silico Simulation */}
    <section className="mt-12">
    <h2 className="text-3xl font-semibold text-gray-900 text-center mb-6">
        IN-SILICO SIMULATION
    </h2>

    <div className="flex justify-center mb-6">
        <img
        src="https://static.igem.wiki/teams/5642/images/how/predictor/page-4.webp"
        alt="In-silico simulation overview"
        />
    </div>

    <p className="text-gray-700 text-center max-w-3xl mx-auto">
      Thanks to our computational model, we were able to design our cultivation experiments sensibly, 
      rather than just hustling around blindly. 
      It provided us with predictions to build on. 
      By selecting a sufficiently long terminal time (e.g. 60 days), 
      we ensured the long-term sustainability of the recommended strategies. Based on these in silico simulations, 
      we selected the harvesting strategies that would lead to the highest yields.

    </p>

    {/* Open Modell Button */}
    <div className="flex justify-center">
        <button
        onClick={() => setShowModel(true)}
        className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
        >
        More on Predictive Model
        </button>
    </div>
    </section>

    {/* Modell Popup */}
    {showModel && (
    <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
        onClick={() => setShowModel(false)}
        aria-hidden="false"
    >
        <div
        role="dialog"
        aria-modal="true"
        aria-label="Predictive model image"
        className="bg-white rounded-lg shadow-lg p-6 max-w-5xl w-[92%] relative"
        onClick={(e) => e.stopPropagation()} // prevent backdrop click from closing when clicking content
        >
        <button
            onClick={() => setShowModel(false)}
            className="absolute top-3 right-3 text-gray-600 hover:text-black text-xl"
            aria-label="Close modal"
        >
            ✕
        </button>

        <div className="flex justify-center">
            <img
            src="https://static.igem.wiki/teams/5642/images/how/predictor/yieldpredictorscheme.webp"
            alt="Detailed predictive model"
            className="rounded-lg shadow-md w-full"
            />
        </div>
        </div>
    </div>
    )}

        {/* Divider */}
    <hr className="my-12 border-t-2 border-gray-300" />

    {/* New Subsection: Real Life Cultivation */}
    <section className="mt-12">
    <h2 className="text-3xl font-semibold text-gray-900 text-center mb-6">
        REAL LIFE CULTIVATION
    </h2>

    <div className="flex justify-center mb-6">
        <img
        src="https://static.igem.wiki/teams/5642/images/how/predictor/page-5.webp"
        alt="Real-life cultivation results and trends"
        />
    </div>

    <p className="text-gray-700 text-center max-w-3xl mx-auto">
        Benchmarked cultivation runs validate the in-silico predictions. Time-series biomass
        trajectories and end-of-run comparisons across harvesting ratios quantify performance
        and calibrate intrinsic growth for our species and conditions.
    </p>
    </section>

    {/* Divider */}
    <hr className="my-12 border-t-2 border-gray-300" />

    {/* New Subsection: Growth Modeller */}
    <section className="mt-12">
    <h2 className="text-3xl font-semibold text-gray-900 text-center mb-6">
        INTO THE BLACK BOX (GROWTH MODELLER)
    </h2>

    <div className="flex justify-center mb-6">
        <img
        src="https://static.igem.wiki/teams/5642/images/how/predictor/page-6.webp"
        alt="Growth Modeller detailed Scheme"
        />
    </div>

    <p className="text-gray-700 text-center max-w-4xl mx-auto">
        The growth modeller integrates user-defined and hidden parameters to simulate duckweed
        cultivation. It begins with initialization — computing effective growth rate and biomass —
        and transitions into a simulation loop where biomass accumulation and harvesting dynamics
        are iteratively calculated. This allows prediction of yields under varying strategies and
        environmental conditions.
    </p>
    </section>

    {/* Divider */}
    <hr className="my-12 border-t-2 border-gray-300" />

    {/* New Subsection: Cultivation Monitoring */}
    <section className="mt-12">
    <h2 className="text-3xl font-semibold text-gray-900 text-center mb-6">
        KEEP CULTIVATION IN CHECK … WITH MINIMUM EFFORT
    </h2>

    <div className="flex justify-center mb-6">
        <img
        src="https://static.igem.wiki/teams/5642/images/how/predictor/page-7.webp"
        alt="Cultivation monitoring overview"
        />
    </div>

    <p className="text-gray-700 text-center max-w-4xl mx-auto mb-6">
        Automatic camera monitoring and image-based prediction systems reduce the need for manual
        observation while ensuring stability in cultivation. Two systems — biomass prediction and
        density estimation — were benchmarked to design an efficient monitoring solution.
    </p>

    {/* Buttons */}
    <div className="flex flex-wrap justify-center gap-4">
        <button
        onClick={() => setShowDensity(true)}
        className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
        >
        More on Density Estimation
        </button>

        <button
        onClick={() => setShowBiomass(true)}
        className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
        >
        More on Biomass Prediction
        </button>

        <a
        href="/probe" // 🔗 redirect to another page
        className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition"
        >
        PROBE – An Efficient Alternative
        </a>
    </div>
    </section>

    {/* Density Modal */}
    {showDensity && (
    <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
        onClick={() => setShowDensity(false)}
    >
        <div
        className="bg-white rounded-lg shadow-lg p-6 max-w-4xl w-full relative"
        onClick={(e) => e.stopPropagation()}
        >
        <button
            onClick={() => setShowDensity(false)}
            className="absolute top-3 right-3 text-gray-600 hover:text-black text-xl"
        >
            ✕
        </button>
        <div className="flex justify-center">
            <img
            src="https://static.igem.wiki/teams/5642/images/how/predictor/segmentationscheme.webp"
            alt="Density estimation details"
            />
        </div>
        <p className="mt-4 text-gray-700 text-center">
            Density estimation segments water coverage but struggles at high coverage levels,
            reducing its reliability for growth speed prediction.
        </p>
        </div>
    </div>
    )}

    {/* Biomass Modal */}
    {showBiomass && (
    <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
        onClick={() => setShowBiomass(false)}
    >
        <div
        className="bg-white rounded-lg shadow-lg p-6 max-w-4xl w-full relative"
        onClick={(e) => e.stopPropagation()}
        >
        <button
            onClick={() => setShowBiomass(false)}
            className="absolute top-3 right-3 text-gray-600 hover:text-black text-xl"
        >
            ✕
        </button>
        <div className="flex justify-center">
            <img
            src="https://static.igem.wiki/teams/5642/images/how/predictor/biomasspredictionscheme.webp"
            alt="Biomass prediction details"
            />
        </div>
        <p className="mt-4 text-gray-700 text-center">
            Biomass prediction provides more practical and accurate tracking at high-density
            states, though it requires a high-resolution camera setup.
        </p>
        </div>
    </div>
    )}

    {/* Divider */}
    <hr className="my-12 border-t-2 border-gray-300" />

    {/* References Section */}
    <section className="mt-12">
    <h2 className="text-3xl font-semibold text-gray-900 text-center mb-6">
        REFERENCES
    </h2>

    <ul className="list-disc list-inside text-gray-700 max-w-3xl mx-auto space-y-3">
        <li>
            [1] <a href="https://doi.org/10.1016/j.aquabot.2004.12.002" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://doi.org/10.1016/j.aquabot.2004.12.002</a>
        </li>
        <li>
            [2] <a href="https://doi.org/10.1111/plb.12184" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://doi.org/10.1111/plb.12184</a>
        </li>
        <li>
            [3] <a href="https://doi.org/10.1016/0304-3770(79)90028-7" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://doi.org/10.1016/0304-3770(79)90028-7</a>
        </li>
        <li>
            [4] <a href="https://doi.org/10.1016/S0304-3770(00)00131-5" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://doi.org/10.1016/S0304-3770(00)00131-5</a>
        </li>
        <li>
            [5] <a href="https://doi.org/10.1016/j.watres.2006.05.026" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://doi.org/10.1016/j.watres.2006.05.026</a>
        </li>
        <li>
            [6] <a href="https://arxiv.org/abs/1512.03385" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://arxiv.org/abs/1512.03385</a>
        </li>
        <li>
            [7] <a href="https://doi.org/10.1016/j.watres.2007.01.059" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://doi.org/10.1016/j.watres.2007.01.059</a>
        </li>
        <li>
            [8] <a href="https://doi.org/10.1016/j.heliyon.2022.e12194" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://doi.org/10.1016/j.heliyon.2022.e12194</a>
        </li>
        <li>
            [9] <a href="https://doi.org/10.1016/j.jclepro.2021.129120" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://doi.org/10.1016/j.jclepro.2021.129120</a>
        </li>
    </ul>

    </section>
    <hr className="border-t-2 border-gray-300 my-12" />

    </div>
  );
};

export default PredictorMain;
