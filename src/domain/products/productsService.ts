import { v4 as uuidv4 } from 'uuid';
import ProductsModel from './productsModel';

const ProductsService = {
  async getProducts() {
    const products = await ProductsModel.findAll({});
    return products;
  },

  async productExists(id: string) {
    const productExists = await ProductsModel.count({
      where: { id },
    });
    return productExists;
  },

  async getProductById(id: string) {
    const productExists = await this.productExists(id);
    if (!productExists) throw new Error('Produto não encontrado');
    const productResum = await ProductsModel.findAll({
      where: { id },
      attributes: ['name', 'description', 'unitPrice'],
    });
    return productResum;
  },

  async createProduct(name: string, description: string, unitPrice: number) {
    const newProduct = await ProductsModel.create({
      id: uuidv4(),
      name,
      description,
      unitPrice,
    });
    return newProduct;
  },

  async updateProductById(
    id: string,
    name: string,
    description: string,
    unitPrice: number,
  ) {
    await ProductsModel.update(
      {
        name,
        description,
        unitPrice,
      },
      { where: { id } },
    );
  },

  async getProductPrice(id: string) {
    const productExists = await this.productExists(id);
    if (!productExists) throw new Error('Produto não encontrado');
    const priceValue = await ProductsModel.findOne({
      where: { id },
    });
    return priceValue;
  },
};

export default ProductsService;
