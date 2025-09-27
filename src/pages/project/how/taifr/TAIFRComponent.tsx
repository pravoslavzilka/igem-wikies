import React from 'react';

const TAIFRComponent = () => {
  return (
    <div className="min-h-screen bg-white text-lg" style={{ fontFamily: 'Urbanist, sans-serif' }}>
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
        <section className="mb-8 mt-10">
          <div className="text-center mb-6">
            <div className="rounded-lg h-96 mb-4 flex items-center justify-center mx-auto">
              <video
              autoPlay
              loop
              muted
              playsInline
              className="rounded-lg w-full"
              style={{
                width: window.innerWidth < 768 ? "100%" : "80%",
                height: "auto",
                margin: "0 auto",
                display: "block"
              }}
            >
              <source src="https://github.com/pravoslavzilka/igem-wikies-off/raw/refs/heads/main/src/IGEM_graf_video_updated.mp4" type="video/mp4"></source>
            </video>
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
                    TAIFR is a system that uses PONG transposase to deliver the gene of interest
                    (GOI) into a duckweed nucleus. The GOI is flanked by two halves of PONG’s
                    target - the mPing transposon. PONG cleaves this construct, and it performs
                    a random double-strand break (DSB) in the genomic DNA in TAA sites and then
                    inserts the construct into this site. Then, selection pressure favours the
                    transformed cells, which propagate more and give rise to a new transformed
                    generation of duckweeds, thanks to duckweed unique capability for rapid
                    asexual propagation. All of this takes 4 weeks.
                </span>
                </p>

              
               </p>
          </div>
        </section>

        {/* Figure 3 Bottom - Four circles */}
        <section className="mb-8">
          <div className="grid grid-cols-4 gap-6 mb-4">
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
                <span style={{ fontWeight: 400 }}>
                    Co-transformation of constructs pIB002 (GFP-NPTII) and pIB003 (PONG) into
                    wild-type{" "}
                </span>
                <em>
                    <span style={{ fontWeight: 400 }}>Spirodela polyrhiza </span>
                </em>
                <span style={{ fontWeight: 400 }}>
                    (1) results in transient GFP expression (2). Upon neomycin selection, some
                    transformed duckweed give rise to new GFP-positive fronds 3–4 weeks post
                    infiltration (3). GFP expression was further confirmed by Western blot (4).
                </span>
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

            <div className="grid grid-cols-4 gap-4">
                
                <div className="col-span-3 mt-10 rounded">
                     <p>
                        <br />
                        <span style={{ fontWeight: 400 }}>
                        So, we in iGEM Brno thought: let’s try in-planta mediated transformation
                        in duckweed as well! We even found in the literature that it had already
                        been attempted a few times and was called frond-mediated transformation
                        (10), (11), (12) - since one duckweed “leaf” is called a frond. We
                        contacted experts, including Dr. Ordóñez from GMI Vienna, who we later
                        realized is an expert in duckweed genetic engineering. Dr. Ordóñez told us
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
          
          <p className="text-gray-700 leading-relaxed mb-4 text-justify" style={{ fontFamily: 'Urbanist, sans-serif' }}>
             There are few possible bottlenecks explaining why we cannot perform frond-mediated transformation in duckweed:
           
          </p>

          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4 ml-4" style={{ fontFamily: 'Urbanist, sans-serif' }}>
            <li>Agrobacterium cannot infect duckweed cells.</li>
            <li>Agrobacterium cannot transfer its T-DNA into duckweed nuclei.</li>
            <li>Agrobacterium proteins cannot insert T-DNA into the nuclear genome in the duckweed context.</li>
            <li>Agrobacterium can infect duckweed cells, but not those with meristematic activity (cells that give rise to new fronds).</li>
          </ul>


            <div className="grid grid-cols-4 gap-4">
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


            <div className="grid grid-cols-4 gap-4">
            {/* First column (1/5 width) */}
            <div className="col-span-3  p-4 rounded">
                <>
                <p>
                    <span style={{ fontWeight: 400 }}>
                    We investigated the literature and discussed all these possible
                    bottlenecks with Dr. Ordóñez. Given the experimentally confirmed fact (see
                    Figure 6) of strong transient GFP expression in duckweed cells,{" "}
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
                    <span style={{ fontWeight: 400 }}>, or it can, but those </span>
                    <strong>cells are not meristematic </strong>
                    <span style={{ fontWeight: 400 }}>
                    and therefore do not give rise to a new frond.&nbsp;
                    </span>
                </p>
                <p>&nbsp;</p>
                <p>
                    <span style={{ fontWeight: 400 }}>
                    We set out to address both bottlenecks!
                    </span>
                </p>
                </>

            </div>

            {/* Second column (4/5 width) */}
            <div className="col-span-1  p-4 rounded">
                <div className='bg-gray-200 rounded-lg h-48 mb-2 flex items-center justify-center'>
                            Right image 
                </div>
                <p className='text-sm'>
                    <strong>Figure 6. </strong>
                    <span style={{ fontWeight: 400 }}>
                        Strong transient expression of GFP driven by rZmUBI promoter in fronds of{" "}
                    </span>
                    <em>
                        <span style={{ fontWeight: 400 }}>Spirodela polyrhiza 7428</span>
                    </em>
                    </p>
            
            </div>
            </div>

         
        </section>

        {/* How did the TAIFR design originated? */}
        <section className="mb-8">
          <h2 className="text-4xl font-bold text-gray-800 mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            How did the TAIFR design originated?
          </h2>
          
          <p>
            <span style={{ fontWeight: 400 }}>As we identified the inability of </span>
            <em>
                <span style={{ fontWeight: 400 }}>Agrobacterium </span>
            </em>
            <span style={{ fontWeight: 400 }}>
                infection machinery to insert T-DNA into duckweed genome, as one of the most
                probable bottleneck of frond-mediated transformation, we went searching for
                any possible DNA insertion method ☺. Very soon, we landed on transposases,
                especially class II type - enzymes capable of recognizing, cutting, moving,
                and inserting transposons: DNA segments bordered with inverted terminal
                repeats of unique sequence, depending on the type of the transposon (14).
                Transposons are often used in plant biotechnology for insertional
                mutagenesis (15).
            </span>
            </p>


          <p style={{ marginTop: '1rem' }}>
            <span style={{ fontWeight: 400 }}>
                But could they also be used for inserting DNA into the plant nuclear genome?
                Of course, yes! Meeting Dr. Ordóñez was a pure luck, but we were about to
                get even luckier… Less than a year ago, Dr. Slotkin published an amazing
                article in Nature: Transposase-assisted target-site integration for
                efficient plant genome engineering (16).
            </span>
            </p>


          <p style={{ marginTop: '1rem' }}>
            <span style={{ fontWeight: 400 }}>
                Dr. Slotkin’s lab used the so-called PING-PONG system fused with Cas9 to
                insert DNA into the Arabidopsis and soybean genomes site-specifically, with
                37% efficiency in{" "}
            </span>
            <em>
                <span style={{ fontWeight: 400 }}>Arabidopsis</span>
            </em>
            <span style={{ fontWeight: 400 }}>
                ! What an achievement! He also managed to insert cargo bordered by halves of
                the mPing transposon (16).
            </span>
            </p>


          


  

          {/* Figure 7 - Right aligned */}
          <div className="float-right ml-6 mb-4 w-48">
            <div className="w-64 h-40 overflow-hidden rounded-lg">
              <img src="https://static.igem.wiki/teams/5642/images/how/taifr/dsc05068-3527973337.webp" alt="Figure 7" className="w-full h-full object-cover " />
            </div>
            <p className="text-sm text-gray-700" style={{ fontFamily: 'Urbanist, sans-serif' }}>
              <p>
                <strong>Figure 7. </strong>
                <span style={{ fontWeight: 400 }}>
                    Dr. Keith Slotkin from The Donald Danforth Plant Science Center
                </span>
                </p>

            </p>
          </div>

          <p style={{ marginTop: '1rem' }}>
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
        </section>


        <section className="mb-8">
          <div className="flex items-start gap-8">
            {/* Left side - Question and diagram */}
            <div className="w-1/3">
              <h3 className="text-lg font-bold text-gray-800 mb-4 leading-tight" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
               Can we insert transgene into duckweed genome and regenerate transgenic cells into whole plant?

              </h3>
              
              {/* Circular diagram placeholder */}
              <div className="relative w-64 h-64 mx-auto mb-4">
                <img src="https://static.igem.wiki/teams/5642/images/how/taifr/regeneration-assay.webp" alt="TAIFR Cycle" className="w-64 h-64 object-contain" />

                
              </div>
              
              <h3 className="text-2xl font-bold text-gray-800 text-center" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                REGENERATION ASSAY
              </h3>
            </div>

            {/* Right side - Text content */}
            <div className="w-2/3 text-gray-700">
              <p className="text-gray-700 leading-relaxed mb-4 text-justify" style={{ fontFamily: 'Urbanist, sans-serif' }}>
                We designed our first assay <u>The Regeneration Assay</u>.
              </p>
              
              <p style={{ marginTop: '1rem' }}>
                <span style={{ fontWeight: 400 }}>
                    In short, duckweed was co-transformed with two{" "}
                </span>
                <em>
                    <span style={{ fontWeight: 400 }}>Agrobacterium</span>
                </em>
                <span style={{ fontWeight: 400 }}>
                    {" "}
                    lines. The first carried GFP linked to neomycin resistance between
                    transposable mPing elements - this is the{" "}
                </span>
                <strong>PING part</strong>
                <span style={{ fontWeight: 400 }}>
                    . The second carried the PONG transposase under the monocot-specific
                    promoter rZmUBI, which should recognize, cut, move, and insert this cassette
                    into the duckweed nuclear genome – this is the{" "}
                </span>
                <strong>PONG part</strong>
                <span style={{ fontWeight: 400 }}>.</span>
                </p>


              <>
                <p style={{ marginTop: '1rem' }}>
                    <span style={{ fontWeight: 400 }}>
                    From duckweed antibiotic sensitivity tests performed by Dr. Ordóñez, we
                    knew that neomycin, especially its synthetic form G418 - kills duckweed
                    most effectively (Marí-Ordóñez, unpublished). That is why we placed the
                    gene for its resistance, NPTII, into our cassette for insertion into the
                    duckweed nuclear genome.
                    </span>
                </p>
                
                <p style={{ marginTop: '1rem' }}>
                    <span style={{ fontWeight: 400 }}>
                    After the, hopefully, successful insertion, we would select
                    transgene-positive cells by neomycin selection, trying to favor transgenic
                    cells over non-transgenic ones in a way that would not kill them all
                    immediately, allowing the few transgenic cells to survive and give rise to
                    new fronds.
                    </span>
                </p>
                </>

            </div>
          </div>
        </section>            



        {/* We designed our first assay The Regeneration Assay */}
        <section className="mb-8 clear-both">
          <h2 className="text-2xl font-bold text-gray-800 mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            We designed our first assay The Regeneration Assay.
          </h2>
          
          <p>
                <span style={{ fontWeight: 400 }}>
                    In short, duckweed was co-transformed with two{" "}
                </span>
                <em>
                    <span style={{ fontWeight: 400 }}>Agrobacterium</span>
                </em>
                <span style={{ fontWeight: 400 }}>
                    {" "}
                    lines. The first carried GFP linked to neomycin resistance between
                    transposable mPing elements - this is the{" "}
                </span>
                <strong>PING part</strong>
                <span style={{ fontWeight: 400 }}>
                    . The second carried the PONG transposase under the monocot-specific
                    promoter rZmUBI, which should recognize, cut, move, and insert this cassette
                    into the duckweed nuclear genome – this is the{" "}
                </span>
                <strong>PONG part</strong>
                <span style={{ fontWeight: 400 }}>.</span>
                </p>


          <p className="text-gray-700 leading-relaxed mb-4 text-justify" style={{ fontFamily: 'Urbanist, sans-serif' }}>
            From duckweed antibiotic sensitivity tests performed by Dr. Ordóñez, we knew that neomycin, especially its synthetic form G418 - kills duckweed most effectively (Marí-Ordóñez, unpublished). That is why we placed the gene for its resistance, NPTII, into our cassette for insertion into the duckweed nuclear genome.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4 text-justify" style={{ fontFamily: 'Urbanist, sans-serif' }}>
            After the, hopefully, successful insertion, we would select transgene-positive cells by neomycin selection, trying to favor transgenic cells over non-transgenic ones in a way that would not kill them all immediately, allowing the few transgenic cells to survive and give rise to new fronds.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4 text-justify" style={{ fontFamily: 'Urbanist, sans-serif' }}>
            We were lucky to get Dr. Slotkin on a call (read more in Human Practices) to discuss our design with him. He told us that there is no reason this could not work in duckweed - it is definitely worth giving a try. But we should first perform The Excision Assay to see whether the PONG transposase is even able to act on mPing in the duckweed nuclear environment, and to check whether any duckweed-native transposases might act upon mPing sequences, potentially ruining our efforts.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6 text-justify" style={{ fontFamily: 'Urbanist, sans-serif' }}>
            To address the second possible bottleneck of frond-mediated transformation in duckweed, we also designed The Meristematic Assay, utilizing an already established GFP-stable line of Spirodela polyrhiza 162, generated by callus-mediated transformation and kindly provided by Dr. Ordóñez. We aimed to test whether knocking out GFP using Cas9 guided by GFP gRNAs would result in decreased or even lost fluorescence in subsequent generations - thus confirming that Agrobacterium can reach the meristematic cells of duckweed.
          </p>
        </section>

        {/* Three Assay Questions - As simple text blocks */}
        <section className="mb-8">
          <div className="space-y-8">
            <div className="text-center">
              <h3 className="text-xl font-bold text-blue-800 mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                REGENERATION ASSAY
              </h3>
              <p className="text-blue-700 mb-4" style={{ fontFamily: 'Urbanist, sans-serif' }}>
                Can we insert transgene into duckweed genome and regenerate transgenic cells into whole plant?
              </p>
            </div>
            
            <div className="text-center">
              <h3 className="text-xl font-bold text-purple-800 mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                EXCISION ASSAY
              </h3>
              <p className="text-purple-700 mb-4" style={{ fontFamily: 'Urbanist, sans-serif' }}>
                But wait… Is PONG transposase actually able to recognize and excise mPing in duckweed?
              </p>
            </div>
            
            <div className="text-center">
              <h3 className="text-xl font-bold text-orange-800 mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                MERISTEMATIC ASSAY
              </h3>
              <p className="text-orange-700 mb-4" style={{ fontFamily: 'Urbanist, sans-serif' }}>
                And what if Agrobacterium cannot reach the meristematic tissue?
              </p>
            </div>
          </div>
        </section>

        {/* Additional Regeneration Assay Detail */}
        

        {/* Discover section */}
        <section className="mb-8">
          <div className="text-center py-6 px-8 bg-green-100 rounded-lg">
            <h2 className="text-xl font-bold text-green-800" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Discover how you can use our TAIFR parts and protocol engineer duckweed
            </h2>
          </div>
        </section>
      </main>

      {/* Footer with References */}
      <footer className="bg-gray-50 py-8 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-8">
          <h3 className="text-lg font-bold mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            References
          </h3>
          <div className="text-sm space-y-2" style={{ fontFamily: 'Urbanist, sans-serif' }}>
            <p>1. Gelvin, S. B. (2017). Integration of Agrobacterium T-DNA into the plant genome. Annual Review of Genetics, 51, 195–217. https://doi.org/10.1146/annurev-genet-120215-035320</p>
            <p>2. Long, Y., Liu, Q., Rong, S., Li, J., & Guo, S. (2022). New insights into tissue culture plant-regeneration mechanisms. Frontiers in Plant Science, 13, 926752. https://doi.org/10.3389/fpls.2022.926752</p>
            <p>3. Wang, K.-T., Wang, C.-S., Chang, C.-C., & Huang, H.-J. (2021). Agrobacterium-mediated genetic transformation of Lemna aequinoctialis. Plants, 10(8), 1576. https://doi.org/10.3390/plants10081576</p>
            <p>4. Ziegler, P., Appenroth, K. J., & Sree, K. S. (2023). Survival strategies of duckweeds, the world's smallest angiosperms. Plants, 12(11), 2215. https://doi.org/10.3390/plants12112215</p>
            <p>5. Bélanger, J.-G., Nivelle, M.-A., & Tardif, M. (2024). A comprehensive review of in planta stable transformation strategies. Plant Methods, 20, 70. https://doi.org/10.1186/s13007-024-01200-8</p>
            <p className="text-gray-600">...and 12 more references (see full document for complete list)</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TAIFRComponent;