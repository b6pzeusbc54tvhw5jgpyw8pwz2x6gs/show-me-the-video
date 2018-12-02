import path from "path"
import fs from "fs"
import nodegit from 'nodegit'
import to from 'await-to-js'
import find from 'lodash/find'
import last from 'lodash/last'
import filter from 'lodash/filter'
import reject from 'lodash/reject'
import compact from 'lodash/compact'
import findIndex from 'lodash/findIndex'
import md5 from 'md5'
import marked from 'marked'
import emptyDir from "empty-dir"
import readdirEnhanced from 'readdir-enhanced'

import { CONST_DIR_NAME } from '../constant'

const { SMTV_CLONE_REPO_URL } = process.env
const { Clone, Repository, Error: NodeGitError } = nodegit
const fun = () => {}
// https://github.com/nodegit/nodegit/issues/1139
Clone.bind = fun.bind
Clone.apply = fun.apply
Clone.call = fun.call


const getPathFromGitRepoUrl = (url) => {
  const projectName = last(url.split('/')).replace(/\.git$/,'')
  return `${projectName}.${md5(url)}`
}

const getRepo = async (repoUrl, dirPath) => {
  let err,repo
  dirPath = dirPath || getPathFromGitRepoUrl(repoUrl)

  ;[err, repo] = await to(Repository.open(dirPath))

  const isNoSuchFile = /No such file or directory$/.test(err?.message)
  const isEmptyDir = emptyDir.sync(path.resolve(dirPath))
  const needClone = isNoSuchFile || isEmptyDir

  if (err?.errno === NodeGitError.CODE.ENOTFOUND && needClone ) {
    ;[err, repo] = await to(Clone(repoUrl, dirPath, { bare: 0 }))
  }
  if (err ) throw err

  return repo
}

const getVideoGuideHereFileArr = (repoPath) => {
  const dirPath = path.resolve(repoPath, CONST_DIR_NAME)
  let fileArr = readdirEnhanced.sync(dirPath)
  fileArr = reject(fileArr, name => name === 'README.md' )
  fileArr = filter(fileArr, name => /\.md$/.test(name))
  fileArr = fileArr.map( name => path.resolve( dirPath, name))
  return fileArr
}

const readFile = (absolutePath) => new Promise((resolve,reject) => {
  fs.readFile( absolutePath, 'utf8', (err, text) => {
    err && reject(err)
    !err && resolve({ filename: path.basename(absolutePath), text })
  })
})

const parseVideoInfo = ({ filename, text }) => {
  // todotodotodotodo!!!
  const tokenArr = marked.lexer(text)
  const firstHeading = find(tokenArr, t => t.type === 'heading' && t.depth === 1)
  const titleIndex = findIndex( tokenArr, firstHeading )
  let subTitle = tokenArr[titleIndex+1]
  subTitle = subTitle?.type === 'heading' && subTitle.depth === 2
    ? subTitle.text : ''

  const isDraft = tokenArr.links?.draft?.href === 'true'
  if (isDraft) return null

  return {
    title: firstHeading?.text || '[제목없음]',
    subTitle: subTitle,
    videoUrl: tokenArr.links.videourl?.href,
    thumbnailUrl: tokenArr.links.thumbnailurl?.href,
    tagArr: tokenArr.links.tags?.href?.split(',') || [],
    prevGuideId: tokenArr.links?.prev?.href,
    nextGuideId: tokenArr.links?.next?.href,
    author: tokenArr.links?.author?.href,
    date: tokenArr.links?.date?.href,
    duration: tokenArr.links?.duration?.href,
    id: md5(filename).substr(0,8),
    filename: filename,
    text: text,
  }
}

export const getVideoInfoArr = async (url) => {
  url = url || SMTV_CLONE_REPO_URL
  const repoPath = getPathFromGitRepoUrl(url)
  const [err] = await to( getRepo(url,repoPath))
  if (err ) throw err

  const fileArr = getVideoGuideHereFileArr(repoPath)
  const promiseArr = fileArr.map(readFile)
  const filenameTextArr = await Promise.all(promiseArr)
  const videoInfoArr = compact(filenameTextArr.map(parseVideoInfo))

  return videoInfoArr
}

export const getGuideInfo = async (id, url) => {
  url = url || SMTV_CLONE_REPO_URL
  const guideInfoArr = await getVideoInfoArr(url)
  return find(guideInfoArr, { id })
}

export default {
  getVideoInfoArr,
  getGuideInfo,
}
