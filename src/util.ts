import { CORS_ORIGIN } from './env.js'

function transformOriginStr(str: string) {
  return str.startsWith('/') ? new RegExp(str) : str
}

export function getOrigin() {
  const parsed = JSON.parse(CORS_ORIGIN)
  if (Array.isArray(parsed)) return parsed.map(transformOriginStr)
  if (typeof parsed === 'string') return transformOriginStr(parsed)
  return parsed
}
