import React,{ useState } from 'react';
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

function SoupStarter() {
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
          <EntryH1>Stater And Soups </EntryH1>
          <EntryP>Soup, Veg and Non-Veg Stater, Tikka</EntryP>
        </EntryItems>
      </EntryContainer>

         
        <Feature name="Soup" />
        <Products data={All.soup} />
        <Feature name="Stater (Veg)" />
        <Products data={All.StaterVeg} />
        <Feature  name="Stater (Non-Veg)" />
        <Products data={All.starterNonVeg} />
        <Feature name="Tikka"/>
        <Products data={All.tikka} />
       
        <Footer />
    </div>
  );
}

export default SoupStarter;