const router = require('express').Router();
const db = require('../models/db');
const data = require('./sample.data.json');

const { CrossReferences,
    TargetComponents,
    TargetSynonyms,
    TargetComponentXref,
    Target
} = db;
router.get('/test', async (req, res) => {

    // const ans = await db.sequelize.query('SELECT * FROM users WHERE id = :id', {
    //     replacements: { id: 8 },
    //     type: db.sequelize.QueryTypes.SELECT
    // });
    try {
        const ans = await db.sequelize.query('SELECT * FROM users WHERE id = 8');
        res.json({ success: true, msg: ans });
        console.log(ans);
    }
    catch (er) {
        return res.json({ err: true, err: er });
    }

})
router.get('/', async (req, res) => {
    try {

        // console.log(data.targets.length)
        data.targets.forEach(target => {


            const pid = target.target_chembl_id;
            // console.log(pid);

            Target.create({
                organism: target.organism,
                PID: pid,
                pref_name: target.pref_name,
                score: target.score,
                target_type: target.target_type,
                tax_id: target.tax_id,
                species_group_flag: target.species_group_flag
            })


            target.cross_references.forEach((xref) => {
                CrossReferences.create({
                    PID: pid,
                    ...xref
                })
            })

            target.target_components.forEach(comp => {
                TargetComponents.create({
                    PID: pid,
                    accession: comp.accession,
                    description: comp.component_description,
                    type: comp.component_type,
                    relationship: comp.relationship
                })
                comp.target_component_synonyms.forEach(syn => {
                    TargetSynonyms.create({
                        PID: pid,
                        name: syn.component_synonym,
                        type: syn.syn_type
                    })

                })
                comp.target_component_xrefs.forEach(x => {
                    TargetComponentXref.create({
                        PID: pid,
                        name: x.xref_name,
                        xrefid: x.xref_id,
                        src_db: x.xref_src_db
                    })
                })
            })

        })
        res.send('ok')
    }
    catch (e) {
        console.log(e);
        res.json({ msg: 'not okay', err: e });
    }

})

module.exports = router;