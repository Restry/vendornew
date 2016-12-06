import React, { Component, PropTypes } from 'react';
import config from '../../config';
import Card from './card';
import { connect } from 'react-redux';
import { load } from 'redux/modules/request';

@connect(
  state => ({
    loading: state.request.loading,
    categoryOfRequestOrders: state.request.requests || []
  }), { load })
class OrderSlide extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      selectedClass: 'wechat'
    };
  }

  chooseCategory(item) {
    this.setState({ selectedClass: item.class });
    this.props.load(item.class);
  }
  render() {
    const {selectedClass} = this.state;
    const {categoryOfRequestOrders, loading} = this.props;

    return (
      <div className="actionWrap action-gray">
        <div className="main">
          <div className="tit">
            <h1>今日最新订单 {loading && '...'}</h1>
          </div>
          <div className="con">

            <ul className="order-sx-tit">
              {config.categories.map((item, index) => {
                return <li onClick={this.chooseCategory.bind(this, item)} className={(item.class === selectedClass) ? 'selected' : ''} key={index}> <a>{item.title}</a></li>;
              })}
            </ul>

            <ul className="order-sx-con clearfixfix">
              {categoryOfRequestOrders.map((item, index) => {
                return <Card key={index} item={item} />;
              })}
            </ul>
            <div className="clearfix"></div>
          </div>
        </div>
      </div>
    );
  }
}

OrderSlide.propTypes = {
  loading: PropTypes.bool,
  categoryOfRequestOrders: PropTypes.func,
  load: PropTypes.func
};

export default OrderSlide;

