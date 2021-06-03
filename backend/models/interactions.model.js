module.exports = (sequelize, Sequelize) => {
    const Interaction = sequelize.define("interactions", {
        drug: {
            type: Sequelize.STRING
        },
        type: {
            type: Sequelize.STRING,
        }
    });

    return Interaction;
};