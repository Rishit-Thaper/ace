import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Academics from './Pages/Academics';
import Admissions from './Pages/Admissions';
import Departments from './Pages/Departments';
import Contact from './Pages/Contact';
import Footer from './Components/Footer';
import {BrowserRouter,Route,Routes}from "react-router-dom";
function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/acadmics' element={<Academics/>}/>
        <Route path='/departments' element={<Departments/>}/>
        <Route path='/admissions' element={<Admissions/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/careers' element={<Academics/>}/>
        <Route path='/blog' element={<Academics/>}/>
        <Route path='/programs' element={<Academics/>}/>
        <Route path='/photo-gallery' element={<Academics/>}/>
        <Route path='/societies' element={<Academics/>}/>
        <Route path='/events' element={<Academics/>}/>
        <Route path='/sports' element={<Academics/>}/>
        <Route path='/ace-in-news' element={<Academics/>}/>
        <Route path='/conovocations' element={<Academics/>}/>
        <Route path='/placements' element={<Academics/>}/>
        <Route path='/management' element={<Academics/>}/>
        <Route path='/our-collaborations' element={<Academics/>}/>
        <Route path='/alumni-meets' element={<Academics/>}/>
        <Route path='/rules-regulations' element={<Academics/>}/>
        <Route path='/terms-and-conditions' element={<Academics/>}/>
        <Route path='/student-grievance-redressal-form' element={<Academics/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
