module.exports = (sequelize, Sequelize) => {
    const protein = sequelize.define("proteins", {
        username: {
            type: Sequelize.STRING
        },
        chemblId: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        }
    });

    return protein;
};