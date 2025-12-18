export const GAZETTE = 'SO:3922(E), Dated:12-09-2024';

export const PRODUCTS = [
  {
    brand: 'HUMICID ++',
    specification: 'Humic and Fulvic Acid 25.05% (Liquid)',
    composition: 'Humic and Fulvic Acid 25.05% (Liquid)',
    dosage: ['Five Equal Soil Drench application at 10 l/ha'],
    crops: ['Tomato'],
    gazette: GAZETTE,
  },
  {
    brand: 'MULTI ROOT',
    specification: 'Humates (12.5%) (Liquid)\nSoil Application',
    composition: 'Humic Acid per cent. by weight minimum : 10\nFulvic Acid percent. by weight minimum : 2.5\npH (10 % aq soluƟon) : 12-14\nSpecific Gravity : 1.0-1.20',
    dosage: ['Two soil applications at 5 l/ha'],
    crops: ['Green Gram'],
    gazette: GAZETTE,
  },
  {
    brand: 'PRINCE GOLD',
    specification: 'Humic Acid 1.5% (Granules)\nSoil Application',
    composition: 'Humic Acid per cent. by weight minimum : 1.5\nTotal organic carbon per cent. by weight, minimum : 1.32\nBulk density (g/cc) : 1.0403 ± 0.03\nOrganic matter per cent. by weight, minimum : 2.28\npH (10 % aqueous solution) : 6.0- 8.0\nSolubility per cent., minimum : 11',
    dosage: ['Two soil applications at 30 kg/ha'],
    crops: ['Chilli'],
    gazette: GAZETTE,
  },
  {
    brand: 'PH-60',
    specification: 'Humic and Fulvic Acid 76% (Powder)\nFoliar application',
    composition: '1 Humic Acid per cent. by weight minimum 75\n2 Fulvic acid per cent. by weight, minimum 1\n3 Total organic carbon per cent. by weight, minimum 26.82\n4 Bulk density (g/ml) 0.8745 ± 0.02\n5 pH (1% aqueous solution) 7.60 ± 0.2\n6 Solubility per cent., minimum 91.64',
    dosage: ['Two foliar applications at 750 g/ha'],
    crops: ['Tomato'],
    gazette: GAZETTE,
  },
  {
    brand: 'KALPAVRUKSHA',
    specification: 'Potassium Humate 49% (Powder)\nSoil Application',
    composition: '1 Humic Acid percent by weight minimum : 21\n2 pH (1 % aq soluƟon): 6.0-8.0',
    dosage: ['One time soil application at 1 kg/ha'],
    crops: ['Paddy'],
    gazette: GAZETTE,
  },
  {
    brand: 'SHIRI PHOS',
    specification: 'Protein hydrolysate 25% (Plant source) (Liquid)\nFoliar application',
    composition: '1 Free amino acids per cent. by weight, minimum 8.5\n2 Total organic carbon per cent. by weight, minimum 11\n3 Specific gravity 1.1-1.2\n4 pH (10% aqueous solution) 4.3 ±1\n5 Solubility per cent., minimum 99.57',
    dosage: ['Two foliar applications at 1.25 l/ha'],
    crops: ['Green gram'],
    gazette: GAZETTE,
  },
];

export const SLUG_TO_BRAND = {
  'HUMICID++': 'HUMICID ++',
  'HUMICID%2B%2B': 'HUMICID ++',
  'HUMICID  ': 'HUMICID ++',
  'multi root': 'MULTI ROOT',
  'multi%20root': 'MULTI ROOT',
  'prince gold': 'PRINCE GOLD',
  'prince%20gold': 'PRINCE GOLD',
  'PH-60': 'PH-60',
  'kalpavruksha': 'KALPAVRUKSHA',
  'shiri': 'SHIRI PHOS',
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
