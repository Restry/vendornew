import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { SLink } from 'components';
import moment from 'moment';
import Mock from 'mockjs';
const {Random} = Mock;
const picran = __CLIENT__ && Random.dataImage('750x290', `${Random.city(true)} 的${Random.cname()}提交了一个新的需求`);

@connect(
  state => ({
    requests: state.request.requests
  }), {})
class Request extends Component {
  render() {
    const {requests} = this.props;
    return (
      <section>
        <Helmet title="招标需求" />
        <div className="ek-manageBox border-top">
          <div className="m-cnt">
            <div className="zb-news fl">
              <div className="activityBox">
                <div className="title">
                  <h2>最新招标需求</h2>
                </div>
                <div className="content">
                  <div className="contentInner">
                    <div className="tempWrap">
                      <ul>
                        <li>
                          <dl>
                            {requests && requests.map((item, index) => {
                              return (<dd key={index + 'RR'}>
                                <em>{item.states}</em>
                                <span>
                                  <SLink to={'/request/detail/' + item.bid} max={25} title={item.title}>{item.title}</SLink>

                                </span>
                                <span>{moment(item.created).format('MM-DD')}</span>
                                <span><i className="num">{item.raceVendors.length}</i>家服务商报价</span>
                              </dd>);
                            })}
                          </dl>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <div className="xqzb-banner fl">
              <div className="flexslider">
                <ul className="slides">
                  <li className="libg">
                    <img src={picran} alt="" />
                  </li>
                  <li className="libg">
                  </li>
                </ul>
              </div>
            </div>
            <div className="xqzb-tel fr">
              <h4>联系客服帮您发需求</h4>
              <div className="tel">
                <p className="orag">客服电话</p>
                <p>400-710-8886</p>
                <p className="fwti">周一至周日 9:00-23:00</p>
                <a className="btn online-kf">联系在线客服</a>
                <p className="fwti">周一至周日 9:00-23:00</p>
              </div>
              <a className="btn baojia">免费获得报价</a> </div>
            <div className="clearfix"></div>
          </div>
        </div>
        <div className="subjWrap">
          <div className="zbxq-lc-itms fl">
            <div className="radius gpjj"> <i></i> </div>
            <p>公平竞争</p>
            <span>公平且真实的参与接单</span> </div>
          <div className="zbxq-lc-itms fl">
            <div className="radius jgbh"> <i></i> </div>
            <p>价格保护</p>
            <span>已报价格不会因任何原因变化</span> </div>
          <div className="zbxq-lc-itms fl">
            <div className="radius zskf"> <i></i> </div>
            <p>专属客服</p>
            <span>您的专属客服为您服务</span> </div>
          <div className="clearfix"></div>
          <SLink to="postRequest" className="fbxqBtn btn">立即发布需求</SLink> </div>
        <div className="subjWrap">
          <div className="xqzb-abt">
            <div className="xqzbTxt"> <i></i>
              <h5>什么是需求招标？</h5>
              <p>您要优化的宝贝，我们肯定能帮你做到...<br />
                您要优化的需求，我们有海量员工为您达成....
                    <br /> 如果，您就是想找个人能帮你把事情都干了....
                    <br /> 那么....
                    <br /> 来这里，自助和人工，随时恭候您。
                </p>
            </div>
          </div>
        </div>
        <div className="die container supper-app">
          <div className="main">
            <div className="tit">
              <h1 style={{ fontSize: '24px' }}>您还可以在手机APP上直接发布需求招标</h1>
            </div>
            <div className="con sup">
              <div className="smbox list1">
                <h2>免费建立e库,一键定制</h2>
                <p>GC会员版APP与PC端用户e库数据对<br /> 接为用户建立一个专属安全永久的云端定制模板库，一次设计永久使用</p>
              </div>
              <div className="smbox list2">
                <h2>询价功能</h2>
                <p>EGC会员版APP的用户可以发布询价订单，相应行业内的商家会给出报价及优惠条件，用户自主选择商家合作，提高性价比</p>
              </div>
              <div className="smbox list3">
                <h2>招标功能</h2>
                <p>EGC会员版版APP的用户询可以发布招标订单，只有符合用户选择条件的商家才可以竞标，最终由用户选择合作商家，提高用户定制采购效率</p>
              </div>
              <div className="smbox list4">
                <h2>专属客服</h2>
                <p>每一个EGC会员版版APP的用户都拥有自己的专属客服，定制过程中一切可能遇到的问题，专属客服都会帮您解决，有问题就找我的专属客服</p>
              </div>
            </div>
          </div>
        </div>
        <div className="die subjWrap supper-app xqzb">
          <div className="tit">
            <h1 style={{ fontSize: '28px' }}>如何解决您的需求</h1>
          </div>
          <div className="jjxq-lc">
            <div className="list on"><span className="radius">1</span>
              <p>选择类别</p>
            </div>
            <div className="list"><span className="radius">2</span>
              <p>填写需求</p>
            </div>
            <div className="list"><span className="radius">3</span>
              <p>选择供应商</p>
            </div>
            <div className="list"><span className="radius">4</span>
              <p>提交需求</p>
            </div>
            <div className="list"><span className="radius">5</span>
              <p>等待报价</p>
            </div>
            <div className="clearfix"></div>
          </div>
          <div className="xqzbBtnBox"><SLink to="postRequest" className="fbxqBtn btn">立即发布需求</SLink></div>
        </div>
        <div className="die proRecommend suj">
          <div className="tit"><span>猜你喜欢</span><em>根据您的喜好精心为您推荐！</em><a className="cutover fr">换一批</a>
            <div className="clearfix"></div>
          </div>
          <div className="con">
            <div className="pro-rec-items">
              <a href="#"><img src={require('../../assets/adv/rmmb.jpg')} width="130" height="130" /></a>
              <div className="pro-price">
                <div className="pri"><b>￥</b><span>99.00</span><em>参考价</em></div>
                <div className="pro-name">这里最多就十个个字符..</div>
              </div>
            </div>
            <div className="pro-rec-items">
              <a href="#"><img src={require('../../assets/adv/rmmb.jpg')} width="130" height="130" /></a>
              <div className="pro-price">
                <div className="pri"><b>￥</b><span>99.00</span><em>参考价</em></div>
                <div className="pro-name">这里最多就十个个字符..</div>
              </div>
            </div>
            <div className="pro-rec-items">
              <a href="#"><img src={require('../../assets/adv/rmmb.jpg')} width="130" height="130" /></a>
              <div className="pro-price">
                <div className="pri"><b>￥</b><span>99.00</span><em>参考价</em></div>
                <div className="pro-name">这里最多就十个个字符..</div>
              </div>
            </div>
            <div className="pro-rec-items">
              <a href="#"><img src={require('../../assets/adv/rmmb.jpg')} width="130" height="130" /></a>
              <div className="pro-price">
                <div className="pri"><b>￥</b><span>99.00</span><em>参考价</em></div>
                <div className="pro-name">这里最多就十个个字符..</div>
              </div>
            </div>
            <div className="pro-rec-items">
              <a href="#"><img src={require('../../assets/adv/rmmb.jpg')} width="130" height="130" /></a>
              <div className="pro-price">
                <div className="pri"><b>￥</b><span>99.00</span><em>参考价</em></div>
                <div className="pro-name">这里最多就十个个字符..</div>
              </div>
            </div>
            <div className="pro-rec-items">
              <a href="#"><img src={require('../../assets/adv/rmmb.jpg')} width="130" height="130" /></a>
              <div className="pro-price">
                <div className="pri"><b>￥</b><span>99.00</span><em>参考价</em></div>
                <div className="pro-name">这里最多就十个个字符..</div>
              </div>
            </div>
            <div className="clearfix"></div>
          </div>
        </div>
      </section>
    );
  }
}

export default Request;

