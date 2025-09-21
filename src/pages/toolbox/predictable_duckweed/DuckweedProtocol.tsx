import React from 'react';

const DuckweedProtocol = () => {
  return (
    <div className="max-w-6xl mx-auto p-8 bg-white" style={{ fontFamily: 'Urbanist, sans-serif' }}>
      
      
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6 space-grotesk" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
          Duckweed cultivation protocol
        </h1>
        
        <div className="bg-gray-50 p-6 rounded-lg text-left urbanist">
          <p className="text-gray-700 leading-relaxed mb-4">
            Duckweed cultivation has picked up many decades as far as the definitive use becomes most successful. It's 
            essential to always have fresh plants ready for experiments - that's why we developed a strategy for small-scale cultivation 
            in the lab.
          </p>
          <p className="text-gray-700 leading-relaxed">
            The protocol was greatly inspired by the work of our advisor, 
            Dr. Ottoleer, and Sheerez A real-life experienced knowledge!
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column */}
        <div className="space-y-8">
          {/* Cultivation Conditions */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 space-grotesk">
              CULTIVATION CONDITIONS
            </h2>
            <div className="bg-gray-50 p-4 rounded-lg urbanist">
              <p className="text-gray-700">
                Ideal cultivation conditions are 23 ± 2°C, under a PPFD light 
                fluorescent of ~100 μmol m⁻² s⁻¹ with an intensity of 500 umol/m²/s.
              </p>
            </div>
          </div>

          {/* Growth Medium */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 space-grotesk">
              GROWTH MEDIUM
            </h2>
            <div className="urbanist text-gray-700 space-y-3">
              <p>
                We grow duckweed hydroponically in duckweed cultivation 
                medium. The recipe consists of base macro- and micronutrient 
                stock solutions L M, III and IV, with pH 5.2 and adjusting pH to 
                6.8 ± 0.7 using 1M KOH or 1M HCl.
              </p>
            </div>

            {/* Stock Solutions Table */}
            <div className="mt-6">
              <div className="bg-white border rounded-lg overflow-hidden">
                <table className="w-full text-sm urbanist">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-4 py-3 text-left font-medium text-gray-900">Stock solutions (1 L)</th>
                      <th className="px-4 py-3 text-left font-medium text-gray-900">g/L</th>
                      <th className="px-4 py-3 text-left font-medium text-gray-900">mM</th>
                      <th className="px-4 py-3 text-left font-medium text-gray-900">Final</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-4 py-3 font-medium">I</td>
                      <td className="px-4 py-3"></td>
                      <td className="px-4 py-3"></td>
                      <td className="px-4 py-3"></td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-4 py-3">KNO₃</td>
                      <td className="px-4 py-3">67.35</td>
                      <td className="px-4 py-3">667</td>
                      <td className="px-4 py-3">6.67</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3">Ca(NO₃)₂·4H₂O</td>
                      <td className="px-4 py-3">47.22</td>
                      <td className="px-4 py-3">200</td>
                      <td className="px-4 py-3">2.00</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-4 py-3">II</td>
                      <td className="px-4 py-3"></td>
                      <td className="px-4 py-3"></td>
                      <td className="px-4 py-3"></td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3">KH₂PO₄</td>
                      <td className="px-4 py-3">0.0816</td>
                      <td className="px-4 py-3">1</td>
                      <td className="px-4 py-3">0.60</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-4 py-3">MgSO₄·7H₂O</td>
                      <td className="px-4 py-3">0.4416</td>
                      <td className="px-4 py-3">3</td>
                      <td className="px-4 py-3">1.80</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3">III</td>
                      <td className="px-4 py-3"></td>
                      <td className="px-4 py-3"></td>
                      <td className="px-4 py-3"></td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-4 py-3">Na₂MoO₄·2H₂O</td>
                      <td className="px-4 py-3">1.21</td>
                      <td className="px-4 py-3">5</td>
                      <td className="px-4 py-3">0.005</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3">H₃BO₃</td>
                      <td className="px-4 py-3">12.4</td>
                      <td className="px-4 py-3">200</td>
                      <td className="px-4 py-3">0.20</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <p className="text-sm text-gray-600 mt-2 urbanist">
                <strong>Table 1.</strong> Chemical composition of the stock solutions from 
                which DCMM is prepared. Keep stock solutions in fridge.
              </p>
            </div>
          </div>

          {/* Material & Equipment */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 space-grotesk">
              MATERIAL & EQUIPMENT NEEDED
            </h2>
            <ul className="space-y-2 urbanist text-gray-700">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Petri dishes (6.7cm)
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                X-well plates (6-well ~1L, 24-well, Ø 16cm)
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Greenhouse compartments (if treatment are needed)
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                mesh sieve, one for each individual clone to avoid cross-contamination
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                pumps for mixing media
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Laminar hood
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
          <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
            <span className="text-gray-500 urbanist">Image Placeholder: Duckweed cultivation setup</span>
          </div>

          {/* Figure 1 */}
          <div className="bg-gray-200 h-48 rounded-lg flex items-center justify-center mb-4">
            <span className="text-gray-500 urbanist">Image Placeholder: IDEM Stock cultivation</span>
          </div>
          
          <p className="text-sm text-gray-600 urbanist">
            <strong>Figure 1.</strong> The end of IDEM Stock duckweed 
            cultivation at the end of summer should look like this 
            "landscape". Fortunately, by then our CULTIVATOR was 
            learned, but you are advised to autonomous cultivation.
          </p>

          {/* Cultivation Hierarchy */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 space-grotesk">
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
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-200 h-32 rounded-lg flex items-center justify-center">
              <span className="text-gray-500 text-xs urbanist text-center">Petri dish setup</span>
            </div>
            <div className="bg-gray-200 h-32 rounded-lg flex items-center justify-center">
              <span className="text-gray-500 text-xs urbanist text-center">Glass panel + tray</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DuckweedProtocol;