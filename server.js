'use strict'

const httpServer = require('http-server')
const prod = process.env.NODE_ENV === 'production' // eslint-disable-line
const port = process.env.PORT || (prod ? 80 : 9777) // eslint-disable-line

console.log('Starting in prod mode:', prod);

let cache = 3600

if (prod) {
  console.log(`running in production mode(with caching)-make sure you have
    "Disable cache (while DevTools is open)" checked in the browser
    to see the changes while developing`)
} else {
  cache = -1
}

const server = httpServer.createServer({
  cache,
  root: '',
  robots: true,
  headers: {
    'Access-Control-Allow-Origin': 'http://localhost:9777',
    'Access-Control-Allow-Credentials': 'true'
  }
})

if (prod) {
  require('chokidar-socket-emitter')({app: server.server})
}

server.listen(port, () => {
  console.log('Listening on port:', port)
})
