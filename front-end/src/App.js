
import Login from "../src/component/user/Login";
import Register from "../src/component/user/Register";
import { Routes,  Route,} from "react-router-dom";
import Home from "../src/component/Home";

function App() {
  return (
    <> 
  
      <Routes>
        <Route path="/" element={<Home/>} /> 
        <Route path='/login' element={<Login/>}/>   
         <Route path="/register" element={<Register/> }/> 
    </Routes>
  
    </>
  );
}

export default App;
