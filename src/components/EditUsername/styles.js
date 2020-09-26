import styled from 'styled-components';

export const EditUsernameContainer = styled.div`
  display: ${(props) => (props.show ? 'block' : 'none')};
  input {
    padding: 5px 25px;
    border-radius: 5px;
    margin-right: 10px;
  }
  i {
    margin: 0 5px;
    cursor: pointer;
  }
`;
