import request from 'supertest';
import { app } from '../server'; // Assuming server.ts exports app

describe('Checkout API', () => {
  test('POST /checkout - Valid cart', async () => {
    const response = await request(app)
      .post('/checkout')
      .send({ productIds: ['001', '002', '001', '004', '003'] }); // Wrap in an object

    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      message: 'Checkout successful.',
      statusCode: 200,
      data: { price: 360 },
    });
  });

  test('POST /checkout - Invalid cart (non-array input)', async () => {
    const response = await request(app)
      .post('/checkout')
      .send({ productIds: 'invalid' }); // Non-array input

    expect(response.status).toBe(400);
    expect(response.body).toEqual({
      message: 'Invalid input: expected an array of product IDs.',
      statusCode: 400,
      data: null,
    });
  });

  test('POST /checkout - Cart with invalid product IDs', async () => {
    const response = await request(app)
      .post('/checkout')
      .send({ productIds: ['999', '999'] }); // Wrap in an object

    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      message: 'Some product IDs are invalid. Returning price as 0.',
      statusCode: 200,
      data: { price: 0 },
    });
  });
});
