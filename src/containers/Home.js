import React from 'react';
import Layout from '../components/Layout';
import Chat from '../components/Chat';
import Send from '../components/Send';
import { useSelector } from 'react-redux';

const Home = () => {
  const currentConversation = useSelector(
    (state) => state.conversation.currentConversation
  );
  return (
    <Layout>
      {Object.keys(currentConversation).length === 0 ? (
        <div>No chats yet, start chatting.</div>
      ) : (
        <>
          <Chat />
          <Send />
        </>
      )}
    </Layout>
  );
};

export default Home;
