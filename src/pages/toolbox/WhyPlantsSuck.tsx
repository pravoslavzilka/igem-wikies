



const WhyPlantsSuck = () => {


   return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <p className="text-gray-600 mb-4">
                We're exploring the fascinating world of plant biology and biotechnology, 
                where innovation meets nature's complexity.
              </p>
            </div>
            <div className="ml-8">
              <img 
                src="/api/placeholder/300/200" 
                alt="Plant research facility" 
                className="rounded-lg shadow-lg w-80 h-48 object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Title Section */}
      <div className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            Plants Are Not Just Green Bacteria
          </h1>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Plants are remarkable organisms with complex cellular structures and sophisticated biological processes. 
            From working with chloroplasts to genetic modification, plants can be grown quickly, 
            transformed in various ways, and utilized for numerous applications in biotechnology and research.
          </p>
        </div>
      </div>

      {/* Three Main Sections */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* The Waiting Game */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img 
              src="/api/placeholder/400/200" 
              alt="Plant transformation timeline" 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4 text-center border-b-2 border-blue-500 pb-2">
                The Waiting Game
              </h3>
              <div className="mb-4">
                <h4 className="font-semibold text-gray-700 mb-2">Days needed for transformation</h4>
                <div className="bg-gray-200 rounded-full h-4 mb-2">
                  <div className="bg-green-500 h-4 rounded-full" style={{width: '75%'}}></div>
                </div>
                <p className="text-sm text-gray-600">Avg: 7-14 days</p>
              </div>
              <div className="bg-blue-50 p-3 rounded">
                <p className="text-sm text-blue-700 italic">
                  "Transformation is an amazing process of turning plant cells into modified organisms." 
                  <span className="block text-right mt-2">- Plant Biologist</span>
                </p>
              </div>
            </div>
          </div>

          {/* Genome Analysis */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img 
              src="/api/placeholder/400/200" 
              alt="Genome sequencing" 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4 text-center border-b-2 border-blue-500 pb-2">
                Genome Analysis
              </h3>
              <div className="mb-4">
                <h4 className="font-semibold text-gray-700 mb-2">Genome sizes in Mbp</h4>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>A. thaliana</span>
                    <span>125 Mbp</span>
                  </div>
                  <div className="bg-gray-200 rounded-full h-3">
                    <div className="bg-green-400 h-3 rounded-full" style={{width: '25%'}}></div>
                  </div>
                </div>
              </div>
              <div className="bg-blue-50 p-3 rounded">
                <p className="text-sm text-blue-700 italic">
                  "Our work was taken from research and turned into a comprehensive dataset." 
                  <span className="block text-right mt-2">- Dr. Genomics</span>
                </p>
              </div>
            </div>
          </div>

          {/* From Cell to Plant */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img 
              src="/api/placeholder/400/200" 
              alt="Cell to plant development" 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4 text-center border-b-2 border-blue-500 pb-2">
                From Cell to Plant
              </h3>
              <div className="mb-4">
                <h4 className="font-semibold text-gray-700 mb-2">Development Process</h4>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="bg-green-100 p-2 rounded text-center">Callus</div>
                  <div className="bg-green-200 p-2 rounded text-center">Shoot</div>
                  <div className="bg-green-300 p-2 rounded text-center">Root</div>
                  <div className="bg-green-400 p-2 rounded text-center">Plant</div>
                </div>
              </div>
              <div className="bg-blue-50 p-3 rounded">
                <p className="text-sm text-blue-700 italic">
                  "We found the plant regeneration process fascinating and highly successful." 
                  <span className="block text-right mt-2">- Lab Research Team</span>
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Additional Info Section */}
      <div className="bg-gray-100 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Compositions of Genomes</h3>
              <p className="text-gray-600 mb-4">
                Plant genomes contain various elements including genes, intergenic regions, 
                and repetitive sequences that contribute to their complexity.
              </p>
              <div className="bg-white p-4 rounded-lg shadow">
                <div className="flex items-center space-x-4">
                  <div className="w-4 h-4 bg-green-500 rounded"></div>
                  <span className="text-sm">Genes</span>
                </div>
                <div className="flex items-center space-x-4 mt-2">
                  <div className="w-4 h-4 bg-blue-500 rounded"></div>
                  <span className="text-sm">Intergenic regions</span>
                </div>
                <div className="flex items-center space-x-4 mt-2">
                  <div className="w-4 h-4 bg-gray-400 rounded"></div>
                  <span className="text-sm">Repetitive elements</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Genomes on Steroids</h3>
              <p className="text-gray-600">
                Advanced biotechnology techniques allow for rapid genome analysis and modification. 
                Modern sequencing technologies have revolutionized our understanding of plant genetics 
                and enabled precise genetic engineering applications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

}



export default WhyPlantsSuck;