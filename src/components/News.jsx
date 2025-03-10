import React from 'react'
import { Typography, Select, Row, Col, Avatar, Card } from 'antd';
//import moment from moment;
 import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';
  
const {Text, Title} = Typography;
const {option} = Select;

 const News = ({simplified}) => {
  const {data : cryptoNews} = useGetCryptoNewsQuery({newsCategory:'cryptocurrency', count : simplified ? 6 : 12 })
 
  if (!cryptoNews?.value) return 'Loading...';
 
  return (
 
 <Row gutter={[24,24]}>
       {cryptoNews.value.map((news, i) => (
        <Col xs={24} sm={12} lg={8} key={i}>
          <Card hoverable className="news-card">
            <a href={news.url} target="_blank" rel="noreferrer">
              <div className="news-image-container">
                 <img src={news?.image?.thumbnail?.contentUrl } alt="" />
              </div>
               <div className="provider-container">
        
              </div>
            </a>
          </Card>
        </Col>
      ))}
     </Row>
  )
}

export default News
