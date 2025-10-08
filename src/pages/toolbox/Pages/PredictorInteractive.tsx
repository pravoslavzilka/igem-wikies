import React, {useEffect, useRef, useState} from 'react';
import Chart from 'chart.js/auto';

export default function PredictorInteractive() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [TT, setTT] = useState(40); // Terminal time (days)
    const [HP, setHP] = useState(5); // Harvest period
    const [HR, setHR] = useState(0.5); // Harvest ratio
    const [W0, setW0] = useState(100); // Initial biomass
    const [Area, setArea] = useState(10); // Initial cultivation area size in m^2
    const [Species, setSpecies] = useState('Japonica')
    const [biomassValues, setBiomassValues] = useState<number[]>([]);
    const [harvestValues, setHarvestValues] = useState<number[]>([]);
    const [harvestTimes, setHarvestTimes] = useState<number[]>([]);
    const biomassCanvasRef = useRef<HTMLCanvasElement>(null);
    const harvestCanvasRef = useRef<HTMLCanvasElement>(null);
    const storageCanvasRef = useRef<HTMLCanvasElement>(null);

    const biomassChartRef = useRef<Chart | null>(null);
    const harvestChartRef = useRef<Chart | null>(null);
    const storageChartRef = useRef<Chart | null>(null);
    const runSingle = (
        TT: number,
        HP: number,
        HR: number,
        W0: number,
        PlantSpecies: String
    ): [number, number[], number[], number[]] => {
        const dt = 1;
        const times = Array.from({length: TT}, (_, i) => i);
        const biomassValues: number[] = [];
        const harvestValues: number[] = [];
        const harvestTimes: number[] = [];
        let storage = 0;
        let nextHarvestTime = HP;
        let biomass = W0;
        let growth_multiplier = 0.0;

        if (PlantSpecies == "Japonica") {
            growth_multiplier = 1;
        } else if (PlantSpecies == "Minor") {
            growth_multiplier = 0.8;
        }

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
            const dW = (growth_multiplier * gr) * biomass * (1 - biomass / 1300) * dt;
            biomass += dW;
            biomassValues.push(biomass);
        }

        storage += biomass; // Collect remaining biomass
        storage = (storage * Area) / 1000

        return [storage, biomassValues, harvestValues, harvestTimes];
    };

    useEffect(() => {
        const [storage, biomass, harvest, harvestTimes] = runSingle(TT, HP, HR, W0, Species);
        setBiomassValues(biomass);
        setHarvestValues(harvest);
        setHarvestTimes(harvestTimes);
        setSpecies(Species);

        // === BIOMASS PLOT ===
        if (biomassCanvasRef.current) {
            if (biomassChartRef.current) biomassChartRef.current.destroy();
            biomassChartRef.current = new Chart(biomassCanvasRef.current, {
                type: 'line',
                data: {
                    labels: Array.from({length: TT}, (_, i) => i.toString()),
                    datasets: [{
                        label: 'Biomass Trajectory',
                        data: biomass,
                        borderColor: '#4f46e5',
                        backgroundColor: 'rgba(79, 70, 229, 0.2)',
                        fill: true,
                        tension: 0.4,
                        pointRadius: 0,
                    }],
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    animation: false,
                    scales: {
                        x: {
                            title: {
                                display: true,
                                text: 'Time (days)',
                                color: '#1f2937',
                                font: {family: 'Urbanist', size: 14, weight: 500},
                            },
                            grid: {color: '#e5e7eb'},
                            ticks: {
                                maxTicksLimit: 10,
                                font: {family: 'Urbanist', size: 12},
                                color: '#1f2937',
                            },
                        },
                        y: {
                            min: 0,
                            max: 1400, // ✅ fixed range
                            title: {
                                display: true,
                                text: 'Biomass (g/m²)',
                                color: '#1f2937',
                                font: {family: 'Urbanist', size: 14, weight: 500},
                            },
                            grid: {color: '#e5e7eb'},
                            ticks: {
                                font: {family: 'Urbanist', size: 12},
                                color: '#1f2937',
                            },
                        },
                    },
                    plugins: {
                        legend: {
                            labels: {font: {family: 'Urbanist', size: 12}, color: '#1f2937'},
                        },
                        tooltip: {
                            titleFont: {family: 'Urbanist'},
                            bodyFont: {family: 'Urbanist'},
                        },
                    },
                },
            });
            biomassChartRef.current.update('none');
        }

        // === HARVEST PLOT ===
        if (harvestCanvasRef.current) {
            if (harvestChartRef.current) harvestChartRef.current.destroy();
            harvestChartRef.current = new Chart(harvestCanvasRef.current, {
                type: 'line',
                data: {
                    labels: harvestTimes.map((t) => t.toString()),
                    datasets: [{
                        label: 'Harvest Yield',
                        data: harvest,
                        borderColor: '#dc2626',
                        backgroundColor: '#dc2626',
                        fill: false,
                        tension: 0.4,
                        showLine: true,
                        pointRadius: 8,
                        pointHoverRadius: 10,
                    }],
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    animation: false,
                    scales: {
                        x: {
                            title: {
                                display: true,
                                text: 'Time (days)',
                                color: '#1f2937',
                                font: {family: 'Urbanist', size: 14, weight: 500},
                            },
                            grid: {color: '#e5e7eb'},
                            ticks: {
                                maxTicksLimit: 10,
                                font: {family: 'Urbanist', size: 12},
                                color: '#1f2937',
                            },
                        },
                        y: {
                            beginAtZero: true,
                            suggestedMax: Math.max(...harvestValues, 200), // ✅ dynamic
                            title: {
                                display: true,
                                text: 'Yield (g/m²)',
                                color: '#1f2937',
                                font: {family: 'Urbanist', size: 14, weight: 500},
                            },
                            grid: {color: '#e5e7eb'},
                            ticks: {
                                font: {family: 'Urbanist', size: 12},
                                color: '#1f2937',
                            },
                        },
                    },
                    plugins: {
                        legend: {
                            labels: {font: {family: 'Urbanist', size: 12}, color: '#1f2937'},
                        },
                        tooltip: {
                            titleFont: {family: 'Urbanist'},
                            bodyFont: {family: 'Urbanist'},
                        },
                    },
                },
            });
            harvestChartRef.current.update('none');
        }

        // === STORAGE BAR PLOT ===
        if (storageCanvasRef.current) {
            if (storageChartRef.current) storageChartRef.current.destroy();
            storageChartRef.current = new Chart(storageCanvasRef.current, {
                type: 'bar',
                data: {
                    labels: [''],
                    datasets: [{
                        label: 'Total Storage',
                        data: [storage],
                        backgroundColor: '#10b981',
                        borderColor: '#047857',
                        borderWidth: 1,
                    }],
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    animation: false,
                    scales: {
                        x: {
                            title: {
                                display: true,
                                color: '#1f2937',
                                font: {family: 'Urbanist', size: 14, weight: 500},
                            },
                            grid: {color: '#e5e7eb'},
                            ticks: {
                                font: {family: 'Urbanist', size: 12},
                                color: '#1f2937',
                            },
                        },
                        y: {
                            min: 0,
                            // ✅ Default max is 100, but scales up automatically if needed
                            max: storage > 100 ? storage * 1.2 : 100,
                            title: {
                                display: true,
                                text: 'Storage (kg)',
                                color: '#1f2937',
                                font: {family: 'Urbanist', size: 14, weight: 500},
                            },
                            grid: {color: '#e5e7eb'},
                            ticks: {
                                font: {family: 'Urbanist', size: 12},
                                color: '#1f2937',
                            },
                        },
                    },
                    plugins: {
                        legend: {
                            labels: {font: {family: 'Urbanist', size: 12}, color: '#1f2937'},
                        },
                        tooltip: {
                            titleFont: {family: 'Urbanist'},
                            bodyFont: {family: 'Urbanist'},
                        },
                    },
                },
            });
            storageChartRef.current.update('none');
        }

        // === Cleanup ===
        return () => {
            if (biomassChartRef.current) biomassChartRef.current.destroy();
            if (harvestChartRef.current) harvestChartRef.current.destroy();
            if (storageChartRef.current) storageChartRef.current.destroy();
        };
    }, [TT, HP, HR, W0, Area, Species]);
    return (
        <div>
            <section className="mt-12">

                {/* Controls and Storage Plot */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-6 max-w-4xl mx-auto">
                    {/* Controls */}
                    <div className="bg-white rounded-xl border border-gray-200 p-5">
                        <div className="mb-5">
                            <label
                                className="block mb-2 text-sm font-medium text-gray-700"
                                style={{fontFamily: "Space Grotesk, sans-serif"}}
                            >
                                Cultivation Time (days):{" "}
                                <span className="inline-block ml-1 px-2 py-0.5 rounded bg-gray-100 text-gray-800">
          {TT}
        </span>
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
                            <label
                                className="block mb-2 text-sm font-medium text-gray-700"
                                style={{fontFamily: "Space Grotesk, sans-serif"}}
                            >
                                Harvest Period (days):{" "}
                                <span className="inline-block ml-1 px-2 py-0.5 rounded bg-gray-100 text-gray-800">
          {HP}
        </span>
                            </label>
                            <input
                                type="range"
                                min="0"
                                max="10"
                                value={HP}
                                onChange={(e) => setHP(Number(e.target.value))}
                                className="w-full accent-black"
                            />
                        </div>

                        <div className="mb-5">
                            <label
                                className="block mb-2 text-sm font-medium text-gray-700"
                                style={{fontFamily: "Space Grotesk, sans-serif"}}
                            >
                                Harvest Ratio (fraction):{" "}
                                <span className="inline-block ml-1 px-2 py-0.5 rounded bg-gray-100 text-gray-800">
          {HR}
        </span>
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

                        <div className="mb-5">
                            <label
                                className="block mb-2 text-sm font-medium text-gray-700"
                                style={{fontFamily: "Space Grotesk, sans-serif"}}
                            >
                                Initial Biomass (g/m²):{" "}
                                <span className="inline-block ml-1 px-2 py-0.5 rounded bg-gray-100 text-gray-800">
          {W0}
        </span>
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

                        <div className="mb-5">
                            <label
                                className="block mb-2 text-sm font-medium text-gray-700"
                                style={{fontFamily: "Space Grotesk, sans-serif"}}
                            >
                                Cultivation area (m²):{" "}
                                <span className="inline-block ml-1 px-2 py-0.5 rounded bg-gray-100 text-gray-800">
          {Area}
        </span>
                            </label>
                            <input
                                type="range"
                                min="1"
                                max="100"
                                step="1"
                                value={Area}
                                onChange={(e) => setArea(Number(e.target.value))}
                                className="w-full accent-black"
                            />
                        </div>

                        <div className="mb-5">
                            <label
                                className="block mb-2 text-sm font-medium text-gray-700"
                                style={{fontFamily: "Space Grotesk, sans-serif"}}
                            >
                                Duckweed species:
                            </label>
                            <select
                                value={Species}
                                onChange={(e) => setSpecies(String(e.target.value))}
                                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black italic"
                                style={{fontFamily: "Space Grotesk, sans-serif"}}
                            >
                                <option value="Japonica">L. japonica</option>
                                <option value="Minor">L. minor</option>
                            </select>
                        </div>
                    </div>

                    {/* Storage Plot */}
                    <div className="bg-white rounded-xl border border-gray-200 p-5">
                        <h3
                            className="text-xl font-semibold mb-3 text-gray-800 text-center"
                            style={{fontFamily: "Space Grotesk, sans-serif"}}
                        >
                            STORAGE PLOT
                        </h3>
                        <p
                            className="mb-4 text-sm text-gray-700 leading-relaxed"
                            style={{fontFamily: "Urbanist, sans-serif"}}
                        >
                            Total harvested biomass during cultivation (fresh wet weight)
                        </p>
                        <div className="w-full h-[250px] md:h-[300px]">
                            <canvas
                                ref={storageCanvasRef}
                                className="w-full h-full border border-gray-200 rounded"
                            />
                        </div>
                    </div>
                </div>

                {/* Biomass and Harvest Plots */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {/* Biomass Plot */}
                    <div className="bg-white rounded-xl border border-gray-200 p-5">
                        <h3
                            className="text-xl font-semibold mb-3 text-gray-800 text-center"
                            style={{fontFamily: "Space Grotesk, sans-serif"}}
                        >
                            BIOMASS PLOT
                        </h3>
                        <p
                            className="mb-4 text-sm text-gray-700 leading-relaxed"
                            style={{fontFamily: "Urbanist, sans-serif"}}
                        >
                            Available biomass during the cultivation
                        </p>
                        <div className="w-full h-[250px] md:h-[300px]">
                            <canvas
                                ref={biomassCanvasRef}
                                className="w-full h-full border border-gray-200 rounded"
                            />
                        </div>
                    </div>

                    {/* Harvest Plot */}
                    <div className="bg-white rounded-xl border border-gray-200 p-5">
                        <h3
                            className="text-xl font-semibold mb-3 text-gray-800 text-center"
                            style={{fontFamily: "Space Grotesk, sans-serif"}}
                        >
                            HARVEST PLOT
                        </h3>
                        <p
                            className="mb-4 text-sm text-gray-700 leading-relaxed"
                            style={{fontFamily: "Urbanist, sans-serif"}}
                        >
                            Harvested amount per each harvest event
                        </p>
                        <div className="w-full h-[250px] md:h-[300px]">
                            <canvas
                                ref={harvestCanvasRef}
                                className="w-full h-full border border-gray-200 rounded"
                            />
                        </div>
                    </div>

                </div>

            </section>
        </div>
    );
}
