import {studioTheme, ThemeProvider} from '@sanity/ui'
import {AppProps} from 'next/app'
import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle(({theme}) => {
  const {color, fonts} = theme.sanity
  const textSize = fonts.text.sizes[2]

  return {
    'html,body,#__next': {
      height: '100%',
    },

    html: {
      WebkitTapHighlightColor: 'rgba(0,0,0,0)',
      font: `100%/${textSize.lineHeight / textSize.fontSize} ${fonts.text.family}`,
      textSizeAdjust: '100%',
    },

    body: {
      WebkitFontSmoothing: 'antialiased',
      backgroundColor: color.base.bg,
      margin: 0,
    },
  }
})

export default function App(props: AppProps) {
  const {Component, pageProps} = props

  return (
    <ThemeProvider theme={studioTheme} tone="transparent">
      <GlobalStyle />
      <ThemeProvider tone="default">
        <Component {...pageProps} />
      </ThemeProvider>
    </ThemeProvider>
  )
}
