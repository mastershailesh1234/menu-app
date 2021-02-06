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
  EntryH1
} from './components/Entry/EntryElements';

  

function FullMenu() {const [isOpen, setIsOpen] = useState(false);

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
            <EntryH1>Full Menu </EntryH1>
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

export default FullMenu;
