import express from 'express';
import ordersProductsRouter from './ordersProductsRoutes';
import ordersRouter from './ordersRoutes';
import paymentsRouter from './paymentsRoutes';
import productsRoutes from './productsRoutes';

const routes = express.Router();
routes.use(productsRoutes);
routes.use(ordersProductsRouter);
routes.use(ordersRouter);
routes.use(paymentsRouter);

export default routes;
