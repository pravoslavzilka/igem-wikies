import React from 'react';
import MapSVG from '../../components/DeepDive/MapSVG';
import { LOCATIONS } from '../../components/DeepDive/locations';
import References from '../../components/References';




export default function DuckweedDocument() {
  return (
    <div className="max-w-6xl mx-auto p-8 bg-white text-gray-900 leading-relaxed text-lg text-justify" style={{ fontFamily: 'Urbanist, serif' }}>
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Get to know duckweed better</h1>
      </div>

      {/* Introduction */}
      <div className="mb-8">
        <p className="mb-10">
          <span style={{ fontWeight: 400 }}>
            Duckweeds are small, free-floating, monocotyledonous aquatic plants
            belonging to the family{" "}
          </span>
          <em>
            <span style={{ fontWeight: 400 }}>Araceae</span>
          </em>
          <span style={{ fontWeight: 400 }}>
            , subfamily Lemnoidae. This family includes five genera:{" "}
          </span>
          <em>
            <span style={{ fontWeight: 400 }}>Spirodela</span>
          </em>
          <span style={{ fontWeight: 400 }}>, </span>
          <em>
            <span style={{ fontWeight: 400 }}>Landoltia,</span>
          </em>{" "}
          <em>
            <span style={{ fontWeight: 400 }}>Lemna</span>
          </em>
          <span style={{ fontWeight: 400 }}>, </span>
          <em>
            <span style={{ fontWeight: 400 }}>Wolffiella</span>
          </em>
          <span style={{ fontWeight: 400 }}>, and </span>
          <em>
            <span style={{ fontWeight: 400 }}>Wolffia </span>
          </em>
          <span style={{ fontWeight: 400 }}>
            [1], comprising a total of 36 recognized species [2].
          </span>
        </p>

        
        {/* Image placeholder */}
        <div className="bg-gray-200 border-gray-400  flex items-center justify-center mb-6 rounded-lg">
          <img src="https://static.igem.wiki/teams/5642/images/toolbox/deepdiveonduckweed/duckweed-original-min.webp" alt="Duckweed field" className="object-cover w-full h-full rounded-lg" />
        </div>
         
        <div className="flex flex-col md:flex-row items-start gap-6 mb-6">
          <div className="flex-1">
            <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-4">
              <p className="text-lg italic">
                The duckweed was supposedly named based on the observation that it often serves as food for 
                ducks. The name appears in Middle English as <em>dokemete</em>, literally "duck meat" or duck food [3]
              </p>
            </div>
          </div>
        </div>

        {/* Move diagram placeholder next to paragraph starting with "All of them..." */}
        <div className="flex flex-col md:flex-row items-start gap-6 mb-6">
          <div className="flex-1">
            <p className="mb-4">
              All of them share a common, highly reduced and simplified body plan. Instead of the stems and true 
              leaves, duckweeds are growing as one or a few flat bodies called fronds, measuring from under 1 mm in 
              <em>W. angusta</em> to around 15 mm in <em>S. polyrrhiza</em> in diameter. Frond shape is genus-specific, 
              ranging from oval to hemispherical, boat-shaped, or tongue-shaped [4]. While <em>Wolffiella</em> and 
              <em>Wolffia</em> species are often rootless, others produce adventitious roots [5].
            </p>
          </div>
          {/* Anatomy diagram placeholder */}
          <div className=" w-full md:w-64  flex items-center justify-center rounded-lg">
            <img src="https://static.igem.wiki/teams/5642/images/toolbox/deepdiveonduckweed/duckweed-anatomy-copy.webp" alt="Duckweed Anatomy Diagram" className="object-cover w-full h-full rounded-lg" />
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>


          <div className="col-span-1">
                <div className=" w-full md:w-64  rounded-lg">
                  <img src="https://static.igem.wiki/teams/5642/images/toolbox/deepdiveonduckweed/vegetative-reproduction-of-duckweed-copy.webp" alt="Duckweed Anatomy Diagram" className="object-cover w-full h-full rounded-lg" />
                </div>


           </div>

          <div className="col-span-3">
            <p className="mb-4">
              Duckweeds primarily reproduce vegetatively with daughter fronds emerging from lateral budding 
              pouches on the mother frond [6]. Newly formed fronds may later detach, resulting in strains of 
              genetically identical individuals, or clones. Therefore, "growth" in duckweed encompasses three processes: 
              an increase in the number of individuals in the population, the production of daughter fronds by each 
              plant and enlargement of individual cells [4].
            </p>

            <p className="mb-4">
              Despite their structural simplicity, duckweeds are among the fastest-growing flowering plants, capable 
              of doubling their biomass within 1.22 to 4.54 days under optimal conditions [7], [8]. Duckweeds can also 
              reproduce sexually by flowering, however, it is rare in nature [9].
            </p>

            <p className="mb-6">
              Duckweeds inhabit the surface of small and shallow water bodies across a wide latitudinal 
              range, from tropical to boreal zones. Local dispersal is facilitated by flowing water and 
              occasionally strong winds, while transfer on long-distance or between isolated water 
              bodies is frequently mediated epizoochorously by birds [10] and aquatic mammals [11]. 
              Combined with rapid vegetative propagation, these dispersal mechanisms enable efficient 
              colonisation and potential invasion of new aquatic habitats.
            </p>

           </div> 

           
            
           </div>
           
      </div>

      


      {/* Genus Sections */}
      <div className="space-y-8"> 
        {/* Spirodela */}
        <div className="border-l-4 border-blue-500 pl-6">
          <h2 className="text-2xl font-bold text-blue-700 mb-2">Spirodela (2 species)</h2>
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="flex-1">
              <p>
                Spirodela occupies a basal position within the Lemnoidae. Despite having the largest body plan among 
                duckweeds, it is characterised by a remarkably small genome size and one of the most reduced gene 
                repertoires of any known plant. <em>S. polyrrhiza</em> possesses a genome of approximately 158 Mb, 
                comprising 19,623 protein-coding genes [13], which is roughly 30% less than reported for 
                <em>Arabidopsis thaliana</em>. As a result, Spirodela serves as an excellent model for genomic research 
                and the study of highly conserved core pathways in plants.
              </p>
            </div>
            <div className=" w-full md:w-48  flex items-center justify-center rounded-lg">
              <img src="https://static.igem.wiki/teams/5642/images/toolbox/deepdiveonduckweed/spirodela.webp" alt="Spirodela polyrhiza" className="object-cover w-full h-full rounded-lg" />
            </div>
          </div>
        </div>

        {/* Landoltia */}
        <div className="border-l-4 border-green-500 pl-6">
          <h2 className="text-2xl font-bold text-green-700 mb-2">Landoltia (1 species)</h2>
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="flex-1">
              <p>
                <em>Landoltia punctata</em> is the sole representative of the genus Landoltia. It has shown remarkable 
                ability to rapidly accumulate a high starch content (about 45 – 60 % of dry weight) under optimised 
                cultivation conditions [14], [15], making it a promising candidate for bioethanol production.
              </p>
            </div>
            <div className=" w-full md:w-48  flex items-center justify-center rounded-lg">
              <img src="https://static.igem.wiki/teams/5642/images/toolbox/deepdiveonduckweed/landoltia.webp" alt="Spirodela polyrhiza" className="object-cover w-full h-full rounded-lg" />
            </div>
          </div>
        </div>

        {/* Lemna */}
        <div className="border-l-4 border-yellow-500 pl-6">
          <h2 className="text-2xl font-bold text-yellow-700 mb-2">Lemna (12 species)</h2>
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="flex-1">
              <p>
                Lemna is the most widely distributed duckweed genus worldwide. Some species colonise new areas so 
                successfully that they are considered invasive. The most notorious of them is <em>L. minuta</em> [4]. 
                This very ubiquity has ensured that members of this genus, particularly <em>L. minor</em> and 
                <em>L. gibba</em>, are already used in a range of practical applications. Examples include their use 
                in the phytoremediation of polluted water bodies [16] and as model organisms in ecotoxicological 
                testing [17].
              </p>
            </div>
           
            <div className=" w-full md:w-48  flex items-center justify-center rounded-lg">
              <img src="https://static.igem.wiki/teams/5642/images/toolbox/deepdiveonduckweed/lemna.webp" alt="Spirodela polyrhiza" className="object-cover w-full h-full rounded-lg" />
            </div>
          </div>
        </div>

        {/* Wolffia */}
        <div className="border-l-4 border-red-500 pl-6">
          <h2 className="text-2xl font-bold text-red-700 mb-2">Wolffia (11 species)</h2>
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="flex-1">
              <p className="mb-4">
                Members of the genus Wolffia are known for their use as animal feed. In Northern Thailand, Laos, and 
                Myanmar, <em>W. globosa</em> is even a part of traditional diet of local people [18], [19]. Their 
                suitability for human consumption is further supported by their excellent protein composition, rich 
                phytosterol content [20], and the fact that, unlike other duckweed genera, Wolffia species do not 
                accumulate oxalates as calcium oxalate crystals, which may pose health risks [21]. Top-scoring specie 
                is however <em>W. microscopica</em> (clone 2005) with its optimal amino acid profile, dietary 
                stearidonic acid presence [20] and record doubling time of 29.3 hours, gaining it a title of a 
                fastest-growing angiosperm. Similarly rapid propagation is observed in <em>Wolffia globosa</em> clone 
                9498 exhibiting a doubling time of 29.8 hours [8].
              </p>
              <p>
                Another interesting specie is <em>W. australiana</em>, which has the smallest genome within the genus 
                (354 Mb) and even greater reduction in the number of predicted protein-coding genes (~15 thousand). 
                This genetic simplification correlates with the minimal tissue complexity and absence of roots [22].
              </p>
            </div>
            <div className=" w-full md:w-48  flex items-center justify-center rounded-lg">
              <img src="https://static.igem.wiki/teams/5642/images/toolbox/deepdiveonduckweed/wolffia.webp" alt="Wolffiella" className="object-cover w-full h-full rounded-lg" />
            </div>
          </div>
        </div>

        {/* Wolffiella */}
        <div className="border-l-4 border-purple-500 pl-6">
          <h2 className="text-2xl font-bold text-purple-700 mb-2">Wolffiella (10 species)</h2>
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="flex-1">
              <p>
                Wolffiella shares several characteristics with the genus Wolffia. The plant forms extremely small fronds, 
                lacks roots, and certain species, in particular <em>W. hyalina</em>, have been proposed as a potential 
                food source for humans due to their high protein content (35%) and favourable amino acid composition [19].
              </p>
            </div>
            <div className=" w-full md:w-48  flex items-center justify-center rounded-lg">
              <img src="https://static.igem.wiki/teams/5642/images/toolbox/deepdiveonduckweed/wollfiela.webp" alt="Wolffiella" className="object-cover w-full h-full rounded-lg" />
            </div>
          </div>
        </div>
      </div>

      {/* Peers section */}
      <div className="mt-12 mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4" style={{ fontFamily: "Space Grotesk" }}>Our peers in the field of duckweed</h2>
        <div className="bg-gray-50 p-4 rounded-lg">
          <MapSVG locations={LOCATIONS} isInView={true} />
        </div>
      </div>


      <References references={Reference} />

      
    </div>
  );
}



const Reference = [
    {
        id: 1,
        text: "D. H. Les, D. J. Crawford, E. Landolt, J. D. Gabel, and R. T. Kimball, 'Phylogeny and Systematics of Lemnaceae, the Duckweed Family', Syst. Bot., vol. 27, no. 2, pp. 221–240, Apr. 2002, doi: 10.1043/0363-6445-27.2.221."
    },
    {
        id: 2,
        text: "M. Bog, K.-J. Appenroth, and K. S. Sree, 'Duckweed (Lemnaceae): Its Molecular Taxonomy', Front. Sustain. Food Syst., vol. 3, Dec. 2019, doi: 10.3389/fsufs.2019.00117."
    },
    {
        id: 3,
        text: "'duckweed', Wiktionary, the free dictionary. July 09, 2025. Accessed: Aug. 04, 2025.",
        url: "https://en.wiktionary.org/w/index.php?title=duckweed&oldid=85497111"
    },
    {
        id: 4,
        text: "K. Acosta et al., 'Return of the Lemnaceae: duckweed as a model plant system in the genomics and postgenomics era', Plant Cell, vol. 33, no. 10, pp. 3207–3234, Oct. 2021, doi: 10.1093/plcell/koab189."
    },
    {
        id: 5,
        text: "J. Yang, X. Zhao, G. Li, S. Hu, and H. Hou, 'Frond architecture of the rootless duckweed Wolffia globosa', BMC Plant Biol., vol. 21, no. 1, p. 387, Aug. 2021, doi: 10.1186/s12870-021-03165-5."
    },
    {
        id: 6,
        text: "E. Landolt, The family of Lemnaceae - A monographic study. Vol. 1. Biosystematic Investigations in the Family of Duckweeds (Lemnaceae). Geobotanischen Institutes der ETH, 1986."
    },
    {
        id: 7,
        text: "P. Ziegler, K. Adelmann, S. Zimmer, C. Schmidt, and K.-J. Appenroth, 'Relative in vitro growth rates of duckweeds (Lemnaceae) – the most rapidly growing higher plants', Plant Biol., vol. 17, no. s1, pp. 33–41, 2015, doi: 10.1111/plb.12184."
    },
    {
        id: 8,
        text: "K. S. Sree, S. Sudakaran, and K.-J. Appenroth, 'How fast can angiosperms grow? Species and clonal diversity of growth rates in the genus Wolffia (Lemnaceae)', Acta Physiol. Plant., vol. 37, no. 10, p. 204, Sept. 2015, doi: 10.1007/s11738-015-1951-3."
    },
    {
        id: 9,
        text: "A. H. Pieterse, 'Is flowering in Lemnaceae stress-induced? A review', Aquat. Bot., vol. 104, pp. 1–4, Jan. 2013, doi: 10.1016/j.aquabot.2012.08.002."
    },
    {
        id: 10,
        text: "N. E. Coughlan, T. C. Kelly, and M. A. K. Jansen, '\"Step by step\": high frequency short-distance epizoochorous dispersal of aquatic macrophytes', Biol. Invasions, vol. 19, no. 2, pp. 625–634, Feb. 2017, doi: 10.1007/s10530-016-1293-0."
    },
    {
        id: 11,
        text: "P. Hoffmann, A. Adolfo, C. Stenert, G. G. Silva, and L. Maltchik, 'Capybara ride: evidence of whole aquatic plant dispersal', Biota Neotropica, vol. 24, p. e20241629, Sept. 2024, doi: https://doi.org/10.1590/1676-0611-BN-2024-1629."
    },
    {
        id: 12,
        text: "C. L. McLAY, 'The effect of pH on the population growth of three species of duckweed: Spirodela oligorrhiza, Lemna minor and Wolffia arrhiza', Freshw. Biol., vol. 6, no. 2, pp. 125–136, 1976, doi: 10.1111/j.1365-2427.1976.tb01596.x."
    },
    {
        id: 13,
        text: "J. Pasos-Panqueva, A. Baker, and M. A. Camargo-Valero, 'Unravelling the impact of light, temperature and nutrient dynamics on duckweed growth: A meta-analysis study', J. Environ. Manage., vol. 366, p. 121721, Aug. 2024, doi: 10.1016/j.jenvman.2024.121721."
    },
    {
        id: 14,
        text: "P. V. Femeena, B. Roman, and R. A. Brennan, 'Maximizing duckweed biomass production for food security at low light intensities: Experimental results and an enhanced predictive model', Environ. Chall., vol. 11, p. 100709, Apr. 2023, doi: 10.1016/j.envc.2023.100709."
    },
    {
        id: 15,
        text: "R. Dombey et al., 'Atypical epigenetic and small RNA control of degenerated transposons and their fragments in clonally reproducing Spirodela polyrhiza', Genome Res., vol. 35, no. 3, pp. 522–544, Mar. 2025, doi: 10.1101/gr.279532.124."
    },
    {
        id: 16,
        text: "L. L. Rusoff, E. W. Blakeney, and D. D. Culley, 'Duckweeds (Lemnaceae family): a potential source of protein and amino acids', J. Agric. Food Chem., vol. 28, no. 4, pp. 848–850, July 1980, doi: 10.1021/jf60230a040."
    },
    {
        id: 17,
        text: "J. Xu, W. Cui, J. J. Cheng, and A.-M. Stomp, 'Production of high-starch duckweed and its conversion to bioethanol', Biosyst. Eng., vol. 110, no. 2, pp. 67–72, Oct. 2011, doi: 10.1016/j.biosystemseng.2011.06.007."
    },
    {
        id: 18,
        text: "A. Zayed, S. Gowthaman, and N. Terry, 'Phytoaccumulation of Trace Elements by Wetland Plants: I. Duckweed', J. Environ. Qual., vol. 27, no. 3, pp. 715–721, 1998, doi: 10.2134/jeq1998.00472425002700030032x."
    },
    {
        id: 19,
        text: "W. Wang et al., 'The Spirodela polyrhiza genome reveals insights into its neotenous reduction fast growth and aquatic lifestyle', Nat. Commun., vol. 5, no. 1, p. 3311, Feb. 2014, doi: 10.1038/ncomms4311."
    },
    {
        id: 20,
        text: "Y. Liu et al., 'The effects of photoperiod and nutrition on duckweed (Landoltia punctata) growth and starch accumulation', Ind. Crops Prod., vol. 115, pp. 243–249, May 2018, doi: 10.1016/j.indcrop.2018.02.033."
    },
    {
        id: 21,
        text: "X. Tao et al., 'Comparative transcriptome analysis to investigate the high starch accumulation of duckweed (Landoltia punctata) under nutrient starvation', Biotechnol. Biofuels, vol. 6, no. 1, p. 72, May 2013, doi: 10.1186/1754-6834-6-72."
    },
    {
        id: 22,
        text: "A. O. Ekperusi, F. D. Sikoki, and E. O. Nwachukwu, 'Application of common duckweed (Lemna minor) in phytoremediation of chemicals in the environment: State and future perspective', Chemosphere, vol. 223, pp. 285–309, May 2019, doi: 10.1016/j.chemosphere.2019.02.025."
    },
    {
        id: 23,
        text: "OECD, 'Test No. 221: Lemna sp. Growth Inhibition Test', OECD. Accessed: Aug. 07, 2025.",
        url: "https://www.oecd.org/en/publications/test-no-221-lemna-sp-growth-inhabition-test_9789264016194-en.html"
    },
    {
        id: 24,
        text: "K. Bhanthumnavin and M. G. Mcgarry, 'Wolffia arrhiza as a Possible Source of Inexpensive Protein', Nature, vol. 232, no. 5311, pp. 495–495, Aug. 1971, doi: 10.1038/232495a0."
    },
    {
        id: 25,
        text: "K.-J. Appenroth et al., 'Nutritional value of duckweeds (Lemnaceae) as human food', Food Chem., vol. 217, pp. 266–273, Feb. 2017, doi: 10.1016/j.foodchem.2016.08.116."
    },
    {
        id: 26,
        text: "K.-J. Appenroth et al., 'Nutritional Value of the Duckweed Species of the Genus Wolffia (Lemnaceae) as Human Food', Front. Chem., vol. 6, Oct. 2018, doi: 10.3389/fchem.2018.00483."
    },
    {
        id: 27,
        text: "E. Landolt and R. Kandeler, The family of Lemnaceae - A monographic study. Vol. 2. Geobotanischen Institutes der ETH, 1987."
    },
    {
        id: 28,
        text: "T. P. Michael et al., 'Genome and time-of-day transcriptome of Wolffia australiana link morphological minimization with gene loss and less growth control', Genome Res., vol. 31, no. 2, pp. 225–238, Jan. 2021, doi: 10.1101/gr.266429.120."
    }
]