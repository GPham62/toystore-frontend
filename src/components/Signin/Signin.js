import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import "./Signin.css"
import axios from '../../axios'

export default class Signin extends Component {
  responseFacebook = (data) => {
    console.log(data)
    axios
    .post(`/api/auth/facebook?access_token=${data.accessToken}`)
    .then(result => {
      if (result.data.token){
        const {token, user} = result.data
        localStorage.setItem('jwt auth', token)
        this.props.createNewUser(user)
      }
    })
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
