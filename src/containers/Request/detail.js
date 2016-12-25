import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import * as requestActions from 'redux/modules/request';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import toastr from 'toastr';

@connect(
  (state, ownProps) => {
    return {
      item: state.request.item
    };
  },
  {
    pushState: push,
    ...requestActions
  })
class RequestDetail extends Component {
  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {
    const {_id} = this.props.params;
    this.props.detail(_id);
  }
  onRace = () => {
    const {race, pushState} = this.props;
    race(this.props.params._id).then(res => {
      toastr.error('投标成功！');
      pushState('/');
    }).catch((err) => {
      toastr.error(err.msg);
    });
  }
  render() {
    const {item} = this.props;
    if (!item) return <div />;

    return (
      <div className="industCon">
        <Helmet title="需求详情" />
        <div className="indcaseinfo">
          <div className="casebt">{item.title}</div>
          <div className="casecanshu">
            <table className="caseindtab">
              <tbody>
                <tr>
                  <td>类型：{item.category}</td>
                  <td>定制商品：鲜花、气球100个、贺卡100张、彩带50条、蛋糕1个</td>
                  <td>交货周期：约{item.raceDay}天</td>
                </tr>
                <tr>
                  <td>起订数量：1套</td>
                  <td><div>参考价格：<span className="casepri">￥<em>{item.price}.00</em></span>/套</div></td>
                  <td>
                    <a onClick={this.onRace} className="ipt-btn-small-qd">我要投标</a>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="industprolistjs">
              {item.notes}
            </div>
            <div className="con">
            <h2>已投标人：</h2>
              <ul>
                {item.raceVendors && item.raceVendors.map((vendor, index) => {
                  return <li key={index}>{vendor.name}:{vendor.raceTime}</li>;
                })}
              </ul></div>
              <a onClick={this.onRace} className="fbxqBtn btn">我要投标</a>
          </div>
        </div>
      </div>
    );
  }
}

RequestDetail.propTypes = {
  params: PropTypes.object,
  item: PropTypes.object,
  detail: PropTypes.func,
  race: PropTypes.func,
  pushState: PropTypes.func
};

export default RequestDetail;
