import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { load } from 'redux/modules/info';

@connect(
  state => ({ info: state.info.data }),
  dispatch => bindActionCreators({ load }, dispatch))
class InfoBar extends Component {


  render() {
    const {info, load} = this.props; // eslint-disable-line no-shadow
    // const styles = require('./InfoBar.scss');
    return (
      <div>
        <div className="container">
          This is an info bar
          {' '}
          <strong>{info ? info.message : 'no info!'}</strong>
          <span>{info && new Date(info.time).toString()}</span>
          <button className="btn btn-primary" onClick={load}>Reload from server</button>
        </div>
      </div>
    );
  }
}

InfoBar.propTypes = {
  info: PropTypes.object,
  load: PropTypes.func
}

export default InfoBar;
