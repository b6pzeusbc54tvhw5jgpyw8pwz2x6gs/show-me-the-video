import { withRouter, SingletonRouter } from 'next/router'
import React, { useContext, SFC } from 'react'
import getConfig from 'next/config'
import styled from 'styled-components'
import { Flex as RebassFlex } from 'rebass'
import { Link } from './styled'
import { appContext } from '../context'

const { publicRuntimeConfig} = getConfig()

interface IStyled extends SFC {
  showLayout?: boolean
}
interface ITextButtonProps extends IStyled {
  onClick?: () => void
}

const Box = styled(RebassFlex)<IStyled>`
  -webkit-box-align: center;
  align-items: center;
  height: 80px;
  -webkit-box-pack: justify;
  justify-content: space-between;
  margin-bottom: 20px;
  border-bottom: 2px solid rgb(237, 237, 237);
  padding: 0px 20px;
  font-family: Roboto;
  background-color: ${p => p.showLayout ? 'rgba(133, 233, 133, 0.65)' : '#f2aaaa'};
`

const TextButton = styled.li<ITextButtonProps>`
  background-color: ${p => p.showLayout ? 'rgba(83, 23, 233, 0.65)' : '#f2aaaa'};
  display: inline-block;
  cursor: pointer;
  color: white;
  margin-left: 1em;
  font-size: 2em;
  &:first-child {
    margin-left: 0;
  }
  & a {
    text-decoration: none;
    color: white;
  }
  & a:hover {
    color: #700f0f;
  }
  &:hover {
    color: #700f0f;
  }
`


const TextButtonBox = styled.ul`
  list-style: none;
`

const H1 = styled.h1<IStyled>`
  font-size: 1.3em;
  color: black;
  background-color: ${p => p.showLayout ? 'rgba(83, 23, 233, 0.65)' : '#f2aaaa'};
  & a {
    text-decoration: none;
    color: black;
  }
`
interface HeaderProps {
  router: SingletonRouter
}

const Header: IStatelessPage<HeaderProps> = (props: HeaderProps) => {
  const { showLayout, toggleShowLayout } = useContext(appContext)
  const { pathname } = props.router
  const { SMTV_TITLE } = publicRuntimeConfig

  return (
    <Box showLayout={showLayout}>
      <H1 showLayout={showLayout}>
        {pathname !== '/' && <Link href={{ pathname: `/` }}><a>{SMTV_TITLE}</a></Link>}
        {pathname === '/' && SMTV_TITLE}
      </H1>
      <TextButtonBox>
        <TextButton onClick={toggleShowLayout}>layout</TextButton>
        <TextButton>
          {pathname !== '/' && <Link href={{ pathname: `/` }}><a>list</a></Link>}
        </TextButton>
      </TextButtonBox>
    </Box>
  )
}

export default withRouter(Header)
