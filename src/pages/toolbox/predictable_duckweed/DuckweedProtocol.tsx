import React from 'react';
import { Link } from 'react-router';

const DuckweedProtocol = () => {
  return (
    <div className="max-w-6xl mx-auto p-8 bg-white text-lg block" style={{ fontFamily: 'Urbanist, sans-serif' }}>
      
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6 space-grotesk" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
          Duckweed cultivation protocol
        </h1>
        
        <div className="bg-gray-50 p-6 rounded-lg text-left urbanist">
          <>
          <p>
            <span style={{ fontWeight: 400 }}>
              Duckweed cultivation is not a rocket science :) But for us iGEMers and
              scientists working intensively with duckweed, it’s essential to always
              have fresh plants ready for experiments - that’s why we developed a
              strategy for small-scale cultivation in the lab.
            </span>
          </p>
          <p>&nbsp;</p>
          <p>
            <span style={{ fontWeight: 400 }}>
              The protocol was greatly inspired by the work of our advisor,&nbsp;
              Dr. Ordonez, who shared a wealth of duckweed knowledge&nbsp;
              with us – some of it already is already{" "}
            </span>
            <a style={{ fontWeight: 400, color: 'blue' }} href="https://www.biorxiv.org/content/10.1101/2025.08.28.672806v1.full">
              <span style={{ fontWeight: 400 }}>published</span>
            </a>
            <span style={{ fontWeight: 400 }}>.</span>
          </p>
        </>

        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column */}
        <div className="space-y-8">
          {/* Cultivation Conditions */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 space-grotesk" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              CULTIVATION CONDITIONS
            </h2>
            <div className="bg-gray-50 p-4 rounded-lg urbanist">
              <p>
                <span style={{ fontWeight: 400 }}>Ideal cultivation conditions are </span>
                <strong>21 - 25 °C</strong>
                <span style={{ fontWeight: 400 }}> under a </span>
                <strong>16/8 hour light/dark </strong>
                <span style={{ fontWeight: 400 }}>cycle with an intensity of </span>
                <strong>200 µmol/m²/s</strong>
                <span style={{ fontWeight: 400 }}>.</span>
              </p>

            </div>
          </div>

          {/* Growth Medium */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 space-grotesk" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              GROWTH MEDIUM
            </h2>
            <div className="urbanist text-gray-700 space-y-3">
              <p>
                <span style={{ fontWeight: 400 }}>
                  We grow duckweed hydroponically in duckweed cultivation medium, called{" "}
                </span>
                <strong>DCMN</strong>
                <span style={{ fontWeight: 400 }}>
                  {" "}
                  prepared by combining 5ml/l of each stock solutions I, II, III and IV with
                  dH
                </span>
                <span style={{ fontWeight: 400 }}>2</span>
                <span style={{ fontWeight: 400 }}>O and </span>
                <strong>adjusting pH to 5.6 – 5.7 </strong>
                <span style={{ fontWeight: 400 }}>using </span>
                <strong>1M KOH </strong>
                <span style={{ fontWeight: 400 }}>or </span>
                <strong>1M HCl</strong>
                <span style={{ fontWeight: 400 }}>. </span>
              </p>

            </div>

            {/* Stock Solutions Table */}
            <div className="mt-6">
              <div className="inline-block border-2 border-black bg-white">
                {/* Header */}
                <div className="bg-green-500 text-white text-center py-2 px-4 font-bold">
                  Modified N-medium
                </div>
                
                {/* Subheader */}
                <div className="bg-green-300 flex">
                  <div className="flex-1 text-center py-2 px-4 font-semibold border-r border-black">
                    Stock solutions (*) (**)
                  </div>
                  <div className="w-20 bg-green-500 text-white text-center py-2 px-2 font-bold">
                    FINAL
                  </div>
                </div>
                
                {/* Column headers */}
                <div className="bg-green-300 flex border-t border-black">
                  <div className="w-24 text-center py-2 px-2 font-semibold border-r border-black">
                    Stock solution
                  </div>
                  <div className="w-32 text-center py-2 px-2 font-semibold border-r border-black">
                    Compound
                  </div>
                  <div className="w-16 text-center py-2 px-2 font-semibold border-r border-black">
                    [g/L]
                  </div>
                  <div className="w-16 text-center py-2 px-2 font-semibold border-r border-black">
                    [mM]
                  </div>
                  <div className="w-20 bg-green-500 text-white text-center py-2 px-2 font-bold">
                  </div>
                </div>
                
                {/* Data rows */}
                <div className="bg-green-200">
                  {/* Row 1 */}
                  <div className="flex border-t border-black">
                    <div className="w-24 text-center py-2 px-2 border-r border-black font-semibold">
                      #1
                    </div>
                    <div className="w-32 text-center py-2 px-2 border-r border-black">
                      KH₂PO₄
                    </div>
                    <div className="w-16 text-center py-2 px-2 border-r border-black">
                      27,22
                    </div>
                    <div className="w-16 text-center py-2 px-2 border-r border-black">
                      200
                    </div>
                    <div className="w-20 text-center py-2 px-2 font-semibold">
                      1 mM
                    </div>
                  </div>
                  
                  {/* Row 2 */}
                  <div className="flex border-t border-black">
                    <div className="w-24 text-center py-2 px-2 border-r border-black font-semibold">
                      #2
                    </div>
                    <div className="w-32 text-center py-2 px-2 border-r border-black">
                      Ca(NO₃)₂*4H₂O
                    </div>
                    <div className="w-16 text-center py-2 px-2 border-r border-black">
                      47,23
                    </div>
                    <div className="w-16 text-center py-2 px-2 border-r border-black">
                      200
                    </div>
                    <div className="w-20 text-center py-2 px-2 font-semibold">
                      1 mM
                    </div>
                  </div>
                  
                  {/* Row 3 - KNO₃ */}
                  <div className="flex border-t border-black">
                    <div className="w-24 text-center py-2 px-2 border-r border-black font-semibold">
                      #3
                    </div>
                    <div className="w-32 text-center py-2 px-2 border-r border-black">
                      KNO₃
                    </div>
                    <div className="w-16 text-center py-2 px-2 border-r border-black">
                      161,8
                    </div>
                    <div className="w-16 text-center py-2 px-2 border-r border-black">
                      1600
                    </div>
                    <div className="w-20 text-center py-2 px-2 font-semibold">
                      8 mM
                    </div>
                  </div>
                  
                  {/* Row 4 - H₃BO₃ */}
                  <div className="flex border-t border-black">
                    <div className="w-24 text-center py-2 px-2 border-r border-black">
                    </div>
                    <div className="w-32 text-center py-2 px-2 border-r border-black">
                      H₃BO₃
                    </div>
                    <div className="w-16 text-center py-2 px-2 border-r border-black">
                      0,0618
                    </div>
                    <div className="w-16 text-center py-2 px-2 border-r border-black">
                      1
                    </div>
                    <div className="w-20 text-center py-2 px-2 font-semibold">
                      5 uM
                    </div>
                  </div>
                  
                  {/* Row 5 - MnCl₂*4H₂O */}
                  <div className="flex border-t border-black">
                    <div className="w-24 text-center py-2 px-2 border-r border-black">
                    </div>
                    <div className="w-32 text-center py-2 px-2 border-r border-black">
                      MnCl₂*4H₂O
                    </div>
                    <div className="w-16 text-center py-2 px-2 border-r border-black">
                      0,5145
                    </div>
                    <div className="w-16 text-center py-2 px-2 border-r border-black">
                      2,6
                    </div>
                    <div className="w-20 text-center py-2 px-2 font-semibold">
                      13 uM
                    </div>
                  </div>
                  
                  {/* Row 6 - Na₂MoO₄*2H₂O */}
                  <div className="flex border-t border-black">
                    <div className="w-24 text-center py-2 px-2 border-r border-black">
                    </div>
                    <div className="w-32 text-center py-2 px-2 border-r border-black">
                      Na₂MoO₄*2H₂O
                    </div>
                    <div className="w-16 text-center py-2 px-2 border-r border-black">
                      0,018
                    </div>
                    <div className="w-16 text-center py-2 px-2 border-r border-black">
                      0,08
                    </div>
                    <div className="w-20 text-center py-2 px-2 font-semibold">
                      0,4 uM
                    </div>
                  </div>
                  
                  {/* Row 7 - MgSO₄*7H₂O */}
                  <div className="flex border-t border-black">
                    <div className="w-24 text-center py-2 px-2 border-r border-black">
                    </div>
                    <div className="w-32 text-center py-2 px-2 border-r border-black">
                      MgSO₄*7H₂O
                    </div>
                    <div className="w-16 text-center py-2 px-2 border-r border-black">
                      49,3
                    </div>
                    <div className="w-16 text-center py-2 px-2 border-r border-black">
                      200
                    </div>
                    <div className="w-20 text-center py-2 px-2 font-semibold">
                      1 mM
                    </div>
                  </div>
                  
                  {/* Row 8 - Fe(II)NaEDTA */}
                  <div className="flex border-t border-black">
                    <div className="w-24 text-center py-2 px-2 border-r border-black font-semibold">
                      #4
                    </div>
                    <div className="w-32 text-center py-2 px-2 border-r border-black">
                      Fe(II)NaEDTA
                    </div>
                    <div className="w-16 text-center py-2 px-2 border-r border-black">
                      1,835
                    </div>
                    <div className="w-16 text-center py-2 px-2 border-r border-black">
                      5
                    </div>
                    <div className="w-20 text-center py-2 px-2 font-semibold">
                      25 uM
                    </div>
                  </div>
                </div>
              </div>
              
              <p className="text-md text-gray-600 mt-2 urbanist">
                <p>
                <strong>Table 1. </strong>
                <span style={{ fontWeight: 400 }}>
                  Chemical composition of the stock solution from which DCMN is prepared. Keep
                  stock solutions in fridge to avoid their contamination.&nbsp;
                </span>
              </p>

              </p>
            </div>
          </div>

          {/* Material & Equipment */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 space-grotesk" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              MATERIAL & EQUIPMENT NEEDED
            </h2>
            <ul className="space-y-2 urbanist text-gray-700">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Petri dishes (Ø7cm)
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                glass pots/beaker (0.5 – 1L, ideally Ø 14cm)
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                plastic trays (if larger experiment are needed)
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                metal sieve, one for each individual clone to 
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                plastic pot for mixing media
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                pH meter
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                measuring cylinder
              </li>
            </ul>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-8">
          {/* Main Image */}
          <div className=" rounded-lg flex items-center justify-center">
            <img src="https://static.igem.wiki/teams/5642/images/toolbox/cultivationprotocol/duckweed-08438.webp" alt="Duckweed cultivation setup" className="h-full" />
          </div>

          
          
          <p>
            <strong>Picture 1. </strong>
            <span style={{ fontWeight: 400 }}>
              The level of iGEM Brno’s duckweed cultivation at the end of summer should
              not be called “small-scale.” Fortunately, by then our CULTIVATOR was
              finished, and we switched to autonomous cultivation. You can too - read how
              on the{" "}
            </span>
            <span style={{ fontWeight: 400 }}><Link to="/Hardware">CULTIVATOR page</Link></span>
            <span style={{ fontWeight: 400 }}>.</span>
          </p>


          {/* Cultivation Hierarchy */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 space-grotesk" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              CULTIVATION HIERARCHY
            </h2>
            <div className="urbanist text-gray-700 space-y-4">
              <p>
                Set up in a greenhouse as important to being experiment with 
                duckweeds.
              </p>
              
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
                <p className="font-medium text-gray-900">
                  Always maintain sterile single-clone stockings!
                </p>
              </div>
              
              <p>
                <strong>1. DISHES</strong> (Petri, Ø7 cm) with sterile solid 1/10 medium for
              </p>
            </div>
          </div>

          {/* Additional placeholder images */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-gray-200 h-32 rounded-lg flex items-center justify-center">
              <span className="text-gray-500 text-xs urbanist text-center">Petri dish setup</span>
            </div>
            <div className="bg-gray-200 h-32 rounded-lg flex items-center justify-center">
              <span className="text-gray-500 text-xs urbanist text-center">Glass panel + tray</span>
            </div>
          </div>
        </div>
      </div>

      {/* Extended Protocol Section */}
      <div className="mt-12 border-t pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Continued */}
          <div className="space-y-6">
            <div className="urbanist text-gray-700 space-y-4">
              <p>
                each duckweed clone or a magnetic stir. This is important because:
              </p>
              
              <div className="pl-4 space-y-2">
                <p>• You may need sterile duckweed for experiments or clania</p>
                <p>• Clones can be very different - having single</p>
                <p>• It's easy to keep track of plants susceptible to airploy or infectious cloning in directly</p>
                <p>• Decisions often better than it's, you can be "contaminator" for both experiments</p>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded mt-4">
                <p className="font-medium text-gray-900">
                  Always keep a larger stock of important clones ready!
                </p>
              </div>

              <p>
                <strong>2. POTS</strong> (glass, Ø14 cm) with liquid DCMM overgrown by 
                duckweed. POTS is important because:
              </p>
              
              <div className="pl-4 space-y-2">
                <p>• For experiments you might need quite starting from just a 
                few fronds in a dish takes time if your experiments are 
                variable, you want to always have plenty of duckweed 
                available from different sources</p>
              </div>

              <p>
                <strong>Always keep duckweed at suitable confluence for 
                experiments (50-75%)</strong>
              </p>

              <p>
                <strong>3. TRAYS</strong> (plastic, any size) where the medium is refreshed 
                every day and adjusted each Monday and Friday. This is 
                important because:
              </p>
              
              <div className="pl-4 space-y-2">
                <p>• Transformation efficiency drops significantly when 
                confluence exceeds 82%.</p>
              </div>
            </div>
          </div>

          {/* Right Column - Images and Captions */}
          <div className="space-y-6">
            <div className="text-center">
              <div className="bg-gray-200 h-24 rounded-lg flex items-center justify-center mb-2">
                <span className="text-gray-500 urbanist">Petri dish + glass pot + tray</span>
              </div>
            </div>

            <div className="mt-8">
              <div className="bg-gray-200 h-48 rounded-lg flex items-center justify-center mb-4">
                <span className="text-gray-500 urbanist">Duckweed cultivation setup</span>
              </div>
              
              <p className="text-md text-gray-600 urbanist">
                <strong>Section 2.</strong> (1) Petri dish with sterile duckweed culture 
                kept as a backup. (2) Ø14 cm glass crystallization pot for 
                maintaining a larger amount of duckweed. Always ready 
                for experiments. (3) Plastic tray with liquid medium, 
                used to grow duckweed for weekly experiments.
              </p>
            </div>

            <div className="mt-8 text-center">
              <div className="bg-gray-200 h-32 rounded-lg flex items-center justify-center mb-4">
                <span className="text-gray-500 urbanist">Confluence demonstration</span>
              </div>
              <p className="text-md text-gray-700 urbanist font-medium">
                Duckweed at 50% – 75 = 100% confluence
              </p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-md text-gray-600 urbanist italic">
                You can too – read more on the <span className="underline">CULTIVATOR page</span>.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Workflow Sections */}
      <div className="mt-12 border-t pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Monday Workflow */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900 space-grotesk" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              MONDAY WORKFLOW
            </h2>
            <div className="urbanist text-gray-700 space-y-3 text-md">
              <p>• Split old duckweed from dishes and trays into clones dedicated to specific clones.</p>
              
              <p>• Observe and note the different glass pots and trays with detergent. Most of the time, only have rinsing with distilled water.</p>
              
              <p>• Poor new medium into glass pots and return duckweed to ~30% confluence.</p>
              
              <p>• Pour new medium into half of the trays and return duckweed to ~40% confluence - suitable for transformation on Tue and Wed day, after refreshing (Thursday and Friday).</p>
              
              <p>• Check different glass pots - clean with detergent and return duckweed to ~70% confluence - suitable for transformation on Tue 3rd and 5th day, after refreshing Thursday and Wednesday.</p>
            </div>
          </div>

          {/* Friday Workflow */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900 space-grotesk" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              FRIDAY WORKFLOW
            </h2>
            <div className="urbanist text-gray-700 space-y-3 text-md">
              <p>• Split old duckweed from trays into clones dedicated to specific clones for fresh medium.</p>
              
              <p>• Pour new medium into all trays and return duckweed to ~70% confluence - suitable for transformation on Monday.</p>
              
              <p>• Note: If it's Thu 1st and 2nd day, then refreshing Saturday and Sunday).</p>
              
              <p>• Check different dishes!</p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg mt-4">
              <p className="text-md text-gray-700 urbanist">
                <strong>Transformation:</strong> up to 3 days afterwards at 20to (2) 75% 
                confluence - suitable for transformation up to a week 
                afterwards at 75% (3) 82% confluence - Not longer 
                suitable for transformation.
              </p>
            </div>
          </div>

          {/* Monthly Workflow */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900 space-grotesk" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              MONTHLY WORKFLOW
            </h2>
            <div className="urbanist text-gray-700 space-y-3 text-md">
              <p>• Every month autoclave bottles, Enrols.</p>
              
              <p>• Prepare 2-3 gl of fresh medium: xx with 3 gl Phytagel or 6gl Plant Agar</p>
              
              <p>• Adjust pH to 6.8 with 1M KOH or 1M HCl, then autoclave for 20 minutes at 121°C.</p>
              
              <p>• Pour medium on petri dishes and dishes in flow box while maintaining sterile environment and sterilising.</p>
              
              <p>• Subculture 6 fronds from the 1st start-up plate per clone into the new plates (4 fronds per plate).</p>
              
              <p>• Discard the 1st start-up plate after transfer.</p>
              
              <p>• Put all labels (in 2nd labels) up under for previous subculturing.</p>
              
              <p>• After subculturing!</p>
              
              <p>• If all looks fine in new backup plates are still sterile → GREAT! JOB! ☺ You can discard the old backup plates.</p>
              
              <p>• If duckweed is contaminated → Repeat the subculturing from the old 2nd plate, and this time pay extra attention!</p>
            </div>
          </div>
        </div>
      </div>

      {/* References */}
      <div className="mt-12 border-t pt-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4 space-grotesk" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
          REFERENCES
        </h2>
        <div className="urbanist text-gray-700 text-md space-y-2">
          <p>
            1. Lam, E., Appenroth, K.-J., Sree, K. S., Ecker, J., Wieser, G., Huber, S., ... & Ziegler, P. (2023). The duckweed genomes: annotation of a plant biofactory and biodiversity. Plant Journal, 115, 705-726. doi: 10.1111/tpj.16256
          </p>
          
          <p>
            2. Muranaka, T. & Sheetz, P. (1982). A revised medium for rapid growth rate with duckweed and tobacco cultures. Physiologia Plantarum, 16(1), 473-497.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DuckweedProtocol;