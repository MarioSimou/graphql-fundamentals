import React , { Suspense } from 'react'
import { ApolloProvider } from 'react-apollo-hooks'
import { getClient } from '../utils/getClient'
import { Route, Router, Switch } from 'react-router-dom'
import Home from './Home'
import history from '../utils/history'

const client = getClient({ uri: 'http://localhost:3001/graphql' , credentials: 'same-origin' })

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ApolloProvider client={client}>
        <Router history={history}>
          <Switch>
            <Route path="/" exact component={Home} />
          </Switch>
        </Router>
      </ApolloProvider>
    </Suspense>
    
  )
}

export default App