export interface Location {
  id: string;
  x: number;
  y: number;
  type: 'company' | 'research';
  name: string;
}

export interface WorldMapProps {
  locations: Location[];
}

export interface DuckweedLeafProps {
  x: number;
  y: number;
  type: 'company' | 'research';
  name: string;
  id?: string;
  isHovered?: boolean;
  debouncedHoveredLeafId?: string | null;
  setHoveredLeafId?: (id: string | null) => void;
}

export interface LegendItemProps {
  type: 'company' | 'research';
  label: string;
}

export type LeafType = 'company' | 'research';