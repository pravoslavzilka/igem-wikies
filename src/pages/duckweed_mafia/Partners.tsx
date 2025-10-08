import { Link } from "react-router-dom";
import A from "../../A.tsx";

const Partners = () => {
  return (
    <div className="min-h-screen bg-white text-justify text-lg" style={{ fontFamily: 'Urbanist, sans-serif' }}>
      <div className="max-w-6xl mx-auto px-8 py-12 ">

        <div className="bg-white py-8 px-6 border-b-2 border-gray-200">
        <div className="max-w-4xl mx-auto mb-32">
          <div className="relative">
            {/* Central Logo */}
            <div className="flex justify-center mb-[-250px]">
              <img 
                src="https://static.igem.wiki/teams/5642/images/duckweedmafia/partners/title-page.webp" 
                alt="iGEM Logo" 
                className=" w-auto "
                style={{  md: { height: '500px', width: 'auto' } }}
              />
            </div>
            
            {/* Ally Labels */}
            <div className="relative hidden sm:block">
              <div className="absolute top-0 left-0 transform -translate-y-36">
                <span className="text-2xl font-semibold uppercase tracking-wide bg-gradient-to-r from-green-400 via-green-500 to-green-800 bg-clip-text text-transparent animate-[gradient_3s_linear_infinite]" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Strategic Ally</span>
              </div>
              <div className="absolute top-0 right-0 transform -translate-y-36">
                <span className="text-2xl font-semibold uppercase tracking-wide bg-gradient-to-r from-green-400 via-green-500 to-green-800 bg-clip-text text-transparent animate-[gradient_3s_linear_infinite]" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>General Ally</span>
              </div>
              <div className="absolute bottom-0 left-0 transform translate-y-24">
                <span className="text-2xl font-semibold uppercase tracking-wide bg-gradient-to-r from-green-400 via-green-500 to-green-800 bg-clip-text text-transparent animate-[gradient_3s_linear_infinite]" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Main Allies</span>
              </div>
              <div className="absolute bottom-0 right-[280px] transform translate-y-[230px]" >
                <span className="text-2xl font-semibold uppercase tracking-wide bg-gradient-to-r from-green-400 via-green-500 to-green-800 bg-clip-text text-transparent animate-[gradient_3s_linear_infinite]" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Enablement Allies</span>
              </div>
              <div className="absolute bottom-0 right-0 transform translate-y-24">
                <span className="text-2xl font-semibold uppercase tracking-wide bg-gradient-to-r from-green-400 via-green-500 to-green-800 bg-clip-text text-transparent animate-[gradient_3s_linear_infinite]" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Speciall Allies</span>
              </div>
            </div>
            
          </div>
          
          
        </div>
      </div>
        
        {/* Strategic Ally Section */}
        <section className="mb-16 mt-64">
            <h1 className="text-3xl font-bold text-gray-800 mt-10 mb-10 justify-center items-center text-center" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                STRATEGIC ALLY
            </h1>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center md:col-span-1">
              <img
                src="https://static.igem.wiki/teams/5642/images/duckweedmafia/partners/sci-lg-eng-rgb.webp"
                alt="MUNI"
                className="max-w-full h-auto"
                style={{ maxWidth: "600px", width: "100%", height: "auto" }}
              />
            </div>
            <div className="md:col-span-1">
              
              
              <p className="text-md  leading-relaxed mb-6" style={{ fontFamily: 'Urbanist, sans-serif' }}>
                <strong>Masaryk University Faculty of Science (MUNI SCI) </strong> –

                  has been a key strategic partner in our journey. Through programs like student scholarships and Start Your Business, MUNI SCI provided us with the resources to launch iGEM Brno. Their support, together with <b>Spolek přátel MU</b>, enabled our founding members to attend the BioInnovation Fair at the iGEM Grand Jamboree, which motivated us to establish the iGEM Brno team. MUNI SCI further supported our research through scholarships, internships, and funding that covered all iGEM fees and travel expenses. Moreover, MUNI helped us carry out PR activities for our crowdfunding campaign and funded the production of our presentation video, enabling us to tell our story in a professional way. Special thanks go to the <b>Dean of the Faculty, Prof. Tomáš Kašparovský</b>, for his willingness to support our activities - we truly appreciate it.
                 <span className='hover:underline text-[#6ca033]'>
                  <A target="_blank" href="https://sci.muni.cz"> sci.muni.cz</A>
                </span>
              
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
                    , for orchestrating our collaboration. <A className='hover:underline text-[#6ca033]' target="_blank" href="https://iocbtech.cz">iocbtech.cz</A>
                </span>
                </p>

            </div>
            <div className="flex justify-center md:col-span-1">
              <img
                src="https://static.igem.wiki/teams/5642/images/homepage/footer/iocb-tech-foundation-logo.webp"
                alt="IOCB Tech Foundation"
                className="max-w-full h-auto"
                style={{ maxWidth: "600px", width: "100%", height: "auto" }}
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
                    As our main sponsor, GreenOnyx empowers our mission to explore duckweed's
                    potential as a sustainable protein source, a powerful bioremediation tool,
                    and a new chassis for biotech innovation. We are deeply grateful to{" "}
                </span>
                <strong>Dr. Tsipi Shoham</strong>
                <span style={{ fontWeight: 400 }}>
                    , whose vision and passion for innovation inspire us every day. Her belief
                    in our project and commitment to advancing duckweed as a real future food
                    have been invaluable.{" "}
                </span>
                <A className='hover:underline text-[#6ca033]' target="_blank" href="https://www.greenonyx.ag/">
                    <strong>greenonyx.ag</strong>
                </A>  
                <span style={{ fontWeight: 400 }}>
                    . Dr. Shoham also collaborated with us on an interview for the{" "}
                </span>
                <A target="_blank" rel="noopener noreferrer" href="http://www.ruduckweed.org/uploads/1/0/8/9/10896289/duckweed_forum_issue_50.pdf?fbclid=PAQ0xDSwMfeHZleHRuA2FlbQIxMQABpxDMlsGrXOqInppmjlmxbeLfOPZ2g8u0vSXTmQ0KICPgfvBORU91F5cNsyML_aem_bWYQ0UdFdfLugRMv9R-QgA">
                    <span className='hover:underline text-[#6ca033]'>The Duckweed journal</span>
                </A>
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
                      - a leading technical university in the Czech Republic, VUT provided
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
                    <A href="https://www.vut.cz">
                      {" "}
                      <span className='hover:underline text-[#6ca033]'>vut.cz</span>
                    </A>
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
                  story alongside the whole iGEM Brno Team. <A className='hover:underline text-[#6ca033]' href="https://www.biovendor.cz">biovendor.cz</A>
                </span>
              </p>



            </div>
            
            
          </div>            



        </section>


        {/* Enablement Allies Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center justify-center items-center text-gray-800 mt-20 mb-20" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            ENABLEMENT ALLIES
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">

            <div className="flex justify-center md:col-span-1">
              <img
                src="https://static.igem.wiki/teams/5642/images/homepage/footer/ceitec-logo.webp"
                alt="CEITEC"
                className="max-w-full h-auto"
                style={{ maxWidth: "600px", width: "100%", height: "auto" }}
              />
            </div>
            <div className="md:col-span-1">
              
              
              <>
                <p>
                  <strong>CEITEC – Boisivon Lab</strong>
                  <span style={{ fontWeight: 400 }}>
                    {" "}
                     was absolutely crucial for our work with plants, being fully equipped
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
                  <A href="http://boisivonlab.ceitec.cz">
                    <span className='hover:underline text-[#6ca033]'>boisivonlab.ceitec.cz</span>
                  </A>
                  <span style={{ fontWeight: 400 }}>&nbsp;</span>
                </p>
                <p style={{ marginTop: '1rem' }}>
                  <strong>CEITEC – Říha Lab </strong>
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
                  <A href="http://rihalab.ceitec.cz">
                    <span className='hover:underline text-[#6ca033]'>rihalab.ceitec.cz</span>
                  </A>
                  <span style={{ fontWeight: 400 }}>&nbsp;</span>
                </p>
                <p style={{ marginTop: '1rem' }}>
                  <strong>
                    CEITEC – Cellular Imaging Core Facility (Masaryk University)
                  </strong>
                  <span style={{ fontWeight: 400 }}>
                    {" "}
                     provides access to state-of-the-art Zeiss fluorescence microscopes,
                    enabling us to efficiently evaluate the success of our genetic
                    transformations and develop imaging-based analysis methods. We are
                    grateful to{" "}
                  </span>
                  <strong>Dr. Milan Ešner</strong>
                  <span style={{ fontWeight: 400 }}>
                    {" "}
                    and his team for their continuous technical support.{" "}
                  </span>
                  <A href="http://cellim.ceitec.eu">
                    <span className='hover:underline text-[#6ca033]'>cellim.ceitec.eu</span>
                  </A>
                </p>
                <p style={{ marginTop: '1rem' }}>
                  <strong>CEITEC – Plant Sciences Core Facility (Masaryk University)</strong>
                  <span style={{ fontWeight: 400 }}>
                    {" "}
                    – Provides access to state-of-the-art, fully controlled plant cultivation
                    chambers and phytotrons. This enabled us to perform crucial cultivation
                    experiments and fine-tune our model, PREDICTOR. We are grateful to <b>Dr. Petr 
                    Mokroš</b> for his invaluable support and assistance.
                  </span>
                  <A href="https://www.google.com/search?q=https://www.ceitec.eu/plant-sciences-core-facility/cf">
                    {" "}
                    <span className='hover:underline text-[#6ca033]'>
                      www.ceitec.eu/plant-sciences-core-facility/cf
                    </span>
                  </A>
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
                  Access to the lab has been absolutely crucial for all of our molecular
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
                <A  href="http://mik.sci.muni.cz">
                  <span className='hover:underline text-[#6ca033]'>mik.sci.muni.cz</span>
                </A>
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
                    – A student-run "maker space" and workshop facility at the Faculty of
                    Mechanical Engineering (VUT). StrojLAB provided the well-equipped workshop
                    environment where we constructed our CULTIVATOR - an autonomous duckweed
                    cultivation system. As strojLAB team member Jan Kalina notes, "When
                    someone doesn't know where to find help, they go to strojLAB"{" "}
                  </span>
                  
                  <span style={{ fontWeight: 400 }}>
                    , reflecting the team's commitment to supporting technical projects like
                    ours.
                  </span>
                  <A href="https://www.fme.vutbr.cz/en/fakulta/zfsi/74419#:~:text=StrojLAB%20is%20not%20only%20workshops,from%20the%20strojLAB%20student%20team">
                    <span className='hover:underline text-[#6ca033]'> fme.vutbr.cz</span>
                  </A>
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
                <A href="https://www.oeaw.ac.at/gmi/research/research-groups/arturo-mari-ordonez">
                  {" "}
                  <span className='hover:underline text-[#6ca033]'>
                    oeaw.ac.at/gmi/research/research-groups/arturo-mari-ordonez
                  </span>
                </A>
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



            <div className="grid md:grid-cols-2 mt-16 gap-12 mt-16 mb-16 items-center">

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
            
            <div className="md:col-span-1">
              
              <p>
                <strong>IBBA (CNR)</strong>
                <span style={{ fontWeight: 400 }}>
                  {" "}– Institute of Agricultural Biology and Biotechnology (IBBA, CNR) – The institute contributed essential duckweed clones and access to maintained collections that enabled us to fine-tune our PREDICTOR by growth rate data on 12 duckweeds clones deposited form IBBA BioBank. We thank <b>Dr. Laura Morello</b> for her generous assistance. <A className='hover:underline text-[#6ca033]' href="http://ibba.cnr.it">ibba.cnr.it</A>.
                </span>
              </p>

            </div>

            
            </div> 



            <div className="grid md:grid-cols-2 gap-12 mt-16 mb-16 items-center">
           
            <div className="md:col-span-1">
              <p>
                <strong>Thermo Fisher Scientific (Czech Republic)</strong>
                <span style={{ fontWeight: 400 }}>
                  {" "}
                  – The Czech branch of the global Thermo Fisher/Fisher Scientific company donated DNA extraction kits for plant and gel samples. These kits accelerated our laboratory work on experiments by streamlining plant DNA isolation. We are especially thankful to site manager <strong>Petr Střelec</strong>, who supported us in making this possible. (Thermo Fisher is a major supplier of life-science reagents and equipment, operating in the Czech Republic under Fisher Scientific).
                </span>
                <A href="https://www.thermofisher.com/cz/en/home.html">
                      {" "}
                      <span className='hover:underline text-[#6ca033]'>www.thermofisher.com</span>
                    </A>
              </p>
            </div>
             <div className="flex justify-center md:col-span-1">
              <img
                src="https://static.igem.wiki/teams/5642/images/homepage/footer/thermofisher-logo.webp"
                alt="Thermo Fisher Scientific"
                className="max-w-full h-auto"
                style={{ maxWidth: "600px", width: "100%", height: "auto" }}
              />
            </div>
          </div>



             <div className="grid md:grid-cols-2 mt-16 gap-12 mt-16 mb-16 items-center">


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
                <A href="https://ansabio.com?utm_source=chatgpt.com">
                  {" "}
                  <span className='hover:underline text-[#6ca033]'>ansabio.com</span>
                </A>
                <span style={{ fontWeight: 400 }}>.</span>
              </p>

            </div>
            
          </div>    



          <div className="grid md:grid-cols-2 gap-12 items-center mt-16 mb-16">
            <div className="md:col-span-1">
              <p>
                <strong>DIANA Biotechnologies</strong>
                <span style={{ fontWeight: 400 }}>
                  {" "}
                  - DIANA is a Czech biotechnology company that provided us with reverse transcriptase kits essential for producing cDNA from mRNA. This crucial donation has allowed us to accurately and quantitatively evaluate our promoters, which is a vital step in our research. We are especially grateful to the CEO, <strong>Dr. Václav Navrátil</strong>, for making this collaboration possible and enabling us to accelerate our experimental work.
                </span>
                <A href="https://www.dianabiotech.com/">
                      {" "}
                      <span className='hover:underline text-[#6ca033]'>www.dianabiotech.com/</span>
                    </A>
              </p>
            </div>
            <div className="flex justify-center md:col-span-1 ">
              <img
                src="https://static.igem.wiki/teams/5642/images/homepage/footer/diana-logo-blue-color.webp"
                alt="DIANA Biotechnologies"
                className="max-w-full h-auto"
                style={{ maxWidth: "600px", width: "100%", height: "auto" }}
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mt-16 mb-16 items-center">
            <div className="flex justify-center md:col-span-1">
              <img
                src="https://static.igem.wiki/teams/5642/images/homepage/footer/enablement-p-multiplexdx.webp"
                alt="MultiplexDX"
                className="max-w-full h-auto"
                style={{ maxWidth: "600px", width: "100%", height: "auto" }}
              />
            </div>
            <div className="md:col-span-1">
              <p>
                <strong>MultiplexDX</strong>
                <span style={{ fontWeight: 400 }}>
                  {" "}
                  - A Slovak biotechnology company synthesized Taqman probes crucial for the quantitative evaluation of our promoters and provided us with invaluable consultation on PCR design. Their expert support and precise reagents ensure the highest standard of reliability and efficiency for our molecular analysis. We are grateful to the CEO, <strong>Dr. Pavol Čekan</strong>, for his direct support enabling us to accelerate our experimental work.
                </span>
                <A href="https://www.multiplexdx.com/">
                      {" "}
                      <span className='hover:underline text-[#6ca033]'>www.multiplexdx.com/</span>
                    </A>
              </p>
            </div>
          </div>


              

          
        </section>


        {/* SPECIAL ALLIES */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center justify-center items-center text-gray-800 mt-20 mb-20" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            SPECIAL ALLIES
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center mt-16">
            <div className="flex justify-center md:col-span-1">
              <img
                src="https://static.igem.wiki/teams/5642/images/homepage/footer/farma-pecinov.webp"
                alt="Farma Pecinov"
                className="max-w-full h-auto"
                style={{ maxWidth: "600px", width: "auto", height: "400px" }}
              />
            </div>
            <div className="md:col-span-1">
              <p>
                <strong>Farma Pecinov</strong>
                <span style={{ fontWeight: 400 }}>
                  {" "}
                  – We are profoundly thankful to <strong>Mr. Nevřela</strong> and Farma Pecínov for their support. Farma Pecínov is a countryside retreat that combines a working farm with hotel, wellness, and event services, set in the picturesque nature near Benešov. With strong agricultural roots, their belief in our work was shown through the purchase of an official partnership in our crowdfunding campaign - a gesture that gave them the unique opportunity to name our very first <b>NitroDuckweed</b>, which we are going to develop! Curious what the name will be? So are we!
                </span>
                <A href=" https://pecinov.com/domovska-stranka/">
                      {" "}
                      <span className='hover:underline text-[#6ca033]'>pecinov.com/domovska-stranka/</span>
                    </A>
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mt-16">
            <div className="md:col-span-1">
              <p>
                <strong>Tensor Ventures</strong>
                <span style={{ fontWeight: 400 }}>
                  {" "}
                  – A Czech deep-tech venture capital firm specializing in TechBio, the intersection of biotechnology and artificial intelligence. Tensor Ventures is the official sponsor of our Bio 3H Party (hustlers-hipsters-hackers). Their focus on bridging biotech and AI strongly resonates with our vision of innovative, data-driven science. We are particularly grateful to <strong>Knarik Avanesyan, Head of Marketing</strong>, and <strong>Jan Faflík, Senior Associate</strong>, for making this collaboration possible.
                </span>
                <A href="https://tensor.ventures/">
                      {" "}
                      <span className='hover:underline text-[#6ca033]'>tensor.ventures/</span>
                    </A>
              </p>
            </div>
            <div className="flex justify-center md:col-span-1">
              <img
                src="https://static.igem.wiki/teams/5642/images/homepage/footer/tensor-ventures-logo.webp"
                alt="Tensor Ventures"
                className="max-w-full h-auto"
                style={{ maxWidth: "600px", width: "100%", height: "auto" }}
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mt-16">
            <div className="flex justify-center md:col-span-1">
              <img
                src="https://static.igem.wiki/teams/5642/images/homepage/footer/p-lab-logo.webp"
                alt="P-LAB"
                className="max-w-full h-auto"
                style={{ maxWidth: "600px", width: "100%", height: "auto" }}
              />
            </div>
            <div className="md:col-span-1">
              <p>
                <strong>P-LAB a.s.</strong>
                <span style={{ fontWeight: 400 }}>
                  {" "}
                  – A leading Czech laboratory-supply company that donated large sterile glass cultivation dishes and inoculation loops, enabling us to grow duckweed at larger scale under sterile conditions. This partnership was crucial in allowing us to continue experiments even before our own container system was fully developed. We are especially thankful to <strong>Tomáš Přikryl, CEO of P-LAB</strong>, for making this collaboration possible.
                </span>
                <A href="https://www.p-lab.cz/">
                      {" "}
                      <span className='hover:underline text-[#6ca033]'>www.p-lab.cz/</span>
                    </A>
              </p>
            </div>
          </div>



          <div className="grid md:grid-cols-2 gap-12 items-center mt-16">
            <div className="md:col-span-1">
              <p>
                <strong>SAPMU</strong>
                <span style={{ fontWeight: 400 }}>
                  {" "}
                  (the Association of Friends and Alumni of Masaryk University) supported us twice-first by providing funding for Matúš and Miro to attend the BioInnovation Fair at the Grand Jamboree 2024, which cemented our ambition to establish an iGEM team. Secondly, they funded our initiative SynBio Discussion-a public event on the socio-economic aspects of synthetic biology and the bioeconomy-which will take place in November!
                </span>
                <A target="_blank" href="https://www.muni.cz/en/alumni/spolek-absolventu-a-pratel-mu/about-us/about-sapmu">
                      {" "}
                      <span className='hover:underline text-[#6ca033]'>www.muni.cz/en/alumni/</span>
                    </A>
              </p>
            </div>
            <div className="flex justify-center md:col-span-1">
              <img
                src="https://static.igem.wiki/teams/5642/images/homepage/footer/sapmu-logo.webp"
                alt="SAPMU"
                className="max-w-full h-auto"
                style={{ maxWidth: "600px", width: "100%", height: "auto" }}
              />
            </div>
          </div>

          

          <div className="grid md:grid-cols-2 gap-12 items-center mt-16">
            <div className="flex justify-center md:col-span-1">
              <img
                src="https://static.igem.wiki/teams/5642/images/homepage/footer/agronet-nesovice.webp"
                alt="AGRONET Nesovice"
                className="max-w-full h-auto"
                style={{ maxWidth: "600px", width: "100%", height: "auto" }}
              />
            </div>
            <div className="md:col-span-1">
              <p>
                <strong>AGRONET Nesovice</strong>
                <span style={{ fontWeight: 400 }}>
                  {" "}
                  - helped us generously twice granting us space for filming and contributing valuable data to regarding cows feedstock and manure management. This assistance was essential for creating our promotional and presentational video and gaining a deeper understanding of real-world agronomic challenges. We are very grateful to <strong>J. Neužil</strong> for enabling this collaboration, which was vital for linking our biotechnological research with the practical agricultural environment.
                </span>
                <A href="https://agronet-nesovice-druzstvo.webnode.cz/">
                      {" "}
                      <span className='hover:underline text-[#6ca033]'>agronet-nesovice-druzstvo.webnode.cz/</span>
                    </A>
              </p>
            </div>
            
          </div>


          <div className="grid md:grid-cols-2 gap-12 items-center mt-16">
            <div className="md:col-span-1">
              <p>
                <strong>MENDELu University Agriculture Enterprise in Žabčice - </strong>
                <span style={{ fontWeight: 400 }}>
                  {" "}
                  The Žabčice Agricultural Farm under Mendel University was crucial for deepening our understanding of protein feedstock, cattle, and soybeans. They kindly allowed us to shoot parts of our presentation video at their farm. We are grateful to Mr. Doležal for granting us permission and to Dr. Tučková for her assistance and valuable insights into farming.                </span>

                <A target="_blank" href="https://szp.mendelu.cz/en/homepage/">
                      {" "}
                      <span className='hover:underline text-[#6ca033]'>szp.mendelu.cz/</span>
                    </A>
              </p>
            </div>
            <div className="flex justify-center md:col-span-1">
              <img
                src="https://static.igem.wiki/teams/5642/images/homepage/footer/zabcice-logo.webp"
                alt="Žabčice Agricultural Farm"
                className="max-w-full h-auto"
                style={{ maxWidth: "600px", width: "100%", height: "auto" }}
              />
            </div>
          </div>


        <div className="grid md:grid-cols-2 gap-12 items-center mt-16">
            <div className="flex justify-center md:col-span-1">
              <img
                src="https://static.igem.wiki/teams/5642/images/homepage/footer/muni-arts-logo.webp"
                alt="MUNI ARTS"
                className="max-w-full h-auto"
                style={{ maxWidth: "600px", width: "100%", height: "auto" }}
              />
            </div>
            <div className="md:col-span-1">
              <p>
                <strong>MUNI ARTS - </strong>
                <span style={{ fontWeight: 400 }}>
                  {" "}
                     The Video Crew from the Center for Information Technologies (led by Mr. Zemene) at MUNI Faculty of Arts created our promotional video pro bono and our presentation video as contractors. Irina Matusevič, Martin Ingr, Benedikt Kyselka, and Antonina Kuryanova did an amazing and highly professional job visualizing our story and work, flexibly fulfilling all our crazy cinematic requests. We are especially thankful to Mr. Zemene for his willingness to help us when we were short on time. 
                </span>
                <A href="https://www.phil.muni.cz/en">
                      {" "}
                      <span className='hover:underline text-[#6ca033]'>www.phil.muni.cz</span>
                    </A>
              </p>
            </div>
            
          </div>



          

          

          <div className="grid md:grid-cols-2 gap-12 items-center mt-16">

            
            <div className="md:col-span-1">
              <p>
                <strong>Vican</strong>
                <span style={{ fontWeight: 400 }}>
                  {" "}
                  - A family winery from Mikulov, founded by film producer <strong>Tomáš Vican</strong>, which is particularly famous for its Riesling and natural orange wines. Their generous sponsorship was instrumental in helping us organize a fantastic 3H party. We are incredibly grateful for their support which made our great event possible.
                </span>
                <A href="https://www.vican.wine/">
                      {" "}
                      <span className='hover:underline text-[#6ca033]'>https://www.vican.wine/</span>
                    </A>
              </p>
            </div>

            <div className="flex justify-center md:col-span-1">
              <img
                src="https://static.igem.wiki/teams/5642/images/homepage/footer/vican-winery.webp"
                alt="Vican"
                className="max-w-full h-auto"
                style={{ maxWidth: "600px", width: "100%", height: "auto" }}
              />
            </div>
            
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mt-16">

            <div className="flex justify-center md:col-span-1">
              <img
                src="https://static.igem.wiki/teams/5642/images/homepage/footer/fiftybeans.webp"
                alt="Fiftybeans"
                className="max-w-full h-auto"
                style={{ maxWidth: "600px", width: "100%", height: "auto" }}
              />
            </div>
            
            <div className="md:col-span-1">
              <p>
                <strong>Fiftybeans</strong>
                <span style={{ fontWeight: 400 }}>
                  {" "}
                  - Is a specialty coffee roastery from Brno, founded by award-winning barista <strong>Roman Nejedlý</strong>, with a focus on high-quality, ethically sourced coffee. Their generous sponsorship was instrumental in helping us organize a fantastic 3H party. Their amazing coffee was a true highlight of the event, and we can't thank them enough for their partnership.
                </span>
                <A href="https://fiftybeans.cz/cs/">
                      {" "}
                      <span className='hover:underline text-[#6ca033]'>https://fiftybeans.cz/cs/</span>
                    </A>
              </p>
            </div>

            
          </div>

          <div className="bg-gray-50 p-8 rounded-lg mt-16 text-center">
            <p className="text-lg">
              <span style={{ fontWeight: 400 }}>
                Under patronage of Brno Major <strong>JUDr. Markéta Vaňková</strong> and thanks to the financial support of the city, our dream came true and all 21 students were able to attend the Paris finals.
              </span>
            </p>
            <div className="flex justify-center mt-6">
              <img
                src="https://static.igem.wiki/teams/5642/images/homepage/footer/brno-logo2.webp"
                alt="Brno City"
                className="max-w-full h-auto"
                style={{ maxWidth: "400px", width: "100%", height: "auto" }}
              />
            </div>
          </div>

          <p className="text-center text-gray-600 mt-16 italic">
            Each of the above partners has enabled key aspects of our research – from imaging and cultivation to laboratory setup and supplies. We thank them for their crucial contributions and collaboration.
          </p>

                  <img src="https://static.igem.wiki/teams/5642/images/duckweedmafia/partners/roots.webp" alt="Brno City" className="max-w-full h-auto" style={{  }} />

        </section>


        
        
      </div>
    </div>
  );

};

export default Partners;