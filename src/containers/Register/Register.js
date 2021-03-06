import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { initialize } from 'redux-form';
import { RegisterForm } from 'components';
import * as authActions from 'redux/modules/auth';
import toastr from 'toastr';

@connect(
  () => ({}),
  { initialize, ...authActions })
export default class Register extends Component {
  static propTypes = {
    initialize: PropTypes.func.isRequired,
    register: PropTypes.func,
    history: PropTypes.object
  }

  handleSubmit = (data) => {
    if (data.password === data.cpassword && data.safeCode === data.csafeCode) {
      this.props.register(data).then((res) => {
        toastr.success('注册成功！一秒后返回首页！');
        setTimeout(() => { this.props.history.push('/'); }, 1000);
      }).catch((err) => {
        toastr.error(err.message);
      });
    } else {
      toastr.error('请检查安全码或密码是否输入一致！');
    }
  }

  handleInitialize = () => {
    this.props.initialize('survey', {
      name: 'Little Bobby Tables',
      email: 'bobby@gmail.com',
      occupation: 'Redux Wizard',
      currentlyEmployed: true,
      sex: 'male'
    });
  }

  render() {
    return (
      <div className="container">
        <Helmet title="用户注册" />
        <div>
          <div className="head">
            <div className="main">
              <div className="fr tel">服务热线：400-710-8886</div>
              <div className="logo reg"><Link to="/"><img src={require('assets/images/logo.png')} width="107" height="60" /></Link><span>诚宝通设计师注册</span></div>
              <div className="clearfix"></div>
            </div>
          </div>
          <div className="regWrap">
            <div className="regSteps">
              <div className="regSteps-list">
                <ul>
                  <li className="on"><span className="on">设置账号</span><i className="done">1</i></li>
                  <li className=""><span>完善信息</span><i className="active">2</i></li>
                  <li className="last"><span>注册完成</span><i className="undone">3</i></li>
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


                <RegisterForm onSubmit={this.handleSubmit} />


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
