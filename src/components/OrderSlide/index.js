import React, { Component, PropTypes } from 'react';
import Card from './card';
import { Link } from 'react-router';
import { LoadingDots } from 'components';

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
    const {categoryOfRequestOrders, loading, categories, type} = this.props;

    if (type === 'min') {
      return (<div className="main-data">
        <h1 className="newdate">最新定制需求</h1>
        <div>
            <ul className="order-sx-tit">
              {categories.map((item, index) => {
                return <li onClick={this.chooseCategory.bind(this, item)} className={(item.class === selectedClass) ? 'selected' : ''} key={index}> <a>{item.title}</a></li>;
              })}
            </ul>
        </div>
        <div className="news-oder-date">
          <ul>
            {categoryOfRequestOrders.map((item, index) => {
              return <Card key={index} item={item} type={type} />;
            })}
          </ul>
        </div>
      </div>);
    }

    return (
      <div className="actionWrap action-gray">
        <div className="main">
          <div className="tit">
            <h1>今日最新订单 {loading && <LoadingDots interval={100} dots={20}/>}</h1>
          </div>
          <div className="con">

            <ul className="order-sx-tit">
              {categories.map((item, index) => {
                return <li onClick={this.chooseCategory.bind(this, item)} className={(item.class === selectedClass) ? 'selected' : ''} key={index}> <a>{item.title}</a></li>;
              })}
            </ul>

            <ul className="order-sx-con clearfixfix">
              {categoryOfRequestOrders.map((item, index) => {
                return <Card key={index} item={item} type={type} />;
              })}
            </ul>
            <div className="clearfix"></div>
          </div>
        </div>
        <div className="ck-more"><Link to="/request/more">查看更多<i className="sj"></i></Link></div>

      </div>
    );
  }
}

OrderSlide.propTypes = {
  loading: PropTypes.bool,
  categoryOfRequestOrders: PropTypes.array,
  load: PropTypes.func,
  categories: PropTypes.array,
  type: PropTypes.string
};

export default OrderSlide;

