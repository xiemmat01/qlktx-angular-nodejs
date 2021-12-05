// khởi tạo sequelize
import Sequelize from "sequelize";
import dbConfig from "../config/db.config.js";
import ClassModel from "./Class.model.js";
import DepartmentsModel from "./Departments.model.js";
import RoomsModel from "./Rooms.model.js";
import SinhvienModel from "./Students.model.js";

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
const db = {
    sequelize: sequelize,
    Sequelize: Sequelize,
    Departments: DepartmentsModel(sequelize, Sequelize),
    Class: ClassModel(sequelize, Sequelize),
    Students: SinhvienModel(sequelize, Sequelize),
    Rooms: RoomsModel(sequelize, Sequelize),
};

export default db;
