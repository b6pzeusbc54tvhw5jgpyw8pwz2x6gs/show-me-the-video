import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Flex } from 'rebass'

import Card from './Card'
import { appContext } from '../context'

const StyledCardBox = styled(Flex)`
  flex-wrap: wrap;
  padding: 1.05rem;
  min-height: 640px;
`

const CardBox = props => {
  const { videoInfoArr } = useContext(appContext)
  return (
    <StyledCardBox>
      {videoInfoArr.map( (info,i) => <Card key={i} {...info} />)}
    </StyledCardBox>
  )
}

CardBox.propTypes = {
}

export default CardBox
