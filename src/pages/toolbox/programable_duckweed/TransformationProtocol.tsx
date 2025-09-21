import React from 'react';

const TransformationProtocol = () =>  {
  return (
    <div className="max-w-6xl mx-auto p-6 bg-white">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-4xl font-bold mb-20" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
          Agrobacterium-mediated transient expression protocol for duckweed
        </h1>
      </div>

      {/* Main content layout */}
      <div className="flex gap-6">
        {/* Left side - Image placeholder */}
        <div className="w-48 flex-shrink-0 sm:block hidden">
          <div className="bg-gray-200 h-64 flex items-center justify-center border">
            <span className="text-gray-500 text-md" style={{ fontFamily: 'Urbanist, sans-serif' }}>
              Image Placeholder
            </span>
          </div>
        </div>

        {/* Right side - Protocol content */}
        <div className="flex-1">
          {/* Introduction */}
          <div className="mb-4 p-3 bg-gray-50 border" style={{ fontFamily: 'Urbanist, sans-serif' }}>
            <p className="text-md">
              This protocol follows and builds on the approach described by Arturo 
              Marí-Ordóñez (Dombey <em>et al.</em>, 2023) from the Gregor Mendel Institute in Vienna.
            </p>
          </div>

          {/* Day 5 to -3 */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-3 bg-gray-100 p-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Day 5 to -3 • PREPARATION OF DUCKWEED
            </h2>
            
            <div className="space-y-3" style={{ fontFamily: 'Urbanist, sans-serif' }}>
              <p className="text-md leading-relaxed">
                <strong>1.1)</strong> Depending on the confluence on trays, split duckweed to new trays with fresh 
                medium or agar. 95% confidence.
              </p>
              
              <p className="text-md leading-relaxed">
                <strong>1.2)</strong> Let fronds grow until ~75% surface coverage before use.
              </p>

              <div className="bg-red-50 border-l-4 border-red-400 p-3">
                <p className="text-md text-red-800">
                  <strong>NOTE 1:</strong> Crowded fronds stop dividing and produce fewer transformed offspring; 
                  spare fronds are fragile and often die during infiltration. ~75% coverage for 
                  robust, actively dividing fronds that are easier to transform.
                </p>
              </div>
            </div>
          </div>

          {/* Day 1-2 */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-3 bg-gray-100 p-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Day 1 - 2 • PREPARATION OF AGROBACTERIUM
            </h2>
            
            <div className="space-y-3" style={{ fontFamily: 'Urbanist, sans-serif' }}>
              <p className="text-md leading-relaxed">
                <strong>1)</strong> From a glycerol stock, inoculate 5 mL LB + <span className="text-red-600 font-semibold">appropriate antibiotics</span>. Grow 
                O/N at 28°C, 200 rpm (<em>keep in mind, this can take up to 16-18 hours</em>).
              </p>
              
              <p className="text-md leading-relaxed">
                <strong>2)</strong> Next day, inoculate 100 mL LB + same antibiotics with 1-1.5ml dilution of O/N 
                culture. Grow until OD₆₀₀ = 1-2.
              </p>

              <ul className="text-md space-y-1 ml-6">
                <li>• 1:500 dilution typically reaches OD₆₀₀ = 0.7 in 12 - 18 hours (depending on your construct)</li>
              </ul>

              <p className="text-md leading-relaxed">
                <strong>3)</strong> Pellet culture by centrifugation (30 min, 3000 g). Leave ~0.1 cm LB above pellet 
                to avoid stress.
              </p>

              <p className="text-md leading-relaxed">
                <strong>4)</strong> Resuspend pellet gently in <span className="font-semibold">AIM</span> (Agrobacterium Infiltration Medium).
              </p>

              <ul className="text-md space-y-1 ml-6">
                <li>• Resuspend to final OD₆₀₀ = 0.7</li>
                <li>• 2-50 ml of Agrobacterium infiltration (OD₆₀₀ = 0.7) results in 3 plates of transformed duckweed (confidence 50-75 %)</li>
              </ul>

              <p className="text-md leading-relaxed">
                <strong>5)</strong> Add acetosyringone to final concentration of 200 μM. Adjust pH to 5.5. 
                Incubate 1 h at 28°C, 100 rpm, protected from light.
              </p>

              <div className="bg-red-50 border-l-4 border-red-400 p-3">
                <p className="text-md text-red-800">
                  <strong>NOTE 2:</strong> Do not let Agrobacterium grow over OD₆₀₀ = 3. Overgrown cells are 
                  stressed and inefficient at T-DNA transfer.
                </p>
              </div>
            </div>
          </div>

            {/* Day 3 */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-3 bg-gray-100 p-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Day 3 • VACUUM INFILTRATION
            </h2>
            
            <div className="space-y-3" style={{ fontFamily: 'Urbanist, sans-serif' }}>
              <p className="text-md leading-relaxed">
                <strong>1)</strong> Just before infiltration, add Silwet L-77 to Agrobacterium solution (final 
                concentration: 0.02%).
              </p>
              
              <p className="text-md leading-relaxed">
                <strong>2)</strong> Transfer fronds into Agrobacterium solution. Apply vacuum (-70 kPa) for 5 - 10 
                minutes (depending on clone - see our vacuum transformation optimization page).
              </p>

              <p className="text-md leading-relaxed">
                <strong>3)</strong> Release vacuum slowly while gently swirling.
              </p>

              <div className="bg-red-50 border-l-4 border-red-400 p-3">
                <p className="text-md text-red-800">
                  <strong>NOTE 3:</strong> Swirling during vacuum infiltration ensures dorsal stomata are exposed 
                  to Agrobacterium solution, but vigorous swirling precipitates the Agrobacterium 
                  and reduces efficiency.
                </p>
              </div>

              <div className="flex gap-4 mt-4">
                <div className="flex-1">
                  <img src="#" alt="Falcon tubes with duckweed fronds in AIM solution with Agrobacterium" className="w-full h-32 object-cover bg-gray-200 border" />
                  <p className="text-sm text-gray-600 mt-1">Falcon tubes with duckweed fronds in AIM solution with Agrobacterium</p>
                </div>
                <div className="flex-1">
                  <img src="#" alt="Vacuum infiltration" className="w-full h-32 object-cover bg-gray-200 border" />
                  <p className="text-sm text-gray-600 mt-1">Vacuum infiltration</p>
                </div>
              </div>
            </div>
          </div>

          {/* Post-infiltration handling */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-3 bg-gray-100 p-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Day 3 • POST-INFILTRATION HANDLING
            </h2>
            
            <div className="space-y-3" style={{ fontFamily: 'Urbanist, sans-serif' }}>
              <p className="text-md leading-relaxed">
                <strong>1)</strong> Split the infiltrated duckweed and Agrobacterium suspension into plates.
              </p>
              
              <p className="text-md leading-relaxed">
                <strong>2)</strong> Add DCMU medium (link to duckweed cultivation protocol) (~25 mL per 
                plate) to dilute AIM.
              </p>

              <p className="text-md leading-relaxed">
                <strong>3)</strong> Do not seal plates.
              </p>

              <div className="bg-red-50 border-l-4 border-red-400 p-3">
                <p className="text-md text-red-800">
                  <strong>NOTE 4:</strong> Unsealed plates allow easier medium changes and microscopy.
                </p>
              </div>
            </div>
          </div>



          {/* Day 4-5 */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-3 bg-gray-100 p-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Day 4 - 5 • CO-CULTIVATION
            </h2>
            
            <div className="space-y-3" style={{ fontFamily: 'Urbanist, sans-serif' }}>
              <p className="text-md leading-relaxed">
                <strong>1)</strong> Incubate plates for 48 h at 21 °C, 16/8 photoperiod, 200 μmol/m²/s light.
              </p>

              <div className="bg-red-50 border-l-4 border-red-400 p-3">
                <p className="text-md text-red-800">
                  <strong>NOTE 5:</strong> 48 h is optimal. Shorter → low transfer. Longer → Agrobacterium 
                  overgrowth and kills fronds.
                </p>
              </div>
            </div>
          </div>

          {/* Day 6 */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-3 bg-gray-100 p-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Day 6 • ELIMINATING AGROBACTERIUM
            </h2>
            
            <div className="space-y-3" style={{ fontFamily: 'Urbanist, sans-serif' }}>
              <p className="text-md leading-relaxed">
                <strong>1)</strong> Transfer fronds to Duckweed Post-Infiltration Medium (<span className="text-red-600 font-semibold">DPIM</span>).
              </p>
              
              <p className="text-md leading-relaxed">
                <strong>2)</strong> Incubate at 21 °C, 16/8 photoperiod, 200 μmol/m²/s light.
              </p>

              <p className="text-md leading-relaxed">
                <strong>3)</strong> Refresh medium every 5 days.
              </p>
            </div>
          </div>

          {/* Day 7-20 */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-3 bg-gray-100 p-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Day 7-20 • SIGNAL EVALUATION
            </h2>
            
            <div className="space-y-3" style={{ fontFamily: 'Urbanist, sans-serif' }}>
              <p className="text-md leading-relaxed">
                <strong>1)</strong> Evaluate transient expression at 6th, 12th, and 15th day post infiltration 
                (dpi). When checking expression, always refresh the medium by separating 
                the old and adding new.
              </p>

              <ul className="text-md space-y-2 ml-6">
                <li>• <strong>6 dpi:</strong> usually, a strong expression is already visible</li>
                <li>• <strong>12 dpi:</strong> expression is usually quite strong but may start fading</li>
                <li>• <strong>18 dpi:</strong> expression is still visible, but noticeably faded</li>
              </ul>

              <p className="text-md leading-relaxed">
                <strong>2)</strong> Even if no signal is visible at day 6, keep the plates until at least day 12 
                before discarding. Both the strength of expression and the timing of its 
                appearance depend on the construct design. Expression strength in the 
                position of the marker relative to <strong>P-LAT</strong>-1A linkers.
              </p>
            </div>
          </div>
    


        </div>
      </div>
    </div>
  );
}

export default TransformationProtocol;