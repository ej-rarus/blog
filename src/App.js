/* eslint-disable */

import './App.css';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';

import Navibar from './components/Navibar.js';


function App() {
  return (
    <div className="App">


      <Navibar></Navibar>

      <BrowserRouter>
        <Routes>
          <Route>

          </Route>
        </Routes>

      </BrowserRouter>
    </div>


  );
}

export default App;
