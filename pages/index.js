import React from 'react'
import PropTypes from 'prop-types'
import Card from '../components/Card'
import Link from 'next/link'
import styled from 'styled-components'

import defaultPage from '../hocs/defaultPage'

const Index = ({isAuthenticated}) => (
    <div>

        <div>
            {!isAuthenticated && (
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
                    <div className="content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-3">
                                <img src=""/>
                            </div>
                            <div className="col">
                                <span>
                                    <h1>
                                        Google
                                    </h1><br/>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus magnam obcaecati totam.
                                </span>
                            </div>
                        </div>
                    </div>

                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-3">
                                    <img src=""/>
                                </div>
                                <div className="col">
                                <span>
                                    <h1>
                                        Google
                                    </h1><br/>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus magnam obcaecati totam.
                                </span>
                                </div>
                            </div>
                        </div>
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-3">
                                    <img src=""/>
                                </div>
                                <div className="col">
                                <span>
                                    <h1>
                                        Google
                                    </h1><br/>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus magnam obcaecati totam.
                                </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {isAuthenticated && (
                <div>
                    <div className="container">
                        <div className="card">
                            <img src="../assests/a1.jpeg" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up
                                    the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>


                    </div>
                    <div className="container">
                        <a href="#" onClick={Card} className="btn btn-primary">Add Gig</a>
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
