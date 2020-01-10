import App from 'next/app'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { themes } from '../theme'
import { GlobalStyles } from '../theme/global-styles/GlobalStyles'

const defaultTheme = themes[0].values

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}
