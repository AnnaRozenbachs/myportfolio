
import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import About from './About'
import Work from './Work'
import Contact from './Contact'
import Home from './Home'
import './Fonts/Oswald-Regular.ttf';
import './Fonts/Oswald-Light.ttf';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min"

function App() {
  return (
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='*' element={<Navigate to="/home"/>}></Route>
      </Routes>
  );
  
}


export default App
