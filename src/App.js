import React from "react";
// import SidebarNav from "./components/sidebarNav";
import Home from "./components/home";
import About from "./components/about";
// import Experience from "./components/experience";
// import Projects from "./components/projects.js";
// import Credits from "./components/credits.js";

import './App.css';
import './styles/global.css'

function App() {
  return (
    <div className="App">
      <div id="content">
        <Home></Home>
        <About></About>
        {/* <Experience></Experience>
        <Projects></Projects>
        <Credits></Credits> */}
      </div>
      {/* <SidebarNav /> */}
    </div>
  );
}

export default App;
