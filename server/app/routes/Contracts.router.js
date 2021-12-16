import express from "express";
import {
	create,
	deleteById,
	findAll,
	update,
} from "../controllers/Contracts.controller.js";

const routerContract = express.Router();

routerContract.post("/", create);
routerContract.get("/", findAll);
routerContract.put("/:id", update);
routerContract.delete("/:id", deleteById);

export default routerContract;
