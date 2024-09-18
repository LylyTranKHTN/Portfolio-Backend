import { Request } from "express";

const adaptRequest = (req: Request) => {
    return Object.freeze({
        routeParams: req.params,
        body: req.body,
        query: req.query,
        method: req.method,
        path: req.path,
    })};

export default adaptRequest;