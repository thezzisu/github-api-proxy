import { fastify } from 'fastify'
import cors from '@fastify/cors'
import { logger } from './logger.js'
import { getOrigin } from './util.js'
import { githubApiProxy } from './plugin.js'

export const app = fastify({ logger })
app.register(cors, { origin: getOrigin() })
app.register(githubApiProxy)
