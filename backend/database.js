const mongoose=require('mongoose') ;

const recipeSchema = mongoose.Schema( { 
   
    name : { 
        type : String,
        required : true
    },
    recipe : { 
        type : String,
        required : true
    },  
    image:{ 
        type:String,
        required:true
    },
    price : { 
        type : Number,
        required:true
    }
  
  

}) ; 
const Recipe =  mongoose.model("recipe",recipeSchema)

module.exports = Recipe