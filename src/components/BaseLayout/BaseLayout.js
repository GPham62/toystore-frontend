import React, { Component } from 'react'
import NavBar from './Navbar/NavBar'
import Footer from './Footer/Footer'
import Header from './Header/Header'
import "./BaseLayout.css"

export default class BaseLayout extends Component {
  
  constructor(props){
    super(props)
    this.state = {
        index: 0
    }
  }

  incrementIndex = () => {
    if (this.state.index > 999){
      this.setState({index: 0})
    }
    const newIndex = this.state.index + 1
    this.setState({index: newIndex})
  }

  componentDidMount = () => {
      setInterval(this.incrementIndex, 3000)
  }

  

  render() {
    const classNames = [
      "first-header",
      "second-header",
      "third-header"
    ]
    const index = this.state.index % classNames.length
    const className = classNames[index]
    return (
      <div>
        <div className={className}>
            <NavBar onSearchChanged={this.props.onSearchChanged} isAuthenticated = {this.props.isAuthenticated}/>
            <Header/>
            <div className="content">
                {this.props.children}
            </div>
            <Footer/>
        </div>
      </div>
    )
  }
}
