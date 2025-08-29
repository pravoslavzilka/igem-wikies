const VideoShow = () => {
    return (
    <div className="bg-white p-5 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Main headline */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold  leading-tight" style={{ fontFamily: 'Space Grotesk, sans-serif', lineHeight: '140%' }}>
            Duckweed will save farmers’ money while reducing emissions and protecting the planet’s natural ecosystems.
          </h1>
        </div>

        {/* Center image placeholder */}
        <div className="w-full h-64 sm:h-96 md:h-[32rem] lg:h-[38rem] bg-gray-200 rounded-2xl flex items-center justify-center mb-12 overflow-hidden relative">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            allowFullScreen
            title="Brno Czech Republic: Affordable, local protein for every farm by programmable du... (2025) - Project Promotion [English]"
            src="https://video.igem.org/videos/embed/eRZsWsZm7ZFbfX3KYTTpGK"
            sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
            style={{ border: 'none' }}
          ></iframe>
        </div>

        {/* Bottom call-to-action text */}
        <div className="text-center">
          <p className="text-xl text-gray-700 font-medium" style={{ fontFamily: 'Space Grotesk, sans-serif', lineHeight: '140%' }}>
            What will YOUR next step be - powered by the Duckweed Toolbox?
          </p>
        </div>
      </div>
    </div>

  );
}



export default VideoShow;


