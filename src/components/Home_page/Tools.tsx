const Tools = () => {
    return (
    <div className="p-10 min-h-screen mx-auto    md:mt-[-150px]">
      <div className="max-w-7xl mx-auto">
        

        {/* Main headline centered */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 leading-tight" style={{fontFamily: 'Space Grotesk, sans-serif' }}>
            ...combining it with tools that broaden<br />
            the possibilities even more,
          </h1>
        </div>

        {/* Bottom section with three columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left column - Main content with microscopy image */}
          <div className="space-y-6 flex flex-col items-center">
            {/* Microscopy image placeholder */}
            <div className="bg-black rounded-lg flex items-center justify-center relative overflow-hidden w-full max-w-[350px] mx-auto h-75">
              <div className="absolute inset-0 bg-gradient-radial from-green-400/30 via-green-500/20 to-transparent"></div>
              <img src="https://static.igem.wiki/teams/5642/images/homepage/sp162gfp.webp" alt="Microscopy" className="w-full h-full object-cover" />
            </div>

            <div className="text-sm leading-relaxed text-center"
                style={{
                    fontFamily: 'Urbanist, sans-serif',
                    fontWeight: 500,
                    fontSize: '18px',
                    lineHeight: '140%',
                    letterSpacing: '0px',
                    textAlign: 'center'
                }}>
                <p>
                    With <span style={{
                    fontWeight: 700,
                    fontSize: '18px',
                    lineHeight: '140%',
                    letterSpacing: '0px',
                    textAlign: 'center',
                    fontFamily: 'Urbanist, sans-serif'
                    }}>just two constructs</span> and <b>our protocol</b>, you can express any gene in duckweed - transiently in a week, <b>stably in a month!</b>
                </p>
                </div>
          </div>

          {/* Middle column - Screenshot konstruktu */}
          <div className="space-y-6 flex flex-col items-center">
            <div className="bg-black rounded-lg flex items-center justify-center relative overflow-hidden w-full max-w-[350px] mx-auto h-75">
              <div className="absolute inset-0 bg-gradient-radial from-green-400/30 via-green-500/20 to-transparent"></div>
              <img src="https://static.igem.wiki/teams/5642/images/homepage/pib005.webp" alt="Microscopy" className="w-full h-full object-cover" />
            </div>

            <div className="text-sm text-gray-600 leading-relaxed text-center"
                style={{
                    fontFamily: 'Urbanist, sans-serif',
                    fontWeight: 500,
                    fontSize: '18px',
                    lineHeight: '140%',
                    letterSpacing: '0px',
                    textAlign: 'center'
                }}> 
                <p className="mt-8">
                    Want to knockout a gene? <b>Simply insert 
                    your gRNA</b> into our dubbed target-specific 
                    construct, transform, <b>and see the 
                    phenotype!</b>
                </p>
                </div>
          </div>

          {/* Right column - qPCRs */}
          <div className="space-y-6 flex flex-col items-center">
            <div className="bg-black rounded-lg flex items-center justify-center relative overflow-hidden w-full max-w-[350px] mx-auto h-70">
              <div className="absolute items-center justify-center inset-0 bg-gradient-radial from-green-400/30 via-green-500/20 to-transparent"></div>
              <img  src="https://static.igem.wiki/teams/5642/images/homepage/sp162gfp.webp" alt="Microscopy" className="w-full h-full object-cover" />


            </div>

            <div className="text-sm text-center text-gray-600 leading-relaxed"
                style={{
                    fontFamily: 'Urbanist, sans-serif',
                    fontWeight: 500,
                    fontSize: '18px',
                    lineHeight: '140%',
                    letterSpacing: '0px',
                    textAlign: 'center'
                }}>
                <p  >
                    Want to fine-tune your gene's expression in 
                    duckweed? Try one of the <b>7 new native 
                    promoters</b> we've characterized
                </p>
                </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Tools;