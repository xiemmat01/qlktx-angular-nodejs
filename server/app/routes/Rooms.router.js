import express from "express";
import {
    create,
    deleteById,
    findAll,
    update,
} from "../controllers/Rooms.controller.js";

const routerRoom = express.Router();

// routerRoom.post("/", create);
// routerRoom.get("/", findAll);
// routerRoom.put("/:id", update);
// routerRoom.delete("/:id", deleteById);

export default routerRoom;
