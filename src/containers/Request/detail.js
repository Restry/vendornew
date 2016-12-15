import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import * as requestActions from 'redux/modules/request';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';

@connect(
  (state, ownProps) => {

    console.log(`Current Request id : ${ownProps.params._id}`);

    return {}
  },
  {
    pushState: push,
    ...requestActions
  })
class RequestDetail extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      item: {
        title: 'loading...'
      }
    }
    this.onRace = this.onRace.bind(this);
  }

  componentDidMount() {
    const {_id} = this.props.params;
    this.props.detail(_id).then(res => {
      this.setState({ item: res[0] });
    });
  }
  onRace() {
    const {race, pushState} = this.props;
    race(this.props.params._id).then(res => {
      alert(JSON.stringify(res));
      pushState('/');
    })
  }
  render() {
    const {item} = this.state;
    return (
      <div className="industCon">
        <Helmet title="需求详情" />
        <div className="indcaseinfo">
          <div className="casebt">{item.title}</div>
          <div className="casecanshu">
            <table className="caseindtab">
              <tbody>
                <tr>
                  <td>适用行业：所有行业</td>
                  <td>定制商品：鲜花、气球100个、贺卡100张、彩带50条、蛋糕1个</td>
                  <td>交货周期：约{item.raceDay}天</td>
                </tr>
                <tr>
                  <td>起订数量：1套</td>
                  <td><div>参考价格：<span className="casepri">￥<em>4283.00</em></span>/套</div></td>
                  <td>
                    <a onClick={this.onRace} className="btn">我要投标</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="industprolistjs">
            {item.notes}
          </div>
        </div>
      </div>
    );
  }
}

RequestDetail.propTypes = {

};

export default RequestDetail;
