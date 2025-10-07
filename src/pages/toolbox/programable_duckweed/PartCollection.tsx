import React from 'react';
import References from '../../../components/References';

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
            The 55 parts in our collection embody our first major iGEM stride toward making duckweed genetic engineering faster and more accessible - though the journey is only beginning.
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
                  Stable duckweed genome insertion, 5x faster than before via the customizable PING/PONG system
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg border-l-4 border-purple-500">
                <h3 className="text-xl font-semibold mb-2 text-purple-900" style={{fontFamily: 'Space Grotesk'}}>
                  9 parts for our CRISPR/Cas9 tool - 8 basic, 1 composite
                </h3>
                <p className="text-gray-700" style={{fontFamily: 'Urbanist'}}>
                  Gene knockouts with a single digest & ligate reaction via our adaptable pIB006 construct
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-6 rounded-lg border-l-4 border-amber-500">
                <h3 className="text-xl font-semibold mb-2 text-amber-900" style={{fontFamily: 'Space Grotesk'}}>
                  21 new endogenous parts with testing constructs - 7 basic, 14 composite
                </h3>
                <p className="text-gray-700" style={{fontFamily: 'Urbanist'}}>
                  New candidates for duckweed endogenous promoters + 5' UTRs: identified based on transcriptomic data and characterized by a set of measurement constructs
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
              <p className="text-gray-800 font-medium" style={{fontFamily: 'Urbanist'}}>
                We assembled this collection to lower the entry barrier for future teams interested in duckweed research. With these parts, iGEMers can fulfil the massive potential of the tiny fastest growing plant on Earth.
              </p>
            </div>
          </div>

          {/* What is wrong section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900" style={{fontFamily: 'Space Grotesk'}}>
              What is wrong with duckweed genetic engineering?
            </h2>
            
            <div className="prose max-w-none text-gray-700" style={{fontFamily: 'Urbanist'}}>
              <p className="mb-4">
                For iGEM teams and plant researchers, the greatest bottleneck is <strong>time</strong>. Compared to bacteria or yeast, plants grow slowly, and engineering cycles can take months [1]. For non-model species, the challenges multiply: stable transformation protocols are often unreliable or missing, transient systems are inconsistent, and only a few regulatory parts are available [2]. The result is a vicious cycle – slow growth and slow transformations make iterations long, which delays part characterization, and stalls both fundamental research and practical applications [3].
              </p>
              
              <p className="mb-4">
                To break this cycle, we turned to duckweed, <strong>the fastest-growing plant in the world</strong> [4]. With doubling time of just 48 hours and a naturally high protein content, duckweed holds enormous potential: as protein-rich feed, a phytoremediation tool, and a sustainable chassis for biomanufacturing [5]. Our original focus was next-generation cattle feed grown directly on the liquid fraction of manure. Yet, techno-economic analysis and farmer consultations revealed that current duckweeds lack agronomic traits, important for farm deployment: optimized nitrogen uptake, faster biomass accumulation, and larger fronds. Traditional breeding to introduce these traits would take decades. Genetic engineering could be faster – <strong>if the tools existed</strong>.
              </p>
              
              <p className="mb-4">
                Here, we faced the same bottleneck as every plant synthetic biology project: <strong>no fast, and reliable stable transformation protocol</strong> and <strong>very few characterized parts</strong>. Without these tools, duckweed research is too slow.
              </p>
              
              <p className="mb-4">
                Our part collection was built to change that. It contains constructs necessary for generating <strong>stable transgene insertions into the duckweed nuclear genome within two weeks under non-sterile conditions</strong> using our customizable Ping/PONG TAIFR system, a tool for user-friendly CRISPR/Cas9 knock-outs, and a set of seven endogenous promoter candidates + 5' UTR parts. Endogenous parts were chosen mainly for their potential to drive more stable and potentially stronger expression in the native plant.
              </p>
              
              <p className="font-medium">
                All in all, parts in our collection together enable faster engineering iteration to push duckweed research forward to finally unlock its true potential.
              </p>
            </div>
          </section>



          {/* TAIFR Description */}
            <div className="prose max-w-none text-gray-700 mb-8" style={{fontFamily: 'Urbanist'}}>
              <h3 className="text-3xl font-semibold mb-4 text-gray-800" style={{fontFamily: 'Space Grotesk'}}>
                TAIFR parts
              </h3>
              
              <p className="mb-4">
                <b>T</b>ransposase-<b>A</b>ssociated <b>I</b>nsertion & <b>F</b>rond <b>R</b>egeneration is a method designed to bypass the five-month process of generating stable duckweed transformants through tissue culture, where genome-insertion mutants are induced, transformed, and regenerated from calli.
              </p>
              
              <p className="mb-4">
                Through discussions with our advisor, Dr. Ordóñez (<a href="#" className="text-blue-600 underline" target="_blank">read more here</a>), and later confirmed by our own experiments using a gifted testing construct, we verified that <strong>transient expression via standard agroinfiltration works efficiently in duckweed</strong> [7]. We therefore concluded that the bottleneck in stable transformation is not expression, but <strong>the low efficiency of <em>Agrobacterium</em> T-DNA insertion into the duckweed genome</strong>.
              </p>
              
              <p className="mb-4">
                Our strategy was to <strong>enable or to increase number of insertion events</strong>. If enough transformed cells are generated, there would be no need to go through a callus stage. Instead, <em>Agrobacterium</em> carrying our gene of interest (fused to a resistance marker) can be applied directly to duckweed fronds. By carefully adjusting the antibiotic concentration, transformed cells carrying the construct are favored to outcompete non-transformed ones and regenerate into fully transgenic fronds - using nothing more than a simple transient transformation.
              </p>
              
              <p className="mb-4">
                Encouraged by its co-inventor Dr. Keith Slotkin, we adapted the PING/PONG transposon system, first described by Liu et al. in <em>Arabidopsis</em> and soybean [8]. In this system, the PONG transposase recognizes, excises, and integrates any DNA sequence bordered by mPing transposable elements. To apply this, we designed two constructs:
              </p>
              
              <ul className="list-disc ml-6 mb-4">
                <li><strong>pIB003</strong> carrying the PONG transposase,</li>
                <li><strong>pIB005</strong> carrying a swappable cassette with a gene of interest and a G418 resistance marker, flanked by mPing borders.</li>
              </ul>
              
              <p className="mb-4">
                To customize the TAIFR system, the user digests plasmid pIB005 with Esp3I, generating a 5' overhang (AATG) and a 3' overhang (TTCG) - the standard MoClo CDS1 no stop codon overhangs. The digested backbone can be purified from gel and ligated with any CDS containing correct MoClo-compatible overhangs, allowing simple integration of new genes of interest (see the protocol for ligation of your gene into pIB005 <a href="#" className="text-blue-600 underline" target="_blank">here</a>).
              </p>
              
              <p className="mb-4">
                We confirmed the functionality of the first half of our method (Transposase-Assisted Insertion) by verifying mPing-bordered cargo insertion into the duckweed nuclear genome through fluorescence and PCR analysis (see results <a href="#" className="text-blue-600 underline" target="_blank">here</a>). The second part has not yet worked due to several factors (<a href="#" className="text-blue-600 underline" target="_blank">read more here</a>), which is why we have not been able to test whether our Cre-lox system functions as intended.
              </p>
              
              <p className="mb-4">
                <em>Theoretically</em>, it should. Once the Frond Regeneration part of our method is established (see proposed strategies), the presence of the Cre-lox system will enable transgene stacking in duckweed lines developed via the TAIFR method. This is particularly important because TAIFR currently relies on a single resistance marker, as duckweed is generally not very sensitive to antibiotics. Moreover, the continued presence of resistance genes in transgenic lines is not a desirable state.
              </p>
              
              <p className="mb-4">
                Excision of p2A-NPTII from transgenic duckweed lines upon expression of Cre recombinase and facilitated by heterologous lox sites (lox 71 and lox 66) will result in a mutated lox site (lox71/66) that is no longer recognizable by Cre recombinase, thereby allowing repeated insertion of the TAIFR translational unit and excision of the selection marker (NPTII).
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
                      <td className="px-4 py-3 border-b hover:bg-yellow-100"><a className='' href="https://registry.igem.org/parts/bba-25fc90w0" target="_blank" rel="noopener noreferrer">BBa_25FC90W0</a></td>
                      <td className="px-4 py-3 border-b">PONG ORF1</td>
                      <td className="px-4 py-3 border-b">Pong Transposase, ORF 1 subunit (codon-optimized for duckweed)</td>
                      <td className="px-4 py-3 border-b"><em>Oryza sativa</em></td>
                      <td className="px-4 py-3 border-b">Gene synthesis</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 border-b  hover:bg-yellow-100"><a className='' href="https://registry.igem.org/parts/bba-25fwv63m" target="_blank" rel="noopener noreferrer">BBa_25FWV63M</a></td>
                      <td className="px-4 py-3 border-b">PONG ORF2</td>
                      <td className="px-4 py-3 border-b">Pong Transposase, ORF 2 subunit (codon-optimized for duckweed)</td>
                      <td className="px-4 py-3 border-b"><em>Oryza sativa</em></td>
                      <td className="px-4 py-3 border-b">Gene synthesis</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 border-b  hover:bg-yellow-100"><a className='' href="https://registry.igem.org/parts/bba-25n85q45" target="_blank" rel="noopener noreferrer">BBa_25N85Q45</a></td>
                      <td className="px-4 py-3 border-b">mPing</td>
                      <td className="px-4 py-3 border-b">mPing: non-autonomous transposable element</td>
                      <td className="px-4 py-3 border-b"><em>Oryza sativa</em></td>
                      <td className="px-4 py-3 border-b">Gene synthesis</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 border-b  hover:bg-yellow-100"><a className='' href="https://registry.igem.org/parts/bba-25ka0lqp" target="_blank" rel="noopener noreferrer">BBa_25KA0LQP</a></td>
                      <td className="px-4 py-3 border-b">0.5mPing</td>
                      <td className="px-4 py-3 border-b">mPing Left (5') Border</td>
                      <td className="px-4 py-3 border-b"><em>Oryza sativa</em></td>
                      <td className="px-4 py-3 border-b">Gene synthesis</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 border-b  hover:bg-yellow-100"><a className='' href="https://registry.igem.org/parts/bba-25m7xiji" target="_blank" rel="noopener noreferrer">BBa_25M7XIJI</a></td>
                      <td className="px-4 py-3 border-b">1..0mPing</td>
                      <td className="px-4 py-3 border-b">mPing Right (3') Border</td>
                      <td className="px-4 py-3 border-b"><em>Oryza sativa</em></td>
                      <td className="px-4 py-3 border-b">Gene synthesis</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 border-b  hover:bg-yellow-100"><a className='' href="https://registry.igem.org/parts/bba-253u11bj" target="_blank" rel="noopener noreferrer">BBa_253U11BJ</a></td>
                      <td className="px-4 py-3 border-b">NLS</td>
                      <td className="px-4 py-3 border-b">Nuclear Localization Signal (codon-optimized for duckweed)</td>
                      <td className="px-4 py-3 border-b">Simian virus 40</td>
                      <td className="px-4 py-3 border-b">Gene synthesis</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 border-b  hover:bg-yellow-100"><a className='' href="https://registry.igem.org/parts/bba-k649205" target="_blank" rel="noopener noreferrer">BBa_K649205</a></td>
                      <td className="px-4 py-3 border-b">Lox71</td>
                      <td className="px-4 py-3 border-b">Cre recombinase recognition site Lox71</td>
                      <td className="px-4 py-3 border-b">Bacteriophage P1</td>
                      <td className="px-4 py-3 border-b">Gene synthesis</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 border-b  hover:bg-yellow-100"><a className='' href="https://registry.igem.org/parts/bba-k649206" target="_blank" rel="noopener noreferrer">BBa_K649206</a></td>
                      <td className="px-4 py-3 border-b">Lox66</td>
                      <td className="px-4 py-3 border-b">Cre recombinase recognition site Lox66</td>
                      <td className="px-4 py-3 border-b">Bacteriophage P1</td>
                      <td className="px-4 py-3 border-b">Gene synthesis</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 border-b  hover:bg-yellow-100"><a className='' href="https://registry.igem.org/parts/bba-25vsfer6" target="_blank" rel="noopener noreferrer">BBa_25VSFER6</a></td>
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
                      <td className="px-4 py-3 border-b  hover:bg-yellow-100"><a className='' href="https://registry.igem.org/parts/bba-25ubd3db" target="_blank" rel="noopener noreferrer">BBa_25UBD3DB</a></td>
                      <td className="px-4 py-3 border-b">PONG</td>
                      <td className="px-4 py-3 border-b">Pong Transposase with Nuclear Localization Sequence (codon-optimized for duckweed)</td>
                      <td className="px-4 py-3 border-b">Own assembly from basic parts</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 border-b  hover:bg-yellow-100"><a className='' href="https://registry.igem.org/parts/bba-25bd3z4p" target="_blank" rel="noopener noreferrer">BBa_25BD3Z4P</a></td>
                      <td className="px-4 py-3 border-b">pIB003</td>
                      <td className="px-4 py-3 border-b">rZmUBI-NLS-Pong-2A-RFP-t35S</td>
                      <td className="px-4 py-3 border-b">Own assembly from basic parts</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 border-b  hover:bg-yellow-100"><a className='' href="https://registry.igem.org/parts/bba-25460yvj" target="_blank" rel="noopener noreferrer">BBa_25460YVJ</a></td>
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
                <p className="text-base text-gray-700" style={{fontFamily: 'Urbanist'}}>
                  <strong>Figure 1. </strong> 
                         pIB005 contains a cassette flanked on both sides by the non-transposable element mPing. Inside the cassette, there is a fluorescent marker (GFP) and a resistance gene against neomycin (NPTII). Both GFP and NPTII are linked by a self-cleaving 2A peptide (derived from porcine teschovirus-1), allowing their parallel expression. The GFP-p2A-NPTII ORF is driven by the ubiquitin promoter from Zea mays (rZmUBI) and terminated by the Cauliflower Mosaic Virus terminator sequence (t35S). This design minimizes the overall cassette size, resulting in higher insertion efficiency. The gene for GFP in the cassette is bordered by Esp3I restriction sites, allowing seamless swapping of the first coding sequence (CDS1) in the translational unit. This design enables customization of which gene is inserted and expressed in duckweed using our TAIFR method. The second CDS of the translational unit (p2A-NPTII) is bordered by lox sites - specifically mutated sequences, with lox71 at the 5′ end and lox66 at the 3′ end. Upon expression of Cre recombinase, this design enables excision of the selection marker (NPTII) from transgenic duckweed, allowing transgene stacking in a single line using our TAIFR method. Excision of p2A-NPTII from transgenic duckweed lines results in a mutated lox site that is no longer recognizable by Cre recombinase, thereby allowing repeated insertion of the TAIFR translational unit and excision of the selection marker (NPTII).The entire expression cassette is bordered by T-DNA for Agrobacterium-mediated transformation and is housed in a binary vector, allowing replication in both E. coli and Agrobacterium tumefaciens.

                    </p>
              </div>
              
              <div className=" p-6 rounded-lg">
                <img src="https://static.igem.wiki/teams/5642/images/toolbox/partcollection/pib003-1.webp" alt="pIB003 Diagram" className="w-full h-auto mb-4 rounded-lg" />
                <p className="text-base text-gray-700" style={{fontFamily: 'Urbanist'}}>
                  <strong>Figure 2.</strong> pIB003 is carrying ORFs for two PONG transposase subunits, separated by self-cleaving 2A peptide from <em>Thosea asigna</em> virus (t2a) with nuclear localization sequence (NLS), linked with red fluorescent protein (RFP) by a self-cleaving 2A peptide derived from Porcine teschovirus-1 (p2a). Expression of PONG-p2a-RFP is driven by ubiquitin promoter from <em>Zea mays</em> (rZmUBI) and terminated by terminator sequence derived from Cauliflower Mosaic Virus (t35S). Both PONG and p2a-RFP are duckweed-codon optimized. Expression cassette is bordered by T-DNA allowing for <em>Agrobacterium</em>-mediated transformation and lies in binary vector, allowing for replication both in <em>E.coli</em> and in <em>Agrobacterium tumefaciens</em>.
                </p>
              </div>
            </div>
          </section>

          {/* CRISPR/Cas9 Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900" style={{fontFamily: 'Space Grotesk'}}>
              2. CRISPR/Cas9-based Gene Knockout Tool for Monocot Plants
            </h2>
            
            <div className="prose max-w-none text-gray-700 mb-8" style={{fontFamily: 'Urbanist'}}>
              <p className="mb-4">
                When we set out to create mutant duckweeds with a single gene knocked out for our Meristematic Assay, we discovered that assembling a gene knockout construct required multiple, relatively laborious and time-consuming cloning steps. This process was made even more difficult by the large size of the individual parts. To streamline our own work – and to spare future iGEM teams the same challenge – we designed a tool that would be as ready-to-use as possible for downstream applications: <b>pIB006</b>.
              </p>
            </div>


            {/* pIB006 Diagram */}
            <div className="grid md:grid-cols-4 gap-6 mb-8">
              <div className="md:col-span-3 ">
                    <img src="https://static.igem.wiki/teams/5642/images/toolbox/partcollection/pib006-copy.webp" alt="pIB006 Diagram" className="w-full h-auto mb-4 rounded-lg" />
              </div>
              <div className="md:col-span-1  ">
                <p className="text-base text-gray-700" style={{fontFamily: 'Urbanist'}}>
                    <strong>Figure 3.</strong> pIB006 contains three expression cassettes designed for rapid and customizable gene knockouts using the CRISPR/Cas9 system. The first cassette encodes a plant codon-optimized Cas9 driven by the <em>Zea mays</em> ubiquitin promoter (rZmUBI) and terminated by the Cauliflower Mosaic Virus terminator (t35S).The second cassette carries the neomycin resistance gene (NPTII) for antibiotic selection. Expression of NPTII is controlled by the nopaline synthase promoter (rNOS) from <em>Agrobacterium tumefaciens</em> and terminated by the terminator sequence nopaline synthase gene (tNOS) from <em>Agrobacterium tumefaciens</em>. The third cassette provides the CRISPR guide RNA transcription unit. It consists of the <em>Oryza sativa</em> U6 promoter (rOsU6) followed by a customizable filler sequence flanked by Esp3I restriction sites, a tracrRNA scaffold, and a polyadenylation signal. This design allows seamless replacement of the filler sequence with user-defined gRNA oligonucleotides using a simple digest-and-ligate reaction with Esp3I-compatible overhangs. The entire expression cassette is bordered by T-DNA for <em>Agrobacterium</em>-mediated transformation and is housed in a binary vector, allowing replication in both <em>E. coli</em> and <em>Agrobacterium tumefaciens</em>.
                </p>

             </div>   
            </div>

            <div className="prose max-w-none text-gray-700" style={{fontFamily: 'Urbanist'}}>
              <p className="mb-4">
                Unfortunately, we didn't have the chance to test the functionality of our pIB006 part, except for digesting and ligating the gRNA into it, which we successfully performed twice. We also didn't have the opportunity to transform pIB006 into duckweed, as it was designed and built during the fifth (final) DBTL cycle of TAIFR, just as the Wiki Freeze was approaching. However, there is no logical reason it shouldn't work, since Cas9, driven by the rZmUBI promoter and terminated by the t35S terminator, has been successfully used to knock out genes in duckweed.
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
                      <td className="px-4 py-3 border-b  hover:bg-yellow-100"><a className='' href="https://registry.igem.org/parts/bba-25ee5kq2" target="_blank" rel="noopener noreferrer">BBa_25EE5KQ2</a></td>
                      <td className="px-4 py-3 border-b">Cas9</td>
                      <td className="px-4 py-3 border-b">Cas9 endonuclease</td>
                      <td className="px-4 py-3 border-b"><em>Streptococcus pyogenes</em></td>
                      <td className="px-4 py-3 border-b">Gifted by Dr. Helene Robert Boisivon</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 border-b  hover:bg-yellow-100"><a className='' href="https://registry.igem.org/parts/bba-k4761029" target="_blank" rel="noopener noreferrer">BBa_K4761029</a></td>
                      <td className="px-4 py-3 border-b">gRNA scaffold</td>
                      <td className="px-4 py-3 border-b">tracrRNA repeats</td>
                      <td className="px-4 py-3 border-b">synthetic</td>
                      <td className="px-4 py-3 border-b">MoClo Plant Parts III: Transformation & Genome Engineering Kit by Voytas Lab</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 border-b  hover:bg-yellow-100"><a className='' href="https://registry.igem.org/parts/bba-k4761029" target="_blank" rel="noopener noreferrer">BBa_K4761029</a></td>
                      <td className="px-4 py-3 border-b">Pol III terminator</td>
                      <td className="px-4 py-3 border-b">Terminator of gRNA transcription</td>
                      <td className="px-4 py-3 border-b">synthetic</td>
                      <td className="px-4 py-3 border-b">MoClo Plant Parts III: Transformation & Genome Engineering Kit by Voytas Lab</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 border-b  hover:bg-yellow-100"><a className='' href="https://registry.igem.org/parts/bba-25h0j6yd" target="_blank" rel="noopener noreferrer">BBa_25H0J6YD</a></td>
                      <td className="px-4 py-3 border-b">rOsU6</td>
                      <td className="px-4 py-3 border-b">U6 promoter</td>
                      <td className="px-4 py-3 border-b"><em>Oryza sativa</em></td>
                      <td className="px-4 py-3 border-b">MoClo Plant Parts III: Transformation & Genome Engineering Kit by Voytas Lab</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 border-b  hover:bg-yellow-100"><a className='' href="https://registry.igem.org/parts/bba-25m0pci1" target="_blank" rel="noopener noreferrer">BBa_25M0PCI1</a></td>
                      <td className="px-4 py-3 border-b">filler</td>
                      <td className="px-4 py-3 border-b">Esp3I-flanked placeholder sequence (user-replaceable)</td>
                      <td className="px-4 py-3 border-b">synthetic</td>
                      <td className="px-4 py-3 border-b">pAMO142 from Dr. Arturo-Mari Ordóñez</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 border-b  hover:bg-yellow-100"><a className='' href="https://registry.igem.org/parts/bba-25m7nm5y" target="_blank" rel="noopener noreferrer">BBa_25M7NM5Y</a></td>
                      <td className="px-4 py-3 border-b">eGFP_KO1</td>
                      <td className="px-4 py-3 border-b">Forward gRNA oligonucleotide</td>
                      <td className="px-4 py-3 border-b">synthetic</td>
                      <td className="px-4 py-3 border-b">Identified using CRISPOR</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 border-b  hover:bg-yellow-100"><a className='' href="https://registry.igem.org/parts/bba-25lgnzag" target="_blank" rel="noopener noreferrer">BBa_25LGNZAG</a></td>
                      <td className="px-4 py-3 border-b">eGFP_KO2</td>
                      <td className="px-4 py-3 border-b">Forward gRNA oligonucleotide</td>
                      <td className="px-4 py-3 border-b">synthetic</td>
                      <td className="px-4 py-3 border-b">Identified using CRISPOR</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 border-b  hover:bg-yellow-100"><a className='' href="https://registry.igem.org/parts/bba-25oz9s9i" target="_blank" rel="noopener noreferrer">BBa_25OZ9S9I</a></td>
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
                      <td className="px-4 py-3 border-b  hover:bg-yellow-100"><a className='' href="https://registry.igem.org/parts/bba-252t3xrc" target="_blank" rel="noopener noreferrer">BBa_252T3XRC</a></td>
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
            <h2 className="text-3xl font-bold mb-6 text-gray-900" style={{fontFamily: 'Space Grotesk'}}>
              3. Endogenous Duckweed Promoter + 5' UTR Parts
            </h2>
            
            <div className="prose max-w-none text-gray-700 mb-8" style={{fontFamily: 'Urbanist'}}>
              <p className="mb-4">
                For this part of our toolbox, we were greatly inspired by iGEM Marburg 2024 and their work on dandelion. Through discussions with their team and with our advisor Dr. Arturo-Mari Ordóñez. we realized that to make duckweed engineering more attractive and accessible, it was crucial to provide <strong>endogenous regulatory parts</strong>. At present, almost no native promoters and 5' UTRs are available for duckweed, which severely limits its practical application [9].
              </p>
              
              <p className="mb-4">
                Guided by the approach of iGEM Marburg 2024, we analyzed <strong>publicly available transcriptomic datasets</strong> from 6 duckweed ecotypes, together with a dataset kindly provided by Dr. Ordóñez. Genes were screened based on two criteria, namely <strong>high transcript abundance</strong>, to ensure strong promoter activity and <strong>low variance of abundance across duckweed species</strong> for the broadest possible applicability across duckweed species.
              </p>
              
              <p className="mb-4">
                After identifying promising candidates, we performed functional annotation of the genes and extracted the <strong>promoter + 5' UTR regions</strong> (defined as the 2 kb upstream of the ATG start codon). Each sequence was then checked for internal restriction sites to ensure GoldenGate compatibility.
              </p>
              
              <p className="mb-4">
                From this analysis, we selected <strong>13 candidate promoter + 5' UTRs</strong>. We attempted to isolate all from genomic DNA of the respective duckweed species by PCR, and successfully done so for 5 of them. Of these, we were able to clone three promoters into RUBY testing constructs and RFP measurement constructs. To expand this set, we ordered synthesis of the next four most promising candidates, all of which were successfully cloned.
              </p>
            </div>

            {/* Testing Construct Diagram */}
            <div className="mb-8">
              <img src="https://static.igem.wiki/teams/5642/images/toolbox/partcollection/promotres-circular-copy.webp" alt="Promoter Testing Construct Design" className="w-full h-auto mb-4 rounded-lg" />
              <p className="text-base " style={{fontFamily: 'Urbanist'}}>
                <strong>Figure 4.</strong> Schematic representation of the promoter testing construct design, which enabled a ratiometric approach for quantitative testing of promoter-driven expression (<a href="#" className="text-blue-600 underline" target="_blank">read more here</a>). Altogether, we created 14 testing constructs — seven using RUBY (an enzyme complex producing the red betalain pigment, visible to the naked eye and allowing rapid functionality checks) and seven using RFP (Red Fluorescent Protein) as the reporter gene for quantitative analysis by qPCR. Both versions of the first ORF are terminated by the Cauliflower Mosaic Virus terminator (t35S). The second ORF is identical across all 14 constructs, allowing us to directly compare the expression levels of candidate promoters with the nopaline synthase promoter (rNOS), which has previously shown reliable activity in duckweed. The rNOS promoter drives the expression of the neomycin phosphotransferase II (NPTII) gene, which is terminated by the nopaline synthase terminator (tNOS). Both rNOS and tNOS are derived from <em>Agrobacterium tumefaciens</em>. The entire expression cassette is flanked by T-DNA borders for <em>Agrobacterium</em>-mediated transformation and housed in a binary vector capable of replication in both <em>E. coli</em> and <em>Agrobacterium tumefaciens</em>.
              </p>
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg mb-32">
              <p className="text-gray-800" style={{fontFamily: 'Urbanist'}}>
                <strong>Matus text about functionality</strong>
              </p>
            </div>

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
                    <td className="px-4 py-3 border-b  hover:bg-yellow-100"><a className='' href="https://registry.igem.org/parts/bba-25i17jf4" target="_blank" rel="noopener noreferrer">BBa_25I17JF4</a></td>
                    <td className="px-4 py-3 border-b">rSpARF</td>
                    <td className="px-4 py-3 border-b">ARF guanine-nucleotide exchange factor GNOM-like</td>
                    <td className="px-4 py-3 border-b">BBa_2585T3NW</td>
                    <td className="px-4 py-3 border-b">BBa_25Y8HUHL</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 border-b  hover:bg-yellow-100"><a className='' href="https://registry.igem.org/parts/bba-25bkk15t" target="_blank" rel="noopener noreferrer">BBa_25BKKI5T</a></td>
                    <td className="px-4 py-3 border-b">rSpPOL</td>
                    <td className="px-4 py-3 border-b">DNA polymerase epsilon catalytic subunit A</td>
                    <td className="px-4 py-3 border-b">BBa_250PDDO2</td>
                    <td className="px-4 py-3 border-b">BBa_2517VDHR</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 border-b  hover:bg-yellow-100"><a className='' href="https://registry.igem.org/parts/bba-25y6vxt4" target="_blank" rel="noopener noreferrer">BBa_25Y6VXT4</a></td>
                    <td className="px-4 py-3 border-b">rSpUBI</td>
                    <td className="px-4 py-3 border-b">E3 ubiquitin protein-ligase</td>
                    <td className="px-4 py-3 border-b">BBa_25S6OHZT</td>
                    <td className="px-4 py-3 border-b">BBa_25J4RA0E</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 border-b  hover:bg-yellow-100"><a className='' href="https://registry.igem.org/parts/bba-25boso9d" target="_blank" rel="noopener noreferrer">BBa_25BOSO9D</a></td>
                    <td className="px-4 py-3 border-b">rSpWDP</td>
                    <td className="px-4 py-3 border-b">WD domain containing protein</td>
                    <td className="px-4 py-3 border-b">BBa_25KE7JLC</td>
                    <td className="px-4 py-3 border-b">BBa_251AYM84</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 border-b  hover:bg-yellow-100"><a className='' href="https://registry.igem.org/parts/bba-2583vr6z" target="_blank" rel="noopener noreferrer">BBa_2583VR6Z</a></td>
                    <td className="px-4 py-3 border-b">rLmACC</td>
                    <td className="px-4 py-3 border-b">Acetyl-CoA carboxylase</td>
                    <td className="px-4 py-3 border-b">BBa_256R1OJ3</td>
                    <td className="px-4 py-3 border-b">BBa_252L515X</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 border-b  hover:bg-yellow-100"><a className='' href="https://registry.igem.org/parts/bba-25fq6hr0" target="_blank" rel="noopener noreferrer">BBa_25FQ6HR0</a></td>
                    <td className="px-4 py-3 border-b">rLmUBI</td>
                    <td className="px-4 py-3 border-b">E3 ubiquitin protein-ligase</td>
                    <td className="px-4 py-3 border-b">BBa_25ROOR0N</td>
                    <td className="px-4 py-3 border-b">BBa_25FWSDZY</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 border-b  hover:bg-yellow-100"><a className='' href="https://registry.igem.org/parts/bba-25goufc" target="_blank" rel="noopener noreferrer">BBa_25GOUFCY</a></td>
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
                      <td className="px-4 py-3 border-b  hover:bg-yellow-100"><a className='' href="https://registry.igem.org/parts/bba-25qfse2x" target="_blank" rel="noopener noreferrer">BBa_25QFSE2X</a></td>
                      <td className="px-4 py-3 border-b">promoter + 5' UTR</td>
                      <td className="px-4 py-3 border-b">rZmUBI</td>
                      <td className="px-4 py-3 border-b">Ubiquitin promoter + 5'UTR</td>
                      <td className="px-4 py-3 border-b">Zea mays</td>
                      <td className="px-4 py-3 border-b">MoClo Plant Parts II Infrastructure Kit deposited by Stuttmann Lab</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 border-b  hover:bg-yellow-100"><a className='' href="https://registry.igem.org/parts/bba-259wq7y7" target="_blank" rel="noopener noreferrer">BBa_259WQ7Y7</a></td>
                      <td className="px-4 py-3 border-b">promoter + 5' UTR</td>
                      <td className="px-4 py-3 border-b">rNOS-TMV</td>
                      <td className="px-4 py-3 border-b">Nopaline synthase promoter + 5' UTR TMV</td>
                      <td className="px-4 py-3 border-b">Agrobacterium tumefaciens, Tobacco Mosaic Virus</td>
                      <td className="px-4 py-3 border-b">MoClo Plant Parts Kit deposited by Patron lab</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 border-b  hover:bg-yellow-100"><a className='' href="https://registry.igem.org/parts/bba-25vyq6q2" target="_blank" rel="noopener noreferrer">BBa_25VYQ6Q2</a></td>
                      <td className="px-4 py-3 border-b">CDS</td>
                      <td className="px-4 py-3 border-b">NPTII</td>
                      <td className="px-4 py-3 border-b">Neomycin phosphotranferase II</td>
                      <td className="px-4 py-3 border-b">Escherichia coli</td>
                      <td className="px-4 py-3 border-b">MoClo Plant Parts II Infrastructure Kit deposited by Stuttmann Lab</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 border-b  hover:bg-yellow-100"><a className='' href="https://registry.igem.org/parts/bba-25z3hgcf" target="_blank" rel="noopener noreferrer">BBa_25Z3HGCF</a></td>
                      <td className="px-4 py-3 border-b">CDS</td>
                      <td className="px-4 py-3 border-b">eGFP</td>
                      <td className="px-4 py-3 border-b">Enhanced green fluorescent protein</td>
                      <td className="px-4 py-3 border-b">Aequorea victoria</td>
                      <td className="px-4 py-3 border-b">MoClo Plant Parts III: Transformation & Genome Engineering Kit by Voytas Lab</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 border-b  hover:bg-yellow-100"><a className='' href="https://registry.igem.org/parts/bba-25wrnvq0" target="_blank" rel="noopener noreferrer">BBa_25WRNVQ0</a></td>
                      <td className="px-4 py-3 border-b">CDS</td>
                      <td className="px-4 py-3 border-b">RFP</td>
                      <td className="px-4 py-3 border-b">Red fluorescent protein (codon-optimized for duckweed)</td>
                      <td className="px-4 py-3 border-b">-</td>
                      <td className="px-4 py-3 border-b">Own synthesis</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 border-b  hover:bg-yellow-100"><a className='' href="https://registry.igem.org/parts/bba-25wes1bn" target="_blank" rel="noopener noreferrer">BBa_25WES1BN</a></td>
                      <td className="px-4 py-3 border-b">terminator + 3' UTR</td>
                      <td className="px-4 py-3 border-b">AtuOCS</td>
                      <td className="px-4 py-3 border-b">Octopine synthase terminator + 3'UTR</td>
                      <td className="px-4 py-3 border-b">Agrobacterium tumefaciens</td>
                      <td className="px-4 py-3 border-b">MoClo Plant Parts Kit deposited by Patron lab</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 border-b  hover:bg-yellow-100"><a className='' href="https://registry.igem.org/parts/bba-k3900016" target="_blank" rel="noopener noreferrer">BBa_K3900016</a></td>
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
                      <td className="px-4 py-3 border-b  hover:bg-yellow-100"><a className='' href="https://registry.igem.org/parts/bba-252fui3p" target="_blank" rel="noopener noreferrer">BBa_252FUI3P</a></td>
                      <td className="px-4 py-3 border-b">reporter</td>
                      <td className="px-4 py-3 border-b">pTM001</td>
                      <td className="px-4 py-3 border-b">p2a-eGFP</td>
                      <td className="px-4 py-3 border-b">Gifted by Dr. Tomáš Moravec</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 border-b  hover:bg-yellow-100"><a className='' href="https://registry.igem.org/parts/bba-25hi9lhm" target="_blank" rel="noopener noreferrer">BBa_25HI9LHM</a></td>
                      <td className="px-4 py-3 border-b">reporter</td>
                      <td className="px-4 py-3 border-b">p2a-RFP</td>
                      <td className="px-4 py-3 border-b">p2a-RFP (codon-optimized for duckweed)</td>
                      <td className="px-4 py-3 border-b">Own synthesis</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 border-b  hover:bg-yellow-100"><a className='' href="https://registry.igem.org/parts/bba-250g5ni2" target="_blank" rel="noopener noreferrer">BBa_250G5NI2</a></td>
                      <td className="px-4 py-3 border-b">PONG excision activity testing construct</td>
                      <td className="px-4 py-3 border-b">pIB004</td>
                      <td className="px-4 py-3 border-b">rZmUBI-5'YFP-mPing-3'YFP-t35S</td>
                      <td className="px-4 py-3 border-b">Own assembly from basic parts</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 border-b  hover:bg-yellow-100"><a className='' href="https://registry.igem.org/parts/bba-25dnbygj" target="_blank" rel="noopener noreferrer">BBa_25DNBYGJ</a></td>
                      <td className="px-4 py-3 border-b">plasmid</td>
                      <td className="px-4 py-3 border-b">pAMO101</td>
                      <td className="px-4 py-3 border-b">rZmUBI-GFP-t35S</td>
                      <td className="px-4 py-3 border-b">Gifted by Dr. Arturo-Mari Ordóñez</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 border-b  hover:bg-yellow-100"><a className='' href="https://registry.igem.org/parts/bba-253a2zv8" target="_blank" rel="noopener noreferrer">BBa_253A2ZV8</a></td>
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
    }
]


