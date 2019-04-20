import React from 'react'
import PropTypes from 'prop-types'
import Card from './gig'
import Link from 'next/link'
import styled from 'styled-components'
import GigItem from '../components/gig-item'
import defaultPage from '../hocs/defaultPage'

const Index = ({isAuthenticated, loggedUser}) => (
    <div>
        <div>
            {/*{!isAuthenticated && (*/}
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
<<<<<<< HEAD
            )}
            {isAuthenticated && (
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

            )}
            <div className="container">
            <div className="row">
            <div className="col-3">
            </div>
            </div>
            <h1> All Gigs</h1> {isAuthenticated && <a href="/gig" className="btn btn-primary">Add Gig</a>}
            <GigItem></GigItem>        
            </div>
=======
            // )}
            {/*{isAuthenticated && (*/}
                {/*<div className="bg1">*/}
                    {/*<div className="container profile">*/}
                        {/*<div className="row">*/}
                            {/*<div className="col">*/}
                                {/*<div className="card ">*/}
                                    {/*<img src={loggedUser.picture} className="card-img-top" alt="..."/>*/}
                                    {/*<div className="card-body">*/}
                                        {/*<h5 className="card-title">{loggedUser.name}</h5>*/}
                                        {/*<p className="card-text">{loggedUser.email}</p>*/}
                                        {/*<p className="card-text">{loggedUser.nickname}</p>*/}
                                        {/*<a href="#" className="btn btn-primary">Go somewhere</a>*/}
                                    {/*</div>*/}
                                {/*</div>*/}
                            {/*</div>*/}
                        {/*</div>*/}
                    {/*</div>*/}
                    {/*<div className="container">*/}
                        {/*<a href="/gig" className="btn btn-primary">Add Gig</a>*/}
                    {/*</div>*/}
                {/*</div>*/}

            {/*)}*/}
>>>>>>> ff4503e64b1a9cc3881263092ad762022f9986af
        </div>
    </div>
)

Index.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    loggedUser: PropTypes.object.isRequired
}

export default defaultPage(Index)
