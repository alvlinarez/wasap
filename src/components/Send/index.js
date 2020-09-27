import React from 'react';
import { SendContainer, SendDiv } from './styles';

const Send = () => {
  return (
    <SendDiv className="send">
      <SendContainer className="send-container">
        <textarea name="" id="" placeholder="Type your message..." />
        <button>
          <i className="far fa-paper-plane" />
        </button>
      </SendContainer>
    </SendDiv>
  );
};

export default Send;
