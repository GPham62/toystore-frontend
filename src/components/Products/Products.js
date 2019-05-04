import React, { Component } from 'react'
import { Icon } from 'react-materialize'
import { Link } from 'react-router-dom'
import shopping_cart from '../../img/cart.svg'
import "./Products.css"
export default class Products extends Component {
    render() {
        const allProducts = this.props.products.map(product =>(
        <div key={product._id} className="item">
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
      
        ))
        return (
            <div className="items-wrapper">
                <div className="items-title">
                    <h4>All Products</h4>
                </div>
                <div className="items">{allProducts}</div>
            </div>
        );
    }
}
