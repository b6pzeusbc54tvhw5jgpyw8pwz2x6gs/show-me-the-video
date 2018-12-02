import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Box as RebassBox, Image as RebassImage, Link as RebassLink } from 'rebass'
import Link from 'next/link'
import moment from 'moment'

import { appContext } from '../context'

const Box = styled(RebassBox)`
  background-color: ${p => p.showLayout ? 'rgba(133, 233, 133, 0.65)' : 'initial'};
  cursor: pointer;
  position: relative;
`

const LinkInner = styled(RebassLink)`
  box-shadow: none;
  border-bottom: none;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
  text-decoration: none;
  background-color: ${p => p.showLayout ? 'rgba(255, 0, 0, 0.81)' : 'transparent'};
  &:hover {
    color: rgb(102, 51, 153);
    outline-width: 0;
  }
`

const ImageRapper = styled(RebassBox)`
  position: relative;
  overflow: hidden;
  box-shadow: rgba(102, 51, 153, 0.1) 0px 4px 10px;
  margin-bottom: 0.525rem;
  border-radius: 4px;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
  &:hover {
    transform: translateY(-3px);
    box-shadow: rgba(140, 101, 179, 0.5) 0px 8px 20px;
  }
`

const Padding = styled.div`
  width: 100%;
  padding-bottom: 65%;
`

const Image = styled(RebassImage)`
  border-radius: 4px;
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
  opacity: 1;
  transition: opacity 0.5s ease 0s;

  max-width: 100%;
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 1.05rem;

  border-style: none;
}
`

const AbsoluteBox = styled(RebassBox)`
  position: absolute;
  text-align: right;
  bottom: 5px;
  right: 8px;
  background-color: #0000009e;
  padding: 6px;
  color: white;
  font-family: Roboto;
`

const InfoBox = styled(RebassBox)`
  color: rgba(0, 0, 0, 0.36);
  font-size: 0.8409rem;
  line-height: 1.4rem;
  align-items: baseline;
  &:hover {
    text-decoration: underline;
  }
`

const Title = styled(RebassBox)`
  background-color: ${p => p.showLayout ? 'rgba(233, 83, 133, 0.45)' : 'initial'};
  color: rgba(0, 0, 0, 0.36);

  & .title {
    box-shadow: rgb(251, 250, 252) 0px 0px 0px 0px inset;
    transition: box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1) 0s, transform 0.3s cubic-bezier(0.4, 0, 0.2, 1) 0s;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin: 0;
    color: hsla(270,17.119554496%,0%,0.92);
    font-size: 1rem;
    font-height: 1.4rem;
    font-weight: bold;
    font-rendering: optimizeLegibility;
    font-family: Roboto, 'Nanum Gothic Coding';
    white-space: pre-line;
  }
`

const SubInfo = styled(RebassBox)`
  text-align: left;
`

const Card = props => {
  const { showLayout } = useContext(appContext)
  const { title, thumbnailUrl, id, date, author } = props
  const dateStr = moment(date).format('MMMM D, YYYY')
  const duration = props.duration || "00:00"

  return (
    <Box px={2} py={2} my={1} width={[1, 1/2, 1/3, 1/4]} showLayout={showLayout}>
      <Link href={{ pathname: `/guide/${id}` }}>
        <LinkInner showLayout={showLayout}>
          <ImageRapper>
            <Padding/>
            <Image width={[ 1 ]} src={thumbnailUrl}/>
            <AbsoluteBox>
              <span>{duration}</span>
            </AbsoluteBox>
          </ImageRapper>
        </LinkInner>
      </Link>
      <InfoBox>
        <Title showLayout={showLayout}>
          <h5 className='title'>{title}</h5>
          <SubInfo>
            <span>{`${dateStr} / ${author}`}</span>
          </SubInfo>
        </Title>
      </InfoBox>
    </Box>
  )
}

Card.propTypes = {
  // videoUrl: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  thumbnailUrl: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
}

export default Card
