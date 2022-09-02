function $(name: string, def?: string): string {
  const ret = process.env[name] ?? def
  if (ret === undefined) {
    throw new Error(`Environment variable ${name} is not set`)
  }
  return ret
}

export const CLIENT_ID = $(`GAP_CLIENT_ID`)
export const CLIENT_SECRET = $(`GAP_CLIENT_SECRET`)
export const CORS_ORIGIN = $(`GAP_CORS_ORIGINS`, `true`)
