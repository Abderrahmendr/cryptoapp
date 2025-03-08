import React from 'react'
import { Typography, Select, Row, Col, Avatar, Card } from 'antd';
//import moment from moment;
 import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';
const {Text, Title} = Typography;
const {option} = Select;

 const News = ({simplified}) => {
  const {data : cryptoNews} = useGetCryptoNewsQuery({newsCategory:'cryptocurrency', count})
  return (
    <div>
      <p>vh</p>
    </div>
  )
}

export default News
