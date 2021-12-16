import express from "express";
import {
	create,
	deleteById,
	findAll,
	update,
} from "../controllers/Bills.controller.js";

const routerBill = express.Router();

routerBill.post("/", create);
routerBill.get("/", findAll);
routerBill.put("/:id", update);
routerBill.delete("/:id", deleteById);

export default routerBill;
