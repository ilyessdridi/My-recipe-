import React ,{useState} from "react";
import Axios from "axios";

var Add =()=>{
    const [name,setName]=useState("")
    const [recipe,setRecipe]=useState("") 
    const [price,setPrice]=useState('') 
    const [image,setImage]=useState('') 
    
    var add =() =>{
        Axios.post("http://localhost:3000/recipe",{name:name,recipe:recipe,price:price,image:image})
        .then((res)=>{
            console.log("posted")
        }) 
        window.location.reload(false);
    }

    return(
        <div className="inputs">
        <input className="input1" id="hover" placeholder="type your name"  onChange={(e)=>{
            setName(e.target.value)
        }}/>
        <input className="input1" placeholder="type the description"  onChange={(e)=>{
            setRecipe(e.target.value)
        }} />
              <input className="input1" placeholder="image url"  onChange={(e)=>{
                setImage(e.target.value)
            }} />
          <input className="input2" placeholder="price" type="number" id="quantity" name="quantity" min="1" max="5"  onChange={(e)=>{
            setPrice(e.target.value)
        }} /> 
         <button className="add" onClick={()=>{
            return add();
         }} >Add</button>
        </div>
    )
}


export default Add