const { env } = require('process');

const target = env.ASPNETCORE_HTTPS_PORT ? `https://localhost:${env.ASPNETCORE_HTTPS_PORT}` :
  env.ASPNETCORE_URLS ? env.ASPNETCORE_URLS.split(';')[0] : 'http://localhost:26660';

const PROXY_CONFIG = [
  {
    context: [
      "/weatherforecast",
   ],
    target: target,
    secure: false,
    headers: {
      Connection: 'Keep-Alive'
    }
  },
  {
    context: [
      "/users",
    ],
      "target": "https://localhost:7142",
      "secure": false,
      "changeOrigin": true,
      headers: {
        Connection: 'Keep-Alive'

    }
  }
]

module.exports = PROXY_CONFIG;
