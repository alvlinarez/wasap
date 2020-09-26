import React, { useState } from 'react';
import userIcon from '../../../public/static/user-icon.png';
import { Dropdown, DropdownContent, LiUsername, Nav, Username } from './styles';
import EditUsername from '../EditUsername';

const Navbar = () => {
  const [editUsername, setEditUsername] = useState(false);
  return (
    <Nav>
      <ul>
        <LiUsername>
          <Username show={editUsername}>
            <p>Hello: username</p>
            <span onClick={() => setEditUsername(true)}>
              <i className="far fa-edit" />
            </span>
          </Username>

          <EditUsername
            editUsername={editUsername}
            setEditUsername={setEditUsername}
          />
        </LiUsername>
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
