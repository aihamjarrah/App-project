import React, { Component } from 'react';

export default class Cars extends Component {
  render() {
    return (
      <div className="cars">
        <h1>Here you can find the car you need</h1>
        
        <button onClick={this.props.getCars}>All Cars</button>
      </div>
    );
  }
}
