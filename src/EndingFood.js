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
  EntryH1
} from './components/Entry/EntryElements';

function EndingFood() {
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
          <EntryH1>Dessert, Mocktail And Beverages</EntryH1>
        </EntryItems>
      </EntryContainer>
        <Feature name="Dessert" />
        <Products data={All.dessert} />
        <Feature name="Mocktails"/>
        <Products data={All.mocktails} />
        <Feature name="Beverages"/>
        <Products data={All.beverages} />
       
        <Footer />
    </div>
  );
}

export default EndingFood;  
        