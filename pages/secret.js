import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import securePage from '../hocs/securePage'


const Secret = ({loggedUser}) => (
    <div>
        <div className="bg1">
            <div className="container-fluid pt-5 profile">
                <div className="row">
                    <div className="col-3">
                        <div className="card ">
                            <img src={loggedUser.picture} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h4 className="card-title username">{loggedUser.name}</h4>
                                {/*<p className="card-text">{loggedUser.email}</p>*/}
                                <br/><p className="card-text "><strong>Username:</strong> {loggedUser.nickname}</p>
                                <p className="card-text earned"><strong>Earned in this month</strong></p>
                                <p className="card-text inbox"><strong>Inbox</strong></p>
                            </div>
                        </div><div className="pt-5 gig"><a href="/gig" className=" btn btn-primary">Your Gigs</a></div>

                    </div>
                    <div className="col-9">
                        <div className="container car">
                            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                                <ol className="carousel-indicators">
                                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"/>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="1"/>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="2"/>
                                </ol>
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <h1>Business Software For Freelancers</h1>
                                        <h4 className=" w-100" >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga fugit quaerat qui?Autem exercitationem nulla quisquam!</h4>
                                    </div>
                                    <div className="carousel-item">
                                        <h1>Business Software For Freelancers</h1>
                                        <h4 className="d-block w-100">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem exercitationem nulla quisquam!</h4>
                                    </div>
                                    <div className="carousel-item">
                                        <h1>Business Software For Freelancers</h1>
                                        <h4 className="d-block w-100">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut culpa perferendis voluptatibus.</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">

            </div>
        </div>
<div className="">
    <footer className="footer pt-5">
        <div className=" container-fluid logo">
            <div className="row">
                <div className="col-8 ">
                    <img src="../static/a1.jpeg" className="ufaber"/>
                </div>
            </div>
        </div>
        <div className="container-fluid logo">
            <div className="row">
                <div className="col-9">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    <p>
                        +91 9999-999-999 | hello@YP.com
                    </p>

                </div>

                <div className=" col-3  footer_logo">
                    <div >
                        <span className="follow">FOLLOW US</span>

                    </div>
                </div>
            </div>
        </div>
        <div className="pt-4">
            <div className="container-fluid last" >
                <div className="row">
                    <div className="col copyright pt-4 pb-4" >
                        2018 © YoungPages, All rights reserved.
                    </div>

                </div>
            </div>
        </div>
    </footer>
</div>
    </div>
)

Secret.propTypes = {
        loggedUser: PropTypes.object.isRequired
    }

export default securePage(Secret)
