import React, { useRef, useEffect, useState } from "react";

const TaifrComparison = () => {
  const imgRef = useRef(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setLoaded(true); // load image when visible
          }
        });
      },
      { threshold: 0.5 } // 50% in view required
    );

    if (imgRef.current) observer.observe(imgRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="p-2 md:p-10 min-h-screen md:mt-60 mb-20">
      <div className="md:max-w-7xl mx-auto">
        {/* Top image placeholder */}
        <div className="w-full h-80  rounded-lg flex items-center justify-center ">
          <div className="text-center md:mb-32">
            <img
             alt="TAIFR Comparison" className="h-full"
             ref={imgRef}
              src={loaded ? "https://static.igem.wiki/teams/5642/images/homepage/maingifs/igem-graf-video-updated-ezgif-com-video-to-webp-converter.webp" : ""}
              data-src="https://static.igem.wiki/teams/5642/images/homepage/maingifs/igem-graf-video-updated-ezgif-com-video-to-webp-converter.webp"
             
             
             />
          </div>
        </div>
         <h1 className="text-4xl font-bold text-gray-800 leading-tight text-center" style={{fontFamily: 'Space Grotesk, sans-serif', fontSize: window.innerWidth < 768 ? "1.6rem" : "2rem" }}>
              We're developing a method for 5× faster genetic engineering of duckweed...
            </h1>     
        {/* Bottom section with text content */}
        <div className="grid grid-cols-1 mt-4 lg:grid-cols-5 gap-8 ">
          
          {/* Left side - Main headline */}
          <div className="lg:col-span-2 justify-center items-center flex flex-col">
            
            <div className="text-base text-gray-600 leading-relaxed mt-[-50px]">
              <div className="flex justify-end text-right space-x-4 ">
              
              <div style={{fontFamily: 'Space Grotesk, sans-serif' }}>
                <div className="font-bold text-xl text-gray-800">Dr. Arturo Marí-Ordóñez</div>
                <div className="text-gray-600 mt-1">Principal Investigator</div>
                <div className="text-gray-600">at the Gregor Mendel Institute in Vienna</div>
              </div>
              <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
                <img src="https://static.igem.wiki/teams/5642/images/what/arturo-mari-ordonez.webp" alt="Dr. Arturo Marí-Ordóñez" className="rounded-full" />
              </div>
            </div>
            </div>   
          </div>

          {/* Right side - Researcher profile and paragraph */}
          <div className="flex flex-col items-center justify-center lg:col-span-3 mt-8 p-6 sm:p-0">
            <div className="text-base text-gray-600 leading-relaxed mb-8 md:ml-10 md:mr-10">
              <p className="mb-4" style={{ fontFamily: 'Urbanist, sans-serif', fontSize: '19px' }}>
                
                <blockquote className="relative text-gray-600 text-1xl font-semibold ">
                  <span className="absolute text-green-600 -left-6 -top-6 text-6xl  select-none">
                    “
                  </span>
                  I study gene silencing using duckweed as a unique model system. However, my lab faces challenges in knocking out target genes, since current transformation protocols are slow, genotype-limited, and often introduce unwanted variation. A universal, direct frond transformation method would be a breakthrough to fully realize duckweed’s potential as a model organism and biotechnological platform.
                  <span className="absolute text-green-600 -right-6 -bottom-10 text-6xl select-none">
                    ”
                  </span>
                </blockquote>
              </p>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaifrComparison;
