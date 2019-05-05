import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import "./NavBar.css"
import shopping_cart from "../../../img/cart.svg"
import config from "../../../img/cog.svg"
import home from "../../../img/home.svg"
import SearchField from "../SearchField/SearchField"
import { Button } from 'mdbreact';
import Signin from '../../Signin/Signin'
import localStorage from 'localStorage'

export default class NavBar extends Component {
    renderAuthButton = () => {
        console.log(this.props.isAuthenticated())
        if (this.props.isAuthenticated() === true){
            return <Button className="danger" onClick={this.handleAuthClick}>Log out</Button>
        } else{
            return <Signin/>
        }
    }

    handleAuthClick = () => {
        localStorage.removeItem('jwt auth')
        localStorage.removeItem('current user')
        localStorage.removeItem('role')
    }

    renderAvatar = () => {
        const avatar = localStorage.getItem('current user')
        if (avatar)
        {
            return <img src={avatar} alt="user avatar"/>
        }
    }

    renderAdmin = () => {
        const role = localStorage.getItem('role')
        if (role === "admin")
        {
            return <NavLink to="/admin"><img src={config}/></NavLink>
        }
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
                <li>{this.renderAvatar()}</li>
                <li>{this.renderAdmin()}</li>
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
