import React, { Component } from 'react';
import { NavLink as Link } from 'react-router-dom';

import SearchBar from './searchBar';
import Button from '../button';

import './index.less';

export default class ClassName extends Component {
  // constructor(props) {
  //
  // }

  render() {
    return (
      <header className="y_header">
        <div className="y_header_inner">
          <div className="y_h_tool">
            <a className="y_h_logo" title="YOM Logo" ><i className="fa fa-camera" aria-hidden="true" /></a>
            <SearchBar />
          </div>
          <nav className="y_h_nav">
            <Link activeClassName="y_nav_link__active" to={'/'} >Home</Link>
          </nav>
          <div className="y_h_func">
            <Button>Login</Button>
          </div>
        </div>
      </header>
    )
  }
}
