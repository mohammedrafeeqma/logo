const mongoose = require('mongoose')
const logoSchema = new mongoose.Schema(
    {
        name:{
            type:String
        },
        logo:{
            type:String
        }
    },
    {timestamps:true}
);
module.exports = mongoose.model('logo',logoSchema)