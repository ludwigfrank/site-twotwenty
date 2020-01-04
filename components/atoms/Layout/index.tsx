import styled, { StyledComponent } from 'styled-components'
import { grid, space, SpaceProps, GridProps } from 'styled-system'
import { FunctionComponent } from 'react'

export const Layout = styled('section')`
  display: grid;
  grid-template-columns: repeat(12, [col-start] 1fr);
  grid-gap: 24px;
  margin: 0 auto;
  max-width: 1032px;
`

type BoxProps = GridProps & SpaceProps

export const Box: FunctionComponent<BoxProps> = ({ children, ...props }) => {
  const Wrapper = styled('div')(grid)
  return <Wrapper {...props}>{children}</Wrapper>
}
