import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Archived from './pages/Archived.jsx';
import Call from './pages/Call.jsx';

const App = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/archived' element={<Archived />} />
          <Route path='/call/:id' element={<Call/>} />

          <Route path='*' element={<h1>Not Found</h1>} />
        </Routes>
      </BrowserRouter>
  );
};

ReactDOM.render(<App/>, document.getElementById('app'));

export default App;
