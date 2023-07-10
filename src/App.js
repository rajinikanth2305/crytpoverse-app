import React from 'react'
import { Layout, Typography, Space } from 'antd';
import { Switch, Route, Link } from "react-router-dom"
import { NavBar, Exchanges, HomePage, CryptoCurrencies, CryptoDetails, News } from "./components"
import "./App.css"
function App() {
	return (
		<div className='app'>
			<div className='navbar'>
				<NavBar />
			</div>
			<div className='main'>
				<Layout>
					<div className="routes">
						<Switch>
							<Route exact path="/">
								<HomePage />
							</Route>
							<Route exact path="/exchanges">
								<Exchanges />
							</Route>
							<Route exact path="/cryptocurrencies">
								<CryptoCurrencies />
							</Route>
							<Route exact path="/crypto/:coinId">
								<CryptoDetails />
							</Route>
							<Route exact path="/news">
								<News />
							</Route>

						</Switch>

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
						<Link to="/news">News</Link>
					</Space>
				</div>
			</div>

		</div>
	)
}

export default App;