import { FastifyPluginAsync } from 'fastify'
import fetch from 'node-fetch'
import { CLIENT_ID, CLIENT_SECRET } from './env.js'

export const auth: FastifyPluginAsync = async (server) => {
  server.post<{ Body: { code: string } }>('/access_token', async (req) => {
    const search = new URLSearchParams({
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      code: req.body.code
    })
    const resp = await fetch(
      `https://github.com/login/oauth/access_token?${search}`,
      {
        method: 'POST',
        headers: {
          accept: 'application/json'
        }
      }
    )
    return resp
  })
}
