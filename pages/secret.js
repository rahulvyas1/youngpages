import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import securePage from '../hocs/securePage'


const Secret = ({ loggedUser }) => (
  <div>
      Hi <strong>{loggedUser.email}</strong>.
  </div>
)

Secret.propTypes = {
  loggedUser: PropTypes.object.isRequired
}

export default securePage(Secret)
