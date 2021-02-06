import React from 'react';
// import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Entry from './components/Entry';
import Footer from './components/Footer';
import Category from './components/Category';


function Home() {
  return (
    <div>
      <GlobalStyle />
      <Entry />
      {/* <h1 style={{padding: "1 rem"}, {textAlign: "center"}}>Our Menu</h1> */}
      {/* <Category />
      <Footer /> */}
    </div>
  );
}

export default Home;
