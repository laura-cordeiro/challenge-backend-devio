import OrdersModel from '../../../domain/orders/ordersModel';

export default {
  async up() {
    await OrdersModel.bulkCreate(
      [
        {
          id: '09d00063-88de-440c-ae56-21475fc3ac46',
          clientName: 'João Renato Nathan Galvão',
          observation: 'Adicionar picles',
          totalPrice: 52.0,
        },
        {
          id: 'c03ead02-f9c5-455d-8e42-79650a8cbac7',
          clientName: 'Kamilly Alícia Ferreira',
          observation: 'Usar leite sem lactose em 2 unidades',
          totalPrice: 68.0,
        },
        {
          id: '6d5f9b08-7066-4901-b185-c933b9c7d3b0',
          clientName: 'Melissa Teresinha Gonçalves',
          observation: '',
          totalPrice: 71.0,
        },
        {
          id: 'cf3b38df-2794-4dc4-9c77-2ad4974865b6',
          clientName: 'Enrico Renan Samuel de Paula',
          observation: '',
          totalPrice: 46.0,
        },
        {
          id: '5cfa851f-4adb-41ec-83fa-468948b03f90',
          clientName: 'Emanuel Noah Diogo Nascimento',
          observation: 'Tirar a cebola',
          totalPrice: 48.0,
        },
      ],
      {},
    );
  },

  async down() {
    await OrdersModel.destroy({ truncate: true });
  },
};
