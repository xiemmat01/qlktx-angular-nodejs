import express from "express";

import {
    create,
    deleteById,
    findAll,
    update,
} from "../controllers/Students.controller.js";

const routerSinhvien = express.Router();

routerSinhvien.post("/", create);
routerSinhvien.get("/", findAll);
routerSinhvien.put("/:id", update);
routerSinhvien.delete("/:id", deleteById);

export default routerSinhvien;
