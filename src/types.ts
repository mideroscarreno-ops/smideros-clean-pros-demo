export type PageRoute =
  | 'home'
  | 'carpet-cleaning'
  | 'packages'
  | 'upholstery-cleaning'
  | 'rug-cleaning'
  | 'tile-grout'
  | 'commercial-carpet'
  | 'specialty-floor-care'
  | 'water-damage'
  | 'process'
  | 'service-areas'
  | 'reviews'
  | 'faqs'
  | 'about'
  | 'quote'
  | 'contact';

export type QuoteServiceOption =
  | 'Carpet Cleaning'
  | 'Upholstery Cleaning'
  | 'Rug Cleaning'
  | 'Tile & Grout Cleaning'
  | 'Commercial Carpet Cleaning'
  | 'Specialty Floor Care'
  | 'Other Service';

export interface CarpetPackage {
  id: 'basic' | 'odor' | 'pro';
  name: string;
  pricePerArea: number;
  summary: string;
  steps: string[];
  featured?: boolean;
}

export interface ServiceDetail {
  route: PageRoute;
  indexNumber: string;
  name: string;
  shortTitle: string;
  categoryLabel: string;
  headline: string;
  summary: string;
  ctaLabel: string;
  image: string;
  imageAlt: string;
  overview: string;
  methodologyTitle: string;
  methods: {
    title: string;
    detail: string;
  }[];
  surfacesCovered: string[];
  honestExpectations: string[];
  quoteServiceKey: QuoteServiceOption;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  packageNote: string;
}

export interface FaqItem {
  category: string;
  question: string;
  answer: string;
}

export interface QuotePrefill {
  service?: QuoteServiceOption;
  packageChoice?: string;
}
