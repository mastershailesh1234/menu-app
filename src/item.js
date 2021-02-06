import React,{ useState } from 'react';
import { GlobalStyle } from './globalStyles';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import {
  EntryContainer,
  EntryItems,
  EntryH1
} from './components/Entry/EntryElements';
import Category from './components/Category';

  

function FullMenu() {const [isOpen, setIsOpen] = useState(false);

    return (
      <div>
        <GlobalStyle />
        <h1 style={{padding: "1 rem"}, {textAlign: "center"}}>Our Menu</h1>
        <Category />
        <Footer />
    </div>
  );
}

export default FullMenu;