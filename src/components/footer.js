import React, { Component } from 'react';


export class Footer extends Component {

  render() {
    return (
      <div className="App">
          Hi there, agent {this.props.unit}
      </div>
    );
  }
}
