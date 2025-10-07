import React from 'react';


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
            <div className="rounded-lg md:h-96 mb-4 flex items-center justify-center mx-auto">
              <img src="https://static.igem.wiki/teams/5642/images/homepage/maingifs/igem-taifr-2.webp" alt="Figure 1 - TAIFR Cover" className=' ' style={{  }} />
            </div>
          </div>
          
          <p className='md:mt-32'>
                <strong style={{ fontWeight: 700, fontSize: '1.5rem' }}>To enable any biotechnological application based on <span style={{ color: '#6ca033' }}>duckweed</span></strong>
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
                    transgenic fronds <em>in planta</em>.
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
                    TAIFR is a system that uses PONG transposase to deliver the gene of interest (GOI) into duckweed nucleus. The GOI is flanked by two halves of PONG’s target - the mPing transposon. PONG cleaves this construct, and it performs a random double-strand break (DSB) in the genomic DNA in TAA sites and then inserts the construct into this site. Then, selection pressure favours the transformed cells, which propagate more and give rise to a new transformed generation of duckweeds, thanks to duckweed unique capability for rapid asexual propagation. 
                </span>
                </p>

              
               </p>
          </div>
        </section>

        {/* Figure 3 Bottom - Four circles */}
        <section className="mb-8">
          <div>
            <img src="https://static.igem.wiki/teams/5642/images/how/taifr/figure3.webp" alt="Figure 3 - Co-transformation Results" className="mx-auto" />
          </div>
          
          <p className="text-gray-700 leading-relaxed text-justify" style={{ fontFamily: 'Urbanist, sans-serif' }}>
            <p>
                <strong>Figure 3. </strong>
                
                  <span style={{ fontWeight: 400 }}>
                    Transformation of construct pIB005 (mPing-bordered GFP linked to NPTII) into
                    wild-type{" "}
                  </span>
                  <em>
                    <span style={{ fontWeight: 400 }}>Spirodela polyrhiza </span>
                  </em>
                  <span style={{ fontWeight: 400 }}>
                    7428 results in transient GFP expression (1). Its co-transformation with pIB003
                    (PONG transposase) results in no transient GFP expression (2), but 12 - 18
                    days post infiltration spots of GFP fluorescence appears (3) as results of
                    insertion of mPing-bordered cassette into duckweed nuclear genome. Insertion was further confirmed by PCR.
                  </span>
                  <span style={{ fontWeight: 400 }}> <a className='hover:underline text-[#6ca033]' href="#dbtl-4-learn">Read more here</a></span>
                  <span style={{ fontWeight: 400 }}>.</span>
               
                </p>

            </p>
        </section>

        <section className="mb-8">
          <div className="text-center py-6 px-8 bg-green-100 rounded-lg">
            <h2 className="text-2xl font-bold text-green-800" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              <a className='hover:underline text-[#6ca033]' href="/plant#how-to-use-taifr">Discover how you can use our TAIFR parts and protocol engineer duckweed</a>
            </h2>
          </div>
        </section>

        {/* Why duckweed genetic engineering takes so long? */}
        <section className="mb-8">
          <h2 className="text-4xl font-bold text-gray-800 mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            Why duckweed genetic engineering takes so long?
          </h2>
          
          <div className='grid grid-cols-1 md:grid-cols-4 gap-4 mb-4'>

            <div className='col-span-3 mt-10 rounded'>
               <p>
                  <span style={{ fontWeight: 400 }}>
                      Most of the genetic engineering in plant biotechnology is mediated by callus
                      - de-differentiated plant tissue that is more susceptible to infection by{" "}
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
            </div>

            <div className='col-span-1 p-4 rounded'>
               <div className="text-center">
              <div className=" rounded-lg mb-2 flex items-center justify-center">
                <img style={{  width: 'auto' }} src="https://static.igem.wiki/teams/5642/images/how/taifr/figure-4.webp" alt="Figure 4" className="" />
              </div>
              <p>
                <p className='text-baseFigure  text-gray-700 text-justify' style={{ fontFamily: 'Urbanist, sans-serif' }}>
                  <strong>Figure 4. Calli of wild-type&nbsp; </strong>
                  <em>
                    <span style={{ fontWeight: 400 }}>Spirodela polyrhiza</span>
                  </em>
                  <span style={{ fontWeight: 400 }}>
                    {" "}
                    162 – Sp162 (1) and Sp162 transgenic RUBY-line (2)
                  </span>
                </p>


              </p>
             
            </div>
            

          </div>
           

          </div>
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
                This is called <em>in-planta</em> mediated genetic engineering (5). It has been
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
                        So, we in iGEM Brno thought: let’s try <em>in-planta</em> mediated transformation
                        in duckweed as well! We even found in the literature that it had already
                        been attempted a few times and was called frond-mediated transformation
                        (10), (11), (12) - since one duckweed “leaf” is called a frond. We
                        contacted experts, including Dr. Ordóñez from GMI Vienna, who is an expert in duckweed genetic engineering. Dr. Ordóñez told us
                        that he had also tried all those frond-mediated transformation methods,
                        even contacting their authors, but was not able to replicate any of
                        them...{" "}
                        </span>
                        <span style={{ fontWeight: 400 }}><a className='hover:underline text-[#6ca033]' href="/human-practices#arturo">Read more at Human Practices page</a></span>
                        <span style={{ fontWeight: 400 }}>.</span>
                    </p>
                </div>


                <div className="col-span-1 p-4 rounded">
                    <div className="rounded-lg h-48 mb-2 flex items-center justify-center">
                        <img style={{ height: '200px', width: 'auto' }} src="https://static.igem.wiki/teams/5642/images/how/taifr/arturo.webp" alt="Figure 6" className="" />
                    </div>
                    <p className="text-baseFigure  text-gray-700" style={{ fontFamily: 'Urbanist, sans-serif' }}>
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
                <div className=' flex items-center justify-center'>
                    <img src="https://static.igem.wiki/teams/5642/images/how/taifr/figure-6.webp" alt="Figure 6" className="" />
                </div>
                <p className='text-baseFigure  mt-4'>
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
          
          <div className='grid md:grid-cols-1 md:grid-cols-4 gap-4 mb-4'>

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
                    amazing article in Nature: <a target='_blank' className='hover:underline text-[#6ca033]' href="https://www.nature.com/articles/s41586-024-07613-8">Transposase-assisted target-site integration
                    for efficient plant genome engineering</a> (16).
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
                    <p className="text-baseFigure  text-gray-700 mt-4" style={{ fontFamily: 'Urbanist, sans-serif' }}>
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




      
    </div>
  );
};

export default TAIFRComponent;

