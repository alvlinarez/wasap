import styled from 'styled-components';

export const ChatList = styled.div`
  display: ${(props) => (props.show ? 'block' : 'none')};
  margin: 0 20px;
  background-color: #e8e8e8;
  border-radius: 10px;
  height: 150px;
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
