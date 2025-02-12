import { productCatalogue } from '../products';
import { Product } from '../interfaces/product.interface';

export function calculateTotalPrice(productIds: string[]): number {
  let totalPrice = 0;
  const productCounts: Record<string, number> = {};

  // Count occurrences of each productId
  for (const productId of productIds) {
    if (!productCounts[productId]) {
      productCounts[productId] = 1;
    } else {
      productCounts[productId] += 1;
    }
  }

  console.log(productCounts);
  //{ '001': 2, '002': 1, '004': 1, '003': 1 }

  // Calculate the total price for each product
  for (const productId in productCounts) {
    const product: Product = productCatalogue[productId];
    // console.log('product', product);

    const quantity = productCounts[productId];
    // console.log('quantity', quantity);

    if (product.discount) {
      const discountMultiplier = Math.floor(
        quantity / product.discount.quantity
      );
      totalPrice += discountMultiplier * product.discount.discountPrice;

      const remaining = quantity % product.discount.quantity;
      totalPrice += remaining * product.unitPrice;
    } else {
      totalPrice += quantity * product.unitPrice;
    }
  }

  return totalPrice;
}
