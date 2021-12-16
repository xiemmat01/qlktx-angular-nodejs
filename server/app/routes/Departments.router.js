import express from "express";
import {
	create,
	deleteById,
	findAll,
	update,
} from "../controllers/Departments.controller.js";

const routerDepartment = express.Router();

routerDepartment.post("/", create);
routerDepartment.get("/", findAll);
routerDepartment.put("/:id", update);
routerDepartment.delete("/:id", deleteById);

export default routerDepartment;
