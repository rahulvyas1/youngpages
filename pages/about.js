import React from 'react'
import defaultPage from '../hocs/defaultPage'


const About = () => (

    <div>

        <div className="container-fluid bg">
            <div className="container">
                <div className="row">
                    <div className="col text">
                        <span>About YoungPages</span>
                    </div>

                </div>

            </div>
        </div>
        <div className="container descr">
            <br/>
            <h1>Team</h1>
            <span className="descr">
     We are a team of 3 college students working together to create an impressive platform where young students can offer services and make money.
    </span>
            <br/>
            <br/>
            <h1>Goals</h1>
            <span className="descr">
     We are a team of 3 college students working together to create an impressive platform where young students can offer services and make money.
    </span>
        </div>
    </div>
)

export default defaultPage(About)
