import { Router } from 'express';
import { categoryRouter } from '../modules/category/category.route';
import { orderRouter } from '../modules/orders/order.route';
import { productRouter } from '../modules/product/product.route';


const router = Router();

const moduleRoutes = [
  {
    path: '/products',
    route: productRouter,
  },
  {
    path: '/categories',
    route: categoryRouter,
  },
  {
    path: '/orders',
    route: orderRouter,
  },

];

moduleRoutes.forEach((routes) => router.use(routes.path, routes.route));

export default router;
