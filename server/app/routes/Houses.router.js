import express from "express";
import {
	create,
	deleteById,
	findAll,
	update,
} from "../controllers/Houses.controller.js";

const routerHouse = express.Router();

routerHouse.post("/", create);
routerHouse.get("/", findAll);
routerHouse.put("/:id", update);
routerHouse.delete("/:id", deleteById);

export default routerHouse;
