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
      'Duckweeds, especially Wolffia globosa, have been used traditionally as food in Southeast Asia and are now gaining interest globally for their nutritional potential. With as much protein as soybeans (1), full amino acid profile (2), and a biomass doubling time of just 30 hours (3), duckweed could be a novel source of protein for animal feed or even human consumption.',
      'Nutrient analyses across all five genera confirm alignment with EFSA recommendations (4). Duckweed is also used as feed for livestock and fish (5), often surpassing corn in protein content. Though pricing limits widespread livestock use, it holds strong potential in premium pet food and functional foods.'
    ],

    imageUrl: novelProteinImageUrl
  },
  'phytoremediation': {
    title: 'Phytoremediation Chassis',
    content: [
      'Duckweeds can remove heavy metals, pharmaceutical residues (6) and nutrients like nitrates and phosphates (7) from polluted water. As floating plants, they are also easy to harvest - a key advantage. Once the contaminants are taken up, the plants can be collected and processed, enabling the safe removal of harmful substances from the environment.',
      'Adding to their value is the fact that duckweeds thrive under a wide range of conditions: tolerating pH values from 4 to 9 (8), temperatures from 6°C to 33°C (9), and adapting to environments ranging from low light to full sunlight (9). Therefore, their phytoremediation capabilities are not limited to a narrow set of conditions and can be deployed broadly.'
    ],
    imageUrl: phytoremediationImageUrl
  },
  'recombinant': {
    title: 'Recombinant Proteins Factory',
    content: [
      'Bacteria are the workhorse of bioproduction - until they need to create molecules with complex post-translational modifications (10). For that, either yeast or Chinese hamster ovary (CHO) cells are used (11). What truly sets plants apart in recombinant protein production is their scalability. You can grow millions of plants in fields, with minimal cost compared to sterile bioreactors (12).',
      'Even better: if you\'re expressing those proteins in duckweed, you can fit up to 900 m2 of surface area into a single large shipping container - resulting in hundreds of millions of plants on your ground floor. Plants with almost no gene silencing (13), allowing for high-level protein overexpression. However, the drawback is plant glycosylation – it is not identical to mammalian glycosylation (14).'
    ],
    imageUrl: recombinantImageUrl
  },
  'monocot': {
    title: 'Plant Monocot Model Organism',
    content: [
      'Most plant scientists currently work with *Arabidopsis* or tobacco as model organisms. However, since both are dicots and many staple crops are monocots, not all discoveries in these two species are directly transferable to agricultural crops (15). Duckweeds, being monocots, offer a promising alternative.',
      'As the smallest flowering plants, they reproduce primarily asexually (16) and grow extremely fast, allowing experiments to be conducted 5 to 30 times faster than with traditional model plants, depending on the comparison. On the other hand, duckweed unique traits may both illuminate fundamental plant processes and pose challenges when translating findings to other crops.'
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
      'Early efforts are already underway. Startups like **GreenOnyx** or **PlantibleFoods** are pioneers in duckweed cultivation for human use. With superior vegan greens or proteins that have egg-like properties, duckweed-based foods are slowly making their way into gastronomy!',
      'Some duckweed are approved for human consumption - recognized as GRAS in the USA (17) and authorized as a novel food in the EU (5) for use in protein-rich food products.'
    ],
    imageUrl: foodImageUrl
  },
  'phytoremediation-status': {
    title: 'Phytoremediation',
    content: [
      'Lemna minor has been shown to remove over 85% of cadmium from contaminated water by accumulating the metal in its roots (18). It also effectively removed more than 70% of ibuprofen from water through passive uptake (19). *Lemna gibba* demonstrated the ability to uptake and tolerate glyphosate, a widely used herbicide (20).',
      'Startups like **Fyto** are using duckweed to convert cow manure into protein-rich biomass, which is then fed back to the cows directly on the farm.'
    ],
    imageUrl: phytoremediationStatusImageUrl
  },
  'biomanufacturing': {
    title: 'Biomanufacturing',
    content: [
      '*Lemna punctata* has been engineered to express and secrete aprotinin, a protease inhibitor, which was successfully purified using immunoaffinity chromatography (21). Antigens against porcine epidemic diarrhoea virus and tuberculosis have also been expressed in duckweed (22). Additionally, studies have demonstrated the successful expression of avian influenza virus H5N1 antigens in *Lemna minor* (23).',
      'Companies like **Phylloceuticals** or **AlgenTech** claim they are successfully producing growth factors and antigens in duckweed species.'
    ],
    imageUrl: biomanufacturingImageUrl
  },
  'basic-research': {
    title: 'Basic Research',
    content: [
      'In the past five years, duckweed-oriented research has seen a significant surge, with over 700 peer-reviewed articles published. Five fully assembled genomes have been completed, representing three genera of *Spirodela*, *Lemna*, and *Wolffia* (16). Transcriptomic data are available for most sequenced species, often covering multiple tissues or stress conditions (16).',
      'Germplasm collections - such as those at the **Rutgers Duckweed Stock Cooperative** and **IPK Gatersleben** - preserve a wide diversity of clones across species.'
    ],
    imageUrl: basicResearchImageUrl
  }
});