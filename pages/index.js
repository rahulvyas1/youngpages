import React from 'react'
import PropTypes from 'prop-types'
import Card from './gig'
import Link from 'next/link'
import styled from 'styled-components'
import GigItem from '../components/gig-item'
import defaultPage from '../hocs/defaultPage'

const Sameline = {
  display: 'flex',
  paddingBottom: '20px'
};

const inputbox = 
{
 fontSize: '1.8rem',
 color: 'fff',
 height: '3rem'
};
const Index = ({isAuthenticated, loggedUser}) => (
    <div>
        <div>
                <div>
                    <div className="container-fluid bg">
                        <div className="container">
                            <div className="row">
                                <div className="col text">
                                    <span>Get a job <br/> You can do anywhere</span>
                                </div>
                                
                            </div>

                        </div>
                    </div>
                    <div className="content container">
                    <div className="row container">
                    <div style={Sameline} className="col-9"> <h1> All Gigs</h1> {isAuthenticated && (<div><a className="btn btn-primary" >Add gig</a></div>)}</div>
                    <div className="col-3">
                    <div class="input-group input-group-lg">
  <div class="input-group-prepend">
    <span class="input-group-text" id="inputGroup-sizing-lg">Search</span>
  </div>
  <input type="text" class="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm"></input>
  </div>

                                </div>
                                </div>

                        <GigItem></GigItem>
                        <GigItem></GigItem>
                        <GigItem></GigItem>
                        
                        
                    </div>
                </div>

            {/* {isAuthenticated && (
                <div className="bg1">
                    <div className="container profile">
                        <div className="row">
                            <div className="col">
                                <div className="card ">
                                    <img src={loggedUser.picture} className="card-img-top" alt="..."/>
                                    <div className="card-body">
                                        <h5 className="card-title">{loggedUser.name}</h5>
                                        <p className="card-text">{loggedUser.email}</p>
                                        <p className="card-text">{loggedUser.nickname}</p>
                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            )} */}
          

        </div>
    </div>
)

Index.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    loggedUser: PropTypes.object.isRequired
}

export default defaultPage(Index)
