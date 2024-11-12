import { Elysia } from "elysia";

import Books from "./book";
import Cover from "./cover";
import Category from "./category";
import Request from "./request";

/**
 * v1 apis
 */

const app = new Elysia()
    .group("/v1", app => 
        app
            .use(Books)
            .use(Cover)
            .use(Category)
            .use(Request)
    );

export default app;