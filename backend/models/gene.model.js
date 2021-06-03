module.exports = (sequelize, Sequelize) => {
    const Gene = sequelize.define("genes", {
        uid: {
            type: Sequelize.STRING
        },
        name: {
            type: Sequelize.STRING,
        },
        description : {
            type: Sequelize.STRING,
        },
        status: {
            type: Sequelize.STRING,
        },
        currentId: {
            type: Sequelize.STRING,
        },
        chromosome: {
            type: Sequelize.STRING,
        },
        geneticsource: {
            type: Sequelize.STRING,
        },
        maplocation: {
            type: Sequelize.STRING,
        },
        otheraliases: {
            type: Sequelize.STRING,
        },
        otherdesignations: {
            type: Sequelize.TEXT,
        },
        nomenclaturesymbol: {
            type: Sequelize.STRING,
        },
        nomenclaturename: {
            type: Sequelize.STRING,
        },
        summary: {
            type: Sequelize.TEXT,
        },
        
    });

    return Gene;
};