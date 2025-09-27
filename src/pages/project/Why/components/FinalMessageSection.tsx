const FinalMessageSection = () => {
  return (
    <section className="w-full bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="relative">
          {/* Decorative line */}
          <div className="absolute inset-x-0 top-1/2 h-0.5 bg-gray-100 transform -translate-y-1/2"></div>
          
          {/* Content box */}
          <div className="relative z-10 flex justify-center">
            <div 
              className="bg-gray-100 rounded-xl lg:rounded-2xl p-8 sm:p-12 lg:p-16 xl:p-20 max-w-4xl mx-auto"
              style={{ borderRadius: '16px' }}
            >
              <p 
                className="text-gray-900 text-center text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold leading-tight"
                style={{ 
                  fontFamily: 'Urbanist, sans-serif',
                  fontWeight: 600,
                  lineHeight: '140%',
                  color: '#1B1B1B'
                }}
              >
                And that is also why we went to iGEM - to show the entire SynBio community the potential of duckweed and to make tools available for anyone to unlock it!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalMessageSection;