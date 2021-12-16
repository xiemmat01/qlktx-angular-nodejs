import express from "express";
import {
	create,
	deleteById,
	findAll,
	update,
} from "../controllers/Employees.controller.js";

const routerEmployee = express.Router();

routerEmployee.post("/", create);
routerEmployee.get("/", findAll);
routerEmployee.put("/:id", update);
routerEmployee.delete("/:id", deleteById);

export default routerEmployee;
