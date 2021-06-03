module.exports = (sequelize, Sequelize) => {
    const Interaction = sequelize.define("interactions", {
        drug: {
            type: Sequelize.STRING
        },
        gene: {
            type: Sequelize.STRING,
        }
    });

    return Interaction;
};