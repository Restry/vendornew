//require('assets/libs/fakeloader/fakeloader.min.js');
if (__CLIENT__) {
  require('assets/libs/fakeloader/fakeloader.css');
}

import React, { Component, PropTypes } from 'react';

class Loader extends Component {
  componentDidMount() {
    $(this.refs.fakeloader).fakeLoader({
      timeToHide: 5200,
      bgColor: '#34495e',
      spinner: 'spinner1'
    });
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.loading != nextProps.loading) {
      if (nextProps.loading) {
        $(this.refs.fakeloader).fadeIn();
      } else {
        $(this.refs.fakeloader).fadeOut();
      }
    }
  }


  render() {
    return (
      <div ref="fakeloader">

      </div>
    );
  }
}
Loader.propTypes = {
  loading: PropTypes.bool
};

export default Loader;
