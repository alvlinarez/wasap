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

const Sidebar = () => {
  // Get users and categories from state
  const currentUser = useSelector((state) => state.user.currentUser);
  const users = useSelector((state) => state.user.users);
  const categories = useSelector((state) => state.category.categories);

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
              {users && users.length <= 1 ? (
                <div>No users to chat yet.</div>
              ) : (
                users.map((user) => {
                  if (user.id !== currentUser.id)
                    return <ResultItem key={user.id}>{user.name}</ResultItem>;
                })
              )}
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
              {categories &&
                categories.map((category) => (
                  <ResultItem key={category.id}>{category.name}</ResultItem>
                ))}
            </Results>
          </SearchChat>
        </ChatList>
      </Chat>
    </Aside>
  );
};

export default Sidebar;
