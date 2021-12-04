import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import db from "./app/models/sequelize.js";
import routerSinhvien from "./app/routes/Students.router.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

db.sequelize.sync();

app.use("/sinh-vien", routerSinhvien);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
