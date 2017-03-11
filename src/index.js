import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'
import ApolloClient, { createNetworkInterface } from 'apollo-client'
import { ApolloProvider } from 'react-apollo'
import Dice from './components/Dice'

const client = new ApolloClient({
	networkInterface: createNetworkInterface({
		uri: 'http://jessica.graphql.com/graphql'
	})
})

ReactDOM.render((
	<ApolloProvider client={client}>
	<Router history={browserHistory}>
		<Route path='/' component={Dice} />
			
	</Router>
	</ApolloProvider>
),
document.getElementById('root')
)
