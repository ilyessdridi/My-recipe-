import Axios from "axios" 
import React ,{useState} from "react" 
import Money from "./money";
var Recipes =(props)=>{ 
  console.log(props);
  
  const [price,setPrice]=useState(0) 
  const [pick,setPick]=useState([]); 
  
  console.log(pick); 
 


  var picking = (input)=>{ 
    setPick([input,...pick]) ; 
   
 
   }
 var del = (id)=>{
  Axios.delete(`http://localhost:3000/delete/${id}`)
  .then((res)=>{
    console.log(" deleted")
  })
  .catch(err=>{
    console.log(err)
  }) 
  window.location.reload(false);
 } 

 const up=(id)=>{ 
  Axios.put(`http://localhost:3000/update/${id}`,{price:price})  
  .then((res)=>{ console.log('updated');}) 
  .catch((err)=> console.log( err)) 
  window.location.reload();
}


    return (
        <div>
      {props.data.map((element) => {
        return (
          <div className="newspaper" key={element.id}>
            <ul>
            
            
                <div>
                <li ><h2 onClick={()=>{picking({ilyess:element.name})}}> {element.name}</h2></li>
                <span> <img src= {element.image}/> <h4 className="recipe" >{element.recipe}</h4>    </span>
                <h1 className="price" >Price : {element.price}DT   </h1> 
                <input className="input2" placeholder="price" type="number" id="quantity" name="quantity" min="1" max="5" onChange={(e)=>{ setPrice(e.target.value)}} /> 
                
                 <button className="update" onClick={()=>{ up(element._id)}} >update</button> 
                 <button className="delete" onClick={()=>{del(element._id)}}>delete</button>
                </div>
            

            </ul>
          </div>
        );
      })} 
            <Money  cash={pick}/>
        </div>
    )
}

export default Recipes