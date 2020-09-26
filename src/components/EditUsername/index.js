import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editUser } from '../../actions/userActions';
import { EditUsernameContainer } from './styles';

const EditUsername = ({ editUsername, setEditUsername }) => {
  const { id, name } = useSelector((state) => state.user.currentUser);
  const [username, setUsername] = useState(name);

  // dispatch to change username
  const dispatch = useDispatch();

  const handleEdit = () => {
    if (username.trim() === '') return;
    dispatch(editUser({ id, name: username }));
    setEditUsername(false);
  };

  return (
    <EditUsernameContainer show={editUsername}>
      <input
        type="text"
        onChange={(e) => setUsername(e.target.value)}
        value={username}
        placeholder="Edit username..."
        onKeyDown={(e) => {
          e.key === 'Enter' && handleEdit();
        }}
      />
      <span onClick={handleEdit}>
        <i className="far fa-check-circle" />
      </span>
      <span onClick={() => setEditUsername(false)}>
        <i className="far fa-times-circle" />
      </span>
    </EditUsernameContainer>
  );
};

export default EditUsername;
