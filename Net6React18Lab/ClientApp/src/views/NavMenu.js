import React, { Component } from 'react';
//import { Collapse, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';

export class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor (props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar () {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    return (
      <header>
        <nav>
          <Link to="/">Home</Link>&nbsp;|&nbsp;
          <Link to="/hello">Hello</Link>&nbsp;|&nbsp;
          <Link to="/counter">Counter</Link>&nbsp;|&nbsp;
          <Link to="/fetch-data">Fetch data</Link>
        </nav>
      </header>
    );
  }
}
