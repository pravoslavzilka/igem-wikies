import References from '../../../components/References';


const PromoterLibrary = () => {
  return (
    <div className="min-h-screen bg-white p-8 text-lg text-justify" style={{ fontFamily: "Urbanist, sans-serif" }}>

      

      <div className="max-w-6xl mx-auto">

        {/* Header */}
      <h1 className="text-4xl font-bold text-center mb-8" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
        Duckweed promoter library
      </h1>

      {/* Main Image Placeholder */}
      <div className="w-full h-64 bg-gray-200 border-2 border-gray-300 mb-6 flex items-center justify-center">
        <span className="text-gray-500 text-lg" style={{ fontFamily: 'Urbanist, sans-serif' }}>
          [Duckweed Research Image Placeholder]
        </span>
      </div>

      {/* Description Text */}
      <p className="text-center text-md mb-6 leading-relaxed" style={{ fontFamily: 'Urbanist, sans-serif' }}>
        We identified promoters of genes with highest and most stable expression across different
        duckweed species. We created 15 constructs to test and quantify their expression.
      </p>

      <p className="text-center text-md mb-8 leading-relaxed" style={{ fontFamily: 'Urbanist, sans-serif' }}>
        Now, anyone can easily use one of our native duckweed promoters to express any gene of
        interest!
      </p>

      {/* Why Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
          Why?
        </h2>
        
        {/* Dashed line */}
        <div className="border border-dashed border-black mb-4" style={{ borderWidth: '2px' }}>

        {/* Quote box */}
        <div className=" pl-4 mb-4 pt-4">
          <p className="text-md leading-relaxed" style={{ fontFamily: 'Urbanist, sans-serif' }}>
            "Long-term sustained expression of transgenes in plants is often hindered by the onset of
            epigenetic silencing of genetic regulatory elements, such as promoters, in response to foreign DNA
            sequences. For such reason, the identification of strong constitutive endogenous promoters, or
            sequences to build the synthetic ones, in duckweeds is a fundamental tool for future duckweed
            applications."
          </p>
        </div>
        </div>

       
      </div>

      {/* Author Section */}
      <div className="flex justify-center">
        <div className="flex flex-col items-center justify-center">
          <div className="text-base text-center text-gray-600 leading-relaxed mb-8 md:ml-10 md:mr-10">
            <p className="mb-4" style={{ fontFamily: 'Urbanist, sans-serif', fontSize: '17px' }}>
            </p>
          </div>
          <div className="flex items-center space-x-4 ">
            <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
              <img src="https://static.igem.wiki/teams/5642/images/homepage/261c5c2f7503581c5df39f6f0a694861db5ae9eb.webp" alt="Dr. Arturo Marí-Ordóñez" className="rounded-full" />
            </div>
            <div style={{fontFamily: 'Space Grotesk, sans-serif' }}>
              <div className="font-bold text-xl text-gray-800">Dr. Arturo Marí-Ordóñez</div>
              <div className="text-gray-600 mt-1">Principal Investigator</div>
              <div className="text-gray-600">at the Gregor Mendel Institute in Vienna</div>
            </div>
          </div>
        </div>
      </div>



       <div className="space-y-4 text-md leading-relaxed mt-16" style={{ fontFamily: 'Urbanist, sans-serif' }}>
        <p>
          It is not only hard to get the gene of interest into duckweed. The next bottleneck is achieving high and stable 
          expression of the transgene. The strength and stability of protein expression is influenced by genetic 
          regulatory parts such as 5'UTRs, 3'UTRs and terminators, but is mostly determined by promoters [1].
        </p>

        <p>
          Plant engineering knows a lot of these parts but they are, unsurprisingly, centered around only a few species 
          like <em>Arabidopsis</em>, tobacco, and maize. And when it comes to duckweed, these do not work ideally. Even the 
          most widely used promoter in plant genetic engineering, the Cauliflower mosaic virus 35S promoter (r35S), yields only weak expression [2]. This is probably a result of the epigenetic silencing of the foreign 
          genetic parts in duckweed environment, which is observed also for other monocot species [3]. Several 
          monocot promoters, such as maize ubiquitin (rZmUBI) work decently [4], but it is reasonable to assume that 
          endogenous parts from duckweed would increase both strength and stability of expression [4].
        </p>

        <p>
          After literature search, we found only one native duckweed promoter isolated and used in a scientific study [5]. 
          It showed higher expression compared to the r35S promoter. In our consultation with Phyllocauticals, CSO 
          Lynn Dyckey mentioned that they also use proprietary native duckweed promoters for recombinant protein 
          expression.
        </p>

        <p>
          Therefore, we decided to empower all duckweed researchers with endogenous promoters to discard another 
          burden in duckweed genetic engineering and we developed a duckweed promoter library.
        </p>
      </div>

      {/* How Section */}
      <div className="mt-12">
        <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
          How?
        </h2>
        
        <p className="text-md leading-relaxed" style={{ fontFamily: 'Urbanist, sans-serif' }}>
          Construction of duckweed promoter library required two crucial steps: in silico identification of 
          suitable promoter sequences and their subsequent characterization in duckweed.
        </p>
      </div>

       

        <h1 className="text-4xl font-bold mb-4 mt-10" style={{ fontFamily: "Space Grotesk, sans-serif" }}>In silico promoter identification</h1>
        <p className="leading-relaxed" style={{ fontFamily: "Urbanist, sans-serif" }}>Initially, we tried to develop our own workflow for identification of highly expressed genes and their promoters in multiple duckweed species. We successfully identified the highest expressing genes and extracted their promoters based on transcriptomics data, isolated them and even tried to clone them in front of the RUBY reporter.  
        However, we were not successful so we needed to refine our workflow. After extensive literature research and consultations with Dr. Veronika Jedlíčková, iGEM Marburg 2024 team and Dr. Eric Yang, we discovered that we made several mistakes in our in silico workflow, for example not including MoClo compatibility filtering but most importantly, not comparing data across different transcriptomes. 
        We implemented the feedback we received and proceeded with the workflow we are presenting. You can see the graphical representation of our workflow in the schema below. 
        In our in silico promoter identification of promoter sequences, we drawn an inspiration from the brilliant workflow of the endogenous part identification in Taraxacum presented by the iGEM Marburg 2024 team with their project Tarakate and the article by Zhou et al., 2023 [6].
        </p>

        <img src="https://static.igem.wiki/teams/5642/images/toolbox/promoterssilico/yellow-simple-success-flowchart-instagram-post.webp" alt="Workflow Diagram" className="my-8 mx-auto" />


        <h1 className="text-3xl text-justify font-bold mb-4" style={{ fontFamily: "Space Grotesk, sans-serif" }}>Data collection</h1>
                

       <p className="text-justify leading-relaxed text-gray-800 mb-4">
          To find strong and stable promoter sequence that could drive expression of the gene of interest in the whole plant, it is ideal to analyze wider set of different transcriptomic data, which can help identify genes with the desired characteristics [7]. Such characteristics include high expression level, low expression variability across tissues, housekeeping functions, and consistent expression across developmental stages. The usual approach is to compare transcriptomic data (a) from different tissues, (b) in different developmental stages of the plant, or (c) combination of both, which allows the usage of single reference genome. However, we were not able to find such comprehensive data for duckweed species; therefore, we had to search for a different approach.

        </p>

    <div className="mb-8 flex flex-col md:flex-row md:items-start md:justify-between">
      <div className="md:w-1/2">
      
      
        <p className="text-justify leading-relaxed text-gray-800 mb-4">
          We decided to find genes that are stably expressed not across tissues, but rather across different Lemnoideae species. We gathered raw transcriptomic data and reference genomes from the Lemna.org [8] (Fig. 1) database for species L. gibba 7742, L. japonica 7182, L. minor 9252 and added data of S. polyrhiza 9509 obtained from study [9] of our advisor Arturo Marí-Ordóñez. We used this dataset to proceed with further analysis.
        </p>
      </div>
      <div className="md:w-1/2 flex flex-col gap-2 mt-4 md:mt-0 justify-center items-center m-10">
        <div className="bg-gray-50 rounded-lg">
              
              
              <div className="bg-white rounded">
                <img src="https://static.igem.wiki/teams/5642/images/toolbox/promoterssilico/figure1.webp" alt="Large Tray Growth Curve" className="w-full h-auto" />
              </div>
              
              <p className="text-sm text-gray-600 mt-3 p-4" style={{ fontFamily: 'Urbanist, sans-serif' }}>
                <strong>Fig 1:</strong> Example of downloadable reference genome and annotation resources from the Lemna.org database. Shown are files related to the Lemna japonica 7182 genome assembly (Le_japonica_7182-REF-CSHL-1.0), including FASTA, GFF3, protein, CDS and transcript datasets.
              </p>
            </div>
      </div>
  </div>



       <h1 className="text-3xl font-bold mb-4" style={{ fontFamily: "Space Grotesk, sans-serif" }}>Raw RNAseq data analysis</h1>
        <p className="leading-relaxed" style={{ fontFamily: "Urbanist, sans-serif" }}>
          Raw Illumina short-read sequencing data in fastq format require proper treatment to obtain reliable expression level profile. We have used basic workflow including the RNA seq quality assessment, trimming of adapter sequences and low-quality bases, reference-genome mapping of reads and counting the feature expression levels.
        </p>


        <p className="leading-relaxed pt-5" style={{ fontFamily: "Urbanist, sans-serif" }}>
          First the quality of input data was checked using FastQC v0.12.1 [10] executed from MultiQC v1.27 [11] wrapper- no alarming contents were observed. Trimming wrapper Trim Galore! (0.6.10) [12] utilizes Cutadapt (4.9) [13] engine to run thorough trimming workflow (Fig. 2). This includes omitting adapters - relicts from sequencing reads identification - low quality read-end bases and handling of pair-end reads. Again we ran FastQC on trimmed data to check for properly executed trimming shown by adapter content metric.

        </p>

            <div className="bg-gray-50 mt-5  mb-5 rounded-lg">
              
              
             <div className="bg-white rounded">
                <img src="https://static.igem.wiki/teams/5642/images/toolbox/promoterssilico/figure2-hq.webp" alt="Large Tray Growth Curve" className="w-full h-auto" />
              </div>
              
              <p className="text-sm text-gray-600 mt-3 p-4" style={{ fontFamily: 'Urbanist, sans-serif' }}>
                <strong>Fig 2:</strong>  Exemplary Trim Galore! wrapper command-line execution with settings
              </p>
            </div>



        <p className="leading-relaxed pt-5" style={{ fontFamily: "Urbanist, sans-serif" }}>
          Such curated reads are prepared for mapping and assessment of expression level. Several approaches are currently available and after discussion we were considering two aligning softwares - Salmon [14] and STAR [15].  Salmon advantages from quasi-mapping of reads to transcriptome, which ensures faster calculation and lower resource dependencies. However, we have decided to use robust full-genome mapping executed by STAR (2.7.1a) software, since the transcriptome of Lemnoideae species is not reliably annotated. The STAR aligner requires index generation - preprocessing of specific files used by STAR algorithm. The reads are then aligned to reference genome (Fig. 3) and output in format of genome-read-map file BAM, that is to be analysed to quantify expression levels.

        </p>

        <div className="bg-gray-50 mt-5  mb-5 rounded-lg">
             <div className="bg-white rounded">
                <img src="https://static.igem.wiki/teams/5642/images/toolbox/promoterssilico/figure3-hq.webp" alt="Large Tray Growth Curve" className="w-full h-auto" />
              </div>
              
              <p className="text-sm text-gray-600 mt-3 p-4" style={{ fontFamily: 'Urbanist, sans-serif' }}>
                <strong>Fig 3:</strong>  STAR aligner command-line settings
              </p>
            </div>

        <p className="leading-relaxed pt-5" style={{ fontFamily: "Urbanist, sans-serif" }}>
          FeatureCounts [16] (2.0.8) software is used for read quantification and is a common part of RNA seq analysis workflow that utilizes STAR aligner. We have ran the Rsubread::featureCount in R with feature type set to "transcript". The final feature-count table were exported in csv with expression level provided as raw counts. 


        </p>
            <div className="bg-gray-50 mt-5  mb-5 rounded-lg">
            <div className="bg-white rounded">
                <img src="https://static.igem.wiki/teams/5642/images/toolbox/promoterssilico/figure4-hq.webp" alt="Large Tray Growth Curve" className="w-full h-auto" />
              </div>
              
              <p className="text-sm text-gray-600 mt-3 p-4" style={{ fontFamily: 'Urbanist, sans-serif' }}>
                <strong>Fig 4:</strong>   Execution of featureCount command with settings

              </p>
            </div>


        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-8">
 
            <div className="flex items-center">
              <p className="text-gray-700 leading-relaxed" style={{ fontFamily: 'Urbanist, sans-serif' }}>
                 The whole RNAseq data analysis workflow is displayed step-by-step in the Fig. 5 for clarity.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg">
              
              
              <div className="bg-white rounded">
                <img src="https://static.igem.wiki/teams/5642/images/toolbox/promoterssilico/figure5.webp" alt="Large Tray Growth Curve" className="w-full h-auto" />
              </div>

              <p className="text-sm text-gray-600 mt-3 p-4" style={{ fontFamily: 'Urbanist, sans-serif' }}>
                <strong>Fig 5:</strong>   RNAseq expression analysis workflow schema.
              </p>
            </div>

          </div>    


        




        <h1 className="text-3xl font-bold mb-6 mt-16" style={{ fontFamily: "Space Grotesk, sans-serif" }}>Interspecies comparability - Orthogroups</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-8">
 
            
            <div className="bg-gray-50 rounded-lg">
              
              
              <div className="bg-white rounded">
                <img src="https://static.igem.wiki/teams/5642/images/toolbox/promoterssilico/figure6.webp" alt="Large Tray Growth Curve" className="w-full h-auto" />
              </div>

              <p className="text-sm text-gray-600 mt-3 p-4" style={{ fontFamily: 'Urbanist, sans-serif' }}>
                <strong>Fig 6:</strong>   Schematic overview of the OrthoFinder 2 workflow used for orthology inference and identification of orthogroups from proteomes of Lemnoideae species (taken from OrthoFinder tutorials by David Emms (<a target='_blank' style={{ color: '#3b82f6' }} href="https://davidemms.github.io">https://davidemms.github.io</a>).
              </p>
            </div>

            <div className="flex items-center">
              <p className=" leading-relaxed" style={{ fontFamily: 'Urbanist, sans-serif' }}>
                 The first step needed for the direct comparison of transcriptomes of different species is the identification of orthologous genes. We decided to use OrthoFinder (OF), a software tool for phylogenetic orthology inference. Orthogroups proposed by OF consist of phylogenetically close genes, suggesting they likely share identical functions even in different species. OF uses proteomes of individual species for the analysis. We have provided proteomes from Lemna.org and from study of Arturo Marí-Ordóñez mentioned above [9]. The analysis ran using OrthoFinder 2.5.5 with default settings.
                  <br /><br />
                          Orthogroups consist not only of orthologous genes – similar genes originating from different species – but also paralogous genes, which originate from the same species and result from gene duplications or pseudogene formation. To obtain a single expression level per orthogroup, we have proposed several strategies for the treatment of paralogs. After discussion with Eric Yang and based on his publication [17], only the highest expressed gene from each species in an orthogroup was considered - this avoids distortion of the expression level caused by pseudogenes and inactive duplicated genes.

              </p>
              
            </div>

          </div>  


       



        <h1 className="text-3xl font-bold mb-6 mt-16" style={{ fontFamily: "Space Grotesk, sans-serif" }}>Data normalization</h1>

        <p className="leading-relaxed pt-5" style={{ fontFamily: "Urbanist, sans-serif" }}>
          Before proceeding with the analysis, data normalization is essential since transcriptomic data can differ significantly depending on the sequencing depth, the experimental method used, and other variables. That is why raw counts of transcripts from RNAseq experiments are not directly comparable. To address this, we have proceeded with DESeq2 size factor normalization, which accounts for differences in sequencing depth and RNA composition across samples. The exact normalization protocol can be found in the study by Anders and Huber (2010) [18].
        </p>

        <h1 className="text-3xl font-bold mb-6 mt-16" style={{ fontFamily: "Space Grotesk, sans-serif" }}>Stability and strength assessment</h1>

        <p className="leading-relaxed pt-5" style={{ fontFamily: "Urbanist, sans-serif" }}>
          The strength and stability of gene expression are crucial aspects that reflect the quality of a promoter region and its suitability as a component of a general transformation plasmid. For the assessment of orthogroup expression strength, we calculated the mean expression level, while the coefficient of variation (CV) in each orthogroup was calculated to reflect expression stability across species.
        </p>

        <p className="leading-relaxed pt-5" style={{ fontFamily: "Urbanist, sans-serif" }}>
          The variance is strongly dependent on the mean of data, which does not allow a simple calculation of averages from heterogenous transcriptomic data. Therefore, we applied the variance stabilizing transformation (VST) from the DESeq2 python package, which reduces the dependence of the variance on the mean and makes the data more homoscedastic. This transformation is particularly useful for calculating the CV.
        </p>


        <p className="leading-relaxed pt-5" style={{ fontFamily: "Urbanist, sans-serif" }}>
          For the calculation of mean expression values, we used the regularized log (rlog) transformation, which stabilizes the variance across the range of mean values, while it also shrinks low-count genes towards the average across samples. This regularization improves the reliability of mean estimates for genes with low expression, which are otherwise highly variable. 
        </p>

        <p className="leading-relaxed pt-5" style={{ fontFamily: "Urbanist, sans-serif" }}>
          Orthogroups in the 95th percentile of expression average and CV lower than 30% were picked as candidates for promoter search. As shown in Figure 7 (CV /mean expression) and Figure 8 (CV/log₂ mean), these filtering criteria yielded a subset of 124 candidate genes that were further analyzed as potential promoter sources.
        </p>



        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-8">
 
            
            <div className="bg-gray-50 rounded-lg">
              
              
              <div className="bg-white rounded">
                <img src="https://static.igem.wiki/teams/5642/images/toolbox/promoterssilico/figure7.webp" alt="Large Tray Growth Curve" className="w-full h-auto" />
              </div>

              <p className="text-sm text-gray-600 mt-3 p-4" style={{ fontFamily: 'Urbanist, sans-serif' }}>
                <strong>Fig 7:</strong>   VST-based coefficient of variation (CV) versus rlog-based mean expression per orthogroup, used to evaluate stability and strength of gene expression across Lemnoideae species.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg">
              
              
              <div className="bg-white rounded">
                <img src="https://static.igem.wiki/teams/5642/images/toolbox/promoterssilico/figure8.webp" alt="Large Tray Growth Curve" className="w-full h-auto" />
              </div>

              <p className="text-sm text-gray-600 mt-3 p-4" style={{ fontFamily: 'Urbanist, sans-serif' }}>
                <strong>Fig 8:</strong>   CV versus log₂ mean expression (rlog normalized mean ≥ 10), highlighting highly expressed orthogroups with stable expression as candidates for promoter selection.
              </p>
            </div>

          </div>


        <h1 className="text-3xl font-bold mb-6 mt-16" style={{ fontFamily: "Space Grotesk, sans-serif" }}>Functional annotation</h1>

        <p className="leading-relaxed pt-5" style={{ fontFamily: "Urbanist, sans-serif" }}>
          Candidate genes for promoter search and evaluation are the highest-expressed, but the biological context was not known. In order to reduce the noise introduced by unannotated genes, we performed functional annotation analysis with eggNOGmapper (<a className='text-blue-500 hover:underline' target='_blank' href="http://eggnog-mapper.embl.de/">http://eggnog-mapper.embl.de/</a>) [19] [20], a tool providing ontology-based annotation with GO terms and KEGG pathways across a wide range of species. The second reason for such analysis was to account for the fact that the ideal promoters are likely to be associated with housekeeping genes known for their stable expression. 
        </p>


        <p className="leading-relaxed pt-5" style={{ fontFamily: "Urbanist, sans-serif" }}>
          Orthogroups containing only reasonably annotated (not unknown) and housekeeping genes were considered. As expected, many candidates were linked to essential cellular processes such as ribosomal proteins, translation factors, or primary metabolism. The final list of 20 Orthogroups was curated manually.
        </p>


        {/* Genetic Data Table */}
      <div className="mt-12">
        <h2 className="text-xl font-semibold text-gray-900 mb-6" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
          Orthogroup Expression Analysis
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-200 rounded-lg overflow-hidden">
            <thead className="bg-green-100">
              <tr>
                <th className="px-3 py-3 text-left text-xs font-semibold text-gray-900 border-r border-gray-200" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  Orthogroup
                </th>
                <th className="px-3 py-3 text-left text-xs font-semibold text-gray-900 border-r border-gray-200" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  Mean rlog expression
                </th>
                <th className="px-3 py-3 text-left text-xs font-semibold text-gray-900 border-r border-gray-200" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  CV vst
                </th>
                <th className="px-3 py-3 text-left text-xs font-semibold text-gray-900 border-r border-gray-200" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  Le_gibba_7742
                </th>
                <th className="px-3 py-3 text-left text-xs font-semibold text-gray-900 border-r border-gray-200" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  Le_japonica_7182
                </th>
                <th className="px-3 py-3 text-left text-xs font-semibold text-gray-900 border-r border-gray-200" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  Le_minor_9252
                </th>
                <th className="px-3 py-3 text-left text-xs font-semibold text-gray-900 border-r border-gray-200" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  Sp_polyrrhizia_9505
                </th>
                <th className="px-3 py-3 text-left text-xs font-semibold text-gray-900" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  Gene Ontology
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr className="hover:bg-gray-50">
                <td className="px-3 py-2 text-xs text-blue-600 font-semibold border-r border-gray-200" style={{ fontFamily: 'Urbanist, sans-serif' }}>OG0007366</td>
                <td className="px-3 py-2 text-xs text-gray-700 border-r border-gray-200" style={{ fontFamily: 'Urbanist, sans-serif' }}>11.41</td>
                <td className="px-3 py-2 text-xs text-gray-700 border-r border-gray-200" style={{ fontFamily: 'Urbanist, sans-serif' }}>6.07E-03</td>
                <td className="px-3 py-2 text-xs text-gray-700 border-r border-gray-200" style={{ fontFamily: 'Urbanist, sans-serif' }}>Lg7742Ab018g004410</td>
                <td className="px-3 py-2 text-xs text-gray-700 border-r border-gray-200" style={{ fontFamily: 'Urbanist, sans-serif' }}>Lj7182a18Tg004050_T001</td>
                <td className="px-3 py-2 text-xs text-gray-700 border-r border-gray-200" style={{ fontFamily: 'Urbanist, sans-serif' }}>Lm9252a018g004250_T001</td>
                <td className="bg-green-200 px-3 py-2 text-xs text-gray-700 border-r border-gray-200" style={{ fontFamily: 'Urbanist, sans-serif' }}>Sp9509d020g002140</td>
                <td className="px-3 py-2 text-xs text-gray-700" style={{ fontFamily: 'Urbanist, sans-serif' }}>Belongs to the PI3 PI4-kinase family</td>
              </tr>
              <tr className="bg-gray-50 hover:bg-gray-100">
                <td className="px-3 py-2 text-xs text-blue-600 font-semibold border-r border-gray-200" style={{ fontFamily: 'Urbanist, sans-serif' }}>OG0005421</td>
                <td className="px-3 py-2 text-xs text-gray-700 border-r border-gray-200" style={{ fontFamily: 'Urbanist, sans-serif' }}>10.75</td>
                <td className="px-3 py-2 text-xs text-gray-700 border-r border-gray-200" style={{ fontFamily: 'Urbanist, sans-serif' }}>6.74E-03</td>
                <td className="px-3 py-2 text-xs text-gray-700 border-r border-gray-200" style={{ fontFamily: 'Urbanist, sans-serif' }}>Lg7742Ab014g003060</td>
                <td className="bg-green-500 text-white px-3 py-2 text-xs text-gray-700 border-r border-gray-200" style={{ fontFamily: 'Urbanist, sans-serif' }}>Lj7182a14Tg002820_T001</td>
                <td className="px-3 py-2 text-xs text-gray-700 border-r border-gray-200" style={{ fontFamily: 'Urbanist, sans-serif' }}>Lm9252a014g002730_T001</td>
                <td className="px-3 py-2 text-xs text-gray-700 border-r border-gray-200" style={{ fontFamily: 'Urbanist, sans-serif' }}>Sp9509d016g005470</td>
                <td className="px-3 py-2 text-xs text-gray-700" style={{ fontFamily: 'Urbanist, sans-serif' }}>transposition, RNA-mediated</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-3 py-2 text-xs text-blue-600 font-semibold border-r border-gray-200" style={{ fontFamily: 'Urbanist, sans-serif' }}>OG0004915</td>
                <td className="px-3 py-2 text-xs text-gray-700 border-r border-gray-200" style={{ fontFamily: 'Urbanist, sans-serif' }}>11.19</td>
                <td className="px-3 py-2 text-xs text-gray-700 border-r border-gray-200" style={{ fontFamily: 'Urbanist, sans-serif' }}>7.93E-03</td>
                <td className="px-3 py-2 text-xs text-gray-700 border-r border-gray-200" style={{ fontFamily: 'Urbanist, sans-serif' }}>Lg7742Ab005g000790</td>
                <td className="px-3 py-2 text-xs text-gray-700 border-r border-gray-200" style={{ fontFamily: 'Urbanist, sans-serif' }}>Lj7182a05Tg000730_T001</td>
                <td className="bg-green-200 px-3 py-2 text-xs text-gray-700 border-r border-gray-200" style={{ fontFamily: 'Urbanist, sans-serif' }}>Lm9252a005g000710_T001</td>
                <td className="px-3 py-2 text-xs text-gray-700 border-r border-gray-200" style={{ fontFamily: 'Urbanist, sans-serif' }}>Sp9509d003g000930</td>
                <td className="px-3 py-2 text-xs text-gray-700" style={{ fontFamily: 'Urbanist, sans-serif' }}>Serine/threonine-protein kinase smg-1</td>
              </tr>
              <tr className="bg-gray-50 hover:bg-gray-100">
                <td className="px-3 py-2 text-xs text-blue-600 font-semibold border-r border-gray-200" style={{ fontFamily: 'Urbanist, sans-serif' }}>OG0011246</td>
                <td className="px-3 py-2 text-xs text-gray-700 border-r border-gray-200" style={{ fontFamily: 'Urbanist, sans-serif' }}>10.82</td>
                <td className="px-3 py-2 text-xs text-gray-700 border-r border-gray-200" style={{ fontFamily: 'Urbanist, sans-serif' }}>9.23E-03</td>
                <td className="bg-green-200 px-3 py-2 text-xs text-gray-700 border-r border-gray-200" style={{ fontFamily: 'Urbanist, sans-serif' }}>Lg7742Ab004g010790</td>
                <td className="px-3 py-2 text-xs text-gray-700 border-r border-gray-200" style={{ fontFamily: 'Urbanist, sans-serif' }}>Lj7182a04Tg009740_T001</td>
                <td className="px-3 py-2 text-xs text-gray-700 border-r border-gray-200" style={{ fontFamily: 'Urbanist, sans-serif' }}>Lm9252a004g009880_T001</td>
                <td className="px-3 py-2 text-xs text-gray-700 border-r border-gray-200" style={{ fontFamily: 'Urbanist, sans-serif' }}>Sp9509d009g002750</td>
                <td className="px-3 py-2 text-xs text-gray-700" style={{ fontFamily: 'Urbanist, sans-serif' }}>DnaJ homolog subfamily C</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-3 py-2 text-xs text-blue-600 font-semibold border-r border-gray-200" style={{ fontFamily: 'Urbanist, sans-serif' }}>OG0005862</td>
                <td className="px-3 py-2 text-xs text-gray-700 border-r border-gray-200" style={{ fontFamily: 'Urbanist, sans-serif' }}>11.24</td>
                <td className="px-3 py-2 text-xs text-gray-700 border-r border-gray-200" style={{ fontFamily: 'Urbanist, sans-serif' }}>9.77E-03</td>
                <td className="px-3 py-2 text-xs text-gray-700 border-r border-gray-200" style={{ fontFamily: 'Urbanist, sans-serif' }}>Lg7742Ab001g005990</td>
                <td className="px-3 py-2 text-xs text-gray-700 border-r border-gray-200" style={{ fontFamily: 'Urbanist, sans-serif' }}>Lj7182a01Tg004710_T001</td>
                <td className="px-3 py-2 text-xs text-gray-700 border-r border-gray-200" style={{ fontFamily: 'Urbanist, sans-serif' }}>Lm9252a001g005510_T001</td>
                <td className="bg-orange-300 px-3 py-2 text-xs text-gray-700 border-r border-gray-200" style={{ fontFamily: 'Urbanist, sans-serif' }}>Sp9509d015g004110</td>
                <td className="px-3 py-2 text-xs text-gray-700" style={{ fontFamily: 'Urbanist, sans-serif' }}>E3 ubiquitin-protein ligase</td>
              </tr>
              <tr className="bg-gray-50 hover:bg-gray-100">
                <td className="px-3 py-2 text-xs text-blue-600 font-semibold border-r border-gray-200" style={{ fontFamily: 'Urbanist, sans-serif' }}>OG0005220</td>
                <td className="px-3 py-2 text-xs text-gray-700 border-r border-gray-200" style={{ fontFamily: 'Urbanist, sans-serif' }}>10.16</td>
                <td className="px-3 py-2 text-xs text-gray-700 border-r border-gray-200" style={{ fontFamily: 'Urbanist, sans-serif' }}>8.94E-03</td>
                <td className="px-3 py-2 text-xs text-gray-700 border-r border-gray-200" style={{ fontFamily: 'Urbanist, sans-serif' }}>Lg7742Ab009g010430</td>
                <td className="px-3 py-2 text-xs text-gray-700 border-r border-gray-200" style={{ fontFamily: 'Urbanist, sans-serif' }}>Lj7182a09Tg007710_T001</td>
                <td className="px-3 py-2 text-xs text-gray-700 border-r border-gray-200" style={{ fontFamily: 'Urbanist, sans-serif' }}>Lm9252a009g009270_T001</td>
                <td className="bg-green-500 text-white px-3 py-2 text-xs text-gray-700 border-r border-gray-200" style={{ fontFamily: 'Urbanist, sans-serif' }}>Sp9509d001g002350</td>
                <td className="px-3 py-2 text-xs text-gray-700" style={{ fontFamily: 'Urbanist, sans-serif' }}>ARF guanine-nucleotide exchange factor GNOM-like</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-3 py-2 text-xs text-blue-600 font-semibold border-r border-gray-200" style={{ fontFamily: 'Urbanist, sans-serif' }}>OG0003959</td>
                <td className="px-3 py-2 text-xs text-gray-700 border-r border-gray-200" style={{ fontFamily: 'Urbanist, sans-serif' }}>10.49</td>
                <td className="px-3 py-2 text-xs text-gray-700 border-r border-gray-200" style={{ fontFamily: 'Urbanist, sans-serif' }}>9.38E-03</td>
                <td className="px-3 py-2 text-xs text-gray-700 border-r border-gray-200" style={{ fontFamily: 'Urbanist, sans-serif' }}>Lg7742Ab006g003150</td>
                <td className="px-3 py-2 text-xs text-gray-700 border-r border-gray-200" style={{ fontFamily: 'Urbanist, sans-serif' }}>Lj7182a06Tg002810_T001</td>
                <td className="px-3 py-2 text-xs text-gray-700 border-r border-gray-200" style={{ fontFamily: 'Urbanist, sans-serif' }}>Lm9252a006g003330_T001</td>
                <td className="px-3 py-2 text-xs text-gray-700 border-r border-gray-200" style={{ fontFamily: 'Urbanist, sans-serif' }}>Sp9509d008g002800</td>
                <td className="px-3 py-2 text-xs text-gray-700" style={{ fontFamily: 'Urbanist, sans-serif' }}>Alpha-glucan water dikinase</td>
              </tr>
              <tr className="bg-gray-50 hover:bg-gray-100">
                <td className="px-3 py-2 text-xs text-blue-600 font-semibold border-r border-gray-200" style={{ fontFamily: 'Urbanist, sans-serif' }}>OG0012224</td>
                <td className="px-3 py-2 text-xs text-gray-700 border-r border-gray-200" style={{ fontFamily: 'Urbanist, sans-serif' }}>10.75</td>
                <td className="px-3 py-2 text-xs text-gray-700 border-r border-gray-200" style={{ fontFamily: 'Urbanist, sans-serif' }}>9.67E-03</td>
                <td className="px-3 py-2 text-xs text-gray-700 border-r border-gray-200" style={{ fontFamily: 'Urbanist, sans-serif' }}>Lg7742Ab011g006310</td>
                <td className="px-3 py-2 text-xs text-gray-700 border-r border-gray-200" style={{ fontFamily: 'Urbanist, sans-serif' }}>Lj7182a11Tg005770_T001</td>
                <td className="px-3 py-2 text-xs text-gray-700 border-r border-gray-200" style={{ fontFamily: 'Urbanist, sans-serif' }}>Lm9252a011g005920_T001</td>
                <td className="px-3 py-2 text-xs text-gray-700 border-r border-gray-200" style={{ fontFamily: 'Urbanist, sans-serif' }}>Sp9509d018g005380</td>
                <td className="px-3 py-2 text-xs text-gray-700" style={{ fontFamily: 'Urbanist, sans-serif' }}>acetyl-coa carboxylase</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-3 py-2 text-xs text-blue-600 font-semibold border-r border-gray-200" style={{ fontFamily: 'Urbanist, sans-serif' }}>OG0001029</td>
                <td className="px-3 py-2 text-xs text-gray-700 border-r border-gray-200" style={{ fontFamily: 'Urbanist, sans-serif' }}>10.24</td>
                <td className="px-3 py-2 text-xs text-gray-700 border-r border-gray-200" style={{ fontFamily: 'Urbanist, sans-serif' }}>9.34E-03</td>
                <td className="px-3 py-2 text-xs text-gray-700 border-r border-gray-200" style={{ fontFamily: 'Urbanist, sans-serif' }}>Lg7742Ab015g009220</td>
                <td className="bg-green-200 px-3 py-2 text-xs text-gray-700 border-r border-gray-200" style={{ fontFamily: 'Urbanist, sans-serif' }}>Lj7182a15Tg008480_T001</td>
                <td className="px-3 py-2 text-xs text-gray-700 border-r border-gray-200" style={{ fontFamily: 'Urbanist, sans-serif' }}>Lm9252a015g008980_T001</td>
                <td className="bg-green-500 text-white px-3 py-2 text-xs text-gray-700 border-r border-gray-200" style={{ fontFamily: 'Urbanist, sans-serif' }}>Sp9509d007g011980</td>
                <td className="px-3 py-2 text-xs text-gray-700" style={{ fontFamily: 'Urbanist, sans-serif' }}>Belongs to the TRAFAC class myosin-kinesin ATPase superfamily. Myosin family</td>
              </tr>
              <tr className="bg-gray-50 hover:bg-gray-100">
                <td className="px-3 py-2 text-xs text-blue-600 font-semibold border-r border-gray-200" style={{ fontFamily: 'Urbanist, sans-serif' }}>OG0007225</td>
                <td className="px-3 py-2 text-xs text-gray-700 border-r border-gray-200" style={{ fontFamily: 'Urbanist, sans-serif' }}>10.83</td>
                <td className="px-3 py-2 text-xs text-gray-700 border-r border-gray-200" style={{ fontFamily: 'Urbanist, sans-serif' }}>1.01E-02</td>
                <td className="px-3 py-2 text-xs text-gray-700 border-r border-gray-200" style={{ fontFamily: 'Urbanist, sans-serif' }}>Lg7742Ab016g000370</td>
                <td className="px-3 py-2 text-xs text-gray-700 border-r border-gray-200" style={{ fontFamily: 'Urbanist, sans-serif' }}>Lj7182a16Tg000230_T001</td>
                <td className="bg-green-200 px-3 py-2 text-xs text-gray-700 border-r border-gray-200" style={{ fontFamily: 'Urbanist, sans-serif' }}>Lm9252a016g000260_T002</td>
                <td className="px-3 py-2 text-xs text-gray-700 border-r border-gray-200" style={{ fontFamily: 'Urbanist, sans-serif' }}>Sp9509d013g008700</td>
                <td className="px-3 py-2 text-xs text-gray-700" style={{ fontFamily: 'Urbanist, sans-serif' }}>Histone-lysine N-methyltransferase ATXR3</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-3 py-2 text-xs text-blue-600 font-semibold border-r border-gray-200" style={{ fontFamily: 'Urbanist, sans-serif' }}>OG0000305</td>
                <td className="px-3 py-2 text-xs text-gray-700 border-r border-gray-200" style={{ fontFamily: 'Urbanist, sans-serif' }}>10.95</td>
                <td className="px-3 py-2 text-xs text-gray-700 border-r border-gray-200" style={{ fontFamily: 'Urbanist, sans-serif' }}>1.04E-02</td>
                <td className="bg-green-500 text-white px-3 py-2 text-xs text-gray-700 border-r border-gray-200" style={{ fontFamily: 'Urbanist, sans-serif' }}>Lg7742Ab002g007900</td>
                <td className="px-3 py-2 text-xs text-gray-700 border-r border-gray-200" style={{ fontFamily: 'Urbanist, sans-serif' }}>Lj7182a02Tg005920_T001</td>
                <td className="px-3 py-2 text-xs text-gray-700 border-r border-gray-200" style={{ fontFamily: 'Urbanist, sans-serif' }}>Lm9252a002g006650_T001</td>
                <td className="px-3 py-2 text-xs text-gray-700 border-r border-gray-200" style={{ fontFamily: 'Urbanist, sans-serif' }}>Sp9509d014g001720</td>
                <td className="px-3 py-2 text-xs text-gray-700" style={{ fontFamily: 'Urbanist, sans-serif' }}>Chromatin structure-remodeling complex protein</td>
              </tr>
              <tr className="bg-gray-50 hover:bg-gray-100">
                <td className="px-3 py-2 text-xs text-blue-600 font-semibold border-r border-gray-200" style={{ fontFamily: 'Urbanist, sans-serif' }}>OG0006605</td>
                <td className="px-3 py-2 text-xs text-gray-700 border-r border-gray-200" style={{ fontFamily: 'Urbanist, sans-serif' }}>11.67</td>
                <td className="px-3 py-2 text-xs text-gray-700 border-r border-gray-200" style={{ fontFamily: 'Urbanist, sans-serif' }}>1.15E-02</td>
                <td className="px-3 py-2 text-xs text-gray-700 border-r border-gray-200" style={{ fontFamily: 'Urbanist, sans-serif' }}>Lg7742Ab007g004030</td>
                <td className="px-3 py-2 text-xs text-gray-700 border-r border-gray-200" style={{ fontFamily: 'Urbanist, sans-serif' }}>Lj7182a07Tg003120_T002</td>
                <td className="bg-orange-300 px-3 py-2 text-xs text-gray-700 border-r border-gray-200" style={{ fontFamily: 'Urbanist, sans-serif' }}>Lm9252a007g003170_T001</td>
                <td className="px-3 py-2 text-xs text-gray-700 border-r border-gray-200" style={{ fontFamily: 'Urbanist, sans-serif' }}>Sp9509d005g007210</td>
                <td className="px-3 py-2 text-xs text-gray-700" style={{ fontFamily: 'Urbanist, sans-serif' }}>Auxin transport protein</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-3 py-2 text-xs text-blue-600 font-semibold border-r border-gray-200" style={{ fontFamily: 'Urbanist, sans-serif' }}>OG0000129</td>
                <td className="px-3 py-2 text-xs text-gray-700 border-r border-gray-200" style={{ fontFamily: 'Urbanist, sans-serif' }}>10.54</td>
                <td className="px-3 py-2 text-xs text-gray-700 border-r border-gray-200" style={{ fontFamily: 'Urbanist, sans-serif' }}>1.06E-02</td>
                <td className="px-3 py-2 text-xs text-gray-700 border-r border-gray-200" style={{ fontFamily: 'Urbanist, sans-serif' }}>Lg7742Ab012g008460</td>
                <td className="px-3 py-2 text-xs text-gray-700 border-r border-gray-200" style={{ fontFamily: 'Urbanist, sans-serif' }}>Lj7182a08Mg002570_T001</td>
                <td className="px-3 py-2 text-xs text-gray-700 border-r border-gray-200" style={{ fontFamily: 'Urbanist, sans-serif' }}>Lm9252a012g002120_T001</td>
                <td className="px-3 py-2 text-xs text-gray-700 border-r border-gray-200" style={{ fontFamily: 'Urbanist, sans-serif' }}>Sp9509d013g004070</td>
                <td className="px-3 py-2 text-xs text-gray-700" style={{ fontFamily: 'Urbanist, sans-serif' }}>Translation initiation factor eIF3 subunit 135</td>
              </tr>
              <tr className="bg-gray-50 hover:bg-gray-100">
                <td className="px-3 py-2 text-xs text-blue-600 font-semibold border-r border-gray-200" style={{ fontFamily: 'Urbanist, sans-serif' }}>OG0005311</td>
                <td className="px-3 py-2 text-xs text-gray-700 border-r border-gray-200" style={{ fontFamily: 'Urbanist, sans-serif' }}>10.34</td>
                <td className="px-3 py-2 text-xs text-gray-700 border-r border-gray-200" style={{ fontFamily: 'Urbanist, sans-serif' }}>1.04E-02</td>
                <td className="bg-green-500 text-white px-3 py-2 text-xs text-gray-700 border-r border-gray-200" style={{ fontFamily: 'Urbanist, sans-serif' }}>Lg7742Ab011g008270</td>
                <td className="px-3 py-2 text-xs text-gray-700 border-r border-gray-200" style={{ fontFamily: 'Urbanist, sans-serif' }}>Lj7182a11Tg007360_T001</td>
                <td className="px-3 py-2 text-xs text-gray-700 border-r border-gray-200" style={{ fontFamily: 'Urbanist, sans-serif' }}>Lm9252a011g007960_T001</td>
                <td className="px-3 py-2 text-xs text-gray-700 border-r border-gray-200" style={{ fontFamily: 'Urbanist, sans-serif' }}>Sp9509d018g007030</td>
                <td className="px-3 py-2 text-xs text-gray-700" style={{ fontFamily: 'Urbanist, sans-serif' }}>Cell division cycle and apoptosis regulator protein</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-3 py-2 text-xs text-blue-600 font-semibold border-r border-gray-200" style={{ fontFamily: 'Urbanist, sans-serif' }}>OG0006123</td>
                <td className="px-3 py-2 text-xs text-gray-700 border-r border-gray-200" style={{ fontFamily: 'Urbanist, sans-serif' }}>10.37</td>
                <td className="px-3 py-2 text-xs text-gray-700 border-r border-gray-200" style={{ fontFamily: 'Urbanist, sans-serif' }}>1.05E-02</td>
                <td className="bg-green-500 text-white px-3 py-2 text-xs text-gray-700 border-r border-gray-200" style={{ fontFamily: 'Urbanist, sans-serif' }}>Lg7742Ab003g002040</td>
                <td className="px-3 py-2 text-xs text-gray-700 border-r border-gray-200" style={{ fontFamily: 'Urbanist, sans-serif' }}>Lj7182a03Tg001560_T001</td>
                <td className="px-3 py-2 text-xs text-gray-700 border-r border-gray-200" style={{ fontFamily: 'Urbanist, sans-serif' }}>Lm9252a003g001710_T001</td>
                <td className="px-3 py-2 text-xs text-gray-700 border-r border-gray-200" style={{ fontFamily: 'Urbanist, sans-serif' }}>Sp9509d002g010680</td>
                <td className="px-3 py-2 text-xs text-gray-700" style={{ fontFamily: 'Urbanist, sans-serif' }}>atatg2,atg2</td>
              </tr>
              <tr className="bg-gray-50 hover:bg-gray-100">
                <td className="px-3 py-2 text-xs text-blue-600 font-semibold border-r border-gray-200" style={{ fontFamily: 'Urbanist, sans-serif' }}>OG0005227</td>
                <td className="px-3 py-2 text-xs text-gray-700 border-r border-gray-200" style={{ fontFamily: 'Urbanist, sans-serif' }}>11.48</td>
                <td className="px-3 py-2 text-xs text-gray-700 border-r border-gray-200" style={{ fontFamily: 'Urbanist, sans-serif' }}>1.69E-02</td>
                <td className="px-3 py-2 text-xs text-gray-700 border-r border-gray-200" style={{ fontFamily: 'Urbanist, sans-serif' }}>Lg7742Ab009g012850</td>
                <td className="px-3 py-2 text-xs text-gray-700 border-r border-gray-200" style={{ fontFamily: 'Urbanist, sans-serif' }}>Lj7182a09Tg009790_T001</td>
                <td className="bg-orange-300 px-3 py-2 text-xs text-gray-700 border-r border-gray-200" style={{ fontFamily: 'Urbanist, sans-serif' }}>Lm9252a009g011520_T001</td>
                <td className="px-3 py-2 text-xs text-gray-700 border-r border-gray-200" style={{ fontFamily: 'Urbanist, sans-serif' }}>Sp9509d001g000110</td>
                <td className="px-3 py-2 text-xs text-gray-700" style={{ fontFamily: 'Urbanist, sans-serif' }}>E3 ubiquitin-protein ligase</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-3 py-2 text-xs text-blue-600 font-semibold border-r border-gray-200" style={{ fontFamily: 'Urbanist, sans-serif' }}>OG0006436</td>
                <td className="px-3 py-2 text-xs text-gray-700 border-r border-gray-200" style={{ fontFamily: 'Urbanist, sans-serif' }}>11.14</td>
                <td className="px-3 py-2 text-xs text-gray-700 border-r border-gray-200" style={{ fontFamily: 'Urbanist, sans-serif' }}>1.16E-02</td>
                <td className="px-3 py-2 text-xs text-gray-700 border-r border-gray-200" style={{ fontFamily: 'Urbanist, sans-serif' }}>Lg7742Ab005g013530</td>
                <td className="px-3 py-2 text-xs text-gray-700 border-r border-gray-200" style={{ fontFamily: 'Urbanist, sans-serif' }}>Lj7182a05Tg010900_T001</td>
                <td className="px-3 py-2 text-xs text-gray-700 border-r border-gray-200" style={{ fontFamily: 'Urbanist, sans-serif' }}>Lm9252a005g011820_T001</td>
                <td className="bg-orange-300 px-3 py-2 text-xs text-gray-700 border-r border-gray-200" style={{ fontFamily: 'Urbanist, sans-serif' }}>Sp9509d003g011520</td>
                <td className="px-3 py-2 text-xs text-gray-700" style={{ fontFamily: 'Urbanist, sans-serif' }}>WD domain containing protein</td>
              </tr>
              <tr className="bg-gray-50 hover:bg-gray-100">
                <td className="px-3 py-2 text-xs text-blue-600 font-semibold border-r border-gray-200" style={{ fontFamily: 'Urbanist, sans-serif' }}>OG0006848</td>
                <td className="px-3 py-2 text-xs text-gray-700 border-r border-gray-200" style={{ fontFamily: 'Urbanist, sans-serif' }}>11.56</td>
                <td className="px-3 py-2 text-xs text-gray-700 border-r border-gray-200" style={{ fontFamily: 'Urbanist, sans-serif' }}>2.70E-02</td>
                <td className="px-3 py-2 text-xs text-gray-700 border-r border-gray-200" style={{ fontFamily: 'Urbanist, sans-serif' }}>Lg7742Ab010g006900</td>
                <td className="px-3 py-2 text-xs text-gray-700 border-r border-gray-200" style={{ fontFamily: 'Urbanist, sans-serif' }}>Lj7182a10Tg005290_T002</td>
                <td className="px-3 py-2 text-xs text-gray-700 border-r border-gray-200" style={{ fontFamily: 'Urbanist, sans-serif' }}>Lm9252a010g005620_T001</td>
                <td className="bg-green-500 text-white px-3 py-2 text-xs text-gray-700 border-r border-gray-200" style={{ fontFamily: 'Urbanist, sans-serif' }}>Sp9509d011g005360</td>
                <td className="px-3 py-2 text-xs text-gray-700" style={{ fontFamily: 'Urbanist, sans-serif' }}>Nuclear chaperone required for maturation and nuclear export of pre-60S ribosome subunits</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-3 py-2 text-xs text-blue-600 font-semibold border-r border-gray-200" style={{ fontFamily: 'Urbanist, sans-serif' }}>OG0008145</td>
                <td className="px-3 py-2 text-xs text-gray-700 border-r border-gray-200" style={{ fontFamily: 'Urbanist, sans-serif' }}>10.78</td>
                <td className="px-3 py-2 text-xs text-gray-700 border-r border-gray-200" style={{ fontFamily: 'Urbanist, sans-serif' }}>3.09E-02</td>
                <td className="px-3 py-2 text-xs text-gray-700 border-r border-gray-200" style={{ fontFamily: 'Urbanist, sans-serif' }}>Lg7742Ab002g017940</td>
                <td className="px-3 py-2 text-xs text-gray-700 border-r border-gray-200" style={{ fontFamily: 'Urbanist, sans-serif' }}>Lj7182a02Tg015180_T001</td>
                <td className="px-3 py-2 text-xs text-gray-700 border-r border-gray-200" style={{ fontFamily: 'Urbanist, sans-serif' }}>Lm9252a002g016660_T001</td>
                <td className="bg-green-500 text-white px-3 py-2 text-xs text-gray-700 border-r border-gray-200" style={{ fontFamily: 'Urbanist, sans-serif' }}>Sp9509d004g000350</td>
                <td className="px-3 py-2 text-xs text-gray-700" style={{ fontFamily: 'Urbanist, sans-serif' }}>DNA polymerase epsilon catalytic subunit A</td>
              </tr>
              <tr className="bg-gray-50 hover:bg-gray-100">
                <td className="px-3 py-2 text-xs text-blue-600 font-semibold border-r border-gray-200" style={{ fontFamily: 'Urbanist, sans-serif' }}>OG0001101</td>
                <td className="px-3 py-2 text-xs text-gray-700 border-r border-gray-200" style={{ fontFamily: 'Urbanist, sans-serif' }}>10.17</td>
                <td className="px-3 py-2 text-xs text-gray-700 border-r border-gray-200" style={{ fontFamily: 'Urbanist, sans-serif' }}>1.94E-02</td>
                <td className="px-3 py-2 text-xs text-gray-700 border-r border-gray-200" style={{ fontFamily: 'Urbanist, sans-serif' }}>Lg7742Ab005g007530</td>
                <td className="px-3 py-2 text-xs text-gray-700 border-r border-gray-200" style={{ fontFamily: 'Urbanist, sans-serif' }}>Lj7182a05Tg006230_T009</td>
                <td className="px-3 py-2 text-xs text-gray-700 border-r border-gray-200" style={{ fontFamily: 'Urbanist, sans-serif' }}>Lm9252a005g006950_T008</td>
                <td className="bg-green-500 text-white px-3 py-2 text-xs text-gray-700 border-r border-gray-200" style={{ fontFamily: 'Urbanist, sans-serif' }}>Sp9509d003g006650</td>
                <td className="px-3 py-2 text-xs text-gray-700" style={{ fontFamily: 'Urbanist, sans-serif' }}>Regulates circadian rhythms</td>
              </tr>
            </tbody>
          </table>
          <div className="bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600 mt-3 p-4" style={{ fontFamily: 'Urbanist, sans-serif' }}>
                <strong>Fig 9:</strong>   Summarized table of candidate genes identified by our workflow. Twenty orthogroups with rlog normalized expression mean above 10, the lowest coefficient of variance and reasonable ontology of all genes included are shown in the table. Genes with MoClo compatible promoter regions are marked green and were directly selected for experimental evaluation, all unmarked are incompatible. Orange marked genes were chosen for synthesis without BbsI restriction sites - such synthesized promoters regions were also experimentally evaluated.
              </p>
            </div>
        </div>
      </div>


        <h1 className="text-3xl font-bold mb-2 mt-16" style={{ fontFamily: "Space Grotesk, sans-serif" }}>Promoter region</h1>


        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-8">
 
            
            <div className="bg-gray-50 rounded-lg">
              
              
              <div className="bg-white rounded">
                <img src="https://static.igem.wiki/teams/5642/images/toolbox/promoterssilico/figure10.webp" alt="Large Tray Growth Curve" className="w-full h-auto" />
              </div>

              <p className="text-sm text-gray-600 mt-3 p-4" style={{ fontFamily: 'Urbanist, sans-serif' }}>
                <strong>Fig 10:</strong>   Schematic representation of a gene region showing promoter (orange), TSS (green), UTR (red), start codon ATG (light blue), and the CDS (dark blue; coding sequence, gene of interest). 
              </p>
            </div>

            <div className="flex items-center">
              <p className=" leading-relaxed" style={{ fontFamily: 'Urbanist, sans-serif' }}>
                          The distance of promoter region from transcription starting site (TSS) varies strongly, from tens of bp to several kbp. The gold standard is to search for promoter sequences within 2kbp upstream of the TSS. However, it is known that the untranslated region (UTR), located between the TSS and the start codon (ATG), also influences gene expression levels, particularly through post-transcriptional regulation mechanisms (Dassi et al., 2024) [21], and we had to take this into account since the exact UTR length is not annotated for most genes.

                <br/><br/>
                 Therefore, we evaluated promoter sequences concatenated with the UTR, which could be directly ligated to the gene during transformation experiments. For laboratory evaluation, the promoter+UTR regions were defined as 2 kbp upstream from the ATG (start of the coding sequence, CDS).

              </p>
              
            </div>

          </div>  


        <h1 className="text-3xl font-bold mb-6 mt-16" style={{ fontFamily: "Space Grotesk, sans-serif" }}>MoClo compatibility</h1>

        <p className="leading-relaxed pt-5" style={{ fontFamily: "Urbanist, sans-serif" }}>
          Experimental evaluation of promoter strength requires the assembly of a plasmid containing the promoter sequence using the MoClo protocol. This method utilizes restriction enzyme BbsI, which recognizes specific restriction sites artificially added upstream and downstream of the promoter part. Any natively occurring BbsI restriction site within the promoter sequence would interfere with the MoClo workflow. We have therefore filtered out promoters containing such sites, and for some promoters, BbsI recognition sites were removed and the sequences were synthesized via Twist, obtaining the final set of promoter sequences ready for experimental evaluation.
        </p>

        <h1 className="text-3xl font-bold mb-6 mt-16" style={{ fontFamily: "Space Grotesk, sans-serif" }}>Summary</h1>


        <p className="leading-relaxed pt-5" style={{ fontFamily: "Urbanist, sans-serif" }}>
          We have analyzed transcriptomic data of four Lemnoideae species and identified candidate promoter regions that promise ideal properties for stable and high expression of genes of interest in transformed duckweed. Groups of genes, that bear the same functions interspecially were identified and used for picking of the highest and the most equally expressed groups. Housekeeping genes with known functions were preferred. Final amount of 17 promoter+UTR regions were suggested for wet lab evaluation. 
        </p>


        



      <References references={Reference} />      


       



      </div>
    </div>
  );
};


export default PromoterLibrary;


const Reference = [
    {
        id: 1,
        text: "Bandopadhyay R, Haque I, Singh D, Mukhopadhyay K. Levels and Stability of Expression of Transgenes. Transgenic Crop Plants. 2010:145–86. doi: 10.1007/978-3-642-04809-8_5. PMCID: PMC7122870."
    },
    {
        id: 2,
        text: "Wei C, Hu Z, Wang S, Tan X, Jin Y, Yi Z, He K, Zhao L, Chu Z, Fang Y, Chen S, Liu P, Zhao H. An endogenous promoter LpSUT2 discovered in duckweed: a promising transgenic tool for plants. Front Plant Sci. 2024 Apr 3;15:1368284. doi: 10.3389/fpls.2024.1368284. PMID: 38638348; PMCID: PMC11025394."
    },
    {
        id: 3,
        text: "Iyer LM, Kumpatla SP, Chandrasekharan MB, Hall TC. Transgene silencing in monocots. Plant Mol Biol. 2000 Jun;43(2-3):323-46. doi: 10.1023/a:1006412318311. PMID: 10999414."
    },
    {
        id: 4,
        text: "Wang PH, Kumar S, Zeng J, McEwan R, Wright TR, Gupta M. Transcription Terminator-Mediated Enhancement in Transgene Expression in Maize: Preponderance of the AUGAAU Motif Overlapping With Poly(A) Signals. Front Plant Sci. 2020 Oct 14;11:570778. doi: 10.3389/fpls.2020.570778. PMID: 33178242; PMCID: PMC7591816."
    },
    {
        id: 5,
        text: "Christensen AH, Quail PH. Ubiquitin promoter-based vectors for high-level expression of selectable and/or screenable marker genes in monocotyledonous plants. Transgenic Res. 1996 May;5(3):213-8. doi: 10.1007/BF01969712. PMID: 8673150."
    },
    {
        id: 6,
        text: "Yasmeen E, Wang J, Riaz M, Zhang L, Zuo K. Designing artificial synthetic promoters for accurate, smart, and versatile gene expression in plants. Plant Commun. 2023 Jul 10;4(4):100558. doi: 10.1016/j.xplc.2023.100558. Epub 2023 Feb 9. PMID: 36760129; PMCID: PMC10363483."
    },
    {
        id: 7,
        text: "Villao-Uzho L, Chávez-Navarrete T, Pacheco-Coello R, Sánchez-Timm E, Santos-Ordóñez E. Plant Promoters: Their Identification, Characterization, and Role in Gene Regulation. Genes (Basel). 2023 Jun 6;14(6):1226. doi: 10.3390/genes14061226. PMID: 37372407; PMCID: PMC10298551."
    },
    {
        id: 8,
        text: "Ernst E, Abramson B, Acosta K, Hoang PTN, Mateo-Elizalde C, Schubert V, Pasaribu B, Hartwick N, Colt K, Aylward A, Ramu U, Birchler JA, Schubert I, Lam E, Michael TP, Martienssen RA. The genomes and epigenomes of aquatic plants (Lemnaceae) promote triploid hybridization and clonal reproduction. bioRxiv 2023.08.02.551673; doi: https://doi.org/10.1101/2023.08.02.551673",
        url: "https://doi.org/10.1101/2023.08.02.551673"
    },
    {
        id: 9,
        text: "Dombey R, Buendía-Ávila D, Barragán-Borrero V, Diezma-Navas L, Ponce-Mañe A, Vargas-Guerrero JM, Elias R, Marí-Ordóñez A. Atypical epigenetic and small RNA control of degenerated transposons and their fragments in clonally reproducing Spirodela polyrhiza. Genome Res. 2025 Mar 18;35(3):522-544. doi: 10.1101/gr.279532.124. PMID: 40037843; PMCID: PMC11960707."
    },
    {
        id: 10,
        text: "Andrews, S. (2010). FastQC: A Quality Control Tool for High Throughput Sequence Data [Online]. Available online at: http://www.bioinformatics.babraham.ac.uk/projects/fastqc/",
        url: "http://www.bioinformatics.babraham.ac.uk/projects/fastqc/"
    },
    {
        id: 11,
        text: "Ewels P, Magnusson M, Lundin S, Käller M. MultiQC: summarize analysis results for multiple tools and samples in a single report. Bioinformatics. 2016 Oct 1;32(19):3047-8. doi: 10.1093/bioinformatics/btw354. Epub 2016 Jun 16. PMID: 27312411; PMCID: PMC5039924."
    },
    {
        id: 12,
        text: "Felix Krueger, Frankie James, Phil Ewels, Ebrahim Afyounian, Michael Weinstein, Benjamin Schuster-Boeckler, Gert Hulselmans, & sclamons. (2023). FelixKrueger/TrimGalore: v0.6.10 - add default decompression path (0.6.10). Zenodo. https://doi.org/10.5281/zenodo.7598955",
        url: "https://doi.org/10.5281/zenodo.7598955"
    },
    {
        id: 13,
        text: "Martin, M. (2011). Cutadapt removes adapter sequences from high-throughput sequencing reads. EMBnet.journal, 17(1), pp. 10-12. doi:https://doi.org/10.14806/ej.17.1.200",
        url: "https://doi.org/10.14806/ej.17.1.200"
    },
    {
        id: 14,
        text: "Patro, R., Duggal, G., Love, M. I., Irizarry, R. A., & Kingsford, C. (2017). Salmon provides fast and bias-aware quantification of transcript expression. Nature Methods."
    },
    {
        id: 15,
        text: "Dobin, Alexander et al. \"STAR: ultrafast universal RNA-seq aligner.\" Bioinformatics (Oxford, England) vol. 29,1 (2013): 15-21. doi:10.1093/bioinformatics/bts635"
    },
    {
        id: 16,
        text: "Liao Y, Smyth GK and Shi W (2014). featureCounts: an efficient general purpose program for assigning sequence reads to genomic features. Bioinformatics, 30(7):923-30."
    },
    {
        id: 17,
        text: "Yang EJY, Maranas CJ, Nemhauser JL. A comparative analysis of stably expressed genes across diverse angiosperms exposes flexibility in underlying promoter architecture. G3 (Bethesda). 2023 Nov 1;13(11):jkad206. doi: 10.1093/g3journal/jkad206. PMID: 37697043; PMCID: PMC10627262."
    },
    {
        id: 18,
        text: "Anders S, Huber W. Differential expression analysis for sequence count data. Genome Biol. 2010;11(10):R106. doi: 10.1186/gb-2010-11-10-r106. Epub 2010 Oct 27. PMID: 20979621; PMCID: PMC3218662."
    },
    {
        id: 19,
        text: "Huerta-Cepas J, Szklarczyk D, Heller D, Hernández-Plaza A, Forslund SK, Cook H, Mende DR, Letunic I, Rattei T, Jensen LJ, von Mering C, Bork P. eggNOG 5.0: a hierarchical, functionally and phylogenetically annotated orthology resource based on 5090 organisms and 2502 viruses. Nucleic Acids Res. 2019 Jan 8;47(D1):D309-D314. doi: 10.1093/nar/gky1085. PMID: 30418610; PMCID: PMC6324079."
    },
    {
        id: 20,
        text: "Cantalapiedra CP, Hernández-Plaza A, Letunic I, Bork P, Huerta-Cepas J. eggNOG-mapper v2: Functional Annotation, Orthology Assignments, and Domain Prediction at the Metagenomic Scale. Mol Biol Evol. 2021 Dec 9;38(12):5825-5829. doi: 10.1093/molbev/msab293. PMID: 34597405; PMCID: PMC8662613."
    },
    {
        id: 21,
        text: "Yao C, Yin Y, Li Q, Zhang H, Zhang Y, Shao Q, Liu Q, Ren Y, Cai M. Nucleotide distribution analysis of 5'UTRs in genome-scale directs their redesign and expression regulation in yeast. Metab Eng. 2025 Mar;88:113-123. doi: 10.1016/j.ymben.2024.12.008. Epub 2024 Dec 28. PMID: 39733855."
    }
]