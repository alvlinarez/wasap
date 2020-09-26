import React from 'react';
import {DivContainer, DivContent} from './styles';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';

const Layout = ({children}) => {
  return (
    <DivContainer>
      <Sidebar />

      <DivContent>

        <Navbar />

        {children}

      </DivContent>
    </DivContainer>
  );
};

export default Layout;
