import React from 'react';
import Header from '../components/Header.jsx';
import BottomNav from '../components/BottomNav.jsx';

const Home = () => {
  return (
    <div className='container relative'>
      <Header/>
        <h1>Home</h1>
      <BottomNav/>
    </div>
  );
};


export default Home;
