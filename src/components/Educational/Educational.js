import React, { Component } from 'react'
import "./Educational.css"
import axios from '../../axios';
import {Link} from 'react-router-dom'
import shopping_cart from "../../img/cart.svg"

export default class Educational extends Component {
  state = {
    products: ""
  }
  componentDidMount = () => {
    axios
      .get(`/api/products/type/educational`)
      .then(data => {
        this.setState({products: data.data})
        console.log(this.state.products)
      })
      .catch(err => console.log(err))
  }
  
  render() {
    let allEducationalProducts = ""
    if (this.state.products)
    {
      allEducationalProducts = this.state.products.map(product =>(
        <div className="item">
        <Link to={`/products/${product._id}`}>
        <div className="product-img">
          <img alt={product.name} src={product.image} />
        </div>
        <div className="product-details">
          <h1 id="product-name">{product.name}</h1>
          <h4 id="product-description">{product.description}</h4>
        </div>
        </Link>
        <div className="price-add">
          <h5 id="product-price">${product.price}</h5>
          <Link to="/cart"><img src={shopping_cart}/></Link>
        </div>
      </div>
      ));
    }
  
    return (
      <div className="educational-products">
        <div className="educational-title">
          <h4>Educational Game List</h4>
        </div>
        <div className="items">{allEducationalProducts}</div>
      </div>
    )
  }
}
