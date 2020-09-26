import styled from 'styled-components';

export const Nav = styled.nav`
  display: grid;
  background: #ece5dd;
  border-left: 1px solid #cccccc;
  ul {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    li {
      list-style: none;
      text-align: center;
    }
  }
`;

export const Username = styled.div`
  display: flex;
  align-items: center;
  span {
    margin-left: 20px;
    &:hover {
      cursor: pointer;
    }
  }
`;

export const DropdownContent = styled.div`
  position: absolute;
  display: none;
  z-index: 1;
  margin-left: -40px;
  a {
    color: black;
    text-decoration: none;
    display: block;
    padding: 5px 0;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const Dropdown = styled.div`
  position: relative;
  display: inline-block;
  &:hover {
    img {
      cursor: pointer;
    }
  }
  &:hover ${DropdownContent} {
    display: block;
  }
`;
