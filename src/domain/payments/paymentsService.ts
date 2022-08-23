import PaymentsModel from '../payments/paymentsModel';

const PaymentsService = {
  async getPaymentsOrders() {
    const paymentsResum = await PaymentsModel.findAll({});
    return paymentsResum;
  },
};
export default PaymentsService;
