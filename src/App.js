import React ,{useState,useEffect}from "react";
import Axios from "axios"; 
import Recipes from "./components/recipes";
import Add from "./components/add"; 

import './App.css'
var App = () => {
  const [data, setData] = useState([]);  
 
  console.log(data);
  useEffect(() => {
    Axios.get("http://localhost:3000/recipes").then((res) => {
      setData(res.data);
     
    });
  }, []); 
 

  return (
    <div > 
      <Add />
      <Recipes data={data} />
     
    </div>
  );
};

export default App;