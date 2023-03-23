import HomePage from "../src/pages/HomePage/HomePage"
import Register from "../src/pages/user/Register"
import BookListPage from "../src/pages/BookListPage/BookListPage"
import Login from "../src/pages/user/Login"
import { Routes, Route, } from "react-router-dom";
import "./App.css"


function App() {
  return (
    <>

      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path='/login' element={<Login/>}/>   
        <Route path="/" element={<HomePage/> }/> 
        <Route path="/booklist" element={<BookListPage/> }/> 

      </Routes>

    </>
  );
}

export default App;