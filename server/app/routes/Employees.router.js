import express from "express";
import {
	create,
	deleteById,
	findAll,
	findMaNV,
	update,
} from "../controllers/Employees.controller.js";

const routerEmployee = express.Router();

routerEmployee.post("/", create);
routerEmployee.get("/", findAll);
routerEmployee.get("/:manv/:matkhau", findMaNV);
routerEmployee.put("/:manv", update);
routerEmployee.delete("/:manv", deleteById);

export default routerEmployee;
