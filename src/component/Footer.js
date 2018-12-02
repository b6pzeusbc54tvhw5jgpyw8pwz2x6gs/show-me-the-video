import React, { useContext } from 'react'
import styled from 'styled-components'
import { Box as RebassBox, Image as RebassImage, Link as RebassLink, Flex as RebassFlex } from 'rebass'

import { appContext } from '../context'

const Box = styled(RebassBox)`
  background-color: ${p => p.showLayout ? 'rgba(133, 233, 133, 0.65)' : 'init'};
  padding: 1em 10px;
  bottom: 0px;
  width: 100%;
  text-align: right;

  & h1 {
    font-family: Roboto;
    font-size: 1.1em;
    font-weight: 300;
    padding: 0;
    margin: 0;
    color: rgba(128, 128, 128, 0.88);
  }
`

const Footer = props => {
  const { showLayout, toggleShowLayout } = useContext(appContext)

  return (
    <Box showLayout={showLayout}>
      <h1>Build with Show me the video</h1>
    </Box>
  )
}

export default Footer
