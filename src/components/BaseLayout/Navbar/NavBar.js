import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import "./NavBar.css"
import shopping_cart from "../../../img/cart.svg"
import home from "../../../img/home.svg"
import SearchField from "../SearchField/SearchField"
import { Button } from 'mdbreact';
import Signin from '../../Signin/Signin'

export default class NavBar extends Component {
    renderAuthButton = () => {
        return this.props.isAuthenticated === true?
         (<Button className="danger" onClick={this.handleAuthClick}>Log out</Button>) :
         (<Signin/>)
    }

    handleAuthClick = () => {
        localStorage.removeItem('jwt auth')
    }

    render() {
        return (
        <div>
            <nav className="navbar">
            <div className="nav-links">
            <ul>
                <li><NavLink activeClassName="selected" className="nav-link" exact to="/"><img src={home}/></NavLink></li>
                <li><NavLink activeClassName="selected" className="nav-link" to="/about">About me</NavLink></li>
                <li><SearchField onSearchChanged={this.props.onSearchChanged}/></li>
            </ul>
            </div>
            <div className="shopping-cart">
                <NavLink to="/cart"><img src={shopping_cart}/></NavLink>
            </div>
            <div className="login">
            {this.renderAuthButton()}
            </div>
        </nav>
        </div>
        )
    }
}
