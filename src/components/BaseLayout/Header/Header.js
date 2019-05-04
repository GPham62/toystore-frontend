import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import './Header.css'
export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <h1 id="header-title">Shop Now</h1>
        <div className="links-header">
          <p><NavLink activeClassName="selected" className="nav-link-header" to="/educational">Educational Games</NavLink></p>
          <p><NavLink activeClassName="selected" className="nav-link-header" to="/boardgame">Board Games</NavLink></p>
        </div>
      </div>
    )
  }
}
