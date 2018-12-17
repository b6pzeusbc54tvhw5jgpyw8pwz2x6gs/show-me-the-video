require('@babel/register')
const { parse } = require('url')   // eslint-disable-line
const next = require('next')
const server = require('./customServer')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev, dir: 'src' })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  server.get('/guide/:guideId', (req,res) => {
    const parsedUrl = parse(req.url, true)
    const { query } = parsedUrl
    const { params } = req
    app.render(req,res,'/guide', { params, query })
  })
  server.get('/guide/:guideId', (req,res) => {
    const parsedUrl = parse(req.url, true)
    const { query } = parsedUrl
    const { params } = req
    app.render(req,res,'/guide', { params, query })
  })
  server.get('*', (req,res) => {
    const parsedUrl = parse(req.url, true)
    handle(req,res,parsedUrl)
  })
  server.listen( port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})

