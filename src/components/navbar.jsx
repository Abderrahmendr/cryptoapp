/*import React from 'react'
import {Button, Menu, Typography, Avatar} from 'antd'
import {Link} from 'react-router-dom'
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined } from '@ant-design/icons';

export  const navbar =  () => {
  return (
    <div className="nav-container">
        <div className="logo-container">

            <Avatar />
            <Typography.Title level={2} className="logo">
                <Link to="/">Cryptoverse</Link>
    
            </Typography.Title>

        </div>
      
    </div>
  )
}
*/
// ./components/navbar.js
import React from 'react';
import { Typography, Avatar} from 'antd';
import {Link} from 'react-router-dom';
import icon from '../Images/cryptocurrency.png'

function navbar (){
  return (
    <div>
       <Avatar src={icon} size="large"/>
            <Typography.Title level={2} className="logo">
                <Link to="/">Cryptoverse</Link>
    
            </Typography.Title>
      <p>shit</p>
    </div>
  );
};
export default navbar
 