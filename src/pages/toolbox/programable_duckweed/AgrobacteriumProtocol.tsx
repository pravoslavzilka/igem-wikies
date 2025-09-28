import React, {useState} from 'react';
import TextModal, {textSlide} from '../../../components/ui/TextModal';


const bacteriaAntibiotic: textSlide[] = [ 
    {
        src: "https://static.igem.wiki/teams/5642/images/how/cultivator/watercycle/water-cycle-schema-old.webp",
        title: "Appropriate antibiotics",
        description: [
            "A.tumefaciens EHA105 : use rifampicin (50 μg/ml) and streptomycin (50 μg/ml)",
            "A.tumefaciens GV3101 : use rifampicin (50 μg/ml) and gentamicin (100 μg/ml)",
            "Do not forget to also add antibiotics specific for your binary vector.",

        ],
    },
];


export default function AgrobacteriumProtocol() {
  const [isOpenAntibioticSlides, setIsOpenAntibioticSlides] = useState(false);
  return (
    <div className="max-w-6xl mx-auto p-6 bg-white text-lg text-justify">
      
      
      <div className="p-8 ">
        <h1 className="text-4xl font-bold text-gray-900 mb-6" style={{fontFamily: 'Space Grotesk'}}>
          Electroporation of Agrobacterium protocol
        </h1>
        
        <div className="bg-gray-100 border-l-4 border-l-indigo-600 p-4 mb-8">
          <p className="text-gray-800 leading-relaxed" style={{fontFamily: 'Urbanist'}}>
            Once your plasmid has been cloned into a binary vector carrying the desired DNA within the T-DNA region, the next step is to introduce it into <em> Agrobacterium tumefaciens</em>. This bacterium is used as a delivery system, transferring the T-DNA into the plant genome.
          </p>
        </div>

        <div className="space-y-8">
          {/* Step 1 */}
          <div className="bg-white p-6 border border-gray-300 border-l-4 border-l-green-600">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4" style={{fontFamily: 'Space Grotesk'}}>
              Step 1: Thawing cells & DNA addition
            </h2>
            <div className="space-y-2" style={{fontFamily: 'Urbanist'}}>
              <p className="text-gray-700">1.1) Thaw 50 µL electrocompetent Agrobacterium on ice. Thaw 50 µL cells per reaction in 1.5 mL tube.</p>
              <p className="text-gray-700">1.2) Add 1–5 µL DNA (≤100 ng) to cells, mix gently by pipetting</p>
              <p className="text-gray-700">1.3) Incubate 5 min on ice.</p>
              <div className="bg-gray-100 border border-gray-300 p-3 mt-4">
                <p className="text-gray-800 font-medium">
                  <strong>NOTE 1:</strong> Avoid vortexing — rough mixing reduces competency.
                </p>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-white p-6 border border-gray-300 border-l-4 border-l-blue-600">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4" style={{fontFamily: 'Space Grotesk'}}>
              Step 2: Electroporation
            </h2>
            <div className="space-y-2 mb-4" style={{fontFamily: 'Urbanist'}}>
              <p className="text-gray-700">2.1) Transfer cells into a sterile pre-chilled 2 mm electrocuvette.</p>
              <p className="text-gray-700">2.2) Dry the outside of cuvette carefully. Place into electroporator.</p>
              <p className="text-gray-700">2.3) Electroporator settings:</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="bg-gray-50 p-4 border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-2" style={{fontFamily: 'Space Grotesk'}}>Settings:</h3>
                <ul className="space-y-1 text-gray-700" style={{fontFamily: 'Urbanist'}}>
                  <li>• Voltage = 2500 V</li>
                  <li>• Capacitance = 25 µF</li>
                  <li>• Resistance = 400 Ω</li>
                  <li>• Cuvette gap = 2 mm</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-4 border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-2" style={{fontFamily: 'Space Grotesk'}}>Expected Results:</h3>
                <ul className="space-y-1 text-gray-700" style={{fontFamily: 'Urbanist'}}>
                  <li>2.4) Push "PULSE" and monitor the display:</li>
                  <li>• Successful pulse — 9–10 ms</li>
                  <li>• Short circuit — loud "bang"; cells are dead, restart with fresh aliquot</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-gray-100 border border-gray-300 p-3">
              <p className="text-gray-800" style={{fontFamily: 'Urbanist'}}>
                <strong>NOTE 2:</strong> Residual salts from DNA prep often cause short circuits. If this happens, ethanol precipitate DNA before retrying.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-white p-6 border border-gray-300 border-l-4 border-l-purple-600">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4" style={{fontFamily: 'Space Grotesk'}}>
              Step 3: Recovery
            </h2>
            <div className="space-y-2 mb-4" style={{fontFamily: 'Urbanist'}}>
              <p className="text-gray-700">3.1) Immediately add 1 mL sterile LB (preheated to 28°C) directly to the cuvette after pulsing.</p>
              <p className="text-gray-700">3.2) Transfer contents into a 1.5 mL tube.</p>
              <p className="text-gray-700">3.3) Incubate 2 h at 28°C, 300 rpm.</p>
            </div>
            
            <div className="bg-gray-100 border border-gray-300 p-3">
              <p className="text-gray-800" style={{fontFamily: 'Urbanist'}}>
                <strong>NOTE 3:</strong> Add LB after each electroporation, not at the end of a batch — cells die if left in fresh recovery medium.
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="bg-white p-6 border border-gray-300 border-l-4 border-l-orange-600">

            <TextModal
            slides={bacteriaAntibiotic}
            isOpen={isOpenAntibioticSlides}
            onClose={() => setIsOpenAntibioticSlides(false)}
            />

            <h2 className="text-2xl font-semibold text-gray-900 mb-4" style={{fontFamily: 'Space Grotesk'}}>
              Step 4: Plating
            </h2>
            <div className="space-y-2 mb-4" style={{fontFamily: 'Urbanist'}}>
              <p className="text-gray-700">4.1) Before recovery, prepare LB agar plates with <button onClick={() => setIsOpenAntibioticSlides(true)} className=" text-bold"><span className='text-green-600'><b>appropriate antibiotics</b></span></button>.</p>
              <p className="text-gray-700">4.2) After recovery, briefly vortex cells.</p>
              <p className="text-gray-700">4.3) Plate 50–200 µL (commonly 100 µL) and spread using sterile glass beads.</p>
            </div>
            
            <div className="bg-gray-100 border border-gray-300 p-3 mb-4">
              <p className="text-gray-800" style={{fontFamily: 'Urbanist'}}>
                <strong>NOTE 4:</strong> Make at least 2 dilutions — too dense plates delay your experiment by 2 days.
              </p>
            </div>
          </div>

          {/* Step 5 */}
          <div className="bg-white p-6 border border-gray-300 border-l-4 border-l-teal-600">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4" style={{fontFamily: 'Space Grotesk'}}>
              Step 5: Cuvette cleaning
            </h2>
            <div className="space-y-2" style={{fontFamily: 'Urbanist'}}>
              <p className="text-gray-700">5.1) Wash cuvettes with distilled water.</p>
              <p className="text-gray-700">5.2) Store in ethanol overnight.</p>
              <p className="text-gray-700">5.3) Sterilize under UV for 30 min before next use.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}