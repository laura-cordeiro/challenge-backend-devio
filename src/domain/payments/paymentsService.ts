import { v4 as uuidv4 } from 'uuid';
import PaymentsModel from '../payments/paymentsModel';
// eslint-disable-next-line camelcase
import { enum_payment } from './paymentEntity';

const PaymentsService = {
  async getPaymentsOrders() {
    const paymentsResum = await PaymentsModel.findAll({});
    return paymentsResum;
  },

  async createPaymentByOrderId(
    orderId: string,
    // eslint-disable-next-line camelcase
    type: enum_payment,
  ) {
    const addPayment = await PaymentsModel.create({
      id: uuidv4(),
      orderId,
      type,
    });
    return addPayment;
  },

  async updatePaymentById(
    id: string,
    // eslint-disable-next-line camelcase
    type: enum_payment,
  ) {
    const updatePayment = await PaymentsModel.update(
      {
        id,
        type,
      },
      { where: { id } },
    );
  },
};

export default PaymentsService;
