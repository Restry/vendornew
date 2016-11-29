import React, {Component} from 'react';
import Helmet from 'react-helmet';

export default class Hello extends Component {

  render() {
    return (
      <div className="container">
        <h1>Hello here</h1>
        <Helmet title="Hello"/>
      </div>
    );
  }
}
