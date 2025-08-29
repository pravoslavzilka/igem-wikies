const Tools = () => {
    return (
    <div className=" p-8 min-h-screen">
      <div className="max-w-6xl mx-auto">
        

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
          <div className="space-y-6">
            {/* Microscopy image placeholder */}
            <div className="w-full h-64 bg-black rounded-lg flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-radial from-green-400/30 via-green-500/20 to-transparent"></div>
              <img src="https://static.igem.wiki/teams/5642/images/homepage/sp162-egfp.webp" alt="Microscopy" className="w-full h-full object-cover" />
              {/* Simulated fluorescent spots */}
              <div className="absolute top-1/4 left-1/3 w-3 h-3 bg-green-400 rounded-full blur-sm"></div>
              <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-green-300 rounded-full blur-sm"></div>
              <div className="absolute bottom-1/3 left-1/4 w-4 h-4 bg-green-500 rounded-full blur-sm"></div>
              <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-green-400 rounded-full blur-sm"></div>
            </div>

            <div className="text-sm leading-relaxed text-center"
  style={{
    fontFamily: 'Urbanist, sans-serif',
    fontWeight: 500,
    fontSize: '16px',
    lineHeight: '140%',
    letterSpacing: '0px',
    textAlign: 'center'
  }}>
  <p>
    With <span style={{
      fontWeight: 700,
      fontSize: '16px',
      lineHeight: '140%',
      letterSpacing: '0px',
      textAlign: 'center',
      fontFamily: 'Urbanist, sans-serif'
    }}>just two constructs</span> and <b>our protocol</b>, you can express any gene in duckweed - transiently in a week, <b>stably in a month!</b>
  </p>
</div>
          </div>

          {/* Middle column - Screenshot konstruktu */}
          <div className="space-y-6">
            <div className="w-full h-64 bg-green-100 rounded-lg flex items-center justify-center border-2 border-green-200">
              <div className="text-center">
                <div className="w-12 h-12 bg-green-200 rounded mx-auto mb-2 flex items-center justify-center">
                  <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-green-600 text-xs">Screenshot konstruktu</p>
              </div>
            </div>

            <div className="text-sm text-gray-600 leading-relaxed text-center"
  style={{
    fontFamily: 'Urbanist, sans-serif',
    fontWeight: 500,
    fontSize: '16px',
    lineHeight: '140%',
    letterSpacing: '0px',
    textAlign: 'center'
  }}>
  <p>
    Want to knockout a gene? <b>Simply insert 
    your gRNA</b> into our dubbed target-specific 
    construct, transform, <b>and see the 
    phenotype!</b>
  </p>
</div>
          </div>

          {/* Right column - qPCRs */}
          <div className="space-y-6">
            <div className="w-full h-64 bg-green-50 rounded-lg flex items-center justify-center border-2 border-green-100">
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded mx-auto mb-2 flex items-center justify-center">
                  <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <p className="text-green-500 text-xs">igorf fancy qPCRs</p>
              </div>
            </div>

            <div className="text-sm text-center text-gray-600 leading-relaxed"
  style={{
    fontFamily: 'Urbanist, sans-serif',
    fontWeight: 500,
    fontSize: '16px',
    lineHeight: '140%',
    letterSpacing: '0px',
    textAlign: 'center'
  }}>
  <p>
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