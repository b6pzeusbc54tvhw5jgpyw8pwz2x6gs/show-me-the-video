import { FunctionComponent } from 'react'
import styled from '../../theme'
// import styled from 'styled-components'
import { Flex as RebassFlex } from 'rebass'
import NextLink from 'next/link'
import PropTypes from 'prop-types'

export const propTypes = {
  numberOrString: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  responsive: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.array,
  ]),
}

export const cloneFunc = (fn:any) => (...args:[]) => fn(...args)


const StyledLink = styled.div`
  cursor: pointer;
  :hover {
    color: #976565;
  }
`

export interface IStyled extends FunctionComponent {
  showLayout?: boolean
}

export const Page = styled(RebassFlex)<IStyled>`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`

export const Link = (props: any) => {
  return (
    <StyledLink>
      <NextLink {...props}/>
    </StyledLink>
  )
}
