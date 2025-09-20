import React from 'react';

const DuckweedSafety = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 bg-white">
      {/* Main Title */}
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-900" style={{fontFamily: 'Space Grotesk, sans-serif'}}>
        Safety
      </h1>
      
      {/* Safety Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-800" style={{fontFamily: 'Space Grotesk, sans-serif'}}>
          Duckweed Safety and Containment
        </h2>
        
        <div className="space-y-4 text-gray-700 leading-relaxed" style={{fontFamily: 'Urbanist, sans-serif'}}>
          <p>
            Duckweed is known for its extremely fast growth rate and, some species, have 
            been even recognized as invasive, causing damage to freshwater ecosystems (1). 
            Aware of this risk, we treated duckweed in our project with a very high level of 
            caution.
          </p>
          
          <p>
            To minimize any chance of accidental release, all experiments were performed 
            only in contained environments – either in the phytotron or greenhouse facilities 
            of Masaryk University. We used dedicated tools (sieves, pipettes, containers) 
            exclusively for duckweed handling. After each experiment, all plant material was 
            collected and autoclaved before disposal.
          </p>
          
          <p>
            We engaged with Prof. Andrew D. Hanson about strategies for long-term biosafety 
            and identified autotrophy as the most feasible safeguard. Among possible targets 
            for a knock-out, the THI4 gene stood out as the best option due to the low cost of 
            its substrate, thiamine. As a result, duckweed that is not supplemented with 
            thiamine would be unable to survive outside of controlled cultivation systems.
          </p>
        </div>
      </div>
      
      {/* Image Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Top Row - Single Large Image */}
        <div className="md:col-span-2">
          <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
            <div className="text-center text-gray-500">
              <div className="w-16 h-16 mx-auto mb-2 bg-gray-300 rounded flex items-center justify-center">
                <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="text-sm">Laboratory Environment Image</p>
            </div>
          </div>
        </div>
        
        {/* Bottom Left - Video Placeholder */}
        <div>
          <div className="bg-gray-800 rounded-lg h-48 flex items-center justify-center relative">
            <div className="text-center text-white">
              <div className="w-12 h-12 mx-auto mb-2 bg-gray-600 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
              <p className="text-sm">Video Content</p>
            </div>
            {/* Video Controls Bar */}
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-2 rounded-b-lg">
              <div className="flex items-center justify-between text-white text-xs">
                <span>0:00</span>
                <div className="flex-1 mx-2 h-1 bg-gray-600 rounded">
                  <div className="h-1 bg-red-500 rounded w-1/4"></div>
                </div>
                <span>2:30</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Right - Team Photo */}
        <div>
          <div className="bg-gray-200 rounded-lg h-48 flex items-center justify-center">
            <div className="text-center text-gray-500">
              <div className="w-16 h-16 mx-auto mb-2 bg-gray-300 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <p className="text-sm">Team Photo</p>
              <p className="text-xs text-gray-400 mt-1">Research Team</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer Reference */}
      <div className="mt-6 pt-4 border-t border-gray-200">
        <p className="text-sm text-gray-500" style={{fontFamily: 'Urbanist, sans-serif'}}>
          (1) Reference citation placeholder
        </p>
      </div>

      {/* CRISPR Section */}
      <div className="mt-12 mb-8">
        <div className="space-y-4 text-gray-700 leading-relaxed" style={{fontFamily: 'Urbanist, sans-serif'}}>
          <p>
            Using CRISPR (2), we designed <strong>sgRNAs targeting THI4</strong> and in the future, we 
            are planning to implement the knock-out using our duckweed-specific CRISPR 
            construct pB005.
          </p>
        </div>

        {/* CRISPR Table */}
        <div className="mt-6 overflow-x-auto">
          <table className="w-full border border-gray-300 rounded-lg overflow-hidden">
            <tbody className="text-sm" style={{fontFamily: 'Urbanist, sans-serif'}}>
              <tr className="bg-gray-50">
                <td className="px-4 py-3 border-r border-gray-300 font-semibold">eTHI4_KO1_fw</td>
                <td className="px-4 py-3 font-mono text-xs">5' GTTGAAGCTGCCTGGACAACTTTGA 3'</td>
              </tr>
              <tr>
                <td className="px-4 py-3 border-r border-gray-300 font-semibold">eTHI4_KO1_rev</td>
                <td className="px-4 py-3 font-mono text-xs">5' AAACTCAAAGTTGCCAGGCACGTT 3'</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-4 py-3 border-r border-gray-300 font-semibold">eTHI4_KO2_fw</td>
                <td className="px-4 py-3 font-mono text-xs">5' GTTGGTGATTCACCCTCGGACAGAA 3'</td>
              </tr>
              <tr>
                <td className="px-4 py-3 border-r border-gray-300 font-semibold">eTHI4_KO2_rev</td>
                <td className="px-4 py-3 font-mono text-xs">5' AAACTCTGTCCGAGGGTGAATCAC 3'</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-4 py-3 border-r border-gray-300 font-semibold">eTHI4_KO3_fw</td>
                <td className="px-4 py-3 font-mono text-xs">5' GTTGGAAGATCCATGCTGGTGATA 3'</td>
              </tr>
              <tr>
                <td className="px-4 py-3 border-r border-gray-300 font-semibold">eTHI4_KO1_rev</td>
                <td className="px-4 py-3 font-mono text-xs">5' AAACCAGATACACGCAGATGTACT 3'</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-6 space-y-4 text-gray-700 leading-relaxed" style={{fontFamily: 'Urbanist, sans-serif'}}>
          <p>
            Even though we were not permitted, to test our engineered duckweed on animals 
            (cows), we consulted with an expert in bovine nutrition from the Department of 
            Biochemistry at Masaryk University. Dr. Ludmila Křížová to understand what 
            aspects of our duckweed safety should be considered. We also discussed what 
            tests would be necessary before any potential future trials on cows. In order to 
            prevent possible harm from unexpected metabolic byproducts resulting from the 
            genetic engineering of duckweed.
          </p>
        </div>
      </div>

      {/* Safety in the Laboratory Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-800" style={{fontFamily: 'Space Grotesk, sans-serif'}}>
          Safety in the Laboratory
        </h2>
        
        <div className="space-y-4 text-gray-700 leading-relaxed" style={{fontFamily: 'Urbanist, sans-serif'}}>
          <p>
            We have been trained by lab technician, greenhouse specialist, and a senior 
            supervisor (GMO biosafety officer prof. Jiří Doškář) in the proper disposal of 
            genetically modified plants and bacteria to prevent their release into the natural 
            environment, including the use of GMO-certified sinks and autoclaving all plant 
            material.
          </p>
          
          <p>
            We followed good laboratory practices (GLP), including sterilising benches before 
            and after use with 70 % ethanol and sterilising flow-boxes with UV light after each 
            use. Access to laboratory equipment was only <strong>granted after hands-on 
            instruction by experienced</strong>
          </p>
        </div>

        {/* Laboratory Image */}
        <div className="mt-6">
          <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
            <div className="text-center text-gray-500">
              <div className="w-16 h-16 mx-auto mb-2 bg-gray-300 rounded flex items-center justify-center">
                <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 7.172V5L8 4z" />
                </svg>
              </div>
              <p className="text-sm">Laboratory Safety Training</p>
              <p className="text-xs text-gray-400 mt-1">GMO Biosafety Procedures</p>
            </div>
          </div>
        </div>
      </div>


      {/* Working with Bacteria Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-800" style={{fontFamily: 'Space Grotesk, sans-serif'}}>
          Working with Bacteria
        </h2>
        
        <div className="space-y-4 text-gray-700 leading-relaxed" style={{fontFamily: 'Urbanist, sans-serif'}}>
          <p>
            We worked with standard, non-pathogenic strains of <em>Escherichia coli</em> (DH5α, 
            Stellar) and <em>Agrobacterium tumefaciens</em> (GV101 and EHA105), all classified as 
            Biosafety Level 1 (BSL-1). These strains are widely used for cloning and plasmid 
            preparation and pose minimal risk to human health or the environment.
          </p>
          
          <p>
            All handling was conducted under containment in <strong>GMO-approved laboratories</strong> 
            (Masaryk University and CEITEC), following Czech Act No. 78/2004 on GMOs. 
            Every team member signed a safety and GMO disclosure agreement prepared by 
            our PI, Assoc. Prof. Pavel Dvořák.
          </p>
        </div>
      </div>

      {/* Waste Disposal Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-800" style={{fontFamily: 'Space Grotesk, sans-serif'}}>
          Waste Disposal
        </h2>
        
        <div className="space-y-4 text-gray-700 leading-relaxed" style={{fontFamily: 'Urbanist, sans-serif'}}>
          <p>
            All biological and chemical waste generated by our experiments was handled 
            following institutional and national regulations. Contaminated materials, including 
            plasticsl cultures, and consumables, were <strong>autoclaved before to disposal</strong>. Liquid 
            cultures were either autoclaved or inactivated using appropriate disinfectants 
            before disposal.
          </p>
          
          <p>
            Professional waste management staff from the Microbial Bioengineering 
            Laboratory at Masaryk University, namely Mrs. Karolína Gemá, oversaw the 
            collection, autoclaving, and disposal of waste, ensuring that no experimental 
            material from the laboratory was left untreated.
          </p>
          
          <p>
            We encourage you to read more about the safety precautions we took and 
            professionals we consulted in our <a href="#" className="text-blue-600 hover:text-blue-800 underline">Safety Form</a>.
          </p>
        </div>
      </div>

      {/* Sources Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-800" style={{fontFamily: 'Space Grotesk, sans-serif'}}>
          Sources
        </h2>
        
        <div className="space-y-2 text-gray-700" style={{fontFamily: 'Urbanist, sans-serif'}}>
          <div className="flex">
            <span className="mr-3">(1)</span>
            <a 
              href="https://doi.org/10.1016/j.aquabot.2018.07.004" 
              className="text-blue-600 hover:text-blue-800 underline break-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://doi.org/10.1016/j.aquabot.2018.07.004
            </a>
          </div>
          <div className="flex">
            <span className="mr-3">(2)</span>
            <a 
              href="https://doi.org/10.1093/nar/gky354" 
              className="text-blue-600 hover:text-blue-800 underline break-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://doi.org/10.1093/nar/gky354
            </a>
          </div>
        </div>
      </div>

      {/* Footer Reference */}
      <div className="mt-6 pt-4 border-t border-gray-200">
        <div className="space-y-1 text-sm text-gray-500" style={{fontFamily: 'Urbanist, sans-serif'}}>
          <p>(1) Reference citation placeholder</p>
          <p>(2) CRISPR reference citation placeholder</p>
        </div>
      </div>  



    </div>
  );
};

export default DuckweedSafety;