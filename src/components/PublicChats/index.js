import React, { useState } from 'react';
import {
  Button,
  ChatDiv,
  ChatContainer,
  ChatContainerArrow,
  ChatContainerTitle,
  ChatList,
  SearchChatContainer
} from '../Sidebar/styles';
import NewChat from '../NewChat';
import { useSelector } from 'react-redux';
import SearchChat from '../SearchChat';

const PublicChats = () => {
  // Get categories from state
  const categories = useSelector((state) => state.category.categories);

  // State to show
  const [showPublicChats, setShowPublicChats] = useState(false);
  // State to add new Ca
  const [showNewCategory, setShowNewCategory] = useState(false);

  const handleShowPublicChats = () => {
    setShowPublicChats(!showPublicChats);
  };
  return (
    <ChatDiv>
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
        <SearchChatContainer>
          <Button
            type="button"
            onClick={() => setShowNewCategory(true)}
            show={showNewCategory}
          >
            Add New Chat
          </Button>
          <NewChat
            showNewCategory={showNewCategory}
            setShowNewCategory={setShowNewCategory}
          />

          <SearchChat data={categories} />
        </SearchChatContainer>
      </ChatList>
    </ChatDiv>
  );
};

export default PublicChats;
