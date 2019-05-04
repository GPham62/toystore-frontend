import React, { Component } from "react";
import axios from "../../axios";
import { Link } from 'react-router-dom';
import './DetailScreen.css'
import shopping_cart from '../../img/cart.svg'
import star_full from '../../img/star-full.svg'
import star_half from '../../img/star-half.svg'
class DetailScreen extends Component {
  state = {
    product : [],
    similarProducts: []
  };
  componentDidMount = () => {
    const productId = this.props.match.params.id;
    axios
    .get(`/api/products/${productId}`)
    .then(data => {
      clearTimeout(null)
      this.setState({
        product: data.data.product
      });
      this.findSimilarProduct(data.data.product.name, data.data.product.type)
    })
    .catch(err=>console.log(err))
  }

  findSimilarProduct = (name, type) =>{
    axios
    .get(`/api/products/similar/${name}/${type}`)
    .then(data =>{
      clearTimeout(null)
      this.setState({
        similarProducts: data.data
      })
      console.log(this.state.similarProducts)
    })
    .catch(err => console.log(err))
  }


  render() {
    let showSimilar = ""
    if (this.state.similarProducts != null){
       showSimilar =  this.state.similarProducts.map(product => (
        <Link key={product._id} to={`/products/${product._id}`}>
          <div key={product._id} className="item">
            <div className="product-img">
              <img alt={product.name} src={product.image} />
            </div>
            <div className ="product-detail">
              <h1 id="product-name">{product.name}</h1>
              <h4 id="product-description">{product.description}></h4>
            </div>
            <div className="price-add">
              <h5 id="product-price">${product.price}</h5>
            </div>
          </div>
        </Link>
    ))
    }
   
    return (
        <div className="show-product">
          <div className="item-wrapper">
           <div className="item-image">
              <img className="product-image" src={this.state.product.image} alt="product" />
            </div>
            <div className="item-name">
              <div className="product-info">
                <h3 id="product-name">{this.state.product.name}</h3>
              </div>
              <div className="product-bio">
                <p id="product-description">{this.state.product.description}</p>
                <p id="product-price">${this.state.product.price}</p>
                <Link to="/cart"><img src={shopping_cart}/></Link>
              </div>
            <div className="product-review">
              <div className="stars">
                <img src={star_full}/>
                <img src={star_full}/>
                <img src={star_full}/>
                <img src={star_full}/>
                <img src={star_half}/>
              </div>
            </div>
            </div>
          </div>
          <div className="similar-products">
          <h5>You might also like</h5>
            {showSimilar}
          </div>
        </div>
 
    )
  }
}

export default DetailScreen;
