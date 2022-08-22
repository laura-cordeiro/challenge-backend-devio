import { DataTypes, Model } from 'sequelize';
import { v4 as uuidv4 } from 'uuid';
import sequelize from '../../infrastructure/database';
import { Payment } from './paymentEntity';

class PaymentsModel extends Model<Payment> {}

PaymentsModel.init(
  {
    id: {
      type: DataTypes.STRING(36),
      primaryKey: true,
      allowNull: false,
      defaultValue: uuidv4(),
    },
    type: {
      type: DataTypes.ENUM('pix', 'money', 'creditCard'),
      defaultValue: 'creditCard',
      allowNull: false,
    },
    orderId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: 'payments',
    timestamps: true,
    underscored: true,
    sequelize,
  },
);

export default PaymentsModel;
