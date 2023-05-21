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
import Blogs from './Components/Blogs'
import Bio from './Components/Bio';
import Placements from './Pages/Placements';
import Iete from './Components/Iete';
import BlogContent from './Pages/BlogContent';
import Dc from './Components/Dc';
import Facilities from './Components/Facilities';
import Management from './Components/Management';
import Mission from './Components/Mission';
import useFetch from './hooks/useFetch';
import Career from './Pages/Career';

function App() {
  let {loading, data, error} =useFetch('http://localhost:1337/api/blogs?populate=*')
  let {loading: load, data: jobData, error: err} =useFetch('http://localhost:1337/api/jobs?populate=*')
  if(load || loading) return <p>Loading</p>
  if(error || err) return <p>There is a network error</p>
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/query' element={<Query/>}/>
        <Route path='/' element={<Home blogs={data?data:""}/>}/>
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
        <Route path='/facilities' element={<Facilities />} />
        <Route path='/management' element={<Management />} />
        <Route path= '/mission' element={<Mission />} />
        <Route path='/sports' element={<Sports/>}/>
        <Route path='/placements' element={<Placements/>}/>
        <Route path='/blogs' element={<Blogs blogs={data?data:""} />}></Route>
        <Route path='/blogs/:id'element={<BlogContent blogs={data?data:""} />} />
        <Route path='/careers' element={<Career jobs={jobData?jobData:""}/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
