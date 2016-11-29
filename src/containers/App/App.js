import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import Helmet from 'react-helmet';
import { isLoaded as isInfoLoaded, load as loadInfo } from 'redux/modules/info';
import { isLoaded as isAuthLoaded, load as loadAuth, logout } from 'redux/modules/auth';
import { InfoBar } from 'components';
import { push } from 'react-router-redux';
import config from '../../config';
import { asyncConnect } from 'redux-async-connect';
// import '../../assets/css/index.css';

@asyncConnect([{
  promise: ({store: {dispatch, getState}}) => {
    const promises = [];

    if (!isInfoLoaded(getState())) {
      promises.push(dispatch(loadInfo()));
    }
    if (!isAuthLoaded(getState())) {
      promises.push(dispatch(loadAuth()));
    }

    return Promise.all(promises);
  }
}])
@connect(
  state => ({ user: state.auth.user }),
  { logout, pushState: push })
export default class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired,
    user: PropTypes.object,
    logout: PropTypes.func.isRequired,
    pushState: PropTypes.func.isRequired
  };

  static contextTypes = {
    store: PropTypes.object.isRequired
  };

  componentWillReceiveProps(nextProps) {
    if (!this.props.user && nextProps.user) {
      // login
      this.props.pushState('/loginSuccess');
    } else if (this.props.user && !nextProps.user) {
      // logout
      this.props.pushState('/');
    }
  }

  handleLogout = (event) => {
    event.preventDefault();
    this.props.logout();
  };

  render() {
    const {user} = this.props;
    const styles = require('./App.scss');

    return (
      <div>
        <Helmet {...config.app.head} />
        <div className="egc-top">
          <div className="m-cnt">
            <div className="egc-menu">
              {!user && <span>
                <Link to="register" className="zc-top">免费注册</Link>|
                <Link to="/login"> 立即登录 </Link>
              </span>}

              {user && <span className={styles.loggedInMessage + ' navbar-text'}><strong>{user.name}</strong></span>}
              {user && <span>您好！<a onClick={this.handleLogout}>退出</a></span>}

              <Link to="404">客服中心</Link>
              <Link to="404">帮助中心</Link>
            </div>
            <div className="egc-top-l"> <Link to="/" className="back-icon"><b></b>返回首页</Link></div>
          </div>
        </div>
        <div className="egcMenu">
          <div className="egcNavigation facade">
            <div className="m-cnt">
              <div className="nav-logo"> <Link to="/" className="fl logo">
                <img src={require('../../assets/images/logo-indx.png')} /></Link>
                <span className="txt fl">
                  {config.app.title}
                  &nbsp;&nbsp;&nbsp;&nbsp;一件起订</span></div>
              <div className="hd-nav facade"> <a href="#" className="on">我的库</a>
                <a href="#">模板中心<em>new<s></s></em></a>

                <Link to="hello">交易数据</Link>
                <Link to="Register">行业专属</Link>
                <Link to="Request">需求招标</Link>
                <div className="clearfixfix"></div>
              </div>
              <div className="nav-search facade">
                <input type="text" className="nav-sea-ipt fl" placeholder="检索模板、工厂、设计师" />
                <input type="button" value="搜索" className="nav-sea-sub fr" />
                <div className="clearfixfix"></div>
                <div className="sear-keys">
                  <span>热门搜索：</span>
                  <a>名片</a> <a>工服</a>
                  <a>手提袋</a> <a>店招</a>
                  <a>画册</a> <a>箱包</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.appContent}>
          {this.props.children}
        </div>
        <InfoBar />


        <div className="footWrap">
          <div className="m-cnt">
            <div className="items abt fl">
              <h6>APP下载</h6>
              <div className="ewm-down">
                <div className="ewm fl"> <img src="images/ewm-down.jpg" width="80" height="80" />
                  <p>安卓APP下载</p>
                </div>
                <div className="ewm fl"> <img src="images/ewm-down.jpg" width="80" height="80" />
                  <p>苹果APP下载</p>
                </div>
                <div className="clearfix"></div>
              </div>
            </div>
            <div className="items menu fl">
              <dl>
                <dt>新手上路</dt>
                <dd><a href="/articledetail-3.html" target="_blank">关于诚宝通</a><a href="/articledetail-4.html" target="_blank">注册流程</a><a href="/articledetail-5.html" target="_blank">会员等级</a><a href="/articledetail-6.html" target="_blank">常见问题</a></dd>
              </dl>
              <dl>
                <dt>定制流程</dt>
                <dd><a href="/articledetail-7.html" target="_blank">设计流程</a><a href="/articledetail-8.html" target="_blank">询价流程</a><a href="/articledetail-9.html" target="_blank">下单流程</a><a href="/articledetail-10.html" target="_blank">招标流程</a></dd>
              </dl>
              <dl>
                <dt>付款方式</dt>
                <dd><a href="/articledetail-11.html" target="_blank">在线付款</a><a href="/articledetail-12.html" target="_blank">分期付款</a><a href="/articledetail-13.html" target="_blank">余额付款</a><a href="/articledetail-22.html" target="_blank">退换货说明</a></dd>
              </dl>
              <dl className="last">
                <dt>商家服务</dt>
                <dd><a href="/articledetail-15.html" target="_blank">商家入驻</a><a href="/articledetail-16.html" target="_blank">抢单接单</a><a href="/articledetail-17.html" target="_blank">报价单维护</a><a href="/articledetail-18.html" target="_blank">商家认证</a></dd>
              </dl>
            </div>
            <div className="items tel fl">
              <h7>400-710-8886</h7>
              <a href="#" className="btn">24小时免费在线客服</a> </div>
            <div className="clearfix"></div>
          </div>
          <div className="ft-text">
            <div className="links"><a href="/articledetail-3.html" target="_blank">关于我们</a><a href="/articledetail-21.html" target="_blank">购物指南</a><a href="#">定制流程</a><a href="#">友情链接</a></div>
            <div className="copyright">ICP认证：苏B1-20140039 备案号：苏CIP备14031554号-4违法和不良信息举报电话：400-710-8886 Copyright © 2004-2015  诚宝通 EGC.CN 版权所有</div>
            <div className="authenticate"><a href="#"><img src="images/1.gif" /></a><a href="#"><img src="images/2.png" /></a></div>
          </div>
        </div>
      </div>
    );
  }
}
