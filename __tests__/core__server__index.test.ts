/* globals __rewire_reset_all__ */

import fs from "fs"
import path from 'path'

import to from 'await-to-js'
import mktemp from 'mktemp'
import rimraf from 'rimraf'
import sinon from 'sinon'

import { CONST_DIR_NAME } from '../src/core/constant'
import originalServer from '../src/core/server'

interface RewiredServer {
  __get__: Function
  __set__: Function
  getGuideInfo: Function
  getVideoInfoArr: Function
}

const server: RewiredServer = {
  // @ts-ignore
  __get__: originalServer.__get__,
  // @ts-ignore
  __set__: originalServer.__set__,
  ...originalServer,
}

test('two plus two is four', () => {
  expect(2 + 2).toBe(4)
})

describe("check getPathFromGitRepoUrl", () => {
  const validUrl = 'https://github.com/b6pzeusbc54tvhw5jgpyw8pwz2x6gs/video-here-tc-data.git'

  it('should works: getPathFromGitRepoUrl(url)', () => {
    const dirName = server.__get__!('getPathFromGitRepoUrl')(validUrl)
    expect(dirName).toMatch(/^video-here-tc-data.\w{32}$/)
  })
})

describe("check getRepo", () => {
  let dirName = 'tmp-git-repo-for-test-case'
  const validUrl = 'https://github.com/b6pzeusbc54tvhw5jgpyw8pwz2x6gs/video-here-tc-data.git'
  const invalidUrl = 'https://wronggithub.com/b/video-here-tc-data.git'

  beforeAll( () => rimraf.sync(dirName))

  it('should works: getRepo(validUrl) x 2', async () => {
    // const fakeClone = sinon.fake( server.__get__('Clone'))
    // const fakeOpen = sinon.fake( server.__get__('Repository').open)

    const fakeGetPathFromGitRepoUrl = sinon.fake.returns(dirName)

    // server.__set__('Clone', fakeClone)
    // server.__set__('Repository', { open: fakeOpen })
    server.__set__('getPathFromGitRepoUrl', fakeGetPathFromGitRepoUrl )

    const [err,repoPath] = await to(server.__get__('getRepo')(validUrl))
    expect(fakeGetPathFromGitRepoUrl.callCount).toBe(1)
    expect(fakeGetPathFromGitRepoUrl.getCall(0).args[0]).toBe(validUrl)
    // expect(fakeOpen.callCount).toBe(1)
    // expect(fakeOpen.getCall(0).args[0]).toBe(dirName)
    // expect(fakeClone.callCount).toBe(1)
    // expect(fakeClone.getCall(0).args[0]).toBe(validUrl)
    expect(err ).toBeNull()
    expect(repoPath).toBe(dirName)

    const [err2,repoPath2] = await to(server.__get__('getRepo')(validUrl))
    expect(fakeGetPathFromGitRepoUrl.callCount).toBe(2)
    expect(fakeGetPathFromGitRepoUrl.lastCall.args[0]).toBe(validUrl)
    // expect(fakeOpen.callCount).toBe(2)
    // expect(fakeOpen.lastCall.args[0]).toBe(dirName)
    // expect(fakeClone.callCount).toBe(1)
    expect(err2 ).toBeNull()
    expect(repoPath2).toBe(dirName)
  }, 15000)

  it('should works: getRepo(validUrl) second', async () => {
    const fakeGetPathFromGitRepoUrl = sinon.fake.returns(dirName)
    if( !server.__set__ || !server.__get__) return
    server.__set__('getPathFromGitRepoUrl', fakeGetPathFromGitRepoUrl )
    const [err,repoPath] = await to(server.__get__('getRepo')(validUrl))
    expect(fakeGetPathFromGitRepoUrl.callCount).toBe(1)
    expect(fakeGetPathFromGitRepoUrl.lastCall.args[0]).toBe(validUrl)
    expect(err ).toBeNull()
    expect(repoPath).toBe(dirName)
  }, 15000)

  it('should works: getRepo(validUrl, emptyDirPath)', async () => {
    mktemp.createDirSync(dirName)
    const [err,repo] = await to(server.__get__('getRepo')(validUrl, dirName))
    expect( err ).toBeNull()
  }, 10000)

  it('should works: getRepo(validUrl, notExistDirPath)', async () => {
    const [err,repo] = await to(server.__get__('getRepo')(validUrl, dirName))
    expect(err ).toBeNull()
  }, 10000)

  it('should error: getRepo(validUrl, existDirPath)', async () => {
    mktemp.createDirSync(dirName)
    mktemp.createFileSync(`${dirName}/XXXXX.tmp`)
    const [err,repoPath] = await to(server.__get__('getRepo')(validUrl, dirName))
    expect(err).not.toBe(null)
    expect(err.message).toBe('NOT_EMPTY_DIRECTORY')
    expect(err.name).toBe('Error')
    expect(repoPath).toBeUndefined()
  })

  it('should error: getRepo(invalidUrl)', async () => {
    const [err,repoPath] = await to(server.__get__('getRepo')(invalidUrl))
    expect(err.name).toBe('Error')
    expect(err.message).toMatch(/^Cloning into '.*'\.\.\.\nfatal: unable to access/)
    expect(repoPath).toBeUndefined()
  }, 10000)

  it('should work: readFile(absolutePath)', async () => {
    const filePath = path.resolve( __dirname, 'asset', CONST_DIR_NAME, 'validVideoGuideHereMarkdown.md')
    const [err,filenameAndTextObj] = await to( server.__get__('readFile')(filePath))
    expect(err ).toBeNull()
    const expectedObj = {
      filename: path.basename(filePath),
      text: fs.readFileSync(filePath,'utf8'),
    }
    expect(filenameAndTextObj).toEqual(expectedObj)
  })

  it('should error: getVideoInfoArr(invalidUrl)', async () => {
    const [err,arr] = await to(server.getVideoInfoArr(invalidUrl))
    expect(err.message).toMatch(/^Cloning into '.*'\.\.\.\nfatal: unable to access/)
    expect(arr).toBeUndefined()
  })

  it('should work: getVideoGuideHereFileArr(validPath)', async () => {
    const repoPath = path.resolve(__dirname, 'asset')
    const fileArr = server.__get__('getVideoGuideHereFileArr')(repoPath)
    expect(fileArr).toEqual([
      path.resolve( repoPath,CONST_DIR_NAME,'validVideoGuideHereMarkdown.md'),
      path.resolve( repoPath,CONST_DIR_NAME,'validVideoGuideHereMarkdown2.md'),
    ])
  })

  it('should work: parseVideoInfo()', async () => {
    const filePath = path.resolve( __dirname, 'asset', CONST_DIR_NAME, 'validVideoGuideHereMarkdown.md' )
    const filename = path.basename( filePath )
    const text = fs.readFileSync( filePath, 'utf8')
    const info = server.__get__('parseVideoInfo')({ filename, text})
    expect(info.title).toBe('Title')
    expect(info.subTitle).toBe('Sub title')
    expect(info.videoUrl).toBe('http://local-static.aluc.io:8998/video1.mkv')
    expect(info.thumbnailUrl).toBe('http://local-static.aluc.io:8998/resized.256/video1.jpg')
    expect(info.tagArr).toEqual(['windows','linux'])
    expect(info.prevGuideId).toBe('wio1io2ffh')
    expect(info.nextGuideId).toBe('ysT9Nii5An')
    expect(info.duration).toBe('2:30')
    expect(info.author).toBe('alfreduc')
    expect(info.date).toBe('20181127')
  })

  afterEach(() => {
    __rewire_reset_all__()
    const validPath = server.__get__('getPathFromGitRepoUrl')(validUrl)
    rimraf.sync(validPath)
    rimraf.sync(dirName)
  })
})

declare const __rewire_reset_all__: Function
