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
  }
})

const ThemedApp = () => (
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
)

ReactDOM.render(<ThemedApp />, document.getElementById('root'))
