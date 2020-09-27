import React, { useState } from 'react';
import {
  Chat,
  ChatContainer,
  ChatContainerArrow,
  ChatContainerTitle,
  ChatList,
  ResultItem,
  Results,
  SearchChatContainer
} from '../Sidebar/styles';
import { useSelector } from 'react-redux';
import SearchChat from '../SearchChat';

const PrivateChats = () => {
  const users = useSelector((state) => state.user.users);

  const [showPrivateChats, setShowPrivateChats] = useState(false);

  const handleShowPrivateChats = () => {
    setShowPrivateChats(!showPrivateChats);
  };
  return (
    <Chat>
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
    </Chat>
  );
};

export default PrivateChats;
