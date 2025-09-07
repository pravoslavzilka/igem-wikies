

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
        <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
          Why?
        </h2>
        
        {/* Dashed line */}
        <div className="border border-dashed border-black mb-4" style={{ borderWidth: '2px' }}>

        {/* Quote box */}
        <div className=" pl-4 mb-4 pt-4">
          <p className="text-md leading-relaxed" style={{ fontFamily: 'Urbanist, sans-serif' }}>
            "Long-term sustained expression of transgenes in plants is often hindered by the onset of
            epigenetic silencing of genetic regulatory elements, such as promoters, in response to foreign DNA
            sequences. For such reason, the identification of strong constitutive endogenous promoters, or
            sequences to build the synthetic ones, in duckweeds is a fundamental tool for future duckweed
            applications."
          </p>
        </div>
        </div>

       
      </div>

      {/* Author Section */}
      <div className="flex justify-center">
        <div className="flex flex-col items-center justify-center">
          <div className="text-base text-center text-gray-600 leading-relaxed mb-8 md:ml-10 md:mr-10">
            <p className="mb-4" style={{ fontFamily: 'Urbanist, sans-serif', fontSize: '17px' }}>
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



       <div className="space-y-4 text-md leading-relaxed mt-16" style={{ fontFamily: 'Urbanist, sans-serif' }}>
        <p>
          It is not only hard to get the gene of interest into duckweed. The next bottleneck is achieving high and stable 
          expression of the transgene. The strength and stability of protein expression is influenced by genetic 
          regulatory parts such as 5'UTRs, 3'UTRs and terminators, but is mostly determined by promoters[1].
        </p>

        <p>
          Plant engineering knows a lot of these parts but they are, unsurprisingly, centered around only a few species 
          like <em>Arabidopsis</em>, tobacco, and maize. And when it comes to duckweed, these do not work ideally. Even the 
          most widely used promoter in plant genetic engineering, the Cauliflower mosaic virus 35S promoter (CaMV 
          35S), yields only weak expression[2]. This is probably a result of the epigenetic silencing of the foreign 
          genetic parts in duckweed environment, which is observed also for other monocot species[3]. Several 
          monocot promoters, such as maize ubiquitin (ZmUbI1) work decently[4], but it is reasonable to assume that 
          endogenous parts from duckweed would increase both strength and stability of expression[4].
        </p>

        <p>
          After literature search, we found only one native duckweed promoter isolated and used in a scientific study[5]. 
          It showed higher expression compared to the 35S promoter. In our consultation with Phyllotechnicals, CSO 
          Lynn Dyckey mentioned that they also use proprietary native duckweed promoters for recombinant protein 
          expression.
        </p>

        <p>
          Therefore, we decided to empower all duckweed researchers with endogenous promoters to discard another 
          burden in duckweed genetic engineering and we developed a duckweed promoter library.
        </p>
      </div>

      {/* How Section */}
      <div className="mt-12">
        <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
          How?
        </h2>
        
        <p className="text-md leading-relaxed" style={{ fontFamily: 'Urbanist, sans-serif' }}>
          Construction of duckweed promoter library required two crucial steps: in silico identification of 
          suitable promoter sequences and their subsequent characterization in duckweed.
        </p>
      </div>

     <div className="border-t border-gray-200 pt-6 mt-12">
        <h3 className="text-lg font-bold text-gray-900 mb-4" style={{ fontFamily: "Space Grotesk, sans-serif" }}>References</h3>
        <div className="space-y-3 text-sm text-gray-700">
          <p className="leading-relaxed">
            [1] Bandopadhyay R, Haque I, Singh D, Mukhopadhyay K. Levels and Stability of Expression of Transgenes. Transgenic Crop Plants. 2010:145–86. doi: 10.1007/978-3-642-04809-8_5. PMCID: PMC7122870.
          </p>
          <p className="leading-relaxed">
            [2] Wei C, Hu Z, Wang S, Tan X, Jin Y, Yi Z, He K, Zhao L, Chu Z, Fang Y, Chen S, Liu P, Zhao H. An endogenous promoter LpSUT2 discovered in duckweed: a promising transgenic tool for plants. Front Plant Sci. 2024 Apr 3;15:1368284. doi: 10.3389/fpls.2024.1368284. PMID: 38638348; PMCID: PMC11025394.
          </p>
          <p className="leading-relaxed">
            [3] Iyer LM, Kumpatla SP, Chandrasekharan MB, Hall TC. Transgene silencing in monocots. Plant Mol Biol. 2000 Jun;43(2-3):323-46. doi: 10.1023/a:1006412318311. PMID: 10999414.
          </p>
          <p className="leading-relaxed">
            [4] Wang PH, Kumar S, Zeng J, McEwan R, Wright TR, Gupta M. Transcription Terminator-Mediated Enhancement in Transgene Expression in Maize: Preponderance of the AUGAAU Motif Overlapping With Poly(A) Signals. Front Plant Sci. 2020 Oct 14;11:570778. doi: 10.3389/fpls.2020.570778. PMID: 33178242; PMCID: PMC7591816.
          </p>
          <p className="leading-relaxed">
            [5] Christensen AH, Quail PH. Ubiquitin promoter-based vectors for high-level expression of selectable and/or screenable marker genes in monocotyledonous plants. Transgenic Res. 1996 May;5(3):213-8. doi: 10.1007/BF01969712. PMID: 8673150.
          </p>
        </div>
      </div>           




    </div>
  );

}


export default PromoterLibrary;