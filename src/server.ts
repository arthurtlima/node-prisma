import fastify from 'fastify'
import cors from '@fastify/cors'
import { memoriesRoutes } from './memories'

const app = fastify()

// if is defined true all url are allowed
// if is an array, only the urls in the array are allowed
app.register(cors, {
  origin: ['http://localhost:3000'],
})

app.register(memoriesRoutes)

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('Server is running on port 3333')
  })
