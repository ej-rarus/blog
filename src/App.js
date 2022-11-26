/* eslint-disable */

import './App.css';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';

import Navibar from './components/Navibar.js';
import NotFound from './pages/NotFound';


function App() {
  return (
    <div className="App">


      <Navibar></Navibar>

      <BrowserRouter>
        <Routes>
          <Route path='*' element={<NotFound />}></Route>
        </Routes>

      </BrowserRouter>
    </div>


  );
}

export default App;
