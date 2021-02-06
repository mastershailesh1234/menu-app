import React, { useState } from 'react';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import Searchbar from '../SearchBar/SearchBar';
import {
  EntryContainer,
  EntryContent,
  EntryItems,
  EntryH1,
  EntryP,
  EntryBtn,
  EntryLink
} from './EntryElements';


const Entry = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <EntryContainer>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      {/* <Searchbar/> */}
      <EntryContent>
        <EntryItems>
          <EntryH1>Welcome To BROCOLLI!! </EntryH1>
          <EntryP>Your grub hub</EntryP>
          <EntryBtn><EntryLink to="./Item">MENU</EntryLink></EntryBtn>
        </EntryItems>
      </EntryContent>
    </EntryContainer>
  );
};

export default Entry;
