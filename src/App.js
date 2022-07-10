import './App.css';
import NavBar from "./NavBar.js"
import Body from "./Body.js"
import Footer from "./footer"
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import About from './about/App.js';
import Filters from "./filter/App.js"
import Profile from "./yourprofile/App.js"
import Categories from './Categories/component';
function App() {
  return (

    <Router>
    <div className="Site">
    <NavBar/>
    <Routes>
        <Route exact path='/' element={<Body />} />
        <Route path='/about' element={<About/>} />
        <Route path='/displays' element={<Filters/>} />
        <Route path ='/yourprofile' element={<Profile/>} />
        <Route path ='/Categories' element={<Categories/>} />
    </Routes>
    </div>
    <Footer/>
    </Router>


    
  );
}

export default App;
