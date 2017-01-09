import React, { Component, PropTypes } from 'react';
// import config from '../../config';
import Helmet from 'react-helmet';
import * as authActions from 'redux/modules/auth';
import * as requestActions from 'redux/modules/request';
import { connect } from 'react-redux';
// import Login from '../Login/Login';
import { LoginForm, InfoBar, OrderSlide, CusMap } from 'components';

@connect(
  state => ({
    user: state.auth.user,
    categories: state.request.categories,
    loading: state.request.loading,
    categoryOfRequestOrders: state.request.requests || []
  }),
  {
    ...authActions,
    ...requestActions
  })
export default class Home extends Component {
  static propTypes = {
    user: PropTypes.object,
    login: PropTypes.func,
    logout: PropTypes.func,
    loading: PropTypes.bool,
    categories: PropTypes.array,
    categoryOfRequestOrders: PropTypes.array,
    load: PropTypes.func,
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const input = this.refs.username;
    this.props.login(input.value);
    input.value = '';
  }

  render() {
    // const styles = require('./Home.scss');
    // require the logo image both from client and server
    // const logoImage = require('./logo.png');
    const {loading, categories, categoryOfRequestOrders, load} = this.props;
    return (
      <div>
        <Helmet title="Home" />
        <div className="banner-box">
          <div className="bd">
            <ul>
              <li>
                <div className="m-width"> <a><img src={require('../../assets/images/banner1.jpg')} /></a> </div>
              </li>
              <li>
                <div className="m-width"> <a><img src={require('../../assets/adv/ban-ind-01.jpg')} /></a> </div>
              </li>
            </ul>
          </div>
          <div className="ban-ind-btn"> <a className="prev">{'<'}</a> <a className="next">></a>
            <div className="hd">
              <ul>
              </ul>
            </div>
          </div>
        </div>
        <LoginForm />
        <InfoBar />
        <OrderSlide loading={loading} categories={categories}
          categoryOfRequestOrders={categoryOfRequestOrders} load={load} />

        <CusMap />

      </div>
    );
  }
}
