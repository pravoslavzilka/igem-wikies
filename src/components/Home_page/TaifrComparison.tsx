const TaifrComparison = () => {
  return (
    <div className=" p-10 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Top image placeholder */}
        <div className="w-full h-80 bg-gray-200 rounded-lg flex items-center justify-center mb-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-gray-300 rounded mx-auto mb-2 flex items-center justify-center">
              <svg className="w-8 h-8 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
              </svg>
            </div>
            <p className="text-gray-500 text-sm">Image Placeholder</p>
          </div>
        </div>

        {/* Bottom section with text content */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Left side - Main headline */}
          <div className="lg:col-span-2">
            <h1 className="text-4xl font-bold text-gray-800 leading-tight" style={{fontFamily: 'Space Grotesk, sans-serif' }}>
              We're developing a method for 5× faster genetic engineering of duckweed...
            </h1>
            <div className="text-base text-gray-600 leading-relaxed mt-6">
              
            </div>   
          </div>

          {/* Right side - Researcher profile and paragraph */}
          <div className="flex flex-col items-start justify-center lg:justify-start lg:col-span-3">
            <div className="text-base text-center text-gray-600 leading-relaxed mb-8 ml-10 mr-10">
              <p className="mb-4">
                I study gene silencing using duckweed as a unique model system. However, my lab faces challenges in knocking out target genes, since current transformation protocols are slow, genotype-limited, and often introduce unwanted variation. A universal, direct frond transformation method would be a breakthrough to fully realize duckweed’s potential as a model organism and biotechnological platform.
              </p>
            </div>
            <div className="flex items-center space-x-4 ">
              <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
                <svg className="w-8 h-8 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
              <div  >
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
