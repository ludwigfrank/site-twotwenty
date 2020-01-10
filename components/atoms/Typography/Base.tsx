import React, { FunctionComponent } from 'react'

import styled, {
  ThemeProps,
  FlattenInterpolation,
  DefaultTheme
} from 'styled-components'

import { space, SpaceProps } from 'styled-system'
import { ThemeTextColorKeys } from '../../../theme/base/colors'

interface TypographyPreset {
  asComponent: any
  style: FlattenInterpolation<ThemeProps<DefaultTheme>>
}

interface BaseProps extends SpaceProps {
  preset: TypographyPreset
  color?: ThemeTextColorKeys
}

export const Base: FunctionComponent<BaseProps> = ({
  preset,
  children,
  color = 'colorTextStandard',
  ...props
}) => {
  const { style, asComponent } = preset

  const Wrapper = styled(asComponent)`
    ${style};
    ${space};
    color: ${props => props.theme[color]};
  `

  return <Wrapper {...props}> {children} </Wrapper>
}
