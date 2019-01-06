import '@babel/register'
import { parse } from 'url'
import path from 'path'
import express from 'express'
import next from 'next'
import { getVideoInfoArr, getGuideInfo } from './core/server'
import tracer from 'tracer'

const logger = tracer.console()

const port = parseInt(process.env.PORT || "3000", 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev, dir: 'src' })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()

  server.use('/asset', express.static( path.join(__dirname,'..','asset')))

  server.get('/guide/:guideId', (req,res) => {
    const guideId = req.param('guideId')
    const query = { ...parse(req.url, true).query, guideId }
    app.render(req,res,'/guide',query)
  })

  server.get('/api/v1/guide/:guideId', async (req,res) => {
    logger.debug('get api call: /api/v1/guide/:guideId')
    const { guideId } = req.params
    const guideInfo = await getGuideInfo(guideId, "")
    res.json(guideInfo)
  })
  server.get('/api/v1/list', async (_,res) => {
    logger.debug('get api call: /api/v1/list')
    const videoInfoArr = await getVideoInfoArr("")
    res.json(videoInfoArr)
  })

  server.get('*', (req,res) => {
    const parsedUrl = parse(req.url, true)
    handle(req,res,parsedUrl)
  })
  server.listen( port, (err: any) => {
    if (err) throw err
    logger.debug(`> Ready on http://localhost:${port}`)
  })
})

