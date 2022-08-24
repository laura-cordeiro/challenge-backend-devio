// eslint-disable-next-line camelcase
import { enum_payment } from '../../../domain/payments/paymentEntity';
import PaymentsModel from '../../../domain/payments/paymentsModel';

export default {
  async up() {
    await PaymentsModel.bulkCreate(
      [
        {
          id: '10d4d316-2265-40f3-9441-7416fbd2a7a3',
          // eslint-disable-next-line camelcase
          type: enum_payment.creditCard,
          orderId: '09d00063-88de-440c-ae56-21475fc3ac46',
        },
        {
          id: 'b21aa635-9ca8-47e9-8ff1-f0546f2b6b54',
          // eslint-disable-next-line camelcase
          type: enum_payment.money,
          orderId: 'c03ead02-f9c5-455d-8e42-79650a8cbac7',
        },
        {
          id: '4580f661-6357-403e-a8b3-3e1df29c44fa',
          // eslint-disable-next-line camelcase
          type: enum_payment.pix,
          orderId: '6d5f9b08-7066-4901-b185-c933b9c7d3b0',
        },
        {
          id: '30ceaa33-8547-4066-8c2a-799235b0ee9',
          // eslint-disable-next-line camelcase
          type: enum_payment.creditCard,
          orderId: 'cf3b38df-2794-4dc4-9c77-2ad4974865b6',
        },
        {
          id: '6ea0e7a9-8a83-49e6-b073-2c888aadd8d0',
          // eslint-disable-next-line camelcase
          type: enum_payment.creditCard,
          orderId: '5cfa851f-4adb-41ec-83fa-468948b03f90',
        },
      ],
      {},
    );
  },

  async down() {
    await PaymentsModel.destroy({ truncate: true });
  },
};
