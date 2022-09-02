import dotenv from 'dotenv'
dotenv.config()

import { app } from './app.js'
import { logger } from './logger.js'

const result = await app.listen()
logger.error(result)
