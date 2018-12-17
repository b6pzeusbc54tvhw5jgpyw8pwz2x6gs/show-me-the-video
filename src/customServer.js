const express = require('express')
const path = require('path')

const { getVideoInfoArr, getGuideInfo, getClientConfig } = require('./core/server')

const server = express()

server.use('/asset', express.static( path.join(__dirname,'..','asset')))

server.get('/api/v1/clientConfig', async (req,res) => {
  console.log('get api call: /api/v1/clientConfig')
  const { guideId } = req.param
  const guideInfo = await getClientConfig(guideId)
  res.json(guideInfo)
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

module.exports = server
