import React, { Component, PropTypes } from 'react';
// import { OrderSlide } from 'components';
import { RequestMore } from 'containers';
import { connect } from 'react-redux';
import moment from 'moment';
import * as requestActions from 'redux/modules/request';

@connect(
  state => ({
    categories: state.request.categories,
    loading: state.request.loading,
    categoryOfRequestOrders: state.request.requests || [],
    info: state.info.data,
    statesRequest: state.request.StatesRequest,
  }), { actions: requestActions })
class Trans extends Component {
  static propTypes = {
    loading: PropTypes.bool,
    categories: PropTypes.array,
    categoryOfRequestOrders: PropTypes.array,
    statesRequest: PropTypes.array,
    load: PropTypes.func,
  }

  componentDidMount() {
    this.props.actions.getByStates('已完成');
  }
  render() {
    const {loading, categories, statesRequest, load, info} = this.props;
    return (
      <div>

        <div className="merchandiseDate">
          <div className="main">
            <div className="adv-mac"><img src={require('assets/images/jysj-mac.png')} /></div>
            <div className="date-last-month">
              <div className="txt"><h1>上月交易数据</h1>
                <p><span>{moment().subtract(1, 'months').startOf('month').calendar()}</span>
                  至<span>{moment().subtract(1, 'months').endOf('month').calendar()}</span></p>
              </div>
            </div>
            <div className="date-list">
              <ul>
                <li>
                  <h2>直接下单</h2>
                  <p>{info.enterprise}</p>
                </li>
                <li>
                  <h2>询价定单</h2>
                  <p>{info.services}</p>
                </li>
                <li>
                  <h2>发布需求</h2>
                  <p>{info.designer}</p>
                </li>
                <li>
                  <h2>订单总金额</h2>
                  <p>{info.totalAmount}</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <RequestMore />

        <div className="actionWrap">
          <div className="main-data">
            <div className="tit">
              <h1>最新成交订单</h1>
            </div>
            <div className="con date">
              <table className="odr-data-tab fl">
                <thead>
                  <tr>
                    <th>订单需求</th>
                    <th>订单金额</th>
                    <th>报价商家</th>
                  </tr>
                </thead>
                <tbody>

                  {statesRequest && statesRequest.map((item, index) => {
                    return (<tr key={index + 'SS'}>
                      <td><div className="name">{item.title}</div></td>
                      <td><div className="pri-tab">￥<em>{item.points}</em></div></td>
                      <td>
                        <div className="super"><span>共{item.raceVendors.length}家商家报价</span><i></i>
                          <ul className="super-list">
                            <li><span>小尼*****司</span></li>
                            <li><span>小尼*****司</span></li>
                            <li><span>小尼*****司</span></li>
                          </ul>
                        </div>
                      </td>
                    </tr>);
                  })
                  }

                </tbody>
              </table>
              <table className="odr-data-tab fr">
                <thead>
                  <tr>
                    <th>订单需求</th>
                    <th>订单金额</th>
                    <th>报价商家</th>
                  </tr>
                </thead>
                <tbody>

                </tbody>
              </table>
              <div className="clearfix"></div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default Trans;
