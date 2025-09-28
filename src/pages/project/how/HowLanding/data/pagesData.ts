export interface PageData {
  id: number;
  title: string;
  pageTitle: string;
  pageUrl: string;
  beforeTime: string;
  beforeDescription: string;
  beforeDetails: string;
  afterTime: string;
  afterDescription: string;
  afterDetails: string;
  bgColor: string;
  accentColor: string;
}

export const pagesData: PageData[] = [
  {
    id: 1,
    title: "Transformation Speed",
    pageTitle: "TAIFR",
    pageUrl: "/project/how/taifr",
    beforeTime: "5 months",
    beforeDescription: "to get a stable line of transgenic duckweed",
    beforeDetails: "Duckweed genetic engineering is painfully slow, laborious and unpredictable.",
    afterTime: "1 month",
    afterDescription: "transposase-assisted insertion & frond regeneration",
    afterDetails: "Our method for 5× faster genetic engineering of duckweed.",
    bgColor: "#F5F5F5",
    accentColor: "#779E45"
  },
  {
    id: 2,
    title: "Native Promoters",
    pageTitle: "Promoters",
    pageUrl: "/project/how/promoters",
    beforeTime: "No native parts",
    beforeDescription: "available to SynBio community",
    beforeDetails: "Exogenous promoters are often silenced, hindering expression.",
    afterTime: "New promoters",
    afterDescription: "7 new native duckweed promoters characterised",
    afterDetails: "Strong, stable expression with native regulatory elements.",
    bgColor: "#F5F5F5",
    accentColor: "#779E45"
  },
  {
    id: 3,
    title: "Cultivation Efficiency",
    pageTitle: "Cultivator",
    pageUrl: "/project/how/cultivator",
    beforeTime: "Laboriousness",
    beforeDescription: "of larger scale duckweed cultivation",
    beforeDetails: "Scientists spend a vast amount of time on repetitive subculturing.",
    afterTime: "Cultivator",
    afterDescription: "autonomous vertical cultivation unit for duckweed",
    afterDetails: "Saves 2 h of work/m²/week to any scientist looking to scale up their duckweed experiments.",
    bgColor: "#F5F5F5",
    accentColor: "#779E45"
  },
  {
    id: 4,
    title: "Yield Optimization",
    pageTitle: "Predictor",
    pageUrl: "/project/how/predictor/in-silico-cultivation",
    beforeTime: "Yield variations",
    beforeDescription: "in duckweed, on the scale of orders of magnitude",
    beforeDetails: "Any duckweed company or research group must overcome lengthy optimization.",
    afterTime: "Predictor",
    afterDescription: "a real-time duckweed cultivation data–based model",
    afterDetails: "Design the optimal cultivation settings based on your desired yield and the species.",
    bgColor: "#F5F5F5",
    accentColor: "#779E45"
  }
];