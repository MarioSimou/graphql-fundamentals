import express from 'express'
import http from 'http'
import { ApolloServer } from 'apollo-server-express'
import resolvers from './graphql/resolvers'
import typeDefs from './graphql/types'
import mongoose from 'mongoose'

const app = express(), 
      server = http.createServer( app ),
      port = process.env.PORT || 3001

const apolloServer = new ApolloServer({ typeDefs, resolvers })
apolloServer.applyMiddleware({ app , path : '/graphql' })
apolloServer.installSubscriptionHandlers( server )

mongoose.connect( process.env.MONGO_URI, { useNewUrlParser: true })
.then( connection => {
  // events listening to db connection
  mongoose.connection.on('error', e => process.stdout.write(`${JSON.stringify(e)}\n`) )
  mongoose.connection.once('open' , e => process.stdout.write(`successful connection..`))

  // launch the server
  server.listen( port , () => {
    process.stdout.write(`Server is running on http://localhost:${port}${apolloServer.graphqlPath}\n`)
    process.stdout.write(`Websocket server is running on ws:localhost:${port}${apolloServer.subscriptionsPath}\n`)
  })  
})

