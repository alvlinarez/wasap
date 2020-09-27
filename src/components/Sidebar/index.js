import React, { useState } from 'react';
import {
  Aside,
  Button,
  Chat,
  ChatContainer,
  ChatContainerArrow,
  ChatContainerTitle,
  ChatList,
  Logo,
  ResultItem,
  Results,
  SearchChat
} from './styles';
import { useSelector } from 'react-redux';
import NewChat from '../NewChat';
import PrivateChats from '../PrivateChats';
import PublicChats from '../PublicChats';

const Sidebar = () => {
  return (
    <Aside>
      <Logo>
        <h1>WASAP</h1>
      </Logo>

      <PrivateChats />

      <PublicChats />
    </Aside>
  );
};

export default Sidebar;
