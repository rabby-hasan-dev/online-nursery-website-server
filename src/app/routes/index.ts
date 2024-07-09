import { Router } from 'express';


const router = Router();

const moduleRoutes = [
  {
    path: '/product',
    route: product,
  },

];

moduleRoutes.forEach((routes) => router.use(routes.path, routes.route));

export default router;
