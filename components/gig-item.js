import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

var divStyle = {
  color: 'black',
  border: '1px groove #BABABA',
  borderRadius: '5px', 
  WebkitTransition: 'all', // note the capital 'W' here
  msTransition: 'all', // 'ms' is the only lowercase vendor prefix
  display: 'flex',
  flexDirection: 'horizontal'
};

var outerStyle = {
  display: 'flex',
  flexDirection: 'horizontal'
};

export default () => (
  <div style={divStyle}>
     <div style={outerStyle}><img src="/"></img></div>
     <div>
     <h3> Software development gig</h3>
     </div>
  </div>
)
