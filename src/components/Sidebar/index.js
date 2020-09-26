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

const Sidebar = () => {
  const [showPrivateChats, setShowPrivateChats] = useState(false);
  const [showPublicChats, setShowPublicChats] = useState(false);

  const handleShowPrivateChats = () => {
    setShowPrivateChats(!showPrivateChats);
  };

  const handleShowPublicChats = () => {
    setShowPublicChats(!showPublicChats);
  };

  return (
    <Aside>
      <Logo>
        <h1>WASAP</h1>
      </Logo>

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
          <SearchChat>
            <input type="text" placeholder="Search chat..." />
            <Results style={{ height: '140px' }}>
              <ResultItem>username 1</ResultItem>
              <ResultItem>username 2</ResultItem>
              <ResultItem>username 3</ResultItem>
              <ResultItem>username 4</ResultItem>
              <ResultItem>username 5</ResultItem>
              <ResultItem>username 6</ResultItem>
            </Results>
          </SearchChat>
        </ChatList>
      </Chat>

      <Chat>
        <ChatContainer onClick={handleShowPublicChats}>
          <ChatContainerArrow>
            {showPublicChats ? (
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
            <span>Public Chats</span>
          </ChatContainerTitle>
        </ChatContainer>

        <ChatList show={showPublicChats}>
          <SearchChat>
            <Button type="button">Add New Chat</Button>
            <input type="text" placeholder="Search chat..." />
            <Results>
              <ResultItem>Cats</ResultItem>
              <ResultItem>Dogs</ResultItem>
              <ResultItem>Dogs</ResultItem>
              <ResultItem>Dogs</ResultItem>
              <ResultItem>Dogs</ResultItem>
              <ResultItem>Dogs</ResultItem>
            </Results>
          </SearchChat>
        </ChatList>
      </Chat>
    </Aside>
  );
};

export default Sidebar;
