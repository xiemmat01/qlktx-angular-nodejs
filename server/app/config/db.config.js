const dbConfig = {
    host: "localhost",
    username: "root",
    password: "",
    database: "db_qlktx",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
};
export default dbConfig;
