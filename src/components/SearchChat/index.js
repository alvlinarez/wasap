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
  const currentConversation = useSelector(
    (state) => state.conversation.currentConversation
  );
  const conversations = useSelector(
    (state) => state.conversation.conversations
  );
  const [filter, setFilter] = useState('');

  const dispatch = useDispatch();

  const filteredData =
    data &&
    data.filter((item) =>
      Object.keys(item).some(() =>
        item['name'].toLowerCase().includes(filter.toLowerCase())
      )
    );

  const handlePublicConversation = (categoryId) => {
    if (!conversations.some((c) => c.categoryId === categoryId)) {
      dispatch(
        addConversation({
          categoryId
        })
      );
    }
    if (currentConversation.categoryId !== categoryId) {
      dispatch(assignCurrentConversation({ categoryId }));
    }
  };

  const handleAddPrivateConversation = (userId) => {
    if (
      !conversations.find(
        (c) => c.user_1 === currentUser.id && c.user_2 === userId
      ) &&
      !conversations.find(
        (c) => c.user_2 === currentUser.id && c.user_1 === userId
      )
    ) {
      dispatch(
        addConversation({
          user_1: currentUser.id,
          user_2: userId,
          isPrivate: true
        })
      );
    }

    dispatch(
      assignCurrentConversation({ userId, currentUserId: currentUser.id })
    );
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
        {/*Private chats or public chats*/}
        {data && user ? (
          data.length <= 1 ? (
            <div>No users added yet.</div>
          ) : (
            filteredData.map((u) => {
              if (u.id !== currentUser.id) {
                return (
                  <ResultItem
                    key={u.id}
                    onClick={() => handleAddPrivateConversation(u.id)}
                    isSelected={
                      currentConversation.user_2 === u.id ||
                      (currentConversation.user_1 === u.id &&
                        currentConversation.user_2 === currentUser.id)
                    }
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
              onClick={() => handlePublicConversation(d.id)}
              isSelected={currentConversation.categoryId === d.id}
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
