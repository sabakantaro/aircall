import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home.jsx';
import Archived from './pages/Archived.jsx';

const App = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/archived" element={<Archived />} />
        </Routes>
      </BrowserRouter>
  );
};

ReactDOM.render(<App/>, document.getElementById('app'));

export default App;
