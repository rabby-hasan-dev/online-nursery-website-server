import { Router } from 'express';
import { productRouter } from '../modules/product/product.route';


const router = Router();

const moduleRoutes = [
  {
    path: '/product',
    route: productRouter,
  },

];

moduleRoutes.forEach((routes) => router.use(routes.path, routes.route));

export default router;
