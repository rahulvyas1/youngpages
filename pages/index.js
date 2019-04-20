import React from 'react'
import PropTypes from 'prop-types'
import Card from '../components/Card'
import Link from 'next/link'
import styled from 'styled-components'

import defaultPage from '../hocs/defaultPage'

// const createLink = (href, text) => (
//   <div href={href}>{text}</div>
// )

const addingCard =()=>{
    <div>
        <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown button
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <a class="dropdown-item" href="#">Something else here</a>
            </div>
        </div>
        <div class="form-group">
            <label for="exampleFormControlInput1">Name of gig</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Your@gig"/>
        </div>
        <div class="form-group">
            <label for="exampleFormControlTextarea1">Example textarea</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
    </div>
}

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
          <div>
              <div className="container">
                  <div className="card" >
                      <img src="../assests/a1.jpeg" className="card-img-top" alt="..."/>
                      <div className="card-body">
                          <h5 className="card-title">Card title</h5>
                          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                          <a href="#" className="btn btn-primary">Go somewhere</a>
                      </div>
                  </div>


              </div>
              <div className="container">
                  <a href="#" onClick={addingCard} className="btn btn-primary">Add Gig</a>
              </div>
          </div>

      )}
    </div>
  </div>
)

Index.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired
}

export default defaultPage(Index)
