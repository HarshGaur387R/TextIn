import './App.css';
import Navbar from './components/Navbar.mjs';
import TextForm from './components/TextForm.mjs';
import About from './components/About.mjs';
import Alert from './components/Alert.mjs'
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {

  const [mode, setMode] = useState({ color: "black", backgroundColor: "white" });
  const [navbarMode, setNavbarMode] = useState("light");
  const [textFormMode, setTextFormMode] = useState({ mode: 'light'});
  const [alertText, setAlertText] = useState(null);


  const showAlert = (status) => {

    setAlertText(status);

  }


  const toggleMode = () => {
    if (mode.color === "black") {
      setMode({ color: "white", backgroundColor: "black" });
      setNavbarMode("dark");
      setTextFormMode({mode : 'dark'});
    }

    else if (mode.color === "white") {
      setMode({ color: "black", backgroundColor: "white" });
      setNavbarMode("light");
      setTextFormMode({mode : 'light'});
    }
  }

  return (

    <Router>
      <div id="App">

        <Navbar title={'TextIn'} toggleMode={toggleMode} mode={navbarMode} />
        <Alert msg={alertText} func={setAlertText} />

        <Routes>
          <Route path="/" element={<TextForm mode={textFormMode} showAlert={showAlert} />} />
          <Route path="/about" element={<About mode={mode} />} />
        </Routes>

      </div>
    </Router>

  );
}

export default App;
