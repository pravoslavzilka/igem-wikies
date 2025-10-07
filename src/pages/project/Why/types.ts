import {ReactElement} from "react";

export interface WhyProps {
  heroImageUrl?: string | null;
  firstSectionImageUrl?: string | null;
  secondSectionImageUrl?: string | null;
  futureSectionImageUrl?: string | null;
  novelProteinImageUrl?: string | null;
  phytoremediationImageUrl?: string | null;
  recombinantImageUrl?: string | null;
  monocotImageUrl?: string | null;
  foodImageUrl?: string | null;
  phytoremediationStatusImageUrl?: string | null;
  biomanufacturingImageUrl?: string | null;
  basicResearchImageUrl?: string | null;
}

export interface AccordionData {
  [key: string]: {
    title: string;
    content: ReactElement[];
    imageUrl: string | null;
  };
}

export interface AccordionItemProps {
  id: string;
  title: string;
  content: ReactElement[];
  isActive: boolean;
  onClick: (id: string | null) => void;
  showContent?: boolean;
}