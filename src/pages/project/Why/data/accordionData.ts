import { AccordionData } from '../types';

export const getAccordionData = (
  novelProteinImageUrl: string | null,
  phytoremediationImageUrl: string | null,
  recombinantImageUrl: string | null,
  monocotImageUrl: string | null
): AccordionData => ({
  'novel-protein': {
    title: 'Novel Protein Crop',
    content: [
      'Duckweeds, especially Wolffia globosa, have been used traditionally as food in Southeast Asia and are now gaining interest globally for their nutritional potential. With as much protein as soybeans, full amino acid profile, and a biomass doubling time of just 48 hours, duckweed could be a novel source of protein for animal feed or even human consumption.',
      'Nutrient analyses across all five genera confirm alignment with WHO recommendations. Duckweed is also used as feed for livestock and fish, often surpassing corn in protein content. Though pricing limits widespread livestock use, it holds strong potential in premium pet food and functional foods.'
    ],
    imageUrl: novelProteinImageUrl
  },
  'phytoremediation': {
    title: 'Phytoremediation Chassis',
    content: [
      'Duckweed\'s exceptional nutrient uptake makes it a powerful phytoremediation tool, capable of removing excess nitrogen, phosphorus, and various pollutants from water systems.',
      'Its rapid growth rate and tolerance to various environmental conditions make it ideal for treating wastewater, agricultural runoff, and contaminated water bodies while producing valuable biomass.'
    ],
    imageUrl: phytoremediationImageUrl
  },
  'recombinant': {
    title: 'Recombinant Proteins Factory',
    content: [
      'Duckweed\'s simple genetics and ability to perform complex post-translational modifications make it an attractive platform for recombinant protein production.',
      'Its aquatic nature allows for easy harvesting and processing, while its rapid growth enables quick protein production cycles for pharmaceutical and industrial applications.'
    ],
    imageUrl: recombinantImageUrl
  },
  'monocot': {
    title: 'Plant Monocot Model Organism',
    content: [
      'As one of the simplest flowering plants, duckweed serves as an excellent model organism for studying monocot plant biology and genetics.',
      'Its small genome, rapid life cycle, and ease of cultivation make it perfect for research applications in plant biology, genetics, and biotechnology.'
    ],
    imageUrl: monocotImageUrl
  }
});

export const getStatusAccordionData = (
  foodImageUrl: string | null,
  phytoremediationStatusImageUrl: string | null,
  biomanufacturingImageUrl: string | null,
  basicResearchImageUrl: string | null
): AccordionData => ({
  'food': {
    title: 'Food',
    content: [
      'Early efforts are already underway. Startups like GreenOnyx (), PlantibleFoods (), microTERRA (), and LemnaPRO () are pioneers in duckweed cultivation for human use. With superior vegan greens and proteins that have egg-like properties, duckweed-based foods are slowly making their way into gastronomy!',
      'Some duckweed are approved for human consumption - recognized as GRAS in the USA and authorized as a novel food in the EU for use in protein-rich food products.'
    ],
    imageUrl: foodImageUrl
  },
  'phytoremediation-status': {
    title: 'Phytoremediation',
    content: [
      'Several companies and research institutions are already implementing duckweed-based phytoremediation systems for water treatment.',
      'Current applications focus mainly on municipal wastewater treatment and agricultural runoff management, but the potential for large-scale environmental remediation remains largely untapped.'
    ],
    imageUrl: phytoremediationStatusImageUrl
  },
  'biomanufacturing': {
    title: 'Biomanufacturing',
    content: [
      'While promising, duckweed biomanufacturing is still in its infancy with only a few proof-of-concept studies demonstrating recombinant protein production.',
      'The field lacks standardized protocols and optimization tools that would make duckweed a viable alternative to traditional expression systems like bacteria or mammalian cells.'
    ],
    imageUrl: biomanufacturingImageUrl
  },
  'basic-research': {
    title: 'Basic Research',
    content: [
      'Research on duckweed is fragmented across various institutions with limited coordination and resource sharing.',
      'Most studies focus on specific applications rather than developing comprehensive tools and methodologies that could benefit the entire duckweed research community.'
    ],
    imageUrl: basicResearchImageUrl
  }
});