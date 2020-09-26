import React, { useState } from 'react';
import { EditUsernameContainer } from './styles';

const EditUsername = ({ editUsername, setEditUsername }) => {
  const [username, setUsername] = useState('username');

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
