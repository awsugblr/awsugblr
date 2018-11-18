import React from 'react'
import { Link } from 'gatsby'
import github from '../img/github-icon.svg'
import logo from '../img/awsugblr.jpeg'
import twitter_logo from '../img/twitter.svg'
import facebook_logo from '../img/facebook.svg'
import linkedin_logo from '../img/linkedin.svg'
import telegram_logo from '../img/telegram.svg'
import rss_logo from '../img/rss.svg'


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
          href="https://twitter.com/awsugblr/"
          target="_blank"
        >
          <span className="icon">
            <img src={twitter_logo} alt="Twitter" style={{ width: '150px' }} />
          </span>
        </a>
      </div>

      <div className="navbar-end">
        <a
          className="navbar-item"
          href="https://facebook.com/awsugblr/"
          target="_blank"
        >
          <span className="icon">
            <img src={facebook_logo} alt="Facebook" style={{ width: '150px' }} />
          </span>
        </a>
      </div>

      <div className="navbar-end">
        <a
          className="navbar-item"
          href="https://linkedin.com/in/awsugblr"
          target="_blank"
        >
          <span className="icon">
            <img src={linkedin_logo} alt="LinkedIn" style={{ width: '150px' }} />
          </span>
        </a>
      </div>

      <div className="navbar-end">
        <a
          className="navbar-item"
          href="https://t.me/awsugblr"
          target="_blank"
        >
          <span className="icon">
            <img src={telegram_logo} alt="Telegram" style={{ width: '150px' }} />
          </span>
        </a>
      </div>

      <div className="navbar-end">
        <a
          className="navbar-item"
          href="https://awsugblr.in/rss.xml"
          target="_blank"
        >
          <span className="icon">
            <img src={rss_logo} alt="RSS" style={{ width: '150px' }} />
          </span>
        </a>
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
