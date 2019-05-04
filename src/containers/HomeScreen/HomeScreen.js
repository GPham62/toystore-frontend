import React, { Component } from 'react'
import axios from "../../axios"
import Products from "../../components/Products/Products"
export default class HomeScreen extends Component {
  state = {
    products: []
  }

  componentDidMount = () => {
    axios
    .get("/api/products")
    .then(data =>{
      console.log(data)
      this.setState({
        products: data.data
      });
    })
    .catch(err => console.log(err))
  }

  render() {
    const searchText = this.props.searchText.toLowerCase().replace(/ /g, "")
    const displayProducts = this.state.products.filter(
      product =>
      product.name.toLowerCase().includes(searchText) || product.description.toLowerCase().includes(searchText) || product.type.toLowerCase().includes(searchText)
    );
    return (
      <div>
        <div className = "content">
        <Products products={displayProducts} />
        </div>
      </div>
    )
  }
}
