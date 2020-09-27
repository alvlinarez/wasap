import React, { useState } from 'react';
import { ResultItem, Results } from '../Sidebar/styles';
import { useSelector } from 'react-redux';
import { Input } from './styles';

const SearchChat = ({ data, user }) => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const [filter, setFilter] = useState('');

  const filteredData =
    data &&
    data.filter((item) =>
      Object.keys(item).some(() =>
        item['name'].toLowerCase().includes(filter.toLowerCase())
      )
    );

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
                return <ResultItem key={u.id}>{u.name}</ResultItem>;
              }
            })
          )
        ) : (
          filteredData.map((d) => <ResultItem key={d.id}>{d.name}</ResultItem>)
        )}
      </Results>
    </div>
  );
};

export default SearchChat;
