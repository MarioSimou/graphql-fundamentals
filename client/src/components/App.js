import React from 'react'
import { ApolloProvider }  from '@apollo/react-hooks'
import { getClient } from '../utils/getClient'
import { Route, Router, Switch } from 'react-router-dom'
import Home from './Home'
import Navbar from './Navbar'
import CreateLink from './CreateLink'
import Login from './Login'
import Register from './Register'
import history from '../utils/history'

const client = getClient({ uri: 'http://localhost:3001/graphql' , credentials: 'same-origin' })

const App = () => {
  return (
      <ApolloProvider client={client}>
        <Router history={history}>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/link/new" exact component={CreateLink} />
            <Route path="/login" exact component={Login} />
            <Route path="/register" exact component={Register} />
          </Switch>
        </Router>
      </ApolloProvider>    
  )
}

export default App