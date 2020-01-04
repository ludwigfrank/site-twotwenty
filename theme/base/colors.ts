// Text colors
export const textColors = {
  colorTextStandard: 'rgba(0,0,0,0.84)',
  colorTextLowContrast: 'rgba(0,0,0,0.84)',
  colorTextHighContrast: 'rgba(0,0,0,1)'
}

export type ThemeTextColorKeys = keyof typeof textColors

// Surface colors
export const surfaceColors = {}

export type ThemeSurfaceColorKeys = keyof typeof textColors

// All colors
export const colors = {
  ...textColors,
  colorBrand: '#fff',
  colorBackground: '#fff'
}

export type ThemeColorKeys = keyof typeof colors
export type ThemeColors = typeof colors
