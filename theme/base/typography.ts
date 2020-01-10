import { css } from 'styled-components'
import { media } from '../media'
import { convertPxToEm } from '../util'

const parseUnit = convertPxToEm

const fontFamily = {
  title: "'Sohne Schmal', system-ui",
  body: "'Sohne Mono', system-ui"
}

const titleFontWeight = {
  medium: 600
}

const bodyFontWeight = {
  medium: 600,
  regular: 500
}

/* Typography Presets */
// Base preset, every preset inherits from this
const presetBase = css`
  color: ${props => props.theme.colorTextStandard};
  font-size: ${parseUnit(16)};
  line-height: ${parseUnit(24)};
  font-family: ${fontFamily.body};
  letter-spacing: ${parseUnit(0)};
  font-weight: ${bodyFontWeight.regular};

  strong {
    font-weight: 600;
  }
`

// Title preset
const presetTitleBase = css`
  ${presetBase};
  font-family: ${fontFamily.title};
  font-weight: ${titleFontWeight.medium};
  color: ${props => props.theme.colorTextHighContrast};
  hyphens: auto;
  word-break: break-word;
  word-wrap: break-word;
`

// Default presets for mobile-first development
export const typographyTitlePresets = {
  // Title
  display: {
    asComponent: 'h1',
    style: css`
      ${presetTitleBase};
      font-size: ${parseUnit(70)};
      line-height: ${parseUnit(15)};

      ${media.queryPhone`
        font-size: ${parseUnit(160)};
        line-height: ${parseUnit(15)};
      `}
    `
  },

  title1: {
    asComponent: 'h1',
    style: css`
      ${presetTitleBase};
      font-size: ${parseUnit(58)};
      line-height: ${parseUnit(15)};
      text-transform: uppercase;

      ${media.queryPhone`
        font-size: ${parseUnit(80)};
        line-height: ${parseUnit(15)};
      `}
    `
  },

  title2: {
    asComponent: 'h2',
    style: css`
      ${presetTitleBase};
      font-size: ${parseUnit(20)};
      line-height: ${parseUnit(28)};

      ${media.queryPhone`
        font-size: ${parseUnit(40)};
        line-height: ${parseUnit(15)};
      `}
    `
  },

  title3: {
    asComponent: 'h3',
    style: css`
      ${presetTitleBase};
      font-size: ${parseUnit(18)};
      line-height: ${parseUnit(24)};
    `
  },

  title4: {
    asComponent: 'h4',
    style: css`
      ${presetTitleBase};
      font-size: ${parseUnit(12)};
      line-height: ${parseUnit(16)};
      color: ${props => props.theme.colorTextLowContrast};
      text-transform: uppercase;
      font-family: ${fontFamily.body};
      letter-spacing: ${parseUnit(1)};
    `
  }
}

export const typographyBodyPresets = {
  paragraph: {
    asComponent: 'p',
    style: css`
      ${presetBase};
      font-size: ${parseUnit(16)};
      line-height: ${parseUnit(24)};
    `
  },

  body1: {
    asComponent: 'p',
    style: css`
      ${presetBase};
      font-size: ${parseUnit(16)};
      line-height: ${parseUnit(24)};
    `
  },

  body2: {
    asComponent: 'p',
    style: css`
      ${presetBase};
      font-size: ${parseUnit(14)};
      line-height: ${parseUnit(20)};
      letter-spacing: ${parseUnit(0.1)};
      font-weight: normal;
    `
  },

  caption: {
    asComponent: 'span',
    style: css`
      ${presetBase};
      font-size: ${parseUnit(13)};
      line-height: ${parseUnit(16)};
      letter-spacing: ${parseUnit(0.25)};
    `
  },

  button: {
    asComponent: 'span',
    style: css`
      ${presetBase};
      font-size: ${parseUnit(16)};
      line-height: ${parseUnit(24)};
      letter-spacing: ${parseUnit(0.25)};
      font-weight: normal;
    `
  }
}

export type TypographyBodyPresetKeys = keyof typeof typographyBodyPresets
export type TypographyTitlePresetKeys = keyof typeof typographyTitlePresets
