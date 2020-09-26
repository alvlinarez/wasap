import React, { useState } from 'react';
import { EditUsernameContainer } from './styles';
import { useSelector } from 'react-redux';

const EditUsername = ({ editUsername, setEditUsername }) => {
  const { name } = useSelector((state) => state.user.currentUser);
  const [username, setUsername] = useState(name);

  const handleEdit = () => {
    setEditUsername(false);
  };

  return (
    <EditUsernameContainer show={editUsername}>
      <input
        type="text"
        onChange={(e) => setUsername(e.target.value)}
        value={username}
        placeholder="Edit username..."
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
