import React from 'react';
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
  return (
    <Aside>
      <Logo>
        <h1>WASAP</h1>
      </Logo>

      <Chat>
        <ChatContainer>
          <ChatContainerArrow>
            <span>
              <i className="fas fa-angle-down" />
            </span>
          </ChatContainerArrow>
          <ChatContainerTitle>
            <span>Private Chats</span>
          </ChatContainerTitle>
        </ChatContainer>

        <ChatList>
          <SearchChat>
            <Button type="button">Add Chat</Button>
            <input type="text" placeholder="Search chat..." />
            <Results>
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
        <ChatContainer>
          <ChatContainerArrow>
            <span>
              <i className="fas fa-angle-down" />
            </span>
          </ChatContainerArrow>
          <ChatContainerTitle>
            <span>Public Chats</span>
          </ChatContainerTitle>
        </ChatContainer>

        <ChatList>
          <SearchChat>
            <Button type="button">Add Chat</Button>
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
