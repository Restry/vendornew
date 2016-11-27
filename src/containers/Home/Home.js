import React, { Component, PropTypes} from 'react';
// import config from '../../config';
import Helmet from 'react-helmet';
import * as authActions from 'redux/modules/auth';
import {connect} from 'react-redux';
import Login from '../Login/Login';

@connect(
  state => ({user: state.auth.user}),
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
    const styles = require('./Home.scss');
    // require the logo image both from client and server
   // const logoImage = require('./logo.png');
    return (
      <div className={styles.home}>
        <Helmet title="Home"/>
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
          <div className="ban-ind-btn"> <a className="prev"></a> <a className="next">></a>
            <div className="hd">
              <ul>
              </ul>
            </div>
          </div>
        </div>
        <Login />

        <div className="actionWrap">
          <div className="main">
            <div className="tit">
              <h1>今日数据</h1>
              <p>易工场自上线以来深受市场欢迎，企业用户，服务商家，设计师不断入驻，<br />
                我们每日的交易总额也不断增长，深受用户赞誉</p>
            </div>
            <div className="con">
              <div className="date-box">
                <div className="date-itms date-color01">
                  <h2>共有企业用户</h2>
                  <p><span>3657</span>位</p>
                </div>
                <div className="date-itms date-color02">
                  <h2>专业服务商</h2>
                  <p><span>3657</span>家</p>
                </div>
                <div className="date-itms date-color03">
                  <h2>共有设计师</h2>
                  <p><span>3657</span>位</p>
                </div>
                <div className="date-itms date-color04">
                  <h2>今日总交易额</h2>
                  <p><span>3657.00</span>元</p>
                </div>
              </div>
              <div className="clearfixfix"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
