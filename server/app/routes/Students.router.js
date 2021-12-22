import express from "express";
import {
	create,
	deleteById,
	findAll,
	findClass,
	findOne,
	update,
} from "../controllers/Students.controller.js";

const routerStudent = express.Router();

routerStudent.get("/", findAll);
routerStudent.put("/", findAll);
routerStudent.get("/mssv", findOne);
routerStudent.get("/lop", findClass);
routerStudent.post("/", create);
routerStudent.put("/:id", update);
routerStudent.delete("/:id", deleteById);

export default routerStudent;
