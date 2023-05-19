import 'dotenv/config'

import cors from '@fastify/cors'
import fastify from 'fastify'
import { memoriesRoutes } from './routes/memories'

const app = fastify()

app.register(cors, {
  origin: true, // with this option as true all URLs of frontend can access our backend, otherwise use a array to allow only the necessary
})

app.register(memoriesRoutes)

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('🚀🔥HTTP server running👨‍🚀 http://localhost:3333')
  })
