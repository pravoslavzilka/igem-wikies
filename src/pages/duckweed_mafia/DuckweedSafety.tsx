import React from 'react';
import References from '../../components/References';
import A from "../../A.tsx";

const DuckweedSafety = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 bg-white text-lg">
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
            <p>
              <span style={{ fontWeight: 400 }}>Duckweed is known for its extremely </span>
              <strong>fast growth rate </strong>
              <span style={{ fontWeight: 400 }}>
                 and, some species have been even recognized as <b>invasive</b>, causing damage
                to freshwater ecosystems [1]. Aware of the risks, we treated duckweed in our
                project with a very high level of caution.
              </span>
            </p>

          </p>
          
          <p>
            <span style={{ fontWeight: 400 }}>
              To minimize any chance of accidental release, all experiments were performed
              only in contained environments – either in the{" "}
            </span>
            <strong>phytotron</strong>
            <span style={{ fontWeight: 400 }}> or </span>
            <strong>greenhouse facilities</strong>
            <span style={{ fontWeight: 400 }}>
              {" "}
              of Masaryk University. We used dedicated tools (sieves, pipettes,
              containers) exclusively for duckweed handling. After each experiment,{" "}
            </span>
            <strong>all plant material was collected and autoclaved</strong>
            <span style={{ fontWeight: 400 }}> before disposal. </span>
          </p>

          
         <p>
          <span style={{ fontWeight: 400 }}>
            We engaged with Prof. Andrew D. Hanson about strategies for long-term
            biosafety and identified auxotrophy as the most feasible safeguard. Among
            possible targets for a knock-out, the thiamine synthase THI4 gene stood out as the best option
            due to the low cost of its product, thiamine. As a result,{" "}
          </span>
          <strong>
            mutant line lacking thiamine synthase would be unable to survive
            outside of controlled cultivation systems if not supplementeed with thiamine.
          </strong>
          <span style={{ fontWeight: 400 }}>. </span>
        </p>

        </div>
      </div>
      
      {/* Image Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Top Row - Single Large Image */}
        <div className="md:col-span-2 max-w-4xl mx-auto">
          <div className="bg-gray-200 rounded-lg h-86 flex items-center justify-center">
            <img 
              src="https://static.igem.wiki/teams/5642/images/engagement/safety/andrew-hanson.webp" 
              alt="Duckweed in greenhouse" 
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>



      {/* CRISPR Section */}
      <div className="mt-12 mb-8">
        <div className="space-y-4 text-gray-700 leading-relaxed" style={{fontFamily: 'Urbanist, sans-serif'}}>
          <p>
            <span style={{ fontWeight: 400 }}>Using <A target='_blank' className='hover:underline text-[#6ca033]' href="https://crispor.gi.ucsc.edu/">CRISPOR</A> [2], </span>
            <strong>we designed gRNAs&nbsp; targeting THI4</strong>
            <span style={{ fontWeight: 400 }}>
              {" "}
              and in the future, we are planning to implement the knock-out using our
              duckweed-specific CRISPR construct pIB005.
            </span>
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
          <span style={{ fontWeight: 400 }}>
            Even though we were not permitted, to test our engineered duckweed on
            animals (cows), we{" "}
          </span>
          <strong>consulted with an expert in bovine nutrition </strong>
          <span style={{ fontWeight: 400 }}>
            from the Department of Biochemistry at Masaryk University, Dr. Ludmila
            Křížová to understand what aspects of our duckweed safety should be
            considered. We also discussed what tests would be necessary before any
            potential future trials on cows, in order to{" "}
          </span>
          <strong>prevent possible harm</strong>
          <span style={{ fontWeight: 400 }}>
            {" "}
            from unexpected metabolic byproducts resulting from the genetic engineering
            of duckweed.
          </span>
        </p>

        </div>
      </div>

      {/* Safety in the Laboratory Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-800" style={{fontFamily: 'Space Grotesk, sans-serif'}}>
          Safety in the Laboratory
        </h2>
        
        <div className="space-y-4 text-gray-700 leading-relaxed" style={{fontFamily: 'Urbanist, sans-serif'}}>
          <>
            <p>
              <span style={{ fontWeight: 400 }}>We have been trained by a </span>
              <strong>lab technician</strong>
              <span style={{ fontWeight: 400 }}>, a </span>
              <strong>greenhouse specialist</strong>
              <span style={{ fontWeight: 400 }}>, and a </span>
              <strong>senior supervisor</strong>
              <span style={{ fontWeight: 400 }}>
                {" "}
                (GMO biosafety officer prof. Jiří Doškař) in the proper disposal of
                genetically modified plants and bacteria to prevent their release into the
                natural environment, including the use of GMO-certified sinks and
                autoclaving all plant material.
              </span>
            </p>
            <p>
              <span style={{ fontWeight: 400 }}>
                We followed good <A target='_blank' className='hover:underline text-[#6ca033]' href="https://www.oecd.org/content/dam/oecd/en/publications/reports/2005/12/good-laboratory-practice_g1gh5db5/9789264012837-en.pdf">laboratory practices </A> (GLP), including sterilising benches
                before and after use with 70 % ethanol and sterilising flow-boxes with UV
                light after every use.{" "}
              </span>
              <strong>Access</strong>
              <span style={{ fontWeight: 400 }}> to laboratory equipment was only </span>
              <strong>granted</strong> <strong>after hands-on instruction</strong>
              <span style={{ fontWeight: 400 }}> by experienced staff.</span>
            </p>
          </>

        </div>

         {/* Image Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Top Row - Single Large Image */}
        <div className="md:col-span-2 max-w-3xl mx-auto">
          
        </div>
      </div>
      </div>

      <div className="relative h-64 max-w-3xl bg-gradient-to-br from-teal-200 to-cyan-200 rounded-lg overflow-hidden items-center mx-auto mb-12">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="absolute inset-0 flex items-center justify-center">
                  <img src="https://static.igem.wiki/teams/5642/images/engagement/safety/safety-training.webp"/>
                </div>
              </div>
            </div>


      


      {/* Working with Bacteria Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-800" style={{fontFamily: 'Space Grotesk, sans-serif'}}>
          Working with Bacteria
        </h2>
        
        <div className="space-y-4 text-gray-700 leading-relaxed" style={{fontFamily: 'Urbanist, sans-serif'}}>
          <>
            <p>
              <span style={{ fontWeight: 400 }}>
                We worked with standard, non-pathogenic strains of{" "}
              </span>
              <strong>
                <em>Escherichia coli</em>
              </strong>
              <span style={{ fontWeight: 400 }}> (DH5α, Stellar) and </span>
              <strong>
                <em>Agrobacterium tumefaciens</em>
              </strong>
              <span style={{ fontWeight: 400 }}>
                {" "}
                (EHA105, GVG3101 and C58C1), all classified as Biosafety Level 1 (BSL-1). These
                strains are widely used for cloning and plasmid preparation and pose
                minimal risk to human health or the environment.
              </span>
            </p>
            <p>
              <span style={{ fontWeight: 400 }}>
                All handling was conducted under containment in{" "}
              </span>
              <strong>GMO-approved laboratories</strong>
              <span style={{ fontWeight: 400 }}>
                {" "}
                (Masaryk University and CEITEC), following Czech Act No. 78/2004 on GMOs.
                Every team member signed a safety and GMO disclosure agreement prepared by
                our PI, Assoc. Prof. Pavel Dvořák.
              </span>
            </p>
          </>

        </div>
      </div>

      {/* Waste Disposal Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-800" style={{fontFamily: 'Space Grotesk, sans-serif'}}>
          Waste Disposal
        </h2>
        
        <div className="space-y-4 text-gray-700 leading-relaxed" style={{fontFamily: 'Urbanist, sans-serif'}}>
          <>
          <p>
            <span style={{ fontWeight: 400 }}>
              All biological and chemical waste generated by our experiments was handled
              following institutional and national regulations.{" "}
            </span>
            <strong>Contaminated materials</strong>
            <span style={{ fontWeight: 400 }}>
              , including bacterial cultures and consumables, were{" "}
            </span>
            <strong>autoclaved before disposal</strong>
            <span style={{ fontWeight: 400 }}>
              . Liquid cultures were either autoclaved or inactivated using appropriate
              disinfectants before disposal.
            </span>
          </p>
          <p>
            <span style={{ fontWeight: 400 }}>
              Professional waste management staff from the Microbial Bioengineering
              Laboratory at Masaryk University, namely MSc. Karolína Černá, oversaw the
              collection, autoclaving, and disposal of waste, ensuring that no
              experimental material from the laboratory was left untreated.
            </span>
          </p>
          <p>
            <span style={{ fontWeight: 400 }}>
              We encourage you to read more about the safety precautions we took and
              professionals we consulted in{" "}
            </span>
            <A className='hover:underline text-[#6ca033]' target='_blank' href="https://teams.igem.org/5642/safety/safety-final-form/52ec67e6-ea29-4e3c-853f-bd5cf5864346">
              <span>our Safety Form</span>
            </A>
            <span style={{ fontWeight: 400 }}>.</span>
          </p>
        </>

        </div>
      </div>


      <References references={Reference}  />


    



    </div>
  );
};

export default DuckweedSafety;



const Reference = [
    {
        id: 1,
        text: "Umetsu, C. A. (2018). The case of Itanhaém Basin, São Paulo, Brazil: Aquatic plants as indicators of ecological quality in tropical rivers. Aquatic Botany. https://doi.org/10.1016/j.aquabot.2018.05.003",
        url: "https://doi.org/10.1016/j.aquabot.2018.05.003"
    },
    {
        id: 2,
        text: "Concordet, J. P., & Haeussler, M. (2018). CRISPOR: Intuitive guide selection for CRISPR/Cas9 genome editing experiments and screens. Nucleic Acids Research, 46(W1), W242–W245. https://doi.org/10.1093/nar/gky354",
        url: "https://doi.org/10.1093/nar/gky354"
    },
  
  ]    