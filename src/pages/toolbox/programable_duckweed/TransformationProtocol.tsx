import React from 'react';

const TransformationProtocol = () =>  {
  return (
    <div className="max-w-6xl mx-auto p-6 bg-white">
      
      <div className="p-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-6" style={{fontFamily: 'Space Grotesk'}}>
          Agrobacterium-mediated transient expression protocol for duckweed
        </h1>
        
        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-8">
          <p className="text-gray-800 leading-relaxed" style={{fontFamily: 'Urbanist'}}>
            This protocol follows and builds on the approach described by Arturo 
            Marí-Ordóñez (Dombey <em>et al.</em>, 2023) from the Gregor Mendel Institute in Vienna.
          </p>
        </div>


      <div className='grid grid-cols-1 md:grid-cols-4 gap-4' >

        <div className='col-span-1 hidden md:block'>
          <img src="https://static.igem.wiki/teams/5642/images/toolbox/transformationprotocol/transformation-protocol-copy.webp" alt="Transformation Protocol Overview" className="w-full h-auto rounded-lg" />
        </div>

        <div className='col-span-3'>
        <div className="space-y-8">
          {/* Day 5 to -3 */}
          <div className="bg-white p-6 border border-gray-300 border-l-4 border-l-green-600">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4" style={{fontFamily: 'Space Grotesk'}}>
              Day 5 to -3 • PREPARATION OF DUCKWEED
            </h2>
            <div className="space-y-2" style={{fontFamily: 'Urbanist'}}>
              <p className="text-gray-700"><strong>1.1)</strong> Depending on the confluence on trays, split duckweed to new trays with fresh 
                medium or agar. 95% confidence.</p>
              <p className="text-gray-700"><strong>1.2)</strong> Let fronds grow until ~75% surface coverage before use.</p>
              <div className="bg-red-50 border border-red-300 p-3 mt-4">
                <p className="text-red-800 font-medium">
                  <strong>NOTE 1:</strong> Crowded fronds stop dividing and produce fewer transformed offspring; 
                  spare fronds are fragile and often die during infiltration. ~75% coverage for 
                  robust, actively dividing fronds that are easier to transform.
                </p>
              </div>
            </div>
          </div>

          {/* Day 1-2 */}
          <div className="bg-white p-6 border border-gray-300 border-l-4 border-l-blue-600">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4" style={{fontFamily: 'Space Grotesk'}}>
              Day 1 - 2 • PREPARATION OF AGROBACTERIUM
            </h2>
            <div className="space-y-2" style={{fontFamily: 'Urbanist'}}>
              <p className="text-gray-700"><strong>1)</strong> From a glycerol stock, inoculate 5 mL LB + <span className="text-red-600 font-semibold">appropriate antibiotics</span>. Grow 
                O/N at 28°C, 200 rpm (<em>keep in mind, this can take up to 16-18 hours</em>).</p>
              <p className="text-gray-700"><strong>2)</strong> Next day, inoculate 100 mL LB + same antibiotics with 1-1.5ml dilution of O/N 
                culture. Grow until OD₆₀₀ = 1-2.</p>
              <ul className="text-gray-700 space-y-1 ml-6 list-disc">
                <li>1:500 dilution typically reaches OD₆₀₀ = 0.7 in 12 - 18 hours (depending on your construct)</li>
              </ul>
              <p className="text-gray-700"><strong>3)</strong> Pellet culture by centrifugation (30 min, 3000 g). Leave ~0.1 cm LB above pellet 
                to avoid stress.</p>
              <p className="text-gray-700"><strong>4)</strong> Resuspend pellet gently in <span className="font-semibold">AIM</span> (Agrobacterium Infiltration Medium).</p>
              <ul className="text-gray-700 space-y-1 ml-6 list-disc">
                <li>Resuspend to final OD₆₀₀ = 0.7</li>
                <li>2-50 ml of Agrobacterium infiltration (OD₆₀₀ = 0.7) results in 3 plates of transformed duckweed (confidence 50-75 %)</li>
              </ul>
              <p className="text-gray-700"><strong>5)</strong> Add acetosyringone to final concentration of 200 μM. Adjust pH to 5.5. 
                Incubate 1 h at 28°C, 100 rpm, protected from light.</p>
              <div className="bg-red-50 border border-red-300 p-3 mt-4">
                <p className="text-red-800 font-medium">
                  <strong>NOTE 2:</strong> Do not let Agrobacterium grow over OD₆₀₀ = 3. Overgrown cells are 
                  stressed and inefficient at T-DNA transfer.
                </p>
              </div>
            </div>
          </div>

          {/* Day 3 - Vacuum Infiltration */}
          <div className="bg-white p-6 border border-gray-300 border-l-4 border-l-purple-600">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4" style={{fontFamily: 'Space Grotesk'}}>
              Day 3 • VACUUM INFILTRATION
            </h2>
            <div className="space-y-2" style={{fontFamily: 'Urbanist'}}>
              <p className="text-gray-700"><strong>1)</strong> Just before infiltration, add Silwet L-77 to Agrobacterium solution (final 
                concentration: 0.02%).</p>
              <p className="text-gray-700"><strong>2)</strong> Transfer fronds into Agrobacterium solution. Apply vacuum (-70 kPa) for 5 - 10 
                minutes (depending on clone - see our vacuum transformation optimization page).</p>
              <p className="text-gray-700"><strong>3)</strong> Release vacuum slowly while gently swirling.</p>
              <div className="bg-red-50 border border-red-300 p-3 mt-4">
                <p className="text-red-800 font-medium">
                  <strong>NOTE 3:</strong> Swirling during vacuum infiltration ensures dorsal stomata are exposed 
                  to Agrobacterium solution, but vigorous swirling precipitates the Agrobacterium 
                  and reduces efficiency.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <div className="bg-gray-50 p-4 border border-gray-200">
                  <div className=" ">
                    <img src="https://static.igem.wiki/teams/5642/images/toolbox/transformationprotocol/duckweed-08356-min.webp" alt="Vacuum Infiltration Setup" className="h-full mb-4 rounded-lg"/>
                  </div>
                  <p className="text-sm text-gray-600">Falcon tubes with duckweed fronds in AIM solution with Agrobacterium</p>
                </div>
                <div className="bg-gray-50 p-4 border border-gray-200">
                  <div className=" ">
                    <img src="https://static.igem.wiki/teams/5642/images/toolbox/transformationprotocol/duckweed-08365-min.webp" alt="Vacuum Infiltration Setup" className="h-full mb-4 rounded-lg"/>
                  </div>
                  <p className="text-sm text-gray-600">Vacuum infiltration</p>
                </div>
              </div>
            </div>
          </div>

          {/* Day 3 - Post-infiltration */}
          <div className="bg-white p-6 border border-gray-300 border-l-4 border-l-orange-600">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4" style={{fontFamily: 'Space Grotesk'}}>
              Day 3 • POST-INFILTRATION HANDLING
            </h2>
            <div className="space-y-2" style={{fontFamily: 'Urbanist'}}>
              <p className="text-gray-700"><strong>1)</strong> Split the infiltrated duckweed and Agrobacterium suspension into plates.</p>
              <p className="text-gray-700"><strong>2)</strong> Add DCMU medium (link to duckweed cultivation protocol) (~25 mL per 
                plate) to dilute AIM.</p>
              <p className="text-gray-700"><strong>3)</strong> Do not seal plates.</p>
              <div className="bg-red-50 border border-red-300 p-3 mt-4">
                <p className="text-red-800 font-medium">
                  <strong>NOTE 4:</strong> Unsealed plates allow easier medium changes and microscopy.
                </p>
              </div>
            </div>
          </div>

          {/* Day 4-5 */}
          <div className="bg-white p-6 border border-gray-300 border-l-4 border-l-teal-600">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4" style={{fontFamily: 'Space Grotesk'}}>
              Day 4 - 5 • CO-CULTIVATION
            </h2>
            <div className="space-y-2" style={{fontFamily: 'Urbanist'}}>
              <p className="text-gray-700"><strong>1)</strong> Incubate plates for 48 h at 21 °C, 16/8 photoperiod, 200 μmol/m²/s light.</p>
              <div className="bg-red-50 border border-red-300 p-3 mt-4">
                <p className="text-red-800 font-medium">
                  <strong>NOTE 5:</strong> 48 h is optimal. Shorter → low transfer. Longer → Agrobacterium 
                  overgrowth and kills fronds.
                </p>
              </div>
            </div>
          </div>

          {/* Day 6 */}
          <div className="bg-white p-6 border border-gray-300 border-l-4 border-l-indigo-600">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4" style={{fontFamily: 'Space Grotesk'}}>
              Day 6 • ELIMINATING AGROBACTERIUM
            </h2>
            <div className="space-y-2" style={{fontFamily: 'Urbanist'}}>
              <p className="text-gray-700"><strong>1)</strong> Transfer fronds to Duckweed Post-Infiltration Medium (<span className="text-red-600 font-semibold">DPIM</span>).</p>
              <p className="text-gray-700"><strong>2)</strong> Incubate at 21 °C, 16/8 photoperiod, 200 μmol/m²/s light.</p>
              <p className="text-gray-700"><strong>3)</strong> Refresh medium every 5 days.</p>
            </div>
          </div>

          {/* Day 7-20 */}
          <div className="bg-white p-6 border border-gray-300 border-l-4 border-l-emerald-600">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4" style={{fontFamily: 'Space Grotesk'}}>
              Day 7-20 • SIGNAL EVALUATION
            </h2>
            <div className="space-y-2" style={{fontFamily: 'Urbanist'}}>
              <p className="text-gray-700"><strong>1)</strong> Evaluate transient expression at 6th, 12th, and 15th day post infiltration 
                (dpi). When checking expression, always refresh the medium by separating 
                the old and adding new.</p>
              <ul className="text-gray-700 space-y-1 ml-6 list-disc">
                <li><strong>6 dpi:</strong> usually, a strong expression is already visible</li>
                <li><strong>12 dpi:</strong> expression is usually quite strong but may start fading</li>
                <li><strong>18 dpi:</strong> expression is still visible, but noticeably faded</li>
              </ul>
              <p className="text-gray-700"><strong>2)</strong> Even if no signal is visible at day 6, keep the plates until at least day 12 
                before discarding. Both the strength of expression and the timing of its 
                appearance depend on the construct design. Expression strength in the 
                position of the marker relative to <strong>P-LAT</strong>-1A linkers.</p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
    </div>
  );
}

export default TransformationProtocol;