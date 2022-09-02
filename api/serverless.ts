// @ts-check
'use strict'

import dotenv from 'dotenv'
dotenv.config()
import { app } from '../src/app'

export default async (req, res) => {
  await app.ready()
  app.server.emit('request', req, res)
}
