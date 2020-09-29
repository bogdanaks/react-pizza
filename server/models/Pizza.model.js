const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PizzasSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        img: {
            type: String,
        },
    },
    { timestamps: true },
)

module.exports = Pizzas = mongoose.model('pizza', PizzasSchema)
