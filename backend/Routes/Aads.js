const express = require('express');

const Ads = require('../models/Ads') // import schema 

const router = express.Router()

router.post('/post', async (req, res) => {

    try {
        const ad = new Ads(req.body)
        await ad.save()

        res.send({ message: 'Ads posted in DB Successfully!' })
        
    } catch (error) {
        res.send({ message: e.message })    
    }
    
})

// router.get('/ads', async (req, res) => {
//     try {
//         const ads = await ads.find()
//         res.send({ message: 'Ads successfull !!' })    
//     } catch (error) {
//         res.send({ message: e.message })
//     }
// })

router.get('/ads', async (req, res) => {
    try {
        const ads = await Ads.find(); // MongoDB se ads ki collection se data retrieve kiya
        res.send(ads); // Data ko browser par bheja
    } catch (error) {
        res.status(500).send({ message: error.message }); // Agar koi error aaye to use browser par bhej diya
    }
});

module.exports = router;















