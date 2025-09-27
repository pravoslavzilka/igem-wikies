import { Link } from "react-router";


const Outreach = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 bg-white" style={{ fontFamily: 'Urbanist, sans-serif' }}>
      {/* Header Section */}

      <img src="https://static.igem.wiki/teams/5642/images/engagement/outreach/outreach1.webp" alt="Duckweed Spotlight" className="w-full h-auto" />
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
          
          <div className=" rounded-lg flex items-center justify-center">
            <img style={{ height: "200px", width: "auto" }} src="https://static.igem.wiki/teams/5642/images/engagement/outreach/outreach2.webp" alt="Outreach Image" className="max-w-full max-h-full" />
          </div>
        </div>
      </div>

      {/* Four Pillars Section */}
      <div className="px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div  className="bg-green-500 text-center p-4 rounded-lg">
              <h3 className=" font-bold text-2xl mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                Creating Network
              </h3>
              <div className=" mt-10 bg-white rounded-full w-36 h-36 mx-auto mb-2 flex items-center justify-center">
                <div className=" rounded-full flex items-center justify-center">
                  <span className="text-md "><b>Being part of a community</b></span>
                </div>
              </div>
              
            </div>


            <div  className="bg-green-500 text-center p-4 rounded-lg">
              <h3 className=" font-bold text-2xl mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                Communicating Science
              </h3>
              <div className="bg-white rounded-full w-36 h-36 mx-auto mb-2 flex items-center justify-center">
                <div className=" rounded-full flex items-center justify-center">
                  <span className="text-md "><b>Letting the world discover duckweed</b></span>
                </div>
              </div>
              
            </div>


            <div  className="bg-green-500 text-center p-4 rounded-lg">
              <h3 className=" font-bold text-2xl mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                Cultivating Community
              </h3>
              <div className="bg-white rounded-full w-36 h-36 mx-auto mb-2 flex items-center justify-center">
                <div className=" rounded-full flex items-center justify-center">
                  <span className="text-md "><b><Link to="/engagement/outreach/3h-party">Hosting our own events</Link></b></span>
                </div>
              </div>
              
            </div>



            <div  className="bg-green-500 text-center p-4 rounded-lg">
              <h3 className=" font-bold text-2xl mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                Connecting w/ iGEMers
              </h3>
              <div className="bg-white rounded-full w-36 h-36 mx-auto mb-2 flex items-center justify-center">
                <div className=" rounded-full flex items-center justify-center">
                  <span className="text-md "><b>Attending iGEM meetups</b></span>
                </div>
              </div>
              
            </div>


          
        </div>
      </div>

      {/* Viral Section */}
      <div className="p-6">
        <h2 className="text-3xl font-bold mb-6 " style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
          Duckweed goes viral!
        </h2>
        
        <div className="flex flex-col md:flex-row gap-6 items-start">
          <div className="flex-1" style={{ fontFamily: 'Urbanist, sans-serif' }}>
            <p className="mb-4 text-lg">
              <strong>Offline</strong> we can reach hundreds, but <strong>online</strong> 
              we can reach <strong>thousands</strong>. That's why we 
              shared our story on <strong>Instagram</strong> and 
              <strong>LinkedIn</strong>, gave interviews for <strong>articles</strong> and 
              <strong>reports</strong>, joined <strong>YouTube videos</strong>, and even 
              made it to <strong>TV</strong>!
            </p>
          </div>
          
          <div className=" bg-green-500 rounded-lg p-6 text-white min-w-64 flex flex-col md:flex-row items-start ">
            <h3 className="text-3xl font-bold mb-4 mt-10 mr-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Circulating <br/> Online
            </h3>
            <div className="bg-white rounded-full w-36 h-36 mx-auto mb-4 flex items-center justify-center text-center">
              <span className="text-md text-black"><b>Sharing our project online</b></span>
            </div>
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="p-6 mt-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              3 000+ <br/>people we<br />talked to
            </h3>
            
          </div>
          
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              30+ <br /> events we<br />participated in
            </h3>
            
          </div>
          
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              1 000+ <br /> duckweed<br />cookies
            </h3>
           
          </div>
          
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              100+ <br /> posts we<br />posted
            </h3>
            
          </div>
        </div>
        <img src="https://static.igem.wiki/teams/5642/images/engagement/outreach/outreach-3.webp" alt="Duckweed Outreach" className="w-full h-auto mt-6" />
      </div>
    </div>
  );
};

export default Outreach;