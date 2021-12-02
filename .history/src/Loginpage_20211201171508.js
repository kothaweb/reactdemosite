import { render } from "@testing-library/react";
import React,{useState} from "react";

class Loginform = () =>{
 const [data,setData]=useState({
   userName : '',
   password : ''


 })
const {username, password} = data;
 render(
     <div className="logindiv">
     
     <form action="/action_page.php">
    <label for="fname">Name</label>
    <input type="text" name="username" placeholder="User name.." value={username} />

    <label for="lname">Password</label>
    <input type="password" name="password" placeholder="Password.." value={password}/> 

 
  
    <input type="submit" value="Submit" />
  </form>
     </div>
 )


}