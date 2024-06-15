
const express = require('express');

const Category = require('../models/Category')

const router = express.Router();

router.post('/add', async (req, res) => {
    try {

        const category = new Category(req.body)
        await category.save()
    
        res.send({ message: 'Category Posted in DB Successfully! ' })

    } catch (error) {
        res.status(500).send({ message: error.message }); // Agar koi error aaye to use browser par bhej diya
    }
})

module.exports = router;


