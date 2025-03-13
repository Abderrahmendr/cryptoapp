{/*import React, { useState } from 'react';
import HTMLReactParser from 'html-react-parser';
import { useParams } from 'react-router-dom';
import millify from 'millify';
import { Col, Row, Typography, Select } from 'antd';
import { MoneyCollectOutlined, DollarCircleOutlined, FundOutlined, ExclamationCircleOutlined, StopOutlined, TrophyOutlined, CheckOutlined, NumberOutlined, ThunderboltOutlined } from '@ant-design/icons';
import { useGetCryptoDetailsQuery } from '../services/cryptoApi';

const {Title, Text} = Typography;
const {Option} = Select;

const CryptoDetails = () => {
  const {coinId} = useParams();
  const [timePeriod, setTimePeriod] = useState['7d']
  const [data, isFetching] = useGetCryptoDetailsQuery(coinId)
 const cryptoDetails = data?.data?.coin;
 
 
 const time = ['3h', '24h', '7d', '30d', '1y', '3m', '3y', '5y'];

 const stats = [
   { title: 'Price to USD', value: `$ ${CryptoDetails?.price && millify(CryptoDetails?.price)}`, icon: <DollarCircleOutlined /> },
   { title: 'Rank', value: CryptoDetails?.rank, icon: <NumberOutlined /> },
   { title: '24h Volume', value: `$ ${CryptoDetails?.volume && millify(CryptoDetails?.volume)}`, icon: <ThunderboltOutlined /> },
   { title: 'Market Cap', value: `$ ${CryptoDetails?.marketCap && millify(CryptoDetails?.marketCap)}`, icon: <DollarCircleOutlined /> },
   { title: 'All-time-high(daily avg.)', value: `$ ${CryptoDetails?.allTimeHigh?.price && millify(CryptoDetails?.allTimeHigh?.price)}`, icon: <TrophyOutlined /> },
 ];

 const genericStats = [
   { title: 'Number Of Markets', value: CryptoDetails?.numberOfMarkets, icon: <FundOutlined /> },
   { title: 'Number Of Exchanges', value: CryptoDetails?.numberOfExchanges, icon: <MoneyCollectOutlined /> },
   { title: 'Aprroved Supply', value: CryptoDetails?.supply?.confirmed ? <CheckOutlined /> : <StopOutlined />, icon: <ExclamationCircleOutlined /> },
   { title: 'Total Supply', value: `$ ${CryptoDetails?.supply?.total && millify(CryptoDetails?.supply?.total)}`, icon: <ExclamationCircleOutlined /> },
   { title: 'Circulating Supply', value: `$ ${CryptoDetails?.supply?.circulating && millify(CryptoDetails?.supply?.circulating)}`, icon: <ExclamationCircleOutlined /> },
 ];
 return (
    <div>
            
    </div>
  )
}

export default CryptoDetails
*/}