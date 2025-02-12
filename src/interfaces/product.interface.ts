export interface Discount {
  quantity: number;
  discountPrice: number;
}

export interface Product {
  name: string;
  unitPrice: number;
  discount: Discount | null;
}

export interface CheckoutRequest {
  productIds: string[];
}

export interface CheckoutResponse {
  price: number;
}
