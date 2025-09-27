// Types for the What page components

export interface ProblemData {
  title: string;
  image: string;
  quote: string;
  author: string;
  height?: number;
}

export interface AccordionItemData {
  title: string;
  content: string[];
  isOpen: boolean;
}

export interface FeatureData {
  title: string;
  description: string;
  position: {
    top?: string;
    left?: string;
    right?: string;
    bottom?: string;
  };
}

export interface ExpertData {
  name: string;
  institution: string;
  photo: string;
  quote: string;
}

export interface SolutionData {
  title: string;
  description?: string;
}