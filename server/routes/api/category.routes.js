const { Router } = require('express')
const router = Router()

const Category = require('../../models/Category.model')

/*
@route   POST api/category/
@desc    Create New category
@access  Public
*/
router.post('/', async (req, res) => {
    // Add new category in database
    try {
        const newCategory = new Category({
            name: req.body.name,
        })
        await newCategory.save((err, cat) => {
            if (err) return res.status(409).send({ message: 'Save error: ' + err })

            return res.status(201).send(cat)
        })
    } catch (err) {
        return res.status(500).send({ message: 'Server error: ' + err })
    }
})

/*
@route   GET api/category/
@desc    Get all categories
@access  Public
*/
router.get('/', async (req, res) => {
    try {
        const allCategories = await Category.find()
        return res.status(200).send(allCategories)
    } catch (err) {
        return res.status(500).send({ message: 'Server error: ' + err })
    }
})

module.exports = router
