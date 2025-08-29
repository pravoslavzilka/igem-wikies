


const Taifr = () => {
  return (
    <div className=" min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Hero Section */}
        <div className="flex items-center justify-between mb-16 lg:flex-row flex-col gap-8">
          <div className="">
            <h1 className="text-6xl font-bold  mb-4" style={{ fontFamily: "Space Grotesk" }}>TAIFR</h1>
            <h2 className="text-3xl  mb-6 font-medium" style={{ fontFamily: "Space Grotesk" }}>
              Transposase Assisted Insertion and Frond Regeneration
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg" style={{ fontFamily: "Urbanist" }}>
              TAIFR is a system that uses PONG transposase to deliver the gene of interest (GOI) into a duckweed nucleus. The GOI is flanked by two halves of PONG’s target - the mPing transposon. PONG cleaves this construct and it performs a random double-strand break (DSB) in the genomic DNA in TAA sites and then inserts the construct into this site. Then, selection pressure favors the transformed cells, which propagate more and give rise to a new transformed generation of duckweeds, thanks to duckweed unique capability for rapid asexual propagation. All of this takes 4 weeks.

            </p>
          </div>
          
          
        </div>

        <div className="bg-white rounded-xl shadow-md p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center"></h3>
          <div className="w-full h-64 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center bg-gray-50">
            <div className="text-center">
              <div className="text-4xl text-gray-400 mb-4">📊</div>
              <span className="text-gray-500 italic text-lg">Detailed Process Flow Diagram</span>
              <p className="text-gray-400 text-sm mt-2">Complete workflow visualization coming soon</p>
            </div>
          </div>
        </div>

        {/* Main Content Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mt-10 mb-6" style={{ fontFamily: "Space Grotesk" }}>Sounds great, right? But WHAT IF…</h2>
          
        </div>

        {/* Three Challenge Cards */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 mb-16">
          
          {/* Card 1 - Agrobacterium Transformation */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="h-4 bg-blue-500"></div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Agrobacterium-mediated transformation
              </h3>
              <div className="mb-4">
                <div className="w-full h-48 bg-gray-100 rounded-lg flex items-center justify-center relative overflow-hidden">
                  {/* Agrobacterium diagram */}
                  <div className="w-32 h-32 border-4 border-blue-500 rounded-full flex items-center justify-center relative bg-white">
                    <div className="relative w-20 h-20">
                      <div className="absolute w-full h-full border-2 border-gray-800 rounded-full">
                        <span className="absolute -top-1 left-1/2 transform -translate-x-1/2 bg-red-400 text-white text-xs font-bold px-2 py-0.5 rounded">
                          PONG
                        </span>
                        <span className="absolute top-1/2 -right-2 transform -translate-y-1/2 bg-teal-400 text-white text-xs font-bold px-2 py-0.5 rounded">
                          GOI
                        </span>
                        <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 bg-blue-400 text-white text-xs font-bold px-2 py-0.5 rounded">
                          Sel
                        </span>
                      </div>
                    </div>
                    <div className="absolute -bottom-8 text-xs text-gray-600 font-medium text-center">
                      Agrobacterium tumefaciens
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                </div>
                <div>
                  <p className="text-gray-700 italic mb-2">
                    "PONG transposase delivers the gene construct into meristematic cells through agroinfiltration."
                  </p>
                  <p className="text-sm text-blue-600 font-medium">- Research Team</p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 - Nuclear Integration */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="h-4 bg-green-500"></div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Nuclear integration and selection
              </h3>
              <div className="mb-4">
                <div className="w-full h-48 bg-gray-100 rounded-lg flex items-center justify-center relative">
                  {/* Nucleus diagram */}
                  <div className="bg-green-50 border-2 border-green-500 rounded-xl p-4 w-full h-full flex flex-col items-center justify-center">
                    <div className="w-36 h-20 border-2 border-gray-500 rounded-full bg-gray-50 flex flex-col items-center justify-center mb-3">
                      <div className="text-xs text-gray-600 mb-1">nucleus</div>
                      <div className="flex mb-1">
                        <span className="bg-red-400 text-white text-xs font-bold px-1.5 py-0.5">PONG</span>
                        <span className="bg-teal-400 text-white text-xs font-bold px-2 py-0.5">GOI</span>
                        <span className="bg-red-400 text-white text-xs font-bold px-1.5 py-0.5">PONG</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-8 h-0.5 bg-gray-800"></div>
                        <div className="text-xs text-gray-800 mx-1">TAA</div>
                        <div className="w-8 h-0.5 bg-gray-800"></div>
                      </div>
                    </div>
                    <div className="text-xs text-green-600 text-center">duckweed meristematic cell</div>
                  </div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div>
                  <p className="text-gray-700 italic mb-2">
                    "The DNA break occurs at TAA sites, and the GOI integrates into the genomic DNA through precise insertion."
                  </p>
                  <p className="text-sm text-green-600 font-medium">- Dr. Transformation</p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 - Regeneration */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="h-4 bg-teal-500"></div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Rapid frond regeneration
              </h3>
              <div className="mb-4">
                <div className="w-full h-48 bg-gray-100 rounded-lg flex items-center justify-center relative">
                  {/* Regeneration diagram */}
                  <div className="flex items-center space-x-4">
                    <div className="text-center">
                      <div className="w-4 h-0.5 bg-gray-800 mb-2"></div>
                      <div className="bg-teal-400 text-white text-xs font-bold px-2 py-1 mb-2">GOI</div>
                      <div className="w-4 h-0.5 bg-gray-800 mb-2"></div>
                      <div className="text-xs text-gray-600">integrated DNA</div>
                    </div>
                    <div className="text-2xl text-gray-400">→</div>
                    <div className="flex space-x-2">
                      <div className="w-8 h-8 bg-green-400 rounded-full flex items-center justify-center text-xs">🌱</div>
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-xs">🌱</div>
                      <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-xs">🌱</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-3 h-3 bg-teal-500 rounded-full"></div>
                </div>
                <div>
                  <p className="text-gray-700 italic mb-2">
                    "The transformed cells propagate rapidly through asexual reproduction, creating a new generation in 4 weeks."
                  </p>
                  <p className="text-sm text-teal-600 font-medium">- Prof. Jakub Novák</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Process Flow Section */}
        

      </div>
    </div>
  );
};

export default Taifr;
