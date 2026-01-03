export const GAZETTE = 'S.O.3922(E), Dated 12-9-2024';

export const PRODUCTS = [
  {
    brand: 'SBO HUMIC POWDER',
    specification: 'Humic acid 5%',
    composition: 'Humic Acid Weight (% Min.): 5.0',
    dosage: ['Three foliar applications at 5 g/l.'],
    crops: ['Chilli', 'Pepper'],
    gazette: GAZETTE,
  },
  {
    brand: 'SBO K-Humate',
    specification: 'Potassium Humate 49%',
    composition: 'Humic Acid Weight (% Min.): 21.0',
    dosage: ['1 Kg/ha- soil application'],
    crops: ['Paddy'],
    gazette: GAZETTE,
  },
  {
    brand: 'SBO Humic and Fulvic',
    specification: 'Humic and Fulvic acid 25.5%',
    composition: 'Humic Acid: 14.925%\nFulvic Acid: 10.125%\nOrganic Carbon: 10.55%',
    dosage: ['Five equals soil drench applications at 10 L/ha'],
    crops: ['Tomato'],
    gazette: GAZETTE,
  },
  {
    brand: 'SBO SEAWEED BOOSTO',
    specification: 'Ascophyllum nodosum 15%',
    composition: 'Alginic Acid: 1.5%\nMannitol: 1.0%\nTotal Organic Carbon: 5.0%',
    dosage: ['Two foliar applications at 1.5 L/ha'],
    crops: ['Green Gram'],
    gazette: GAZETTE,
  },
  {
    brand: 'SBO SPIRULINA BOOSTO',
    specification: 'Foliar Application (Liquid)',
    composition: 'Protein Weight (% Min.): 6.0',
    dosage: ['Two foliar sprays at 750 ml/ha'],
    crops: ['Chilli', 'Tomato'],
    gazette: GAZETTE,
  },
  {
    brand: 'SBO GEMGREEN BOOSTO',
    specification: 'Live Microorganisms, Microbial Cell (Methylococcus)',
    composition: 'Methylococcus capsulatus: 1x10⁹ Min CFU/ml',
    dosage: [
      'Paddy: Three applications (One seedling dip and two foliar applications) at 40 g/ha',
      'Maize: Two foliar applications at 40 g/ha'
    ],
    crops: ['Paddy', 'Maize'],
    gazette: GAZETTE,
  },
  {
    brand: 'SBO MIX BOOSTO',
    specification: 'Mixture of seaweed extract, Humic and Fulvic Acid and Vitamins',
    composition: 'Alginic Acid: 0.102%\nGlycine: 10.0%\nHumic Acid: 9.89%\nFulvic Acid: 0.31%\nVitamin C: 2.0%\nTotal Dissolved solids: 10.22%\nTotal Organic Carbon: 4.5%',
    dosage: ['Two foliar application at 2 L/ha'],
    crops: ['Cotton'],
    gazette: GAZETTE,
  },
  {
    brand: 'SBO PROTEIN BOOSTO',
    specification: 'Protein Hydrolysates and Amino Acids Bacterial biomass hydrolysate (Amino acids 2%)',
    composition: 'Free Amino acid: 0.8-1.2%\nTotal Organic Carbon: 1.0%',
    dosage: [
      'Grapes: Four foliar sprays at 1.25 L/ha to 2.0 L/ha depending on canopy size',
      'Chilli: Three foliar applications at 3.75 L/ha'
    ],
    crops: ['Grape', 'Chilli'],
    gazette: GAZETTE,
  },
  {
    brand: 'SBO SUCHMI Con',
    specification: 'Live Microorganisms, Microbial Consortium',
    composition: 'Methylobacterium symbioticum: 0.5x10⁷ Min cfu/g\nMethylobacterium extrorquens: 0.5x10⁷ Min cfu/g',
    dosage: ['Single soil application just before planting at 7.5 kg/ha as basal dose'],
    crops: ['Onion'],
    gazette: GAZETTE,
  },
];

export const SLUG_TO_BRAND = {
  'SBO HUMIC POWDER': 'SBO HUMIC POWDER',
  'SBO%20HUMIC%20POWDER': 'SBO HUMIC POWDER',
  // Keep old slugs redirecting to the new product for now, or just rely on default fallback
  'HUMICID++': 'SBO HUMIC POWDER',
  'HUMICID%2B%2B': 'SBO HUMIC POWDER',
  'HUMICID': 'SBO HUMIC POWDER',
  'SBO K-Humate': 'SBO K-Humate',
  'SBO%20K-Humate': 'SBO K-Humate',
  'SBO Humic and Fulvic': 'SBO Humic and Fulvic',
  'SBO%20Humic%20and%20Fulvic': 'SBO Humic and Fulvic',
  'SBO SEAWEED BOOSTO': 'SBO SEAWEED BOOSTO',
  'SBO%20SEAWEED%20BOOSTO': 'SBO SEAWEED BOOSTO',
  'SBO SPIRULINA BOOSTO': 'SBO SPIRULINA BOOSTO',
  'SBO%20SPIRULINA%20BOOSTO': 'SBO SPIRULINA BOOSTO',
  'SBO GEMGREEN BOOSTO': 'SBO GEMGREEN BOOSTO',
  'SBO%20GEMGREEN%20BOOSTO': 'SBO GEMGREEN BOOSTO',
  'SBO MIX BOOSTO': 'SBO MIX BOOSTO',
  'SBO%20MIX%20BOOSTO': 'SBO MIX BOOSTO',
  'SBO PROTEIN BOOSTO': 'SBO PROTEIN BOOSTO',
  'SBO%20PROTEIN%20BOOSTO': 'SBO PROTEIN BOOSTO',
  'SBO SUCHMI Con': 'SBO SUCHMI Con',
  'SBO%20SUCHMI%20Con': 'SBO SUCHMI Con',
};

export function findProductBySlug(slug) {
  const decoded = decodeURIComponent(slug);
  // Normalize: some hosts may translate '+' to space in path
  const normalized = decoded.replace(/\+/g, ' ');
  const brand = SLUG_TO_BRAND[normalized] || SLUG_TO_BRAND[slug] || normalized;
  const found = PRODUCTS.find(p => p.brand.toUpperCase() === brand.toUpperCase());
  return found || PRODUCTS[0];
}

export function findProductByBrand(brand) {
  return PRODUCTS.find(p => p.brand === brand);
}
