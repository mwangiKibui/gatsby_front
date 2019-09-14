/** for the header nav am going to use reactstrap */

import PropTypes from "prop-types";
import React from "react";
import {links as data} from "../data";
import {
  Collapse,Navbar,NavbarToggler,NavbarBrand,Nav,NavItem,NavLink
  } from 'reactstrap';

class Header extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isOpen:false
        }
    }
    toggle = () => {
      return this.setState({
        isOpen:!this.state.isOpen
      })
    }
    render(){
      const navLinks = data.map((elem,index) => {
        return (
          <NavItem key={index}>
            <NavLink href={elem.link}>{elem.title}</NavLink>
          </NavItem>
        )
      })
      return (
        <div>
          <Navbar color="dark" dark expand="md">
            <NavbarBrand href="/">
              {this.props.brand}
            </NavbarBrand>
             <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                  {navLinks}
                </Nav>
              </Collapse>
          </Navbar>
        </div>
      )
    }
};


Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Dj Deksta`,
};
export default Header
