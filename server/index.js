import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import models from "./app/models/sequelize.js";
import routerStudent from "./app/routes/Students.router.js";
import routerRoom from "./app/routes/Rooms.router.js";
import routerClass from "./app/routes/Class.router.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use("/api/sinh-vien", routerStudent);
app.use("/api/phong", routerRoom);
app.use("/api/lop", routerClass);

models.sequelize.sync({}).then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
});
