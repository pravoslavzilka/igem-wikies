

const ModelShow = () => {
    return (
    <div className="bg-white p-8 min-h-screen">
      <div className="max-w-6xl mx-auto  mt-20" >
        {/* Top image placeholder */}
        

        {/* Bottom section with content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left side - Chart placeholder */}
          <div className="space-y-4">
            {/* Heatmap chart placeholder */}
            
              <img src="https://static.igem.wiki/teams/5642/images/homepage/image.webp" alt="Heatmap Chart" className="w-full h-full object-cover rounded-lg" />
            
          </div>

          {/* Right side - Content */}
          <div className="space-y-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-800 leading-tight mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                By combining software and hardware, we achieve double the biomass growth every 48 hours or run multiple duckweed experiments in parallel and at scale. 
              </h1>
              
              <div className="text-2xl text-green-600 font-semibold mb-6 mt-10" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                With 90% less workload than before.
              </div>
              
              <div className="text-sm text-gray-600 leading-relaxed mb-8" style={{ fontFamily: 'Urbanist, sans-serif' }}>
                <p>
                  The cultivator is guided by PREDICTOR - a model trained on months of cultivation experiments conducted under controlled conditions. It can now estimate the optimal cultivation settings in the cultivator based on your desired yield and the species being used.
                </p>
              </div>

              <div>
                <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-medium transition-colors duration-200" style={{ fontFamily: 'Urbanist, sans-serif', backgroundColor: "#22531C" }}>
                  See how model works
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

