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
routerEmployee.put("/:manv", update);
routerEmployee.delete("/:manv", deleteById);

export default routerEmployee;
