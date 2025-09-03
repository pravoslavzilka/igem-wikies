import { Link } from 'react-router-dom';


const PromotersSilico = () => {
  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-3xl font-bold mb-4" style={{ fontFamily: "Space Grotesk, sans-serif" }}>Promoters in Silico</h1>
        <p className="mb-4">This is a page about in silico analysis of promoters.</p>


      <div className="border-t border-gray-200 pt-6">
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