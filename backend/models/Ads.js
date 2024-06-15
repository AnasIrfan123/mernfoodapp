
const mongoose = require('mongoose');

const { Schema } = mongoose;

// Define the schema for options
const optionSchema = new Schema({
    half: {
        type: String,
        required: true
    },
    full: {
        type: String,
        required: true
    },
    description: String
});

// Define the schema for ads
const adsSchema = new Schema({
    categoryName: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    options: [optionSchema], // Array of options using the defined option schema
    description: String
});

module.exports = mongoose.model('Ads', adsSchema);











// const mongoose = require('mongoose')

// const {Schema} = mongoose;

// const adsSchema = new Schema({
//     title: {
//         type: String,
//         required: true
//     },
//     description: {
//         type: String,
//         required: true
//     },
//     amount: {
//         type: Number,
//         required: true
//     }
// })

// module.exports = mongoose.model('ads', adsSchema)