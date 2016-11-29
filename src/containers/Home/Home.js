import React, { Component, PropTypes } from 'react';
// import config from '../../config';
import Helmet from 'react-helmet';
import * as authActions from 'redux/modules/auth';
import { connect } from 'react-redux';
import Login from '../Login/Login';

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
              <p>诚宝通自上线以来深受市场欢迎，企业用户，服务商家，设计师不断入驻，<br />
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
        <div className="actionWrap action-gray">
          <div className="main">
            <div className="tit">
              <h1>今日最新订单</h1>
            </div>
            <div className="con">
              <ul className="order-sx-tit">
                <li className="selected"><a rel="all">所有订单</a></li>
                <li><a rel="zjxd">直接下单</a></li>
                <li><a rel="xjd">询价订单</a></li>
                <li><a rel="zbd">招标订单</a></li>
              </ul>
              <ul className="order-sx-con clearfixfix">
                <li rel="zbd">
                  <div className="odr-items">
                    <div className="odr-lx zbd"></div>
                    <div className="odr-b-t">
                      <div className="name">1000个一次性水杯定制</div>
                      <div className="people"><span>发标人：</span><span>小尼惠商有******有限公司</span></div>
                    </div>
                    <div className="odr-b-c">
                      <dl className="odr-b-list">
                        <dt>邀请竞标商家</dt>
                        <dd>小尼惠商有******有限公司</dd>
                        <dd>小尼惠商有******有限公司</dd>
                        <dd>小尼惠商有******有限公司</dd>
                        <dd>*****</dd>
                      </dl>
                    </div>
                    <div className="odr-b-b">
                      <dl>
                        <dd><i className="jbqx"></i>竞标期限<span>5</span>天</dd>
                        <dd><i className="ti"></i>发标时间<span>2015-10-09  12:13</span></dd>
                      </dl>
                      <div className="lxftime" endtime="2015-12-12 00:00:00"></div>
                    </div>
                  </div>
                </li>
                <li rel="zjxd">
                  <div className="odr-items">
                    <div className="odr-lx zjxd"></div>
                    <div className="odr-b-t">
                      <div className="name">1000个一次性水杯定制</div>
                      <div className="people"><span>发标人：</span><span>小尼惠商有******有限公司</span></div>
                    </div>
                    <div className="odr-b-c">
                      <dl className="odr-b-list">
                        <dt>接单商家</dt>
                        <dd>小尼惠商有******有限公司</dd>
                      </dl>
                    </div>
                    <div className="odr-b-b">
                      <dl>
                        <dd><i className="sl"></i>数量　　<span>1000</span>个</dd>
                        <dd><i className="je"></i>总金额　<span>156.00</span>元</dd>
                        <dd><i className="ti"></i>下单时间<span>2015-10-09  12:13</span></dd>
                      </dl>
                    </div>
                  </div>
                </li>
                <li rel="xjd">
                  <div className="odr-items">
                    <div className="odr-lx xjd"></div>
                    <div className="odr-b-t">
                      <div className="name">1000个一次性水杯定制</div>
                      <div className="people"><span>发标人：</span><span>小尼惠商有******有限公司</span></div>
                    </div>
                    <div className="odr-b-c">
                      <dl className="odr-b-list">
                        <dt>邀请报价商家</dt>
                        <dd>小尼惠商有******有限公司</dd>
                        <dd>小尼惠商有******有限公司</dd>
                        <dd>小尼惠商有******有限公司</dd>
                        <dd>*****</dd>
                      </dl>
                    </div>
                    <div className="odr-b-b">
                      <dl>
                        <dd><i className="jbqx"></i>报价期限<span>5</span>天</dd>
                        <dd><i className="ti"></i>询价时间<span>2015-10-09  12:13</span></dd>
                      </dl>
                      <div className="lxftime" endtime="2015-10-12 00:00:00"></div>
                    </div>
                  </div>
                </li>
                <li rel="zbd">
                  <div className="odr-items">
                    <div className="odr-lx zbd"></div>
                    <div className="odr-b-t">
                      <div className="name">1000个一次性水杯定制</div>
                      <div className="people"><span>发标人：</span><span>小尼惠商有******有限公司</span></div>
                    </div>
                    <div className="odr-b-c">
                      <dl className="odr-b-list">
                        <dt>邀请竞标商家</dt>
                        <dd>小尼惠商有******有限公司</dd>
                        <dd>小尼惠商有******有限公司</dd>
                        <dd>小尼惠商有******有限公司</dd>
                        <dd>*****</dd>
                      </dl>
                    </div>
                    <div className="odr-b-b">
                      <dl>
                        <dd><i className="jbqx"></i>竞标期限<span>5</span>天</dd>
                        <dd><i className="ti"></i>发标时间<span>2015-10-09  12:13</span></dd>
                      </dl>
                      <div className="lxftime" endtime="2015-10-12 00:00:00"></div>
                    </div>
                  </div>
                </li>
                <li rel="zjxd">
                  <div className="odr-items">
                    <div className="odr-lx zjxd"></div>
                    <div className="odr-b-t">
                      <div className="name">1000个一次性水杯定制</div>
                      <div className="people"><span>发标人：</span><span>小尼惠商有******有限公司</span></div>
                    </div>
                    <div className="odr-b-c">
                      <dl className="odr-b-list">
                        <dt>接单商家</dt>
                        <dd>小尼惠商有******有限公司</dd>
                      </dl>
                    </div>
                    <div className="odr-b-b">
                      <dl>
                        <dd><i className="sl"></i>数量　　<span>1000</span>个</dd>
                        <dd><i className="je"></i>总金额　<span>156.00</span>元</dd>
                        <dd><i className="ti"></i>下单时间<span>2015-10-09  12:13</span></dd>
                      </dl>
                    </div>
                  </div>
                </li>
                <li rel="xjd">
                  <div className="odr-items">
                    <div className="odr-lx xjd"></div>
                    <div className="odr-b-t">
                      <div className="name">1000个一次性水杯定制</div>
                      <div className="people"><span>发标人：</span><span>小尼惠商有******有限公司</span></div>
                    </div>
                    <div className="odr-b-c">
                      <dl className="odr-b-list">
                        <dt>邀请报价商家</dt>
                        <dd>小尼惠商有******有限公司</dd>
                        <dd>小尼惠商有******有限公司</dd>
                        <dd>小尼惠商有******有限公司</dd>
                        <dd>*****</dd>
                      </dl>
                    </div>
                    <div className="odr-b-b">
                      <dl>
                        <dd><i className="jbqx"></i>报价期限<span>5</span>天</dd>
                        <dd><i className="ti"></i>询价时间<span>2015-10-09  12:13</span></dd>
                      </dl>
                      <div className="lxftime" endtime="2015-10-12 00:00:00"></div>
                    </div>
                  </div>
                </li>
                <li rel="zbd">
                  <div className="odr-items">
                    <div className="odr-lx zbd"></div>
                    <div className="odr-b-t">
                      <div className="name">1000个一次性水杯定制</div>
                      <div className="people"><span>发标人：</span><span>小尼惠商有******有限公司</span></div>
                    </div>
                    <div className="odr-b-c">
                      <dl className="odr-b-list">
                        <dt>邀请竞标商家</dt>
                        <dd>小尼惠商有******有限公司</dd>
                        <dd>小尼惠商有******有限公司</dd>
                        <dd>小尼惠商有******有限公司</dd>
                        <dd>*****</dd>
                      </dl>
                    </div>
                    <div className="odr-b-b">
                      <dl>
                        <dd><i className="jbqx"></i>竞标期限<span>5</span>天</dd>
                        <dd><i className="ti"></i>发标时间<span>2015-10-09  12:13</span></dd>
                      </dl>
                      <div className="lxftime" endtime="2015-10-12 00:00:00"></div>
                    </div>
                  </div>
                </li>
                <li rel="zjxd">
                  <div className="odr-items">
                    <div className="odr-lx zjxd"></div>
                    <div className="odr-b-t">
                      <div className="name">1000个一次性水杯定制</div>
                      <div className="people"><span>发标人：</span><span>小尼惠商有******有限公司</span></div>
                    </div>
                    <div className="odr-b-c">
                      <dl className="odr-b-list">
                        <dt>接单商家</dt>
                        <dd>小尼惠商有******有限公司</dd>
                      </dl>
                    </div>
                    <div className="odr-b-b">
                      <dl>
                        <dd><i className="sl"></i>数量　　<span>1000</span>个</dd>
                        <dd><i className="je"></i>总金额　<span>156.00</span>元</dd>
                        <dd><i className="ti"></i>下单时间<span>2015-10-09  12:13</span></dd>
                      </dl>
                    </div>
                  </div>
                </li>
                <li rel="xjd">
                  <div className="odr-items">
                    <div className="odr-lx xjd"></div>
                    <div className="odr-b-t">
                      <div className="name">1000个一次性水杯定制</div>
                      <div className="people"><span>发标人：</span><span>小尼惠商有******有限公司</span></div>
                    </div>
                    <div className="odr-b-c">
                      <dl className="odr-b-list">
                        <dt>邀请报价商家</dt>
                        <dd>小尼惠商有******有限公司</dd>
                        <dd>小尼惠商有******有限公司</dd>
                        <dd>小尼惠商有******有限公司</dd>
                        <dd>*****</dd>
                      </dl>
                    </div>
                    <div className="odr-b-b">
                      <dl>
                        <dd><i className="jbqx"></i>报价期限<span>5</span>天</dd>
                        <dd><i className="ti"></i>询价时间<span>2015-10-09  12:13</span></dd>
                      </dl>
                      <div className="lxftime" endtime="2015-10-12 00:00:00"></div>
                    </div>
                  </div>
                </li>
                <li rel="zbd">
                  <div className="odr-items">
                    <div className="odr-lx zbd"></div>
                    <div className="odr-b-t">
                      <div className="name">1000个一次性水杯定制</div>
                      <div className="people"><span>发标人：</span><span>小尼惠商有******有限公司</span></div>
                    </div>
                    <div className="odr-b-c">
                      <dl className="odr-b-list">
                        <dt>邀请竞标商家</dt>
                        <dd>小尼惠商有******有限公司</dd>
                        <dd>小尼惠商有******有限公司</dd>
                        <dd>小尼惠商有******有限公司</dd>
                        <dd>*****</dd>
                      </dl>
                    </div>
                    <div className="odr-b-b">
                      <dl>
                        <dd><i className="jbqx"></i>竞标期限<span>5</span>天</dd>
                        <dd><i className="ti"></i>发标时间<span>2015-10-09  12:13</span></dd>
                      </dl>
                      <div className="lxftime" endtime="2015-10-12 00:00:00"></div>
                    </div>
                  </div>
                </li>
                <li rel="zjxd">
                  <div className="odr-items">
                    <div className="odr-lx zjxd"></div>
                    <div className="odr-b-t">
                      <div className="name">1000个一次性水杯定制</div>
                      <div className="people"><span>发标人：</span><span>小尼惠商有******有限公司</span></div>
                    </div>
                    <div className="odr-b-c">
                      <dl className="odr-b-list">
                        <dt>接单商家</dt>
                        <dd>小尼惠商有******有限公司</dd>
                      </dl>
                    </div>
                    <div className="odr-b-b">
                      <dl>
                        <dd><i className="sl"></i>数量　　<span>1000</span>个</dd>
                        <dd><i className="je"></i>总金额　<span>156.00</span>元</dd>
                        <dd><i className="ti"></i>下单时间<span>2015-10-09  12:13</span></dd>
                      </dl>
                    </div>
                  </div>
                </li>
                <li rel="xjd">
                  <div className="odr-items">
                    <div className="odr-lx xjd"></div>
                    <div className="odr-b-t">
                      <div className="name">1000个一次性水杯定制</div>
                      <div className="people"><span>发标人：</span><span>小尼惠商有******有限公司</span></div>
                    </div>
                    <div className="odr-b-c">
                      <dl className="odr-b-list">
                        <dt>邀请报价商家</dt>
                        <dd>小尼惠商有******有限公司</dd>
                        <dd>小尼惠商有******有限公司</dd>
                        <dd>小尼惠商有******有限公司</dd>
                        <dd>*****</dd>
                      </dl>
                    </div>
                    <div className="odr-b-b">
                      <dl>
                        <dd><i className="jbqx"></i>报价期限<span>5</span>天</dd>
                        <dd><i className="ti"></i>询价时间<span>2015-10-09  12:13</span></dd>
                      </dl>
                      <div className="lxftime" endtime="2015-10-12 00:00:00"></div>
                    </div>
                  </div>
                </li>
              </ul>
              <div className="clearfixfix"></div>
              <div className="ck-more"><a>查看更多<i className="sj"></i></a></div>
            </div>
          </div>
        </div>

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
