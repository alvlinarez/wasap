import React from 'react';
import userIcon from '../../../public/static/user-icon.png';
import { Dropdown, DropdownContent, Nav, Username } from './styles';

const Navbar = () => {
  return (
    <Nav>
      <ul>
        <li>
          <Username>
            <p>Hello: username</p>
            <span>
              <i className="far fa-edit" />
            </span>
          </Username>
        </li>
        <li>
          <Dropdown>
            <img src={userIcon} alt="user-icon" />
            <DropdownContent>
              <a href="#">username 1</a>
              <a href="#">username 2</a>
              <a href="#">
                Add user <i className="fas fa-plus" />
              </a>
            </DropdownContent>
          </Dropdown>
        </li>
      </ul>
    </Nav>
  );
};

export default Navbar;
