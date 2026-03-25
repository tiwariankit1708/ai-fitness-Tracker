import { useEffect } from "react";
import Navbar from "./components/Navbar.jsx"
import HomePage from "./components/HomePage.jsx"
function App(){
  useEffect(()=>{
    // dekho iska bad wla array ma we write te=he functions that need to be cahnges, and when that changes, this function gets called
    //run this code when variable gets updated
    console.log("App loaded")

    return ()=>{

    }
  },[]);

  return (
    <div>
      <Navbar/>
      <HomePage/>
    </div>
  )
}

export default App
