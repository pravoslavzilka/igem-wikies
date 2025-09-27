const MessageSection = () => {
  return (
    <section className="w-full bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="relative">
          {/* Decorative line */}
          <div className="absolute inset-x-0 top-1/2 h-0.5 bg-gray-100 transform -translate-y-1/2"></div>
          
          {/* Content box */}
          <div className="relative z-10 flex justify-center">
            <div 
              className="bg-gray-100 rounded-xl lg:rounded-2xl p-8 sm:p-12 lg:p-16 xl:p-20 max-w-6xl mx-auto"
              style={{ borderRadius: '16px' }}
            >
              <h2 
                className="text-gray-900 text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight mb-4 lg:mb-6"
                style={{ 
                  fontFamily: 'Urbanist, sans-serif',
                  fontWeight: 600,
                  lineHeight: '140%',
                  color: '#1B1B1B'
                }}
              >
                That's not enough
              </h2>
              <p 
                className="text-gray-700 text-center text-sm sm:text-base leading-relaxed"
                style={{ 
                  fontFamily: 'Space Grotesk, sans-serif',
                  lineHeight: '168%',
                  color: 'rgba(23, 31, 22, 0.75)'
                }}
              >
                There are only a few companies working with duckweed to produce food, feedstock, or remediate water. There’s also just a handful of proof-of-concept studies for recombinant protein production in duckweed. Just several visionary research groups dedicated to advancing duckweed research…
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MessageSection;