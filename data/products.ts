export interface Product {
  id: string;
  name: string;
  weightLabel: string; // e.g. "250 GRAM"
  imageSrc: string;
}

export const products: Product[] = [
  {
    id: 'gold-250g',
    name: '250 Gram Gold Bar',
    weightLabel: '250 GRAM',
    imageSrc: '/images/home/products/gold500g.png',
  },
  {
    id: 'gold-500g',
    name: '500 Gram Gold Bar',
    weightLabel: '500 GRAM',
    imageSrc: '/images/home/products/gold500g.png',
  },
  {
    id: 'gold-1kg',
    name: '1 Kilogram Gold Bar',
    weightLabel: '1 KILOGRAM (1000 GR)',
    imageSrc: '/images/home/products/gold1kg.png',
  },
];

