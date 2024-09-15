"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const category_route_1 = require("../modules/category/category.route");
const order_route_1 = require("../modules/orders/order.route");
const product_route_1 = require("../modules/product/product.route");
const router = (0, express_1.Router)();
const moduleRoutes = [
    {
        path: '/products',
        route: product_route_1.productRouter,
    },
    {
        path: '/categories',
        route: category_route_1.categoryRouter,
    },
    {
        path: '/orders',
        route: order_route_1.orderRouter,
    },
];
moduleRoutes.forEach((routes) => router.use(routes.path, routes.route));
exports.default = router;
