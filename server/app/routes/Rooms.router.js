import express from "express";
import {
	create,
	deleteById,
	filter,
	findAll,
	findOne,
	GetStudentInRoom,
	update,
	updateSlDangO,
} from "../controllers/Rooms.controller.js";

const routerRoom = express.Router();

routerRoom.get("/chi-tiet/:map", GetStudentInRoom);
routerRoom.get("/", findAll);
routerRoom.get("/map", findOne);
routerRoom.post("/", create);
routerRoom.put("/", filter);
routerRoom.put("/:id", update);
routerRoom.put("/sl/:id", updateSlDangO);
routerRoom.delete("/:id", deleteById);

export default routerRoom;
