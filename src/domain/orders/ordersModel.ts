import { DataTypes, Model } from 'sequelize';
import { v4 as uuidv4 } from 'uuid';
import sequelize from '../../infrastructure/database';
import { Order } from './orderEntity';

class OrdersModel extends Model<Order> {}

OrdersModel.init(
  {
    id: {
      type: DataTypes.STRING(36),
      primaryKey: true,
      allowNull: false,
      defaultValue: uuidv4(),
    },
    clientName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    obs: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    totalPrice: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
  },
  {
    tableName: 'orders',
    timestamps: true,
    underscored: true,
    sequelize,
  },
);

export default OrdersModel;
