import React from "react";

const VideoComp = () => {
  return (
    <div className="py-16 bg-white md:mt-20" style={{ position: "relative", overflowX: "auto" }}>
      {/* Decorative background icons */}
      <img
        src="https://static.igem.wiki/teams/5642/icons/fi-11618743.webp"
        alt=""
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "30px",
          left: "20px",
          width: "32px",
          opacity: 0.15,
          zIndex: 0,
          pointerEvents: "none"
        }}
      />
      <img
        src="https://static.igem.wiki/teams/5642/icons/fi-11618743.webp"
        alt=""
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: "60px",
          right: "40px",
          width: "36px",
          opacity: 0.13,
          zIndex: 0,
          pointerEvents: "none"
        }}
      />
      <img
        src="https://static.igem.wiki/teams/5642/icons/fi-11618743.webp"
        alt=""
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "50%",
          left: "80%",
          width: "40px",
          opacity: 0.10,
          zIndex: 0,
          pointerEvents: "none",
          transform: "translate(-50%, -50%)"
        }}
      />
      
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
            <p className="text-center pt-10 text-md text-gray-600 font-medium"
            style={{
                  fontFamily: "Space Grotesk, sans-serif",
                  fontWeight: 500,
                  fontSize: "1.3rem",
                  lineHeight: "140%",
                  fontStyle: "medium",
                  letterSpacing: "0px",
                  color: "#171F16",
                }}>

            Soybean</p>
          </div>

          {/* Duckweed timelapse video */}
          <div className="space-y-4 flex flex-col items-center">
            <div className=" rounded-xl overflow-hidden relative w-full" style={{ maxWidth: "100%" }}>
              <video autoPlay loop muted playsInline>
                <source src="https://raw.githubusercontent.com/pravoslavzilka/igem-wikies-off/7d1e9d9334fa9bbe3810cc42bedc7e1e34d72c7d/src/DUckweed.mp4" type="video/mp4"></source>
              </video>

            </div>
            <p className="text-center text-gray-600 pt-10 font-medium"
            style={{
                  fontFamily: "Space Grotesk, sans-serif",
                  fontWeight: 500,
                  fontSize: "1.3rem",
                  lineHeight: "140%",
                  fontStyle: "medium",
                  letterSpacing: "0px",
                  color: "#171F16",
                }}>
              
              
              Duckweed</p>
          </div>
        </div>
      </div>
    </div>
  );
}   

export default VideoComp;

