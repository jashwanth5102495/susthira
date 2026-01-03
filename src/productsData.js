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
