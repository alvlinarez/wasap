import styled from 'styled-components';

export const SendDiv = styled.div`
  bottom: 0;
  width: 100%;
  background-color: #ece5dd;
  padding: 20px 0;
`;

export const SendContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 20px;
  textarea {
    width: 80%;
    height: 66px;
    border-radius: 15px;
    font-size: 15px;
  }
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 10%;
    font-size: 25px;
    color: #e8e8e8;
    background: #128c7e;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    &:hover {
      background-color: #075e54;
    }
  }
`;
