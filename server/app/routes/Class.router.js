import express from "express";
import {
    create,
    deleteById,
    findAll,
    update,
} from "../controllers/Class.controller.js";

const routerClass = express.Router();

routerClass.post("/", create);
routerClass.get("/", findAll);
routerClass.put("/:id", update);
routerClass.delete("/:id", deleteById);

export default routerClass;
