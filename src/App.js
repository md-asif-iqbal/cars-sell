import logo from "./logo.svg";
import "./App.css";
import NavBar from "./Pages/Shared/NavBar/NavBar";
import Banners from "./Pages/Home/Banners/Banners";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Log-in/Login/Login";

function App() {
  return (
    <div className="App" >
      
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      

    </div>
  );
}

export default App;
