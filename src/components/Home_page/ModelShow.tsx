

const ModelShow = () => {
    return (
    <div className="bg-white p-8 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Top image placeholder */}
        <div className="w-full h-80 bg-gray-200 rounded-lg flex items-center justify-center mb-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-gray-300 rounded mx-auto mb-2 flex items-center justify-center">
              <svg className="w-8 h-8 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
              </svg>
            </div>
            <p className="text-gray-500 text-sm">Growth Chart Placeholder</p>
          </div>
        </div>

        {/* Bottom section with content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left side - Chart placeholder */}
          <div className="space-y-4">
            {/* Heatmap chart placeholder */}
            <div className="w-full h-64 bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-400 rounded-lg relative overflow-hidden">
              {/* Y-axis label */}
              <div className="absolute left-2 top-1/2 transform -translate-y-1/2 -rotate-90 text-white text-xs font-medium">
                HARVESTING TIME
              </div>
              
              {/* X-axis label */}
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-white text-xs font-medium">
                HARVESTING FREQUENCY [DAYS]
              </div>
              
              {/* Scale indicators */}
              <div className="absolute left-4 top-4 text-white text-xs">0</div>
              <div className="absolute left-4 bottom-8 text-white text-xs">2</div>
              <div className="absolute left-8 bottom-2 text-white text-xs">3</div>
              <div className="absolute right-8 bottom-2 text-white text-xs">6</div>
              
              {/* Color bar */}
              <div className="absolute right-4 top-8 bottom-8 w-4 bg-gradient-to-t from-purple-600 to-yellow-400 rounded"></div>
              <div className="absolute right-20 top-8 text-white text-xs">HIGH YIELD</div>
              <div className="absolute right-20 bottom-8 text-white text-xs">LOW YIELD</div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 leading-tight mb-4">
                By combining software and hardware, we achieve double the biomass growth every 48 hours or run multiple duckweed experiments in parallel and at scale.
              </h1>
              
              <div className="text-lg text-green-600 font-semibold mb-6">
                With 90% less workload than before.
              </div>
              
              <div className="text-sm text-gray-600 leading-relaxed mb-8">
                <p>
                  The cultivator is guided by PREDICTOR – a model trained on months of cultivation experiments conducted under controlled conditions. It can now estimate the optimal cultivation settings in the cultivator based on your desired yield and the species being used.
                </p>
              </div>

              <div>
                <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-medium transition-colors duration-200">
                  See how cultivator works
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

}



export default ModelShow;

