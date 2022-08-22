import OrdersModel from '../../../domain/orders/ordersModel';

export default {
  async up() {
    await OrdersModel.bulkCreate(
      [
        {
          id: '09d00063-88de-440c-ae56-21475fc3ac46',
          totalPrice: 52.0,
          obs: 'Adicionar picles',
          clientId: '0c69e788-2792-4f61-86b1-b2b0ec1c1003',
        },
        {
          id: 'c03ead02-f9c5-455d-8e42-79650a8cbac7',
          totalPrice: 68.0,
          obs: 'Usar leite sem lactose em duas unidades',
          clientId: 'dc629b79-a05f-4f2c-986f-566e92ced116',
        },
        {
          id: '6d5f9b08-7066-4901-b185-c933b9c7d3b0',
          totalPrice: 71.0,
          obs: '',
          clientId: '6d5f9b08-7066-4901-b185-c933b9c7d3b0',
        },
        {
          id: 'cf3b38df-2794-4dc4-9c77-2ad4974865b6',
          totalPrice: 46.0,
          obs: '',
          clientId: 'b8d0c84a-e2ab-485f-870d-d5e6dde402e0',
        },
        {
          id: '5cfa851f-4adb-41ec-83fa-468948b03f90',
          totalPrice: 48.0,
          obs: 'Tirar a cebola',
          clientId: 'e2b83539-6fba-4543-bfd0-c1bd0e11e5d9',
        },
      ],
      {},
    );
  },

  async down() {
    await OrdersModel.destroy({ truncate: true });
  },
};
