import React from 'react';
import {Switch, Route,Routes, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';

import { Navbar, Homepage, Cryptocurrencies, CryptoDetails, Exchanges, News } from './components';
import './App.css';

const App = () => (
  <div className="app">
    <div className="navbar">
      <Navbar />
    </div>
    <div className="main">
      <Layout>
        <div className="route">
        <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/exchanges" element={<Exchanges />} />
      <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
      <Route path="/crypto/:coinsId" element={<CryptoDetails />} />
      <Route path="/news" element={<News />} />
    </Routes>
        </div>
      </Layout>
      
      <div className="footer">
        <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>Copyright © 2021
          <Link to="/">
            Cryptoverse Inc.
          </Link> <br />
          All Rights Reserved.
        </Typography.Title>
        <Space>
          <Link to="/">Home</Link>
          <Link to="/ ">Exchanges</Link>
          <Link to="/ ">News</Link>
        </Space>
      </div>
    </div>
  </div>
);

export default App;
