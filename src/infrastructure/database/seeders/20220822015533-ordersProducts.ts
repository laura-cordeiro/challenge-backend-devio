import OrdersProducts from '../../../domain/ordersProducts/ordersProductsModel';

export default {
  async up() {
    await OrdersProducts.bulkCreate(
      [
        {
          id: 'bb296d64-6bbc-4a51-91fa-4879794a6a09',
          quantity: 2,
          orderId: '09d00063-88de-440c-ae56-21475fc3ac46',
          productId: '1bf9855f-6a29-4469-bdf3-e8fbf439c9f',
        },
        {
          id: '6d69c06e-250d-440f-a552-ed059958cda4',
          quantity: 4,
          orderId: 'c03ead02-f9c5-455d-8e42-79650a8cbac7',
          productId: '62ecc754-4e4f-4d8d-a658-2a8a384f111e',
        },
        {
          id: '605d2f00-9a84-4c5a-9f3a-99f3f7257c24',
          quantity: 1,
          orderId: '6d5f9b08-7066-4901-b185-c933b9c7d3b0',
          productId: '1bf9855f-6a29-4469-bdf3-e8fbf439c9f',
        },
        {
          id: 'd74cd7c3-5e84-466f-9f99-6088c81882b1',
          quantity: 1,
          orderId: '6d5f9b08-7066-4901-b185-c933b9c7d3b0',
          productId: '0382f295-8376-43e6-8b68-6a4c9d7ac38',
        },
        {
          id: '0a7af307-35b4-4255-8d87-a6a8b45667d7',
          quantity: 2,
          orderId: '6d5f9b08-7066-4901-b185-c933b9c7d3b0',
          productId: 'f2d1740b-6336-4bab-969c-98c3ef14d44e',
        },
        {
          id: '6e5c664f-227b-4602-9276-df82f46adc9a',
          quantity: 1,
          orderId: 'cf3b38df-2794-4dc4-9c77-2ad4974865b6',
          productId: 'a7268834-725c-470e-b249-d48892287b05',
        },
        {
          id: '413edee9-ba9a-4cc4-b77e-385672e24d9a',
          quantity: 2,
          orderId: 'cf3b38df-2794-4dc4-9c77-2ad4974865b6',
          productId: 'f2d1740b-6336-4bab-969c-98c3ef14d44e',
        },
        {
          id: '0653e0f6-eda3-4340-bd2d-22e71fbe5dd8',
          quantity: 1,
          orderId: '5cfa851f-4adb-41ec-83fa-468948b03f90',
          productId: '0382f295-8376-43e6-8b68-6a4c9d7ac38',
        },
        {
          id: '065f255a-edae-4de4-a82a-826f47a40d5c',
          quantity: 1,
          orderId: '5cfa851f-4adb-41ec-83fa-468948b03f90',
          productId: '62ecc754-4e4f-4d8d-a658-2a8a384f111e',
        },
      ],
      {},
    );
  },

  async down() {
    await OrdersProducts.destroy({ truncate: true });
  },
};
