interface BrandColor {
  name: string;
  color: string;
  class: string;
}

interface BrandColorValue {
  name: string;
  color: string;
  class: string;
}
interface BrandColorGroup {
  name: string;
  colors: BrandColor[];
}

interface BrandColors {
  name: string;
  perRow?: number;
  compact?: boolean;
  groups: BrandColorGroup[];

  // Runtime Variables
  colors?: BrandColor[]; // Combined list of colors from all selected groups.
  failure?: boolean; // Indicates if we failed to load the brand colours content item.
}

export { BrandColor, BrandColors, BrandColorValue };
