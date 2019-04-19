import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import styled from 'styled-components'

import defaultPage from '../hocs/defaultPage'

const createLink = (href, text) => (
  <div href={href}>{text}</div>
)

const Index = ({ isAuthenticated }) => (
  <div>

    <div>
      <h1>Hello, friend!</h1>

      {!isAuthenticated && (
        <span>
          You're not authenticated yet.
        </span>
      )}
      {isAuthenticated && (
        <span>
          Now  you're authenticated
        </span>
      )}
    </div>
  </div>
)

Index.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired
}

export default defaultPage(Index)
