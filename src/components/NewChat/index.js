import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCategory } from '../../actions/categoryActions';
import { NewChatContainer, NewChatIcons } from './styles';

const NewChat = ({ showNewCategory, setShowNewCategory }) => {
  const [category, setCategory] = useState('');

  // dispatch to change category
  const dispatch = useDispatch();

  const handleAddCategory = () => {
    if (category.trim() === '') return;
    dispatch(addCategory(category));
    setShowNewCategory(false);
    setCategory('');
  };
  return (
    <NewChatContainer show={showNewCategory}>
      <input
        type="text"
        onChange={(e) => setCategory(e.target.value)}
        value={category}
        placeholder="Add category..."
        onKeyDown={(e) => {
          e.key === 'Enter' && handleAddCategory();
        }}
      />
      <NewChatIcons>
        <span onClick={handleAddCategory}>
          <i className="far fa-check-circle" />
        </span>
        <span onClick={() => setShowNewCategory(false)}>
          <i className="far fa-times-circle" />
        </span>
      </NewChatIcons>
    </NewChatContainer>
  );
};

export default NewChat;
