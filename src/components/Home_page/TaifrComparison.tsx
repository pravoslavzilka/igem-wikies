import React, { useRef, useEffect, useState } from "react";

const TaifrComparison = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playVideo, setPlayVideo] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setPlayVideo(true);
          } else {
            setPlayVideo(false);
          }
        });
      },
      { threshold: 0.3 }
    );
    if (videoRef.current) {
      observer.observe(videoRef.current);
    }
    return () => {
      if (videoRef.current) observer.unobserve(videoRef.current);
    };
  }, []);

  return (
    <div className="p-2 md:p-10 min-h-screen md:mt-60 mb-20">
      <div className="md:max-w-7xl mx-auto">
        {/* Top image placeholder */}
        <div className="w-full h-80  rounded-lg flex items-center justify-center mb-5">
          <div className="text-center md:mb-40">
            
            <video
              ref={videoRef}
              autoPlay={playVideo}
              loop
              muted
              playsInline
              className="rounded-lg w-full"
              style={{
                width: window.innerWidth < 768 ? "100%" : "90%",
                height: "auto",
                margin: "0 auto",
                display: "block"
              }}
            >
              <source src="https://github.com/pravoslavzilka/igem-wikies-off/raw/refs/heads/main/src/IGEM_graf_video_updated.mp4" type="video/mp4"></source>
            </video>
          </div>
        </div>

        {/* Bottom section with text content */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Left side - Main headline */}
          <div className="lg:col-span-2">
            <h1 className="text-4xl font-bold text-gray-800 leading-tight" style={{fontFamily: 'Space Grotesk, sans-serif', fontSize: window.innerWidth < 768 ? "1.6rem" : "2rem" }}>
              We're developing a method for 5× faster genetic engineering of duckweed...
            </h1>
            <div className="text-base text-gray-600 leading-relaxed mt-6">
              
            </div>   
          </div>

          {/* Right side - Researcher profile and paragraph */}
          <div className="flex flex-col items-center justify-center lg:col-span-3">
            <div className="text-base text-center text-gray-600 leading-relaxed mb-8 md:ml-10 md:mr-10">
              <p className="mb-4" style={{ fontFamily: 'Urbanist, sans-serif', fontSize: '17px' }}>
                I study gene silencing using duckweed as a unique model system. However, my lab faces challenges in knocking out target genes, since current transformation protocols are slow, genotype-limited, and often introduce unwanted variation. A universal, direct frond transformation method would be a breakthrough to fully realize duckweed’s potential as a model organism and biotechnological platform.
              </p>
            </div>
            <div className="flex items-center space-x-4 ">
              <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
                <img src="https://static.igem.wiki/teams/5642/images/what/arturo-mari-ordonez.webp" alt="Dr. Arturo Marí-Ordóñez" className="rounded-full" />
              </div>
              <div style={{fontFamily: 'Space Grotesk, sans-serif' }}>
                <div className="font-bold text-xl text-gray-800">Dr. Arturo Marí-Ordóñez</div>
                <div className="text-gray-600 mt-1">Principal Investigator</div>
                <div className="text-gray-600">at the Gregor Mendel Institute in Vienna</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaifrComparison;
