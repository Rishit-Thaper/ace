import './App.css';
import Navbar from './Components/Navbar';
import Me from './Components/Me';
import Cse from './Components/Cse';
import Ece from './Components/Ece';
import Events from './Pages/Events';
import Applied from './Components/Applied';
import Iic from './Pages/Iic'
import Bt from './Components/Bt';
import Aiml from './Components/Aiml';
import Auto from './Components/Auto';
import Home from './Pages/Home';
import Sdp from './Pages/Sdp'
import Society from './Pages/Society';
import About from './Pages/About';
import Nptel from './Pages/Nptel';
import Admissions from './Pages/Admissions';
import Departments from './Pages/Departments';
import Contact from './Pages/Contact';
import Footer from './Components/Footer';
import {BrowserRouter,Route,Routes}from "react-router-dom";
import Query from './Components/Query';
import Eru from './Components/Eru';
import Sports from './Pages/Sports';
import Csi from './Components/Csi';
import Bio from './Components/Bio';
import Placements from './Pages/Placements';
import Iete from './Components/Iete';
import Dc from './Components/Dc';

function App() {

  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/query' element={<Query/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/nptel' element={<Nptel/>}/>
        <Route path='/departments' element={<Departments/>}/>
        <Route path='/admissions' element={<Admissions/>}/>
        <Route path='/departments/cse' element={<Cse/>}/>
        <Route path='/departments/me' element={<Me/>}/>
        <Route path='/departments/bt' element={<Bt/>}/>
        <Route path='/departments/ece' element={<Ece/>}/>
        <Route path='/departments/aiml' element={<Aiml/>}/>
        <Route path='/departments/auto-robo' element={<Auto/>}/>
        <Route path='/departments/apd' element={<Applied/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/iic' element={<Iic/>}/>
        <Route path='/ace-sdp' element={<Sdp/>}/>
        <Route path='/societies' element={<Society/>}/>
        <Route path='/societies/erudition' element={<Eru/>}/>
        <Route path='/societies/csi' element={<Csi/>}/>
        <Route path='/societies/biochepron' element={<Bio/>}/>
        <Route path='/societies/design-club' element={<Dc/>}/>
        <Route path='/societies/iete-forum' element={<Iete/>}/>
        <Route path='/events' element={<Events/>}/>
        <Route path='/sports' element={<Sports/>}/>
        <Route path='/placements' element={<Placements/>}/>

        {/*<Route path='/photo-gallery' element={<Academics/>}/>

        <Route path='/ace-in-news' element={<Academics/>}/>
        <Route path='/our-collaborations' element={<Academics/>}/>
        <Route path='/rules-regulations' element={<Academics/>}/>
        <Route path='/terms-and-conditions' element={<Academics/>}/>
        <Route path='/student-grievance-redressal-form' element={<Academics/>}/> */}
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
