import React from 'react';
import References from '../../../components/References';
import A from "../../../A";

export default function PartCollection() {
  return (
    <div className="min-h-screen ">
     
      
      <div className="max-w-6xl mx-auto text-lg">
        {/* Header */}
        <div className="text-center mt-16">
          <h1 className="text-4xl font-bold mb-16" style={{fontFamily: 'Space Grotesk'}}>
            Part collection: Programmable Duckweed
          </h1>
          <p className="text-lg" style={{fontFamily: 'Urbanist'}}>
            The <b>55 parts</b> in our collection embody our <b>first major iGEM stride</b> toward making genetic engineering of the <b>fastest growing plant on Earth</b> fast and use-friendly - though the journey is only beginning.
          </p>
        </div>

        {/* Main Content */}
        <div className="p-8">
          {/* Collection Overview */}
          <div className="mb-12">
            <p className="text-gray-700 mb-6" style={{fontFamily: 'Urbanist'}}>
              We divided them into four categories:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg border-l-4 border-blue-500">
                <h3 className="text-xl font-semibold mb-2 text-blue-900" style={{fontFamily: 'Space Grotesk'}}>
                  12 TAIFR parts - 9 basic, 3 composite
                </h3>
                <p className="text-gray-700" style={{fontFamily: 'Urbanist'}}>
                  <b>Stable duckweed genome insertion</b>, 5x faster than before via the customizable PING/PONG system
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg border-l-4 border-purple-500">
                <h3 className="text-xl font-semibold mb-2 text-purple-900" style={{fontFamily: 'Space Grotesk'}}>
                  9 parts for our CRISPR/Cas9 tool - 8 basic, 1 composite
                </h3>
                <p className="text-gray-700" style={{fontFamily: 'Urbanist'}}>
                  <b>Gene knockouts</b> with a single digest & ligate reaction via our adaptable pIB006 construct
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-6 rounded-lg border-l-4 border-amber-500">
                <h3 className="text-xl font-semibold mb-2 text-amber-900" style={{fontFamily: 'Space Grotesk'}}>
                  <b>21 new endogenous</b> parts with testing constructs - 7 basic, 14 composite
                </h3>
                <p className="text-gray-700" style={{fontFamily: 'Urbanist'}}>
                  <b>New candidates for duckweed endogenous promoters </b> + 5' UTRs: identified based on transcriptomic data and characterized by a set of measurement constructs
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-6 rounded-lg border-l-4 border-teal-500">
                <h3 className="text-xl font-semibold mb-2 text-teal-900" style={{fontFamily: 'Space Grotesk'}}>
                  12 additional general parts, working in duckweed - 7 basic, 5 composite
                </h3>
                <p className="text-gray-700" style={{fontFamily: 'Urbanist'}}>
                  Promoters, terminators, 5' & 3' UTRs, CDSs, reporters and more
                </p>
              </div>
            </div>

            <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-lg">
              <p className="text-gray-800 font-medium text-center" style={{fontFamily: 'Urbanist'}}>
                We assembled this collection to lower the entry barrier for future teams interested in duckweed research. With these parts, iGEMers can fulfil the massive potential of the tiny fastest growing plant on Earth.
              </p>
            </div>
          </div>

          {/* What is wrong section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900" style={{fontFamily: 'Space Grotesk'}}>
              What is wrong with duckweed genetic engineering?
            </h2>
            
            <div className="prose max-w-none text-gray-700 text-justify" style={{fontFamily: 'Urbanist'}}>
              <p className="mb-4">
                For iGEM teams and plant researchers, the greatest bottleneck is <strong>time</strong>. Compared to bacteria or yeast, plants grow slowly, and <b>engineering cycles can take months</b> [1]. For non-model species, the challenges multiply: stable transformation protocols are often unreliable or missing, transient systems are inconsistent, and only a few regulatory parts are available [2]. <b> The result is a vicious cycle – slow growth and slow transformations make iterations long</b>, which delays part characterization, and stalls both fundamental research and practical applications [3].
              </p>
              
              <p className="mb-4">
                To break this cycle, we turned to duckweed, <strong>the fastest-growing plant in the world</strong> [4]. With doubling time of just 48 hours and a naturally high protein content, duckweed holds enormous potential: as protein-rich feed, a phytoremediation tool, and a sustainable chassis for biomanufacturing [5]. Our original focus was next-generation cattle feed grown directly on the liquid fraction of manure. Yet, techno-economic analysis and farmer consultations revealed that <b>current duckweeds lack agronomic traits</b>, important for farm deployment: optimized nitrogen uptake, faster biomass accumulation, and larger fronds. Traditional breeding to introduce these traits would take decades.<strong> Genetic engineering could be faster – if the tools existed</strong>.
              </p>
              
              <p className="mb-4">
                Here, we faced the same bottleneck as every plant synthetic biology project: <strong>no fast, and reliable stable transformation protocol</strong> and <strong>very few characterized parts</strong>. Without these tools, duckweed research is too slow.
              </p>
              
              <p className="mb-4">
                Our part collection was built to change that. It contains constructs necessary for generating <strong>stable transgene insertions into the duckweed nuclear genome within two weeks under non-sterile conditions </strong> (<A className='hover:underline text-[#6ca033]' href="/project/how/taifr/overview">read more</A>) using our customizable Ping/PONG TAIFR system, a tool for user-friendly CRISPR/Cas9 knock-outs, and a set of seven endogenous promoter candidates + 5' UTR parts. Endogenous parts were chosen mainly for their potential to drive more stable and potentially stronger expression in the native plant.
              </p>
              
              <p className="font-bolt text-center pt-4 text-[#6ca033]"><b>
                All in all, parts in our collection together enable faster engineering iteration to push duckweed research forward to finally unlock its true potential.
              </b>
              </p>
            </div>
          </section>


            <h3 className="text-3xl font-semibold mb-4 text-gray-800" style={{fontFamily: 'Space Grotesk'}}>
                TAIFR parts
              </h3>

          {/* TAIFR Description */}
            <div className="prose max-w-none text-gray-700 text-justify mb-8" style={{fontFamily: 'Urbanist'}} >
              
              
              <p className="mb-4">
                <b>T</b>ransposase-<b>A</b>ssociated <b>I</b>nsertion & <b>F</b>rond <b>R</b>egeneration is a method designed to bypass the five-month process of generating stable duckweed transformants through tissue culture, where genome-insertion mutants are induced, transformed, and regenerated from calli.
              </p>
              
              <p className="mb-4">
                Through discussions with our advisor, Dr. Ordóñez (<A href="/human-practices#arturo" className="hover:underline text-[#6ca033]" target="_blank">read more here</A>), we concluded that the bottleneck in stable transformation is <strong> low efficiency of <em>Agrobacterium</em> T-DNA insertion into the duckweed genome</strong>.
              </p>
              
              <p className="mb-4">
                Our strategy was to <strong>enable or to increase number of insertion events</strong>. If enough transformed cells are generated, there would be no need to go through a callus stage. Instead, <em>Agrobacterium</em> carrying our gene of interest (fused to a resistance marker) can be applied directly to duckweed fronds. By carefully adjusting the antibiotic concentration, <b>transformed cells carrying the construct are favored to outcompete non-transformed ones and regenerate into fully transgenic fronds</b> - using nothing more than a simple transient transformation.
              </p>
              
              <p className="mb-4">
                Encouraged by its co-inventor Dr. Keith Slotkin, we adapted the PING/PONG transposon system, first described by Liu et al. in <em>Arabidopsis</em> and soybean [8]. In this system, the PONG transposase recognizes, excises, and integrates DNA sequence bordered by mPing transposable elements. To apply this, we designed two constructs:
              </p>
              
              <ul className="list-disc ml-6 mb-4">
                <li><strong><A href="https://registry.igem.org/parts/bba-25bd3z4p" className="hover:underline text-[#6ca033]" target="_blank">pIB003</A></strong> carrying the <b>PONG transposase,</b></li>
                <li><strong><A href="https://registry.igem.org/parts/bba-25460yvj" className="hover:underline text-[#6ca033]" target="_blank">pIB005</A></strong> carrying a swappable cassette with a gene of interest and a G418 resistance marker, flanked by <b>mPing borders</b>.</li>
              </ul>
              
              <p className="mb-4">
                To customize the TAIFR system, the user digests plasmid pIB005 with Esp3I, generating a 5' overhang <b>(AATG)</b> and a 3' overhang <b>(TTCG)</b> - the standard MoClo CDS1 no stop codon overhangs. The digested backbone can be purified from gel and ligated with any CDS containing correct MoClo-compatible overhangs, allowing simple integration of new genes of interest (see the protocol for ligation of your gene into pIB005 <A href="/plant#how-to-use-taifr" className="underline:hover text-[#6ca033]">here</A>).
              </p>
              
              <p className="mb-4">
                <b>We confirmed the functionality of the first half of our method</b> (Transposase-Assisted Insertion) by verifying mPing-bordered cargo insertion into the duckweed nuclear genome through fluorescence and PCR analysis (<A href="/project/how/taifr/overview#dbtl-4-test" className="text-[#6ca033] hover:underline" >see results here</A>). The second part has not yet worked due to several factors (<A href="/project/how/taifr/overview#wondering-end" className="text-[#6ca033] hover:underline" >read more here</A>), which is why we have not been able to test whether our Cre-lox system functions as intended.
              </p>
              
              <p className="mb-4">
                <em>Theoretically</em>, it should. Once the Frond Regeneration part of our method is established (<A href="/project/how/taifr/overview#what-are-we-going-to-do" className="text-[#6ca033] hover:underline">see proposed strategies</A>), the presence of the Cre-lox system will enable transgene stacking in duckweed lines developed via the TAIFR method. This is particularly important because TAIFR currently <b>relies on a single resistance marker, as duckweed is generally not very sensitive to antibiotics</b>. Moreover, the continued presence of resistance genes in transgenic lines is not a desirable state.
              </p>
              
              <p className="mb-4">
                Excision of p2A-NPTII from transgenic duckweed lines upon expression of Cre recombinase and facilitated by <b>heterologous lox sites (lox 71 and lox 66)</b> will result in a mutated lox site (lox71/66) that is no longer recognizable by Cre recombinase, thereby allowing repeated insertion of the TAIFR translational unit and excision of the selection marker (NPTII).
              </p>
            </div>

          {/* TAIFR Parts Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900" style={{fontFamily: 'Space Grotesk'}}>
              1. TAIFR Parts
            </h2>
            
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800" style={{fontFamily: 'Space Grotesk'}}>
                Basic Parts
              </h3>
              
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300" style={{fontFamily: 'Urbanist'}}>
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b">Part Identifier</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b">Part Name</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b">Short Description</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b">Original Organism</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b">Source</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 border-b hover:bg-yellow-100"><A className='' href="https://registry.igem.org/parts/bba-25fc90w0" target="_blank" rel="noopener noreferrer">BBa_25FC90W0</A></td>
                      <td className="px-4 py-3 border-b">PONG ORF1</td>
                      <td className="px-4 py-3 border-b">Pong Transposase, ORF 1 subunit (codon-optimized for duckweed)</td>
                      <td className="px-4 py-3 border-b"><em>Oryza sativa</em></td>
                      <td className="px-4 py-3 border-b">Gene synthesis</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 border-b  hover:bg-yellow-100"><A className='' href="https://registry.igem.org/parts/bba-25fwv63m" target="_blank" rel="noopener noreferrer">BBa_25FWV63M</A></td>
                      <td className="px-4 py-3 border-b">PONG ORF2</td>
                      <td className="px-4 py-3 border-b">Pong Transposase, ORF 2 subunit (codon-optimized for duckweed)</td>
                      <td className="px-4 py-3 border-b"><em>Oryza sativa</em></td>
                      <td className="px-4 py-3 border-b">Gene synthesis</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 border-b  hover:bg-yellow-100"><A className='' href="https://registry.igem.org/parts/bba-25n85q45" target="_blank" rel="noopener noreferrer">BBa_25N85Q45</A></td>
                      <td className="px-4 py-3 border-b">mPing</td>
                      <td className="px-4 py-3 border-b">mPing: non-autonomous transposable element</td>
                      <td className="px-4 py-3 border-b"><em>Oryza sativa</em></td>
                      <td className="px-4 py-3 border-b">Gene synthesis</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 border-b  hover:bg-yellow-100"><A className='' href="https://registry.igem.org/parts/bba-25ka0lqp" target="_blank" rel="noopener noreferrer">BBa_25KA0LQP</A></td>
                      <td className="px-4 py-3 border-b">0.5mPing</td>
                      <td className="px-4 py-3 border-b">mPing Left (5') Border</td>
                      <td className="px-4 py-3 border-b"><em>Oryza sativa</em></td>
                      <td className="px-4 py-3 border-b">Gene synthesis</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 border-b  hover:bg-yellow-100"><A className='' href="https://registry.igem.org/parts/bba-25m7xiji" target="_blank" rel="noopener noreferrer">BBa_25M7XIJI</A></td>
                      <td className="px-4 py-3 border-b">1..0mPing</td>
                      <td className="px-4 py-3 border-b">mPing Right (3') Border</td>
                      <td className="px-4 py-3 border-b"><em>Oryza sativa</em></td>
                      <td className="px-4 py-3 border-b">Gene synthesis</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 border-b  hover:bg-yellow-100"><A className='' href="https://registry.igem.org/parts/bba-253u11bj" target="_blank" rel="noopener noreferrer">BBa_253U11BJ</A></td>
                      <td className="px-4 py-3 border-b">NLS</td>
                      <td className="px-4 py-3 border-b">Nuclear Localization Signal (codon-optimized for duckweed)</td>
                      <td className="px-4 py-3 border-b">Simian virus 40</td>
                      <td className="px-4 py-3 border-b">Gene synthesis</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 border-b  hover:bg-yellow-100"><A className='' href="https://registry.igem.org/parts/bba-k649205" target="_blank" rel="noopener noreferrer">BBa_K649205</A></td>
                      <td className="px-4 py-3 border-b">Lox71</td>
                      <td className="px-4 py-3 border-b">Cre recombinase recognition site Lox71</td>
                      <td className="px-4 py-3 border-b">Bacteriophage P1</td>
                      <td className="px-4 py-3 border-b">Gene synthesis</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 border-b  hover:bg-yellow-100"><A className='' href="https://registry.igem.org/parts/bba-k649206" target="_blank" rel="noopener noreferrer">BBa_K649206</A></td>
                      <td className="px-4 py-3 border-b">Lox66</td>
                      <td className="px-4 py-3 border-b">Cre recombinase recognition site Lox66</td>
                      <td className="px-4 py-3 border-b">Bacteriophage P1</td>
                      <td className="px-4 py-3 border-b">Gene synthesis</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 border-b  hover:bg-yellow-100"><A className='' href="https://registry.igem.org/parts/bba-25vsfer6" target="_blank" rel="noopener noreferrer">BBa_25VSFER6</A></td>
                      <td className="px-4 py-3 border-b">Cre</td>
                      <td className="px-4 py-3 border-b">Cre recombinase</td>
                      <td className="px-4 py-3 border-b">Bacteriophage P1</td>
                      <td className="px-4 py-3 border-b">MoClo Plant Parts III: Transformation & Genome Engineering Kit by Voytas Lab</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800" style={{fontFamily: 'Space Grotesk'}}>
                Composite Parts
              </h3>
              
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300" style={{fontFamily: 'Urbanist'}}>
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b">Part Identifier</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b">Part Name</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b">Short Description</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b">Source</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 border-b  hover:bg-yellow-100"><A className='' href="https://registry.igem.org/parts/bba-25ubd3db" target="_blank" rel="noopener noreferrer">BBa_25UBD3DB</A></td>
                      <td className="px-4 py-3 border-b">PONG</td>
                      <td className="px-4 py-3 border-b">Pong Transposase with Nuclear Localization Sequence (codon-optimized for duckweed)</td>
                      <td className="px-4 py-3 border-b">Own assembly from basic parts</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 border-b  hover:bg-yellow-100"><A className='' href="https://registry.igem.org/parts/bba-25bd3z4p" target="_blank" rel="noopener noreferrer">BBa_25BD3Z4P</A></td>
                      <td className="px-4 py-3 border-b">pIB003</td>
                      <td className="px-4 py-3 border-b">rZmUBI-NLS-Pong-2A-RFP-t35S</td>
                      <td className="px-4 py-3 border-b">Own assembly from basic parts</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 border-b  hover:bg-yellow-100"><A className='' href="https://registry.igem.org/parts/bba-25460yvj" target="_blank" rel="noopener noreferrer">BBa_25460YVJ</A></td>
                      <td className="px-4 py-3 border-b">pIB005</td>
                      <td className="px-4 py-3 border-b">0.5mPing-rZmUBI-eGFP-lox71-p2a-NPTII-lox66-t35S-1.0mPing</td>
                      <td className="px-4 py-3 border-b">Own assembly from basic parts</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            

            {/* Plasmid Diagrams */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className=" p-6 rounded-lg">
                <img src="https://static.igem.wiki/teams/5642/images/toolbox/partcollection/pib005-copy-1.webp" alt="pIB005 Diagram" className="w-full h-auto mb-4 rounded-lg" />
                <p className="text-base text-gray-700 text-justify" style={{fontFamily: 'Urbanist'}}>
                  <strong>Figure 1. </strong> 
                         pIB005 contains a cassette flanked on both sides by the non-transposable element mPing. Inside the cassette, there is a fluorescent marker (GFP) and a resistance gene against neomycin (NPTII). Both GFP and NPTII are linked by a self-cleaving 2A peptide (derived from porcine teschovirus-1), allowing their parallel expression. The GFP-p2A-NPTII ORF is driven by the ubiquitin promoter from Zea mays (rZmUBI) and terminated by the Cauliflower Mosaic Virus terminator sequence (t35S). This design minimizes the overall cassette size, resulting in higher insertion efficiency. The gene for GFP in the cassette is bordered by Esp3I restriction sites, allowing seamless swapping of the first coding sequence (CDS1) in the translational unit. This design enables customization of which gene is inserted and expressed in duckweed using our TAIFR method. The second CDS of the translational unit (p2A-NPTII) is bordered by lox sites - specifically mutated sequences, with lox71 at the 5′ end and lox66 at the 3′ end. Upon expression of Cre recombinase, this design enables excision of the selection marker (NPTII) from transgenic duckweed, allowing transgene stacking in a single line using our TAIFR method. Excision of p2A-NPTII from transgenic duckweed lines results in a mutated lox site that is no longer recognizable by Cre recombinase, thereby allowing repeated insertion of the TAIFR translational unit and excision of the selection marker (NPTII).The entire expression cassette is bordered by T-DNA for <em>Agrobacterium</em>-mediated transformation and is housed in a binary vector, allowing replication in both <em>E. coli</em> and <em>Agrobacterium tumefaciens</em>.

                    </p>
              </div>
              
              <div className=" p-6 rounded-lg">
                <img src="https://static.igem.wiki/teams/5642/images/toolbox/partcollection/pib003-1.webp" alt="pIB003 Diagram" className="w-full h-auto mb-4 rounded-lg" />
                <p className="text-base text-gray-700 text-justify " style={{fontFamily: 'Urbanist'}}>
                  <strong>Figure 2.</strong> pIB003 is carrying ORFs for two PONG transposase subunits, separated by self-cleaving 2A peptide from <em>Thosea asigna</em> virus (t2a) with nuclear localization sequence (NLS), linked with red fluorescent protein (RFP) by a self-cleaving 2A peptide derived from Porcine teschovirus-1 (p2a). Expression of PONG-p2a-RFP is driven by ubiquitin promoter from <em>Zea mays</em> (rZmUBI) and terminated by terminator sequence derived from Cauliflower Mosaic Virus (t35S). Both PONG and p2a-RFP are duckweed-codon optimized. Expression cassette is bordered by T-DNA allowing for <em>Agrobacterium</em>-mediated transformation and lies in binary vector, allowing for replication both in <em>E. coli</em> and in <em>Agrobacterium tumefaciens</em>.
                </p>
              </div>
            </div>
          </section>
          
          <A href="/plant#how-to-use-taifr" >
          <div className="p-6 bg-[#6ca033] text-[#25512b] rounded-lg mb-12">
            <h2 className="text-3xl font-bold mb-4 text-white text-center" style={{fontFamily: 'Space Grotesk'}}>
                See how you can use TAIFR parts !
              </h2>

          </div>

          </A>

          {/* CRISPR/Cas9 Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900" style={{fontFamily: 'Space Grotesk'}}>
              2. CRISPR/Cas9-based Gene Knockout Tool for Monocot Plants
            </h2>
            
            <div className="prose max-w-none text-gray-700 mb-8" style={{fontFamily: 'Urbanist'}}>
              <p className="mb-4">
                When we set out to create mutant duckweeds with a single gene knocked out for our <A className='hover:underline text-[#6ca033]' href="/project/how/taifr/overview#dbtl-5">Meristematic Assay</A>, we discovered that assembling a gene knockout construct <b>required multiple, relatively laborious and time-consuming cloning steps</b>. This process was made even more difficult by the large size of the individual parts. To streamline our own work – and to spare future iGEM teams the same challenge – we designed a tool that would be as ready-to-use as possible for downstream applications: <b>pIB006</b>.
              </p>
            </div>


            {/* pIB006 Diagram */}
            <div className="grid md:grid-cols-4 gap-6 mb-8">
              <div className="md:col-span-3 ">
                    <img src="https://static.igem.wiki/teams/5642/images/toolbox/partcollection/pib006-copy.webp" alt="pIB006 Diagram" className="w-full h-auto mb-4 rounded-lg" />
              </div>
              <div className="md:col-span-1  ">
                <p className="text-base text-gray-700 text-justify" style={{fontFamily: 'Urbanist'}}>
                    <strong>Figure 3.</strong> pIB006 contains three expression cassettes designed for rapid and customizable gene knockouts using the CRISPR/Cas9 system. The first cassette encodes a plant codon-optimized Cas9 driven by the <em>Zea mays</em> ubiquitin promoter (rZmUBI) and terminated by the Cauliflower Mosaic Virus terminator (t35S).The second cassette carries the neomycin resistance gene (NPTII) for antibiotic selection. Expression of NPTII is controlled by the nopaline synthase promoter (rNOS) from <em>Agrobacterium tumefaciens</em> and terminated by the terminator sequence nopaline synthase gene (tNOS) from <em>Agrobacterium tumefaciens</em>. The third cassette provides the CRISPR guide RNA transcription unit. It consists of the <em>Oryza sativa</em> U6 promoter (rOsU6) followed by a customizable filler sequence flanked by Esp3I restriction sites, a tracrRNA scaffold, and a polyadenylation signal. This design allows seamless replacement of the filler sequence with user-defined gRNA oligonucleotides using a simple digest-and-ligate reaction with Esp3I-compatible overhangs. The entire expression cassette is bordered by T-DNA for <em>Agrobacterium</em>-mediated transformation and is housed in a binary vector, allowing replication in both <em>E. coli</em> and <em>Agrobacterium tumefaciens</em>.
                </p>

             </div>   
            </div>

            <div className="prose max-w-none text-gray-700 text-justify" style={{fontFamily: 'Urbanist'}}>
              <p className="mb-4">
            We tested the functionality of pIB006 at the level of gRNA ligation twice (see the Safety page). Unfortunately, we didn’t have the chance to transform pIB006 into duckweed, as it was designed and built during the fifth (final) DBTL cycle of TAIFR, just as the Wiki Freeze was approaching. However, there is no logical reason it shouldn’t work, <b>since Cas9 - driven by the rZmUBI promoter and terminated by the t35S terminator - has been successfully used to knock out genes in duckweed</b> (10).

              </p>
            </div>


            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800" style={{fontFamily: 'Space Grotesk'}}>
                Basic Parts
              </h3>
              
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300" style={{fontFamily: 'Urbanist'}}>
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b">Part Identifier</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b">Part Name</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b">Short Description</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b">Original Organism</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b">Source</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 border-b  hover:bg-yellow-100"><A className='' href="https://registry.igem.org/parts/bba-25ee5kq2" target="_blank" rel="noopener noreferrer">BBa_25EE5KQ2</A></td>
                      <td className="px-4 py-3 border-b">Cas9</td>
                      <td className="px-4 py-3 border-b">Cas9 endonuclease</td>
                      <td className="px-4 py-3 border-b"><em>Streptococcus pyogenes</em></td>
                      <td className="px-4 py-3 border-b">Gifted by Dr. Helene Robert Boisivon</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 border-b  hover:bg-yellow-100"><A className='' href="https://registry.igem.org/parts/bba-k4761029" target="_blank" rel="noopener noreferrer">BBa_K4761029</A></td>
                      <td className="px-4 py-3 border-b">gRNA scaffold</td>
                      <td className="px-4 py-3 border-b">tracrRNA repeats</td>
                      <td className="px-4 py-3 border-b">synthetic</td>
                      <td className="px-4 py-3 border-b">MoClo Plant Parts III: Transformation & Genome Engineering Kit by Voytas Lab</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 border-b  hover:bg-yellow-100"><A className='' href="https://registry.igem.org/parts/bba-k4761029" target="_blank" rel="noopener noreferrer">BBa_K4761029</A></td>
                      <td className="px-4 py-3 border-b">Pol III terminator</td>
                      <td className="px-4 py-3 border-b">Terminator of gRNA transcription</td>
                      <td className="px-4 py-3 border-b">synthetic</td>
                      <td className="px-4 py-3 border-b">MoClo Plant Parts III: Transformation & Genome Engineering Kit by Voytas Lab</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 border-b  hover:bg-yellow-100"><A className='' href="https://registry.igem.org/parts/bba-25h0j6yd" target="_blank" rel="noopener noreferrer">BBa_25H0J6YD</A></td>
                      <td className="px-4 py-3 border-b">rOsU6</td>
                      <td className="px-4 py-3 border-b">U6 promoter</td>
                      <td className="px-4 py-3 border-b"><em>Oryza sativa</em></td>
                      <td className="px-4 py-3 border-b">MoClo Plant Parts III: Transformation & Genome Engineering Kit by Voytas Lab</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 border-b  hover:bg-yellow-100"><A className='' href="https://registry.igem.org/parts/bba-25m0pci1" target="_blank" rel="noopener noreferrer">BBa_25M0PCI1</A></td>
                      <td className="px-4 py-3 border-b">filler</td>
                      <td className="px-4 py-3 border-b">Esp3I-flanked placeholder sequence (user-replaceable)</td>
                      <td className="px-4 py-3 border-b">synthetic</td>
                      <td className="px-4 py-3 border-b">pAMO142 from Dr. Arturo-Mari Ordóñez</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 border-b  hover:bg-yellow-100"><A className='' href="https://registry.igem.org/parts/bba-25m7nm5y" target="_blank" rel="noopener noreferrer">BBa_25M7NM5Y</A></td>
                      <td className="px-4 py-3 border-b">eGFP_KO1</td>
                      <td className="px-4 py-3 border-b">Forward gRNA oligonucleotide</td>
                      <td className="px-4 py-3 border-b">synthetic</td>
                      <td className="px-4 py-3 border-b">Identified using CRISPOR</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 border-b  hover:bg-yellow-100"><A className='' href="https://registry.igem.org/parts/bba-25lgnzag" target="_blank" rel="noopener noreferrer">BBa_25LGNZAG</A></td>
                      <td className="px-4 py-3 border-b">eGFP_KO2</td>
                      <td className="px-4 py-3 border-b">Forward gRNA oligonucleotide</td>
                      <td className="px-4 py-3 border-b">synthetic</td>
                      <td className="px-4 py-3 border-b">Identified using CRISPOR</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 border-b  hover:bg-yellow-100"><A className='' href="https://registry.igem.org/parts/bba-25oz9s9i" target="_blank" rel="noopener noreferrer">BBa_25OZ9S9I</A></td>
                      <td className="px-4 py-3 border-b">eGFP_KO3</td>
                      <td className="px-4 py-3 border-b">Forward gRNA oligonucleotide</td>
                      <td className="px-4 py-3 border-b">synthetic</td>
                      <td className="px-4 py-3 border-b">Identified using CRISPOR</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800" style={{fontFamily: 'Space Grotesk'}}>
                Composite
              </h3>
              
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300" style={{fontFamily: 'Urbanist'}}>
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b">Part Identifier</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b">Part Name</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b">Short Description</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b">Source</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 border-b  hover:bg-yellow-100"><A className='' href="https://registry.igem.org/parts/bba-252t3xrc" target="_blank" rel="noopener noreferrer">BBa_252T3XRC</A></td>
                      <td className="px-4 py-3 border-b">pIB006</td>
                      <td className="px-4 py-3 border-b">CRISPR/Cas9-based knockout tool for monocot plants</td>
                      <td className="px-4 py-3 border-b">Own assembly from basic parts</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
           

            
          </section>

          {/* Endogenous Promoter Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 " style={{fontFamily: 'Space Grotesk'}}>
              3. Endogenous Duckweed Promoter + 5' UTR Parts
            </h2>
            
            <div className="prose max-w-none text-gray-700 mb-8 text-justify" style={{fontFamily: 'Urbanist'}}>
              <p className="mb-4">
                For this part of our toolbox, we were greatly inspired by iGEM Marburg 2024 and their work on dandelion. Through discussions with their team and with our advisor Dr. Arturo-Mari Ordóñez. we realized that to make duckweed engineering more attractive and accessible, it was crucial to provide <strong>endogenous regulatory parts</strong>. At present, almost <b>no native promoters and 5' UTRs are available for duckweed</b>, which severely limits its practical application [9].
              </p>
              
              <p className="mb-4">
                Guided by the approach of iGEM Marburg 2024, we analyzed <strong>publicly available transcriptomic datasets</strong> from 6 duckweed ecotypes, together with a dataset kindly provided by Dr. Ordóñez. Genes were screened based on two criteria, namely <strong>high transcript abundance</strong>, to ensure strong promoter activity and <strong>low variance of abundance across duckweed species</strong> for the broadest possible applicability across duckweed species. See more on our in-silico design <A className='hover:underline text-[#6ca033]' href="/measurement">here</A>. 
              </p>
              
              <p className="mb-4">
                After identifying promising candidates, we performed functional annotation of the genes and extracted the <strong>promoter + 5' UTR regions</strong> (defined as the 2 kb upstream of the ATG start codon). Each sequence was then checked for internal restriction sites to ensure GoldenGate compatibility.
              </p>
              
              <p className="mb-4">
                From this analysis, we selected <strong>13 candidate promoter + 5' UTRs</strong>. We attempted to isolate all from genomic DNA of the respective duckweed species by PCR, and successfully done so for 5 of them. Of these, we were able to clone three promoters into RUBY testing constructs and RFP measurement constructs. To expand this set, we ordered synthesis of the next four most promising candidates, all of which were successfully cloned. See how we built the testing constructs for promoters <A className='hover:underline text-[#6ca033]' href="/measurement#summary">here</A>. 
              </p>
            </div>

            {/* Testing Construct Diagram */}
            <div className="mb-8">
              <img src="https://static.igem.wiki/teams/5642/images/toolbox/partcollection/promotres-circular-copy.webp" alt="Promoter Testing Construct Design" className="w-full h-auto mb-4 rounded-lg" />
              <p className="text-base text-justify" style={{fontFamily: 'Urbanist'}}>
                <strong>Figure 4.</strong> Schematic representation of the promoter testing construct design, which enabled a ratiometric approach for quantitative testing of promoter-driven expression. Altogether, we created 14 testing constructs — seven using RUBY (an enzyme complex producing the red betalain pigment, visible to the naked eye and allowing rapid functionality checks) and seven using RFP (Red Fluorescent Protein) as the reporter gene for quantitative analysis by qPCR. Both versions of the first ORF are terminated by the Cauliflower Mosaic Virus terminator (t35S). The second ORF is identical across all 14 constructs, allowing us to directly compare the expression levels of candidate promoters with the nopaline synthase promoter (rNOS), which has previously shown reliable activity in duckweed. The rNOS promoter drives the expression of the neomycin phosphotransferase II (NPTII) gene, which is terminated by the nopaline synthase terminator (tNOS). Both rNOS and tNOS are derived from <em>Agrobacterium tumefaciens</em>. The entire expression cassette is flanked by T-DNA borders for <em>Agrobacterium</em>-mediated transformation and housed in a binary vector capable of replication in both <em>E. coli</em> and <em>Agrobacterium tumefaciens</em>.
              </p>
            </div>

            <div className='mt-16 mb-16 text-justify' style={{fontFamily: 'Urbanist'}}>
              <p>
                We managed to run several iterations of testing both visual testing constructs with RUBY reporter and our measurement constructs with RFP. We verified functionality of all of our promoter+5’UTR sequences in both <em>Spirodela polyrhiza</em> 7428 and <em>Lemna gibba </em>7742 with transcript detection via PCR on cDNA. We attempted the quantification of transcription activity with quantitative PCRs and obtained preliminary results regarding the level of their expression, which we were able to compare with conventionally used promoters. We did not confirm the protein expression being driven by the constructed  regulatory sequences and further testing is needed to evaluate the regulatory parts functionality. <A className='hover:underline text-[#6ca033]' href="/measurement">See how we performed quantification and evaluation of transcriptonic data.</A>.

              Altogether, we made first steps for enabling construction of regulatory parts library native to duckweeds.
              </p>
            </div>



            <p className="mb-16 text-lg text-justify" style={{fontFamily: 'Urbanist'}}>
              <span style={{ fontWeight: 400 }}>
                Altogether, we made first steps for enabling construction of regulatory
                parts library native to duckweeds. Testing{" "}
              </span>
              <strong>more regulatory parts</strong>
              <span style={{ fontWeight: 400 }}> obtained from </span>
              <strong>our </strong>
              <A className='hover:underline text-[#6ca033]'  href="/measurement"><strong>
                <em>in-silico </em>
              </strong>
              <strong>workflow</strong></A>
              <span style={{ fontWeight: 400 }}>
                {" "}
                could elucidate the parts that are actually able to drive strong protein
                expression in duckweed. With our{" "}
              </span>
              <span style={{ fontWeight: 400 }}>suggested workflow</span>
              <span style={{ fontWeight: 400 }}>
                , researchers can easily isolate and characterize also{" "}
              </span>
              <strong>terminator+3’UTR regulatory sequences</strong>
              <span style={{ fontWeight: 400 }}>
                {" "}
                in multiple duckweed species. Eventually, our pipeline can{" "}
              </span>
              <strong>
                be expanded across multiple duckweed species as more transcriptomes become
                available
              </strong>
              <span style={{ fontWeight: 400 }}>
                , opening the door to further increases in the user-friendliness of duckweed
                genetic engineering.
              </span>
            </p>


            <h2 className="text-2xl font-bold mb-6 " style={{fontFamily: 'Space Grotesk'}}>
              3. Endogenous Duckweed Promoter + 5’ UTR Parts
            </h2>

            
            <div className="overflow-x-auto mb-8">
              <table className="min-w-full bg-white border border-gray-300" style={{fontFamily: 'Urbanist'}}>
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b">Part Identifier</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b">Part Name</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b">Short Description</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b">RFP Measurement Construct for qPCR</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b">RUBY Visual Testing Construct</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 border-b  hover:bg-yellow-100"><A className='' href="https://registry.igem.org/parts/bba-25i17jf4" target="_blank" rel="noopener noreferrer">BBa_25I17JF4</A></td>
                    <td className="px-4 py-3 border-b">rSpARF</td>
                    <td className="px-4 py-3 border-b">ARF guanine-nucleotide exchange factor GNOM-like</td>
                    <td className="px-4 py-3 border-b">BBa_2585T3NW</td>
                    <td className="px-4 py-3 border-b">BBa_25Y8HUHL</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 border-b  hover:bg-yellow-100"><A className='' href="https://registry.igem.org/parts/bba-25bkk15t" target="_blank" rel="noopener noreferrer">BBa_25BKKI5T</A></td>
                    <td className="px-4 py-3 border-b">rSpPOL</td>
                    <td className="px-4 py-3 border-b">DNA polymerase epsilon catalytic subunit A</td>
                    <td className="px-4 py-3 border-b">BBa_250PDDO2</td>
                    <td className="px-4 py-3 border-b">BBa_2517VDHR</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 border-b  hover:bg-yellow-100"><A className='' href="https://registry.igem.org/parts/bba-25y6vxt4" target="_blank" rel="noopener noreferrer">BBa_25Y6VXT4</A></td>
                    <td className="px-4 py-3 border-b">rSpUBI</td>
                    <td className="px-4 py-3 border-b">E3 ubiquitin protein-ligase</td>
                    <td className="px-4 py-3 border-b">BBa_25S6OHZT</td>
                    <td className="px-4 py-3 border-b">BBa_25J4RA0E</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 border-b  hover:bg-yellow-100"><A className='' href="https://registry.igem.org/parts/bba-25boso9d" target="_blank" rel="noopener noreferrer">BBa_25BOSO9D</A></td>
                    <td className="px-4 py-3 border-b">rSpWDP</td>
                    <td className="px-4 py-3 border-b">WD domain containing protein</td>
                    <td className="px-4 py-3 border-b">BBa_25KE7JLC</td>
                    <td className="px-4 py-3 border-b">BBa_251AYM84</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 border-b  hover:bg-yellow-100"><A className='' href="https://registry.igem.org/parts/bba-2583vr6z" target="_blank" rel="noopener noreferrer">BBa_2583VR6Z</A></td>
                    <td className="px-4 py-3 border-b">rLmACC</td>
                    <td className="px-4 py-3 border-b">Acetyl-CoA carboxylase</td>
                    <td className="px-4 py-3 border-b">BBa_256R1OJ3</td>
                    <td className="px-4 py-3 border-b">BBa_252L515X</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 border-b  hover:bg-yellow-100"><A className='' href="https://registry.igem.org/parts/bba-25fq6hr0" target="_blank" rel="noopener noreferrer">BBa_25FQ6HR0</A></td>
                    <td className="px-4 py-3 border-b">rLmUBI</td>
                    <td className="px-4 py-3 border-b">E3 ubiquitin protein-ligase</td>
                    <td className="px-4 py-3 border-b">BBa_25ROOR0N</td>
                    <td className="px-4 py-3 border-b">BBa_25FWSDZY</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 border-b  hover:bg-yellow-100"><A className='' href="https://registry.igem.org/parts/bba-25goufc" target="_blank" rel="noopener noreferrer">BBa_25GOUFCY</A></td>
                    <td className="px-4 py-3 border-b">rLmAUX</td>
                    <td className="px-4 py-3 border-b">Auxin transport protein</td>
                    <td className="px-4 py-3 border-b">BBa_25RBVHJQ</td>
                    <td className="px-4 py-3 border-b">BBa_251T5TQY</td>
                  </tr>
                </tbody>
              </table>
            </div>

            
          </section>

          {/* General Parts Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900" style={{fontFamily: 'Space Grotesk'}}>
              4. General Parts, Tested and Working in Duckweed
            </h2>
            
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800" style={{fontFamily: 'Space Grotesk'}}>
                Basic Parts
              </h3>
              
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300" style={{fontFamily: 'Urbanist'}}>
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b">Part Identifier</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b">Part Type</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b">Part Name</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b">Short Description</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b">Original Organism</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b">Source</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 border-b  hover:bg-yellow-100"><A className='' href="https://registry.igem.org/parts/bba-25qfse2x" target="_blank" rel="noopener noreferrer">BBa_25QFSE2X</A></td>
                      <td className="px-4 py-3 border-b">promoter + 5' UTR</td>
                      <td className="px-4 py-3 border-b">rZmUBI</td>
                      <td className="px-4 py-3 border-b">Ubiquitin promoter + 5'UTR</td>
                      <td className="px-4 py-3 border-b">Zea mays</td>
                      <td className="px-4 py-3 border-b">MoClo Plant Parts II Infrastructure Kit deposited by Stuttmann Lab</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 border-b  hover:bg-yellow-100"><A className='' href="https://registry.igem.org/parts/bba-259wq7y7" target="_blank" rel="noopener noreferrer">BBa_259WQ7Y7</A></td>
                      <td className="px-4 py-3 border-b">promoter + 5' UTR</td>
                      <td className="px-4 py-3 border-b">rNOS-TMV</td>
                      <td className="px-4 py-3 border-b">Nopaline synthase promoter + 5' UTR TMV</td>
                      <td className="px-4 py-3 border-b"><em>Agrobacterium</em> tumefaciens, Tobacco Mosaic Virus</td>
                      <td className="px-4 py-3 border-b">MoClo Plant Parts Kit deposited by Patron lab</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 border-b  hover:bg-yellow-100"><A className='' href="https://registry.igem.org/parts/bba-25vyq6q2" target="_blank" rel="noopener noreferrer">BBa_25VYQ6Q2</A></td>
                      <td className="px-4 py-3 border-b">CDS</td>
                      <td className="px-4 py-3 border-b">NPTII</td>
                      <td className="px-4 py-3 border-b">Neomycin phosphotranferase II</td>
                      <td className="px-4 py-3 border-b">Escherichia coli</td>
                      <td className="px-4 py-3 border-b">MoClo Plant Parts II Infrastructure Kit deposited by Stuttmann Lab</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 border-b  hover:bg-yellow-100"><A className='' href="https://registry.igem.org/parts/bba-25z3hgcf" target="_blank" rel="noopener noreferrer">BBa_25Z3HGCF</A></td>
                      <td className="px-4 py-3 border-b">CDS</td>
                      <td className="px-4 py-3 border-b">eGFP</td>
                      <td className="px-4 py-3 border-b">Enhanced green fluorescent protein</td>
                      <td className="px-4 py-3 border-b">Aequorea victoria</td>
                      <td className="px-4 py-3 border-b">MoClo Plant Parts III: Transformation & Genome Engineering Kit by Voytas Lab</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 border-b  hover:bg-yellow-100"><A className='' href="https://registry.igem.org/parts/bba-25wrnvq0" target="_blank" rel="noopener noreferrer">BBa_25WRNVQ0</A></td>
                      <td className="px-4 py-3 border-b">CDS</td>
                      <td className="px-4 py-3 border-b">RFP</td>
                      <td className="px-4 py-3 border-b">Red fluorescent protein (codon-optimized for duckweed)</td>
                      <td className="px-4 py-3 border-b">-</td>
                      <td className="px-4 py-3 border-b">Own synthesis</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 border-b  hover:bg-yellow-100"><A className='' href="https://registry.igem.org/parts/bba-25wes1bn" target="_blank" rel="noopener noreferrer">BBa_25WES1BN</A></td>
                      <td className="px-4 py-3 border-b">terminator + 3' UTR</td>
                      <td className="px-4 py-3 border-b">AtuOCS</td>
                      <td className="px-4 py-3 border-b">Octopine synthase terminator + 3'UTR</td>
                      <td className="px-4 py-3 border-b"><em>Agrobacterium</em> tumefaciens</td>
                      <td className="px-4 py-3 border-b">MoClo Plant Parts Kit deposited by Patron lab</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 border-b  hover:bg-yellow-100"><A className='' href="https://registry.igem.org/parts/bba-k3900016" target="_blank" rel="noopener noreferrer">BBa_K3900016</A></td>
                      <td className="px-4 py-3 border-b">terminator + 3' UTR</td>
                      <td className="px-4 py-3 border-b">t35S</td>
                      <td className="px-4 py-3 border-b">35S Terminator + 3'UTR</td>
                      <td className="px-4 py-3 border-b">Cauliflower Mosaic Virus</td>
                      <td className="px-4 py-3 border-b">MoClo Plant Parts Kit deposited by Patron lab</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800" style={{fontFamily: 'Space Grotesk'}}>
                Composite Parts
              </h3>
              
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300" style={{fontFamily: 'Urbanist'}}>
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b">Part Identifier</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b">Part Type</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b">Part Name</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b">Short Description</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b">Source</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 border-b  hover:bg-yellow-100"><A className='' href="https://registry.igem.org/parts/bba-252fui3p" target="_blank" rel="noopener noreferrer">BBa_252FUI3P</A></td>
                      <td className="px-4 py-3 border-b">reporter</td>
                      <td className="px-4 py-3 border-b">pTM001</td>
                      <td className="px-4 py-3 border-b">p2a-eGFP</td>
                      <td className="px-4 py-3 border-b">Gifted by Dr. Tomáš Moravec</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 border-b  hover:bg-yellow-100"><A className='' href="https://registry.igem.org/parts/bba-25hi9lhm" target="_blank" rel="noopener noreferrer">BBa_25HI9LHM</A></td>
                      <td className="px-4 py-3 border-b">reporter</td>
                      <td className="px-4 py-3 border-b">p2a-RFP</td>
                      <td className="px-4 py-3 border-b">p2a-RFP (codon-optimized for duckweed)</td>
                      <td className="px-4 py-3 border-b">Own synthesis</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 border-b  hover:bg-yellow-100"><A className='' href="https://registry.igem.org/parts/bba-250g5ni2" target="_blank" rel="noopener noreferrer">BBa_250G5NI2</A></td>
                      <td className="px-4 py-3 border-b">PONG excision activity testing construct</td>
                      <td className="px-4 py-3 border-b">pIB004</td>
                      <td className="px-4 py-3 border-b">rZmUBI-5'YFP-mPing-3'YFP-t35S</td>
                      <td className="px-4 py-3 border-b">Own assembly from basic parts</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 border-b  hover:bg-yellow-100"><A className='' href="https://registry.igem.org/parts/bba-25dnbygj" target="_blank" rel="noopener noreferrer">BBa_25DNBYGJ</A></td>
                      <td className="px-4 py-3 border-b">plasmid</td>
                      <td className="px-4 py-3 border-b">pAMO101</td>
                      <td className="px-4 py-3 border-b">rZmUBI-GFP-t35S</td>
                      <td className="px-4 py-3 border-b">Gifted by Dr. Arturo-Mari Ordóñez</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 border-b  hover:bg-yellow-100"><A className='' href="https://registry.igem.org/parts/bba-253a2zv8" target="_blank" rel="noopener noreferrer">BBa_253A2ZV8</A></td>
                      <td className="px-4 py-3 border-b">plasmid</td>
                      <td className="px-4 py-3 border-b">pAMO052</td>
                      <td className="px-4 py-3 border-b">rZmUBI-RUBY-t35S</td>
                      <td className="px-4 py-3 border-b">Gifted by Dr. Arturo-Mari Ordóñez</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>


          <div id="primer-database" className="mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800" style={{fontFamily: 'Space Grotesk'}}>
              Oligos iGEM BRNO 2025 
            </h3>
            
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-300" style={{fontFamily: 'Urbanist'}}>
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b">ID</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b">Oligonucleotide Name</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b">Type/Purpose</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b">Sequence (5' to 3')</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  {oligoData.map((oligo) => (
                    <tr key={oligo.id} className="hover:bg-gray-50">
                      <td className="px-4 py-3 border-b">{oligo.id}</td>
                      <td className="px-4 py-3 border-b font-mono text-xs">{oligo.name}</td>
                      <td className="px-4 py-3 border-b">{oligo.type}</td>
                      <td className="px-4 py-3 border-b font-mono text-xs break-all">{oligo.sequence}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <References references={Reference} />

          
        </div>

        
      </div>
    </div>
  );
}


const Reference = [
    {
        id: 1,
        text: "Pouvreau, B., Vanhercke, T., & Singh, S. (2018). From plant metabolic engineering to plant synthetic biology: The evolution of the design/build/test/learn cycle. Plant Science, 273, 3–12.",
        url: "https://doi.org/10.1016/j.plantsci.2018.03.035"
    },
    {
        id: 2,
        text: "Charron, J.-B., O'Donoughue, L., Gélinas Bélanger, J., Copley, T. R., & Hoyos-Villegas, V. (2024). A comprehensive review of in planta stable transformation strategies. Plant Methods, 20(1), 1–25.",
        url: "https://doi.org/10.1186/s13007-024-01200-8"
    },
    {
        id: 3,
        text: "Kambampati, S., Verma, P. K., & Janga, M. R. (2025). Plant transformation and genome editing for precise synthetic biology applications. SynBio, 3(3), 9.",
        url: "https://doi.org/10.3390/synbio3030009"
    },
    {
        id: 4,
        text: "Acosta, K., Appenroth, K. J., Borisjuk, L., Edelman, M., Heinig, U., Jansen, M. A. K., Oyama, T., Pasaribu, B., Schubert, I., Sorrells, S., Sree, K. S., Xu, S., Michael, T. P., & Lam, E. (2021). Return of the Lemnaceae: Duckweed as a model plant system in the genomics and postgenomics era. The Plant Cell, 33(10), 3207–3234.",
        url: "https://doi.org/10.1093/plcell/koab189"
    },
    {
        id: 5,
        text: "Stomp, A.-M. (2005). The duckweeds: A valuable plant for biomanufacturing. Biotechnology Annual Review, 11, 69–99.",
        url: "https://doi.org/10.1016/S1387-2656(05)11002-3"
    },
    {
        id: 6,
        text: "Polfjärd, J. (2024). Plants produced by certain new genomic techniques. European Parliament Legislative Train Schedule.",
        url: "https://www.europarl.europa.eu/legislative-train/theme-sustaining-our-quality-of-life-food-security-water-and-nature/file-plants-produced-by-certain-new-genomic-techniques"
    },
    {
        id: 7,
        text: "Dombey, R., Buendía-Ávila, D., Barragán-Borrero, V., Diezma-Navas, L., Ponce-Mañé, A., Vargas-Guerrero, J. M., Elias, R., & Marí-Ordóñez, A. (2025). Atypical epigenetic and small RNA control of degenerated transposons and their fragments in clonally reproducing Spirodela polyrhiza. Genome Research. Advance online publication.",
        url: "https://doi.org/10.1101/gr.279532.124"
    },
    {
        id: 8,
        text: "Liu, P., Panda, K., Edwards, S. A., Chen, C., Xu, X., Yu, J., Voytas, D. F. (2024). Transposase-assisted target-site integration for efficient plant genome engineering. Nature, 631(8023), 593–600.",
        url: "https://doi.org/10.1038/s41586-024-07613-8"
    },
    {
        id: 9,
        text: "Wei, C., Li, Y., Li, Z., Wang, Y., Chen, X., & Sun, L. (2024). An endogenous promoter LpSUT2 discovered in duckweed. Frontiers in Plant Science, 15, 1368284.",
        url: "https://doi.org/10.3389/fpls.2024.1368284"
    },
    {
        id: 10,
        text: "Barragán-Borrero, V., de Santana Lopes, A., Batista, E. D. R., Höfer, M., Elias, R., Chakraborty, A., Ponce-Mañe, A., Descombes, C., Diezma-Navas, L., Petraki, L., Huber, M., Xu, S., & Marí-Ordóñez, A. (2025, August 28). Strain, procedures, and tools for reproducible genetic transformation and genome editing of Spirodela polyrhiza (L.) Schleid. bioRxiv. https://doi.org/10.1101/2025.08.28.672806",
        url: "https://doi.org/10.1101/2025.08.28.672806"
    }
    
]



 const oligoData = [
    { id: "1", name: "oOSEXPA8_f", type: "BBD", sequence: "TACAGTATAAATACCGAGGTG" },
    { id: "2", name: "oOSEXPA8_r", type: "BBD", sequence: "TGCGGTACAATGATATatac" },
    { id: "3", name: "oAtCOG1_f", type: "BBD", sequence: "AACACTATTGCTTTTCTCTC" },
    { id: "4", name: "oAtCOG1_r", type: "BBD", sequence: "CCATAATCTTTAACTAACTTTAC" },
    { id: "5", name: "oVvCEB1_f", type: "BBD", sequence: "GTGGAGTTATCCTATTGATG" },
    { id: "6", name: "oVvCEB1_r", type: "BBD", sequence: "GAAGAATATTCCATTTTGGC" },
    { id: "7", name: "oB3T_f", type: "check", sequence: "CCCACTCTGTGAAGACAATGC" },
    { id: "8", name: "oB3T_r", type: "check", sequence: "GTTTACCCGCCAATATATCCTGTCA" },
    { id: "9", name: "oB3T-utr_f", type: "check", sequence: "CATTCAAATATGTATCCGCTCATGAGAC" },
    { id: "10", name: "oRFP_r", type: "check", sequence: "GAGAACACCACCATCCTCGT" },
    { id: "11", name: "oAtCOG1-2_f", type: "BBD", sequence: "GAAACTTAATCACAACTCTCTCTTTAAT" },
    { id: "12", name: "oAtCOG1-2_r", type: "BBD", sequence: "TCAACCAAGAAGAAACCTCATTCA" },
    { id: "13", name: "oAtNLP7_f", type: "BBD", sequence: "CACTAATAATAACATTTTTAACGACG" },
    { id: "14", name: "oAtNLP7_r", type: "BBD", sequence: "TAGTTTTTCGGGTTCTGAAG" },
    { id: "15", name: "oLj1_f", type: "PDT", sequence: "CGTCCCGTCCCAAAATGC" },
    { id: "16", name: "oLj1_r", type: "PDT", sequence: "TGCTTCGCCCTTACCTCG" },
    { id: "17", name: "oLj2_f", type: "PDT", sequence: "CTCGTCCATGCTCTCGTTCA" },
    { id: "18", name: "oLj2_r", type: "PDT", sequence: "AGTGCGGCGACATCATCTAC" },
    { id: "19", name: "oLj3_f", type: "PDT", sequence: "ACTCACCACTCCTCAACGAC" },
    { id: "20", name: "oLj3_r", type: "PDT", sequence: "CTGACCGCTCCCACAAATGG" },
    { id: "21", name: "oSp1_f", type: "PDT", sequence: "GCCGCCGAATCAGCCTTC" },
    { id: "22", name: "oSp1_r", type: "PDT", sequence: "TGGAGTTGCTTTTGCGACAAGTT" },
    { id: "23", name: "oSp2_f", type: "PDT", sequence: "GAGGAGCAGTACCAGGACGA" },
    { id: "24", name: "oSp2_r", type: "PDT", sequence: "CCAGGGTTTGGATGGCGAA" },
    { id: "25", name: "oSp3_f", type: "PDT", sequence: "GCTTCTCACACTGGTCGTCT" },
    { id: "26", name: "oSp3_r", type: "PDT", sequence: "GAGTGCCGAGAGAGCCATTT" },
    { id: "27", name: "Lp1_f", type: "PDT", sequence: "GATTCATTAATGCAGCTGAGCTCCCTCTCCTTCTTCTCCT" },
    { id: "28", name: "Lp1_r", type: "PDT", sequence: "GCCAAGCTTATGGCACTGCAGCATCTCCAATTCAGCCTCC" },
    { id: "29", name: "o_0.5mPING-amp_mc_f", type: "TAIFR", sequence: "ggGGTCTCaGGAGggccagtcacaatgggggtt" },
    { id: "30", name: "o_0.5mPING-amp_mc_r", type: "TAIFR", sequence: "ggGGTCTCaAGCGcggcgcgggagaa" },
    { id: "31", name: "o_1.0mPING-amp_mc_f", type: "TAIFR", sequence: "ggGGTCTCaGGAGggattttgggtacaa" },
    { id: "32", name: "o_1.0mPING-amp_mc_r", type: "TAIFR", sequence: "cGGTCTCtAGCGggccagtcacaa" },
    { id: "33", name: "o_NPTII-amp_mc_f", type: "TAIFR", sequence: "gtGGTCTCaAATGattgaacaagatggatt" },
    { id: "34", name: "o_NPTII-amp_mc_r", type: "TAIFR", sequence: "cGGTCTCaCGAAtcagaagaactcgtcaag" },
    { id: "35", name: "o_GFP-del_fa_f", type: "TAIFR", sequence: "ggacacagatagaagcacggtaagatatcccgc" },
    { id: "36", name: "o_GFP-del_fa_r", type: "TAIFR", sequence: "aagctcgctcatggggccaggattttcctcaac" },
    { id: "37", name: "o_pEG-amp_fa_f", type: "TAIFR", sequence: "GTTAAACTCGACATGCAGAGTTTAGCCATCTC" },
    { id: "38", name: "o_pEG-amp_fa_r", type: "TAIFR", sequence: "ATCAGTGTTTGACAGTACATTAAAAACGTCCG" },
    { id: "39", name: "o_ZmUBI-out_fa_f", type: "TAIFR", sequence: "TTTAATGTACTGTCAAACACTGATAGTTTCTGC" },
    { id: "40", name: "o_ZmUBI-out_fa_r", type: "TAIFR", sequence: "AAACTCTGCATGTCGAGTTTAACTCTTTTGGC" },
    { id: "41", name: "o_mPING-out_spei_f", type: "TAIFR", sequence: "attACTAGTataaggccagtcacaatggg" },
    { id: "42", name: "o_mPING-out_spei_r", type: "TAIFR", sequence: "attACTAGTattaggccagtcacaatgg" },
    { id: "43", name: "o_RFP-amp-fa_f", type: "TAIFR", sequence: "aatcctggccccatgagcgagcttatcaaagaa" },
    { id: "44", name: "o_RFP-amp-fa_r", type: "TAIFR", sequence: "cttaccgtgcttctatctgtgtccgagcttaga" },
    { id: "45", name: "oGFP_ko1_f", type: "TAIFR", sequence: "GTTGGACCAGGATGGGCACCACCC" },
    { id: "46", name: "oGFP_ko1_r", type: "TAIFR", sequence: "AAACGGGTGGTGCCCATCCTGGTC" },
    { id: "47", name: "oGFP_ko2_f", type: "TAIFR", sequence: "GTTGCGTAGGTGAAGGTGGTCACG" },
    { id: "48", name: "oGFP_ko2_r", type: "TAIFR", sequence: "AAACCGTGACCACCTTCACCTACG" },
    { id: "49", name: "oGFP_ko3_f", type: "TAIFR", sequence: "GTTGGTCGCCCTCGAACTTCACCT" },
    { id: "50", name: "oGFP_ko3_r", type: "TAIFR", sequence: "AAACAGGTGAAGTTCGAGGGCGAC" },
    { id: "51", name: "oU6b_mc_f", type: "TAIFR", sequence: "cgGGTCTCaCTCGatgcaagaacgaactaagcc" },
    { id: "52", name: "oU6b_mc_r", type: "TAIFR", sequence: "cgGGTCTCaACCGccatccactccaagctcttg" },
    { id: "53", name: "oU6b_seq_f", type: "TAIFR", sequence: "ggaatcggcagcaaagg" },
    { id: "54", name: "oU6b_seq_r", type: "TAIFR", sequence: "cccagtcacgacgttg" },
    { id: "55", name: "oGLYa_agro_f", type: "check", sequence: "CCACCACCACGAGCACAAGTCT" },
    { id: "56", name: "oGLYa_agro_r", type: "check", sequence: "TGCCGAGACGGACACCCGAC" },
    { id: "57", name: "oAtCOG1_mc_short_f", type: "BBD", sequence: "CAGAAGACGTAATGATGTTTTCACAAAATCTTTTTACA" },
    { id: "58", name: "oAtCOG1_mc_r", type: "BBD", sequence: "CAGAAGACGTCGAATAACAAGATTGACCATCGG" },
    { id: "59", name: "oAtCOG1_mc_long_f", type: "BBD", sequence: "CAGAAGACGTAATGATGGCGACCCAAGATTC" },
    { id: "60", name: "oOsEXPA8_mc_f", type: "BBD", sequence: "CAGAAGACGTAATGAGTGACGCGACAATGG" },
    { id: "61", name: "oOsEXPA8_mc_r", type: "BBD", sequence: "CAGAAGACGTCGAATAGAACTGAGCCGAGG" },
    { id: "62", name: "Sp2_mc_f", type: "PDT", sequence: "ATGAAGACGTGGAGGTTGCAGAGGGTCTCGTTGTTCCT" },
    { id: "63", name: "Sp2_mc_r", type: "PDT", sequence: "ACGAAGACCTAGTACCACCGAGCCCATGATCAAGGAAC" },
    { id: "64", name: "oVvCEB1_mc_f", type: "BBD", sequence: "CAGAAGACAAAATGAATTCCAATCCATCACATG" },
    { id: "65", name: "oVvCEB1_mc_r", type: "BBD", sequence: "ACGAAGACAACGAAAAAAGAGTATCTGTTGCTG" },
    { id: "66", name: "oZmUBI_amp_mc_f", type: "TAIFR", sequence: "gcGGTCTCaGGAGcagtgcagcgtgac" },
    { id: "67", name: "oZmUBI_amp_mc_r", type: "TAIFR", sequence: "cgGGTCTCaCATTgtactcaaggttagagcata" },
    { id: "68", name: "oNPTII-amp_mc_f", type: "TAIFR", sequence: "gtGGTCTCaAATGattgaacaagatggatt" },
    { id: "69", name: "o_NPTII-amp_mc_r_2", type: "TAIFR", sequence: "CGGTCTCACGAACAGAAGAACTCGTCAAG" },
    { id: "70", name: "o_NPTII-amp_mc_r_3", type: "TAIFR", sequence: "CGGTCTCACGAACCGAAGAACTCGTCAAG" },
    { id: "71", name: "oFragmentB_f", type: "TAIFR", sequence: "GTCAAGTCTGCTTTTATTATTTTTAAGCGTGC" },
    { id: "72", name: "oFragmentB_r", type: "TAIFR", sequence: "TTTATCCGTTCGTCCATTTGTATGTGC" },
    { id: "73", name: "oFragmentC_f", type: "TAIFR", sequence: "GGACGAACGGATAAACCTTTTCACG" },
    { id: "74", name: "oFragmentA_r", type: "TAIFR", sequence: "ATAATAAAAGCAGACTTGACCTGATAGTTTGG" },
    { id: "75", name: "oMCL0_f", type: "check", sequence: "AATACGCAAACCGCCTCTCC" },
    { id: "76", name: "oMCL0_r", type: "check", sequence: "ccgaaaagtgccacctgac" },
    { id: "77", name: "oMCL1_f", type: "check", sequence: "GAACCCTGTGGTTGGCATGCACATAC" },
    { id: "78", name: "oMCL1_r", type: "check", sequence: "CTGGTGGCAGGATATATTGTGGTG" },
    { id: "79", name: "oMCL2_f", type: "check", sequence: "GTGGTGTAAACAAATTGACGC" },
    { id: "80", name: "oMCL2_r", type: "check", sequence: "GGATAAACCTTTTCACGCCC" },
    { id: "81", name: "oGFP-gb_f", type: "check", sequence: "GCGCCGTCTCGCTCGAATGGTGAGCAAGGGCGAGGA" },
    { id: "82", name: "oGFP-gb_r", type: "check", sequence: "GCGCCGTCTCGCTCACGAACCCTTGTACAGCTCGTCCATGC" },
    { id: "83", name: "oSp2_XhoI_f", type: "PDT", sequence: "gcgtCTCGAGGTTGCAGAGGGTCTCGTTGTTCCT" },
    { id: "84", name: "oSp2_SpeI_r", type: "PDT", sequence: "aatcACTAGTCCACCGAGCCCATGATCAAGGAAC" },
    { id: "85", name: "o_ZmUbi_in_f", type: "check", sequence: "TTTTAGTGTGCATGTGTTCTCC" },
    { id: "86", name: "o_ZmUbi_in_r", type: "check", sequence: "AATAGCGTATGAAGGCAGGG" },
    { id: "87", name: "o_ZmUbi_col_f", type: "check", sequence: "CATCGTTACAATCAACATGC" },
    { id: "88", name: "o_ZmUbi_col_r", type: "check", sequence: "cttcgtatgagaaaagaggg" },
    { id: "89", name: "o_pEG-split_amp_1_r", type: "TAIFR", sequence: "tttcatgcttgttcctcttggcg" },
    { id: "90", name: "o_pEG_split_amp_2_f", type: "TAIFR", sequence: "caagaggaacaagcatgaaacc" },
    { id: "91", name: "oZmUBi_amp_mc_2_f", type: "TAIFR", sequence: "GCGAAGACATGGAGCAGTGCAGCGTGAC" },
    { id: "92", name: "oZmUBi_amp_mc_2_r", type: "TAIFR", sequence: "CGGAAGACATCATTGTACTCAAGGTTAGAGCA" },
    { id: "93", name: "o_0.5mPing-L0_f", type: "TAIFR", sequence: "GCGAAGACATCTCAGGAGTTAGGCCAGTCACAA" },
    { id: "94", name: "o_0.5mPing-L0_r", type: "TAIFR", sequence: "CGGAAGACTACTCGAGCGCGGCGCGGGA" },
    { id: "95", name: "o_1.0mPing-L0_f", type: "TAIFR", sequence: "GCGAAGACATCTCAGGAGGGATTTTGGGT" },
    { id: "96", name: "o_1.0mPing-L0_r", type: "TAIFR", sequence: "GCGAAGACTACTCGAGCGTAAGGCCAGTCACAA" },
    { id: "97", name: "o_mPing-nt_f", type: "TAIFR", sequence: "gcGAAGACtaAATGtaaggccagtcacaatgg" },
    { id: "98", name: "o_mPing-nt_r", type: "TAIFR", sequence: "cgGAAGACatACCTttaggccagtcacaat" },
    { id: "99", name: "oZmUbi_amp_mc_2_r2", type: "TAIFR", sequence: "CGGAAGACATCATTTTCTGCAGAAGTAACACCAAAC" },
    { id: "100", name: "oLg001_L0_fw", type: "PDT", sequence: "gcGAAGACatggagCGTTTAGGTGTGCGGC" },
    { id: "101", name: "oLg001_L0_rev", type: "PDT", sequence: "ggGAAGACatcattGCATTTAGTTGTTAACAAATCTCG" },
    { id: "102", name: "oLg002_L0_fw", type: "PDT", sequence: "gcGAAGACatggagGAGGGGGCCGATAGC" },
    { id: "103", name: "oLg002_L0_rev", type: "PDT", sequence: "ggGAAGACatcattCTTTTCCCTCGCCCTTTTC" },
    { id: "104", name: "oLg003_L0_fw", type: "PDT", sequence: "gcGAAGACatggagAACAGATGGTGTTGGAGTC" },
    { id: "105", name: "oLg003_L0_rev", type: "PDT", sequence: "ggGAAGACatcattATCGGAGGAGGTGGC" },
    { id: "106", name: "oLj001_L0_fw", type: "PDT", sequence: "ggGAAGACatcattCGTTGAGGGCGGAAATTTG" },
    { id: "107", name: "oLj001_L0_rev", type: "PDT", sequence: "gcGAAGACatggagGGGAGCTCCTTAATTCTGTGG" },
    { id: "108", name: "oLj002_L0_fw", type: "PDT", sequence: "ggGAAGACatcattCCATCTTCCTCAGCC" },
    { id: "109", name: "oLj002_L0_rev", type: "PDT", sequence: "gcGAAGACatggagCGGTCCGCCTGC" },
    { id: "110", name: "oLm001_L0_fw", type: "PDT", sequence: "gcGAAGACatggagAGGGGGAGAATGTC" },
    { id: "111", name: "oLm001_L0_rev", type: "PDT", sequence: "ggGAAGACatcattATCAGTTGGGAAGGAAGG" },
    { id: "112", name: "oLm002_L0_fw", type: "PDT", sequence: "gcGAAGACatggagGTTTCAATCCATGAAGC" },
    { id: "113", name: "oLm002_L0_rev", type: "PDT", sequence: "ggGAAGACatcattGAATTATTCGACAAAAGGC" },
    { id: "114", name: "oLm003_L0_fw", type: "PDT", sequence: "gcGAAGACatggagCGACAGAAGAGGCTCTTAGAGG" },
    { id: "115", name: "oLm003_L0_rev", type: "PDT", sequence: "ggGAAGACatcattTCCCTCGGCGCGAC" },
    { id: "116", name: "oSp001_L0_fw", type: "PDT", sequence: "gcGAAGACatggagTTTTCAGGAGAGAAACG" },
    { id: "117", name: "oSp001_L0_rv", type: "PDT", sequence: "ggGAAGACatcattCCATCTTTTGGACTAGAC" },
    { id: "118", name: "oSp002_L0_fw", type: "PDT", sequence: "gcGAAGACatggagTCGATGCACGCGC" },
    { id: "119", name: "oSp002_L0_rev", type: "PDT", sequence: "ggGAAGACatcattCCCCCACACCAGATAC" },
    { id: "120", name: "oSp003_L0_fw", type: "PDT", sequence: "gcGAAGACatggagACAGACGTGATCC" },
    { id: "121", name: "oSp003_L0_rv", type: "PDT", sequence: "ggGAAGACatcattCGCTATTATACCGTAAAAC" },
    { id: "122", name: "oSp004_L0_fw", type: "PDT", sequence: "gcGAAGACatggagTCAACACCTCCCGC" },
    { id: "123", name: "oSp004_L0_rv", type: "PDT", sequence: "ggGAAGACatcattGAGGCAGAGAGTCTACG" },
    { id: "124", name: "oSp005_L0_fw", type: "PDT", sequence: "gcGAAGACatggagAGGTCACCCGGAAAGACC" },
    { id: "125", name: "oSp005_L0_rev", type: "PDT", sequence: "ggGAAGACatcattGCAGTAGAATGGCGGCC" },
    { id: "126", name: "o_0.5mPing-L1-2_f", type: "TAIFR", sequence: "GGGGTCTCAGGAGTTAGGCCAGTCACAATGGGG" },
    { id: "127", name: "o_1.0mPing-L1-2_r", type: "TAIFR", sequence: "CGGTCTCTAGCGTAAGGCCAGTCACAA" },
    { id: "128", name: "o_GFP-check_f", type: "check", sequence: "GCTGACCCTGAAGTTCATCTGCACC" },
    { id: "129", name: "o_GFP-check_r", type: "check", sequence: "GCTCGATGCGGTTCACCAGG" },
    { id: "130", name: "oMusa_L0_fw", type: "PDT", sequence: "gcGAAGACatggaggaaaagaatgagcatatcgtgg" },
    { id: "131", name: "oMusa_L0_rev", type: "PDT", sequence: "ggGAAGACatcattctgatcaaagagataaaagaagaaagg" },
    { id: "132", name: "oCas9_mc_f", type: "TAIFR", sequence: "gcGAAGACataatgGCTCGAtcCCATGGCTCCTGCTGC" },
    { id: "133", name: "oCas9_mc_r", type: "TAIFR", sequence: "ggGAAGACatcgaaCCGACTTTACGCTTCTTCTTTGGGTCAGC" },
    { id: "134", name: "oEsp3I_f", type: "TAIFR", sequence: "GGTCTCaTTGTaaGTTGaGAGACGaGTTGGGTTCCAGTGCCATTG" },
    { id: "135", name: "oEsp3I_r", type: "TAIFR", sequence: "GGTCTCaAAACaaAAACaGAGACGaGTTGAGCAAAAGCACAAACA" },
    { id: "136", name: "oYFP-check_f", type: "TAIFR", sequence: "CAAGCTGACCCTGAAGTTCATCTG" },
    { id: "137", name: "oYFP-check_r", type: "TAIFR", sequence: "CTGGTAGCTCAGGTAGTGGTTGTC" },
    { id: "138", name: "o_nls-pong_mc_dp_one_f", type: "TAIFR", sequence: "GCTCCTGCTGCCAAAAGAGTTAAACTCGACatgcagagtCTCgccatc" },
    { id: "139", name: "nls_pong_dp_two_f", type: "TAIFR", sequence: "GAAGACacAATGGCTCCTGCTGCCAAAAGAGTTAAACTCG" },
    { id: "140", name: "pong_cds1_ns_mc_r", type: "TAIFR", sequence: "GAAGACacCGAAgtcagcaaaGAGcttttcc" },
    { id: "141", name: "o_YFP_mPING_YFP_f", type: "TAIFR", sequence: "GGGAAGACAAAATGGTGAG" },
    { id: "142", name: "o_YFP_mPING_YFP_r", type: "TAIFR", sequence: "CCGAAGACAAAAGCTCACTT" },
    { id: "143", name: "oGFP_qPCR_f", type: "PDT", sequence: "ATCATGGCCGACAAGCAGAAG" },
    { id: "144", name: "oGFP_qPCR_r", type: "PDT", sequence: "TCTCGTTGGGGTCTTTGCTC" },
    { id: "145", name: "oNPT_qPCR_f", type: "PDT", sequence: "CTCGACGTTGTCACTGAAGC" },
    { id: "146", name: "oNPT_qPCR_r", type: "PDT", sequence: "GCCGGATCAAGCGTATGC" },
    { id: "147", name: "o005_seq_f", type: "PDT", sequence: "ACGCTACTAGAATTCGAGCTC" },
    { id: "148", name: "o005_seq_r", type: "PDT", sequence: "CATGTGCATCCTCGTAAAGC" },
    { id: "149", name: "oTHI4_KO1_f", type: "thi4 knockout", sequence: "GTTGAACGTGCCTGGCAACTTTGA" },
    { id: "150", name: "oTHI4_KO1_r", type: "thi4 knockout", sequence: "AAACTCAAAGTTGCCAGGCACGTT" },
    { id: "151", name: "oTHI4_KO2_f", type: "thi4 knockout", sequence: "GTTGGTGATTCACCCTCGGACAGA" },
    { id: "152", name: "oTHI4_KO2_r", type: "thi4 knockout", sequence: "AAACTCTGTCCGAGGGTGAATCAC" },
    { id: "153", name: "oTHI4_KO3_f", type: "thi4 knockout", sequence: "GTTGAGTACATCTGCGTGTATCTG" },
    { id: "154", name: "oTHI4_KO1_r", type: "thi4 knockout", sequence: "AAACCAGATACACGCAGATGTACT" },
    { id: "155", name: "oTDNA-check_f", type: "RA genotyping", sequence: "GCCTGCTTGCCGAATATCAT" },
    { id: "156", name: "oTDNA-check_r", type: "RA genotyping", sequence: "GGTTTACCCGCCAATATATCCTGTC" },
    { id: "157", name: "o1.0mPing-check_f", type: "RA genotyping", sequence: "GCATTTAATTGATACAAGTTGCTGGGA" },
    { id: "158", name: "oRFP_qPCR_r", type: "PDT", sequence: "GCAACGGCCATCTTCATGC" },
    { id: "159", name: "oRFP_qPCR_f", type: "PDT", sequence: "ACACTCTCAGATGGCTCTTAAGC" },
    { id: "160", name: "oZmUBI-colony_f", type: "check", sequence: "GACAAACAAGTGCACGGCAT" },
    { id: "161", name: "oZmUBI-colony_r", type: "check", sequence: "AGGGCCCGGTAGTTCTACTT" }
  ];
