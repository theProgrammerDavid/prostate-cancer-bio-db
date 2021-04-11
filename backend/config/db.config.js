module.exports = {
    HOST: process.env.DB_HOST,
    USER: process.env.DB_USER,
    PASSWORD: process.env.DB_PASS,
    DB: process.env.DB_NAME,
    DB_PORT: process.env.DB_PORT,
    dialect: "mysql",
    pool: {
        max: 30,
        min: 0,
        acquire: 60000000,
        idle: 10000
    } 
};