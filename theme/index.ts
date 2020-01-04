import { theme as baseTheme } from './base'

export const themes = [{ name: 'base', values: baseTheme }]
export const defaultTheme = themes[0]

export type Theme = typeof defaultTheme.values
