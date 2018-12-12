import React, { Component } from 'react'
import styled, { ThemeProvider, injectGlobal } from 'styled-components'

import { Header, Meta } from '../components'

// CSS
const theme = {
  red: '#FF0000',
  black: '#000000',
  grey: '#3A3A3A',
  lightgrey: '#E1E1E1',
  offWhite: '#EDEDED',
  maxWidth: '900px',
  bs: '0px 12px 24px 0 rgba(0, 0, 0, 0.09)'
}

injectGlobal`
  @font-face {
    font-family: 'radnika_next';
    src: url('/static/radnikanext-medium-webfont.woff2') format('woff2');
    font-weight: 0;
    font-style: 0;
  }
  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
    font-family: 'radnika_next';
  }
  a {
    text-decoration: none;
    color: ${theme.black};
  }
  button {  font-family: 'radnika_next'; }
`

const StyledPage = styled.div`
  background: white;
  color: ${props => props.theme.black};
`

const Inner = styled.div`
  background: #FFFFFF;
`

// Component
class Page extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>

        <StyledPage>

          <Meta />

          <Header />

          <Inner>
            { this.props.children }
          </Inner>

        </StyledPage>

      </ThemeProvider>
    )
  }
}


export { Page }