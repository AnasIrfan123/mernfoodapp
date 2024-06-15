const express = require('express')

const router = express.Router()


router.post('/foodData', (req, res) => {
    try {
        console.log(global.ads);
        res.send([global.ads,global.Categories])
    } catch (error) {
        console.error(error.message);
        res.send("Server Error")
    }
})

module.exports = router;  // exports nh karogy to error ayega crash hogi app


// const express = require('express');
// const router = express.Router();

// router.get('/foodData', (req, res) => {
//     try { 
//         console.log(global.Saample);
//         res.send([global.Saample]);
//     } catch (error) {
//         console.error(error.message);
//         res.send("Server Error");
//     }
// });
// -------------------POST
// router.post('/foodData', async (req, res) => {
//     try {
//         // Code to handle POST request and send response
//     } catch (error) {
//         console.error(error.message);
//         res.send("Server Error");
//     }
// });

// module.exports = router;
