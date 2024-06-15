// console.log('hello world');

const express = require('express')
const app = express()
const port = 4000;     // on this port to run the app 4000  (port code) 

const mongoDB = require('./db') // import krlia main file me 
mongoDB()                        // call the mongoDB  

// ------------------------------------------------------------------------------------
//cross origin bnaengy jo frontend to backend me app.json sy lgta ha (deaffectuate)
app.use((req, res, next) => { //3 pramter 1 middleware ha
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000"); //jis port par front-End chl rahi ha react ka local host lazmi include kro   
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
})

app.get('/', (req, res) => { 
  res.send('Hello World!')
})

app.use(express.json());
app.use('/api', require("./Routes/CreateUser"));      // app.use middleware ha ksi bh dta k center sy prfrm krta ha 

// -------------------------LOG KA DATA DISPLAY--------------jo k nh araha ha ------------

app.use('/api', require("./Routes/DisplayData"));  

app.use('/api', require("./Routes/Aads"));
app.use('/api', require("./Routes/FoodCategory"));


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// ---------------- node ko terminal par chalny k lye sub sy phly cd backend or npm start phir node run hoga -----------------

// index.js me expressJs ka Setup kia ha kuch is trhn 
// thunder client extension install kia (it is like a postman) alot of back-End dev use it (jitni bh testing krte hn end points server par testing pr postman use krte hn) 

// nodemon run kia ha terminal pr ==> nodemon .\index.js   (mne sir ki trhn sy run kia phly command pkg.json me script debug me  ( "start": "node index.js", "dev": "nodemon index.js" ) or phir 
// terminal pr npm run dev server chal gya

// restarting server nodemon help sy hota ha  

// mongoose library ha that is used to conect the mongoDB 
