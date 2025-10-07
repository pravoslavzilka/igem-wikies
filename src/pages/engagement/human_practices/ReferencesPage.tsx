import References from "../../../components/References.tsx";

const references = [
    {
        id: 1,
        text: "Garcia-Garcia, J. D., Van Gelder, K., Joshi, J., Bathe, U., Leong, B. J., Bruner, S. D., Liu, C. C., & Hanson, A. D. (2022). Using continuous directed evolution to improve enzymes for plant applications. Plant Physiology, 188(2), 971–983. https://doi.org/10.1093/plphys/kiab500",
        url: "https://doi.org/10.1093/plphys/kiab500",
    },
    {
        id: 2,
        text: "Matsuoka, A., & Zhao, X. (2023, December 14). Split GFP assay to show chloroplast targeting of Agrobacterium VirD2 protein (preprint). bioRxiv. https://doi.org/10.1101/2023.12.14.571705v1",
        url: "https://doi.org/10.1101/2023.12.14.571705v1",
    },
    {
        id: 3,
        text: "Odahara, M., Hori, Y., Itami, J., Watanabe, K., & Numata, K. (2022). Functional peptide-mediated plastid transformation in tobacco, rice, and kenaf. Frontiers in Plant Science, 13, Article 989310. https://doi.org/10.3389/fpls.2022.989310",
        url: "https://doi.org/10.3389/fpls.2022.989310",
    },
    {
        id: 4,
        text: "Rascón-Cruz, Q., Valdez-Ortega, M., Rodríguez-Durán, R., García-García, V., & Rojas-Hernández, S. (2021). Plastid transformation: Advances and challenges for its application. Chilean Journal of Agricultural Research, 81(2), 221–231. https://doi.org/10.4067/S0718-58392021000200221",
        url: "https://doi.org/10.4067/S0718-58392021000200221",
    },
    {
        id: 5,
        text: "IGERT. (2012, June 13). Chloroplast transformation in duckweed [Project spotlight]. Integrative Graduate Education and Research Traineeship (IGERT). https://www.igert.org/spotlights/3863.html",
        url: "https://www.igert.org/spotlights/3863.html",
    },
    {
        id: 6,
        text: "Okuzaki, A., Takahashi, Y., Kuroda, H., Tsuboi, H., & Kodama, Y. (2020). A novel strategy for promoting homoplasmic plastid transformants in plants. Frontiers in Plant Science, 11, 1356. https://doi.org/10.3389/fpls.2020.01356",
        url: "https://doi.org/10.3389/fpls.2020.01356",
    },
    {
        id: 7,
        text: "Inckemann, R., Zerulla, K., Schölz, L., Wurbs, D., Repp, M., Scharff, L. B., & Bock, R. (2024, May 8). Advancing chloroplast synthetic biology through high-throughput plastome engineering of Chlamydomonas reinhardtii (Preprint). bioRxiv. https://doi.org/10.1101/2024.05.08.593163",
        url: "https://doi.org/10.1101/2024.05.08.593163",
    },
    {
        id: 8,
        text: "Lim, S. D., Yim, W. C., Liu, D., Hu, R., Yang, X., & Cushman, J. C. (2018). A Vitis vinifera basic helix–loop–helix transcription factor enhances plant cell size, vegetative biomass and reproductive yield. Plant Biotechnology Journal, 16(9), 1595–1615. https://doi.org/10.1111/pbi.12988",
        url: "https://doi.org/10.1111/pbi.12988",
    },
    {
        id: 9,
        text: "Wei, Z., Zhang, H., Fang, M., Lin, S., Zhu, M., Li, Y., Jiang, L., Cui, T., Cui, Y., Kui, H., Peng, L., Gou, X., & Li, J. (2023). The Arabidopsis transcription factor COG1 acts as a key regulator of plant biomass by promoting photosynthesis and starch accumulation. Molecular Plant, 16(11), 1759–1772. https://doi.org/10.1016/j.molp.2023.09.011",
        url: "https://doi.org/10.1016/j.molp.2023.09.011",
    },
    {
        id: 10,
        text: "Yu, L.-H., Wu, J., Tang, H., Yuan, Y., Wang, S.-M., Wang, Y.-P., Zhu, Q.-S., Lu, S.-G., & Xiang, C.-B. (2016). Overexpression of Arabidopsis NLP7 improves plant growth under both nitrogen-limiting and -sufficient conditions by enhancing nitrogen and carbon assimilation. Scientific Reports, 6, Article 27795. https://doi.org/10.1038/srep27795",
        url: "https://doi.org/10.1038/srep27795",
    },
    {
        id: 11,
        text: "Ma, N., Wang, W., Qiu, S., Kang, Z., Che, S., Wang, G., Huang, J. (2013). Overexpression of OsEXPA8, a root-specific gene, increases root growth and root system architecture by facilitating cell elongation. PLOS ONE, 8(10), e75997. https://doi.org/10.1371/journal.pone.0075997",
        url: "https://doi.org/10.1371/journal.pone.0075997",
    },
    {
        id: 12,
        text: "Yang, J., Zhao, X., Cheng, K., Du, H., Ouyang, Y., Chen, J., Qiu, S., Huang, J., & Jiang Y. (2018). A frond transformation system mediated by Agrobacterium tumefaciens in Lemna minor. Plant Molecular Biology, 96(6), 555–567. https://doi.org/10.1007/s11103-018-0778-x",
        url: "https://doi.org/10.1007/s11103-018-0778-x",
    },
    {
        id: 13,
        text: "Dombey, R., Buenedia-Avila, D., Barragan-Borrero, V., Diezma-Navas, L., Ponce-Mafe, A., Vargas-Guerrero, J. M., Elias, R., & Mari-Ordonez, A. (2025). Atypical epigenetic and small RNA control of degenerated transposons and their fragments in clonally reproducing Spirodela polyrhiza. Preprint). bioRxiv. https://doi.org/10.1101/2024.12.27.589232",
        url: "https://doi.org/10.1101/2024.12.27.589232",
    },
    {
        id: 14,
        text: "Barragán-Borrero, V., de Santana Lopes, A., Rodrigues Batista, E. D., Höfer, M., Elias, R., Xu, S., Inckemann, R., & others. (2025, September 1). Strain procedures, and tools for reproducible genetic transformation and genome editing of Spirodela polyrhiza (L.) Schleid Preprint). bioRxiv. https://doi.org/10.1101/2025.08.28.672806",
        url: "https://doi.org/10.1101/2025.08.28.672806",
    },
    {
        id: 15,
        text: "Olhoft, P. M., Flagel, L. E., Donovan, C. M., & Somers, D. A. (2003). Efficient soybean transformation using Agrobacterium and sonication-assisted in planta protocol. Plant Cell Reports, 22(7), 478–482. https://doi.org/10.1007/s00299-003-0713-6",
        url: "https://doi.org/10.1007/s00299-003-0713-6",
    },
    {
        id: 16,
        text: "Sharma, K. K., Ananda Kumar, P., & Thorpe, T. A. (1996). In planta transformation of chickpea (Cicer arietinum L.) and pea (Pisum sativum L.) using Agrobacterium tumefaciens. Plant Cell Reports, 15(11), 731–736. https://doi.org/10.1007/BF00232442",
        url: "https://doi.org/10.1007/BF00232442",
    },
    {
        id: 17,
        text: "Rohini, K. V., & Rao, K. S. (2001). Agrobacterium-mediated transformation of peanut (Arachis hypogaea L.) through in vitro embryonic callus. Plant Science, 161(6), 917–923. https://doi.org/10.1016/S0168-9452(01)00477-9",
        url: "https://doi.org/10.1016/S0168-9452(01)00477-9",
    },
    {
        id: 18,
        text: "Zheng, L., Wan, L., Lv, Y., Li, T., Du, W., Xu, C., Hu, H., Li, J., & Lu, Z. (2024). A simple and efficient in planta transformation method based on active regeneration capacity of plants. Nature Plants, 10(2), 230–240. https://doi.org/10.1038/s41477-023-01364-7",
        url: "https://doi.org/10.1038/s41477-023-01364-7",
    },
    {
        id: 19,
        text: "Liu, P., Pan, R., Edwards, S. A., Chen, C., Xu, X., Yu, Y. J., Lin, Y., Xie, L. J., Diaz, R. B., Li, L., Li, Y., Zhang, J., Tan, J., Li, J., Gao, C., Voytas, D. F., & Qi, Y. (2024). Transposase-assisted targeted site integration for efficient plant genome engineering. Nature Biotechnology, 43(3), 593–600. https://doi.org/10.1038/s41587-023-02163-y",
        url: "https://doi.org/10.1038/s41587-023-02163-y",
    },
    {
        id: 20,
        text: "Appenroth, K. J., Sree, K. S., & Böhm, V. (2017). Nutritional value of duckweeds (Lemnaceae) as human food. Food Chemistry, 217, 266–273. https://doi.org/10.1016/j.foodchem.2016.08.116",
        url: "https://doi.org/10.1016/j.foodchem.2016.08.116",
    },
    {
        id: 21,
        text: "Ceschin, S., Crescenzo, R., Iamonico, D., Abati, S., & Traversetti, L. (2021). Duckweeds: Their utilization, metabolites and role in phytoremediation. Studies in Natural Products Chemistry, 69, 179–205. https://doi.org/10.1016/B978-0-12-820126-4.00026-0",
        url: "https://doi.org/10.1016/B978-0-12-820126-4.00026-0",
    },
    {
        id: 22,
        text: "Miltko, Renata & Majewska, Małgorzata & Frączek, N. & Kowalik, Barbara. (2024). Evaluation of the biochemical composition of the greater duckweed Spirodela polyrrhiza (L. Schleiden). Journal of Animal and Feed Sciences.",
        url: "https://doi.org/10.22358/jafs/193033/2024"
    },
    {
        id: 23,
        text: "Muslykhah, U., Suriyapha, C., Phupaboon, S., Pongsup, S., Matra, M., Dagaew, G., Sommai, S., & Wanapat, M. (2024). Potential use of Wolffia globosa powder supplementation on in vitro rumen fermentation characteristics, nutrient degradability, microbial population, and methane mitigation. Scientific Reports, 14, Article 28611.",
        url: "https://doi.org/10.1038/s41598-024-78475-3"
    }
];

export default function ReferencesPage() {
    return <References references={references}/>;
}
