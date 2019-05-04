import React, { Component } from 'react'
import { MDBCol, MDBIcon } from 'mdbreact';
export default class SearchField extends Component {
  handleTextChange  = event => {
    this.props.onSearchChanged && this.props.onSearchChanged(event.target.value);
  };
  render() {
    return (
      <MDBCol md="12">
      <form className="form-inline mt-4 mb-4">
        <MDBIcon icon="search" />
        <input onChange={this.handleTextChange} className="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search" aria-label="Search" />
      </form>
    </MDBCol>
    )
  }
}
