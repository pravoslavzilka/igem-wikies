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
    content: ['Content for phytoremediation chassis would go here.'],
    imageUrl: phytoremediationImageUrl
  },
  'recombinant': {
    title: 'Recombinant Proteins Factory',
    content: ['Content for recombinant proteins factory would go here.'],
    imageUrl: recombinantImageUrl
  },
  'monocot': {
    title: 'Plant Monocot Model Organism',
    content: ['Content for plant monocot model organism would go here.'],
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
      'Some duckweed are approved for human consumption - recognized as GRAS in the USA and authorized as a novel food in the EU for use in protein-rich food products'
    ],
    imageUrl: foodImageUrl
  },
  'phytoremediation-status': {
    title: 'Phytoremediation',
    content: ['Content for phytoremediation status would go here.'],
    imageUrl: phytoremediationStatusImageUrl
  },
  'biomanufacturing': {
    title: 'Biomanufacturing',
    content: ['Content for biomanufacturing would go here.'],
    imageUrl: biomanufacturingImageUrl
  },
  'basic-research': {
    title: 'Basic Research',
    content: ['Content for basic research would go here.'],
    imageUrl: basicResearchImageUrl
  }
});