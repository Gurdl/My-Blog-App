const mongoose=require("mongoose")

const CategorySchema= new mongoose.Schema({
    name:{
       type: String,
       required:true,
    },
   

},{timeseries:true});

module.exports=mongoose.model("Category",CategorySchema)
