import React from 'react';
import References from '../../../../components/References';


const TAIFRComponent = () => {
  return (
    <div className="min-h-screen bg-white text-lg text-justify" style={{ fontFamily: 'Urbanist, sans-serif' }}>
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-8 py-8">
          <div className="text-center">
            <h1 className="text-6xl font-bold text-gray-800 mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif', color: '#6ca033' }}>
              TAIFR
            </h1>
            <p className="text-3xl text-gray-800 font-semibold mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              <span style={{ color: '#6ca033' }}>T</span>ransposase <span style={{ color: '#6ca033' }}>A</span>ssisted <span style={{ color: '#6ca033' }}>I</span>nsertion <span style={{ color: '#6ca033' }}>F</span>rond <span style={{ color: '#6ca033' }}>R</span>egeneration
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-8 py-8">
        
        {/* Figure 2 - Full width centered */}
        <section className="mb-8 md:mt-24">
          <div className="text-center mb-6">
            <div className="rounded-lg h-96 mb-4 flex items-center justify-center mx-auto">
              <img src="https://static.igem.wiki/teams/5642/images/homepage/maingifs/igem-graf-video-updated-ezgif-com-video-to-webp-converter.webp" alt="Figure 1 - TAIFR Cover" className='md:h-[700px]' style={{  }} />
            </div>
          </div>
          
          <p>
                <strong style={{ fontWeight: 700, fontSize: '1.5rem' }}>To enable any biotechnological application based on <span style={{ color: '#6ca033' }}>duckweed</span> </strong>
                <strong></strong>
                <span style={{ fontWeight: 400 }}>
                    , the fastest-growing higher plant, we had to develop a method for its rapid
                    and efficient genetic engineering. We designed and are developing TAIFR,{" "}
                </span>
                <span style={{ fontWeight: 700, fontSize: '1.5rem' }}>
                <strong>
                    a method that reduces the time required to generate a stable transgenic
                    duckweed line from{" "}
                </strong>
                <strong style={{ color: '#6ca033' } }>5 months </strong>
                <strong>to just </strong>
                <strong  style={{ color: '#6ca033' } }>1 month </strong>

                </span>
                <span style={{ fontWeight: 400 }}>
                    by omitting the lengthy callus stage of plant genetic engineering, inserting
                    the transgene into the genome{" "}
                </span>
                <span style={{ fontWeight: 700, fontSize: '1.5rem' }}>
                <strong>via </strong>
                <strong  style={{ color: '#6ca033' } }>transposase</strong>
                </span>
                <span style={{ fontWeight: 400 }}>
                    , and leveraging duckweed unique regeneration ability to produce new
                    transgenic fronds in planta.
                </span>
                </p>

        </section>

        {/* Figure 3 - Full width centered */}
        <section className="mb-8">
          <div className="text-center mb-6">
            <div className="rounded-lg  mb-4 flex items-center justify-center mx-auto">
              <img src="https://static.igem.wiki/teams/5642/images/how/taifr/taifr-overview-copy.webp" alt="Figure 3 - Co-transformation Results" className="h-full" />
            </div>
            <p className="text-gray-700 leading-relaxed text-justify" style={{ fontFamily: 'Urbanist, sans-serif' }}>
              <p>
                <strong>Figure 2. </strong>
                <span style={{ fontWeight: 400 }}>
                    TAIFR is a system that uses PONG transposase to deliver the gene of interest (GOI) into a duckweed nucleus. The GOI is flanked by two halves of PONG’s target - the mPing transposon. PONG cleaves this construct, and it performs a random double-strand break (DSB) in the genomic DNA in TAA sites and then inserts the construct into this site. Then, selection pressure favours the transformed cells, which propagate more and give rise to a new transformed generation of duckweeds, thanks to duckweed unique capability for rapid asexual propagation. 
                </span>
                </p>

              
               </p>
          </div>
        </section>

        {/* Figure 3 Bottom - Four circles */}
        <section className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-4">
            <div className="text-center">
              <div className="bg-gray-200 rounded-full w-32 h-32 mx-auto mb-2 flex items-center justify-center">
                <span className="text-gray-600 text-xs" style={{ fontFamily: 'Urbanist, sans-serif' }}>1</span>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-gray-200 rounded-full w-32 h-32 mx-auto mb-2 flex items-center justify-center">
                <span className="text-gray-600 text-xs" style={{ fontFamily: 'Urbanist, sans-serif' }}>2</span>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-gray-200 rounded-full w-32 h-32 mx-auto mb-2 flex items-center justify-center">
                <span className="text-gray-600 text-xs" style={{ fontFamily: 'Urbanist, sans-serif' }}>3</span>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-gray-200 rounded-full w-32 h-32 mx-auto mb-2 flex items-center justify-center">
                <span className="text-gray-600 text-xs" style={{ fontFamily: 'Urbanist, sans-serif' }}>4</span>
              </div>
            </div>
          </div>
          
          <p className="text-gray-700 leading-relaxed text-justify" style={{ fontFamily: 'Urbanist, sans-serif' }}>
            <p>
                <strong>Figure 3. </strong>
                <p>
                  <span style={{ fontWeight: 400 }}>
                    Transformation of construct pIB005 (mPing bordered GFP linked to NPTII) into
                    wild-type{" "}
                  </span>
                  <em>
                    <span style={{ fontWeight: 400 }}>Spirodela polyrhiza </span>
                  </em>
                  <span style={{ fontWeight: 400 }}>
                    results in transient GFP expression (1). Its co-transformation with pIB003
                    (PONG transposase ) results in no transient GFP expression (2), but 12 - 18
                    days post infiltration spots of GFP fluorescence appea  rs (3) as results of
                    insertion of mPing bordered cassette into duckweed nuclear genome. Insertion
                    was further confirmed by PCR/Western blot (4).{" "}
                  </span>
                  <span style={{ fontWeight: 400 }}>Read more here</span>
                  <span style={{ fontWeight: 400 }}>.</span>
                </p>

                </p>

            </p>
        </section>

        <section className="mb-8">
          <div className="text-center py-6 px-8 bg-green-100 rounded-lg">
            <h2 className="text-2xl font-bold text-green-800" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Discover how you can use our TAIFR parts and protocol engineer duckweed
            </h2>
          </div>
        </section>

        {/* Why duckweed genetic engineering takes so long? */}
        <section className="mb-8">
          <h2 className="text-4xl font-bold text-gray-800 mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            Why duckweed genetic engineering takes so long?
          </h2>
          
          <p>
            <span style={{ fontWeight: 400 }}>
                Most of the genetic engineering in plant biotechnology is mediated by callus
                - dedifferentiated plant tissue that is more susceptible to infection by{" "}
            </span>
            <em>
                <span style={{ fontWeight: 400 }}>Agrobacterium tumefaciens </span>
            </em>
            <span style={{ fontWeight: 400 }}>
                - a natural plant pathogen capable of transferring and integrating
                T-DNA–bordered DNA into the plant nuclear genome (1). Such infected callus
                is then regenerated into a mature plant using hormone combinations (unique
                for each species or even cultivar). This process takes from weeks to months,
                depending on the plant species being used, but often callus-mediated
                transformation is not even possible due to the inability of many species to
                regenerate into mature plants (2).
            </span>
            </p>

            <p className='mt-10 mb-10'>
                <span style={{ fontWeight: 400 }}>Duckweed (</span>
                <em>
                    <span style={{ fontWeight: 400 }}>Lemnoideae</span>
                </em>
                <span style={{ fontWeight: 400 }}>
                    ) genetic engineering is also mediated by callus and{" "}
                </span>
                <em>
                    <span style={{ fontWeight: 400 }}>Agrobacterium</span>
                </em>
                <span style={{ fontWeight: 400 }}>
                    {" "}
                    (3). Unfortunately, one such iteration cycle takes around 5 months. Callus
                    must be induced and formed (2 months), then transformed by{" "}
                </span>
                <em>
                    <span style={{ fontWeight: 400 }}>Agrobacterium</span>
                </em>
                <span style={{ fontWeight: 400 }}>
                    , positive transformants selected and grown (1.5 months), and then
                    regenerated into mature plants (1.5 months). Understandably, such a lengthy
                    process - often resulting in genome duplication or somaclonal mutations
                    (Marí-Ordóñez, personal communication) discourages scientists or iGEMers
                    from even considering to work with duckweed, a plant with vast
                    biotechnological potential.
                </span>
                </p>



          {/* Figures 4 and 5 side by side */}
          <div className="grid grid-cols-2 gap-6 mb-6">
            <div className="text-center">
              <div className="bg-gray-200 rounded-lg h-48 mb-2 flex items-center justify-center">
                <p className="text-gray-600 text-sm" style={{ fontFamily: 'Urbanist, sans-serif' }}>
                  [Figure 4]
                </p>
              </div>
             
            </div>
            <div className="text-center">
              <div className="bg-gray-200 rounded-lg h-48 mb-2 flex items-center justify-center">
                <p className="text-gray-600 text-sm" style={{ fontFamily: 'Urbanist, sans-serif' }}>
                  [Figure 5]
                </p>
              </div>
              
            </div>
           

          </div>
           <p>
                <strong>Figure 4. Calli of wild-type&nbsp; </strong>
                <em>
                    <span style={{ fontWeight: 400 }}>Spirodela polyrhiza</span>
                </em>
                <span style={{ fontWeight: 400 }}>
                    {" "}
                    162 – Sp162 (1) and Sp162 transgenic RUBY-line (2)
                </span>
                </p>
        </section>

        {/* Could it be accelerated? */}
        <section className="mb-8">
          <h2 className="text-4xl font-bold text-gray-800 mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            Could it be accelerated?
          </h2>
          
         <>
            <p>
                <span style={{ fontWeight: 400 }}>
                Possibly yes! Duckweeds possess a strong regeneration capacity, as they
                reproduce mostly asexually (4) by budding (like yeast). In some plants,
                genetic engineering is mediated by infecting auxiliary meristematic parts
                - undifferentiated growth tissue in branches or stems, i.e., auxiliary
                nodes - with{" "}
                </span>
                <em>
                <span style={{ fontWeight: 400 }}>Agrobacterium</span>
                </em>
                <span style={{ fontWeight: 400 }}>
                {" "}
                and then selecting meristematic cells carrying the transgene and
                resistance gene to give rise to a new shoot of fully transgenic plants.
                This is called in-planta mediated genetic engineering (5). It has been
                demonstrated in pea (6), peanut (7), soybean (8), and sweet potato
                (9).&nbsp;
                </span>
            </p>

           
            
            </>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                
                <div className="col-span-3 mt-10 rounded">
                     <p>
                        <br />
                        <span style={{ fontWeight: 400 }}>
                        So, we in iGEM Brno thought: let’s try in-planta mediated transformation
                        in duckweed as well! We even found in the literature that it had already
                        been attempted a few times and was called frond-mediated transformation
                        (10), (11), (12) - since one duckweed “leaf” is called a frond. We
                        contacted experts, including Dr. Ordóñez from GMI Vienna, who is an expert in duckweed genetic engineering. Dr. Ordóñez told us
                        that he had also tried all those frond-mediated transformation methods,
                        even contacting their authors, but was not able to replicate any of
                        them...{" "}
                        </span>
                        <span style={{ fontWeight: 400 }}>Read more at Human Practices page</span>
                        <span style={{ fontWeight: 400 }}>.</span>
                    </p>
                </div>


                <div className="col-span-1 p-4 rounded">
                    <div className="rounded-lg h-48 mb-2 flex items-center justify-center">
                        <img style={{ height: '200px', width: 'auto' }} src="https://static.igem.wiki/teams/5642/images/how/taifr/arturo.webp" alt="Figure 6" className="" />
                    </div>
                    <p className="text-sm text-gray-700" style={{ fontFamily: 'Urbanist, sans-serif' }}>
                     <p>
                        <strong>Figure 5. </strong>
                        <span style={{ fontWeight: 400 }}>
                            Dr. Arturo Marí-Ordóñez from GMI Vienna – an expert on duckweed genetic
                            engineering&nbsp;
                        </span>
                        </p>
                        
                        </p>
                </div>
                </div>


          {/* Figure 6 - Right aligned as in PDF */}
          <div className="float-right ml-6 mb-4 w-64">
            
            
            
          </div>
        </section>

        {/* So, what is the real bottleneck? */}
        <section className="mb-8 clear-both">
          <h2 className="text-4xl font-bold text-gray-800 mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            So, what is the real bottleneck?
          </h2>
          
          <>
            <p>
              <span style={{ fontWeight: 400 }}>
                There are few possible bottlenecks explaining why we cannot perform
                frond-mediated transformation in duckweed:
              </span>
            </p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <ul className='list-disc list-inside'>
              <li style={{ fontWeight: 400 }}>
                <em>
                  <em>
                    <span style={{ fontWeight: 400 }}>Agrobacterium</span>
                  </em>
                  <span style={{ fontWeight: 400 }}> cannot infect duckweed cells.</span>
                </em>
              </li>
            
              <li style={{ fontWeight: 400 }}>
                <em>
                  <span style={{ fontWeight: 400 }}>Agrobacterium</span>
                </em>
                <span style={{ fontWeight: 400 }}>
                  {" "}
                  cannot transfer its T-DNA into duckweed nuclei.
                </span>
              </li>
            
              <li style={{ fontWeight: 400 }}>
                <em>
                  <span style={{ fontWeight: 400 }}>Agrobacterium</span>
                </em>
                <span style={{ fontWeight: 400 }}>
                  {" "}
                  proteins cannot insert T-DNA into the nuclear genome in the duckweed
                  context.
                </span>
              </li>
            </ul>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
          </>



            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* First column (1/5 width) */}
            <div className="col-span-2  p-4 rounded">
                <img style={{ height: '300px', width: 'auto' }} src="https://static.igem.wiki/teams/5642/images/how/taifr/agrobacterium-transfer.webp" alt="Figure 5" className="" />
            </div>

            {/* Second column (4/5 width) */}
            <div className="col-span-2  ">
                 <p className="text-gray-700 leading-relaxed mb-6 text-justify mt-10" style={{ fontFamily: 'Urbanist, sans-serif' }}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        The possible reasons for the above-mentioned bottlenecks could be that, as
                        duckweed is an aquatic plant,{" "}
                      </span>
                      <em>
                        <span style={{ fontWeight: 400 }}>Agrobacterium</span>
                      </em>
                      <span style={{ fontWeight: 400 }}>
                        {" "}
                        is simply not evolutionarily adapted to infect with duckweed cells.
                        Alternatively, duckweed may possess a strong immune system that kills{" "}
                      </span>
                      <em>
                        <span style={{ fontWeight: 400 }}>Agrobacterium</span>
                      </em>
                      <span style={{ fontWeight: 400 }}>
                        {" "}
                        in the intracellular space or destroys its proteins within cells, thus
                        hindering{" "}
                      </span>
                      <em>
                        <span style={{ fontWeight: 400 }}>Agrobacterium’s</span>
                      </em>
                      <span style={{ fontWeight: 400 }}>
                        {" "}
                        ability to transfer and integrate T-DNA.
                      </span>
                    </p>

                
                </p>
            </div>
            </div>


            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* First column (1/5 width) */}
            <div className="col-span-3  p-4 rounded">
                <>
                  <p>
                    <span style={{ fontWeight: 400 }}>
                      We investigated the literature and discussed all these possible
                      bottlenecks with Dr. Ordóñez. Given the experimentally confirmed fact (see
                      Fig. 6) of strong transient GFP expression in duckweed cells,{" "}
                    </span>
                    <em>
                      <span style={{ fontWeight: 400 }}>Agrobacterium</span>
                    </em>
                    <span style={{ fontWeight: 400 }}>
                      {" "}
                      is indeed able to infect duckweed cells and even transfer its T-DNA into
                      the nucleus, as T-DNA can be transcribed into mRNA only in the nucleus,
                      where RNA polymerases exist (13). Thus, only two possible bottlenecks
                      remain:{" "}
                    </span>
                    <strong>
                      <em>Agrobacterium</em>
                    </strong>
                    <strong>
                      {" "}
                      cannot insert its T-DNA into the duckweed nuclear genome in frond context
                    </strong>
                    <span style={{ fontWeight: 400 }}>.</span>
                  </p>
                  <p>&nbsp;</p>
                  <p>
                    <span style={{ fontWeight: 400 }}>We set out to address that!</span>
                  </p>
                </>


            </div>

            {/* Second column (4/5 width) */}
            <div className="col-span-1  p-4 rounded">
                <div className='bg-gray-200 rounded-lg h-48 mb-2 flex items-center justify-center'>
                            Right image 
                </div>
                <p className='text-sm'>
                    <p>
                      <strong>Figure 6. </strong>
                      <span style={{ fontWeight: 400 }}>
                        Strong transient expression of GFP driven by rZmUBI promoter in fronds of{" "}
                      </span>
                      <em>
                        <span style={{ fontWeight: 400 }}>Spirodela polyrhiza 7428</span>
                      </em>
                    </p>

                    </p>
            
            </div>
            </div>

         
        </section>

        {/* How did the TAIFR design originated? */}
        <section className="mb-8">
          <h2 className="text-4xl font-bold text-gray-800 mb-8" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            How did the TAIFR design originated?
          </h2>
          
          <div className='grid grid-cols-1 md:grid-cols-4 gap-4 mb-4'>

            <div className='col-span-3 '>

              <>
                <p>
                  <span style={{ fontWeight: 400 }}>As we identified the inability of </span>
                  <em>
                    <span style={{ fontWeight: 400 }}>Agrobacterium </span>
                  </em>
                  <span style={{ fontWeight: 400 }}>
                    infection machinery to insert T-DNA into duckweed genome, as one of the
                    most probable bottleneck of frond-mediated transformation, we went
                    searching for any possible DNA insertion method ☺. Very soon, we landed on
                    transposases, especially class II type - enzymes capable of recognizing,
                    cutting, moving, and inserting transposons: DNA segments bordered with
                    inverted terminal repeats of unique sequence, depending on the type of the
                    transposon (14). Transposons are often used in plant biotechnology for
                    insertional mutagenesis (15).
                  </span>
                </p>
                <p>&nbsp;</p>
                <p>
                  <span style={{ fontWeight: 400 }}>
                    But could they also be used for inserting DNA into the plant nuclear
                    genome? Of course, yes! Meeting Dr. Ordóñez was a pure luck, but we were
                    about to get even luckier… Less than a year ago, Dr. Slotkin published an
                    amazing article in Nature: Transposase-assisted target-site integration
                    for efficient plant genome engineering (16).
                  </span>
                </p>
                <p>&nbsp;</p>
                <p>
                  <span style={{ fontWeight: 400 }}>
                    Dr. Slotkin’s lab used the so-called PING-PONG system fused with Cas9 to
                    insert DNA into the Arabidopsis and soybean genomes site-specifically,
                    with 37% efficiency in{" "}
                  </span>
                  <em>
                    <span style={{ fontWeight: 400 }}>Arabidopsis</span>
                  </em>
                  <span style={{ fontWeight: 400 }}>
                    ! What an achievement! He also managed to insert cargo bordered by halves
                    of the mPing transposon (16).
                  </span>
                </p>
              </>
            </div>

            <div className='col-span-1 p-4 rounded'>
                {/* Figure 7 - Right aligned */}
                  <div className="float-right ml-6 mb-4 w-48">
                    <div className="w-64 h-64 overflow-hidden rounded-lg">
                      <img src="https://static.igem.wiki/teams/5642/images/how/taifr/dsc05068-3527973337.webp" alt="Figure 7" className="w-full h-full object-cover rounded-full" />
                    </div>
                    <p className="text-sm text-gray-700 mt-4" style={{ fontFamily: 'Urbanist, sans-serif' }}>
                      <p>
                        <strong>Figure 7. </strong>
                        <span style={{ fontWeight: 400 }}>
                            Dr. Keith Slotkin from The Donald Danforth Plant Science Center
                        </span>
                        </p>

                    </p>
                  </div>        

            </div>    

          </div>


          <p style={{ marginTop: '1rem' }}>
            <p>
              <span style={{ fontWeight: 400 }}>
                So, how does the PING-PONG system work? Transposase PING (consisting of two
                ORFs linked by T2A linker peptide) is expressed transiently in the plant
                cell. It recognizes the terminal inverted repeats of the mPing transposon,
                cuts out the DNA between them, moves it while protecting it from DNA
                nucleases, and seamlessly inserts it into A–T rich regions of the genome,
                specifically at TTA or TAA sites (17). When the PONG transposase is fused
                with Cas9, gRNAs guide Cas9 - and thus also PONG - to the target sequence,
                where PONG inserts the mPing-bounded DNA into the specific cut created by
                Cas9 (16). We adopted Dr. Slotkin’s design but omitted Cas9, as for our
                purposes even random insertions would be a great achievement in the
                beginning.&nbsp;
              </span>
            </p>

            </p>
        </section>


        <section className="mb-8 mt-16">
          <div className="text-center py-6 px-8 bg-green-100 rounded-lg">
            <h2 className="text-2xl font-bold text-green-800" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              <>
                <p>
                  <span style={{ fontWeight: 400 }}>We adopted and modified the </span>
                  <strong>PING-PONG</strong>
                  <span style={{ fontWeight: 400 }}> design, combining it with a </span>
                  <strong>novel regeneration approach</strong>
                  <span style={{ fontWeight: 400 }}> to develop our </span>
                  <strong>TAIFR </strong>
                  <span style={{ fontWeight: 400 }}>
                    method. In practice, we carried out{" "}
                  </span>
                  <strong>4.5 DBTL cycles</strong>
                  <span style={{ fontWeight: 400 }}>.&nbsp;</span>
                </p>
                <p className='mt-10'>
                  <span className='text-1xl ' style={{ fontWeight: 400, }}>The results are shown below</span>
                  <span style={{ fontWeight: 400 }}>.</span>
                </p>
              </>

            </h2>
          </div>
        </section>


        

        
        
      </main>



      <References references={Reference} />

      
    </div>
  );
};

export default TAIFRComponent;



const Reference = [
    {
        id: 1,
        text: "Gelvin, S. B. (2017). Integration of Agrobacterium T-DNA into the plant genome. Annual Review of Genetics, 51, 195–217.",
        url: "https://doi.org/10.1146/annurev-genet-120215-035320"
    },
    {
        id: 2,
        text: "Long, Y., Liu, Q., Rong, S., Li, J., & Guo, S. (2022). New insights into tissue culture plant-regeneration mechanisms. Frontiers in Plant Science, 13, 926752.",
        url: "https://doi.org/10.3389/fpls.2022.926752"
    },
    {
        id: 3,
        text: "Wang, K.-T., Wang, C.-S., Chang, C.-C., & Huang, H.-J. (2021). Agrobacterium-mediated genetic transformation of Lemna aequinoctialis. Plants, 10(8), 1576.",
        url: "https://doi.org/10.3390/plants10081576"
    },
    {
        id: 4,
        text: "Ziegler, P., Appenroth, K. J., & Sree, K. S. (2023). Survival strategies of duckweeds, the world's smallest angiosperms. Plants, 12(11), 2215.",
        url: "https://doi.org/10.3390/plants12112215"
    },
    {
        id: 5,
        text: "Bélanger, J.-G., Nivelle, M.-A., & Tardif, M. (2024). A comprehensive review of in planta stable transformation strategies. Plant Methods, 20, 70.",
        url: "https://doi.org/10.1186/s13007-024-01200-8"
    },
    {
        id: 6,
        text: "Sharma, K. K., Ananda Kumar, P., & Thorpe, T. A. (1996). In planta transformation of chickpea (Cicer arietinum L.) and pea (Pisum sativum L.) using Agrobacterium tumefaciens. Plant Cell Reports, 15(11), 737–741.",
        url: "https://doi.org/10.1007/BF00232442"
    },
    {
        id: 7,
        text: "Rohini, V. K., & Rao, K. S. (2001). Agrobacterium-mediated transformation of peanut (Arachis hypogaea L.) through in planta infiltration of embryos. Plant Science, 161(6), 917–923.",
        url: "https://doi.org/10.1016/S0168-9452(01)00477-9"
    },
    {
        id: 8,
        text: "Olhoft, P. M., Flagel, L. E., Donovan, C. M., & Somers, D. A. (2003). Efficient soybean transformation using Agrobacterium and sonication-assisted in planta protocol. Plant Cell Reports, 22(7), 478–482.",
        url: "https://doi.org/10.1007/s00299-003-0713-6"
    },
    {
        id: 9,
        text: "Mei, G., Chen, A., Wang, Y., Li, S., Wu, M., Hu, Y., Liu, X., & Hou, X. (2024). A simple and efficient in planta transformation method based on the active regeneration capacity of plants. Plant Communications, 5(4), 100822.",
        url: "https://doi.org/10.1016/j.xplc.2024.100822"
    },
    {
        id: 10,
        text: "Yang, G.-L., Fang, Y., Xu, Y.-L., Tan, L., Li, Q., Liu, Y., Lai, F., Jin, Y.-L., Du, A.-P., He, K.-Z., Ma, X.-R., & Zhao, H. (2018). Frond transformation system mediated by Agrobacterium tumefaciens for Lemna minor. Plant Molecular Biology, 98(1–2), 119–131.",
        url: "https://doi.org/10.1007/s11103-018-0778-x"
    },
    {
        id: 11,
        text: "Ko, S.-M., Sun, H.-J., Oh, M. J., Song, I.-J., Kim, M.-J., Sin, H.-S., Goh, C.-H., Kim, Y.-W., Lim, P.-O., Lee, H.-Y., & Kim, S. W. (2011). Expression of the protective antigen for PEDV in transgenic duckweed, Lemna minor. Plant Biotechnology Reports, 5(2), 185–191.",
        url: "https://doi.org/10.1007/s13580-011-0007-x"
    },
    {
        id: 12,
        text: "Parthasarathy, B., Satheeshkumar, P. K., Venkataraman, K., & Vijayalakshmi, M. A. (2018). Expression of anti-tumor necrosis factor alpha (TNFα) single chain variable fragment (scFv) in Spirodela punctata plants transformed with Agrobacterium tumefaciens. Biotechnology and Applied Biochemistry, 65(6), 823–830.",
        url: "https://doi.org/10.1002/bab.1373"
    },
    {
        id: 13,
        text: "Cramer, P. (2019). Organization and regulation of gene transcription. Nature, 573(7772), 45–54.",
        url: "https://doi.org/10.1038/s41586-019-1517-4"
    },
    {
        id: 14,
        text: "Hickman, A. B., & Dyda, F. (2015). Mechanisms of DNA transposition. Microbiology Spectrum, 3(2), MDNA3-0034-2014.",
        url: "https://doi.org/10.1128/microbiolspec.MDNA3-0034-2014"
    },
    {
        id: 15,
        text: "Kumar, A., & Hirochika, H. (2001). Applications of retrotransposons as genetic tools in plant biology. Trends in Plant Science, 6(3), 127–134.",
        url: "https://doi.org/10.1016/S1360-1385(01)01861-2"
    },
    {
        id: 16,
        text: "Liu, P., Panda, K., Edwards, S. A., Swanson, R., Yi, H., Pandesha, P., Hung, Y.-H., Klaas, G., Ye, X., Collins, M. V., Renken, K. N., Gilbertson, L. A., Veena, V., Hancock, C. N., & Slotkin, R. K. (2024). Transposase-assisted target-site integration for efficient plant genome engineering. Nature, 631, 593–600.",
        url: "https://doi.org/10.1038/s41586-024-07613-8"
    },
    {
        id: 17,
        text: "Hancock, C. N., Zhang, X., Wessler, S. R., & Zhou, T. (2010). Transposition of the Tourist-MITE mPing in yeast. Molecular and Cellular Biology, 30(20), 3851–3861.",
        url: "https://doi.org/10.1128/MCB.00415-10"
    }
]



