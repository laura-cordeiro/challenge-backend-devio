import { DataTypes, Model } from 'sequelize';
import { v4 as uuidv4 } from 'uuid';
import sequelize from '../../infrastructure/database';
import OrdersModel from '../orders/ordersModel';
import ProductsModel from '../products/productsModel';
import { OrderProduct } from './orderProductEntity';

class OrdersProductsModel extends Model<OrderProduct> {}

OrdersProductsModel.init(
  {
    id: {
      type: DataTypes.STRING(36),
      primaryKey: true,
      allowNull: false,
      defaultValue: uuidv4(),
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    orderId: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: OrdersModel,
        key: 'id',
      },
    },
    productId: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: ProductsModel,
        key: 'id',
      },
    },
  },
  {
    tableName: 'ordersProducts',
    timestamps: true,
    underscored: true,
    sequelize,
  },
);

OrdersProductsModel.hasOne(OrdersModel, {
  foreignKey: 'id',
  sourceKey: 'orderId',
  as: 'orders',
});

OrdersProductsModel.hasOne(ProductsModel, {
  foreignKey: 'id',
  sourceKey: 'productId',
  as: 'products',
});

export default OrdersProductsModel;
