export interface Reference {
  id: number;
  text: string;
  url?: string;
}

export const whatReferences: Reference[] = [
  {
    id: 1,
    text: "European Commission, Joint Research Centre. (2023). The EU agricultural outlook for markets, income and environment, 2023–2035 (JRC137180). Publications Office of the European Union.",
    url: "https://publications.jrc.ec.europa.eu/repository/bitstream/JRC137180/JRC137180_01.pdf"
  },
  {
    id: 2,
    text: "European Parliamentary Research Service. (2023). EU feed protein balance sheet: State of play (Briefing, PE 739.328). European Parliament.",
    url: "https://www.europarl.europa.eu/RegData/etudes/BRIE/2023/739328/EPRS_BRI%282023%29739328_EN.pdf"
  },
  {
    id: 3,
    text: "Molina, A., Antón, A., Oesterheld, M., & Piñeiro, G. (2024). Environmental impacts of feed–food competition in livestock production. Scientific Reports, 14(1), 2557.",
    url: "https://doi.org/10.1038/s41598-024-57522-z"
  },
  {
    id: 4,
    text: "The Cattle Site. (2023, October 23). Weekly global protein digest: USDA's EU annual and US monthly livestock reports.",
    url: "https://www.thecattlesite.com/articles/weekly-global-protein-digest-usdas-eu-annual-and-us-monthly-livestock-reports"
  },
  {
    id: 5,
    text: "World Wide Fund for Nature. (n.d.). Soy. WWF.",
    url: "https://wwf.panda.org/discover/our_focus/food_practice/sustainable_production/soy/"
  },
  {
    id: 6,
    text: "Trase. (2023). Soy deforestation 5-year total (Brazil municipalities).",
    url: "https://trase.earth/explore/spatial-data/map?country=brazil&node_type_slug=municipality&indicatorName=SOY_DEFORESTATION_5_YEAR_TOTAL&indicatorYear=2023"
  },
  {
    id: 7,
    text: "Earthsight. (2021). The secret ingredient: Europe's soy supply chains and deforestation.",
    url: "https://www.earthsight.org.uk/secret-ingredient#group-section-Introduction-kxgLdnqSpx"
  },
  {
    id: 8,
    text: "FAIRR Initiative. (2021). Index 2021: How animal waste mismanagement drives biodiversity loss and accelerates climate risk.",
    url: "https://www.fairr.org/resources/reports/index-2021-how-animal-waste-mismanagement-drives-biodiversity-loss-and-accelerates-climate-risk"
  },
  {
    id: 9,
    text: "European Commission. (n.d.). Nitrates. Environment.",
    url: "https://environment.ec.europa.eu/topics/water/nitrates_en"
  },
  {
    id: 10,
    text: "United Nations Environment Programme. (n.d.). Beat pollution: Nitrogen. UNEP.",
    url: "https://www.unep.org/interactives/beat-nitrogen-pollution/"
  }
];