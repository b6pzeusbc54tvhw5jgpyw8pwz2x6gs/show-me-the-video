// @ts-nocheck

import path from "path"
import git from 'simple-git/promise'

import to from 'await-to-js'
import _fs from 'fs'
import compact from 'lodash/compact'
import filter from 'lodash/filter'
import find from 'lodash/find'
import findIndex from 'lodash/findIndex'
import last from 'lodash/last'
import reject from 'lodash/reject'
import marked from 'marked'
import md5 from 'md5'
import readdirEnhanced from 'readdir-enhanced'
import tracer from 'tracer'

import { CONST_DIR_NAME } from '../constant'

const fs = _fs.promises
const logger = tracer.console()
const { SMTV_CLONE_REPO_URL } = process.env

const getPathFromGitRepoUrl = (url) => {
  const projectName = last(url.split('/')).replace(/\.git$/,'')
  return `${projectName}.${md5(url)}`
}

const getRepo = async (repoUrl, dirPath) => {
  let err, err2, stat, dotGitStat
  dirPath = dirPath || getPathFromGitRepoUrl(repoUrl)
  const dotGitPath = path.resolve(dirPath, '.git')

  ;[err,stat] = await to(fs.stat(dirPath))
  if (err && err.code !== 'ENOENT') throw err

  ;[err2,dotGitStat] = await to(fs.stat(dotGitPath))
  if (err2 && err2.code !== 'ENOENT') throw err


  if (stat?.isDirectory() && dotGitStat?.isDirectory()) {
    // true, true
    const [err3] = await to(git(dirPath).pull())
    if (err3) throw err3
    logger.debug(`success. git pull ${dirPath}`)

  } else if (stat?.isDirectory() && !dotGitStat?.isDirectory()) {
    // true, false
    const pathArr = readdirEnhanced.sync(dirPath)
    if (pathArr.length > 0 ) throw new Error('NOT_EMPTY_DIRECTORY')

    const [err4] = await to(git().clone(repoUrl, dirPath, { depth: 1 }))
    if (err4) throw err4
    logger.debug(`success. git clone ${repoUrl} ${dirPath}`)

  } else {
    // false, false
    // false, true (이 경우는 불가능)
    const [err4] = await to(git().clone(repoUrl, dirPath, { depth: 1 }))
    if (err4) throw err4
    logger.debug(`success. git clone ${repoUrl} ${dirPath}`)
  }

  return dirPath
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
  _fs.readFile( absolutePath, 'utf8', (err, text) => {
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
  getGuideInfo,
  getVideoInfoArr,
}
