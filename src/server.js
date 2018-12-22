require('@babel/register')
const { parse } = require('url')   // eslint-disable-line
const path = require('path')
const express = require('express')
const next = require('next')

const { getVideoInfoArr, getGuideInfo } = require('./core/server')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev, dir: 'src' })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()

  server.use('/asset', express.static( path.join(__dirname,'..','asset')))

  server.get('/guide/:guideId', (req,res) => {
    const parsedUrl = parse(req.url, true)
    const { query } = parsedUrl
    const { params } = req
    app.render(req,res,'/guide', { params, query })
  })

  server.get('/api/v1/guide/:guideId', async (req,res) => {
    console.log('get api call: /api/v1/guide/:guideId')
    const { guideId } = req.param
    const guideInfo = await getGuideInfo(guideId)
    res.json(guideInfo)
  })
  server.get('/api/v1/list', async (req,res) => {
    console.log('get api call: /api/v1/list')
    const videoInfoArr = await getVideoInfoArr()
    res.json(videoInfoArr)
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

