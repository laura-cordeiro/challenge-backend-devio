import { QueryInterface } from 'sequelize';
import ClientsModel from '../../../domain/clients/clientsModel';

export default {
  up: (queryInterface: QueryInterface): Promise<void> =>
    queryInterface.sequelize.transaction(async () => {
      await ClientsModel.sync({ force: true });
    }),

  down: (queryInterface: QueryInterface): Promise<void> =>
    queryInterface.sequelize.transaction(async () => {
      await ClientsModel.drop();
    }),
};
