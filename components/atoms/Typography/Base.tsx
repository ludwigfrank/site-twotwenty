import React, { FunctionComponent } from 'react'

import styled, {
  ThemeProps,
  FlattenInterpolation,
  DefaultTheme
} from 'styled-components'

interface TypographyPreset {
  asComponent: any
  style: FlattenInterpolation<ThemeProps<DefaultTheme>>
}

interface BaseProps {
  preset: TypographyPreset
}

export const Base: FunctionComponent<BaseProps> = ({ preset, children }) => {
  const { style, asComponent } = preset

  const Wrapper = styled(asComponent)`
    ${style};
  `

  return <Wrapper> {children} </Wrapper>
}
