/* globals __rewire_reset_all__ */

import fs from "fs"
import path from 'path'
import sinon from 'sinon'
import to from 'await-to-js'
import { Repository, Error as NodeGitError } from 'nodegit'
import mktemp from 'mktemp'
import rimraf from 'rimraf'

import server, { getVideoInfoArr } from '../src/core/server'

test('two plus two is four', () => {
  expect(2 + 2).toBe(4)
})

describe("check getPathFromGitRepoUrl", () => {
  const validUrl = 'https://github.com/b6pzeusbc54tvhw5jgpyw8pwz2x6gs/video-here-tc-data.git'

  it('should works: getPathFromGitRepoUrl(url)', () => {
    const dirName = server.__get__('getPathFromGitRepoUrl')(validUrl)
    expect(dirName).toMatch(/^video-here-tc-data.\w{32}$/)
  })
})

describe("check getRepo", () => {
  let dirName = 'tmp-git-repo-for-test-case'
  const validUrl = 'https://github.com/b6pzeusbc54tvhw5jgpyw8pwz2x6gs/video-here-tc-data.git'
  const invalidUrl = 'https://wronggithub.com/b/video-here-tc-data.git'

  beforeAll( () => rimraf.sync(dirName))

  it('should works: getRepo(validUrl) x 2', async () => {
    const fakeClone = sinon.fake( server.__get__('Clone'))
    const fakeOpen = sinon.fake( server.__get__('Repository').open)
    const fakeGetPathFromGitRepoUrl = sinon.fake.returns(dirName)

    server.__set__('Clone', fakeClone)
    server.__set__('Repository', { open: fakeOpen })
    server.__set__('getPathFromGitRepoUrl', fakeGetPathFromGitRepoUrl )

    const [err,repo] = await to(server.__get__('getRepo')(validUrl))
    expect(fakeGetPathFromGitRepoUrl.callCount).toBe(1)
    expect(fakeGetPathFromGitRepoUrl.getCall(0).args[0]).toBe(validUrl)
    expect(fakeOpen.callCount).toBe(1)
    expect(fakeOpen.getCall(0).args[0]).toBe(dirName)
    expect(fakeClone.callCount).toBe(1)
    expect(fakeClone.getCall(0).args[0]).toBe(validUrl)
    expect(err ).toBeNull()
    expect(repo.constructor ).toBe( Repository )
    expect(repo.path()).toBe(`${path.resolve(dirName)}/.git/`)

    const [err2,repo2] = await to(server.__get__('getRepo')(validUrl))
    expect(fakeGetPathFromGitRepoUrl.callCount).toBe(2)
    expect(fakeGetPathFromGitRepoUrl.lastCall.args[0]).toBe(validUrl)
    expect(fakeOpen.callCount).toBe(2)
    expect(fakeOpen.lastCall.args[0]).toBe(dirName)
    expect(fakeClone.callCount).toBe(1)
    expect(err2 ).toBeNull()
    expect(repo2.constructor ).toBe( Repository )
    expect(repo2.path()).toBe(`${path.resolve(dirName)}/.git/`)
  }, 15000)

  it('should works: getRepo(validUrl) second', async () => {
    const fakeClone = sinon.fake( server.__get__('Clone'))
    const fakeOpen = sinon.fake( server.__get__('Repository').open)
    const fakeGetPathFromGitRepoUrl = sinon.fake.returns(dirName)

    server.__set__('Clone', fakeClone)
    server.__set__('Repository', { open: fakeOpen })
    server.__set__('getPathFromGitRepoUrl', fakeGetPathFromGitRepoUrl )

    const [err,repo] = await to(server.__get__('getRepo')(validUrl))
    expect(fakeGetPathFromGitRepoUrl.callCount).toBe(1)
    expect(fakeGetPathFromGitRepoUrl.lastCall.args[0]).toBe(validUrl)
    expect(fakeOpen.callCount).toBe(1)
    expect(fakeOpen.lastCall.args[0]).toBe(dirName)
    expect(fakeClone.callCount).toBe(1)
    expect(fakeClone.lastCall.args[0]).toBe(validUrl)
    expect(err ).toBeNull()
    expect(repo.constructor ).toBe( Repository )
  }, 15000)

  it('should works: getRepo(validUrl, emptyDirPath)', async () => {
    mktemp.createDirSync(dirName)
    const [err,repo] = await to(server.__get__('getRepo')(validUrl, dirName))
    expect( err ).toBeNull()
    expect( repo.constructor ).toBe( Repository )
  }, 10000)

  it('should works: getRepo(validUrl, notExistDirPath)', async () => {
    const [err,repo] = await to(server.__get__('getRepo')(validUrl, dirName))
    expect(err ).toBeNull()
    expect(repo.constructor ).toBe( Repository )
  }, 10000)

  it('should error: getRepo(validUrl, existDirPath)', async () => {
    mktemp.createDirSync(dirName)
    mktemp.createFileSync(`${dirName}/XXXXX.tmp`)
    const [err,repo] = await to(server.__get__('getRepo')(validUrl, dirName))
    expect(err.errno).toBe(NodeGitError.CODE.ENOTFOUND)
    expect(err.errorFunction).toBe('Repository.open')
    expect(repo).toBeUndefined()
  })

  it('should error: getRepo(invalidUrl)', async () => {
    const [err,repo] = await to(server.__get__('getRepo')(invalidUrl))
    expect(err.errno).toBe(NodeGitError.CODE.ERROR)
    expect(err.message).toMatch(/^curl error/)
    expect(err.errorFunction).toBe('Clone.clone')
    expect( repo ).toBeUndefined()
  }, 10000)

  it('should work: readFile(absolutePath)', async () => {
    const filePath = path.resolve( __dirname, './asset/validVideoGuideHereMarkdown.md')
    const [err,filenameAndTextObj] = await to( server.__get__('readFile')(filePath))
    expect(err ).toBeNull()
    const expectedObj = {
      filename: path.basename(filePath),
      text: fs.readFileSync(filePath,'utf8'),
    }
    expect(filenameAndTextObj).toEqual(expectedObj)
  })

  it('should error: getVideoInfoArr(invalidUrl)', async () => {
    const [err,arr] = await to(getVideoInfoArr(invalidUrl))
    expect(err.errno).toBe(NodeGitError.CODE.ERROR)
    expect(err.message).toMatch(/^curl error/)
    expect(err.errorFunction).toBe('Clone.clone')
    expect(arr).toBeUndefined()
  })

  it('should work: getVideoInfoArr(invalidUrl)', async () => {
    const [err,arr] = await to(getVideoInfoArr(invalidUrl))
    expect(err.errno).toBe(NodeGitError.CODE.ERROR)
    expect(err.message).toMatch(/^curl error/)
    expect(err.errorFunction).toBe('Clone.clone')
    expect(arr).toBeUndefined()
  })

  it('should work: parseVideoInfo()', async () => {
    const filePath = path.resolve( __dirname, 'asset', 'validVideoGuideHereMarkdown.md' )
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
