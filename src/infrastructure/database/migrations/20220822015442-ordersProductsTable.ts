import { QueryInterface } from 'sequelize';
import OrdersProducts from '../../../domain/ordersProducts/ordersProductsModel';

export default {
  up: (queryInterface: QueryInterface): Promise<void> =>
    queryInterface.sequelize.transaction(async () => {
      await OrdersProducts.sync({ force: true });
    }),

  down: (queryInterface: QueryInterface): Promise<void> =>
    queryInterface.sequelize.transaction(async () => {
      await OrdersProducts.drop();
    }),
};
