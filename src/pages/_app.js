import React from 'react'
import PropTypes from 'prop-types'
import App, { Container } from 'next/app'
import { createGlobalStyle } from 'styled-components'

import { useShowLayout, useVideoInfoArr } from '../state'
import { appContext } from '../context'
import { getVideoInfoArr } from '../core'
import getConfig from 'next/config'

import '../font.css'

const {publicRuntimeConfig} = getConfig()
const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
  }
  a:visited {
    text-decoration: none;
  }
  html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {
    vertical-align: baseline;
    margin: 0px;
    padding: 0px;
    border-width: 0px;
    border-style: initial;
    border-color: initial;
    border-image: initial;
    font: inherit;
  }
`

const CustomApp = (props) => {
  const { SMTV_SHOW_LAYOUT } = publicRuntimeConfig
  const { Component, pageProps } = props
  const { showLayout, toggleShowLayout } = useShowLayout(SMTV_SHOW_LAYOUT)
  const videoInfoArr = useVideoInfoArr(props.videoInfoArr)

  return (
    <appContext.Provider value={{ showLayout, toggleShowLayout, videoInfoArr }}>
      <GlobalStyle />
      <Container>
        <Component {...pageProps}/>
      </Container>
    </appContext.Provider>
  )
}

CustomApp.propTypes = {
  Component: PropTypes.func.isRequired,
  videoInfoArr: PropTypes.array.isRequired,
}

class CustomAppWrapper extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    const videoInfoArr = await getVideoInfoArr()
    return { videoInfoArr, pageProps, router }
  }

  render() {
    return <CustomApp {...this.props}/>
  }
}

export default CustomAppWrapper
