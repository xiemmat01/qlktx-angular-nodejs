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
	deleteSlDangO,
} from "../controllers/Rooms.controller.js";

const routerRoom = express.Router();

routerRoom.get("/chi-tiet/:map", GetStudentInRoom);
routerRoom.get("/", findAll);
routerRoom.get("/map", findOne);
routerRoom.post("/", create);
routerRoom.put("/", filter);
routerRoom.put("/:id", update);
routerRoom.put("/sl/u/:id", updateSlDangO);
routerRoom.put("/sl/d/:id", deleteSlDangO);
routerRoom.delete("/:id", deleteById);

export default routerRoom;
