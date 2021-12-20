import express from "express";
import {
	create,
	deleteById,
	findAll,
	findRoomByKhu,
	update,
} from "../controllers/Houses.controller.js";

const routerHouse = express.Router();

routerHouse.post("/", create);
routerHouse.get("/", findAll);
routerHouse.get("/:khu", findRoomByKhu);
routerHouse.put("/:id", update);
routerHouse.delete("/:id", deleteById);

export default routerHouse;
