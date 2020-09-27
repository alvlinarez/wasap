import React, { useEffect } from 'react';
import {
  ChatContainer,
  Main,
  Message,
  MessageContainer,
  MessageSender,
  MessageText,
  MessageTextReply
} from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { deleteMessage, getMessages } from '../../actions/messageActions';

const Chat = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const users = useSelector((state) => state.user.users);
  const currentConversation = useSelector(
    (state) => state.conversation.currentConversation
  );
  const currentMessages = useSelector((state) => state.message.currentMessages);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMessages(currentConversation.id));
  }, [currentConversation]);

  const getUserName = (id) => {
    const { name } = users.find((u) => u.id === id);
    return name;
  };

  const handleDeleteMessage = (id) => {
    dispatch(deleteMessage(id));
  };

  return (
    <Main>
      <ChatContainer>
        {currentMessages.length === 0 ? (
          <div>Start Chatting</div>
        ) : (
          currentMessages.map((message) => (
            <MessageContainer
              key={message.id}
              reply={message.senderId === currentUser.id}
            >
              <Message>
                <MessageSender>
                  {message.senderId === currentUser.id ? (
                    <>
                      <span>{currentUser.name}:</span>
                      <span onClick={() => handleDeleteMessage(message.id)}>
                        <i className="far fa-trash-alt" />
                      </span>
                    </>
                  ) : (
                    <>
                      <span>{getUserName(message.senderId)}:</span>
                    </>
                  )}
                </MessageSender>
                {message.senderId === currentUser.id ? (
                  <MessageTextReply>
                    <p>
                      {message.deleted ? (
                        <i>This message was deleted</i>
                      ) : (
                        message.text
                      )}
                    </p>
                  </MessageTextReply>
                ) : (
                  <MessageText>
                    <p>{message.text}</p>
                  </MessageText>
                )}
              </Message>
            </MessageContainer>
          ))
        )}
      </ChatContainer>
    </Main>
  );
};

export default Chat;
