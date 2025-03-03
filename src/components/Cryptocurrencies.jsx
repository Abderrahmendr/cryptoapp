import React ,{useState} from 'react'
import { Link } from 'react-router-dom'
import millify from 'millify'
import {Card, Row, Col, input} from 'antd'
import { useGetCryptosQuery } from '../services/cryptoApi'
   


const Cryptocurrencies = () => {
  const {data:cryptosList, isFetching} = useGetCryptosQuery();
  const [cryptos, setCryptos] = useState(cryptosList?.data?.coins)

  return (
    <div>
      <>
        <Row gutters={[32, 32]} className="crypto-card-container">
          {cryptos.map((currency)=>{
            <Col xs={24} lg={6} className="crypto-card" key={currency.id}>
              <Link to={`/crypto/${currency.id}` }>
                 <Card
                 title={`${currency.rank}. ${currency.name}`}
                 extra={<img className="crypto-image"src={currency.iconUrl}/>}
                 hoverable
                 >
                  <p>Price:{millify(currency.price)}</p>
                  <p>Market Cap: {millify(currency.MarketCap)}</p>
                  <p>Daily Change: {millify(currency.DailyChange)}</p>

                 </Card>

              
              </Link>
            
            </Col>
          })}

        </Row>
      </>
    </div>
  )
}

export default Cryptocurrencies
