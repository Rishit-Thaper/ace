import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Academics from './Pages/Academics';
import Footer from './Components/Footer';
import Beyond from './Pages/Beyond';
import {BrowserRouter,Route,Routes}from "react-router-dom";
function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/beyond' element={<Beyond/>}/>
        <Route path='/acadmics' element={<Academics/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
