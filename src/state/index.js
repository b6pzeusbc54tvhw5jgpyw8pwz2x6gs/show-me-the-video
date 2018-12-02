import { useState } from 'react'
import { getVideoInfoArr } from '../core'

export const useShowLayout = (initialValue) => {
  const [ showLayout, setShowLayout ] = useState(initialValue)
  const toggleShowLayout = () => setShowLayout( ! showLayout )
  return { showLayout, toggleShowLayout }
}

export const useVideoInfoArr = (initialValue) => {
  const [videoInfoArr, setVideoInfoArr] = useState(initialValue)

  if (videoInfoArr.length < 1 ) {
    console.log('videoInfoArr.length < 1 ')
    getVideoInfoArr().then( setVideoInfoArr )
  }

  return videoInfoArr
}

export default {
  useShowLayout,
  useVideoInfoArr,
}
