import React, { Component, PropTypes } from 'react';
// import config from '../../config';
import Helmet from 'react-helmet';
import * as authActions from 'redux/modules/auth';
import * as requestActions from 'redux/modules/request';
import { connect } from 'react-redux';
// import Login from '../Login/Login';
import { LoginForm, InfoBar, OrderSlide, CusMap, Carousel } from 'components';

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
        <Carousel />
        <LoginForm />
        <InfoBar />
        <OrderSlide loading={loading} categories={categories}
          categoryOfRequestOrders={categoryOfRequestOrders} load={load} />

        <CusMap />

      </div>
    );
  }
}
