


const VideoComp = () => {
  return (
    <div className="py-16 bg-white md:mt-20">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-12 ">
          <h2 className="text-4xl justify-center items-center font-bold text-gray-800 mb-4" style={{ fontFamily: "Space Grotesk"}}> Luckily, we have <span style={{ color: "#779E45" }}>duckweeds</span> - plants that are (almost) superior!</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Soybean timelapse video */}
          <div className="space-y-4 flex flex-col items-center">
            <div className=" rounded-xl overflow-hidden relative w-full" style={{ maxWidth: "100%" }}>
              <video autoPlay loop muted playsInline>
                <source src="https://github.com/pravoslavzilka/igem-wikies-off/raw/7d1e9d9334fa9bbe3810cc42bedc7e1e34d72c7d/src/soybean.mp4" type="video/mp4"></source>
              </video>
          
              
            </div>
            <p className="text-center text-gray-600 font-medium">soybean</p>
          </div>

          {/* Duckweed timelapse video */}
          <div className="space-y-4 flex flex-col items-center">
            <div className=" rounded-xl overflow-hidden relative w-full" style={{ maxWidth: "100%" }}>
              <video autoPlay loop muted playsInline>
                <source src="https://raw.githubusercontent.com/pravoslavzilka/igem-wikies-off/7d1e9d9334fa9bbe3810cc42bedc7e1e34d72c7d/src/DUckweed.mp4" type="video/mp4"></source>
              </video>

            </div>
            <p className="text-center text-gray-600 font-medium">duckweed</p>
          </div>
        </div>
      </div>
    </div>
  );
}   

export default VideoComp;

