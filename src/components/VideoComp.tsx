


const VideoComp = () => {
  return (
    <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4" style={{ fontFamily: "Space Grotesk" }}>Nadpis</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Soybean timelapse video */}
            <div className="space-y-4">
              <div className="bg-gray-200 rounded-lg overflow-hidden h-80">
                <video 
                  className="w-full h-full object-cover"
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                >
                  {/* Replace with your actual video source */}
                  <source src="videos/soybean-timelapse.mp4" type="video/mp4" />
                  <div className="flex items-center justify-center h-full text-gray-500">
                    [soybean timelapse]
                  </div>
                </video>
              </div>
              <p className="text-center text-gray-600 font-medium">Soybean timelapse, xyz</p>
            </div>

            {/* Duckweed timelapse video */}
            <div className="space-y-4">
              <div className="bg-gray-200 rounded-lg overflow-hidden h-80">
                <video 
                  className="w-full h-full object-cover"
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                >
                  {/* Replace with your actual video source */}
                  <source src="videos/duckweed-timelapse.mp4" type="video/mp4" />
                  <div className="flex items-center justify-center h-full text-gray-500">
                    [duckweed timelapse]
                  </div>
                </video>
              </div>
              <p className="text-center text-gray-600 font-medium">Duckweed timelapse, xyz</p>
            </div>
          </div>
        </div>
      </div>
  );
}   


export default VideoComp;

