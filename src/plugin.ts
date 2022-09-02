import fp from 'fastify-plugin'
import { auth } from './auth.js'

export const githubApiProxy = fp((server) => {
  server.register(auth, { prefix: '/auth' })
})
