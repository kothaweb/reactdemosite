import "./App.css";
import Loginpage from "./Loginpage";
import { Link, Routes, Route } from "react-router-dom";
import Signuppage from "./Signup-form";

function App() {
  return (
    <div className="App">
      <Link to="/Login">Login</Link> | <Link to="/Signup">Signup</Link>
      <Routes>
        <Route path="/Login" element={<Loginpage />} />
        <Route path="/Signup" element={<Signuppage />} />
      </Routes>
    </div>
  );
}

export default App;
