import React from 'react';
import Layout from '../components/Layout';
import Chat from '../components/Chat';
import Send from '../components/Send';

const Home = () => {
  return (
    <Layout>
      <Chat />
      <Send />
    </Layout>
  );
};

export default Home;
