const express = require('express')
const cors = require('cors') 
const mongoose = require("mongoose") 
const Recipe =require("./database")
const app = express()
const PORT = 3000

app.use(express.json()) ;
app.use(cors())




app.get("/test",(req,res)=>{ 
    res.send("marhbe bik ")
})  

app.get("/recipes", async (req,res)=>{ 
    try{ 
    await Recipe.find({}) 
    .then( result => res.send(result) )
    } 
    catch (err) {console.log(err)   }   
})

app.post("/recipe",async(req,res)=>{ 
    try { 
    let new_recipe = new Recipe
    ( { 
        name:req.body.name,
        recipe:req.body.recipe, 
        image:req.body.image,
        price:req.body.price
    } );

    await new_recipe.save(); 
    res.send(" saved in the database")
    } 
    catch (err){ console.log(err);}

})

app.delete("/delete/:id",async(req,res)=> {  
    ;
    try{ 
        await Recipe
        .findOneAndDelete({_id : req.params.id}) ; 
        res.send("deleted")
    } 
    catch (err){res.send(err)}
}) 

app.put("/update/:id",async(req,res)=>{ 
try {

    await Recipe
    .findOneAndUpdate({_id:req.params.id},{ price : req.body.price}) 
    res.send( 'updated')
} 
catch(err) { res.send(err)}

})
 








mongoose.connect("mongodb+srv://ilyess:dridi@cluster0.qscizl4.mongodb.net/?retryWrites=true&w=majority" ,(err,done)=>{ 
if (err) {console.log(err);} 
if (done) {console.log("database connected");}
})

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}...`)
})  