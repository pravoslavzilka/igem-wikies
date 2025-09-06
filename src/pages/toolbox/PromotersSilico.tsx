import { Link } from 'react-router-dom';


const PromotersSilico = () => {
  return (
    <div className="min-h-screen bg-white p-8" style={{ fontFamily: "Urbanist, sans-serif" }}>
      <div className="max-w-6xl mx-auto">

        <h1 className="text-4xl font-bold mb-4" style={{ fontFamily: "Space Grotesk, sans-serif" }}>In silico workflow</h1>
        <p className="leading-relaxed" style={{ fontFamily: "Urbanist, sans-serif" }}>Initially, we tried to develop our own workflow for identification of highly expressed genes and their promoters in multiple duckweed species. We successfully identified the highest expressing genes and extracted their promoters based on transcriptomics data, isolated them and even tried to clone them in front of the RUBY reporter.  
        However, we were not successful so we needed to refine our workflow. After extensive literature research and consultations with Dr. Veronika Jedlíčková, iGEM Marburg 2024 team and Dr. Eric Yang, we discovered that we made several mistakes in our in silico workflow, for example not including MoClo compatibility filtering but most importantly, not comparing data across different transcriptomes. 
        We implemented the feedback we received and proceeded with the workflow we are presenting. You can see the graphical representation of our workflow in the Figure X. 
        In our in silico promoter identification of promoter sequences, we drawn an inspiration from the brilliant workflow of the endogenous part identification in Taraxacum presented by the iGEM Marburg 2024 team with their project Tarakate and the article by Zhou et al., 2023 [].
        </p>

        <img src="https://static.igem.wiki/teams/5642/images/toolbox/promoterssilico/yellow-simple-success-flowchart-instagram-post.webp" alt="Workflow Diagram" className="my-8 mx-auto" />


        <h1 className="text-3xl text-justify font-bold mb-4" style={{ fontFamily: "Space Grotesk, sans-serif" }}>Data collection</h1>
                

       <p className="text-justify leading-relaxed text-gray-800 mb-4">
          To find strong and stable promoter sequence that could drive expression of the gene of interest in the whole plant, it is ideal to analyze wider set of different transcriptomic data, which can help identify genes with the desired characteristics [1]. Such characteristics include high expression level, low expression variability across tissues, housekeeping functions, and consistent expression across developmental stages. The usual approach is to compare transcriptomic data (a) from different tissues, (b) in different developmental stages of the plant, or (c) combination of both, which allows the usage of single reference genome. However, we were not able to find such comprehensive data for duckweed species; therefore, we had to search for a different approach.

        </p>

    <div className="mb-8 flex flex-col md:flex-row md:items-start md:justify-between">
      <div className="md:w-1/2">
      
      
        <p className="text-justify leading-relaxed text-gray-800 mb-4">
          We decided to find genes that are stably expressed not across tissues, but rather across different Lemnoideae species. We gathered raw transcriptomic data and reference genomes from the Lemna.org [2] database for species L. gibba 7742, L. japonica 7182, L. minor 9252 and added data of S. polyrhiza 9509 obtained from study [3] of our advisor Arturo Marí-Ordóñez. We used this dataset to proceed with further analysis.
        </p>
        <p className="text-justify leading-relaxed text-gray-800 mb-4">
          The concepts of circular economy and sustainable agricultural practices have been at the very core of our project since its inception. As a result, our work aligns closely with several Sustainable Development Goals.
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
          First the quality of input data was checked using FastQC v0.12.1 [4] executed from MultiQC v1.27 [5] wrapper- no alarming contents were observed. Trimming wrapper Trim Galore! (0.6.10) [6] utilizes trimming engine Cutadapt (4.9) [7] to run thorough trimming workflow (Fig. 2). This includes omitting adapters - relicts from sequencing reads identification - low quality read-end bases and handling of pair-end reads. Again we ran FastQC on trimmed data to check for properly executed trimming shown by adapter content metric.

        </p>

            <div className="bg-gray-50 mt-5  mb-5 rounded-lg">
              
              
             <div className="bg-white rounded">
                <img src="https://static.igem.wiki/teams/5642/images/toolbox/promoterssilico/figure2.webp" alt="Large Tray Growth Curve" className="w-full h-auto" />
              </div>
              
              <p className="text-sm text-gray-600 mt-3 p-4" style={{ fontFamily: 'Urbanist, sans-serif' }}>
                <strong>Fig 2:</strong>  Exemplary Trim Galore! wrapper command-line execution with settings
              </p>
            </div>



        <p className="leading-relaxed pt-5" style={{ fontFamily: "Urbanist, sans-serif" }}>
          Such curated reads are prepared for mapping and assessment of expression level. Several approaches are currently available and after discussion we were considering two aligning softwares - Salmon [8] and STAR [9].  Salmon advantages from quasi-mapping of reads to transcriptome, which ensures faster calculation and lower resource dependencies. However, we have decided to use robust full-genome mapping executed by STAR (2.7.1a) software, since the transcriptome of Lemnoideae species is not reliably annotated. The STAR aligner requires index generation - preprocessing of specific files used by STAR algorithm. The reads are then aligned to reference genome (Fig. 3) and output in format of genome-read-map file BAM, that is to be analysed to quantify expression levels.

        </p>

        <div className="bg-gray-50 mt-5  mb-5 rounded-lg">
             <div className="bg-white rounded">
                <img src="https://static.igem.wiki/teams/5642/images/toolbox/promoterssilico/figure3.webp" alt="Large Tray Growth Curve" className="w-full h-auto" />
              </div>
              
              <p className="text-sm text-gray-600 mt-3 p-4" style={{ fontFamily: 'Urbanist, sans-serif' }}>
                <strong>Fig 3:</strong>  STAR aligner command-line settings
              </p>
            </div>

        <p className="leading-relaxed pt-5" style={{ fontFamily: "Urbanist, sans-serif" }}>
          FeatureCounts [10] (2.0.8) software is used for read quantification and is a common part of RNA seq analysis workflow that utilizes STAR aligner. We have ran the Rsubread::featureCount in R with feature type set to “transcript”. The final feature-count table were exported in csv with expression level provided as raw counts. 


        </p>
            <div className="bg-gray-50 mt-5  mb-5 rounded-lg">
            <div className="bg-white rounded">
                <img src="https://static.igem.wiki/teams/5642/images/toolbox/promoterssilico/figure4.webp" alt="Large Tray Growth Curve" className="w-full h-auto" />
              </div>
              
              <p className="text-sm text-gray-600 mt-3 p-4" style={{ fontFamily: 'Urbanist, sans-serif' }}>
                <strong>Fig 4:</strong>   Execution of featureCount command with settings

              </p>
            </div>


        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-8">
 
            <div className="flex items-center">
              <p className="text-gray-700 leading-relaxed" style={{ fontFamily: 'Urbanist, sans-serif' }}>
                 The whole workflow is shown step-by-step in the Fig. 5 for clarity.
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
                <strong>Fig 6:</strong>   Schematic overview of the OrthoFinder 2 workflow used for orthology inference and identification of orthogroups from proteomes of Lemnoideae species (taken from OrthoFinder tutorials by David Emms (https://davidemms.github.io).
              </p>
            </div>

            <div className="flex items-center">
              <p className=" leading-relaxed" style={{ fontFamily: 'Urbanist, sans-serif' }}>
                 The first step needed for the direct comparison of transcriptomes of different species is the identification of orthologous genes. We decided to use OrthoFinder (OF), a software tool for phylogenetic orthology inference. Orthogroups proposed by OF consist of phylogenetically close genes, suggesting they likely share identical functions even in different species. OF uses proteomes of individual species for the analysis. We have provided proteomes from Lemna.org and from study of Arturo Marí-Ordóñez mentioned above [3]. The analysis ran using OrthoFinder 2.5.5 with default settings.
                  <br /><br />
                          Orthogroups consist not only of orthologous genes – similar genes originating from different species – but also paralogous genes, which originate from the same species and result from gene duplications or pseudogene formation. To obtain a single expression level per orthogroup, we have proposed several strategies for the treatment of paralogs. After discussion with Eric Yang and based on his publication [12], only the highest expressed gene from each species in an orthogroup was considered - this avoids distortion of the expression level caused by pseudogenes and inactive duplicated genes.

              </p>
              
            </div>

          </div>  


       



        <h1 className="text-3xl font-bold mb-6 mt-16" style={{ fontFamily: "Space Grotesk, sans-serif" }}>Data normalization</h1>

        <p className="leading-relaxed pt-5" style={{ fontFamily: "Urbanist, sans-serif" }}>
          Before proceeding with the analysis, data normalization is essential since transcriptomic data can differ significantly depending on the sequencing depth, the experimental method used, and other variables. That is why raw counts of transcripts from RNAseq experiments are not directly comparable. To address this, we have proceeded with DESeq2 size factor normalization, which accounts for differences in sequencing depth and RNA composition across samples. The exact normalization protocol can be found in the study by Anders and Huber (2010) [13].
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
          Orthogroups in the 95th percentile of expression average and CV lower than 30% were picked as candidates for promoter search. As shown in Figure 7 (CV /mean expression) and Figure 8 (CV/log₂ mean  10), these filtering criteria yielded a subset of 124 candidate genes that were further analyzed as potential promoter sources.
        </p>


        <h1 className="text-3xl font-bold mb-6 mt-16" style={{ fontFamily: "Space Grotesk, sans-serif" }}>Functional annotation</h1>

        <p className="leading-relaxed pt-5" style={{ fontFamily: "Urbanist, sans-serif" }}>
          Candidate genes for promoter search and evaluation are the highest-expressed, but the biological context was not known. In order to reduce the noise introduced by unannotated genes, we performed functional annotation analysis with eggNOGmapper (<Link className='text-blue-500 hover:underline' target='_blank' to="http://eggnog-mapper.embl.de/">http://eggnog-mapper.embl.de/</Link>) [14] [15], a tool providing ontology-based annotation with GO terms and KEGG pathways across a wide range of species. The second reason for such analysis was to account for the fact that the ideal promoters are likely to be associated with housekeeping genes known for their stable expression. 
        </p>


        <p className="leading-relaxed pt-5" style={{ fontFamily: "Urbanist, sans-serif" }}>
          Orthogroups containing only reasonably annotated (not unknown) and housekeeping genes were considered. As expected, many candidates were linked to essential cellular processes such as ribosomal proteins, translation factors, or primary metabolism. The final list of 20 Orthogroups was curated manually.
        </p>


        <h1 className="text-3xl font-bold mb-6 mt-16" style={{ fontFamily: "Space Grotesk, sans-serif" }}>Promoter region</h1>


        <p className="leading-relaxed pt-5" style={{ fontFamily: "Urbanist, sans-serif" }}>
          The distance of promoter region from transcription starting site (TSS) varies strongly, from tens of bp to several kbp. The gold standard is to search for promoter sequences within 2kbp upstream of the TSS. However, it is known that the untranslated region (UTR), located between the TSS and the start codon (ATG), also influences gene expression levels, particularly through post-transcriptional regulation mechanisms (Dassi et al., 2024) [16], and we had to take this into account since the exact UTR length is not annotated for most genes.
        </p>


        <div className="mb-8 flex flex-col md:flex-row md:items-start md:justify-between">
      <div className="md:w-1/2">
      
      
        <p className="text-justify leading-relaxed text-gray-800 mb-4 mt-10">
          Therefore, we evaluated promoter sequences concatenated with the UTR, which could be directly ligated to the gene during transformation experiments. For laboratory evaluation, the promoter+UTR regions were defined as 2 kbp upstream from the ATG (start of the coding sequence, CDS).
        </p>
        
      </div>
      <div className="md:w-1/2 flex flex-col gap-2 mt-4 md:mt-0 justify-center items-center m-10">
        <div className="flex flex-row gap-4">
          <img src="https://static.igem.wiki/teams/5642/images/engagement/sustainability/e-sdg-logo-un-emblem-square-print.webp" alt="SDG Main" className="w-20 h-20 md:w-36 md:h-36 object-contain" />
          <img src="https://static.igem.wiki/teams/5642/images/engagement/sustainability/e-print-02.webp" alt="SDG 2" className="w-20 h-20 md:w-36 md:h-36 object-contain" />
          <img src="https://static.igem.wiki/teams/5642/images/engagement/sustainability/e-print-06.webp" alt="SDG 6" className="w-20 h-20 md:w-36 md:h-36 object-contain" />
        </div>
        <div className="flex flex-row gap-4">
          <img src="https://static.igem.wiki/teams/5642/images/engagement/sustainability/e-print-09.webp" alt="SDG 9"  className="w-20 h-20 md:w-36 md:h-36 object-contain" />
          <img src="https://static.igem.wiki/teams/5642/images/engagement/sustainability/e-print-12.webp" alt="SDG 12" className="w-20 h-20 md:w-36 md:h-36 object-contain" />
          <img src="https://static.igem.wiki/teams/5642/images/engagement/sustainability/e-print-13.webp" alt="SDG 13" className="w-20 h-20 md:w-36 md:h-36 object-contain" />
        </div>
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


        <p className="leading-relaxed pt-5" style={{ fontFamily: "Urbanist, sans-serif" }}>
          Wondering how the story goes on? Check our [Wet Lab Experimental Page - clickable].
        </p>






      <div className="border-t border-gray-200 pt-6 mt-12">
        <h3 className="text-lg font-bold text-gray-900 mb-4" style={{ fontFamily: "Space Grotesk, sans-serif" }}>References</h3>
        <div className="space-y-3 text-sm text-gray-700">
          <p className="leading-relaxed">
            [1] Villao-Uzho L, Chávez-Navarrete T, Pacheco-Coello R, Sánchez-Timm E, Santos-Ordóñez E. Plant Promoters: Their Identification, Characterization, and Role in Gene Regulation. Genes (Basel). 2023 Jun 6;14(6):1226. doi: 10.3390/genes14061226. PMID: 37372407; PMCID: PMC10298551.
          </p>
          <p className="leading-relaxed">
            [2] The genomes and epigenomes of aquatic plants (Lemnaceae) promote triploid hybridization and clonal reproduction. Evan Ernst, Bradley Abramson, Kenneth Acosta, Phuong T.N. Hoang, Cristian Mateo-Elizalde, Veit Schubert, Buntora Pasaribu, Nolan Hartwick, Kelly Colt, Anthony Aylward, Umamaheswari Ramu, James A. Birchler, Ingo Schubert, Eric Lam, Todd P. Michael, Robert A. Martienssen
            bioRxiv 2023.08.02.551673; doi: <Link className='text-blue-500 hover:underline' target='_blank' to="https://doi.org/10.1101/2023.08.02.551673">https://doi.org/10.1101/2023.08.02.551673</Link>
          </p>
          <p className="leading-relaxed">
            [3] Dombey R, Buendía-Ávila D, Barragán-Borrero V, Diezma-Navas L, Ponce-Mañe A, Vargas-Guerrero JM, Elias R, Marí-Ordóñez A. Atypical epigenetic and small RNA control of degenerated transposons and their fragments in clonally reproducing Spirodela polyrhiza. Genome Res. 2025 Mar 18;35(3):522-544. doi: 10.1101/gr.279532.124. PMID: 40037843; PMCID: PMC11960707.
          </p>
          <p className="leading-relaxed">
            [4] Andrews, S. (2010). FastQC: A Quality Control Tool for High Throughput Sequence Data [Online]. Available online at: <Link className='text-blue-500 hover:underline' target='_blank' to="http://www.bioinformatics.babraham.ac.uk/projects/fastqc/">http://www.bioinformatics.babraham.ac.uk/projects/fastqc/</Link>
          </p>
          <p className="leading-relaxed">
            [5] Ewels P, Magnusson M, Lundin S, Käller M. MultiQC: summarize analysis results for multiple tools and samples in a single report. Bioinformatics. 2016 Oct 1;32(19):3047-8. doi: 10.1093/bioinformatics/btw354. Epub 2016 Jun 16. PMID: 27312411; PMCID: PMC5039924.
          </p>
          <p className="leading-relaxed">
            [6] Felix Krueger, Frankie James, Phil Ewels, Ebrahim Afyounian, Michael Weinstein, Benjamin Schuster-Boeckler, Gert Hulselmans, & sclamons. (2023). FelixKrueger/TrimGalore: v0.6.10 - add default decompression path (0.6.10). Zenodo. <Link className='text-blue-500 hover:underline' target='_blank' to="https://doi.org/10.5281/zenodo.7598955">https://doi.org/10.5281/zenodo.7598955</Link>
          </p>
          <p className="leading-relaxed">
            [7] Martin, M. (2011). Cutadapt removes adapter sequences from high-throughput sequencing reads. EMBnet.journal, 17(1), pp. 10-12. doi:<Link className='text-blue-500 hover:underline' target='_blank' to="https://doi.org/10.14806/ej.17.1.200">https://doi.org/10.14806/ej.17.1.200</Link>
          </p>
          <p className="leading-relaxed">
            [8] Patro, R., Duggal, G., Love, M. I., Irizarry, R. A., & Kingsford, C. (2017). Salmon provides fast and bias-aware quantification of transcript expression. Nature Methods.
          </p>
          <p className="leading-relaxed">
            [9] Dobin, Alexander et al. “STAR: ultrafast universal RNA-seq aligner.” Bioinformatics (Oxford, England) vol. 29,1 (2013): 15-21. doi:<Link className='text-blue-500 hover:underline' target='_blank' to="https://doi.org/10.1093/bioinformatics/bts635">10.1093/bioinformatics/bts635</Link>
          </p>
          <p className="leading-relaxed">
            [10] Liao Y, Smyth GK and Shi W (2014). featureCounts: an efficient general purpose program for assigning sequence reads to genomic features. Bioinformatics, 30(7):923-30.
          </p>
          <p className="leading-relaxed">
            [11] Loll A, Reinwald H, Ayobahan SU, Göckener B, Salinas G, Schäfers C, Schlich K, Hamscher G, Eilebrecht S. Short-Term Test for Toxicogenomic Analysis of Ecotoxic Modes of Action in Lemna minor. Environ Sci Technol. 2022 Aug 16;56(16):11504-11515. doi: 10.1021/acs.est.2c01777. Epub 2022 Aug 4. PMID: 35926083; PMCID: PMC9386900.
          </p>
          <p className="leading-relaxed">
            [12] Yang EJY, Maranas CJ, Nemhauser JL. A comparative analysis of stably expressed genes across diverse angiosperms exposes flexibility in underlying promoter architecture. G3 (Bethesda). 2023 Nov 1;13(11):jkad206. doi: 10.1093/g3journal/jkad206. PMID: 37697043; PMCID: PMC10627262.
          </p>
          <p className="leading-relaxed">
            [13] Anders S, Huber W. Differential expression analysis for sequence count data. Genome Biol. 2010;11(10):R106. doi: 10.1186/gb-2010-11-10-r106. Epub 2010 Oct 27. PMID: 20979621; PMCID: PMC3218662.
          </p>
          <p className="leading-relaxed">
            [14] Huerta-Cepas J, Szklarczyk D, Heller D, Hernández-Plaza A, Forslund SK, Cook H, Mende DR, Letunic I, Rattei T, Jensen LJ, von Mering C, Bork P. eggNOG 5.0: a hierarchical, functionally and phylogenetically annotated orthology resource based on 5090 organisms and 2502 viruses. Nucleic Acids Res. 2019 Jan 8;47(D1):D309-D314. doi: 10.1093/nar/gky1085. PMID: 30418610; PMCID: PMC6324079.
          </p>
          <p className="leading-relaxed">
            [15] Cantalapiedra CP, Hernández-Plaza A, Letunic I, Bork P, Huerta-Cepas J. eggNOG-mapper v2: Functional Annotation, Orthology Assignments, and Domain Prediction at the Metagenomic Scale. Mol Biol Evol. 2021 Dec 9;38(12):5825-5829. doi: 10.1093/molbev/msab293. PMID: 34597405; PMCID: PMC8662613.
          </p>
          <p className="leading-relaxed">
            [16] Yao C, Yin Y, Li Q, Zhang H, Zhang Y, Shao Q, Liu Q, Ren Y, Cai M. Nucleotide distribution analysis of 5'UTRs in genome-scale directs their redesign and expression regulation in yeast. Metab Eng. 2025 Mar;88:113-123. doi: 10.1016/j.ymben.2024.12.008. Epub 2024 Dec 28. PMID: 39733855.
          </p>
        </div>
      </div>      



      </div>
    </div>
  );
};


export default PromotersSilico;