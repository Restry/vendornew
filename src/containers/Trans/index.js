import React, { Component, PropTypes } from 'react';

class Trans extends Component {
  render() {
    return (
      <div>

        <div className="merchandiseDate">
          <div className="main">
            <div className="adv-mac"><img src={require('assets/images/jysj-mac.png')} /></div>
            <div className="date-last-month">
              <div className="txt"><h1>上月交易数据</h1><p><span>2015-10-01  0:00</span>至<span>2015-11-01  0:00</span></p></div>
            </div>
            <div className="date-list">
              <ul>
                <li>
                  <h2>直接下单</h2>
                  <p>5998</p>
                </li>
                <li>
                  <h2>询价定单</h2>
                  <p>5998</p>
                </li>
                <li>
                  <h2>发布需求</h2>
                  <p>5998</p>
                </li>
                <li>
                  <h2>订单总金额</h2>
                  <p>5998.31</p>
                </li>
              </ul>
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
              <ul className="order-sx-con clearfix">
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
              <div className="clearfix"></div>
              <div className="ck-more"><a href="javascript:;">查看更多<i className="sj"></i></a></div>
            </div>
          </div>
        </div>

        <div className="actionWrap">
          <div className="main-data">
            <div className="tit">
              <h1>最新成交订单</h1>
            </div>
            <div className="con date">
              <table className="odr-data-tab fl">
                <thead>
                  <tr>
                    <th>公司名称</th>
                    <th>订单需求</th>
                    <th>订单金额</th>
                    <th>报价商家</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><div className="name">中国****行</div></td>
                    <td><div className="info">定制1000个纸杯，质量好，速度快</div></td>
                    <td><div className="pri-tab">￥<em>21.00</em></div></td>
                    <td>
                      <div className="super"><span>共3家商家报价</span><i></i>
                        <ul className="super-list">
                          <li><span>小尼*****司</span></li>
                          <li><span>小尼*****司</span></li>
                          <li><span>小尼*****司</span></li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td><div className="name">中国****行</div></td>
                    <td><div className="info">定制1000个纸杯，质量好，速度快</div></td>
                    <td><div className="pri-tab">￥<em>21.00</em></div></td>
                    <td>
                      <div className="super"><span>共3家商家报价</span><i></i>
                        <ul className="super-list">
                          <li><span>小尼*****司</span></li>
                          <li><span>小尼*****司</span></li>
                          <li><span>小尼*****司</span></li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td><div className="name">中国****行</div></td>
                    <td><div className="info">定制1000个纸杯，质量好，速度快</div></td>
                    <td><div className="pri-tab">￥<em>21.00</em></div></td>
                    <td>
                      <div className="super"><span>共3家商家报价</span><i></i>
                        <ul className="super-list">
                          <li><span>小尼*****司</span></li>
                          <li><span>小尼*****司</span></li>
                          <li><span>小尼*****司</span></li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td><div className="name">中国****行</div></td>
                    <td><div className="info">定制1000个纸杯，质量好，速度快</div></td>
                    <td><div className="pri-tab">￥<em>21.00</em></div></td>
                    <td>
                      <div className="super"><span>共3家商家报价</span><i></i>
                        <ul className="super-list">
                          <li><span>小尼*****司</span></li>
                          <li><span>小尼*****司</span></li>
                          <li><span>小尼*****司</span></li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td><div className="name">中国****行</div></td>
                    <td><div className="info">定制1000个纸杯，质量好，速度快</div></td>
                    <td><div className="pri-tab">￥<em>21.00</em></div></td>
                    <td>
                      <div className="super"><span>共3家商家报价</span><i></i>
                        <ul className="super-list">
                          <li><span>小尼*****司</span></li>
                          <li><span>小尼*****司</span></li>
                          <li><span>小尼*****司</span></li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td><div className="name">中国****行</div></td>
                    <td><div className="info">定制1000个纸杯，质量好，速度快</div></td>
                    <td><div className="pri-tab">￥<em>21.00</em></div></td>
                    <td>
                      <div className="super"><span>共3家商家报价</span><i></i>
                        <ul className="super-list">
                          <li><span>小尼*****司</span></li>
                          <li><span>小尼*****司</span></li>
                          <li><span>小尼*****司</span></li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table className="odr-data-tab fr">
                <thead>
                  <tr>
                    <th>公司名称</th>
                    <th>订单需求</th>
                    <th>订单金额</th>
                    <th>报价商家</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><div className="name">中国****行</div></td>
                    <td><div className="info">定制1000个纸杯，质量好，速度快</div></td>
                    <td><div className="pri-tab">￥<em>21.00</em></div></td>
                    <td>
                      <div className="super"><span>共3家商家报价</span><i></i>
                        <ul className="super-list">
                          <li><span>小尼*****司</span></li>
                          <li><span>小尼*****司</span></li>
                          <li><span>小尼*****司</span></li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td><div className="name">中国****行</div></td>
                    <td><div className="info">定制1000个纸杯，质量好，速度快</div></td>
                    <td><div className="pri-tab">￥<em>21.00</em></div></td>
                    <td>
                      <div className="super"><span>共3家商家报价</span><i></i>
                        <ul className="super-list">
                          <li><span>小尼*****司</span></li>
                          <li><span>小尼*****司</span></li>
                          <li><span>小尼*****司</span></li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td><div className="name">中国****行</div></td>
                    <td><div className="info">定制1000个纸杯，质量好，速度快</div></td>
                    <td><div className="pri-tab">￥<em>21.00</em></div></td>
                    <td>
                      <div className="super"><span>共3家商家报价</span><i></i>
                        <ul className="super-list">
                          <li><span>小尼*****司</span></li>
                          <li><span>小尼*****司</span></li>
                          <li><span>小尼*****司</span></li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td><div className="name">中国****行</div></td>
                    <td><div className="info">定制1000个纸杯，质量好，速度快</div></td>
                    <td><div className="pri-tab">￥<em>21.00</em></div></td>
                    <td>
                      <div className="super"><span>共3家商家报价</span><i></i>
                        <ul className="super-list">
                          <li><span>小尼*****司</span></li>
                          <li><span>小尼*****司</span></li>
                          <li><span>小尼*****司</span></li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td><div className="name">中国****行</div></td>
                    <td><div className="info">定制1000个纸杯，质量好，速度快</div></td>
                    <td><div className="pri-tab">￥<em>21.00</em></div></td>
                    <td>
                      <div className="super"><span>共3家商家报价</span><i></i>
                        <ul className="super-list">
                          <li><span>小尼*****司</span></li>
                          <li><span>小尼*****司</span></li>
                          <li><span>小尼*****司</span></li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td><div className="name">中国****行</div></td>
                    <td><div className="info">定制1000个纸杯，质量好，速度快</div></td>
                    <td><div className="pri-tab">￥<em>21.00</em></div></td>
                    <td>
                      <div className="super"><span>共3家商家报价</span><i></i>
                        <ul className="super-list">
                          <li><span>小尼*****司</span></li>
                          <li><span>小尼*****司</span></li>
                          <li><span>小尼*****司</span></li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="clearfix"></div>
            </div>
          </div>
        </div>

        <div className="main-data">
          <h1 className="newdate">最新定制需求</h1>
          <div className="news-oder-date">
            <ul>
              <li>
                <div className="tit"><span className="name">公司：</span><span className="gsname">江苏***公司</span><span className="pri fr">参考价：￥<em>125.00</em></span></div>
                <div className="con"><span>100</span>件衬衫单间定制LOGO印刷</div>
                <div className="location">
                  <div className="time fl">2015-10-30 9:21</div>
                  <div className="weiz fr"><span>江苏</span><span>宿迁</span></div>
                </div>
              </li>
              <li>
                <div className="tit"><span className="name">公司：</span><span className="gsname">江苏***公司</span><span className="pri fr">参考价：￥<em>125.00</em></span></div>
                <div className="con"><span>100</span>件衬衫单间定制LOGO印刷</div>
                <div className="location">
                  <div className="time fl">2015-10-30 9:21</div>
                  <div className="weiz fr"><span>江苏</span><span>宿迁</span></div>
                </div>
              </li>
              <li>
                <div className="tit"><span className="name">公司：</span><span className="gsname">江苏***公司</span><span className="pri fr">参考价：￥<em>125.00</em></span></div>
                <div className="con"><span>100</span>件衬衫单间定制LOGO印刷</div>
                <div className="location">
                  <div className="time fl">2015-10-30 9:21</div>
                  <div className="weiz fr"><span>江苏</span><span>宿迁</span></div>
                </div>
              </li>
              <li>
                <div className="tit"><span className="name">公司：</span><span className="gsname">江苏***公司</span><span className="pri fr">参考价：￥<em>125.00</em></span></div>
                <div className="con"><span>100</span>件衬衫单间定制LOGO印刷</div>
                <div className="location">
                  <div className="time fl">2015-10-30 9:21</div>
                  <div className="weiz fr"><span>江苏</span><span>宿迁</span></div>
                </div>
              </li>
              <li>
                <div className="tit"><span className="name">公司：</span><span className="gsname">江苏***公司</span><span className="pri fr">参考价：￥<em>125.00</em></span></div>
                <div className="con"><span>100</span>件衬衫单间定制LOGO印刷</div>
                <div className="location">
                  <div className="time fl">2015-10-30 9:21</div>
                  <div className="weiz fr"><span>江苏</span><span>宿迁</span></div>
                </div>
              </li>
              <li>
                <div className="tit"><span className="name">公司：</span><span className="gsname">江苏***公司</span><span className="pri fr">参考价：￥<em>125.00</em></span></div>
                <div className="con"><span>100</span>件衬衫单间定制LOGO印刷</div>
                <div className="location">
                  <div className="time fl">2015-10-30 9:21</div>
                  <div className="weiz fr"><span>江苏</span><span>宿迁</span></div>
                </div>
              </li>
              <li>
                <div className="tit"><span className="name">公司：</span><span className="gsname">江苏***公司</span><span className="pri fr">参考价：￥<em>125.00</em></span></div>
                <div className="con"><span>100</span>件衬衫单间定制LOGO印刷</div>
                <div className="location">
                  <div className="time fl">2015-10-30 9:21</div>
                  <div className="weiz fr"><span>江苏</span><span>宿迁</span></div>
                </div>
              </li>
              <li>
                <div className="tit"><span className="name">公司：</span><span className="gsname">江苏***公司</span><span className="pri fr">参考价：￥<em>125.00</em></span></div>
                <div className="con"><span>100</span>件衬衫单间定制LOGO印刷</div>
                <div className="location">
                  <div className="time fl">2015-10-30 9:21</div>
                  <div className="weiz fr"><span>江苏</span><span>宿迁</span></div>
                </div>
              </li>
              <li>
                <div className="tit"><span className="name">公司：</span><span className="gsname">江苏***公司</span><span className="pri fr">参考价：￥<em>125.00</em></span></div>
                <div className="con"><span>100</span>件衬衫单间定制LOGO印刷</div>
                <div className="location">
                  <div className="time fl">2015-10-30 9:21</div>
                  <div className="weiz fr"><span>江苏</span><span>宿迁</span></div>
                </div>
              </li>
              <li>
                <div className="tit"><span className="name">公司：</span><span className="gsname">江苏***公司</span><span className="pri fr">参考价：￥<em>125.00</em></span></div>
                <div className="con"><span>100</span>件衬衫单间定制LOGO印刷</div>
                <div className="location">
                  <div className="time fl">2015-10-30 9:21</div>
                  <div className="weiz fr"><span>江苏</span><span>宿迁</span></div>
                </div>
              </li>
              <li>
                <div className="tit"><span className="name">公司：</span><span className="gsname">江苏***公司</span><span className="pri fr">参考价：￥<em>125.00</em></span></div>
                <div className="con"><span>100</span>件衬衫单间定制LOGO印刷</div>
                <div className="location">
                  <div className="time fl">2015-10-30 9:21</div>
                  <div className="weiz fr"><span>江苏</span><span>宿迁</span></div>
                </div>
              </li>
              <li>
                <div className="tit"><span className="name">公司：</span><span className="gsname">江苏***公司</span><span className="pri fr">参考价：￥<em>125.00</em></span></div>
                <div className="con"><span>100</span>件衬衫单间定制LOGO印刷</div>
                <div className="location">
                  <div className="time fl">2015-10-30 9:21</div>
                  <div className="weiz fr"><span>江苏</span><span>宿迁</span></div>
                </div>
              </li>
            </ul>
          </div>
        </div>


      </div>
    );
  }
}

Trans.propTypes = {

};

export default Trans;
