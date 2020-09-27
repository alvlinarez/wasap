import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import SearchChat from '../SearchChat';
import {
  ChatDiv,
  ChatContainer,
  ChatContainerArrow,
  ChatContainerTitle,
  SearchChatContainer
} from '../Sidebar/styles';
import { ChatList } from './styles';

const PrivateChats = () => {
  const users = useSelector((state) => state.user.users);

  const [showPrivateChats, setShowPrivateChats] = useState(false);

  const handleShowPrivateChats = () => {
    setShowPrivateChats(!showPrivateChats);
  };
  return (
    <ChatDiv>
      <ChatContainer onClick={handleShowPrivateChats}>
        <ChatContainerArrow>
          {showPrivateChats ? (
            <span>
              <i className="fas fa-angle-up" />
            </span>
          ) : (
            <span>
              <i className="fas fa-angle-down" />
            </span>
          )}
        </ChatContainerArrow>
        <ChatContainerTitle>
          <span>Private Chats</span>
        </ChatContainerTitle>
      </ChatContainer>

      <ChatList show={showPrivateChats}>
        <SearchChatContainer>
          <SearchChat data={users} user />
        </SearchChatContainer>
      </ChatList>
    </ChatDiv>
  );
};

export default PrivateChats;
