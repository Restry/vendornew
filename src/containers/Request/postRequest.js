import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { initialize } from 'redux-form';
import { RequestForm } from 'components';
import * as requestActions from 'redux/modules/request';
import { push } from 'react-router-redux';

@connect(
  (state) => ({
    user: state.auth.user
  }),
  { initialize, pushState: push,
    ...requestActions })
export default class Register extends Component {
  static propTypes = {
    initialize: PropTypes.func.isRequired,
    add: PropTypes.func.isRequired,
    'pushState': PropTypes.func
  }

  handleSubmit = (data) => {
    console.log('Data submitted! ' + JSON.stringify(data));
    this.props.add(data).then((res) => {
      this.props.initialize('request', {});
      this.props.pushState('/');
    }, (err) => {
      alert(JSON.stringify(err));
    });
  }

  handleInitialize = () => {
    this.props.initialize('request', {
      name: 'Little Bobby Tables',
      email: 'bobby@gmail.com',
      occupation: 'Redux Wizard',
      currentlyEmployed: true,
      sex: 'male'
    });
  }

  render() {
    if (!this.props.user) {
      alert('please login befor post request !');
      this.props.pushState('/');
      // return <span />;
    }
    return (
      <div className="container">
        <Helmet title="提交新的需求" />
        <div>
          <div className="head">
            <div className="main">
              <div className="fr tel">服务热线：400-710-8886</div>
              <div className="logo reg"><Link to="/"><img src={require('assets/images/logo-indx.png')} width="107" height="60" /></Link><span>诚宝通设计师注册</span></div>
              <div className="clearfix"></div>
            </div>
          </div>
          <div className="regWrap">
            <div className="regSteps">
              <div className="regSteps-list">
                <ul>
                  <li className="on"><span className="on">填写信息</span><i className="done">1</i></li>
                  <li className=""><span>接单</span><i className="active">2</i></li>
                  <li className="last"><span>交易完成</span><i className="undone">3</i></li>
                </ul>
                <div className="clear"></div>
              </div>
              <div className="regSteps-line">
                <div className="line-sec"></div>
              </div>
            </div>
            <div className="normalline">
              <div id="container" className="cls-container">

                <div id="bg-overlay" className="bg-img bg-img-1"></div>


                <RequestForm onSubmit={this.handleSubmit} />


              </div>
            </div>

          </div>

          <div className="foot">
            <div className="main">
              <p>关于我们 | 联系我们 | 人才招聘 | 商家入驻 | 广告服务 | 手机EGC | 友情链接</p>
              <p>ICP认证：苏B1-20140039 备案号：苏CIP备14031554号-4违法和不良信息举报电话：400-710-8886 Copyright © 2004-2015 诚宝通 EGC.CN 版权所有</p>
              <p><a href="#"><img src={require('assets/images/1.gif')} /></a><a href="#"><img src={require('assets/images/2.png')} /></a></p>
            </div>
          </div>
        </div>

      </div>
    );
  }
}
