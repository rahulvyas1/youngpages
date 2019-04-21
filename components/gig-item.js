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
    flexDirection: 'horizontal',
    backgroundColor: 'fff'
};

var outerStyle = {
    display: 'flex',
    flexDirection: 'horizontal'
};

export default () => (
    <div className="container-fluid card">
        <div className="container">
            <div className="row">
                <div className="col-2">
                    <img src="/"/>
                </div>
                <div className="col-8">
                                <span>
                                      <h3>
                                        I will write a 5 page assignment in good handwriting
                                    </h3>
                                    <div className="row">
                                      <h4>INR 500</h4> &nbsp; &nbsp; &nbsp;<h4>24hrs</h4>
                                    </div>
                                    <p>username</p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus magnam obcaecati totam.
                                </span>
                    <br/>
                    <span class="badge badge-pill badge-primary">Serverless</span>
                    <span class="badge badge-pill badge-primary">Reactjs</span>
                </div>
                <div className="col">
                    <a className="btn btn-primary"> Purchase</a>
                </div>
            </div>
        </div>
    </div>
)
