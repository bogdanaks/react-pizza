const { Router } = require('express')
const router = Router()

const Pizza = require('../../models/Pizza.model')

/*
@route   POST api/pizza/
@desc    Create New Pizza
@access  Public
*/
router.post('/', async (req, res) => {
    // Add new pizza in database
    try {
        const newPizza = new Pizza({
            title: req.body.title,
        })
        await newPizza.save((err, pizza) => {
            if (err) return res.status(409).send({ message: 'Save error: ' + err })

            return res.status(201).send(pizza)
        })
    } catch (err) {
        return res.status(500).send({ message: 'Server error: ' + err })
    }
})

/*
@route   GET api/pizza/
@desc    Get all pizzas
@access  Public
*/
router.get('/', async (req, res) => {
    try {
        const allPizzas = await Pizza.find()
        return res.status(200).send(allPizzas)
    } catch (err) {
        return res.status(500).send({ message: 'Server error: ' + err })
    }
})

module.exports = router
