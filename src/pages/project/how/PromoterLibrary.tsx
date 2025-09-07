

const PromoterLibrary = () => {

    return (
    <div className="max-w-6xl mx-auto p-8 bg-white">
      {/* Header */}
      <h1 className="text-4xl font-bold text-center mb-8" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
        Duckweed promoter library
      </h1>

      {/* Main Image Placeholder */}
      <div className="w-full h-64 bg-gray-200 border-2 border-gray-300 mb-6 flex items-center justify-center">
        <span className="text-gray-500 text-lg" style={{ fontFamily: 'Urbanist, sans-serif' }}>
          [Duckweed Research Image Placeholder]
        </span>
      </div>

      {/* Description Text */}
      <p className="text-center text-md mb-6 leading-relaxed" style={{ fontFamily: 'Urbanist, sans-serif' }}>
        We identified promoters of genes with highest and most stable expression across different
        duckweed species. We created 15 constructs to test and quantify their expression.
      </p>

      <p className="text-center text-md mb-8 leading-relaxed" style={{ fontFamily: 'Urbanist, sans-serif' }}>
        Now, anyone can easily use one of our native duckweed promoters to express any gene of
        interest!
      </p>

      {/* Why Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
          Why?
        </h2>
        
        {/* Dashed line */}
        <div className="border-t-2 border-dashed border-black mb-4"></div>

        {/* Quote box */}
        <div className="border-l-4 border-black pl-4 mb-4">
          <p className="text-md leading-relaxed" style={{ fontFamily: 'Urbanist, sans-serif' }}>
            "Long-term sustained expression of transgenes in plants is often hindered by the onset of
            epigenetic silencing of genetic regulatory elements, such as promoters, in response to foreign DNA
            sequences. For such reason, the identification of strong constitutive endogenous promoters, or
            sequences to build the synthetic ones, in duckweeds is a fundamental tool for future duckweed
            applications."
          </p>
        </div>

        {/* Bottom dashed line */}
        <div className="border-t-2 border-dashed border-black"></div>
      </div>

      {/* Author Section */}
      <div className="flex items-start space-x-4">
        {/* Profile Image Placeholder */}
        <div className="w-16 h-16 bg-gray-200 border border-gray-300 rounded flex-shrink-0 flex items-center justify-center">
          <span className="text-gray-500 text-xs text-center">Photo</span>
        </div>
        
        {/* Author Info */}
        <div>
          <h3 className="font-bold text-sm" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            Dr. Arturo Marí-Ordóñez
          </h3>
          <p className="text-sm text-gray-700" style={{ fontFamily: 'Urbanist, sans-serif' }}>
            Principal Investigator
          </p>
          <p className="text-sm text-gray-700" style={{ fontFamily: 'Urbanist, sans-serif' }}>
            at the Gregor Mendel Institute in Vienna
          </p>
        </div>
      </div>
    </div>
  );

}


export default PromoterLibrary;