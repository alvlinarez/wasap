import React, { useState } from 'react';
import { ResultItem, Results } from '../Sidebar/styles';
import { useDispatch, useSelector } from 'react-redux';
import { Input } from './styles';
import {
  addConversation,
  assignCurrentConversation
} from '../../actions/conversationActions';

const SearchChat = ({ data, user }) => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const [filter, setFilter] = useState('');

  const dispatch = useDispatch();

  const filteredData =
    data &&
    data.filter((item) =>
      Object.keys(item).some(() =>
        item['name'].toLowerCase().includes(filter.toLowerCase())
      )
    );

  const handleAssignConversation = (categoryId) => {
    dispatch(
      addConversation({
        categoryId
      })
    );
    dispatch(assignCurrentConversation({ categoryId }));
  };

  const handleAddConversation = (userId) => {
    dispatch(
      addConversation({
        user_1: currentUser.id,
        user_2: userId,
        isPrivate: true
      })
    );
    dispatch(assignCurrentConversation({ userId }));
  };

  return (
    <div>
      <Input
        type="text"
        placeholder="Search chat..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        show={data && data.length > 1}
      />
      <Results>
        {data && user ? (
          data.length <= 1 ? (
            <div>No users added yet.</div>
          ) : (
            filteredData.map((u) => {
              if (u.id !== currentUser.id) {
                return (
                  <ResultItem
                    key={u.id}
                    onClick={() => handleAddConversation(u.id)}
                  >
                    {u.name}
                  </ResultItem>
                );
              }
            })
          )
        ) : (
          filteredData.map((d) => (
            <ResultItem
              key={d.id}
              onClick={() => handleAssignConversation(d.id)}
            >
              {d.name}
            </ResultItem>
          ))
        )}
      </Results>
    </div>
  );
};

export default SearchChat;
