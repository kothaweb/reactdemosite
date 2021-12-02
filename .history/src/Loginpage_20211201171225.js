import { render } from "@testing-library/react";
import React,{useState} from "react";

class Loginform = () =>{
 const [data,setData]=useState({
   userName : '',
   password : ''


 })
const {us}
 render(
     <div className="logindiv">
     
     <form action="/action_page.php">
    <label for="fname">Name</label>
    <input type="text" name="username" placeholder="Your name.." />

    <label for="lname">Password</label>
    <input type="password" name="password" placeholder="Your last name.." /> 

 
  
    <input type="submit" value="Submit" />
  </form>
     </div>
 )


}