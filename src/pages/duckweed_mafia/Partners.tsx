import { Link } from "react-router-dom";

const Partners = () => {
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'Urbanist, sans-serif' }}>
      <div className="max-w-6xl mx-auto px-8 py-12">
        
        {/* Strategic Ally Section */}
        <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-800 mb-8 justify-center items-center text-center" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                STRATEGIC ALLY  
              </h2>
          <div className="grid md:grid-cols-4 gap-12 items-center">
            <div className="flex justify-center md:col-span-1">
              <img
                src="https://static.igem.wiki/teams/5642/images/homepage/footer/muni-sci-logo.webp"
                alt="MUNI"
                className="max-w-full h-auto"
                style={{ maxWidth: "220px", width: "100%", height: "auto" }} // bigger image
              />
            </div>
            <div className="md:col-span-3">
              
              
              <p className="text-md  leading-relaxed mb-6" style={{ fontFamily: 'Urbanist, sans-serif' }}>
                <strong>Faculty of Science, Masaryk University (MUNI SCI)</strong> – A true strategic partner in building the Czech synthetic biology ecosystem. Thanks to the dean, prof. Tomáš Kašparovský, 15 of our team members received scholarships covering a significant part of iGEM fees and laboratory expenses. Not only that, through the MUNI SCI scholarship program, co-founder of iGEM Brno, Miroslav gained research experience at the Weizmann Institute of Science, where he worked directly on duckweed and gained important experiences and contact which helped us a lot during iGEM. <span className="text-blue-600"><Link to="https://sci.muni.cz">sci.muni.cz</Link></span>
              
             </p>
            </div>
            
            
          </div>
        </section>
        {/* General Ally Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-center justify-center items-center text-gray-800 mb-8" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            GENERAL ALLY
          </h2>
          <div className="grid md:grid-cols-4 gap-12 items-center">
            <div className="md:col-span-3">
              
              
              <p>
                <strong>
                    IOCB Tech Foundation (Institute of Organic Chemistry and Biochemistry of the
                    Czech Academy of Sciences)
                </strong>
                <span style={{ fontWeight: 400 }}>
                    {" "}
                    – Supports innovation transfer and entrepreneurship in life sciences and
                    chemistry. Through its endowment fund, IOCB Tech invests in promising
                    research projects and fosters the growth of Czech biotechnology by bridging
                    the gap between academic discoveries and market-ready solutions. As our
                    General Sponsor, IOCB Tech Foundation enables us to attend Jamboree in
                    person and inspires us to pursue bold applications of synthetic biology. We
                    are especially thankful to{" "}
                </span>
                <strong>Dušan Brinzanik, PR Specialist at IOCB Tech Foundation</strong>
                <span style={{ fontWeight: 400 }}>
                    , for orchestrating our collaboration. <Link style={{ color: '#3b82f6'   }} target="_blank" to="https://iocbtech.cz">iocbtech.cz</Link>
                </span>
                </p>

            </div>
            <div className="flex justify-center md:col-span-1">
              <img
                src="https://static.igem.wiki/teams/5642/images/homepage/footer/iocb-tech-foundation-logo.webp"
                alt="IOCB Tech Foundation"
                className="max-w-full h-auto"
                style={{ maxWidth: "220px", width: "100%", height: "auto" }} // bigger image
              />
            </div>
          </div>
        </section>


        {/* MAIN ALLIES  */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-center justify-center items-center text-gray-800 mb-8" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            MAIN ALLIES
          </h2>
          <div className="grid md:grid-cols-4 gap-12 items-center">
            <div className="flex justify-center md:col-span-1">
              <img
                src="https://static.igem.wiki/teams/5642/images/homepage/footer/greenonyx-logo.webp"
                alt="GreenOnyx"
                className="max-w-full h-auto"
                style={{ maxWidth: "220px", width: "100%", height: "auto" }} // bigger image
              />
            </div>
            <div className="md:col-span-3">
              
              
              <p>
                <strong>GreenOnyx</strong>
                <span style={{ fontWeight: 400 }}>
                    {" "}
                    is an agritech pioneer revolutionizing sterile large duckweed cultivation.
                    Their cutting-edge quantum cultivation system has even taken duckweed to
                    space aboard SpaceX, proving its potential in the most extreme environments.
                    As our main sponsor, GreenOnyx empowers our mission to explore duckweed’s
                    potential as a sustainable protein source, a powerful bioremediation tool,
                    and a new chassis for biotech innovation. We are deeply grateful to{" "}
                </span>
                <strong>Dr. Tsipi Shoham</strong>
                <span style={{ fontWeight: 400 }}>
                    , whose vision and passion for innovation inspire us every day. Her belief
                    in our project and commitment to advancing duckweed as a real future food
                    have been invaluable.{" "}
                </span>
                <a href="https://greenonyx.bio">
                    <strong>greenonyx.bio</strong>
                </a>
                <span style={{ fontWeight: 400 }}>
                    . Dr. Shoham also collaborated with us on an interview for the{" "}
                </span>
                <a href="http://www.ruduckweed.org/uploads/1/0/8/9/10896289/duckweed_forum_issue_50.pdf?fbclid=PAQ0xDSwMfeHZleHRuA2FlbQIxMQABpxDMlsGrXOqInppmjlmxbeLfOPZ2g8u0vSXTmQ0KICPgfvBORU91F5cNsyML_aem_bWYQ0UdFdfLugRMv9R-QgA">
                    <span style={{ fontWeight: 400 }}>The Duckweed journal</span>
                </a>
                <span style={{ fontWeight: 400 }}>.</span>
                </p>


            </div>
            
            
          </div>
        </section>


        
        
      </div>
    </div>
  );

};

export default Partners;