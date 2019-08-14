import express from 'express'
import http from 'http'
import { ApolloServer } from 'apollo-server-express'
import resolvers from './graphql/resolvers'
import typeDefs from './graphql/types'

const app = express(), 
      server = http.createServer( app ),
      port = process.env.PORT || 3001

const apolloServer = new ApolloServer({ typeDefs, resolvers })
apolloServer.applyMiddleware({ app , path : '/graphql' })
apolloServer.installSubscriptionHandlers( server )

server.listen( port , () => {
  process.stdout.write(`Server is running on http://localhost:${port}${apolloServer.graphqlPath}\n`)
  process.stdout.write(`Websocket server is running on ws:localhost:${port}${apolloServer.subscriptionsPath}`)
})