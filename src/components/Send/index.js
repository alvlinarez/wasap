import React, { useState } from 'react';
import { SendContainer, SendDiv } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../../actions/messageActions';

const Send = () => {
  const [message, setMessage] = useState('');
  const currentUser = useSelector((state) => state.user.currentUser);
  const currentConversation = useSelector(
    (state) => state.conversation.currentConversation
  );
  const dispatch = useDispatch();

  const handleSendMessage = () => {
    if (message.trim() === '') {
      return;
    }
    dispatch(
      addMessage({
        senderId: currentUser.id,
        conversationId: currentConversation.id,
        text: message
      })
    );
    setMessage('');
  };

  return (
    <SendDiv>
      <SendContainer>
        <textarea
          name=""
          id=""
          placeholder="Type your message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="button" onClick={handleSendMessage}>
          <i className="far fa-paper-plane" />
        </button>
      </SendContainer>
    </SendDiv>
  );
};

export default Send;
