import { Router } from "express";
import { CategoryRouter } from "../modules/category/category.route.js";
// import { todoRouter } from "../modules/todo/todo.route.js";
export const router = Router();
const routeList = [
    {
        prefix: "/category",
        route: CategoryRouter,
    },
];
// router.use("/todo", todoRouter);
routeList.forEach(route => {
    router.use(route.prefix, route.route);
});
//# sourceMappingURL=index.js.map