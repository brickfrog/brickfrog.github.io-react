import React from 'react';
import {Container, Collapse, Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { Slider } from 'react-burgers'
import profilePic from '../../static/justin.jpg';
import './Navigation.scss';

class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <Navbar className='navigation__navbar' dark expand='lg' fixed='top'>
        <Container>
          <NavbarBrand href='/'>
            <img src={profilePic} className='profile-pic' alt='Justin Malloy'/>
            <span>Justin T. Malloy</span>
          </NavbarBrand>
          <Slider className='navbar-toggler'
                  width={34}
                  padding='0px'
                  color='#fff'
                  active={this.state.isOpen}
                  onClick={this.toggle}/>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className='ml-auto' navbar>
              <NavItem>
                <NavLink href='/projects/'>Projects</NavLink>
              </NavItem>
	      <NavItem>
                <NavLink href='/blog/'>Blog [External]</NavLink>
              </NavItem>
	      <NavItem>
                <NavLink href='/notion/'>Notion [External]</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default Navigation;
