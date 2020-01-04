import App from 'next/app'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { themes } from '../theme'

const defaultTheme = themes[0].values

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={defaultTheme}>
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}
