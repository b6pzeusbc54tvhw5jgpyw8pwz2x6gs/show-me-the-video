import styled from 'styled-components'
import { Flex as RebassFlex } from 'rebass'
import NextLink from 'next/link'
import omit from 'lodash/omit'

const StyledLink = styled.div`
  cursor: pointer;
  :hover {
    color: #976565;
  }
`

export const Page = styled(RebassFlex)`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`

export const Link = (props) => {
  return (
    <StyledLink>
      <NextLink {...props}/>
    </StyledLink>
  )
}

export default {
  Page,
  Link,
}
