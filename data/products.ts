export interface ProductSpecs {
  weight: string;
  width: string;
  height: string;
  breadth: string;
  fineness: string;
  certification?: string;
}

export interface Product {
  id: string;
  name: string;
  weightLabel: string;
  images: string[];
  specs: ProductSpecs;
}


export const products: Product[] = [
  // ================= GOLD =================
  {
    id: 'gold-1kg-995',
    name: '1KG.  995. Gold KILO BAR',
    weightLabel: '1 KILOGRAM',
    images: ['/images/products/1kg_gold_995.png'],
    specs: {
      weight: '1 Kg',
      width: '51.35 mm',
      height: '114.15 mm',
      breadth: '9.10 mm',
      fineness: '995',
      certification: 'Certified',
    },
  },
  {
    id: 'gold-500g-995',
    name: '500 gm 995  Gold Bar',
    weightLabel: '500 GRAM',
    images: ['/images/products/500gm_gold_995_.png'],
    specs: {
      weight: '500 gm',
      width: '39.30 mm',
      height: '89.50 mm',
      breadth: '7.85 mm',
      fineness: '995',
      certification: 'Certified',
    },
  },
  {
    id: 'gold-1kg-9999',
    name: '1KG.  999.90. Gold KILO BAR',
    weightLabel: '1 KILOGRAM',
    images: [
      '/images/products/1kg_gold_999_9.png',
      '/images/products/B0004677_1kg_999_9_gold.jpg',
    ],
    specs: {
      weight: '1 Kg',
      width: '51.35 mm',
      height: '114.15 mm',
      breadth: '9.10 mm',
      fineness: '999.90',
      certification: 'Certified',
    },
  },
  {
    id: 'gold-500g-9999',
    name: '500 gm 999.90  Gold Bar',
    weightLabel: '500 GRAM',
    images: [
      '/images/products/500g_999.9_gold.png',
      '/images/products/A0021539_500g_999_9_gold.jpg',
    ],
    specs: {
      weight: '500 gm',
      width: '39.30 mm',
      height: '89.50 mm',
      breadth: '7.85 mm',
      fineness: '999.90',
      certification: 'Certified',
    },
  },
  {
    id: 'gold-250g-9999',
    name: '250 gm 999.90 Gold Bar',
    weightLabel: '250 GRAM',
    images: [
      '/images/products/250g_gold_999.png',
      '/images/products/H0000011_250g_999_9_gold.jpg',
    ],
    specs: {
      weight: '250 gm',
      width: '25 mm',
      height: '55 mm',
      breadth: '10 mm',
      fineness: '999.90',
      certification: 'Certified',
    },
  },
  {
    id: 'gold-tt-116g',
    name: '116.64  gm. 999. Gold TT BAR',
    weightLabel: '116.64 GRAM',
    images: ['/images/products/10_tola_Gold_999.png'],
    specs: {
      weight: '116 gm',
      width: '41.92 mm',
      height: '25.75 mm',
      breadth: '4.5 mm',
      fineness: '999.0',
    },
  },

  // ================= SILVER =================
  {
    id: 'silver-1kg-bar',
    name: '1 KG SILVER 999. KILOBAR',
    weightLabel: '1 KILOGRAM',
    images: [
      '/images/products/1kg_silver_999_.png',
      '/images/products/D0006532_1kg_999_silver.jpg',
    ],
    specs: {
      weight: '1 Kg',
      width: '52 mm',
      height: '118 mm',
      breadth: '14 mm',
      fineness: '999',
      certification: 'Certified',
    },
  },
  {
    id: 'silver-500g-bar',
    name: '500  GM SILVER 999. SILVER BAR',
    weightLabel: '500 GRAM',
    images: [
      '/images/products/500g_silver_999.png',
      '/images/products/E500230_500g_999_silver.jpg',
    ],
    specs: {
      weight: '500 gm',
      width: '51 mm',
      height: '96 mm',
      breadth: '10 mm',
      fineness: '999.0',
      certification: 'Certified',
    },
  },
  {
    id: 'silver-250g-bar',
    name: '250 GM SILVER 999. SILVER BAR',
    weightLabel: '250 GRAM',
    images: [
      '/images/products/250g_silver_999.png',
      '/images/products/F000022_250g_999_silver.jpg',
    ],
    specs: {
      weight: '250 gm',
      width: '25 mm',
      height: '55 mm',
      breadth: '10 mm',
      fineness: '999.0',
      certification: 'Certified',
    },
  },
  {
    id: 'silver-grains-1kg',
    name: '1 KILO SILVER 999 GRAINS',
    weightLabel: '1 KILOGRAM',
    images: ['/images/products/1kg_silver grains_999.png'],
    specs: {
      weight: '1 Kg',
      width: '-',
      height: '-',
      breadth: '-',
      fineness: '999',
      certification: 'Certified',
    },
  },

  // ================= LAB SILVER GRAINS =================
  {
    id: 'silver-grains-lab',
    name: '250 gm Silver Grains 999.9 for Fire assay Lab analysis',
    weightLabel: '250 GRAM',
    images: [
      '/images/products/Silver Grains 999.90 for Fire assay Lab analysis.png',
      '/images/products/Silver Grains 999.90 for Fire assay Lab analysis_2.png',
    ],
    specs: {
      weight: '250 gm',
      width: '-',
      height: '-',
      breadth: '-',
      fineness: '999.90',
      certification: 'Lab Grade',
    },
  },
];


