import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import "./Signin.css"
import axios from '../../axios'
import localStorage from 'localStorage'

export default class Signin extends Component {
  responseFacebook = (data) => {
    console.log(data)
    const token = data.accessToken
    axios
    .post(`/api/auth/facebook/${token}`)
    .then(result => {
      if (result.data.token){
        const {token, user} = result.data
        localStorage.setItem('jwt auth', token)
        this.props.createNewUser(user)
      }
    })
    .catch(err => console.log(err))
  }

  render() {
    return (
      <FacebookLogin
      appId="325329114822297"
      autoLoad={false}
      fields="name,email,picture"
      cssClass = "loginBtn loginBtn--facebook"
      callback={this.responseFacebook} />
    )
  }
}
