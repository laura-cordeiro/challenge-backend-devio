import { v4 as uuidv4 } from 'uuid';
import ProductsModel from './productsModel';

const ProductsService = {
  async getProducts() {
    const products = await ProductsModel.findAll({});
    return products;
  },

  async getProductById(id: string) {
    const productExists = await ProductsModel.count({
      where: { id },
    });
    if (!productExists) throw new Error('Pedido não encontrado');
    const productResum = await ProductsModel.findAll({
      where: { id },
      attributes: ['name', 'description', 'price'],
    });
    return productResum;
  },

  async createProduct(name: string, description: string, price: number) {
    const newProduct = await ProductsModel.create({
      id: uuidv4(),
      name,
      description,
      price,
    });
    return newProduct;
  },
};

export default ProductsService;
