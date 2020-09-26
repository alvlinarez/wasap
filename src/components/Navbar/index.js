import React, { useState } from 'react';
import userIcon from '../../../public/static/user-icon.png';
import { Dropdown, DropdownContent, LiUsername, Nav, Username } from './styles';
import EditUsername from '../EditUsername';
import { useSelector } from 'react-redux';

const Navbar = () => {
  // Get users from reducer
  const { name } = useSelector((state) => state.user.currentUser);
  const users = useSelector((state) => state.user.users);

  const [editUsername, setEditUsername] = useState(false);
  return (
    <Nav>
      <ul>
        <LiUsername>
          <Username show={editUsername}>
            <p>Hello: {name}</p>
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
              {users &&
                users.map((user) => (
                  <a key={user.id} href="#">
                    {user.name}
                  </a>
                ))}
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
