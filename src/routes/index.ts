import express from 'express';
import ordersProductsRouter from './ordersProductsRoutes';
import ordersRouter from './ordersRoutes';
import productsRoutes from './productsRoutes';

const routes = express.Router();
routes.use(productsRoutes);
routes.use(ordersProductsRouter);
routes.use(ordersRouter);

export default routes;
