const mongoose = require('mongoose')
const Schema = mongoose.Schema

const SettingsSchema = new Schema(
    {
        dough: {
            type: Array,
            required: true,
        },
        size: {
            type: Array,
            required: true,
        },
    },
    { timestamps: true },
)

module.exports = Settings = mongoose.model('settings', SettingsSchema)
