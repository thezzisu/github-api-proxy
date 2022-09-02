// @ts-check
'use strict'

import dotenv from 'dotenv'
dotenv.config()

const { app } = await import('..')

export default async (req, res) => {
  await app.ready()
  app.server.emit('request', req, res)
}
