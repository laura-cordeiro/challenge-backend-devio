import { Request, Response } from 'express';
import ProductsService from './productsService';

const ProductsController = {
  async getProducts(req: Request, res: Response) {
    try {
      const data = await ProductsService.getProducts();
      res.status(200);
      res.json(data);
    } catch (err: any) {
      res.status(500);
      res.json({ message: err.message });
    }
  },

  async getProductById(req: Request, res: Response) {
    try {
      const data = await ProductsService.getProductById(req.params.id);
      res.status(200);
      res.json(data);
    } catch (err: any) {
      res.status(400);
      res.json({ message: err.message });
    }
  },

  async createProduct(req: Request, res: Response) {
    try {
      const { name, description, price } = req.body;
      const data = await ProductsService.createProduct(
        name,
        description,
        price,
      );
      res.status(201);
      res.json(data);
    } catch (err: any) {
      res.status(400);
      res.json({ message: err.message });
    }
  },

  async getProductPrice(req: Request, res: Response) {
    try {
      const data = await ProductsService.getProductPrice(req.params.id);
      res.status(200);
      res.json(data);
    } catch (err: any) {
      res.status(400);
      res.json({ message: err.message });
    }
  },
};

export default ProductsController;
