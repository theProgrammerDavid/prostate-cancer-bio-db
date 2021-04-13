var target_components = (sequelize, Sequelize) => {
    const target_components = sequelize.define("TARGET_COMPONENTS", {
        PID: {
            type: Sequelize.STRING
        },
        accession: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        },
        type: {
            type: Sequelize.STRING
        },
        relationship: {
            type: Sequelize.STRING
        }
    });
    // target_synonyms.belongsTo(target, {foreignKey:'sds'})
    return target_components;
}

var cross_references = (sequelize, Sequelize) => {
    const cross_references = sequelize.define("CROSS_REFERENCES", {
        PID: {
            type: Sequelize.STRING
        },
        xref_id: {
            type: Sequelize.STRING
        },
        xref_name: {
            type: Sequelize.STRING,
            default: ''
        },
        xref_src: {
            type: Sequelize.STRING
        }
    })

    return cross_references;
}

var target_component_xref = (sequelize, Sequelize) => {
    const target_component_xref = sequelize.define("TARGET_COMPONENT_XREF", {
        PID: {
            type: Sequelize.STRING

        },
        xrefid: {
            type: Sequelize.STRING
        },
        name: {
            type: Sequelize.STRING
        },
        src_db: {
            type: Sequelize.STRING
        },
    });

    return target_component_xref;
};


var target = (sequelize, Sequelize) => {
    const target = sequelize.define("TARGETS", {
        PID: {
            type: Sequelize.UUID,
            primaryKey: true
        },
        organism: {
            type: Sequelize.STRING
        },
        pref_name: {
            type: Sequelize.STRING
        },
        score: {
            type: Sequelize.INTEGER
        },
        target_type: {
            type: Sequelize.STRING
        },
        tax_id: {
            type: Sequelize.INTEGER
        },
        species_group_flag:{
            type: Sequelize.BOOLEAN
        }
    });

    return target;
};


var target_synonyms = (sequelize, Sequelize) => {
    const target_synonyms = sequelize.define("TARGET_SYNONYMS", {
        PID: {
            type: Sequelize.STRING
        },
        name: {
            type: Sequelize.STRING
        },
        type: {
            type: Sequelize.STRING
        },
    });
    // target_synonyms.belongsTo(target, {foreignKey:'sds'})
    return target_synonyms;
};

// target_synonyms.belongsTo(target, {foreignKey: 's'})
exports.target_components = target_components;
exports.target = target;
exports.target_component_xref = target_component_xref;
exports.target_synonyms = target_synonyms;
exports.cross_references = cross_references;