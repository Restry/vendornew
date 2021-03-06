import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { initialize } from 'redux-form';
import { RequestForm } from 'components';
import * as requestActions from 'redux/modules/request';
import { push } from 'react-router-redux';
import toastr from 'toastr';

@connect(
  (state) => ({
    user: state.auth.user,
    request: state.request.item
  }),
  {
    initialize,
    pushState: push,
    ...requestActions
  })
export default class Register extends Component {
  static propTypes = {
    initialize: PropTypes.func.isRequired,
    add: PropTypes.func.isRequired,
    'pushState': PropTypes.func,
    request: PropTypes.object,
    user: PropTypes.object,
    detail: PropTypes.func
  }

  componentDidMount() {
    const { user, detail, params} = this.props;

    if (!user) {
      toastr.error('请先登陆!');
      this.props.pushState('/');
      return;
    }
    params && params.bid && detail(params.bid);
  }

  handleSubmit = (data) => {
    console.log('Data submitted! ' + JSON.stringify(data));
    // data.notes = UE.getEditor('content').getContent();

    this.props.add(data).then((res) => {
      toastr.success('添加成功!');
      this.props.initialize('request', {});
      this.props.pushState('/');
    }).catch((err) => {
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
    return (
      <div className="container">
        <Helmet title="提交新的需求" />
        <div>
          <div className="head">
            <div className="fr tel">服务热线：400-710-0000</div>
            <div className="logo reg"><Link to="/"><img src={require('assets/images/logo.png')} width="170" height="59" /></Link><span>诚宝通提交订单</span></div>
            <div className="clearfix"></div>

          </div>

          <RequestForm request={this.props.request} onSubmit={this.handleSubmit} />

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
