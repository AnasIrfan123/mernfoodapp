const mongoose = require('mongoose');


// mongoURI variable me rakhi conection string or mongoos .conect me mongouri or call back funct sy log me connect succesfully krdia
const mongoURI = 'mongodb+srv://mernFood:s7aLCoxmtjPduC3Y@gofood.h5msa06.mongodb.net/?retryWrites=true&w=majority&appName=Gofood'    //gofoodmern datbase name ye net/k bad ayega warna log me dta nh milega 

// agr db conect me koe isue araha ha to ( 2.2.12 ) or later is pr kr k connection str copy kr k lgna or username pasword /k bad project/cluster name 
//lga lna (useNewparser useunifiedTopology old version ka ha agr koe iisue araha ho to version change kr k lgao connection srting)

const mongoDB = async () => {

    try {
        await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    // .then(() => {
        console.log('Connected to database successfully 👍');

        const adsCollection = mongoose.connection.db.collection("ads");
        const data = await adsCollection.find({}).toArray()

    //    console.log(data);
        const foodCollection = mongoose.connection.db.collection("categories");
        const cateData = await foodCollection.find({}).toArray()

       global.ads = data
       global.Categories = cateData
    //    console.log(global.ads); 
        
        // const adsCollection = mongoose.connection.db.collection("ads");
        // adsCollection.find({}).toArray(function(err, data) {
        //     if (err) {
        //         console.log(err);
        //     } else {
        //         console.log('Fetched Data:', data);
        //     }
        // })
 
//// fetched data get databas sy saample colelction me jo data ha wo get krta log terminal pr lakin nh rha ha ( or connection str me 
//// mongodb.net/ k bad dtabase name 'gofoodmern' ye likh kr log terminal par ayega abh hta dia ha)

      
    } catch (error) {
        console.error('Error connecting to database:', error);
    }
} // export krna tha is lye 1 call back funct me rakha    

module.exports = mongoDB;
 

// or idhr mongoos library sy paste kia

// database: ( username: mernFood , password: s7aLCoxmtjPduC3Y )
// pass ko .env file me hidden kr k github me jayega    dotenv file ki install comand sy instl hoga 

// ---------------- node ko terminal par chalny k lye sub sy phly cd backend or npm start phir node run hoga -----------------


