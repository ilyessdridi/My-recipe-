import React from "react"; 

const Money=(props)=>{ 
console.log(props.cash)

    return( 
        <div className="favorite"> 
            <h1>FAVORITE RECIPES ❤️</h1>
            {props.cash.map((e)=> { 
                return (  
                 <> 
               
                    <li>{e.ilyess}   </li> 
                     
                 </>
                )
            })} 
            
        </div>
    )
} 


export default Money ;