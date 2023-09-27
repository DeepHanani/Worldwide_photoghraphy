import logo from './logo.svg';
import './App.css';
import Dropdown from './Componets/Dropdown';
import AboutPage from './Componets/AboutPage/AboutPage';
import { Route, Routes } from 'react-router-dom';
import WinnersPage from './Componets/Winners/WinnersPage';
import ContactPage from './Componets/Conatct/ContactPage';

function App() {
  return (
    <div className="App">
    <Routes>
    <Route path="/" element = {<Dropdown/>}></Route>
    <Route path="/about" element = {<AboutPage/>}></Route>
    <Route path="/winners" element = {<WinnersPage/>}></Route>
    <Route path="/contact" element = {<ContactPage/>}></Route>
    
   
   
    </Routes>
    </div>
  );
}

export default App;
