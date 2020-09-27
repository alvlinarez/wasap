import styled from 'styled-components';

export const NewChatContainer = styled.div`
  display: ${(props) => (props.show ? 'block' : 'none')};
`;

export const NewChatIcons = styled.div`
  span {
    margin: 10px;
    cursor: pointer;
  }
`;
