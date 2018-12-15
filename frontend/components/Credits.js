import React, { Component } from 'react'
import styled from 'styled-components'

const Credit = styled.div`
    position: fixed;
    bottom: 20px; right: 20px;
    font-family: Arial, sans-serif;
    font-weight: normal;
`

export class Credits extends Component {
  render() {
    return (
      <Credit>
          👍🏻 Inspired by <u>WesBos' Advanced React-GraphQL course</u>
      </Credit>
    )
  }
}
