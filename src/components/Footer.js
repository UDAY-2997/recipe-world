import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="container">
      <section className="foot flex">
       <h2 className="home">
          <Link to="/menu.js">U-Dev</Link>
        </h2>
        <ul className="head-list flex">
        <li><a href="https://github.com/UDAY-2997">
        <FontAwesomeIcon icon={faGithub} />
      </a></li>   <li><a href="https://www.linkedin.com/in/uday-veer-singh-8793b8249/">
        <FontAwesomeIcon icon={faLinkedin} />
      </a></li>
      
       <li><a href="mailto:udaythakur.shely@gmail.com">
        <FontAwesomeIcon icon={faEnvelope} />
      </a></li>
      
        </ul>
        
      </section>
    </footer>
  )
}

export default Footer