
const mongoose = require('mongoose');

const { Schema } = mongoose;          // destructure kr k extract krengy schema 

const UserSchema = new Schema({
    name:{
        type: String,
        required: true  // name lzmi chaye  // without enter k next nh hoga 
    },
    location:{
        type: String,
        required: true 
    },
    email:{
        type: String,
        required: true 
    },
    password:{
        type: String,
        required: true 
    },
    date: {
        type: Date,
        default: Date.now     //by default chaye
    }
});

module.exports = mongoose.model('user', UserSchema)   // invites coma me Db me users name sy ayega dta 




// data insert kis ki help sy hota ha model ki help sy hota ha agr import krengy to model ko krengy or CRUD oper bh DB me model ki help sy kar sakte hn 

// mongoDb schema less hota ha kyun k json format me data jta tha to structured k sath bhejna ha to is lye isme schema add krte hn 
// schema me hm condition lga sakte hn // schema sy bhjne ka mtlb structure bnakr bhjna 

// hmny data ko schema structure sy bnlia or isko insert krwana ha to wo (( model )) sy hota ha 