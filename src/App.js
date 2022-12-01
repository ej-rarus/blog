/* eslint-disable */

import './App.css';
import { BrowserRouter, Routes, Route, Link, useParams } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

import Navibar from './components/Navibar.js';
import About from './pages/About.js';
import Philosophy from './pages/Philosophy.js';
import Dev from './pages/Dev.js';
import Art from './pages/Art.js';
import Sport from './pages/Sport.js';
import Contact from './pages/Contact.js';
import NotFound from './pages/NotFound.js';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <div className='Main-wrapper'>
          <Navibar></Navibar>

          <Routes>
            <Route path='/'></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/philosophy' element={<Philosophy />}></Route>
            <Route path='/dev' element={<Dev />}></Route>
            <Route path='/art' element={<Art />}></Route>
            <Route path='/sport' element={<Sport />}></Route>
            <Route path='/contact' element={<Contact />}></Route>
            <Route path='*' element={<NotFound />}></Route>
          </Routes>


          <Footer></Footer>
        </div>
      </BrowserRouter>
    </div>


  );
}


export default App;
