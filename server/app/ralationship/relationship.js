import db from "../models/sequelize.js";

db.Departments.hasMany(db.Class, { foreignKey: "MaKhoa" });
db.Students.belongsTo(db.Class, { foreignKey: "MaLop" });
