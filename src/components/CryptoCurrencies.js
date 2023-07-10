import React, { useState, useEffect } from 'react'
import millify from 'millify'
import { Link } from 'react-router-dom'
import { Card, Row, Col, Input } from "antd"
import { useGetCryptosQuery } from '../services/cryptoApi'
import Loader from './Loader'
function CryptoCurrencies({ simplified }) {
	const count = simplified ? 10 : 100;
	const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
	const [cryptos, setCryptos] = useState([])
	const [serachTerm, setSearchTerm] = useState("")
	console.log(cryptosList?.data?.coins, "showing cryptos");
	console.log(cryptos, "showing cryptos here for the data");
	useEffect(() => {
		//setCryptos(cryptosList?.data?.coins)
		const filteredData = cryptosList?.data?.coins.filter((coin) => coin.name.toLowerCase().includes(serachTerm.toLowerCase()))
		setCryptos(filteredData)

	}, [serachTerm, cryptosList])
	if (isFetching) return <Loader />
	return (
		<>
			{!simplified && <div className="search-crypto">
				<Input placeholder="Search CryptoCurrency" onChange={(e) => setSearchTerm(e.target.value)} />

			</div>}
			<Row gutter={[32, 32]} className="crypto-card-container" >
				{cryptos?.map((currencey) => (
					<Col xs={24} sm={12} lg={6} xl={6} className="crypto-card" key={currencey.uuid}>
						<Link to={`/crypto/${currencey.uuid}`}>
							<Card title={`${currencey.rank}. ${currencey.name}`} hoverable extra={<img className="crypto-image" src={currencey.iconUrl} />}>
								<p>Price : {millify(currencey.price)}</p>
								<p>Market Cap : {millify(currencey.marketCap)}</p>
								<p>Daily Change : {millify(currencey.change)}%</p>

							</Card>
						</Link>

					</Col>
				))}
			</Row>
		</>
	)
}

export default CryptoCurrencies