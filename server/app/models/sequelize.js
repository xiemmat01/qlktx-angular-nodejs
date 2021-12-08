// khởi tạo sequelize
import Sequelize from "sequelize";
import dbConfig from "../config/db.config.js";
import Class from "./Class.model.js";
import Departments from "./Departments.model.js";
import Relatives from "./Relatives.model.js";
import Rooms from "./Rooms.model.js";
import Students from "./Students.model.js";

const sequelize = new Sequelize(
    dbConfig.database,
    dbConfig.username,
    dbConfig.password,
    {
        host: dbConfig.host,
        dialect: dbConfig.dialect,
        operatorsAliases: false,

        pool: {
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle,
        },

        define: {
            timestamps: false,
        },
    }
);
// chạy file models
const models = {
    Department: Departments(sequelize, Sequelize),
    Class: Class(sequelize, Sequelize),
    Students: Students(sequelize, Sequelize),
    Rooms: Rooms(sequelize, Sequelize),
};

Object.keys(models).forEach((modelName) => {
    if ("associate" in models[modelName]) {
        models[modelName].associate(models);
    }
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

export default models;
