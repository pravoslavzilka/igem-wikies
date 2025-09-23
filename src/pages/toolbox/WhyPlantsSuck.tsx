import { useState, useEffect, useRef } from "react";
import { Link } from 'react-router-dom';





const WhyPlantsSuck = () => {

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-6xl mx-auto">
        {/* Main Title */}
        <h1 className="text-4xl font-bold text-center text-black mb-16 mt-10" style={{ fontFamily: "Space Grotesk" }}>
          Plants Are Not Just Green Bacteria
        </h1>

        {/* Main Content Paragraph */}
        <div className="mb-12">
          <p className="text-base leading-relaxed text-black mb-4" style={{ fontFamily: "Urbanist" }}>
            <strong>Plants</strong> have enormous potential in biotechnology, but working with them comes with far more challenges 
            than working with microbes. Bacteria can be grown quickly, transformed in a matter of hours, and studied 
            in simple laboratory conditions. In contrast, plants grow slowly, require controlled environments, and carry 
            genomes that are often too complex and duplicated [1]. Genetic modifications in plants are rarely 
            straightforward, since most protocols depend on several demanding steps in tissue culture [2]. These steps 
            often cause further complications, such as poor regeneration or unintended genetic changes, which make 
            consistent results harder to achieve [3]. Despite all these difficulties, plants are worth the effort. Where 
            microbes end, plants are only getting started — they are indispensable for solving real-world problems in 
            agriculture, nutrition, pharmaceuticals, and green technologies.
          </p>
        </div>

        {/* The Waiting Game Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Left Column - Text */}
          <div className="lg:col-span-1">
            <div className=" p-6 rounded-lg">
              <h2 className="text-xl font-bold text-black mb-4" style={{ fontFamily: "Space Grotesk" }}>The Waiting Game</h2>
              <p className="text-md leading-relaxed text-black" style={{ fontFamily: "Urbanist" }}>
                Time is the most immediate and obvious challenge in 
                plant biotechnology. Microbial systems such as <em>E. coli</em>  
                can be transformed and analyzed within 24–48 hours, 
                allowing researchers to quickly test new constructs, 
                obtain results and iterate [4]. In contrast, plant 
                transformations take far longer. In the standard model 
                <em>Arabidopsis thaliana</em>, stable transformation and 
                selection typically requires 2 - 3 months [5]. 
                Agricultural plants like corn, rice, wheat or soybeans 
                tend to be more recalcitrant and the process is even 
                more time-consuming. It often extends over 6 - 9 
                months due to tissue culture, regeneration, and 
                multiple rounds of selection [6]. These prolonged 
                iteration cycles make optimization far more laborious 
                and expensive, than in bacterial systems.
              </p>
              
            </div>
          </div>

          {/* Middle Column - Chart */}
          <div className="lg:col-span-2 flex flex-col items-center">
            <h3 className="text-lg font-semibold text-black mb-4 text-center" style={{ fontFamily: "Space Grotesk" }}>
           
            </h3>
            
            {/* Bar Chart */}
            <div className="w-full" style={{ fontFamily: "Urbanist" }}> {/* removed max-w-xs */}
              
              <img src="https://static.igem.wiki/teams/5642/images/toolbox/whyplantssuck/days-needed-for-transformation-new-graph.webp" alt="Days needed for transformation" className="w-full h-auto" />
            </div>

            {/* Image placeholder for the middle chart/graph */}
            
            <div className="flex flex-row gap-4 w-full mt-10"> {/* changed from space-y-4 to flex-row gap-4 */}
    
              
              <div className="text-center flex-1 ">
                <img 
                  src="https://static.igem.wiki/teams/5642/images/toolbox/whyplantssuck/e-coli.webp"
                  alt="E.coli bacteria"
                  className="  w-full h-50 object-cover rounded-lg mb-2"
                />
                <p className="text-xs text-black font-medium text-center">Escherichia coli
</p>
              </div>
              
              <div className="text-center flex-1 ">
                <img 
                  src="https://static.igem.wiki/teams/5642/images/toolbox/whyplantssuck/soybean.webp"
                  alt="Soybean plant"
                  className="w-full h-50 object-cover rounded-lg mb-2"
                />
                <p className="text-xs text-black font-medium text-center">Glycine max green pod — Macleay Grass Man, via Wikimedia Commons, CC BY 2.0
</p>
              </div>

              {/* Plant seedlings Image */}
              <div className="text-center flex-1">
                <img 
                  src="https://static.igem.wiki/teams/5642/images/toolbox/whyplantssuck/arabidopsis.webp"
                  alt="Plant seedlings in laboratory"
                  className="w-full h-50 object-cover rounded-lg mb-2"
                />
                <p className="text-xs text-gray-600 text-center">
                  The budding seedling of an Arabidopsis thaliana triple mutant — Martin Stübler, via Wikimedia Commons, CC BY-SA 4.0

                </p>
              </div>
            </div>
          </div>

         
          
        </div>

        {/* Genome Analysis Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Left Column - Genome Sizes and Compositions */}
          <div>
            {/* Genome Sizes Chart */}
            <div className="mb-8">
              <img src="https://static.igem.wiki/teams/5642/images/toolbox/whyplantssuck/genome-sizes-in-mbp.webp" alt="Genome Sizes Chart" className="w-full h-auto" />
              
            </div>

            {/* Genome Compositions */}
             <img src="https://static.igem.wiki/teams/5642/images/toolbox/whyplantssuck/compositions-of-genomes2.webp" alt="Genome Sizes Chart" className="w-full h-auto mb-4" />

          </div>

          {/* Right Column - Genomes on Steroids */}
          <div>
            <div className="p-6 rounded-lg">
              <h2 className="text-xl font-bold text-black mb-4" style={{ fontFamily: "Space Grotesk, sans-serif" }}>Genomes on Steroids</h2>
              <p className="text-md leading-relaxed text-black" style={{ fontFamily: "Urbanist, sans-serif" }}>
                Another major obstacle in plant biotechnology is genome complexity. 
                Unlike bacteria such as <em>E. coli</em>, which have small and compact genomes 
                (about 4.6 Mb), many plants carry genomes that are not only much larger 
                but also highly duplicated [7]. <em>Arabidopsis thaliana</em>, often considered a 
                "simple" model plant, still has a genome ten times larger than <em>E. coli</em> [8]. In 
                crops such as corn (<em>Zea mays</em>) and wheat (<em>Triticum aestivum</em>), polyploidy 
                and extensive gene families make functional studies far more complicated 
                [9]. Knocking out a single gene in these species often does not produce a 
                visible phenotype, because redundant copies, called paralogs, can mask the 
                effect. In addition, plant genomes contain large amounts of repetitive DNA 
                and mobile elements and have complex epigenetic and silencing 
                mechanisms, all influencing gene activity (10). All of these factors add 
                layers of unpredictability and complexity, which one wouldn't encounter 
                working with simple bacteria.
              </p>
            </div>
          </div>
        </div>

        {/* From Cell to Plant Section Header */}




        <div className="mb-8 ">
          <h2 className="text-xl font-bold text-black mb-6" style={{ fontFamily: "Space Grotesk, sans-serif" }}>From Cell to Plant (Hardly Ever Correctly)</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8" style={{ fontFamily: "Urbanist, sans-serif" }}>
            {/* Left Column - Main Text */}
            <div className="space-y-6">
              <p className="text-md leading-relaxed text-black" >
                In microbial systems, a single transformed cell is already a complete organism; it can readily grow 
                into a colony and be selected on a medium for testing. In plants, however, a transformed cell is 
                only the beginning. To succeed, a transformed plant cell must regenerate into a whole, 
                non-chimeric plant where every cell carries the same genome. Unlike bacteria, where one cell 
                already makes a colony, plant cells have to be guided back into forming all the tissues of a new 
                organism. This regeneration step is species-specific, slow, and highly sensitive to small changes in 
                conditions, making it one of the hardest parts of plant biotechnology — and even when well 
                optimized, its efficiency is usually incredibly low [11].
              </p>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-md font-medium text-black mb-3">
                  A typical plant transformation workflow involves several demanding stages :
                </p>
                
                <ul className="space-y-3 text-md text-black">
                  <li>
                    <strong>• Callus induction</strong> – 2–4 weeks<br/>
                    <span className="text-gray-700 ml-2">
                      (explants such as leaf or embryo tissue are induced to form undifferentiated callus cells)
                    </span>
                  </li>
                  
                  <li>
                    <strong>• DNA delivery</strong> – ~1 week<br/>
                    <span className="text-gray-700 ml-2">
                      (transformation via <em>Agrobacterium</em> infection or particle bombardment; a relatively quick step)
                    </span>
                  </li>
                  
                  <li>
                    <strong>• Selection</strong> – 3–6 weeks<br/>
                    <span className="text-gray-700 ml-2">
                      (growth on selective medium where only transformed cells survive antibiotics or herbicides)
                    </span>
                  </li>
                  
                  <li>
                    <strong>• Regeneration</strong> – 4–12 weeks<br/>
                    <span className="text-gray-700 ml-2">
                      (calli are guided with hormones to form shoots, then roots, and finally acclimatized to soil; this 
                      step is significantly longer with soybean)
                    </span>
                  </li>
                  
                  <li>
                    <strong>• Screening (genotyping & stability check)</strong> – 2–4 weeks<br/>
                    <span className="text-gray-700 ml-2">
                      (PCR, qPCR, or sequencing to confirm uniform, stable transformants; sometimes requires 
                      advancing generations)
                    </span>
                  </li>
                </ul>
              </div>

              <p className="text-md leading-relaxed text-black">
                But to make matters even worse, different plants often require different methods or their specific 
                adaptations. <em>Arabidopsis thaliana</em> is relatively easy, since the "floral dip" method allows 
                transformation through flowers, skipping most tissue culture steps and giving transgenic seeds in a 
                few months [12]. Corn (<em>Zea mays</em>) usually needs young embryos to be infected with 
                <em>Agrobacterium</em> and then grown back into plants in tissue culture — a slow process with only a few 
                percent success [13]. Soybean (<em>Glycine max</em>) is even more difficult, with efficiencies often below 
                1% and long regeneration times [14].
              </p>
            </div>

            {/* Right Column - Sketch Boxes */}
            <div className="space-y-4">
              {/* E. coli transformation */}
              <div className="border-2 border-gray-300 rounded-lg p-4 bg-gray-50 flex flex-row items-center gap-4">
                <div className="h-40 w-40 bg-blue-100 rounded flex items-center justify-center flex-shrink-0"> {/* increased from h-24 w-24 */}
                  <span className="text-gray-600 text-md text-center">Sketch from Barča<br/>(E.coli transformation)</span>
                </div>
                <div className="text-left flex-1">
                  <h4 className="font-bold text-md text-black">E. coli transformation</h4>
                  <p className="text-xs text-black mt-1">
                    Transformation efficiency is extremely high, reaching up to 
                    10⁹ colonies per microgram of DNA. Unlike in plants, 
                    obtaining transformants in bacteria is straightforward and 
                    highly reproducible.
                  </p>
                </div>
              </div>

              {/* Arabidopsis floral dip */}
              <div className="border-2 border-gray-300 rounded-lg p-4 bg-gray-50 flex flex-row items-center gap-4">
                <div className="text-left flex-1">
                  <h4 className="font-bold text-md text-black">Arabidopsis floral dip</h4>
                  <p className="text-xs text-black mt-1">
                    The floral dip method is simple and widely used, 
                    but efficiency is low — usually around 1–2% of 
                    seeds produce transformants [18].
                  </p>
                </div>
                <div className="h-40 w-40 bg-green-100 rounded flex items-center justify-center flex-shrink-0"> {/* increased from h-24 w-24 */}
                  <span className="text-gray-600 text-md text-center">Sketch from Barča<br/>(floral dip)</span>
                </div>
              </div>

              {/* Maize and soybean transformation */}
              <div className="border-2 border-gray-300 rounded-lg p-4 bg-gray-50 flex flex-row items-center gap-4">
                <div className="h-40 w-40 bg-yellow-100 rounded flex items-center justify-center flex-shrink-0"> {/* increased from h-24 w-24 */}
                  <span className="text-gray-600 text-md text-center">Sketch from Barča<br/>(calli transformation)</span>
                </div>
                <div className="text-left flex-1">
                  <h4 className="font-bold text-md text-black">Maize and soybean transformation</h4>
                  <p className="text-xs text-black mt-1">
                    Stable Agrobacterium-mediated transformation of corn and 
                    soybean is possible through callus or immature embryos, 
                    but efficiencies are very low, typically only 1–5% [19].
                  </p>
                </div>
              </div>

              <div className="max-w-4xl mx-auto">                
          <h1 className="text-2xl font-bold text-center text-black mb-8 mt-20" style={{ fontFamily: "Space Grotesk" }}>
            Mutations You Didn’t Ask For

          </h1>

          {/* Main Content Paragraph */}
          <div className="mb-12">
            <p className="text-base leading-relaxed text-black mb-4" style={{ fontFamily: "Urbanist" }}>
              Even when a plant successfully regenerates, the story doesn’t always end well. Long periods in tissue culture put cells under stress, and this stress can lead to random genetic and epigenetic changes known as somaclonal variation [14]. These changes may include point mutations, chromosome rearrangements, or altered gene expression, none of which were part of the intended transformation. The result is that two regenerated plants from the same protocol may look or behave very differently, making it difficult to tell whether an observed effect comes from the introduced construct or from unintended culture-induced mutations [15]. Researchers deal with somaclonal variation by regenerating many independent lines and checking whether traits are consistent across them, or by cultivating plants through several generations to stabilize changes. Both strategies work, but they add months of effort and burn more expenses [16]. This “background noise” is a challenge unique to plants, since bacteria and yeast rarely experience such large-scale instability during routine transformation.

            </p>

            
          </div>  
        </div> 
        
            </div>

                        




          </div>
          <p className="mt-10" style={{ fontFamily: "Urbanist, sans-serif" }  }>
              At iGEM Brno, we are developing a faster and simpler way to transform the fastest growing plant on Earth. By implementing our transposon-based transformation TAIFR (link to page describing TAIFR), we aim to generate stable, uniformly transformed lines “in-planta” more efficiently. Duckweed’s rapid growth and simple body plan make it an ideal chassis, while removing the dependence on long tissue culture steps lowers the risk of somaclonal variation. With this approach, we aim not only to unlock its unique biotechnological potential (Why?), but also to provide plant researchers with a new model system — one that enables the generation of stable engineered lines quickly, affordably, and predictably. This would accelerate plant-oriented basic research and help translate it more rapidly into meaningful impact for society.

            </p>
        </div>
             


        <div className="border-t border-gray-200 pt-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4" style={{ fontFamily: "Space Grotesk, sans-serif" }}>References</h3>
                <div className="space-y-3 text-md text-gray-700">
                  <p className="leading-relaxed">
                    [1] Altpeter, F. et al. (2016) ‘Advancing Crop Transformation in the Era of Genome Editing’, The Plant Cell, 28(7), pp. 1510–1520. Available at: <Link className='text-blue-500 hover:underline' target='_blank' to="https://doi.org/10.1105/tpc.16.00196">https://doi.org/10.1105/tpc.16.00196</Link>.</p>
                  <p className="leading-relaxed">
                    [2] Quiroz, L.F. et al. (2024) ‘Tissue culture-independent approaches to revolutionizing plant transformation and gene editing’, Horticulture Research, 12(2), p. uhae292. Available at: <Link className='text-blue-500 hover:underline' target='_blank' to="https://doi.org/10.1093/hr/uhae292">https://doi.org/10.1093/hr/uhae292</Link>.</p>
                  <p className="leading-relaxed">
                      [3] Duta-Cornescu, G. et al. (2023) Somaclonal variation—advantage or disadvantage in plant breeding? Plants, 12(4), 808. doi:10.3390/plants12040808.
                  </p>
                  <p className="leading-relaxed">
                       [4] Thermo Fisher Scientific (n.d.) Bacterial Transformation Workflow. Available at: <Link className='text-blue-500 hover:underline' target='_blank' to="https://www.thermofisher.com/us/en/home/life-science/cloning/cloning-learning-center/invitrogen-school-of-molecular-biology/molecular-cloning/transformation/bacterial-transformation-workflow.html">https://www.thermofisher.com/us/en/home/life-science/cloning/cloning-learning-center/invitrogen-school-of-molecular-biology/molecular-cloning/transformation/bacterial-transformation-workflow.html</Link>
                  </p>
                  <p className="leading-relaxed">   
                    [5] Clough, S.J. and Bent, A.F. (1998) Floral dip: a simplified method for Agrobacterium-mediated transformation of Arabidopsis thaliana. The Plant Journal, 16(6), pp.735–743. doi:10.1046/j.1365-313x.1998.00343.x.

                  </p>
                  <p className="leading-relaxed">
[6] Xu, H. et al. (2022) Progress in soybean genetic transformation over the last decade. Plant Methods, 18, 103. doi:10.1186/s13007-022-00927-3.
                  </p>
                  <p className="leading-relaxed">
[7] Michael, T.P. and VanBuren, R. (2020) Building near-complete plant genomes. Current Opinion in Plant Biology, 54, pp.26–33. doi:10.1016/j.pbi.2019.12.009.
                  </p>
                  <p className="leading-relaxed">
[8] The Arabidopsis Genome Initiative (2000) Analysis of the genome sequence of the flowering plant Arabidopsis thaliana. Nature, 408, pp.796–815. doi:10.1038/35048692.
                  </p>
                  <p className="leading-relaxed">
[9] Appels, R. et al. (2018) Shifting the limits in wheat research and breeding using a fully annotated reference genome. Science, 361(6403), eaar7191. doi:10.1126/science.aar7191.
                  </p>
                  <p className="leading-relaxed">
[10] Wendel, J.F. (2015) ‘The wondrous cycles of polyploidy in plants’, American Journal of Botany, 102(11), pp. 1753–1756. Available at: <Link className='text-blue-500 hover:underline' target='_blank' to="https://doi.org/10.3732/ajb.1500320">https://doi.org/10.3732/ajb.1500320</Link>.

                  </p>
                  <p className="leading-relaxed">
[11] Lowe, K. et al. (2016) Agrobacterium tumefaciens-mediated transformation of maize immature embryos. Plant Methods, 12, 29. doi:10.1186/s13007-016-0139-4.

                  </p>
                  <p className="leading-relaxed">
[12] Clough, S.J. and Bent, A.F. (1998) Floral dip: a simplified method for Agrobacterium-mediated transformation of Arabidopsis thaliana. The Plant Journal, 16(6), pp.735–743. doi:10.1046/j.1365-313x.1998.00343.x.

                  </p>
                  <p className="leading-relaxed">
[13] Ishida, Y. et al. (2007) Agrobacterium-mediated transformation of maize. Nature Protocols, 2, pp.1614–1621. doi:10.1038/nprot.2007.241.

                  </p>
                  <p className="leading-relaxed">
[14] Li, Z. et al. (2017) Optimizing tissue culture-based transformation in soybean. Frontiers in Plant Science, 8, 246. doi:10.3389/fpls.2017.00246.

                  </p>
                  <p className="leading-relaxed">
[15] Krishna, H. et al. (2016) Somaclonal variations and their applications in horticultural crops improvement. PLoS ONE, 11(2), e0147522. doi:10.1371/journal.pone.0147522.

                  </p>
                  <p className="leading-relaxed">
[16] Duta-Cornescu, G. et al. (2023) Somaclonal variation—advantage or disadvantage in plant breeding? Plants, 12(4), 808. doi:10.3390/plants12040808.

                  </p>

                  <p className="leading-relaxed">
                          [17] Orłowska, R. et al. (2024) An insight into tissue culture-induced variation for crop improvement. BMC Plant Biology, 24, 60. doi:10.1186/s12870-023-04679-w.
                  </p>

                  <p className="leading-relaxed">
[18] Clough, S.J. and Bent, A.F. (1998) ‘Floral dip: a simplified method for Agrobacterium-mediated transformation of Arabidopsis thaliana’, The Plant Journal, 16(6), pp. 735–743. doi:10.1046/j.1365-313x.1998.00343.x.
                  </p>

                  <p className="leading-relaxed">
[19] Olhoft, P.M. et al. (2003) ‘Efficient soybean transformation using Agrobacterium tumefaciens’, Plant Cell Reports, 22, pp. 478–482. doi:10.1007/s00299-003-0701-9.

                  </p>

                </div>
              </div>

      </div>
    </div>
  );

}


export default WhyPlantsSuck;

