import { Product } from './interfaces/product.interface';

export const productCatalogue: Record<string, Product> = {
  '001': {
    name: 'Silver Label',
    unitPrice: 100,
    discount: { quantity: 3, discountPrice: 200 },
  },
  '002': {
    name: 'Gold Label',
    unitPrice: 80,
    discount: { quantity: 2, discountPrice: 120 },
  },
  '003': { name: 'Platinum Label', unitPrice: 50, discount: null },
  '004': { name: 'Diamond Label', unitPrice: 30, discount: null },
};
