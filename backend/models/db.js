const dbConfig = require('../config/db.config');


const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    port: dbConfig.DB_PORT,
    dialect: dbConfig.dialect,

    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.users = require('./user.model')(sequelize, Sequelize);

const { target, target_component_xref, target_synonyms, cross_references, target_components } = require('./protein.model');

db.Target = target(sequelize, Sequelize);
db.TargetComponentXref = target_component_xref(sequelize, Sequelize);
db.TargetSynonyms = target_synonyms(sequelize, Sequelize);
db.CrossReferences = cross_references(sequelize, Sequelize);
db.TargetComponents = target_components(sequelize, Sequelize);

// db.target_synonyms.belongsTo(target, {foreignKey: 'synonym'})

module.exports = db;