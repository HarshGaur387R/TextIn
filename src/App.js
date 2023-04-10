import './App.css';
import Navbar from './components/Navbar.mjs';
import TextForm from './components/TextForm.mjs';

function App() {
  return (
    <div className="App">
      <Navbar title={'TextIn'}/>
      <TextForm/>
    </div>
  );
}

export default App;
