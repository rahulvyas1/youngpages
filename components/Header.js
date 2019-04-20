import React from 'react'
import PropTypes from 'prop-types'
import defaultPage from '../hocs/defaultPage'

const logo={
    height: '56px',    
};
const Navbar = ({isAuthenticated,loggedUser}) => (
    <nav className="navbar navbar-expand-lg navbar-light ">
        {/*<a className="navbar-brand" href="#">Navbar</a>*/}
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"/>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
            <div>
            <img src="../static/a1.jpeg" style={logo}/>
            </div>
                <li className="nav-item active">
                    <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/about">About Us</a>
                </li>


                {!isAuthenticated && (
                    <li className="nav-item">
                        <a className="nav-link " href="/auth/sign-in" tabindex="-1" aria-disabled="true">Sign In</a>
                    </li>
                )}
                {isAuthenticated && (
                    <li className="nav-item">
                        <a className="nav-link" href="/secret">Profile</a>
                    </li>
                )}
                {isAuthenticated && (
                    <li className="nav-item">
                        <a className="nav-link" href="/auth/sign-off">Sign off</a>
                    </li>
                )}
            </ul>
            {isAuthenticated && (
                <form className="form-inline my-2 my-lg-0">
                    <p>Hello, {loggedUser.name}</p>
                </form>
            )}

        </div>
    </nav>
)

Navbar.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    loggedUser:PropTypes.object.isRequired
    // currentUrl: PropTypes.string.isRequired
}

export default Navbar
