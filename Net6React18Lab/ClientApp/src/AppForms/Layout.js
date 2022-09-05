import React, { Component } from 'react';
import { NavMenu } from './NavMenu';

export class Layout extends Component {
  static displayName = Layout.name;

  render() {
    return (
      <div>
        <p>我是橫幅</p>
        <NavMenu />
        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  }
}
