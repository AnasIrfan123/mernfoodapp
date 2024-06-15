    const express = require('express')

    const router = express.Router()

    const User = require('../models/User')  // import kiya models sy userSchema ko
    
    const { body, validationResult } = require('express-validator');  // validation ko import kia or routes m use kia

     // ---=======================   jwt(jsonwebtoken)   ===================================== createuser me token generate hoga lakn use login m hoga (pasd ko secure krta ha or Ye JWT ek encrypted token hota hai jo user ki identity ko represent karta hai)
    const jwt = require('jsonwebtoken');   // json web token lelia or login me gen hta ha ya krna ha 

    const jwtSecret = "MynameisEndtoEndYouTubeChannel$3#" //SECRET //token random bnaya h (createuser m he generate krlega or uski id sy targt kia ab jb user kxh time bad req hit karga end point to gentoken alredy btayega already user ha )
    // ---=======================   bcrypt   ===================================== jitni bh library ha ya kxh bh docs se dekh kr kro
    const bcrypt = require('bcryptjs'); // ye psd ko encrypted krta ha hashing kr k DB m store krta ha authen possess ko protect krta ha


    router.post("/createuser",[

    body("email").isEmail(),             // email k brabar me ,parameter de sakte hn kia msg dena ha 
    body("name").isLength({ min: 6 }), //customize bh kr sakte hn aloowed 10 charac
    body("password", "Incorrect Password").optional().isLength({ min: 6 })], 

    async (req, res) => {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });   // incorrect pas etc incor pr 400 res.status snd hoga
        }

        //bcrypt k all func asyncoronous hte hn islye await use hota ha 
        const salt = await bcrypt.genSalt(10); //gensalt koe bh val de skte ho
        let securPassword = await bcrypt.hash(req.body.password, salt) //2 prametr hte hn 1st jis pr hashing krni ha to psd pr krni ha or 2nd salt 
        // Store hash in your password DB.

        try {
            await User.create({
                name: req.body.name,
                password: securPassword,   // jo bcrypt krwa rhy hn wo ab ye save krwna ha 
                email: req.body.email,
                location: req.body.location,

                // name: "affan",               // phly aysy he thander client sy bheja tha data upr wla req.body sy aplication.json
                // password: "99922",
                // email: 'affan@gmail.com',
                // location: "korangi"
            })
            res.json({ success:true });

        } catch (error) {
            console.log(error);   
            res.json({ success:false}); 
        }
        
    })

    // ------------------ LOGIN ------------------


    router.post("/loginuser",[
        body("email").isEmail(),             // email k brabar me ,parameter de sakte hn kia msg dena ha 
        body("password", "Incorrect Password").isLength({ min: 6 })], 
        async (req, res) => {
        console.log(
            req.body.password,
            req.body.email)        // ye signup me nh lgya is lye log me nh aya 

            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });   // incorrect pas etc incor pr 400 res.status snd hoga
            }
        
            let email = req.body.email;  // email varib me req.body.email bnalia  // or email varabl m user.findOne email brabr ha email k 
            try {
            let userData = await User.findOne({email}) //findone return krta ha jo data email sy match krta hoga wo res me pora docu snd krdega
            
            if (!userData) {
                return res.status(400).json({ errors: "Try logging with valid credentials" });   // incorrect email or pass pr 400 res.status snd hoga
            }
// -------------------------------becypt.compare ap k originl psd ko compare krta ha jo apka encrypted ha us sy hashing sy pta lgalega user sahi ha ya nh
            const pwdCompare = await bcrypt.compare(req.body.password, userData.password) //userData psd user.findOne sy arah ha find kr k

            if (!pwdCompare){ // req wla pass or signup wla pass match nh ha to
                return res.status(400).json({ errors: "Try logging with valid credentials" }); 
            }

            const data = { //dta obj ha or is k andr userdata ki id DB sy lyrhy hn or dta me save kr rhy hn
                user:{
                    id:userData.id
                }
            }              // auth tken ko frontend par loclStorage me save krwangy
            const authToken = jwt.sign(data,jwtSecret) //hm idhr sth me expire syst bh enter kr sakt hn banking system wla kxh tim k bd expire in minute ka (abh unlimit ha jb tk user cashe memory clear nh krta tb tk nh jane wali )
            return res.json({success:true, authToken:authToken })   //agr 2no true ha res.json me true snd kr rhy hn
        
            } catch (error) {
                console.log(error);   
                res.json({ success:false}); 
            }
            
        })


    module.exports = router;