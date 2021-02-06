import React,{ useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Products from './components/Products';
import { GlobalStyle } from './globalStyles';
import * as All from './components/Products/data';
import Feature from './components/Feature';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import {
  EntryContainer,
  EntryItems,
  EntryH1,
  EntryP
  
} from './components/Entry/EntryElements';

function MainCourse() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <GlobalStyle />
      <EntryContainer>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <EntryItems>
          <EntryH1>Main Course </EntryH1>
          <EntryP>Biryani, Noodles, Veg Curry, Non-veg Curry, Fride Rice, Indian Breads</EntryP>
        </EntryItems>
      </EntryContainer>

         
      <Feature name="Biryani" />
        <Products data={All.biryani} />
        <Feature name="Noodles"/>
        <Products data={All.noodles} />
        <Feature name="Veg Curry"/>
        <Products data={All.curryVeg} />
        <Feature name="Non-Veg Curry" />
        <Products data={All.curryNonVeg} />
        <Feature name="Fried Rice"/>
        <Products data={All.frideRice} />
        <Feature name="Indian Breads"/>
        <Products data={All.indianBreads} />
       
        <Footer />
    </div>
  );
}

export default MainCourse;
      
        
    