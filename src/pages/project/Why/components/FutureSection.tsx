interface FutureSectionProps {
  futureSectionImageUrl?: string | null;
}

const FutureSection = ({ futureSectionImageUrl }: FutureSectionProps) => {
  return (
    <section 
      className="flex items-center justify-between bg-white"
      style={{ 
        padding: '40px 128px', 
        gap: '64px',
        width: '1440px',
        height: '600px'
      }}
    >
      {/* Left Content */}
      <div 
        className="flex flex-col items-start"
        style={{ gap: '40px', width: '538px', height: '520px' }}
      >
        <p 
          className="text-gray-500"
          style={{ 
            fontFamily: 'Urbanist, sans-serif',
            fontSize: '18px',
            fontWeight: 600,
            lineHeight: '140%',
            color: 'rgba(27, 27, 27, 0.5)'
          }}
        >
          But what do all of these applications need?
        </p>
        
        <h2 
          className="text-gray-900"
          style={{ 
            fontFamily: 'Urbanist, sans-serif',
            fontSize: '48px',
            fontWeight: 600,
            lineHeight: '140%',
            color: '#1B1B1B',
            width: '538px',
            height: '201px'
          }}
        >
          A way to genetically modify duckweed and a reliable cultivation.
        </h2>
        
        <p 
          className="text-gray-700"
          style={{ 
            fontFamily: 'Space Grotesk, sans-serif',
            fontSize: '16px',
            fontWeight: 400,
            lineHeight: '168%',
            color: 'rgba(23, 31, 22, 0.75)',
            width: '538px',
            height: '84px'
          }}
        >
          We built an autonomous cultivation prototype, allowing anyone to grow duckweed in their lab cheaply and without labour.
        </p>
      </div>

      {/* Right Image */}
      <div 
        className="rounded-3xl relative overflow-hidden"
        style={{ width: '538px', height: '520px', borderRadius: '24px' }}
      >
        {futureSectionImageUrl ? (
          <img 
            src={futureSectionImageUrl} 
            alt="Future section image" 
            className="w-full h-full object-cover"
          />
        ) : (
          <>
            <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-blue-200"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-32 h-32 bg-green-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <div className="w-16 h-16 bg-green-600 rounded-full"></div>
                </div>
                <p className="text-gray-600">Lab equipment visualization</p>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default FutureSection;