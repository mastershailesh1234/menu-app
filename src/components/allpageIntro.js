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
