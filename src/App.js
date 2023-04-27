import './App.css';
import Navbar from './components/Navbar.mjs';
import TextForm from './components/TextForm.mjs';
import About from './components/About.mjs';
import Settings from './components/Settings.mjs';
import Alert from './components/Alert.mjs';
import ColorPalette from './components/colorPalette.mjs';
import TextSearchWindow from './components/TextSearchWindow.mjs';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {

  const [theme, setTheme] = useState({ color: "white", backgroundColor: "#290661" });
  const [isDarkModeEnable,toggleDarkModeState] = useState(false);
  const [alertText, setAlertText] = useState(null);
  const [showColorPalette, setShowColorPalette] = useState(false);
  const [listOfColors,setListOfColors] = useState(['#290661','#031633','#58151c','#561435','#653208','#0a3622','#0d503c','#055160','#343a40'])
  const [showTextSearchWindow,setShowTextSearchWindow] = useState(false);
  const [searchBoxText,setSearchBoxText] = useState('');
  const [modifiedText,setModifiedText] = useState('');

  const showAlert = (status) => {

    setAlertText(status);

  }
  

  return (

    <Router>
      <div id="App">

        <Navbar title={'TextIn'} theme={theme} isDarkModeEnable={isDarkModeEnable} toggleDarkModeState={toggleDarkModeState} setShowTextSearchWindow={setShowTextSearchWindow} showTextSearchWindow={showTextSearchWindow} setSearchBoxText={setSearchBoxText}/>
        <Alert msg={alertText} func={setAlertText}  />
        <ColorPalette showColorPalette={showColorPalette} setShowColorPalette={setShowColorPalette} listOfColors={listOfColors} setListOfColors={setListOfColors} setTheme={setTheme}/>
        <TextSearchWindow showTextSearchWindow={showTextSearchWindow} setShowTextSearchWindow={setShowTextSearchWindow} searchBoxText={searchBoxText} setModifiedText={setModifiedText} modifiedText={modifiedText}/>

        <Routes>
          <Route path="/" element={<TextForm theme={theme} isDarkModeEnable={isDarkModeEnable} showAlert={showAlert} modifiedText={modifiedText} setModifiedText={setModifiedText}/>} />
          <Route path="/about" element={<About theme={theme} isDarkModeEnable={isDarkModeEnable} />} />
          <Route path="/settings" element={<Settings showColorPalette={showColorPalette} setShowColorPalette={setShowColorPalette} listOfColors={listOfColors} isDarkModeEnable={isDarkModeEnable} theme={theme} setTheme={setTheme}/>}/>
        </Routes>


      </div>
    </Router>

  );
}

export default App;
