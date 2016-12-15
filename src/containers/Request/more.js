import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import * as requestActions from 'redux/modules/request';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import { OrderSlide } from 'components';

@connect(
  (state, ownProps) => {
    return {
      categories: state.request.categories,
      loading: state.request.loading,
      categoryOfRequestOrders: state.request.requests || []
    };
  },
  { pushState: push,
    ...requestActions
  })
class MoreRequest extends Component {
  render() {
    return (<div>
      <Helmet title="需求列表页面" />
      <OrderSlide type="min" {...this.props} />
    </div>);
  }
}

MoreRequest.propTypes = {
  categories: PropTypes.array
};

export default MoreRequest;
