import './App.css';
import NavBar from "./NavBar.js"
import Body from "./Body.js"
import Footer from "./footer"
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import About from './about/App.js';
function App() {
  return (
    <Router>
    <div className="NavBar">
      <NavBar/>
    <Routes>
        <Route exact path='/' element={<Body />} />
        <Route path='/about' element={<About/>} />
    </Routes>
    </div>
    <Footer/>
    </Router>
    
    
  );
}

export default App;
