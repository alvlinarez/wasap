import styled from 'styled-components';

export const Input = styled.input`
  visibility: ${(props) => (props.show ? 'visible' : 'hidden')};
`;
