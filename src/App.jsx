import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ActivityFeed from './pages/ActivityFeed.jsx';
import Archive from './pages/Archive.jsx';
import ActivityDetail from './pages/ActivityDetail.jsx';
import Voicemail from './pages/Voicemail.jsx';
import NotFound from './pages/NotFound.jsx';

const App = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<ActivityFeed />} />
          <Route path='/archive' element={<Archive />} />
          <Route path='/voicemail' element={<Voicemail />} />
          <Route path='/call/:id' element={<ActivityDetail/>} />

          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
  );
};

ReactDOM.render(<App/>, document.getElementById('app'));

export default App;
