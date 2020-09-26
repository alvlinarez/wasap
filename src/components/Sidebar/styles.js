import styled from 'styled-components';

export const Aside = styled.aside`
  height: 100%;
  width: 25%;
  position: fixed;
`;

export const Logo = styled.div`
  background-color: #ece5dd;
  text-align: center;
  padding: 10px;
  width: 100%;
  margin-bottom: 20px;
`;

export const Chat = styled.div`
  padding-bottom: 20px;
`;

export const ChatContainer = styled.div`
  padding: 10px;
  margin: 0 20px;
  background-color: #a6a6a4;
  display: flex;
  border-radius: 10px;
  cursor: pointer;
  & i {
    cursor: pointer;
  }
`;

export const ChatContainerArrow = styled.div`
  width: 20%;
  text-align: right;
`;

export const ChatContainerTitle = styled.div`
  width: 60%;
  text-align: center;
  user-select: none;
`;

export const PlusIcon = styled.i`
  margin-right: 20px;
`;

export const ChatList = styled.div`
  display: ${(props) => (props.show ? 'block' : 'none')};
  margin: 0 20px;
  background-color: #e8e8e8;
  border-radius: 10px;
  height: 200px;
  ul {
    padding: 0;
    margin-top: 0;
  }
  li {
    text-align: center;
    list-style: none;
    padding: 10px 0;
  }
`;

export const SearchChat = styled.div`
  padding-top: 10px;
  text-align: center;
  input {
    padding: 0;
    margin: 0;
    width: 80%;
    height: 30px;
    border-radius: 5px;
  }
`;

export const Results = styled.div`
  padding: 5px 0;
  text-align: center;
  height: 100px;
  overflow-y: scroll;
  width: 80%;
  margin: 0 10%;
`;

export const Button = styled.button`
  width: 80%;
  height: 30px;
  margin: 10px 0;
  padding: 0;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #cccccc;
  }
`;

export const ResultItem = styled.div`
  padding: 10px 0;
  &:hover {
    background-color: #cccccc;
    cursor: pointer;
  }
`;
