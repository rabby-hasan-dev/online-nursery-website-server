import { Router } from 'express';
import { categoryRouter } from '../modules/category/category.route';
import { productRouter } from '../modules/product/product.route';


const router = Router();

const moduleRoutes = [
  {
    path: '/product',
    route: productRouter,
  },
  {
    path: '/categories',
    route: categoryRouter,
  },

];

moduleRoutes.forEach((routes) => router.use(routes.path, routes.route));

export default router;
