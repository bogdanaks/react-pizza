const { Router } = require('express')
const router = Router()

const Settings = require('../../models/Settings.model')

/*
@route   POST api/settings/
@desc    Create New settings
@access  Public
*/
router.post('/', async (req, res) => {
    // Add new settings in database
    try {
        const newSettings = new Settings({
            dough: req.body.dough,
            size: req.body.size,
        })
        await newSettings.save((err, sett) => {
            if (err) return res.status(409).send({ message: 'Save error: ' + err })

            return res.status(201).send(sett)
        })
    } catch (err) {
        return res.status(500).send({ message: 'Server error: ' + err })
    }
})

/*
@route   GET api/settings/
@desc    Get all settings
@access  Public
*/
router.get('/', async (req, res) => {
    try {
        const allSettings = await Settings.find()
        return res.status(200).send(allSettings)
    } catch (err) {
        return res.status(500).send({ message: 'Server error: ' + err })
    }
})

module.exports = router
