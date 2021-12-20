import express from "express";
import {
	create,
	deleteById,
	filter,
	findAll,
	findAndCount,
	update,
} from "../controllers/Rooms.controller.js";

const routerRoom = express.Router();

routerRoom.post("/", create);
routerRoom.get("/", findAll);
routerRoom.get("/sl", findAndCount);
routerRoom.put("/", filter);
routerRoom.put("/:id", update);
routerRoom.delete("/:id", deleteById);

export default routerRoom;
