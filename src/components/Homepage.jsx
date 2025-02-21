import React from 'react'
import { Link } from 'react-router'
import millify from 'millify'
import { Typography, Row, Col, Statistic } from 'antd'
 import { useGetCryptosQuery } from '../services/cryptoApi'

const {Title} = Typography;
const Homepage = () => {

  const {data, isFetching} = useGetCryptosQuery;
   const globalState = data?.data?.stats;
  if(isFetching) return 'loading...';
  return (
    < > 
    <Title level={2} className="heading"> Global Crypto Stats </Title>
    <Row>
        <Col span={12}><Statistic title="Total Cryptocurrencies"value={globalState.total}/></Col>
        <Col span={12}><Statistic title="Total Exchange"value="5"/></Col>
        <Col span={12}><Statistic title="Total Market Cap"value="5"/></Col>
        <Col span={12}><Statistic title="Total 24h volume"value="5"/></Col>
        <Col span={12}><Statistic title="Total Markets"value="5"/></Col>
    </Row>

    </ >
  )
}

export default Homepage
