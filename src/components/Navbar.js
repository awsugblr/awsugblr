import React from 'react'
import { Link } from 'gatsby'
import github from '../img/github-icon.svg'
import logo from '../img/awsugblr.jpeg'

const Navbar = () => (
  <nav className="navbar is-transparent">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <figure className="image">
            <img src={logo} alt="AWSUGBLR" style={{ width: '150px' }} />
          </figure>
        </Link>
      </div>
      <div className="navbar-start">
        <Link className="navbar-item" to="/about">
          About
        </Link>
        <a 
          className="navbar-item"
          href="https://meetup.com/awsugblr/"
          target="_blank"
          >Meetup Page</a>
      </div>
      <div className="navbar-end">
        <a
          className="navbar-item"
          href="https://github.com/awsugblr/awsugblr"
          target="_blank"
        >
          <span className="icon">
            <img src={github} alt="Github" style={{ width: '150px' }} />
          </span>
        </a>
      </div>
    </div>
  </nav>
)

export default Navbar
