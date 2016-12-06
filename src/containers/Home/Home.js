import React, { Component, PropTypes } from 'react';
// import config from '../../config';
import Helmet from 'react-helmet';
import * as authActions from 'redux/modules/auth';
import { connect } from 'react-redux';
// import Login from '../Login/Login';
import { LoginForm, InfoBar, OrderSlide } from 'components';

@connect(
  state => ({ user: state.auth.user }),
  authActions)
export default class Home extends Component {
  static propTypes = {
    user: PropTypes.object,
    login: PropTypes.func,
    logout: PropTypes.func
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
    return (
      <div>
        <Helmet title="Home" />
        <div className="banner-box">
          <div className="bd">
            <ul>
              <li>
                <div className="m-width"> <a><img src={require('../../assets/adv/ban-ind-01.jpg')} /></a> </div>
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
        <OrderSlide />

        <div className="actionWrap">
          <div className="main">
            <div className="tit">
              <h1>定制流程</h1>
              <p>我们有自己的独特的定制流程哦，快来了解下吧！<a href="#" className="red">去详细了解&gt;&gt;</a></p>
            </div>
            <div className="con">
              <div className="ind-dz-lc">
                <ul>
                  <span className="arrow-l"></span>
                  <li>
                    <div className="circle radius"> <i className="lc-01"></i> </div>
                    <div className="line">
                      <div className="round radius"></div>
                    </div>
                    <div className="txt">
                      <h4>选定定制模板</h4>
                      <p>涵盖企事业所需各种定制</p>
                    </div>
                  </li>
                  <li>
                    <div className="circle radius"> <i className="lc-02"></i> </div>
                    <div className="line">
                      <div className="round radius"></div>
                    </div>
                    <div className="txt">
                      <h4>免费在线设计</h4>
                      <p>诚宝通设计师免费设计效果图</p>
                    </div>
                  </li>
                  <li>
                    <div className="circle radius"> <i className="lc-03"></i> </div>
                    <div className="line">
                      <div className="round radius"></div>
                    </div>
                    <div className="txt">
                      <h4>用户确认定制效果图</h4>
                      <p>可与设计客服沟通直至满意为止</p>
                    </div>
                  </li>
                  <li>
                    <div className="circle radius"> <i className="lc-04"></i> </div>
                    <div className="line">
                      <div className="round radius"></div>
                    </div>
                    <div className="txt">
                      <h4>匹配供应商</h4>
                      <p>用户可以询价、招标，系统匹配最佳供应商</p>
                    </div>
                  </li>
                  <li>
                    <div className="circle radius"> <i className="lc-05"></i> </div>
                    <div className="line">
                      <div className="round radius"></div>
                    </div>
                    <div className="txt">
                      <h4>确定合同，下单付款</h4>
                      <p>安全交易，诚宝通全程品质担保</p>
                    </div>
                  </li>
                  <li>
                    <div className="circle radius"> <i className="lc-06"></i> </div>
                    <div className="line">
                      <div className="round radius"></div>
                    </div>
                    <div className="txt">
                      <h4>发货完成交易</h4>
                      <p>用户收货、评价交易完成</p>
                    </div>
                  </li>
                  <span className="arrow-r"></span>
                </ul>
                <div className="clearfixfix"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
