import React from 'react';
import A from "../../../../A.tsx";

export default function RegenerationAssayPoster() {
  return (
    <div className="min-h-screen bg-white text-lg text-justify max-w-6xl mx-auto px-8 py-8" style={{ fontFamily: 'Urbanist, sans-serif' }}>
      
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h1 style={{ fontFamily: 'Space Grotesk, sans-serif'}} className="text-6xl mt-24 font-bold text-center mb-8 tracking-tight">
          TAIFR - engineering
        </h1>
        
        {/* Introduction */}
        <div className="mb-12 mt-24 text-lg leading-relaxed">
          <p className="mb-4">
            Duckweed, the fastest-growing higher plant, holds great promise for biotechnological applications, but its genetic 
            engineering has been slow and inefficient (<A href="/toolbox/why-plants-suck" className='hover:underline text-[#6ca033]'>read more here</A>). To overcome this, we developed <strong>TAIFR (Transposase 
            Assisted Insertion and Frond Regeneration)</strong>, a method that aims to reduce the time to generate stable transgenic 
            duckweed lines from 5 months to just 1 month (<A href="#" className='hover:underline text-[#6ca033]'>read more here</A>).
          </p>
          
          <p className="mb-4">
            TAIFR bypasses the callus stage by using the PONG transposase to insert genes of interest flanked by 5' and 3' 
            borders of mPing transposon into duckweed nuclear genome. Neomycin selection pressure then favours transformed 
            cells, which regenerate into new transgenic fronds thanks to duckweeds' unique fast asexual propagation ability.
          </p>

          <div>
            <img src="https://static.igem.wiki/teams/5642/images/how/taifr/regenerationassay/dbtls-of-taifr-1.webp" alt="Regeneration Assay Poster Title" className="max-w-full h-auto mb-12" />
        </div>  
          
          <p className="mb-4">
            To develop TAIFR, we performed the Regeneration Assay, consisting of four and half DBTL cycles, which resulted in a 
            pair of customizable parts that enable anyone to insert any gene into the duckweed nuclear genome (<A target='_blank' href="https://registry.igem.org/collections/018233cf-683e-4523-920f-688cde419bed" className='hover:underline text-[#6ca033]'>discover more 
            about parts here</A>). We confirmed stable insertion of our transgene into the duckweed nuclear genome by observing fluorescence signal (see Fig. 2), PCR (see Fig. 3) and by the fact that fronds transformed by the TAIFR method survived 
            10 - 20-fold higher neomycin concentrations than the wild-type duckweeds. Although we succeeded in the first part of 
            TAIFR (transposase-assisted insertion), we did not in the second (whole transgenic frond regeneration), partly due to five 
            failed regeneration iterations caused by transformation-efficiency issues, and partly because we were 
            unsure whether <em>Agrobacterium tumefaciens</em> can reach meristematic cells (which give rise to new daughter fronds).
          </p>
          
          <p className="mb-4">
            To answer the second question, we designed the fifth DBTL cycle - <strong>The Meristematic Assay</strong> (stay tuned for results in 
            Paris). To address the first problem, we will repeat regeneration iterations (RA4.2 - 4.6) with properly transformed 
            duckweed and, in parallel, propose <A href="/plant#how-to-use-taifr" className='hover:underline text-[#6ca033]'>new strategy</A> - usable by us or by future iGEM teams working with 
            duckweed - to help unlock its full potential. As iGEM has taught us the hard way, pursuing parallel approaches to a single 
            problem dramatically increases the chances of solving it within a reasonable timeframe.
          </p>
        </div>

        {/* Figure 1 */}
                

        <div className="mb-12 ">
          <div className="bg-gray-200  flex items-center justify-center mb-4">
            <img src="https://static.igem.wiki/teams/5642/images/how/taifr/regenerationassay/regeneration-assay-copy.webp" alt="Figure 1: TAIFR Design Diagram" className="max-w-full h-auto" />
          </div>
          <p className="text-base leading-relaxed">
            <strong>Figure 1:</strong> In pIB005, we flanked the green fluorescent protein (GFP) gene, used as a visual marker, and the 
            neomycin resistance gene (NPTII), used as a selectable marker, with halves of the element mPing. 
            This created an expression cassette that could be recognized, excised, moved and inserted by PONG into the 
            duckweed nuclear genome. Transient co-transformation with pIB003 (bearing the PONG transposase) and pIB005 
            (bearing the mPing-flanked rZmUBI-GFP-p2a-NPTII-t35S) vectors would result in transformed cells that both 
            fluoresce green and survive the addition of neomycin (G418) to the cultivation medium. We then applied different 
            combinations of neomycin and hormone concentrations, as well as varying the timing of their addition, to fine-tune 
            conditions that favoured transformed cells while not killing wild-type cells immediately. This would allow the 
            transformed cells to be nurtured, proliferate, and ultimately give rise to a complete transgenic frond.
          </p>
        </div>

        

        {/* Figure 2 */}
        <div className="mb-12 ">
          <div className=" flex items-center justify-center mb-4">
            <div>
                   <img src="https://static.igem.wiki/teams/5642/images/how/taifr/regenerationassay/figure2.webp" alt="Figure 2-1: Wild-type Spirodela polyrhiza 7428" className="max-w-full h-auto" />     
                
                

             </div>   
          </div>
          <p className="text-base mt-10 leading-relaxed">
            <strong>Figure 2.</strong> Transformation of pIB005 (mPing-bordered rZmUBI-GFP-p2a-NPTII-t35S) into wild-type <em>Spirodela 
            polyrhiza</em>  7428 (1) results in transient expression of GFP (2). Co-transformation with pIB003 (PONG transposase) 
            leads to excision of the mPing-bordered translational unit, resulting in no transient fluorescence (3). After two to 
            three weeks, spots of GFP fluorescence appear in fronds as a result of random insertions of the mPing-bordered 
            translational unit into the duckweed nuclear genome in several frond cells (4).
          </p>
        </div>

        <div className='grid md:grid-cols-4 gap-4  pt-12'>

            

            <div className='col-span-2  items-center justify-center'>
              
                  <img src="https://static.igem.wiki/teams/5642/images/how/taifr/regenerationassay/figure3.webp" alt="Figure 3: Regenerated Transgenic Frond" className="max-w-full h-auto" />
                   

                   

            </div>

            <div className='col-span-2  items-center justify-center'>
              <img src="https://static.igem.wiki/teams/5642/images/how/taifr/regenerationassay/taifr-pcr-simplified.webp" alt="Figure 4: PCR for GFP on Genomic DNA from Regenerated Frond" className="max-w-full h-auto" />
                

            </div>


       </div>     


            <div className='grid md:grid-cols-4 gap-4 mb-12 '>

            

            <div className='col-span-2  items-center justify-center'>
              
                    <p className="text-base leading-relaxed mt-10">
                        <strong>Figure 3.</strong> Fronds of <em>Spirodela polyrhiza</em> 7428 (Sp7428) were co-transformed with two <em>Agrobacterium</em> cultures: one carrying pIB005 (mPing-bordered GFP-p2a-NPTII unit) and the other carrying pIB003 (PONG transposase). GFP fluorescence spots appeared after 12th day post-infiltration (dpi) (see Fig. 2.4). At 18 dpi, all transformed fronds were transferred to medium containing 5 mg/L G418 - ten times higher than the tolerance threshold of Sp7428 (0.5 mg/L). As a control, fronds transformed only with pIB003 (no resistance gene present) were placed on the same concentration at the same time. By 24 dpi, all non-transformed fronds had died (1), while some transformed fronds - specifically the daughter fronds - survived and appeared healthy (2), though smaller. Surprisingly, these daughter fronds showed no GFP fluorescence, not even as localized spots - that is why we performed PCR to find out if transgene was there
                        </p>

                   

            </div>

            <div className='col-span-2  items-center justify-center'>
                <p className="text-base leading-relaxed mt-10">
                    <strong>Figure 4. </strong> 
                    Genomic DNA isolated from <em>Spirodela polyrhiza</em> 7428 at 30 days post co-transformation with pIB005 and pIB003 (iteration RA4.1) was amplified using primers o128 and o129, tested for the presence of GFP - presumably inserted into the genome via PONG transposase activity from pIB003. It yielded the expected 250 bp product in 9 out of 20 samples. The first negative control (genomic DNA from non-transformed <em>S. polyrhiza</em>) did not yield any bands, as expected. The second negative control (water instead of DNA) also showed no amplification. The positive control (pIB005 construct) yielded the expected 250 bp band.
                     </p>

            </div>


          
        </div>


        <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg mb-10">
              <p className="text-gray-800" style={{fontFamily: 'Urbanist'}}>
                <strong>Throughout this page, we refer to our primers as oXY; XY being the number of every respective primer in our primer database. 

                  <A className='hover:underline text-[#6ca033]' href="/toolbox/programmable-duckweed/part-collection#primer-database"> Check it out here!</A> </strong>
              </p>
            </div>

        {/* DBTL 1 Section */}
        <div className="mb-12 ">
          <h2 style={{ fontFamily: 'Space Grotesk, sans-serif' }} className="text-4xl font-bold mb-6" >DBTL 1</h2>

          <h3 style={{ fontFamily: 'Space Grotesk, sans-serif' }} className="text-2xl font-bold mb-4" >DESIGN of <A className='hover:underline text-[#6ca033]' href="https://registry.igem.org/parts/bba-25zfdow5" target="_blank" rel="noopener noreferrer">pIB001</A></h3>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mb-6'>
            <div className='col-span-2  flex items-center justify-center'>
                <p className="mb-4 leading-relaxed">
                    To test if we can insert gene using our TAIFR design, we designed construct pIB001. It 
                    contains a cassette flanked on both sides by the transposable element mPing. Inside 
                    the cassette, there is a resistance gene against neomycin (NPTII) followed by green 
                    fluorescent protein (GFP), both genes are linked by a self-cleaving 2A peptide derived 
                    from porcine teschovirus-1 (p2a), allowing for their parallel expression. This design 
                    minimizes the overall cassette size, resulting in higher transformation efficiency. Open 
                    reading frame of NPTII-p2a-GFP is driven by the ubiquitin promoter from <em>Zea mays</em> 
                    (rZmUBI) and terminated by terminator sequence from Cauliflower Mosaic Virus (t35S). 
                    Expression cassette is bordered by T-DNA allowing for <em>Agrobacterium</em>-mediated 
                    transformation and lies in binary vector, allowing for replication both in <em>E. coli</em> and 
                    <em> Agrobacterium tumefaciens</em>.
                </p>    
            </div>

            <div className='col-span-1  flex items-center justify-center'>
                <img src="https://static.igem.wiki/teams/5642/images/how/taifr/regenerationassay/pib001-copy.webp" alt="Figure X: pIB001 Map" className="max-w-full h-auto" />    
            </div>

          </div>

          <h3 style={{ fontFamily: 'Space Grotesk, sans-serif' }} className="text-2xl font-bold pt-8">DESIGN OF pEGe</h3>

          <div className='grid grid-cols-1 md:grid-cols-5 gap-4 mb-6'>
            <div className='col-span-3  flex items-center justify-center'>
                <p className="mb-6 leading-relaxed">
                    For the mPing element or for the 5' and 3' borders of mPing-flanked cassette to move and 
                    be inserted, PONG transposase is crucial. In the construct pEGe, two subunits of PONG 
                    transposase are separated by the self-cleaving 2A peptide from <em>Thosea asigna</em> (t2a) and 
                    they expression is driven by the ubiquitin promoter from <em>Zea mays</em> (rZmUBI) and 
                    terminated by terminator sequence of octopine synthase (tOCS) from <em>Agrobacterium 
                    tumefaciens.</em> 
                </p>    

            </div>            
            <div className='col-span-2  flex items-center justify-center'>
               <img src="https://static.igem.wiki/teams/5642/images/how/taifr/regenerationassay/pege-copy.webp" alt="Figure Y: pEGe Map" className="max-w-full h-auto" />     
            </div>
          </div>    
          

          <h3 style={{ fontFamily: 'Space Grotesk, sans-serif' }} className="text-2xl font-bold mb-4">BUILD – cloning of pIB001</h3>
          <p className="mb-2 leading-relaxed">We used Modular Cloning, based on Golden Gate.</p>
          
          <p className="mb-2 font-semibold">Parts:</p>
          <p className="mb-4 leading-relaxed">
            Level 0 part p2a-GFP (pTM001) was a gift from Dr. Moravec. Level 0 part t35S (pF11P1) came from the CRISPR/Cas 
            Toolkit for Plants deposited by Nekrasov Lab. Level 0 parts NPTII (pH12P2) and rZmUBI (pE1P2) were from Plant Parts II 
            and Infrastructure Kit deposited by Stuttmann Lab. We created two new Level 1 parts for 5' and 3' borders of the mPing 
            transposon (0.5mPing and 1.0mPing) from plasmid pEarleyGate 100RMOA mPing (pEG) from Hancock Lab which we 
            ordered form AddGene.
          </p>
          
          <p className="mb-2 font-semibold">Acceptors:</p>
          <p className="mb-4 leading-relaxed">
            We used acceptor vectors pB3T, pC3T, pD3T, pH4T and end-linker pD5T from the MoClo Toolkit deposited by Patron's 
            Lab.
          </p>
          
          <p className="mb-2 font-semibold">Steps:</p>
          <ul className="mb-6 leading-relaxed list-disc pl-6 space-y-2">
            <li>Amplification of 0.5mPing from pEG using primers o29 and o30 with MoClo-compatible overhangs for Level 1 acceptors, 
            followed by digestion and ligation of the PCR amplicon using BsaI, resulted in the Level 1 part pB3T_0.5mPing.</li>
            <li>Amplification of 1.0mPing from pEG using primers o31 and o32 with MoClo-compatible overhangs for Level 1 acceptors, 
            followed by digestion and ligation of the PCR amplicon using BsaI, resulted in the Level 1 part pD3T_1.0mPing.</li>
            <li>Digestion and ligation of pE1P2, pH2P2, pTM001, pF11P1, and pC3T using BsaI resulted in the Level 1 part 
            pC3T_rZmUBI-NPTII-p2a-GFP-t35S.</li>
            <li>Digestion and ligation of the above-mentioned Level 1 parts with end-linker pD5T and acceptor pH4T resulted in 
            pIB001_ 0.5mPing-rZmUBI-NPTII-p2a-GFP-t35S-1.0mPing. The assembly was confirmed by whole plasmid 
            sequencing.</li>
          </ul>

          <h3 style={{ fontFamily: 'Space Grotesk, sans-serif' }} className="text-2xl font-bold mb-4">BUILD – cloning of pEGe</h3>
          <p className="mb-4 leading-relaxed">
            At the time we conducted the first cycle of the regeneration assay, gene synthesis was not yet available for iGEM teams. 
            To accelerate the initial iteration, we modified an existing construct bearing the PONG transposase - pEarleyGate 
            100RMOA mPing (pEG) from the Hancock Lab, ordered through AddGene. We replaced the rAtRPS5a promoter with the 
            rZmUBI promoter to enable monocot-specific expression, as duckweed does not support expression from dicot promoters. 
            We could not use Modular Cloning due to the presence of Golden Gate restriction sites in the pEG construct, which would 
            interfere with cloning. Instead, we chose a modified version of Gibson assembly, which we called Gibson-Fulnecek 
            assembly. This method uses equal-length overlaps generated by T7 exonuclease. Termination of the T7 exonuclease at 
            the 24th base of both fragments is achieved by thiolization of primers at designed sites. Because the overlap length is 
            predetermined, both DNA polymerase and DNA ligase normally required in Gibson assembly can be omitted.
          </p>
          
          <p className="mb-2 font-semibold">Parts:</p>
          <p className="mb-4 leading-relaxed">
            pEarleyGate 100RMOA mPing construct (pEG) from Hancock Lab ordered from AddGene was used as backbone.
            pAMO142 construct – a gift from Ordóñez's Lab – was used as template to amplify rZmUBI promoter.
          </p>
          
          <p className="mb-2 font-semibold">1st iteration: using Fulnecek-Gibson assembly</p>
          <ul className="mb-4 leading-relaxed list-disc pl-6 space-y-2">
            <li>Part of pEG plasmid representing PONG transposase was amplified with primers o37 and o38 and purified from gel.</li>
            <li>Promoter rZmUBI was amplified from pAMO142 using primers o41 and o42 and purified from gel.</li>
            <li>Modified Gibson assembly (Fulnecek assembly) reaction was performed using both PCR products and transformed into 
            Stellar chemically competent <em>E. coli.</em></li>
            <li>No colonies grew...</li>
          </ul>
          
          <p className="mb-2 font-semibold">2nd iteration: using HiFi Cloning</p>
          <ul className="mb-6 leading-relaxed list-disc pl-6 space-y-2">
            <li>From of pEG plasmid, PONG transposase was amplified with primers o37 and o38 and purified from gel.</li>
            <li>Promoter rZmUBI was amplified from pAMO142 using primers o41 and o42 and purified from gel.</li>
            <li>HiFi Gibson assembly reaction was performed using both PCR products and transformed to Stellar chemically 
            competent <em>E. coli.</em></li>
            <li>Colonies grew!</li>
            <li>Our second construct contains a T-DNA-flanked sequence rZmUBI-PONG1-t2a-PONG2-tOCS. The assembly was 
            confirmed by whole plasmid sequencing.</li>
          </ul>

          <h3 style={{ fontFamily: 'Space Grotesk, sans-serif' }} className="text-2xl font-bold mb-4">TEST – transformation</h3>
          <p className="mb-6 leading-relaxed">
            We co-transformed pIB001 with pEGe into <em>Spirodela polyrhiza</em> 0162, <em>Spirodela polyrhiza</em> 7428, and <em>Spirodela polyrhiza </em> 
            9509. We also included the following controls: pIB001 alone, pEGe alone as a negative control, and pAMO101 alone (rZmUBI-GFP-t35S from Dr. Ordóñez) as a positive control. Under fluorescence 
            microscopy, we observed green fluorescence in pAMO101 around 6 days post-infiltration. No fluorescence was observed 
            in pEGe alone, as expected. However, in pIB001 alone or in pIB001 co-transformed with pEGe, fluorescence was 
            expected but not observed. We repeated the microscopic observation at 12 days post-infiltration (12 dpi), and we detected 
            a small amount of fluorescence in pIB001. However, the fluorescence intensity of pIB001 was significantly lower compared to pAMO101 (see Fig. 5). Importantly, no fluorescence was detected in duckweed co-transformed with pIB001 and 
            pEGe.
          </p>


          <div className='grid grid-cols-1 md:grid-cols-4 gap-4 mb-6'>
            <div className='col-span-4  flex items-center justify-center'>
                <img src="https://static.igem.wiki/teams/5642/images/how/taifr/regenerationassay/figure5upper.webp" alt="Figure X: pAMO101 Map" className="max-w-full h-auto" />
            </div>

          </div>

          <div className='grid grid-cols-1 md:grid-cols-4 gap-4 mb-6'>

            <div className='col-span-2  flex items-center justify-center'>
              <p className="text-base leading-relaxed">
              <strong>Figure 5.</strong> The transformations in the first DBTL cycle of the regeneration assay revealed that the design of 
              pIB001, where GFP as a fluorescent marker is linked via p2a to NPTII as a selection marker at its 3′ end - 
              results in no GFP expression at 6 dpi (3) and only very weak, delayed expression at 12 dpi (5). The lack of 
              fluorescence in the co-transformation of pIB001 × pEGe (4 and 6) is due to excision of the 
              NPTII-p2a-GFP cassette bordered by mPing by the PONG transposase, but not its insertion into the 
              genome, since we omitted the required TTA sites at the beginning and the end of mPing for insertion. The 
              positive control, pAMO101 (1), produced fluorescence, while pEGe (2) alone did not produce fluorescence, as 
              expected.
            </p>      

            </div>
            <div className='col-span-2  flex items-center justify-center'>
                <img src="https://static.igem.wiki/teams/5642/images/how/taifr/regenerationassay/figure5bottom.webp" alt="Figure X: pAMO101 Map" className="max-w-full h-auto" />
            </div>

          </div>

          
          
          

         

          <h3 style={{ fontFamily: 'Space Grotesk, sans-serif' }} className="text-2xl font-bold mb-4 mt-24">LEARN</h3>
          
          <div className='grid grid-cols-1 md:grid-cols-4 gap-8 mb-6'>
            <div className='col-span-2 items-center justify-center'> 
                <div className="mb-6">
                        <p className="font-semibold mb-2">Why was the fluorescence in our pIB001 construct so much weaker and delayed compared with the positive control pAMO101?</p>
                        <p className="mb-4 leading-relaxed">
                        We discussed our results with our advisor, Dr. Ordóñez, who explained that when a gene in an open reading frame is 
                        placed after another gene and linked viac the p2a sequence - a linker that enables the expression of multiple genes from 
                        a single promoter - the downstream gene often shows weaker and delayed expression compared to the first gene 
                        in the frame. In our design, GFP (the fluorescent marker) was cloned downstream of NPTII and the p2a linker.
                        </p>
                    </div>

                    <div className="mb-6 mt-12  ">
                        <p className="font-semibold mb-2">Why was there some fluorescence in pIB001 alone, but no fluorescence when pIB001 was co-transformed with pEGe?</p>
                        <p className="mb-4 leading-relaxed">
                        We concluded that this was likely caused by the excision activity of the PONG transposase provided by pEGe. PONG 
                        may have excised the mPing-bordered cassette containing NPTII-p2a-GFP, preventing the expression machinery from 
                        transiently expressing it. However, this remains an assumption, since we had no marker confirming PONG 
                        expression. If our assumption was correct, then PONG likely excised the mPing-bordered cassette. But we were not 
                        sure… That is why we started a parallel DBTL cycle, termed <strong>The Excision Assay</strong> to find out if our PONG is not 
                        only expressed, but has excision activity towards mPing element in duckweed context.
                        </p>
                    </div>    
                </div>
            <div className='col-span-2  items-center justify-center'>

              <img src="https://static.igem.wiki/teams/5642/images/how/taifr/regenerationassay/figure6.webp" alt="Figure 6: pIB001 Map" className="max-w-full h-auto mb-4" />


             <p className="text-base leading-relaxed">
              <strong>Figure 6.</strong> Microscopy images were captured from all plates in the transformation step of the DBTL cycle 1 Regeneration Assay using a GFP filter (excitation ~509 nm) on a ZEISS AxioZoom V16 microscope. Each transformation event consisted of two plates representing biological replicates. To normalize background signal differences between plates, two groups of fronds were selected from each: one group showing no visible fluorescence, and a second group showing any detectable fluorescence, if present. The fluorescence intensity corresponding to pixels of each individual frond was quantified using the ZEN Blue software. The graph displays the difference in mean fluorescence intensity between the two groups, averaged across both biological replicates for each treatment. These values represent changes in fluorescence intensity among different transformation events, corresponding to different constructs or construct combinations applied to <em>Spirodela polyrhiza</em> 7428.
            </p>  
                
            </div>    
          </div>

          <div className="mb-6">
            <p className="font-semibold mb-2">Why was there no insertion, which could have resulted in delayed fluorescence and possibly new transgenic fronds?</p>
            <p className="mb-4 leading-relaxed">
              We realized shortly after testing the first design that we had forgotten to add TTA sites at both the beginning and end of 
              the mPing cassette. While these sites are not required for excision, they are essential for insertion. The PING-PONG 
              system relies on TTA sites to mediate seamless integration into the genome.
            </p>
            <p className="leading-relaxed">
              Learning from our mistakes, we designed a new construct, pIB002, in which GFP is placed as the first gene in the 
              ORF, and the mPing element begins and ends with TTA sites. In addition, we added RFP as a marker for PONG 
              expression and codon-optimized the construct for duckweed, while ensuring compatibility with the Golden Gate 
              standard.
            </p>
          </div>
        </div>

        {/* DBTL 2 Section */}
        <div className="mb-12 mt-24">
          <h2 style={{ fontFamily: 'Space Grotesk, sans-serif' }} className="text-4xl font-bold mb-6">DBTL 2</h2>
          
          <h3 style={{ fontFamily: 'Space Grotesk, sans-serif' }} className="text-2xl font-bold mb-4">DESIGN of The Excision Assay</h3>
          <p className="mb-6 leading-relaxed">
            As during DBTL 1 cycle, there was no fluorescence signal when pIB001 (mPing bordered GFP-p2a-NPTII) was 
            co-transformed with pEGe (PONG transposase), we assumed, that absence of fluorescence is due to excision activity of 
            PONG, which is excising and moving mPing bordered sequence containing GFP, thus hindering its expression. As excision 
            activity of PONG is crucial for our TAIFR, we didn't just want to assume, we wanted to be sure, so we went into a parallel 
            DBTL cycle 2, called The Excision Assay. In the assy, the full mPing sequence is inserted within the yellow fluorescent 
            protein (YFP) reporter gene, disrupting its function and preventing fluorescence. If PONG transposase is active in 
            duckweed, it will excise mPing, restoring the intact YFP coding sequence. Successful excision therefore results in YFP 
            expression and detectable fluorescence under a microscope. The outcome can also be confirmed by PCR on isolated 
            T-DNA using primers at the 5' and 3' ends of YFP: a band matching the YFP length indicates excision, while a longer band 
            (YFP + mPing) indicates failure.
          </p>

          <img src="https://static.igem.wiki/teams/5642/images/how/taifr/regenerationassay/excision-assay-copy2.webp" alt="Excision Assay Diagram" className="max-w-full h-auto mb-6" />

         
          

          <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mb-6'>
            <div className='col-span-2 items-center justify-center'>
                

                <h3 style={{ fontFamily: 'Space Grotesk, sans-serif' }} className="text-2xl font-bold mb-4">DESIGN of <A className='hover:underline text-[#6ca033]' href="https://registry.igem.org/parts/bba-250g5ni2" target="_blank" rel="noopener noreferrer">pIB004</A></h3>
                <p className="mb-6 leading-relaxed">
                    Construct pIB004 is carrying a gene for yellow fluorescent protein (YFP), interrupted in the middle by the transposon element mPing from Oryza sativa. Expression of the interrupted YFP is driven by ubiquitin promoter from <em>Zea mays</em> (rZmUBI) and terminated by t35S, terminator with polyadenylation signal, derived from Cauliflower mosaic virus. Expression cassette is bordered by T-DNA allowing for ,<em>Agrobacterium</em>-mediated transformation and lies in binary vector, allowing for replication both in <em>E. coli</em> and <em>Agrobacterium tumefaciens</em>.
                </p>

                
                

            </div>

            <div className='col-span-1 items-center justify-center'>
                <img src="https://static.igem.wiki/teams/5642/images/how/taifr/regenerationassay/pib004-copy.webp" alt="Figure Y: pIB004 Map" className="max-w-full h-auto mt-6" />
            </div>  


          </div>

          <h3 style={{ fontFamily: 'Space Grotesk, sans-serif' }} className="text-2xl font-bold mb-4">BUILD – cloning of pIB004</h3>
                <p className="mb-2 leading-relaxed">We used Modular Cloning based on Golden Gate.</p>
                
                <p className="mb-2 font-semibold">Parts:</p>
                <p className="mb-4 leading-relaxed">
                For the first iteration, we sourced mPing sequence from pEarleyGate 100RMOA mPing from Hancock Lab. The Level 0 part t35S (pF11P1) was from Plant Parts II and Infrastructure Kit deposited by Stuttmann Lab. The Level 0 parts pE1P2 and pH12P2 were from the CRISPR/Cas Toolkit for Plants deposited by Nekrasov Lab. 
                </p>
                
                <p className="mb-2 font-semibold">Acceptors:</p>
                <p className="mb-4 leading-relaxed">
                    pE1T, pH2T, pB3T, pH4T and end-linker pB5T from the MoClo Toolkit deposited by Patron's Lab. From Ordóñez’s Lab we have been gifted construct pAMO101 carrying GFP under the <em>Zea mays</em> ubiquitin promoter (rZmUBI) terminated by cauliflower mosaic virus terminator sequence (t35S).
                </p>

          <div className='mb-6 mt-16 text-2xl' style={{ fontFamily: 'Space Grotesk, sans-serif' }} > 
            <b>1st iteration: insertion of mPing before GFP by SpeI into pAMO101</b>
          </div>     
          <p>To test whether PONG can excise mPing positioned upstream of GFP, we first had insert it to this desired location. To this end, we planned to use the SpeI restriction site conveniently located between rZmUBI and GFP in pAMO101.
                </p>
          
          <p className="mb-2 font-semibold mt-4">Steps:</p>
          <ul className="mb-6 leading-relaxed list-disc pl-6 space-y-2">
            <li>Transposable element mPing was amplified from pEG with primers o41 and o42 introducing SpeI recognition sites and purified from gel.</li>
            <li>Restriction cloning of p101 and mPing was performed with SpeI. The plasmid was dephosphorylated using rSAP to prevent self closure of the empty plasmid.</li>
            
          </ul>


          <p className="mb-2 font-semibold mt-4 ">Outcome:</p>
          <p className='pb-8'>
            After several PCR optimizations, we amplified mPing with SpeI sites and performed restriction cloning, but no colonies grew after transformation. We suspected low insert concentration/purity or poor transformation efficiency. To increase yield, we column-purified the PCR product (without gel extraction), which produced several colonies. Colony PCR confirmed positives, but after re-streaking and overnight cultures, none grew. Following consultation, we re-streaked on plates with lower antibiotic concentration, which gave colonies, but the plasmid proved unstable and was lost in later generations. Analytical restriction revealed multiple mPing insertions, likely impairing plasmid replication and bacterial growth-evidenced by poor culture growth and minimal plasmid yield.

          </p>


          <div>
            <div className='mb-6 mt-12 text-2xl' style={{ fontFamily: 'Space Grotesk, sans-serif' }} > 
                <b>2nd iteration: </b>
            </div>     
            <p>
                We took advantage of Type II restriction sites to create unmatched overlapping ends, thus not allowing for multiple insertion, and inserted mPing as an N-terminal tag of the reporter gene β-glucuronidase (GUS) - with the difference that this N-terminal tag contained stop codons, requiring PONG excision for GUS to function. 
            </p>
            
            <p className="mb-2 font-semibold mt-4">Steps:</p>
            <ul className="mb-6 leading-relaxed list-disc pl-6 space-y-2">
                <li>Amplification of mPing from pEG using primers o97 and o98 with MoClo N-terminus overhangs.
                </li>

                <li>
                    Digestion and ligation of product into L0 acceptor pE1T using BbsI, yielding pE1T_mPing.

                </li>
                <li>
                    Digestion and ligation of pE1T_mPing, pE1P2, pH12P2 and pF11P1 withL1 acceptor pB3T using BsaI, yielded the plasmid pB3T_rZmUBI-mPing-GUS-t35S.

                </li>
                <li>
                    Digestion and ligation of above mentioned Level 1 construct into acceptor pH4t with end-linker pB5T using BbsI resulted into pIB004_rZmUBI-mPing-GUS-t35S. The assembly was confirmed by sequencing.

                </li>
                
            </ul>


            <p className="mb-2 font-semibold mt-4 ">Outcome:</p>
            <p className='pb-8'>
                We obtained the correctly assembled construct pIB004_rZmUBI-mPing-GUS-t35S, verified by whole plasmid sequencing. However, the insertion of mPing as N-terminal tag somehow created start codon, that fits the reading frame of the downstream GUS gene at the end of mPing, after all those stop codons… Therefore, we abandoned this approach and did not perform any plant transformations.
            </p>
          </div>


          <div>
            <div className='mb-6 text-2xl mt-12' style={{ fontFamily: 'Space Grotesk, sans-serif' }} > 
                <b className='text-1xl'>3rd iteration: inserting mPing into YFP by synthesis </b>
            </div>     
            <p>
                Since placing mPing as an N-terminal tag could allow reporter expression even without Pong-mediated excision, we instead inserted mPing within the reporter gene. The YFP sequence was synthesized with mPing positioned in the middle, disrupting translation and rendering the protein non-functional (non-fluorescent).
            </p>
            
            <p className="mb-2 font-semibold mt-4">Steps:</p>
            <ul className="mb-6 leading-relaxed list-disc pl-6 space-y-2">
                <li>Digestion and ligation of synthetized YFP interrupted by mPing with pH2T Level 0 acceptor using BbsI, resulted into pH2T_YFP-mPing-YFP.

                </li>

                <li>
                    Digestion and ligation of pH2T_YFP-mPing-YFP, pE1P2, and pF11P1 with the L1 acceptor pB3T using BsaI, resulted the plasmid pB3T_rZmUBI-YFP-mPing-YFP-t35S.
                </li>
                <li>
                    The digestion and ligation of above mentioned construct with Level 2 acceptor pH4T and pB5T end-linker using BbsI, resulted into pIB004_rZmUBI-YFP-mPing-YFP-t35S. 

                </li>
                
                
            </ul>


            <p className="mb-2 font-semibold mt-4 ">Outcome:</p>
            <p className='pb-8'>
                The assembly was confirmed by sequencing and ready to be transformed to <em>Agrobacterium</em> and the to duckweed to perform the Excision Assay.            </p>
          </div>




          <h3 style={{ fontFamily: 'Space Grotesk, sans-serif' }} className="text-2xl font-bold mb-4">TEST - transformation</h3>

          <div className='grid grid-cols-1 md:grid-cols-4 gap-8 mb-6'>
            <div className='col-span-2  items-center justify-center'>
                <p>
                   We performed two iterations of transformation (TEST) of the Excision Assay. We always did two controls.
                </p>
                <ul className='list-disc pl-6 space-y-2 mt-4'>
                    <li>pIB004 (negative control): if we would detect fluorescence without co-transformation of pIB003, the mPing disruption of YFP coding frame would not be sufficient, thus this construct would not be relevant for the Excision Assay</li>
                    <li>pEGe (negative control ): proving that potential fluorescence of YFP is not from caused by presence of pEGe itself</li>
                </ul>

                <p className="mb-2 mt-10 leading-relaxed">Unfortunately, we did not observed the restoration of YFP fluorescence (see Fig. 7.3) followed by co-transformation of pIB003 with pIB004 in any of two iterations we performed, both on <em>Spirodela polyrhiza </em>7428 and <em>Lemna gibba </em>7742.</p>

                <h3 style={{ fontFamily: 'Space Grotesk, sans-serif' }} className="text-2xl font-bold mb-4 mt-12">LEARN</h3>  

                <p>
                  <b>Was PONG unable to excise mPing, given that no restoration of YFP fluorescence was observed in our Excision Assay?</b>
                </p>

                <p className='mt-4 leading-relaxed'>
                  We discussed this question with Dr. Slotkin. He noted that, in contrast to his team’s design, where mPing was excised from a stably integrated GFP–mPing–GFP coding sequence in the <em>Arabidopsis thaliana</em> genome - we attempted to excise mPing from a transiently expressed sequence, freely present in duckweed nuclei due to T-DNA borders and <em>Agrobacterium</em>-mediated delivery. This means that restoration of YFP fluorescence in such a transient context would not be moleculary favoured state, thus it would occur too infrequently to be detectable at the whole-frond level. Therefore, we still could not determine whether PONG exhibited excision activity in the duckweed system. Dr. Slotkin advised performing the Excision Assay using PCR instead. Amplifying the region spanning the 5′ and 3′ ends of the YFP–mPing–YFP sequence would yield a single band if mPing were not excised, and two bands of different lengths if excision occurred.
                </p>

            </div>
            <div className='col-span-2  items-center justify-center'>
                <img src="https://static.igem.wiki/teams/5642/images/how/taifr/regenerationassay/figure7.webp" alt="Figure 7.3: Excision Assay Results" className="max-w-full h-auto mb-4" />
                <p className='text-base leading-relaxed'>
                  <b>Figure 7. </b>
                  In both iterations of the Excision Assay, we transformed two controls into <em>Spirodela polyrhiza</em> 7428 (Sp7428). The first, pIB004, served as a negative control - since the mPing-disrupted YFP coding sequence should not produce fluorescence (1) when transformed without the PONG transposase. The second, pEGe alone, served as a control that desired YFP fluorescence was no caused by the presence or activity of pEGe itself (2). Co-transformation of both constructs was expected to restore YFP fluorescence; however, this was not observed (3) in either of the two iterations.
                </p>
            
            </div>
          </div> 


          <div className='grid grid-cols-1 md:grid-cols-4 gap-8 mb-6'>
            <div className='col-span-2  items-center justify-center'> 
              <p>
                  <b>
                    Why was the band representing YFP with mPing excised thinner than the one representing the original sequence with mPing present?
                  </b>
                    
                  </p>

                <p className='mt-4 leading-relaxed'>
                   When we performed PCR on the Excision Assay (see Fig. 8), we detected two bands of different lengths (936bp and 490bp). The smaller band, representing the YFP sequence without mPing (thus indicating excision), was much thinner. This could suggest that excision is not very efficient or frequent. Alternatively, as Dr. Slotkin suggested, excision might occur efficiently, but repair of the excised sequence may be disfavored. Consequently, only a small proportion of sequences would have their YFP coding frame properly restored, resulting in fewer templates available for PCR amplification of the 490bp band.
                   </p>

                 <p className='mt-4 leading-relaxed'>

                  However, this remained only a hypothesis, as we could not confirm the second explanation. Therefore, we decided to improve the pEGe design by codon-optimizing PONG for duckweed and making its expression detectable through fusion with RFP via a p2a linker.
                 </p>


            </div>
            <div className='col-span-2  items-center justify-center'> 
                <img src="https://static.igem.wiki/teams/5642/images/how/taifr/regenerationassay/excision-assay-pcr.webp" alt="Figure 7.3: Excision Assay Results" className="max-w-full h-auto mb-4" />
                <p className='text-base leading-relaxed'>
                  <b>Figure 8. </b>
                  Using primers o136 and o137, we amplified genomic DNA isolated from <em>Spirodela polyrhiza </em>7428 co-transformed with pIB004 and pEGe. The forward primer (o136) is specific to the 5′ end of the YFP–mPing–YFP sequence, while the reverse primer (o137) targets the 3′ end of the same sequence. When mPing is present within the YFP coding sequence, the expected amplicon length is 936 bp; when mPing is excised, the expected product is 490 bp. PCR analysis of the excision assay produced two bands - one slightly below 1000 bp and one slightly below 500 bp - indicating that PONG successfully excised mPing from the YFP sequence in the duckweed nucleus, thus confirming its functionality. The control (pIB004 alone) yielded only the longer band (936 bp), as mPing remained within the YFP sequence and could not be excised due to the absence of PONG (from pEGe). The control (pEGe alone) did not yield any band, as YFP is not included in its construct. The resulting image represents a stitch of two gels, used to illustrate a slight increase in the size of the restored YFP band between DNA samples collected at 6 dpi and 18 dpi. We hypothesize that the band increased in size because PONG had more time to act upon mPing within the YFP sequence.
                </p>
            </div>


          </div>  


        
        </div>

        {/* DBTL 3 Section */}
        <div className="mb-12 mt-24">
          <h2 style={{ fontFamily: 'Space Grotesk, sans-serif' }} className="text-4xl font-bold mb-6">DBTL 3</h2>
          
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mb-6'>
            <div className='col-span-2  items-center justify-center'>
                <h3 style={{ fontFamily: 'Space Grotesk, sans-serif' }} className="text-2xl font-bold mb-4">DESIGN of <A className='hover:underline text-[#6ca033]' href="https://registry.igem.org/parts/bba-256srz3e" target="_blank" rel="noopener noreferrer">pIB002</A></h3>
                <p className="mb-4 leading-relaxed">
                    Plasmid pIB002 contains a cassette flanked on both sides by the transposable 
                    element mPing with correct TTA sites at the 5' end of 0.5mPing and at the 3' end of 
                    1.0mPing. Inside the cassette, there is a fluorescent marker (GFP) and a resistance gene 
                    against neomycin (NPTII). Both GFP and NPTII are linked via a self-cleaving 2A peptide 
                    (derived from porcine teschovirus-1, p2a), allowing their parallel expression. The 
                    GFP-p2a-NPTII ORF is driven by the ubiquitin promoter from <em>Zea mays</em> (rZmUBI) and 
                    terminated by terminator sequence from Cauliflower Mosaic Virus (t35S). This design 
                    minimizes the overall cassette size, resulting in higher insertion efficiency. Expression 
                    cassette is bordered by T-DNA allowing for <em>Agrobacterium</em>-mediated transformation and 
                    lies in binary vector, allowing for replication both in <em>E. coli</em> and in <em>Agrobacterium
                    tumefaciens</em> .
                </p>

                
            </div>
            <div className='col-span-1   items-center justify-center'>
                <img src="https://static.igem.wiki/teams/5642/images/how/taifr/regenerationassay/pib002-copy.webp" alt="Figure X: pIB002 and pIB003 Maps" className="max-w-full h-auto" />

            </div>

          </div>


          <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mb-6'>
            <div className='col-span-2  items-center justify-center'>
                

                <h3 style={{ fontFamily: 'Space Grotesk, sans-serif' }} className="text-2xl font-bold mb-4">DESIGN OF <A className='hover:underline text-[#6ca033]' href="https://registry.igem.org/parts/bba-25bd3z4p" target="_blank" rel="noopener noreferrer">pIB003</A></h3>
                <p className="mb-6 leading-relaxed">
                    Plasmid pIB003 is carrying ORFs for two PONG transposase subunits, separated by 
                    self-cleaving 2A peptide from <em>Thosea asigna </em>virus (t2a) with nuclear localization sequence 
                    (NLS), linked with red fluorescent protein (RFP) by a self-cleaving 2A peptide derived from 
                    porcine teschovirus-1 (p2a). Expression of PONG-p2a-RFP is driven by ubiquitin promoter 
                    from <em>Zea mays</em> (rZmUBI) and terminated by terminator sequence derived from Cauliflower 
                    Mosaic Virus (t35S). Both PONG and p2a-RFP are duckweed-codon optimized. 
                    Expression cassette is bordered by T-DNA allowing for <em>Agrobacterium</em>-mediated 
                    transformation and lies in binary vector, allowing for replication both in <em>E. coli</em> and in 
                    <em>Agrobacterium tumefaciens</em>.
                </p>
            </div>
            <div className='col-span-1   items-center justify-center'>
               <img src="https://static.igem.wiki/teams/5642/images/how/taifr/regenerationassay/pib003.webp" alt="Figure X: pIB002 and pIB003 Maps" className="max-w-full h-auto" />

            </div>

          </div>

          

          <h3 style={{ fontFamily: 'Space Grotesk, sans-serif' }} className="text-2xl font-bold mb-4">BUILD – cloning of pIB002</h3>
          <p className="mb-2 leading-relaxed">We used Modular Cloning based on Golden Gate.</p>
          
          <p className="mb-2 font-semibold">Parts:</p>
          <p className="mb-4 leading-relaxed">
            Level 0 part t35S (pF11P1) came from the CRISPR/Cas Toolkit for Plants deposited by Nekrasov Lab. Level 0 part 
            rZmUBI (pE1P2) came from Plant Parts II and Infrastructure Kit deposited by Stuttmann Lab. Level 0 part 
            GFP-p2a-NPTII (pE6P3) was from the MoClo Plant Parts III: Transformation & Genome Engineering Kit by the Voytas 
            Lab
          </p>
          
          <p className="mb-2 font-semibold">Acceptors:</p>
          <p className="mb-4 leading-relaxed">
            We used acceptor vectors pB3T, pC3T, pD3T, pH4T and the end-linker pD5T from the MoClo Toolkit deposited by 
            Patron's Lab.
          </p>
          
          <p className="mb-2 font-semibold">Steps:</p>
          <ul className="mb-6 leading-relaxed list-disc pl-6 space-y-2">
            <li>Amplification of 0.5mPing from pEG using a new set of primers (containing the TTA site on 5' end) o126 and o30 with 
            MoClo-compatible overhangs for Level 1 acceptors, followed by digestion and ligation of the PCR amplicon using 
            BsaI, resulted in the Level 1 part pB3T_tta-0.5mPing.</li>
            <li>Amplification of 1.0mPing from pEG using primers (containing TTA site on 3' end) o31 and o127 with 
            MoClo-compatible overhangs for Level 1 acceptors, followed by digestion and ligation of the PCR amplicon using 
            BsaI, resulted in the Level 1 part pD3T_1.0mPing.</li>
            <li>Digestion and ligation of pE1P2, pE6P3, pF11P1, and pC3T using BsaI resulted in the Level 1 part 
            pC3T_rZmUBI-GFP-p2a-NPTII-t35S</li>
            <li>Digestion and ligation of the above-mentioned Level 1 parts with end-linker pD5T and acceptor pH4T resulted in 
            pIB002_0.5mPing-rZmUBI-GFP-p2a-NPTII-t35S-1.0mPing. The assembly was confirmed by sequencing.</li>
          </ul>

          <h3 style={{ fontFamily: 'Space Grotesk, sans-serif' }} className="text-2xl font-bold mb-4">BUILD – cloning of pIB003</h3>
          <p className="mb-2 leading-relaxed">We used Modular Cloning based on Golden Gate.</p>
          
          <p className="mb-2 font-semibold">Parts:</p>
          <p className="mb-4 leading-relaxed">
            Level 0 part t35S (pF11P1) was from the CRISPR/Cas Toolkit for Plants deposited by Nekrasov Lab. Level 0 part 
            rZmUBI (pE1P2) was from Plant Parts II and Infrastructure Kit deposited by Stuttmann Lab.
          </p>
          
          <p className="mb-2 font-semibold">Acceptors:</p>
          <p className="mb-4 leading-relaxed">
            We used acceptors pF2T, pG1T, pB3T, pH4T and end-linker pB5T from MoClo Plant Parts Kit deposited by Patron's 
            Lab.
          </p>
          
          <p className="mb-2 font-semibold">Steps:</p>
          <ul className="mb-6 leading-relaxed list-disc pl-6 space-y-2">
            <li>The codon-optimized PONG was cloned into Level 0 acceptor pF2T using BbsI, yielding pF2T_PONG.</li>
            <li>The codon-optimized RFP with p2a was cloned into Level 0 acceptor pG1T using BbsI, yielding pG1T_p2a-RFP.</li>
            <li>Digestion and ligation of pF2T_PONG, pG1T_p2a-RFP, pE1P2, and pF11P1 with acceptor pB3T using BsaI resulted 
            into Level 1 construct pB3T_rZmUBI-PONG-p2a-RFP-tNOS.</li>
            <li>Digestion and ligation of pB3T_rZmUBI-PONG-p2a-RFP-tNOS with end-linker pB5T with acceptor pH4T using BbsI 
            resulted into Level 2 construct pIB003_rZmUBI-PONG-p2a-RFP-t35S. The assembly was confirmed by sequencing.</li>
          </ul>

         

         <div className='grid grid-cols-1 md:grid-cols-4 gap-8 mb-6 mt-32'>
            <div className='col-span-2  items-center justify-center'>   
                 <h3 style={{ fontFamily: 'Space Grotesk, sans-serif' }} className="text-2xl font-bold mb-4">TESTING – transformation</h3>
                <p className="mb-4 leading-relaxed">
                    We co-transformed <em>Spirodela polyrhiza</em> 7428 with pIB002 x pIB003 and included 5 controls:
                </p>
                <ul className="mb-6 leading-relaxed list-disc pl-6">
                    <li><A target='_blank' className='hover:underline text-[#6ca033]' href="https://registry.igem.org/parts/bba-25dnbygj">pAMO101</A>: positive control</li>
                    <li>pIB002</li>
                    <li>pIB003</li>
                    <li>pIB002 x pIB003</li>
                </ul>

                <h3 style={{ fontFamily: 'Space Grotesk, sans-serif' }} className="text-2xl font-bold mb-4 mt-12">TESTING – neomycin test</h3>
                 <p className="mb-4 leading-relaxed">
                    As we built the first functional construct to perform our regeneration assay (pIB002), we needed to design the appropriate regeneration conditions. Our design includes the NPTII gene, based on previous assessments of antibiotic effects by Dr. Ordóñez, which showed that duckweed is most sensitive to neomycin. We therefore had to determine the critical concentration at which duckweeds are killed by neomycin. In addition, we needed to evaluate whether natural neomycin sulphate is sufficient or whether synthetic G418 is required. For these purposes, we designed and performed the neomycin test. We subjected three clones of <em>Spirodela polyrhiza</em> (0162, 7428, and 9509) to different concentrations of neomycin sulphate and G418, ranging from 0 to 100 mg/L. All combinations were tested in biological triplicates using 12-well plates.
                </p>



                 <h3 style={{ fontFamily: 'Space Grotesk, sans-serif' }} className="text-2xl font-bold mb-4 mt-24">LEARN</h3>
                <div className="mb-6">
                    <p className="font-semibold mb-2">Our constructs are functional! What's next?</p>
                    <p className="mb-4 leading-relaxed">
                    In comparison with the first DBTL cycle, we can now observe functionality of both constructs required for molecular PING-PONG. GFP in pIB002 exhibits more fluorescence compared to the first DBTL cycle (3), while RFP in pIB003 is faintly visible (2), confirming that PONG is expressed. The mPing-bordered translational unit (rZmUBI-GFP-p2a-NPTII-t35S) is not only being excised (4) but also likely inserted, as GFP spots appear randomly distributed in duckweed fronds between 12 and 18 dpi (5). Regeneration attempts can begin as soon as we determine the exact neomycin concentration that kills wild-type duckweed.
                    </p>
                </div>



            </div>

            <div className='col-span-2   items-center justify-center'>

              <img src="https://static.igem.wiki/teams/5642/images/how/taifr/regenerationassay/figure9-1.webp" alt="Figure 9: Regeneration Assay Results" className="max-w-full h-auto mb-4" />
              <img src="https://static.igem.wiki/teams/5642/images/how/taifr/regenerationassay/figure9-2.webp" alt="Figure 9: Regeneration Assay Results" className="max-w-full h-auto mb-4" />

              <p className="text-base leading-relaxed">
              <strong>Figure 9.</strong> The positive control (pAMO101) showed GFP fluorescence (1), although reduced compared with 
              DBTL 1 (<A href="#dbtl-4-learn" className='hover:underline text-[#6ca033]'>see explanation here</A>). The improved design of pIB002, with GFP as the first gene in the 
              translational unit, resulted in visible fluorescence (3) comparable to the fluorescence of positive control. The 
              new design of pIB003 produced weak expression of RFP (2), as expected since it follows the p2a linker, 
              thus confirming that the PONG transposase is expressed. Co-transformation of pIB002 with pIB003 
              resulted in no GFP fluorescence at 6 dpi (4), similar to DBTL 1. Surprisingly, 18 days post infiltration, GFP 
              spots appeared, randomly distributed on duckweed fronds (5), probably as a result of insertion of the 
              mPing-bordered translational unit (rZmUBI-GFP-p2a-NPTII-t35S).
            </p>
            
            </div>

         </div>


         
          
          <div className='grid grid-cols-1 md:grid-cols-4 gap-4 mb-6 mt-8'>
            <div className='col-span-3  items-center justify-center'>
                

                <div className="mb-6">
                    <p className="font-semibold mb-2">Synthetic neomycin (G418) kills duckweed at concentrations above 0.5 mg/L</p>
                    <p className="mb-4 leading-relaxed">
                    This was observed in our neomycin test conducted on three clones of <em>Spirodela polyrhiza</em> (162, 7428, 9509) using both natural (sulphate) and synthetic (G418) forms of neomycin (see Fig. 11).
                    </p>
                </div>

                <div className="mb-6">
                    <p className="font-semibold mb-2">But wait - is our PING-PONG construct design modular and user-friendly?</p>
                    <p className="mb-4 leading-relaxed">
                    This was a question we have been asking ourselves before beginning regeneration attempts. If we succeed in regenerating an entire transgenic frond from cells carrying our cassette containing NPTII, we would not be able to insert any additional transgenes into those duckweed transgenic lines using our TAIFR method, since it relies on neomycin selection (facilitated by the NPTII gene), which would already be present in every duckweed cell. Thus, our initial design prevented transgene stacking in duckweed.
                    </p>
                </div>

                <div className="mb-6">
                    <p className="font-semibold mb-2">And what if we - or anyone else - wanted to insert something other than GFP?</p>
                    <p className="mb-4 leading-relaxed">
                    Our design of pIB002 only allowed GFP delivery into duckweed. While it could be rebuilt from scratch using Level 0 parts and Golden Gate cloning, such an approach would be time-consuming and inefficient.
                    </p>
                    <p className="leading-relaxed">
                    To address these two shortcomings, we developed pIB005 - a customizable TAIFR construct that enables transgene stacking in duckweed – we opened DBTL cycle 4 of our Regeneration Assay.
                    </p>
                </div>
            </div>
            <div className='col-span-1 items-center justify-center p-2'>
                <img src="https://static.igem.wiki/teams/5642/images/how/taifr/regenerationassay/figure11.webp" alt="Description of image" />
                <p className='text-base mt-8 leading-relaxed'>
                    <b>Figure 11.</b> The neomycin sensitivity test on <em>Spirodela polyrhiza</em> clones (162, 7428, and 9509) showed that they are much more sensitive to the synthetic form of neomycin (G418). The response was consistent, with all fronds killed at concentrations at and above 0.5 mg/L of G418 in all three clones. The test was performed twice, each time with three biological replicates.

                </p>
            </div>

          </div>

          <p className="mb-4 leading-relaxed">
            <strong>There were spots of GFP fluorescence in transformed duckweeds (see Fig. 15), as a results of genomic insertion.
            However, what if <em>Agrobacterium</em> is unable to reach the meristematic cells of duckweed, and the PING-PONG 
            system therefore cannot insert the transgene into cells with the sufficient capacity to give rise to a whole new 
            transgenic frond?</strong>
          </p>

          <p className="mb-4 leading-relaxed">
            This is what our advisor, Dr. Ordóñez, proposed when we showed him the results. We could probably favour them 
            sufficiently by antibiotic (neomycin) selection to force them to give rise to a new frond. But what if this is not possible? 
            To answer the question of whether <em>Agrobacterium</em> can reach and infect the meristematic cells of duckweed, we designed 
            the Meristematic Assay, which we decided to run in parallel with DBTL cycle no. 4 of The Regeneration Assay. The aim of 
            the Meristematic Assay is to knock-out a previously stably inserted GFP in Spirodela polyrhiza 0162 strain and observe 
            daughter fronds not exhibiting GFP fluorescence. These stable lines were gifted to us by Ordóñez Lab. If successful, we 
            would have certainty that <em>Agrobacterium</em> can indeed reach the meristematic cells. If not, we would need to develop a new 
            strategy. Thus, we initiated DBTL cycle no. 5, termed the Meristematic Assay. <A href="#dbtl-5" className='hover:underline text-[#6ca033]'>Read more here</A>.
          </p>
        </div>

        {/* DBTL 4 Section */}
        <div className="mb-12 mt-32">
          <h2 style={{ fontFamily: 'Space Grotesk, sans-serif' }} className="text-4xl font-bold mb-6">DBTL 4</h2>
          
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mb-6'>
            <div className='col-span-2  items-center justify-center'>
                <h3 style={{ fontFamily: 'Space Grotesk, sans-serif' }} className="text-2xl font-bold mb-4">DESIGN of <A href="https://registry.igem.org/parts/bba-25460yvj" target='_blank' className='hover:underline text-[#6ca033]'>pIB005</A></h3>
                <p className="mb-6 leading-relaxed">
                    Plasmid pIB005 contains a cassette flanked on both sides by the transposable 
                    element mPing. Inside the cassette, there is a fluorescent marker (GFP) and a resistance 
                    gene against neomycin (NPTII). Both GFP and NPTII are linked by a self-cleaving 2A 
                    peptide (derived from porcine teschovirus-1), allowing their parallel expression. The 
                    GFP-p2A-NPTII ORF is driven by the ubiquitin promoter from <em>Zea mays</em> (rZmUBI) and 
                    terminated by the Cauliflower Mosaic Virus terminator sequence (t35S). This design 
                    minimizes the overall cassette size, resulting in higher insertion efficiency. The gene for 
                    GFP in the cassette is bordered by Esp3I restriction sites, allowing seamless swapping of 
                    the first coding sequence (CDS1) in the translational unit. This design enables 
                    customization of which gene is inserted and expressed in duckweed using our TAIFR 
                    method. The second CDS of the translational unit (p2A-NPTII) is bordered by lox sites - 
                    specifically mutated sequences, with lox71 at the 5′ end and lox66 at the 3′ end. Upon 
                    expression of Cre recombinase, this design enables excision of the selection marker 
                    (NPTII) from transgenic duckweed, allowing transgene stacking in a single line using our 
                    TAIFR method. Excision of p2A-NPTII from transgenic duckweed lines results in a mutated 
                    lox site that is no longer recognizable by Cre recombinase, thereby allowing repeated 
                    insertion of the TAIFR translational unit and excision of the selection marker (NPTII).The 
                    entire expression cassette is bordered by T-DNA for <em>Agrobacterium</em>-mediated 
                    transformation and is housed in a binary vector, allowing replication in both <em>E. coli</em> and 
                    <em>Agrobacterium tumefaciens</em>.
                </p>    
            </div>

            <div className='col-span-1  flex items-center justify-center'>
              <img src="https://static.igem.wiki/teams/5642/images/how/taifr/regenerationassay/pib005-copy.webp" alt="pIB005 Plasmid Diagram" className="max-w-full h-auto" />
            </div>

          </div>

          

          <h3 style={{ fontFamily: 'Space Grotesk, sans-serif' }} className="text-2xl font-bold mb-4">BUILD - cloning of pIB005</h3>
          <p className="mb-4 leading-relaxed">
            We had the whole composite part be synthetized as clonal DNA, thanks to superior 
            synthetizing capabilities of Ansa Biotechnologies. Then, we used Modular Cloning based on Golden Gate to introduce the composite part binary 
            vector.
          </p>
          
          <p className="mb-2 font-semibold">Acceptors:</p>
          <p className="mb-4 leading-relaxed">
            We used acceptor vectors pB3T, pH4T and end-linker pB5T from the MoClo Toolkit deposited by Patron's Lab.
          </p>
          
          <p className="mb-2 font-semibold">Steps:</p>
          <ul className="mb-6 leading-relaxed list-disc pl-6 space-y-2">
            <li>Digestion and ligation of 0.5mPing-rZmUBI-GFP-lox71-p2a-NPTII-lox66-t35S-1.0mPing composite part into Level 
            1 acceptor pB3T using BsaI resulted into pB3T_0.5mPing-rZmUBI-GFP-lox71-p2a-NPTII-lox66-t35S-1.0mPing</li>
            <li>Digestion and ligation of the above-mentioned Level 1 part with end-linker pB5T and acceptor pH4T using BbsI 
            resulted into final Level 2 construct pIB005_0.5mPing-rZmUBI-GFP-lox71-p2a-NPTII-lox66-t35S-1.0mPing. The 
            assembly was confirmed by sequencing.</li>
          </ul>

          <h3 id="dbtl-4-test" style={{ fontFamily: 'Space Grotesk, sans-serif' }} className="text-2xl font-bold mb-4 mt-24">TEST – transformation</h3>
          

          <div className='grid grid-cols-1 md:grid-cols-5 gap-6 mb-6'>
            <div className='col-span-2  items-center justify-center'>
                <p className="mb-4 leading-relaxed">
                    Altogether, we did 6 iterations of transformation (TEST) DBTL 4 cycle of The Regeneration Assay to 
                    fine-tune conditions in way that cells that got inserted by our transposase assisted system will give rise to a 
                    new transgenic frond. In each iteration we did following controls:
                </p>
                <ul className="mb-4 leading-relaxed list-disc pl-6">
                    <li>pIB005 without neomycin</li>
                    <li>pIB005 with neomycin (5mg/L)</li>
                    <li>pIB005 x pIB003 without neomycin</li>
                </ul>
                <p className="mb-4 leading-relaxed">
                    In the first iteration we did four additional control:
                </p>
                <ul className="mb-6 leading-relaxed list-disc pl-6">
                    <li>pAMO101: positive control (same as in DBTL 1 and 3 - not displayed here)</li>
                    <li>pIB003 (same as in DBTL 2 and 3 - not displayed here)</li>
                    <li>non-transformed Sp7428 with neomycin (5mg/L): negative control 1</li>
                    <li>non-transformed Sp7428 without neomycin: negative control 2</li>
                </ul>

                <p className="mb-6 leading-relaxed">
                    We observed that addition of neomycin (G418) is causing increased autofluorescence of 
                    chlorophyl – fortunately, this type of fluorescence is easily distinguishable from the GFP fluorescence (see 
                    differences in pictures 1 and 4, 2 and 5, 3 and 6).
                </p>

             </div>
            <div className='col-span-3 items-center justify-center'>
              <img src="https://static.igem.wiki/teams/5642/images/how/taifr/regenerationassay/figure12.webp" alt="Description of image" className="max-w-full h-auto" />

               <p className="text-base leading-relaxed mt-12">
              <strong>Figure 12.</strong> Transformation with the new pIB005 construct resulted in GFP expression (2), similar to that observed with its predecessor pIB002. The amount of GFP expression decreased when G418 was added (5), while chlorophyll autofluorescence increased (5) due to damage of chloroplast protein synthesis by G418, as also seen in non-transformed Sp7428 treated with G418 (4). As in DBTL 3, no fluorescence was observed when pIB005 was co-transformed with pIB003 6dpi, due to the excision activity of the PONG transposase. As in both non-transformed and pIB005-transformed Sp7428, the addition of G418 increased chlorophyll autofluorescence (6). All photos are taken 6 days post infiltration (6dpi).
            </p>         
            
            </div>   
          </div>


          <img src="https://static.igem.wiki/teams/5642/images/how/taifr/regenerationassay/figure13-2.webp" alt="Description of image" className="max-w-full h-auto mb-6" />              

          <div className=" mb-6">
            <p className="text-base leading-relaxed">
              <strong>Figure 13.</strong> 
                Microscopy images were captured from all plates in the transformation step of the DBTL cycle 4 of Regeneration Assay using a GFP filter (excitation ~509 nm) on a ZEISS AxioZoom V16 microscope. Each transformation event consisted of two plates representing biological replicates. To normalize background signal differences between plates, two groups of fronds were selected from each: one group showing no visible fluorescence, and a second group showing any detectable fluorescence, if present. The fluorescence intensity corresponding to pixels of each individual frond was quantified using the ZEN Blue software. The graph displays the difference in mean fluorescence intensity between the two groups, averaged across both biological replicates for each treatment. These values represent changes in fluorescence intensity among different transformation events, corresponding to different constructs or construct combinations applied to <em>Spirodela polyrhiza</em> 7428.

            </p>
          </div>



          <img src="https://static.igem.wiki/teams/5642/images/how/taifr/figure14-14.webp" alt="Description of image" className="max-w-full h-auto mb-6" />

         <p className='mt-10 mb-6 leading-relaxed text-base'>
          <p>
            <strong>Figure 14. </strong>
            <span style={{ fontWeight: 400 }}>
              We performed six iterations of the transformation (TESTING) in the DBTL4
              cycle of our Regeneration Assay to identify the exact conditions that favuor
              regeneration of cells in which the transgene containing the{" "}
            </span>
            <strong>NPTII</strong>
            <span style={{ fontWeight: 400 }}> gene (conferring </span>
            <strong>G418</strong>
            <span style={{ fontWeight: 400 }}>
              {" "}
              resistance) was inserted using our transposase-assisted insertion assay. We
              tested different concentrations of synthetic neomycin (G418), varying the
              timing of its addition (
            </span>
            <strong>DPI</strong>
            <span style={{ fontWeight: 400 }}>
              {" "}
              = days post-infiltration), as well as different hormones known to promote
              cell proliferation (the cytokinin TDZ ={" "}
            </span>
            <strong>thidiazuron </strong>
            <span style={{ fontWeight: 400 }}>and </span>
            <strong>zeatin</strong>
            <span style={{ fontWeight: 400 }}>, and the auxin </span>
            <strong>2,4-dichlorophenoxyacetic acid</strong>
            <span style={{ fontWeight: 400 }}>
              ). We also tested different timings of hormone application (
            </span>
            <strong>DBI</strong>
            <span style={{ fontWeight: 400 }}> = days before infiltration).</span>
          </p>


         </p>


          <h3 id="dbtl-4-learn" style={{ fontFamily: 'Space Grotesk, sans-serif' }} className="text-2xl font-bold mb-4">LEARN</h3>
          <>
            <p>
                <span style={{ fontWeight: 400 }}>We placed </span>
                <strong>
                hundreds of co-transformed duckweeds under different post-infiltration
                conditions{" "}
                </strong>
                <span style={{ fontWeight: 400 }}>(see Figure 14) and waited.</span>
            </p>
            <p className='mt-8'>
                <br />
                <strong>In RA3.1</strong>
                <span style={{ fontWeight: 400 }}>
                , fluorescence from pIB005 was observed. Similarly to the DBTL 3 cycle, no
                fluorescence appeared when pIB005 was co-transformed with pIB003 at 6 days
                post-infiltration (dpi). Between 12 – 18dpi, GFP spots were visible again,
                but still no transgenic daughter fronds appeared. After 18 dpi, we
                transferred all duckweeds from RA3.1 onto 5 mg/L G418, and after 24 dpi,
                onto 10 mg/L G418. Both{" "}
                </span>
                <strong>concentrations exceeded the survival threshold </strong>
                <span style={{ fontWeight: 400 }}>
                (0.5 mg/L) determined during the neomycin sensitivity test (see Fig 11),
                by 10-fold and 20-fold, respectively. The majority of duckweeds died, but{" "}
                </span>
                <strong>
                a substantial number of green, healthy-looking daughter fronds survived,
                at 20-fold higher G418 concentrations{" "}
                </strong>
                <span style={{ fontWeight: 400 }}>
                (see Fig 16). However, no whole-frond GFP fluorescence was observed. Why?
                </span>
            </p>
            </>


          <div className='grid grid-cols-1 md:grid-cols-4 gap-8 mt-8'>
            <div className='col-span-2  items-center justify-center'>

                 <img src="https://static.igem.wiki/teams/5642/images/how/taifr/regenerationassay/figure14.webp" alt="Description of image" className="max-w-full h-auto mb-4" />      

                      
            </div>

            <div className='col-span-2  items-center justify-center'>

                 <img src="https://static.igem.wiki/teams/5642/images/how/taifr/regenerationassay/figure16.webp" alt="Description of image" className="max-w-full h-auto mb-4 mt-10" />     

            

            </div>

          </div>



           <div className='grid grid-cols-1 md:grid-cols-4 gap-8 mb-6 '>
            <div className='col-span-2  items-center justify-center'>


                 <p className="text-base leading-relaxed">
                    <strong>Figure 15.</strong> Co-transformation of pIB005 and pIB003 results in no detectable transient GFP fluorescence 6 days post-infiltration (see Fig. 12.3). However, between 12 and 18 dpi, randomly distributed spots of GFP fluorescence appear, probably resulting from the insertion of the mPing-bordered cassette (rZmUBI-GFP-p2a-NPTII-t35S) into the nuclear genome facilitated by the PONG transposase. To confirm this assumption, we performed PCR to determine whether the mPing-bordered cassette had been inserted into the genome.
                    </p>       
            </div>

            <div className='col-span-2  items-center justify-center'>


                <p className="text-base leading-relaxed ">
              <strong>Figure 16.</strong> The surviving healthy Sp7428 daughter fronds (1) resulted from pIB005 × pIB003 co-transformation in RA3.1, compared with non-transformed Sp7428 dead fronds (2). Both samples were cultivated on G418: first at 0.25 mg/L for 18 days, then for 6 days at 5 mg/L, and finally for 6 days at 10 mg/L. These concentrations are 10-fold and 20-fold higher, respectively, than the survival threshold of Sp7428 (0.5mg/L of G418).
            </p>

            </div>

          </div>


          <p className="mb-6 leading-relaxed">
            To determine whether our translational cassette was truly inserted (as suggested by the GFP spots and survival at 
            10 mg/L G418), we performed PCR to check for the presence of the GFP gene (using primers o128 and o129). As our advisor, Dr. Ordóñez, found that <em>Agrobacterium</em> can survive in duckweeds for a prolonged period (up to several weeks), we aimed to eliminate the possibility of detecting GFP originating from the presence of our binary vector pIB005 in residual <em>Agrobacterium</em> cells within the duckweeds. First, we continuously grew the duckweeds on DPIM medium containing high concentrations (400 mg/L) of ticarcillin and cefotaxime, which makes it very difficult for <em>Agrobacterium</em> to survive. Second, at 24 days post-infiltration (6 days before DNA isolation), we washed and transferred all surviving duckweeds into fresh well plates to further minimize bacterial contamination. Third, we ran the isolated genomic DNA on a gel for 2 hours and excised only the uppermost band, thereby separating <em>Agrobacterium</em> DNA (smaller and thus migrating faster) from plant genomic DNA (larger and migrating more slowly). Finally, using the same DNA samples, we performed another PCR with primers o55 and o56, which are specific to <em>Agrobacterium</em> genomic DNA, to confirm the absence of its contamination. Our measures ensured the removal of <em>Agrobacterium</em> in 17 out of the 20 samples tested (see lower part of Fig. 17). We detected GFP in 9 out of 20 DNA samples from duckweed subjected to our regeneration assay, and in 7 of these, no <em>Agrobacterium</em> DNA was present. Thus, we confirmed that our Transposase-Assisted Insertion system is indeed capable of inserting an mPing-bounded transgene into the duckweed frond.
          </p>

          
                <img src="https://static.igem.wiki/teams/5642/images/how/taifr/regenerationassay/figure17-2.webp" alt="Description of image" className="max-w-full h-auto mb-4" />
            
          <p className='text-base leading-relaxed mb-12'>
                    <b>Figure 17. </b>
                    Genomic DNA isolated from <em>Spirodela polyrhiza</em> 7428 at 30 days post co-transformation with pIB005 and pIB003 (iteration RA4.1) was separated on a gel from to avoid conceivable <em>Agrobacterium</em> DNA contamination, purified, and subsequently subjected to two PCR reactions. The first reaction (upper gel), using primers o128 and o129, tested for the presence of GFP - presumably inserted into the genome via PONG transposase activity from pIB003. It yielded the expected 250 bp product in 9 out of 20 samples. The second reaction (lower gel), using primers o55 and o56, tested for the presence of <em>Agrobacterium</em> DNA in the samples to rule out the possibility that GFP was present in the form of the binary vector pIB005 residing in <em>Agrobacterium</em>. This reaction produced the expected product in 3 out of 20 samples, indicating that GFP detection in 7 out of 20 samples resulted from Transposase-Assisted Insertion. The first negative control (genomic DNA from non-transformed <em>S. polyrhiza</em>) did not yield any bands, as expected. The second negative control (water instead of DNA) also showed no amplification. The positive control (pIB005 construct) yielded the expected 250 bp band.
                </p>

          <p className="mb-6 leading-relaxed" id="wondering-end">
            Wondering how the regeneration attempts turned out in RA3.2, 3.3, 3.4, 3.5, and 3.6? We are too… As the Wiki 
            Freeze was approaching and time was running short, we tried to speed up transformations by preparing 
            <em>Agrobacterium</em> cultures for each transformation simply by inoculating fresh medium with a previously used culture 
            stored in the fridge (4 °C). This practice led to a dramatic decrease in transformation efficiency - almost to 
            zero - which we initially failed to notice because we had stopped using the positive control (pAMO101), which was 
            designed precisely to serve as a transformation efficiency control. As a result, we ended up performing five 
            iterations of our Regeneration Assay with <em>Agrobacterium</em> cultures that barely contained the transgene...
          </p>

          <p className="mb-6 leading-relaxed">
            Had we followed the proper procedure - starting each time from a glycerol stock - we would probably already 
            have completed the regeneration part of our TAIFR method by the iGEM Wiki freeze. That is also why we 
            created the <A className='hover:underline text-[#6ca033]' href='plant#duckweed-transformation'>Duckweed Transformation Protocol page</A>: so that other iGEM teams will not repeat the same mistake.
          </p>
        </div>


        <img src="https://static.igem.wiki/teams/5642/images/how/taifr/regenerationassay/figure17.webp" alt="Description of image" className="max-w-full h-auto mb-6" />
        <p className='text-base leading-relaxed mb-12 mt-10'>
          <b>Figure 17. </b>After three DBTL cycles of the “PING part” (mPing-bordered cargo rZmUBI-GFP-p2a-NPTII-t35S) of our TAIFR method, we built and tested a functional and user-friendly composite part, pIB005, which-compared to pIB001 and pIB002-showed the greatest difference in fluorescence between groups of “non-shining” and “shining” duckweeds, normalized on each plate. However, the intensity of its fluorescence was approximately half that of the positive control (pAMO101). We do not yet fully understand the reason for this, but a probable explanation is a difference in the plasmid backbone, resulting in a lower copy number of the binary vector in <em>Agrobacterium</em>, and consequently, a smaller amount of T-DNA transferred to duckweed. Nevertheless, the fluorescence of pIB005 is clearly visible and is expressed as early as in the positive control. Combined with GFP being swappable as the CDS1 part (with no stop codon) and the excisability of the p2a-NPTII resistance marker via mutated lox71 and lox66 sites (not yet tested), this composite part represents a crucial element of our TAIFR method.
        </p>    


        <p className="mb-4 leading-relaxed">
            <strong>There were spots of GFP fluorescence in transformed duckweeds (see Fig. 15), as a results of genomic insertion.
            However, what if <em>Agrobacterium</em> is unable to reach the meristematic cells of duckweed, and the PING-PONG 
            system therefore cannot insert the transgene into cells with the sufficient capacity to give rise to a whole new 
            transgenic frond?</strong>
          </p>

          <p className="mb-4 leading-relaxed">
            This is what our advisor, Dr. Ordóñez, proposed when we showed him the results. We could probably favour them 
            sufficiently by antibiotic (neomycin) selection to force them to give rise to a new frond. But what if this is not possible? 
            To answer the question of whether <em>Agrobacterium</em> can reach and infect the meristematic cells of duckweed, we designed 
            the Meristematic Assay, which we decided to run in parallel with DBTL cycle no. 4 of The Regeneration Assay. The aim of 
            the Meristematic Assay is to knock-out a previously stably inserted GFP in <em>Spirodela polyrhiza </em> 162 strain and observe 
            daughter fronds not exhibiting GFP fluorescence. These stable lines were gifted to us by Ordóñez Lab. If successful, we 
            would have certainty that <em>Agrobacterium</em> can indeed reach the meristematic cells. If not, we would need to develop a new 
            strategy. Thus, we initiated DBTL cycle no. 5, termed the Meristematic Assay.
          </p>  




        {/* DBTL 5 Section */}
        <div id='dbtl-5' className="mb-12 mt-32">
          <h2 style={{ fontFamily: 'Space Grotesk, sans-serif' }} className="text-4xl font-bold mb-6">DBTL 5</h2>
          
          <h3 style={{ fontFamily: 'Space Grotesk, sans-serif' }} className="text-2xl font-bold mb-4">DESIGN of The Meristematic Assay</h3>
          <p className="mb-6 leading-relaxed">
            We are using plant codon optimized Cas9 to knock out GFP expression in stable lines previously established to 
            express this fluorescent protein, obtained from Ordóñez Lab. The gradual decrease of the green signal in subsequent 
            duckweed generations would confirm that Cas9 is active and that the knockout mutation is transmitted to daughter 
            fronds. Importantly, this demonstration would provide strong evidence that <em>Agrobacterium</em> can reach meristematic 
            cells and deliver its T-DNA–flanked payload to the progenitor tissues that give rise to those daughter fronds. Having 
            this question answeared is important for us, as the a regeneration part of our TAIFR method (Frond Regeneration) 
            assumes, that <em>Agrobacterium</em> is able to reach meristematic cells of duckweed, where the PING-PONG system will insert transgene into duckweed nuclear genome.
          </p>

          <div className="  mb-6">
            <img src="https://static.igem.wiki/teams/5642/images/how/taifr/regenerationassay/meristematic-assay-copy.webp" alt="Description of image" className="max-w-full h-auto" />
          </div>

          <h3 style={{ fontFamily: 'Space Grotesk, sans-serif' }} className="text-2xl font-bold mb-4 mt-16">DESIGN of <A href="https://registry.igem.org/parts/bba-252t3xrc" target='_blank' className='hover:underline text-[#6ca033]'>pIB006</A></h3>
          
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mb-6'>
            <div className='col-span-2  items-center justify-center'>
                <p className="mb-6 leading-relaxed">
                    Plasmid pIB006 contains three expression cassettes designed for rapid and 
                    customizable gene knockouts using the CRISPR/Cas9 system. The first cassette 
                    encodes a plant codon-optimized Cas9 driven by the <em>Zea mays</em> ubiquitin promoter 
                    (rZmUBI) and terminated by the Cauliflower Mosaic Virus terminator (t35S). The 
                    second cassette carries the neomycin resistance gene (NPTII) for antibiotic selection. 
                    Expression of NPTII is controlled by the nopaline synthase promoter (rNOS) from 
                    <em>Agrobacterium tumefaciens</em> and terminated by the terminator sequence nopaline 
                    synthase gene (tNOS) from <em>Agrobacterium tumefaciens</em>. The third cassette provides 
                    the CRISPR guide RNA transcription unit. It consists of the <em>Oryza sativa</em> U6 promoter 
                    (rOsU6) followed by a customizable filler sequence flanked by Esp3I restriction sites, 
                    a tracrRNA scaffold, and a polyadenylation signal. This design allows seamless 
                    replacement of the filler sequence with user-defined gRNA oligonucleotides using a 
                    simple digest-and-ligate reaction with Esp3I-compatible overhangs. The entire 
                    expression cassette is bordered by T-DNA for <em>Agrobacterium</em>-mediated transformation 
                    and is housed in a binary vector, allowing replication in both <em>E. coli</em> and <em>Agrobacterium</em> 
                    tumefaciens.
                </p>
            </div>
            <div className='col-span-1  flex items-center justify-center'>
                <img src="https://static.igem.wiki/teams/5642/images/how/taifr/regenerationassay/pib006-copy.webp" alt="pIB006 Plasmid Diagram" className="max-w-full h-auto" />    
            </div>        
          </div>


          <h3 style={{ fontFamily: 'Space Grotesk, sans-serif' }} className="text-2xl font-bold mb-4">BUILD – cloning of pIB006</h3>
          
          <p className="mb-2 font-semibold">Designing of gRNAs</p>
          <p className="mb-4 leading-relaxed">
            Using the <A href="http://crispor.tefor.net/" target='_blank' className='hover:underline text-[#6ca033]'>CRISPOR software</A>, we designed three pairs of gRNA oligonucleotides for GFP knock-out with Esp3I 
            compatible overhangs to be first hybridized one with the other and then inserted to pIB006:
          </p>
          <ul className="mb-6 leading-relaxed list-disc pl-6">
            <li>GFP_KO1: GTTGGACCAGGATGGGCACCACC & AAACGGGTGGTGCCCATCCTGGTC</li>
            <li>GFP_KO2: GTTGCGTAGGTGAAGGTGGTCACG & AAACCGTGACCACCTTCACCTACG</li>
            <li>GFP_KO3: GTTGGTCGCCCTCGAACTTCACCT & GTTGGTCGCCCTCGAACTTCACCT</li>
          </ul>

          <p className="mb-2 font-semibold">1st iteration: replacing GFP for RFP</p>
          <p className="mb-4 leading-relaxed">
            Our first strategy was to modify Dr. Ordoñez's plasmid pAMO142. It carries a plant codon-optimized Cas9 (with 
            introns) linked to GFP via a self-cleaving p2a peptide (from porcine teschovirus-1) for parallel expression, driven by 
            rZmUBI and terminated by t35S. Because GFP was the knock-out target and its fluorescence would confound 
            detection, we aimed to replace it with RFP. We planned to PCR-amplify pAMO142 minus eGFP using primers 
            matching the 5′/3′ ends of RFP (pB10P1, MoClo Plant Part Kit, Marillonet Lab), PCR-amplify RFP with overlaps to 
            the linearized pAMO142 ends, and Gibson-assemble the fragments to yield 
            pAMO142e_rZmUBI-zCas9-p2a-RFP-t35S.
          </p>
          
          <p className="mb-2 font-semibold">Steps:</p>
          <ul className="mb-4 leading-relaxed list-disc pl-6">
            <li>PCR of RFP with primers o43 & o44 (to match pAMO142 without GFP)</li>
            <li>PCR linearization of pAMO142 and deletion GFP with primers o35 & o36</li>
            <li>Gibson assembly of both fragments</li>
          </ul>
          
          <p className="mb-6 font-semibold">Outcome:</p>
          <p className="mb-6 leading-relaxed">
            Despite optimizing conditions, ratios, and multiple polymerases, pAMO142 linearization/GFP deletion failed - no 
            clean gel band - likely due to the plasmid's 18 kb size making amplification difficult.
          </p>

          <p className="mb-2 font-semibold">2nd iteration:</p>
          <p className="mb-4 leading-relaxed">
            To bypass the massive size of pAMO142, we split it into three overlapping fragments (~4 kb, ~5 kb, ~8 kb) 
            designed to match the previously defined RFP overhangs. The four pieces (Fragments A,B, and C + RFP) were 
            intended for <em>in vivo</em> homologous recombination in <em>E. coli</em>.
          </p>
          
          <p className="mb-2 font-semibold">Steps:</p>
          <ul className="mb-4 leading-relaxed list-disc pl-6">
            <li>PCR of Fragment A with primers o36 & o74, Fragment B with o71 & o72, Fragment C with o73 & o35</li>
            <li>PCR of RFP with primers o43 & o44</li>
            <li>Transformation for <em>in vivo</em> assembly</li>
          </ul>
          
          <p className="mb-6 font-semibold">Outcome:</p>
          <p className="mb-6 leading-relaxed">
            Despite multiple optimizations, no positive colonies were obtained - likely due to the drop in <em>in vivo</em> assembly 
            efficiency when more than three fragments are assembled and when the overall construct size is as large as in our 
            case. After two failed attempts, we concluded that there had to be a simpler way to knock out a single gene in 
            duckweeds. We recognised this as an opportunity to facilitate the gene knockouts for all future teams working with 
            duckweeds and even other monocot plants with the CRISPR/Cas9 technology.
          </p>

          <p className="mb-2 font-semibold">3rd iteration:</p>
          <p className="mb-4 leading-relaxed">We used Modular Cloning based on Golden Gate.</p>
          
          <p className="mb-2 font-semibold">Parts:</p>
          <p className="mb-4 leading-relaxed">
            Level 0 part pcoCas9 was a gift from Boisivon Lab. Level 0 part rZmUBI (pE1P2) was from Plant Parts II and 
            Infrastructure Kit deposited by Stuttmann Lab. Level 0 parts rNOS-NPTII-tNOS (pC11P1) and t35S (pF11P1) were 
            from the CRISPR/Cas Toolkit for Plants deposited by Nekrasov Lab. Level 0 parts rU6 (pH9P3) and the tracrRNA 
            scaffold with polyA signal (pH10P3) were from the MoClo Plant Parts III: Transformation & Genome Engineering Kit 
            deposited by Voytas Lab. As filler sequence, we amplified a random unannotated fragment of the pAMO142 
            backbone using primers carrying BsaI and Esp3I sites.
          </p>
          
          <p className="mb-2 font-semibold">Acceptors:</p>
          <p className="mb-4 leading-relaxed">
            pB3T, pC3T, pD3T, pH4T and end-linker pD5T from MoClo Plant Parts Kit deposited by Patron's Lab.
          </p>
          
          <p className="mb-2 font-semibold">Steps:</p>
          <ul className="mb-6 leading-relaxed list-disc pl-6 space-y-2">
            <li>Digestion and ligation of pE1P2, pcoCas9, pF11P1 with pB3T using BsaI, yielding Level 1 construct 
            pB3T_rZmUBI-pcoCas9-t35S.</li>
            <li>Amplification of filler fragment using primers o134 and o135.</li>
            <li>Digestion and ligation of pC11P1 with pC3T using BsaI resulted into Level 1 construct pC3T_rNOS-NPTII-tNOS.</li>
            <li>Digestion and ligation of pH9P3, pH10P3, amplified filler with MoClo compatible overhangs with pD3T using BsaI 
            resulted into Level 1 construct pD3T_rOsU6-filler-scaffold-polyA.</li>
            <li>Digestion and ligation of above-mentioned Level 1 parts with pH4T and pD5T using BbsI resulted into Level 2 
            construct pIB006_rZmUBI-pcoCas9-t35S-rNOS-NPTII-tNOS-rOsU6-filler-scaffold-polyA. The assembly was 
            confirmed by sequencing.</li>
            <li>Digestion and ligation of pIB006 with annealed GFP_KO oligonucleotides, using Esp3I restrictase, yielded 
            pIB006 with inserted gRNA for knock-out of GFP in <em>Spirodela polyrhiza</em> line with stably inserted GFP.</li>
          </ul>

          <h3 style={{ fontFamily: 'Space Grotesk, sans-serif' }} className="text-2xl font-bold mb-4">TEST</h3>
          <p className="mb-6 leading-relaxed">
            Due to multiple cloning setbacks, we were unable to finalize this assay before the Wiki Freeze. We successfully 
            assembled the construct and performed a digest-and-ligate reaction to insert our GFP-knockout oligonucleotides, 
            and their presence was confirmed by Sanger sequencing. We will try to run the meristematic assay in October, 
            before we head to Paris.
          </p>

          <h3 style={{ fontFamily: 'Space Grotesk, sans-serif' }} className="text-2xl font-bold mb-4">LEARN</h3>
          <p className="mb-6 leading-relaxed">
            What began as an attempt to test whether <em>Agrobacterium</em> can reach duckweed meristematic cells led us to realize 
            that a ready-to-use, duckweed-optimized CRISPR construct could be a widely useful tool in duckweed research 
            and applied science. Read about our plans for pIB006 - what we did with it, and how it will support future iGEMers 
            working with duckweed - on our Programmable Duckweed and Safety pages.
          </p>
        </div>

        {/* What Are We Going To Do Section */}
        <div className="mb-12 bg-blue-50 p-8 rounded-lg border-2 border-blue-500" id='what-are-we-going-to-do'>
          <h2 style={{ fontFamily: 'Space Grotesk, sans-serif' }} className="text-4xl font-bold mb-6">WHAT ARE WE GOING TO DO</h2>
          <h3 style={{ fontFamily: 'Space Grotesk, sans-serif' }} className="text-2xl font-bold mb-4">to enable Frond Regeneration (FR) part of our TAIFR method?</h3>
          
          <p className="mb-4 leading-relaxed">There are two possible scenarios ahead of us:</p>
          
          <div className="mb-6">
            <p className="font-semibold mb-2"><em>Agrobacterium</em> can reach duckweed meristematic cells.</p>
            <p className="leading-relaxed">
              If so, we (or future iGEM teams) can repeat the regeneration iterations while maximizing transformation efficiency 
              (see protocol). By testing different neomycin concentrations and application timing, as well as hormone 
              combinations, concentrations, and timing, we can fine-tune conditions that favor <em>Agrobacterium</em>-transformed 
              meristematic cells carrying our PING-PONG system, allowing them to regenerate into whole transgenic fronds.
            </p>
          </div>

          <div className="mb-6">
            <p className="font-semibold mb-2"><em>Agrobacterium</em> cannot reach duckweed meristematic cells.</p>
            <p className="leading-relaxed">
              If so, we (or future iGEM teams) can boost regeneration by transient co-expression of the morphogenic 
              transcription factors <strong>BABY BOOM (ZmBBM)</strong> and/or <strong>WUSCHEL (ZmWUS)</strong> from <em>Zea mays</em>. These factors greatly 
              enhance regeneration in recalcitrant plants - especially monocots (18), including duckweed - but must be expressed 
              only transiently: sustained expression promotes regeneration while inhibiting differentiation. Thus, co-transforming 
              pIB005 with pIB003 would create random insertion sites in duckweed fronds (as it did also in our case); transient 
              ZmBBM/ZmWUS expression would reprogram those cells toward a meristematic fate. Combined with neomycin 
              selection, this should yield fully transgenic fronds as intended.
            </p>
          </div>
        </div>

        
      </div>
    </div>
  );
}