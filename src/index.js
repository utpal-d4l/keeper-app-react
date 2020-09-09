/* eslint-disable no-undef */
import React from 'react'
import ReactDOM from 'react-dom'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'

import App from './App'

import './styles.css'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#3490de'
    },
    secondary: {
      main: '#e84a5f'
    }
  },
  typography: {
    fontFamily: 'Montserrat, sans-serif',
    fontWeightBold: '900',
    fontWeightLight: '100',
    fontWeightMedium: '500',
    fontWeightRegular: '300'
  }
})

const ThemedApp = () => (
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
)

ReactDOM.render(<ThemedApp />, document.getElementById('root'))
