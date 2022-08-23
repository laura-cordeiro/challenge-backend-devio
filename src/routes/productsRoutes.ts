import express from 'express';
import ProductsController from '../domain/products/productsController';

const productsRouter = express.Router();

productsRouter.get('/products', ProductsController.getProducts);
productsRouter.get('/products/:id', ProductsController.getProductById);
productsRouter.post('/products/new', ProductsController.createProduct);

export default productsRouter;
