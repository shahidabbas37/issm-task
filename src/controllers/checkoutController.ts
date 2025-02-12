
import { Request, Response } from 'express';
import {
  CheckoutRequest,
  CheckoutResponse,
} from '../interfaces/product.interface';
import { calculateTotalPrice } from '../services/checkoutService';
import { productCatalogue } from '../products';

export function checkoutController(req: Request, res: Response): void {
  const { productIds }: CheckoutRequest = req.body;

  if (!Array.isArray(productIds)) {
    res.status(400).json({
      message: 'Invalid input: expected an array of product IDs.',
      statusCode: 400,
      data: null,
    });
    return;
  }

  const invalidProductIds = productIds.filter((id) => !productCatalogue[id]);
  if (invalidProductIds.length > 0) {
    res.status(200).json({
      message: 'Some product IDs are invalid. Returning price as 0.',
      statusCode: 200,
      data: { price: 0 },
    });
    return;
  }

  try {
    const totalPrice = calculateTotalPrice(productIds);
    const response: CheckoutResponse = { price: totalPrice };
    res.status(200).json({
      message: 'Checkout successful.',
      statusCode: 200,
      data: response,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: 'Internal Server Error',
      statusCode: 500,
      data: null,
    });
  }
}
