import to from 'await-to-js'
import axios from 'axios'
import find from 'lodash/find'

export const getVideoInfoArr = async () => {
  let err, res

  ;[err,res] = await to( axios.get('/api/v1/list'))
  if( err) throw err

  return res.data
}

export const getGuideInfo = async (id) => {
  let err, res

  const videoInfoArr = await getVideoInfoArr()
  const videoInfo = find(videoInfoArr, { id })
  if( videoInfo) return videoInfo

  ;[err,res] = await to( axios.get('/api/v1/guide/' + id))
  if( err) throw err

  return res.data
}

export default {
  getVideoInfoArr,
  getGuideInfo,
}
