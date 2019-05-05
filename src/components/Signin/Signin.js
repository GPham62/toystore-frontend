import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import "./Signin.css"
import axios from '../../axios'
import localStorage from 'localStorage'

export default class Signin extends Component {
  responseFacebook = (data) => {
    console.log("before ",data)
    axios
    .post(`/api/auth/facebook/token?access_token=${data.accessToken}`)
    .then(result => {
      console.log("access w/ fb")
      if (result.data.token){
        const {token, user} = result.data
        localStorage.setItem('jwt auth', token)
        localStorage.setItem('current user', user.avatar)
        localStorage.setItem('role', user.role)
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
