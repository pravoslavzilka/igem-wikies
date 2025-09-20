import { Link } from "react-router-dom";

const Partners = () => {
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'Urbanist, sans-serif' }}>
      <div className="max-w-6xl mx-auto px-8 py-12 ">

        <div className="bg-white py-8 px-6 border-b-2 border-gray-200">
        <div className="max-w-4xl mx-auto mb-32">
          <div className="relative">
            {/* Central Logo */}
            <div className="flex justify-center mb-[-70px]">
              <img 
                src="https://static.igem.wiki/teams/5642/icons/igem-brno-final-transparent.webp" 
                alt="iGEM Logo" 
                className="h-18 w-auto"
                style={{ maxHeight: '272px', width: 'auto' }}
              />
            </div>
            
            {/* Ally Labels */}
            <div className="relative hidden sm:block">
              <div className="absolute top-0 left-0 transform -translate-y-32">
                <span className="text-lg font-semibold uppercase tracking-wide" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Strategic Ally</span>
              </div>
              <div className="absolute top-0 right-0 transform -translate-y-32">
                <span className="text-lg font-semibold uppercase tracking-wide" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>General Ally</span>
              </div>
              <div className="absolute bottom-0 left-0 transform translate-y-8">
                <span className="text-lg font-semibold uppercase tracking-wide" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Main Allies</span>
              </div>
              <div className="absolute bottom-0 right-0 transform translate-y-8">
                <span className="text-lg font-semibold uppercase tracking-wide" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Enablement Allies</span>
              </div>
            </div>
            
          </div>
          
          
        </div>
      </div>
        
        {/* Strategic Ally Section */}
        <section className="mb-16">
            <h1 className="text-3xl font-bold text-gray-800 mt-10 mb-10 justify-center items-center text-center" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                STRATEGIC ALLY
            </h1>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center md:col-span-1">
              <img
                src="https://static.igem.wiki/teams/5642/images/homepage/footer/muni-sci-logo.webp"
                alt="MUNI"
                className="max-w-full h-auto"
                style={{ maxWidth: "600px", width: "100%", height: "auto" }}
              />
            </div>
            <div className="md:col-span-1">
              
              
              <p className="text-md  leading-relaxed mb-6" style={{ fontFamily: 'Urbanist, sans-serif' }}>
                <strong>Faculty of Science, Masaryk University (MUNI SCI)</strong> – A true strategic partner in building the Czech synthetic biology ecosystem. Thanks to the dean, prof. Tomáš Kašparovský, 15 of our team members received scholarships covering a significant part of iGEM fees and laboratory expenses. Not only that, through the MUNI SCI scholarship program, co-founder of iGEM Brno, Miroslav gained research experience at the Weizmann Institute of Science, where he worked directly on duckweed and gained important experiences and contact which helped us a lot during iGEM. <span className="text-blue-600"><Link to="https://sci.muni.cz">sci.muni.cz</Link></span>
              
             </p>
            </div>
            
            
          </div>
        </section>
        {/* General Ally Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center justify-center items-center text-gray-800 mt-20 mb-20" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            GENERAL ALLY
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="md:col-span-1">
              
              
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
                style={{ maxWidth: "600px", width: "100%", height: "auto" }} // bigger image
              />
            </div>
          </div>
        </section>


        {/* MAIN ALLIES  */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center justify-center items-center text-gray-800 mt-20 mb-20" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            MAIN ALLIES
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center md:col-span-1">
              <div className="flex flex-col items-center">
                <img
                  src="https://static.igem.wiki/teams/5642/images/homepage/footer/greenonyx-logo.webp"
                  alt="GreenOnyx"
                  className="max-w-full h-auto"
                  style={{ maxWidth: "600px", width: "100%", height: "auto" }}
                />
                <div className="mt-2 text-md font-bold text-gray-700" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  x Duckweed Hackers

                </div>
              </div>
            </div>
            <div className="md:col-span-1">
              
              
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
                <a target="_blank" rel="noopener noreferrer" href="http://www.ruduckweed.org/uploads/1/0/8/9/10896289/duckweed_forum_issue_50.pdf?fbclid=PAQ0xDSwMfeHZleHRuA2FlbQIxMQABpxDMlsGrXOqInppmjlmxbeLfOPZ2g8u0vSXTmQ0KICPgfvBORU91F5cNsyML_aem_bWYQ0UdFdfLugRMv9R-QgA">
                    <span style={{ fontWeight: 400, color: '#3b82f6' }}>The Duckweed journal</span>
                </a>
                <span style={{ fontWeight: 400 }}>.</span>
                </p>


            </div>
            
            
          </div>



          <div className="grid md:grid-cols-2 gap-12 items-center mt-16">
            
            <div className="md:col-span-1">
              
              
                  <p>
                    <strong>Brno University of Technology (BUT)</strong>
                    <span style={{ fontWeight: 400 }}>
                      {" "}
                      – A leading technical university in the Czech Republic, VUT provided
                      essential workspace, equipment, and financial support that allowed us to
                      develop and test our CULTIVATOR - autonomous duckweed cultivation system. We
                      are especially grateful to{" "}
                    </span>
                    <strong>
                      doc. Ing. Jiří Hlinka, Ph.D., Dean of the Faculty of Mechanical Engineering
                      (FSI) at VUT Brno
                    </strong>
                    <span style={{ fontWeight: 400 }}>
                      , for making this collaboration possible.
                    </span>
                    <a href="https://www.vut.cz">
                      {" "}
                      <span style={{ color: '#3b82f6', fontWeight: 400 }}>vut.cz</span>
                    </a>
                  </p>



            </div>
            <div className="flex justify-center md:col-span-1">
              <div className="flex flex-col items-center">
                <img
                  src="https://static.igem.wiki/teams/5642/images/homepage/footer/brno-university-logo.webp"
                  alt="Brno University"
                  className="max-w-full h-auto"
                  style={{ maxWidth: "600px", width: "100%", height: "auto" }}
                />
                <div className="mt-2 text-md font-bold text-gray-700" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  x Duckweed Hustlers

                </div>
              </div>
            </div>
          </div>


          <div className="grid md:grid-cols-2 mt-16 gap-12 items-center">
            <div className="flex justify-center md:col-span-1">
              <div className="flex flex-col items-center">
                <img
                  src="https://static.igem.wiki/teams/5642/images/homepage/footer/biovendor-group-logo.webp"
                  alt="BioVendor"
                  className="max-w-full h-auto"
                  style={{ maxWidth: "600px", width: "100%", height: "auto" }}
                />
                <div className="mt-2 text-md font-bold text-gray-700" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  x Duckweed Hipsters

                </div>
              </div>
            </div>
            <div className="md:col-span-1">
              
              
              <p>
                <strong>BioVendor Group</strong>
                <span style={{ fontWeight: 400 }}>
                  {" "}
                  – A leading Czech biotechnology company that provided financial support for
                  our project, enabling us to attend iGEM Grand Jamboree personally. Their
                  partnership also helped us bring our ideas from Brno all the way to the
                  international stage at the iGEM Grand Jamboree in Paris. We are especially
                  thankful to{" "}
                </span>
                <strong>Jana Držíková, Marketing Manager at BioVendor Group</strong>
                <span style={{ fontWeight: 400 }}>
                  , for orchestrating this collaboration and supporting us in telling our
                  story alongside the whole iGEM Brno Team. <Link style={{ color: '#3b82f6' }} to="https://www.biovendor.cz">biovendor.cz</Link>
                </span>
              </p>



            </div>
            
            
          </div>            



        </section>


        {/* General Ally Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center justify-center items-center text-gray-800 mt-20 mb-20" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            ENABLEMENT ALLY
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">

            <div className="flex justify-center md:col-span-1">
              <img
                src="https://static.igem.wiki/teams/5642/images/homepage/footer/ceitec-logo.webp"
                alt="CEITEC"
                className="max-w-full h-auto"
                style={{ maxWidth: "600px", width: "100%", height: "auto" }} // bigger image
              />
            </div>
            <div className="md:col-span-1">
              
              
              <>
                <p>
                  <strong>CEITEC – Boisivon Lab</strong>
                  <span style={{ fontWeight: 400 }}>
                    {" "}
                    – was absolutely crucial for our work with plants, being fully equipped
                    for such experiments and generously allowing us to use its facilities
                    under the guidance of{" "}
                  </span>
                  <strong>Dr. Hélène Boisivon</strong>
                  <span style={{ fontWeight: 400 }}>. We are deeply grateful to </span>
                  <strong>Marie Štefková</strong>
                  <span style={{ fontWeight: 400 }}> and </span>
                  <strong>Marek Sedláček </strong>
                  <span style={{ fontWeight: 400 }}>
                    for their extraordinary patience, day-to-day support, and unwavering
                    assistance in overcoming countless challenges.{" "}
                  </span>
                  <a href="http://boisivonlab.ceitec.cz">
                    <span style={{ fontWeight: 400, color: '#3b82f6' }}>boisivonlab.ceitec.cz</span>
                  </a>
                  <span style={{ fontWeight: 400 }}>&nbsp;</span>
                </p>
                <p style={{ marginTop: '1rem' }}>
                  <strong>CEITEC – Říha Lab – </strong>
                  <span style={{ fontWeight: 400 }}>
                    supported our work by taking on administrative tasks. Special thanks go to{" "}
                  </span>
                  <strong>Jana Pečinková</strong>
                  <span style={{ fontWeight: 400 }}> and </span>
                  <strong>Karel Říha</strong>
                  <span style={{ fontWeight: 400 }}>
                    {" "}
                    for their enormous assistance with ordering primers and consumables.{" "}
                  </span>
                  <a href="http://rihalab.ceitec.cz">
                    <span style={{ fontWeight: 400, color: '#3b82f6' }}>rihalab.ceitec.cz</span>
                  </a>
                  <span style={{ fontWeight: 400 }}>&nbsp;</span>
                </p>
                <p style={{ marginTop: '1rem' }}>
                  <strong>
                    CEITEC – Cellular Imaging Core Facility (Masaryk University)
                  </strong>
                  <span style={{ fontWeight: 400 }}>
                    {" "}
                    – Provides access to state-of-the-art Zeiss fluorescence microscopes,
                    enabling us to efficiently evaluate the success of our genetic
                    transformations and develop imaging-based analysis methods. We are
                    grateful to{" "}
                  </span>
                  <strong>Dr. Milan Ešner</strong>
                  <span style={{ fontWeight: 400 }}>
                    {" "}
                    and his team for their continuous technical support.{" "}
                  </span>
                  <a href="http://cellim.ceitec.eu">
                    <span style={{ fontWeight: 400, color: '#3b82f6' }}>cellim.ceitec.eu</span>
                  </a>
                </p>
                <p style={{ marginTop: '1rem' }}>
                  <strong>CEITEC – Plant Sciences Core Facility (Masaryk University)</strong>
                  <span style={{ fontWeight: 400 }}>
                    {" "}
                    – Provides access to state-of-the-art, fully controlled plant cultivation
                    chambers and phytotrons. This enabled us to perform crucial cultivation
                    experiments and fine-tune our model, PREDICTOR. We are grateful to Mr.
                    Mokroš for his invaluable support and assistance.
                  </span>
                  <a href="https://www.google.com/search?q=https://www.ceitec.eu/plant-sciences-core-facility/cf">
                    {" "}
                    <span style={{ fontWeight: 400, color: '#3b82f6' }}>
                      www.ceitec.eu/plant-sciences-core-facility/cf
                    </span>
                  </a>
                </p>
                <p>&nbsp;</p>
              </>


            </div>
            
          </div>

          <div className="grid md:grid-cols-2 mt-16 gap-12 items-center">
            
            <div className="md:col-span-1">
              
              
              <p>
                <strong>
                  Masaryk University – Microbial Bioengineering Laboratory (MBL)
                </strong>
                <span style={{ fontWeight: 400 }}>
                  {" "}
                  – Access to the lab has been absolutely crucial for all of our molecular
                  biology work, and we are deeply grateful to the MBL team for making this
                  possible.{" "}
                </span>
                <strong>Dr. Pavel Dvořák</strong>
                <span style={{ fontWeight: 400 }}>
                  {" "}
                  has been the key orchestrator in arranging and facilitating this lab access,
                  ensuring that our experiments could move forward. We would especially like
                  to thank{" "}
                </span>
                <strong>Matúš Pešta </strong>
                <span style={{ fontWeight: 400 }}>and </span>
                <strong>Barbora Jankovičová</strong>
                <span style={{ fontWeight: 400 }}>
                  {" "}
                  for their constant willingness to help us solve everyday laboratory
                  problems, and{" "}
                </span>
                <strong>Karolína Černá</strong>
                <span style={{ fontWeight: 400 }}>
                  {" "}
                  for tirelessly handling autoclaving requests on demand.{" "}
                </span>
                <a  href="http://mik.sci.muni.cz">
                  <span style={{ fontWeight: 400, color: '#3b82f6' }}>mik.sci.muni.cz</span>
                </a>
                <span style={{ fontWeight: 400 }}>&nbsp;</span>
              </p>





            </div>

            <div className="flex justify-center md:col-span-1">
              <div className="flex flex-col items-center">
                <img
                  src="https://static.igem.wiki/teams/5642/images/homepage/footer/mbl-logo.webp"
                  alt="MBL"
                  className="max-w-full h-auto"
                  style={{ maxWidth: "600px", width: "100%", height: "auto" }}
                />
                
              </div>
            </div>
            
            
          </div>      


            <div className="grid md:grid-cols-2 mt-16 gap-12 items-center">


              <div className="flex justify-center md:col-span-1">
              <div className="flex flex-col items-center">
                <img
                  src="https://static.igem.wiki/teams/5642/images/homepage/footer/dd4f95-c2c94f63676f4bb18e6139d1d0152701-mv2.webp"
                  alt="StrojLab"
                  className="max-w-full h-auto"
                  style={{ maxWidth: "600px", height: "100px", width: "auto" }}
                />
                
              </div>
            </div>
            
            <div className="md:col-span-1">
              
              
              <>
                <p>
                  <strong>strojLAB (Brno University of Technology)</strong>
                  <span style={{ fontWeight: 400 }}>
                    {" "}
                    – A student-run “maker space” and workshop facility at the Faculty of
                    Mechanical Engineering (VUT). StrojLAB provided the well-equipped workshop
                    environment where we constructed our CULTIVATOR - an autonomous duckweed
                    cultivation system. As strojLAB team member Jan Kalina notes, “When
                    someone doesn’t know where to find help, they go to strojLAB”{" "}
                  </span>
                  <a href="https://www.fme.vutbr.cz/en/fakulta/zfsi/74419#:~:text=StrojLAB%20is%20not%20only%20workshops,from%20the%20strojLAB%20student%20team">
                    <span style={{ fontWeight: 400, color: '#3b82f6' }}>fme.vutbr.cz</span>
                  </a>
                  <span style={{ fontWeight: 400 }}>
                    , reflecting the team’s commitment to supporting technical projects like
                    ours.
                  </span>
                  <span style={{ fontWeight: 400 }}>
                    <br />
                    <br />
                  </span>
                </p>
                <p>
                  <br />
                  <br />
                </p>
              </>






            </div>
            
          </div>    


          <div className="grid md:grid-cols-2 mt-16 gap-12 items-center">
            
            <div className="md:col-span-1">
              
              
              <p>
                <strong>
                  Arturo Mari-Ordoñez Lab (Gregor Mendel Institute, Austrian Academy of
                  Sciences)
                </strong>
                <span style={{ fontWeight: 400 }}>
                  {" "}
                  – Our indispensable knowledge partner and the true{" "}
                </span>
                <em>
                  <span style={{ fontWeight: 400 }}>duckweed king</span>
                </em>
                <span style={{ fontWeight: 400 }}>
                  . Arturo and his lab generously shared essential protocols, provided some of
                  starter duckweed cultures, and offered expert guidance throughout our
                  journey. With monthly calls and unwavering mentorship, they helped us
                  navigate scientific challenges that might have otherwise stalled our
                  progress. Their leadership in duckweed research has truly shaped our work
                  and ambition.
                </span>
                <a href="https://www.oeaw.ac.at/gmi/research/research-groups/arturo-mari-ordonez">
                  {" "}
                  <span style={{ fontWeight: 400, color: '#3b82f6' }}>
                    oeaw.ac.at/gmi/research/research-groups/arturo-mari-ordonez
                  </span>
                </a>
              </p>






            </div>

            <div className="flex justify-center md:col-span-1">
              <div className="flex flex-col items-center">
                <img
                  src="https://static.igem.wiki/teams/5642/images/homepage/footer/arturo-mari-ordonez-logo.webp"
                  alt="Arturo Mari Ordonez"
                  className="max-w-full h-auto"
                  style={{ maxWidth: "600px", width: "100%", height: "auto" }}
                />
                
              </div>
              </div>
            </div>     



             <div className="grid md:grid-cols-2 mt-16 gap-12 items-center">


              <div className="flex justify-center md:col-span-1">
              <div className="flex flex-col items-center">
                <img
                  src="https://static.igem.wiki/teams/5642/images/homepage/footer/ansa-biotechnologies-logo.webp"
                  alt="Ansa Biotechnologies"
                  className="max-w-full h-auto"
                  style={{ maxWidth: "600px", height: "100px", width: "auto" }}
                />
                
              </div>
            </div>
            
            <div className="md:col-span-1">
              
              
              <p>
                <strong>Ansa Biotechnologies</strong>
                <span style={{ fontWeight: 400 }}>
                  {" "}
                  – The team is transforming DNA synthesis with next-generation enzymatic
                  technologies and supported our work through their iGEM program by providing
                  access to complex and long DNA synthesis (up to 7.5 kb), enabling complex
                  constructs that would otherwise be impossible to obtain. We appreciate the
                  clear communication and helpful coordination from{" "}
                </span>
                <strong>Erin Lovelace</strong>
                <span style={{ fontWeight: 400 }}>
                  {" "}
                  (Customer Experience), who assisted with submission guidance.
                </span>
                <a href="https://ansabio.com?utm_source=chatgpt.com">
                  {" "}
                  <span style={{ fontWeight: 400, color: '#3b82f6' }}>ansabio.com</span>
                </a>
                <span style={{ fontWeight: 400 }}>.</span>
              </p>







            </div>
            
          </div>    


          <div className="grid md:grid-cols-2 mt-16 gap-12 items-center">
            
            <div className="md:col-span-1">
              
              
              <p>
                <strong>IBBA (CNR)</strong>
                <span style={{ fontWeight: 400 }}>
                  {" "}
                  – Institute of Agricultural Biology and Biotechnology (IBBA, CNR) – The
                  institute contributed essential duckweed clones and access to maintained
                  collections that accelerated our build-and-test cycle. We thank{" "}
                </span>
                <strong>Dr. Laura Morello</strong>
                <span style={{ fontWeight: 400 }}>
                  {" "}
                  for her generous assistance. <a style={{ color: '#3b82f6' }} href="http://ibba.cnr.it">ibba.cnr.it</a>.
                </span>
              </p>







            </div>

            <div className="flex justify-center md:col-span-1">
              <div className="flex flex-col items-center">
                <img
                  src="https://static.igem.wiki/teams/5642/images/homepage/footer/ibba-logo.webp"
                  alt="IBBA (CNR)"
                  className="max-w-full h-auto"
                  style={{ maxWidth: "600px", height: "100px", width: "auto" }}
                />
                
              </div>
              </div>
            </div>     

          
        </section>


        
        
      </div>
    </div>
  );

};

export default Partners;