import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import * as requestActions from 'redux/modules/request';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';

@connect(
  (state,ownProps) => {

    console.log(`Current Request id : ${ownProps.params.id}`);
    return {};
  },
  {pushState: push,
    ...requestActions
  })
class RequestDetail extends Component {
  render() {
    return (
      <div className="industCon">
        <Helmet title="需求详情" />
        <div className="indcaseinfo">
          <div className="casebt">情人节解决方案</div>
          <div className="casecanshu">
            <table className="caseindtab">
              <tbody>
                <tr>
                  <td>适用行业：所有行业</td>
                  <td>定制商品：鲜花、气球100个、贺卡100张、彩带50条、蛋糕1个</td>
                  <td>交货周期：约3天</td>
                </tr>
                <tr>
                  <td>起订数量：1套</td>
                  <td><div>参考价格：<span className="casepri">￥<em>4283.00</em></span>/套</div></td>
                  <td><div className="lxftime info" endtime="2015-12-12 00:00:00"></div></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="industprolistjs">
            <img src="adv/jjfa.jpg" />
          </div>
        </div>
      </div>
    );
  }
}

RequestDetail.propTypes = {

};

export default RequestDetail;
