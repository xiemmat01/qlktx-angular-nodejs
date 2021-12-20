import express from "express";
import {
	create,
	deleteById,
	findAll,
	update,
} from "../controllers/Students.controller.js";

const routerStudent = express.Router();

routerStudent.post("/", create);
routerStudent.get("/", findAll);
routerStudent.put("/", findAll);
routerStudent.put("/:id", update);
routerStudent.delete("/:id", deleteById);

export default routerStudent;
