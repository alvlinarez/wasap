import styled from 'styled-components';

export const Main = styled.main`
  background-color: #ccc;
  height: 50%;
  display: flex;
  flex: auto;
`;

export const ChatContainer = styled.div`
  margin: 20px;
  width: 100%;
  overflow-y: scroll;
`;

export const MessageContainer = styled.div`
  display: flex;
  width: auto;
  padding-bottom: 10px;
  flex-direction: ${(props) => (props.reply ? 'row-reverse' : 'row')};
`;

export const Message = styled.div`
  width: 30%;
  span {
    font-size: 15px;
    display: block;
    padding-bottom: 5px;
  }
`;

export const MessageSender = styled.div`
  display: flex;
  justify-content: space-between;
  i {
    cursor: pointer;
  }
`;

export const MessageText = styled.div`
  background: #ffffff;
  padding: 5px;
  border-radius: 10px;
`;

export const MessageTextReply = styled.div`
  background: #dcf8c6;
  padding: 5px;
  border-radius: 10px;
`;
