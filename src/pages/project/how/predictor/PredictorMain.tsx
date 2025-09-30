import React, { useEffect, useRef } from 'react';
import { useState } from "react";
import Chart from 'chart.js/auto';

const PredictorMain = () => {

const [TT, setTT] = useState(40); // Terminal time (days)
  const [HP, setHP] = useState(5); // Harvest period
  const [HR, setHR] = useState(0.5); // Harvest ratio
  const [W0, setW0] = useState(100); // Initial biomass
  const [biomassValues, setBiomassValues] = useState<number[]>([]);
  const [harvestValues, setHarvestValues] = useState<number[]>([]);
  const [harvestTimes, setHarvestTimes] = useState<number[]>([]);
  const biomassCanvasRef = useRef<HTMLCanvasElement>(null);
  const harvestCanvasRef = useRef<HTMLCanvasElement>(null);
  const biomassChartRef = useRef<Chart | null>(null);
  const harvestChartRef = useRef<Chart | null>(null);

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

    storage += biomass; // Collect remaining biomass

    return [storage, biomassValues, harvestValues, harvestTimes];
  };

  useEffect(() => {
    const [_, biomass, harvest, harvestTimes] = runSingle(TT, HP, HR, W0);
    setBiomassValues(biomass);
    setHarvestValues(harvest);
    setHarvestTimes(harvestTimes);

    // Biomass Plot
    if (biomassCanvasRef.current) {
      if (biomassChartRef.current) {
        biomassChartRef.current.destroy(); // Clean up previous chart
      }
      biomassChartRef.current = new Chart(biomassCanvasRef.current, {
        type: 'line',
        data: {
          labels: Array.from({ length: TT }, (_, i) => i.toString()), // Time points (0 to TT)
          datasets: [{
            label: 'Biomass Trajectory',
            data: biomass,
            borderColor: '#4f46e5', // Matches text-indigo-600
            backgroundColor: 'rgba(79, 70, 229, 0.2)',
            fill: true,
            tension: 0.4,
            pointRadius: 0, // No points on line
          }],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            x: {
              title: {
                display: true,
                text: 'Time (days)',
                color: '#1f2937', // Matches text-gray-800
                font: {
                  family: 'Urbanist',
                  size: 14,
                  weight: 500,
                },
              },
              grid: {
                color: '#e5e7eb', // Matches border-gray-200
              },
              ticks: {
                maxTicksLimit: 10, // Limit ticks for readability
                font: {
                  family: 'Urbanist',
                  size: 12,
                },
                color: '#1f2937',
              },
            },
            y: {
              title: {
                display: true,
                text: 'Biomass (g/m²)',
                color: '#1f2937',
                font: {
                  family: 'Urbanist',
                  size: 14,
                  weight: 500,
                },
              },
              grid: {
                color: '#e5e7eb',
              },
              ticks: {
                font: {
                  family: 'Urbanist',
                  size: 12,
                },
                color: '#1f2937',
              },
              suggestedMax: 1300, // Max biomass from runSingle
            },
          },
          plugins: {
            legend: {
              labels: {
                font: {
                  family: 'Urbanist',
                  size: 12,
                },
                color: '#1f2937',
              },
            },
            tooltip: {
              titleFont: {
                family: 'Urbanist',
              },
              bodyFont: {
                family: 'Urbanist',
              },
            },
          },
        },
      });
    }

    // Harvest Plot
    if (harvestCanvasRef.current) {
      if (harvestChartRef.current) {
        harvestChartRef.current.destroy(); // Clean up previous chart
      }
      harvestChartRef.current = new Chart(harvestCanvasRef.current, {
        type: 'line',
        data: {
          labels: harvestTimes.map(t => t.toString()), // Harvest time points
          datasets: [
            {
              label: 'Harvest Yield',
              data: harvestValues,
              borderColor: '#dc2626', // Matches original red
              backgroundColor: '#dc2626',
              fill: false,
              tension: 0.4,
              showLine: true,
              pointRadius: 8, // Matches original arc size
              pointHoverRadius: 10,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            x: {
              title: {
                display: true,
                text: 'Time (days)',
                color: '#1f2937',
                font: {
                  family: 'Urbanist',
                  size: 14,
                  weight: 500,
                },
              },
              grid: {
                color: '#e5e7eb',
              },
              ticks: {
                maxTicksLimit: 10,
                font: {
                  family: 'Urbanist',
                  size: 12,
                },
                color: '#1f2937',
              },
            },
            y: {
              title: {
                display: true,
                text: 'Yield (g)',
                color: '#1f2937',
                font: {
                  family: 'Urbanist',
                  size: 14,
                  weight: 500,
                },
              },
              grid: {
                color: '#e5e7eb',
              },
              ticks: {
                font: {
                  family: 'Urbanist',
                  size: 12,
                },
                color: '#1f2937',
              },
              suggestedMax: Math.max(...harvestValues, 200), // Dynamic max
            },
          },
          plugins: {
            legend: {
              labels: {
                font: {
                  family: 'Urbanist',
                  size: 12,
                },
                color: '#1f2937',
              },
            },
            tooltip: {
              titleFont: {
                family: 'Urbanist',
              },
              bodyFont: {
                family: 'Urbanist',
              },
            },
          },
        },
      });
    }

    return () => {
      if (biomassChartRef.current) biomassChartRef.current.destroy();
      if (harvestChartRef.current) harvestChartRef.current.destroy();
    };
}, [TT, HP, HR, W0]);



  return (
<div className="max-w-6xl mx-auto p-6 bg-white text-lg text-justify" style={{ fontFamily: 'Urbanist, sans-serif' }}>
      {/* Header */}
      <h1
        className="text-4xl font-bold mb-8 text-gray-900"
        style={{ fontFamily: 'Space Grotesk, sans-serif' }}
      >
        IN SILICO DUCKWEED CULTIVATION
      </h1>

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
          Our PREDICTOR, a real-life data–based model, enables predictable large-scale duckweed cultivation
        </h2>
        <div className="flex justify-center mb-6">
          <img
            src="https://static.igem.wiki/teams/5642/images/how/predictor/page0-new.webp"
            alt="Duckweed cultivation workflow"
            className="w-full max-w-3xl rounded-xl"
          />
        </div>
        <h3 className="text-xl font-semibold mb-3 text-gray-800 text-center" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
          Variance in growth rate
        </h3>
      <div className="flex justify-center">
        <img
          src="https://static.igem.wiki/teams/5642/images/how/predictor/growthvariance.webp"
          alt="Variance in growth"
          className="rounded-lg max-w-xl w-full"
        />
      </div>
      </div>

      {/* Divider */}
      <hr className="my-12 border-t-2 border-gray-300" />

      {/* New Subsection with Screenshot */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 text-center" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
          Transition from IN-SILICO to REALITY with ease
        </h2>
        <div className="text-center max-w-4xl mx-auto px-4 py-6">
        <p className="text-gray-700 leading-relaxed mb-4" style={{ fontFamily: 'Urbanist, sans-serif' }}>
          Our streamlined pipeline bridges computational simulations and real-world duckweed cultivation. By selecting a configuration, predicting optimal cultivation strategies, and translating them into actionable steps, you can accelerate your journey toward sustainable, high-yield duckweed production.
        </p>
        </div>
        <div className="flex justify-center mb-6">
          <img
            src="https://static.igem.wiki/teams/5642/images/how/predictor/page1-new.webp"
            alt="Duckweed cultivation workflow"
          />
        </div>
      </div>

      {/* Divider */}
      <hr className="my-12 border-t-2 border-gray-300" />

      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 text-center" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
          INTERACTIVE CONTROLS - GROWTH MODELER
        </h2>

        <div className="text-center max-w-4xl mx-auto px-4 py-6">
          <p className="text-gray-700 leading-relaxed" style={{ fontFamily: 'Urbanist, sans-serif' }}>
            Explore how our <span className="text-indigo-600 font-semibold">Growth Modeler</span> works. This interactive window provides simple controls for harvesting parameters.
            Visualisations show how biomass changes during cultivation and the amount of yield harvested at each stage. Feel free to experiment. 
            To access our complete toolbox with all the features, click the Web Application link below!
          </p>
        </div>

        {/* Controls */}
        <div className="bg-white rounded-xl border border-gray-200 p-5 mb-6 max-w-lg mx-auto">
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-700" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
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
            <label className="block mb-2 text-sm font-medium text-gray-700" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
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
            <label className="block mb-2 text-sm font-medium text-gray-700" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
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
            <label className="block mb-2 text-sm font-medium text-gray-700" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
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
        </div>

        {/* Plots */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-6">
          {/* Biomass Plot */}
          <div className="bg-white rounded-xl border border-gray-200 p-5">
            <h3 className="text-xl font-semibold mb-3 text-gray-800 text-center" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              BIOMASS PLOT
            </h3>
            <p className="mb-4 text-sm text-gray-700 leading-relaxed" style={{ fontFamily: 'Urbanist, sans-serif' }}>
              Biomass trajectory over time.
            </p>
            <div className="w-full h-[400px] md:h-[500px]">
              <canvas
                ref={biomassCanvasRef}
                className="w-full h-full border border-gray-200 rounded"
              />
            </div>
          </div>

          {/* Harvest Plot */}
          <div className="bg-white rounded-xl border border-gray-200 p-5">
            <h3 className="text-xl font-semibold mb-3 text-gray-800 text-center" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              HARVEST PLOT
            </h3>
            <p className="mb-4 text-sm text-gray-700 leading-relaxed" style={{ fontFamily: 'Urbanist, sans-serif' }}>
              Harvest events / yield.
            </p>
            <div className="w-full h-[400px] md:h-[500px]">
              <canvas
                ref={harvestCanvasRef}
                className="w-full h-full border border-gray-200 rounded"
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="col-span-1 lg:col-span-2 flex justify-center gap-4 mt-6">
            <a
              href="https://github.com/karatedava/DUCKTOOLS"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white font-semibold text-lg py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors duration-200"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              View on GitHub
            </a>
            <a
              href="https://malleably-unhabituated-kristin.ngrok-free.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white font-semibold text-lg py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors duration-200"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Visit Web Application
            </a>
          </div>
        </div>
      </section>
      <hr className="my-12 border-t-2 border-gray-300" />

      {/* New Subsection: How did we get the PREDICTOR? */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 text-center" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
          How did we get the PREDICTOR?
        </h2>
        <p className="text-gray-700 leading-relaxed text-center" style={{ fontFamily: 'Urbanist, sans-serif' }}>
          We combined literature data with six months of controlled-condition duckweed cultivation.
          Explore our wet-lab contribution to the development of the in-silico model!
        </p><br/>

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
      </section>

      {/* Divider */}
      <hr className="my-12 border-t-2 border-gray-300" />

      {/* New Subsection: Core Principles */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 text-center" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
          What are the core principles underlying duckweed magic?
        </h2>

        <p className="text-gray-700 leading-relaxed text-center" style={{ fontFamily: 'Urbanist, sans-serif' }}>
          Our predictor distinguishes between short-term and long-term cultivation strategies,
          identifying the critical parameters that optimize yield. By balancing harvest ratio,
          period, and initial density, we uncover the sweet spot that enables sustainable and
          scalable duckweed production.
        </p>

        <div className="flex justify-center mb-6">
          <img
            src="https://static.igem.wiki/teams/5642/images/how/predictor/page3-new-2.webp"
            alt="Core principles of duckweed cultivation"
          />
        </div>
      </section>

      {/* Divider */}
      <hr className="my-12 border-t-2 border-gray-300" />

      {/* New Subsection: In-Silico Simulation */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 text-center" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
          IN-SILICO SIMULATION
        </h2>

        <div className="text-center max-w-3xl mx-auto px-4 py-8">
          <p className="text-gray-700 leading-relaxed" style={{ fontFamily: 'Urbanist, sans-serif' }}>
            We developed two independent modeling tools to optimize cultivation processes:
          </p>
          <ul className="mt-4 space-y-3 text-gray-700 leading-relaxed text-left max-w-2xl mx-auto" style={{ fontFamily: 'Urbanist, sans-serif' }}>
            <li>
              <span className="font-semibold text-indigo-600">Growth Modeler:</span> Computes biomass step-by-step, enabling continuous growth modeling with user-defined cultivation periods.
            </li>
            <li>
              <span className="font-semibold text-indigo-600">Yield Predictor:</span> A compact neural network trained on large-scale duckweed cultivation data, delivering a single biomass prediction for a one-year period.
            </li>
          </ul>
        </div>

        <div className="flex justify-center mb-6">
          <img
            src="https://static.igem.wiki/teams/5642/images/how/predictor/page4-new-3.webp"
            alt="In-silico simulation overview"
          />
        </div>
        <div className="text-center max-w-4xl mx-auto px-4 py-6">
          <p className="text-gray-700 leading-relaxed" style={{ fontFamily: 'Urbanist, sans-serif' }}>
            Our computational tools enabled us to design cultivation experiments with precision, guided by data-driven insights rather than trial and error. These tools provided reliable predictions to inform our approach. By setting a sufficiently long terminal time (e.g., 60 days), we ensured the long-term sustainability of our strategies. Based on these in-silico simulations, we selected harvesting strategies optimized for maximum yields.
          </p>
        </div>
      </section>

      {/* Divider */}
      <hr className="my-12 border-t-2 border-gray-300" />

      {/* New Subsection: Real Life Cultivation */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 text-center" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
          REAL LIFE CULTIVATION
        </h2>

        <div className="text-center max-w-4xl mx-auto px-4 py-6">
          <p className="text-gray-700 leading-relaxed" style={{ fontFamily: 'Urbanist, sans-serif' }}>
            Benchmarked cultivation runs validate our in-silico predictions. Time-series biomass trajectories and end-of-run comparisons across various harvesting ratios quantify performance and refine intrinsic growth parameters tailored to our species and conditions.
          </p>
        </div>

        <div className="flex justify-center mb-6">
          <img
            src="https://static.igem.wiki/teams/5642/images/how/predictor/page5-new.webp"
            alt="Real-life cultivation results and trends"
          />
        </div>
      </section>

      {/* Divider */}
      <hr className="my-12 border-t-2 border-gray-300" />

      {/* New Subsection: Growth Modeller */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 text-center" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
          INTO THE BLACK BOX (GROWTH MODELLER)
        </h2>

        <div className="text-center max-w-4xl mx-auto px-4 py-6">
          <p className="text-gray-700 leading-relaxed" style={{ fontFamily: 'Urbanist, sans-serif' }}>
            The <span className="text-indigo-600 font-semibold">Growth Modeler</span> simulates duckweed cultivation by integrating user-defined and internal parameters. It starts with an initialization phase, calculating the effective growth rate and initial biomass, then progresses into a simulation loop. This loop iteratively computes biomass accumulation and harvesting dynamics, enabling accurate yield predictions across diverse strategies and environmental conditions.
          </p>
        </div>

        <div className="flex justify-center mb-6">
          <img
            src="https://static.igem.wiki/teams/5642/images/how/predictor/page-6.webp"
            alt="Growth Modeller detailed Scheme"
          />
        </div>
      </section>

      {/* Divider */}
      <hr className="my-12 border-t-2 border-gray-300" />

      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 text-center" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
          INTO THE BLACK BOX (YIELD PREDICTOR)
        </h2>

        <div className="text-center max-w-4xl mx-auto px-4 py-6">
          <p className="text-gray-700 leading-relaxed" style={{ fontFamily: 'Urbanist, sans-serif' }}>
            The <span className="text-indigo-600 font-semibold">Yield Predictor</span> approaches duckweed yield prediction from a unique perspective, leveraging distinct data sources. Trained to forecast annual duckweed yield for a single cultivation year, it complements the <span className="text-indigo-600 font-semibold">Growth Modeler</span>. Together, our integrated toolbox combines both tools to validate in-silico cultivation designs from two independent perspectives.
          </p>
        </div>

        <div className="flex justify-center mb-6">
          <img
            src="https://static.igem.wiki/teams/5642/images/how/predictor/yp-scheme-new.webp"
            alt="Yield Predictor detailed Scheme"
          />
        </div>
      </section>

      <hr className="my-12 border-t-2 border-gray-300" />

      {/* New Subsection: Cultivation Monitoring */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 text-center" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
          KEEP CULTIVATION IN CHECK … WITH MINIMUM EFFORT
        </h2>

        <div className="text-center max-w-4xl mx-auto px-4 py-6">
          <p className="text-gray-700 leading-relaxed" style={{ fontFamily: 'Urbanist, sans-serif' }}>
            Designing a cultivation experiment is one thing, but we did not stop there. It is important to continuously monitor the cultivation process to ensure everything is running smoothly. Monitoring also serves to effectively detect potential technical issues and alert users when interference with the cultivation process is necessary, thereby preventing the waste of resources. This enables problems to be resolved quickly and stable cultivation to be re-established. Moreover, in large scale scenario, using human resources would be very time-consuming
          </p>
        </div>

        <div className="flex justify-center mb-6">
          <img
            src="https://static.igem.wiki/teams/5642/images/how/predictor/page7-new.webp"
            alt="Cultivation monitoring overview"
          />
        </div>

        <div className="text-center max-w-3xl mx-auto px-4 py-8">
          <p className="text-gray-700 leading-relaxed" style={{ fontFamily: 'Urbanist, sans-serif' }}>
            <span className="font-semibold text-indigo-600">IMAGES AS OUR INPUTS !</span> - To reduce the need for human resources, we came up with the idea of using an automatic camera monitoring of the cultivation trays. Images taken at regular intervals would then be evaluated for duckweed biomass. We designed two independent image processing systems: <span className="font-semibold text-indigo-600">water surface density estimation system</span> and <span className="font-semibold text-indigo-600">biomass prediction system</span>
          </p>
        </div>

        {/* Buttons */}
        <div className="col-span-1 lg:col-span-2 flex justify-center gap-4 mt-6">
          <a
            href="https://github.com/karatedava/DUCKEYE"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white font-semibold text-lg py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors duration-200"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            View on GitHub
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white font-semibold text-lg py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors duration-200"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            Visit Web Application
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-600 text-white font-semibold text-lg py-3 px-6 rounded-lg hover:bg-red-700 transition-colors duration-200"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            PROBE - an efficient alternative
          </a>
        </div>
      </section>

      <hr className="my-12 border-t-2 border-gray-300" />

      <section className="mt-12">
        <h3 className="text-xl font-semibold mb-3 text-gray-800 text-center" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
          more on DENSITY SEGMENTATION
        </h3>
        <div className="flex justify-center">
          <img
            src="https://static.igem.wiki/teams/5642/images/how/predictor/ds-scheme.webp"
            alt="Density estimation details"
          />
        </div>
        <br />
      </section>

      <hr className="my-12 border-t-2 border-gray-300" />

      <section className="mt-12">
        <h3 className="text-xl font-semibold mb-3 text-gray-800 text-center" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
          more on BIOMASS PREDICTION   
        </h3>
        <div className="flex justify-center">
          <img
            src="https://static.igem.wiki/teams/5642/images/how/predictor/bp-scheme.webp"
            alt="Biomass prediction details"
          />
        </div>
      </section>

      {/* Divider */}
      <hr className="my-12 border-t-2 border-gray-300" />

      {/* References Section */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 text-center" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
          REFERENCES
        </h2>

        <ul className="list-disc list-inside text-gray-700 leading-relaxed max-w-3xl mx-auto space-y-3" style={{ fontFamily: 'Urbanist, sans-serif' }}>
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
