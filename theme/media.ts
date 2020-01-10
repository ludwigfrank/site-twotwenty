import { mediaQueries } from './base/size'
import { DefaultTheme, ThemedCssFunction, css } from 'styled-components'

// Iterate through the sizes and create a media template
export const media = (Object.keys(
  mediaQueries
) as (keyof typeof mediaQueries)[]).reduce((acc, label) => {
  acc[label] = (first: any, ...interpolations: any[]) => css`
    @media (min-width: ${mediaQueries[label]}px) {
      ${css(first, ...interpolations)}
    }
  `

  return acc
}, {} as { [key in keyof typeof mediaQueries]: ThemedCssFunction<DefaultTheme> })
