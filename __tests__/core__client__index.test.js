/* globals __rewire_reset_all__ */

import to from 'await-to-js'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

import client, { getClientConfig } from '../src/core/client'

import { toBeType } from "jest-tobetype"
expect.extend({ toBeType })

// const mock = new MockAdapter(axios)

test('two plus two is four', () => {
  expect(2 + 2).toBe(4)
})

describe("getClientConfig", () => {
  beforeEach( () => {
    const axiosInstance = axios.create({
      baseURL: 'http://127.0.0.1:3000/',
      timeout: 1000,
    })
    client.__set__('axios',axiosInstance)
    // mock.onGet('/users').reply(200, {
    // users: [
    // { id: 1, name: 'John Smith' },
    // ],
    // })
  })

  it('getClientConfig works', async () => {
    // const [e1, r1] = await to(axios.get('/users'))
    // console.log(r1.data)

    const [err,config] = await to(getClientConfig())
    expect(err).toBeNull()
    expect(config.showLayout).toBeType('boolean')
    expect(config.siteUrl).toBeType('string')
    expect(config.siteUrl).not.toBe('')
    expect(config.domain).toBeType('string')
    expect(config.domain).not.toBe('')

    expect(isArray(config.repoInfoArr)).toBeTruthy
    expect(config.repoInfoArr.length).toBeGreaterThan(0)
  })
})
