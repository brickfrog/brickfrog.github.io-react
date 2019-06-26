import React from 'react';
import {Container} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <hr/>
        <Container>
          <a href='https://www.linkedin.com/in/justin-tm/'><FontAwesomeIcon icon={faLinkedin} /></a>
          <a href='https://github.com/brickfrog'><FontAwesomeIcon icon={faGithub}  /></a>
          <a href='https://twitter.com/br1ckfrog'><FontAwesomeIcon icon={faTwitter}  /></a>
          <p>copyright &copy; Justin Malloy 2018-{(new Date().getFullYear())}</p>
        </Container>
      </footer>
    )
  }
}

export default Footer;
