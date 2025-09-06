const VideoShow = () => {
    return (
    <div className="bg-white p-5 mt-[100px] min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Main headline */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold  leading-tight" style={{ fontFamily: 'Space Grotesk, sans-serif', lineHeight: '140%' }}>
            Duckweed will save <span style={{ color: '#779E45' }}>farmers’ money</span> while reducing emissions <br /> and protecting the <span style={{ color: '#779E45' }}>planet’s natural ecosystems</span>.
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
        <div className="text-center mt-[100px] mb-[100px]">
          <h1 className="text-4xl font-bold  leading-tight" style={{ fontFamily: 'Space Grotesk, sans-serif', lineHeight: '140%' }}>
            What will <span style={{ color: '#779E45' }}>YOUR</span> next step be - <br /> powered by the <span style={{ color: '#779E45' }}>Duckweed Toolbox</span>?
          </h1>
        </div>


        <div className="text-center mt-[100px] mb-[100px]">
          <h1 className="text-4xl font-bold  leading-tight" style={{ fontFamily: 'Space Grotesk, sans-serif', lineHeight: '140%' }}>
            <span style={{ color: '#779E45' }}>Making plants truly scalable</span> 
          </h1>
        </div>
      </div>
    </div>

  );
}



export default VideoShow;


