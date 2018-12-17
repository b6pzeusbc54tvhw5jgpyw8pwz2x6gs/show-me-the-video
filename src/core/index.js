
const isServer = !! process.env.SMTV_URL

const getVideoInfoArr = () => {
  // './server' 쪽 코드가 client 환경으로 내려가지 않도록
  // webpack.IgnorePlugin 으로 처리해줘야한다
  return isServer
    ? require('./server').getVideoInfoArr()
    : require('./client').getVideoInfoArr()
}

const getGuideInfo = (guideId) => {
  // './server' 쪽 코드가 client 환경으로 내려가지 않도록
  // webpack.IgnorePlugin 으로 처리해줘야한다
  return isServer
    ? require('./server').getGuideInfo(guideId)
    : require('./client').getGuideInfo(guideId)
}

const getClientConfig = () => {
  // './server' 쪽 코드가 client 환경으로 내려가지 않도록
  // webpack.IgnorePlugin 으로 처리해줘야한다
  return isServer
    ? require('./server').getClientConfig()
    : require('./client').getClientConfig()
}

module.exports = {
  getVideoInfoArr,
  getGuideInfo,
  getClientConfig,
}

