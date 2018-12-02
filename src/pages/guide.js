import React, { useContext } from 'react'
import { withRouter } from 'next/router'
import styled from 'styled-components'
import getConfig from 'next/config'
import { Box as RebassBox, Button as RebassButton, Flex as RebassFlex } from 'rebass'
import mime from 'mime-types'
import "video-react/dist/video-react.css"
import { Player, BigPlayButton, ControlBar, PlaybackRateMenuButton } from 'video-react'

import { getGuideInfo } from '../core'
import { appContext } from '../context'
import Header from '../component/Header'
import Footer from '../component/Footer'
import ReactMarkdown from 'react-markdown'
import markdownCss from '../markdownCss'
import { Page } from '../component/styled'
import { CONST_DIR_NAME } from '../core/constant'

const { publicRuntimeConfig } = getConfig()
const { SMTV_URL, SMTV_PUBLIC_REPO_URL, SMTV_MANAGER_ID } = publicRuntimeConfig

const Content = styled(RebassBox)`
  margin-bottom: 60px;
  flex: 1 1 0%;
  box-sizing: border-box;
`
const Container = styled(RebassBox)`
  margin-left: auto;
  margin-right: auto;
  max-width: 960px;
  padding: 0px 20px;
`

const VideoContainer = styled(RebassBox)`
  position: relative;
  padding-bottom: 56.25%;
  height: 0px;
`

const VideoFrame = styled(RebassBox)`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;

  & div:focus {
    outline: none;
  }
`

const BigButton = styled(RebassButton)`
  height: 4em;
  box-sizing: border-box;
  border-radius: 8px;
  cursor: pointer;
  padding: 0px;
  &:hover {
    background-color: #9c069c;
  }

  a {
    padding: 0px;
    color: white;
    width: 100%;
    height: 100%;
    display: inline-block;
    line-height: 4em;
  }
`

const MarkdownStyle = styled(RebassBox)`
  ${markdownCss}
`

const lookupMime = src => mime.lookup(src) ? mime.lookup(src) : void 0

const renderers = {
  linkReference: (props) => {
    const videoUrl = props?.href
    const thumbnailUrl = props.children[0]?.props?.src
    // videoUrl, thumbnailUrl 이 아래의 패턴의 경우
    // 비디오 플레이어 자리. 플레이어는 따로 띄우고 있으므로 제거해줌
    if (
      lookupMime(videoUrl)?.split('/')[0] === 'video'
      && lookupMime(thumbnailUrl)?.split('/')[0] === 'image'
    ) {
      return null
    }
  },
}


const Guide = props => {
  const { router } = props
  const { id, title, videoUrl, text, thumbnailUrl, filename } = props.guideInfo
  const { showLayout } = useContext(appContext)
  const issueTitle = encodeURIComponent(`
영상 가이드(${id}) 관련 문의/제안 드립니다
`.trim())
  const issueDescription = encodeURIComponent(`
# 질문 있어요 / 제안 합니다

- 보고 있던 동영상 주소: ${SMTV_URL}/${router.asPath}
- 급함 정도: 매우 급함 / 급함 / 보통 / 안급함 / 매우 안급함
- 내용:

\`\`\`
<여기에 작성해주세요>
\`\`\`

/assign @${SMTV_MANAGER_ID}
`.trim())
  return (
    <Page>
      <Header />
      <Content>
        <Container>
          <VideoContainer>
            <VideoFrame>
              <Player
                src={videoUrl}
                poster={thumbnailUrl}
                playsInline
              >
                <BigPlayButton position="center" />
                <ControlBar>
                  <PlaybackRateMenuButton rates={[5, 2, 1, 0.5, 0.1]} />
                </ControlBar>
              </Player>
            </VideoFrame>
          </VideoContainer>
          <MarkdownStyle>
            <ReactMarkdown source={text} renderers={renderers}/>
          </MarkdownStyle>
          <RebassFlex>
            <BigButton width={[ 1, 1, 1/2 ]} mx={1} bg="magenta">
              <a target='_blank' href={`${SMTV_PUBLIC_REPO_URL}/issues/new?issue[title]=${issueTitle}&issue[description]=${issueDescription}`}>질문/제안</a>
            </BigButton>
            <BigButton width={[ 1, 1, 1/2 ]} mx={1} bg="magenta">
              <a target='_blank' href={`${SMTV_PUBLIC_REPO_URL}/edit/master/${CONST_DIR_NAME}/${filename}`}>
                편집
              </a>
            </BigButton>
          </RebassFlex>
        </Container>
      </Content>
      <Footer />
    </Page>
  )
}

Guide.getInitialProps = async ({ req, res }) => {
  const guideId = req ? req.params?.guideId : '11'
  const guideInfo = await getGuideInfo(guideId)
  return { guideInfo }
}

export default withRouter(Guide)
