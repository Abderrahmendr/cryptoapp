import React from 'react'
import { Link } from 'react-router'
import millify from 'millify'
import { Typography, Row, Col, Statistic } from 'antd'
 import { useGetCryptosQuery } from '../services/cryptoApi'
import {Cryptocurrencies, News} from '../components'
 
const {Title} = Typography;

const Homepage = () => {

  const {data, isFetching} = useGetCryptosQuery(10);
   const globalState = data?.data?.stats;
  if(isFetching) return 'loading...';
  return (
    < > 
    <Title level={2} className="heading"> Global Crypto Stats </Title>
    <Row>
        <Col span={12}><Statistic title="Total Cryptocurrencies"value={globalState.total}/></Col>
        <Col span={12}><Statistic title="Total Exchange"value={millify(globalState.totalExchanges)}/></Col>
        <Col span={12}><Statistic title="Total Market Cap"value={millify(globalState.totalMarketCap)}/></Col>
        <Col span={12}><Statistic title="Total 24h volume"value={millify(globalState.total24hVolume)}/></Col>
        <Col span={12}><Statistic title="Total Markets"value={millify(globalState.totalMarkets)}/></Col>
    </Row>
    <div className='home-heading-container'>
      <Title  level={2}className="home title">Top 10 Cryptocurrencies in the world</Title>
      <Title level={3} className="show-more"> <Link to="/Cryptocurrencies">Show more </Link></Title>
    </div>
<Cryptocurrencies simplified={true} />
    <div className='home-heading-container'>
      <Title  level={2}className="home-title">Latest crypto news</Title>
      <Title level={3} className="show-more"> <Link to="/news">Show more </Link></Title>
    </div>
    <News simplified={true} />

    </ >
  )
}

export default Homepage;
