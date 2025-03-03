import React ,{useState} from 'react'
import { Link } from 'react-router-dom'
import millify from 'millify'
import {card, row, col, input} from 'antd'
import { useGetCryptosQuery } from '../services/cryptoApi'
   


const Cryptocurrencies = () => {
  const {data:cryptosList, isFetching} = useGetCryptosQuery();
  const [cryptos, setCryptos] = useState(cryptosList?.data?.coin)

  return (
    <div>
      <p>cr</p>
    </div>
  )
}

export default Cryptocurrencies
