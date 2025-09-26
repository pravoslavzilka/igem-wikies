

const Outreach = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 bg-white">
      {/* Header Section */}
      <div className="p-6">
        <h1 className="text-4xl font-bold mb-4 " style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
          Duckweed Spotlight
        </h1>
        
        <div className="flex flex-col md:flex-row items-start gap-6">
          <div className="flex-1" style={{ fontFamily: 'Urbanist, sans-serif' }}>
            <p className="text-lg mb-4 text-gray-800">
              <strong>Science isn't done until it's shared</strong> — ideally in a way 
              that's <strong>understandable</strong> and a little bit <strong>entertaining!</strong>
            </p>
            <p className="mb-4 text-gray-800">
              With this <strong>mindset</strong>, we <strong>kicked off conversations</strong> at 
              networking events, <strong>prepared programs</strong> for 
              science-promotion occasions we took part in, 
              <strong>organized</strong> our own events, and <strong>connected with 
              fellow iGEMers</strong> along the way!
            </p>
          </div>
          
          <div className="w-40 h-32 bg-gray-300 rounded-lg flex items-center justify-center text-gray-600">
            <span className="text-sm">Team Photo Placeholder</span>
          </div>
        </div>
      </div>

      {/* Four Pillars Section */}
      <div className="px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            {
              title: "Creating Network",
              description: "Being part of a community",
              icon: "network"
            },
            {
              title: "Communicating Science", 
              description: "Letting the world discover duckweed",
              icon: "science"
            },
            {
              title: "Cultivating Community",
              description: "Hosting our own events", 
              icon: "community"
            },
            {
              title: "Connecting w/ iGEMers",
              description: "Attending iGEM meetups",
              icon: "connect"
            }
          ].map((pillar, index) => (
            <div key={index} className="bg-green-500 text-center p-4 rounded-lg">
              <h3 className="text-white font-bold text-lg mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                {pillar.title}
              </h3>
              <div className="bg-white rounded-full w-24 h-24 mx-auto mb-2 flex items-center justify-center">
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                  <span className="text-xs text-gray-600">Icon</span>
                </div>
              </div>
              <p className="text-white text-sm" style={{ fontFamily: 'Urbanist, sans-serif' }}>
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Viral Section */}
      <div className="p-6">
        <h2 className="text-3xl font-bold mb-6 text-green-600" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
          Duckweed goes viral!
        </h2>
        
        <div className="flex flex-col md:flex-row gap-6 items-start">
          <div className="flex-1" style={{ fontFamily: 'Urbanist, sans-serif' }}>
            <p className="mb-4 text-gray-800">
              <strong>Offline</strong> we can reach hundreds, but <strong>online</strong> 
              we can reach <strong>thousands</strong>. That's why we 
              shared our story on <strong>Instagram</strong> and 
              <strong>LinkedIn</strong>, gave interviews for <strong>articles</strong> and 
              <strong>reports</strong>, joined <strong>YouTube videos</strong>, and even 
              made it to <strong>TV</strong>!
            </p>
          </div>
          
          <div className="bg-green-500 rounded-lg p-6 text-white min-w-64">
            <h3 className="text-xl font-bold mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Circulating Online
            </h3>
            <div className="bg-white rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
              <span className="text-xs text-gray-600">Share Icon</span>
            </div>
            <p className="text-center text-sm" style={{ fontFamily: 'Urbanist, sans-serif' }}>
              Sharing our project online
            </p>
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="p-6 bg-gray-100">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              3 000+
            </h3>
            <p className="text-gray-700 text-sm md:text-base leading-tight" style={{ fontFamily: 'Urbanist, sans-serif' }}>
              people we<br />talked to
            </p>
          </div>
          
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              30+
            </h3>
            <p className="text-gray-700 text-sm md:text-base leading-tight" style={{ fontFamily: 'Urbanist, sans-serif' }}>
              events we<br />participated in
            </p>
          </div>
          
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              1 000+
            </h3>
            <p className="text-gray-700 text-sm md:text-base leading-tight" style={{ fontFamily: 'Urbanist, sans-serif' }}>
              duckweed<br />cookies
            </p>
          </div>
          
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              100+
            </h3>
            <p className="text-gray-700 text-sm md:text-base leading-tight" style={{ fontFamily: 'Urbanist, sans-serif' }}>
              posts we<br />posted
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Outreach;