import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { assignCurrentUser, addUser } from '../../actions/userActions';
import EditUsername from '../EditUsername';
import userIcon from '../../../public/static/user-icon.png';
import { Dropdown, DropdownContent, LiUsername, Nav, Username } from './styles';

const short = require('short-uuid');

const Navbar = () => {
  // Get users from reducer
  const { id, name } = useSelector((state) => state.user.currentUser);
  const users = useSelector((state) => state.user.users);
  // dispatch
  const dispatch = useDispatch();

  const [editUsername, setEditUsername] = useState(false);

  // Add user
  const handleAddUser = () => {
    const newUserId = short.generate();
    dispatch(
      addUser({
        id: newUserId,
        name: newUserId
      })
    );
    dispatch(
      assignCurrentUser({
        id: newUserId,
        name: newUserId
      })
    );
  };

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
                users.map((user) => {
                  if (user.id !== id) {
                    return (
                      <a
                        key={user.id}
                        onClick={() => dispatch(assignCurrentUser(user))}
                      >
                        {user.name}
                      </a>
                    );
                  }
                })}
              <a onClick={handleAddUser}>
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
