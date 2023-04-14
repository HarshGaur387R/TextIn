import './App.css';
import Navbar from './components/Navbar.mjs';
import TextForm from './components/TextForm.mjs';
import About from './components/About.mjs';
import Alert from './components/Alert.mjs'
import { useState } from 'react';


function App() {

  const [mode, setMode] = useState({ color: "black", backgroundColor: "white" });
  const [navbarMode,setNavbarMode] = useState("light");
  const [textFormMode, setTextFormMode] = useState({bg:"white",color:"black",textarea:"white"});
  const [alertText, setAlertText] = useState(null);

  
  const showAlert = (status) =>{

    setAlertText(status);
    
  }
 

  const toggleMode = () => {
    if (mode.color === "black") {
      setMode({ color: "white", backgroundColor: "black" });
      setNavbarMode("dark");
      setTextFormMode({bg:"black",color:"white",textarea:"gray"});

      document.getElementById('textForm').style.backgroundColor = "black";
      document.getElementById('textForm').style.color = "white";

      document.getElementById('floatingTextarea2').style.backgroundColor = "#343a40"
      document.getElementById("floatingTextarea2").style.color = "white";

      document.getElementById('preview').style.color = "white";
    }

    else if (mode.color === "white") {
      setMode({ color: "black", backgroundColor: "white" });
      setNavbarMode("light");
      setTextFormMode({bg:"white",color:"black",textarea:"white"});

      document.getElementById('textForm').style.backgroundColor = "white";
      document.getElementById('textForm').style.color = "black";

      document.getElementById('floatingTextarea2').style.backgroundColor = "white"
      document.getElementById("floatingTextarea2").style.color = "black";

      document.getElementById('preview').style.color = "black";
    }
  }

  return (

    <div id="App">
    <Navbar title={'TextIn'} toggleMode={toggleMode} mode={navbarMode}/>
    <Alert msg={alertText} func={setAlertText}/>
    <TextForm mode={textFormMode} showAlert={showAlert}/> 
    <About mode={mode}/> 
    </div>
   
  );
}

export default App;
