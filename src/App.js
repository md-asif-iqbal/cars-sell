import logo from "./logo.svg";
import "./App.css";
import NavBar from "./Pages/Shared/NavBar/NavBar";
import Banners from "./Pages/Home/Banners/Banners";

function App() {
  return (
    <div className="App" >
      <NavBar></NavBar>
      <Banners/>
      <Banners/>
      <Banners/>
    </div>
  );
}

export default App;
