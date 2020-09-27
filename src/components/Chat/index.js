import React from 'react';
import {
  ChatContainer,
  Main,
  Message,
  MessageContainer,
  MessageSender,
  MessageText,
  MessageTextReply
} from './styles';

const Chat = () => {
  return (
    <Main>
      <ChatContainer>
        <MessageContainer reply>
          <Message>
            <MessageSender>
              <span>Candy Esquivel:</span>
              <span>
                <i className="far fa-trash-alt" />
              </span>
            </MessageSender>
            <MessageTextReply>
              <p>Chupetin</p>
            </MessageTextReply>
          </Message>
        </MessageContainer>

        <MessageContainer reply>
          <Message>
            <MessageSender>
              <span>Candy Esquivel:</span>
              <span>
                <i className="far fa-trash-alt" />
              </span>
            </MessageSender>
            <MessageTextReply>
              <p>Chupetin</p>
            </MessageTextReply>
          </Message>
        </MessageContainer>

        <MessageContainer reply>
          <Message>
            <MessageSender>
              <span>Candy Esquivel:</span>
            </MessageSender>
            <MessageTextReply>
              <p>
                <i>This message was deleted</i>
              </p>
            </MessageTextReply>
          </Message>
        </MessageContainer>

        <MessageContainer>
          <Message>
            <MessageSender>
              <span>Chupetin Trujillo:</span>
            </MessageSender>
            <MessageText>
              <p>Habil te crees ctm</p>
            </MessageText>
          </Message>
        </MessageContainer>
      </ChatContainer>
    </Main>
  );
};

export default Chat;
