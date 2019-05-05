import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import axios from "./axios";
import BaseLayout from './components/BaseLayout/BaseLayout'
import HomeScreen from "./containers/HomeScreen/HomeScreen";
import DetailScreen from "./containers/DetailScreen/DetailScreen";
import Boardgame from './components/Boardgame/Boardgame'
import Educational from './components/Educational/Educational'
import About from './components/About/About'
import Cart from './components/Cart/Cart'
import localStorage from 'localStorage'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

class App extends Component {
  state = {
    searchString: "",
    userId: ""
  };

  onSearchChanged = (text) => {
    clearTimeout(null)
    this.setState({searchString: text})
    console.log(this.state.searchString)
  }

  componentWillMount = () => {

  }

  componentDidMount = () => {
    if (this.isAuthenticated == true) console.log("auth success")
  }

  setUserID = (id) => {
    this.setState({userId: id})
  }

  isAuthenticated = () => {
    if (localStorage.getItem('jwt auth') && this.state.userId === localStorage.getItem('current user')){
      return true
    }
    else return false;
  }

  
  render() {
    return (
      <BrowserRouter>
        <BaseLayout onSearchChanged={this.onSearchChanged} isAuthenticated={this.isAuthenticated} setUserID={this.setUserID}>
          <Switch>
            <Route exact path="/"
             render={props => {
               return <HomeScreen {...props} searchText={this.state.searchString}/>;
             }}/>
             <Route exact path="/products/:id"
             render={props =>{
               return <DetailScreen {...props}/>;
             }}/>

             <Route exact path="/educational"
             render={props=>{
              return <Educational {...props} searchText={this.state.searchString}/>;
             }}/>

             <Route exact path="/boardgame"
             render={props=>{
               return <Boardgame {...props} searchText={this.state.searchString}/>;
             }}/>

             <Route exact path="/about" component={About}/>

             <Route exact path="/cart" component={Cart}/>
          </Switch>
        </BaseLayout>
      </BrowserRouter>
    );
  }
}

export default App;
