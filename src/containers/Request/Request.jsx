import React from 'react';
import Helmet from 'react-helmet';
import { List } from 'immutable';
import { connect } from 'react-redux';
import {Link } from 'react-router';

function paginate(list, page, pageSize) {
  return list.skip((page - 1) * pageSize).take(pageSize);
}

function order(list, sort, sortOrder) {
  if (sort) {
    const sorted = list.sortBy(item => item[sort]);
    if (sortOrder === 'desc') {
      return sorted.reverse();
    }

    return sorted;
  }

  return list;
}

function mockFetch({ query: { pageSize, page, sort, sortOrder } }) {
  const records = List([{
    name: 'Ewe and IPA',
    rank: 75
  }, {
    name: 'Pouty Stout',
    rank: 86
  }, {
    name: 'WPA Evil Angel',
    rank: 63
  }, {
    name: 'Maltster',
    rank: 68
  }, {
    name: 'Beer Mosaic Pale',
    rank: 92
  }, {
    name: 'Honey Porter IDK',
    rank: 93
  }, {
    name: 'Puntification BeerSocialist Brown',
    rank: 88
  }, {
    name: 'HefeLite Dubble All-Grain',
    rank: 55
  }]);

  const filtered = paginate(
    order(records, sort, sortOrder),
    page,
    pageSize
  );

  return () => Promise.resolve({
    data: {
      results: filtered.toJS(),
      total_count: records.count()
    }
  });
}

export function Request() {
  return (
    <section>
      <Helmet title="招标需求" />
      <div className="ek-manageBox border-top">
        <div className="m-cnt">
          <div className="zb-news fl">
            <div className="activityBox">
              <div className="title">
                <h2>最新招标需求</h2>
                <span className="ac_List"> <a href="#">全部</a> <span className="pageState"><span> </span>/</span>
                </span> <span className="prev"></span> <span className="next"></span> </div>
              <div className="content">
                <div className="contentInner">
                  <div className="tempWrap">
                    <ul>
                      <li>
                        <dl>
                          <dd><em>宿迁</em><a href="#">最多二十个字符最多二十个字符最多二十</a><span>09-25</span><span><i className="num">12</i>家服务商报价</span></dd>
                          <dd><em>宿迁</em><a href="#">最多二十</a><span>09-25</span><span><i className="num">12</i>家服务商报价</span></dd>
                          <dd><em>宿迁</em><a href="#">最多二十</a><span>09-25</span><span><i className="num">12</i>家服务商报价</span></dd>
                          <dd><em>宿迁</em><a href="#">最多二十个字符最多二十个字符最多二十</a><span>09-25</span><span><i className="num">12</i>家服务商报价</span></dd>
                        </dl>
                      </li>
                      <li>
                        <dl>
                          <dd><em>宿迁</em><a href="#">最多二十个字符最多二十个字符最多二十</a><span>09-25</span><span><i className="num">12</i>家服务商报价</span></dd>
                          <dd><em>宿迁</em><a href="#">最多二十个字符最多二十个字符最多二十</a><span>09-25</span><span><i className="num">12</i>家服务商报价</span></dd>
                          <dd><em>宿迁</em><a href="#">最多二十个字符最多二十个字符最多二十</a><span>09-25</span><span><i className="num">12</i>家服务商报价</span></dd>
                          <dd><em>宿迁</em><a href="#">最多二十个字符最多二十个字符最多二十</a><span>09-25</span><span><i className="num">12</i>家服务商报价</span></dd>
                        </dl>
                      </li>
                      <li>
                        <dl>
                          <dd><em>宿迁</em><a href="#">最多二十个字符最多二十个字符最多二十</a><span>09-25</span><span><i className="num">12</i>家服务商报价</span></dd>
                          <dd><em>宿迁</em><a href="#">最多二十个字符最多二十个字符最多二十</a><span>09-25</span><span><i className="num">12</i>家服务商报价</span></dd>
                          <dd><em>宿迁</em><a href="#">最多二十个字符最多二十个字符最多二十</a><span>09-25</span><span><i className="num">12</i>家服务商报价</span></dd>
                          <dd><em>宿迁</em><a href="#">最多二十个字符最多二十个字符最多二十</a><span>09-25</span><span><i className="num">12</i>家服务商报价</span></dd>
                        </dl>
                      </li>
                      <li>
                        <dl>
                          <dd><em>宿迁</em><a href="#">最多二十个字符最多二十个字符最多二十</a><span>09-25</span><span><i className="num">12</i>家服务商报价</span></dd>
                          <dd><em>宿迁</em><a href="#">最多二十个字符最多二十个字符最多二十</a><span>09-25</span><span><i className="num">12</i>家服务商报价</span></dd>
                          <dd><em>宿迁</em><a href="#">最多二十个字符最多二十个字符最多二十</a><span>09-25</span><span><i className="num">12</i>家服务商报价</span></dd>
                          <dd><em>宿迁</em><a href="#">最多二十个字符最多二十个字符最多二十</a><span>09-25</span><span><i className="num">12</i>家服务商报价</span></dd>
                        </dl>
                      </li>
                      <li>
                        <dl>
                          <dd><em>宿迁</em><a href="#">最多二十个字符最多二十个字符最多二十</a><span>09-25</span><span><i className="num">12</i>家服务商报价</span></dd>
                          <dd><em>宿迁</em><a href="#">最多二十个字符最多二十个字符最多二十</a><span>09-25</span><span><i className="num">12</i>家服务商报价</span></dd>
                          <dd><em>宿迁</em><a href="#">最多二十个字符最多二十个字符最多二十</a><span>09-25</span><span><i className="num">12</i>家服务商报价</span></dd>
                          <dd><em>宿迁</em><a href="#">最多二十个字符最多二十个字符最多二十</a><span>09-25</span><span><i className="num">12</i>家服务商报价</span></dd>
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
                <li className="libg"></li>
                <li className="libg"></li>
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
          <span>供应商公平参与接单</span> </div>
        <div className="zbxq-lc-itms fl">
          <div className="radius jgbh"> <i></i> </div>
          <p>价格保护</p>
          <span>已报价格不随市场变化而增加</span> </div>
        <div className="zbxq-lc-itms fl">
          <div className="radius zskf"> <i></i> </div>
          <p>专属客服</p>
          <span>您的专属客服为您服务</span> </div>
        <div className="clearfix"></div>
        <Link to="postRequest" className="fbxqBtn btn">立即发布需求</Link> </div>
      <div className="subjWrap">
        <div className="xqzb-abt">
          <div className="xqzbTxt"> <i></i>
            <h5>什么是需求招标？</h5>
            <p>如果，您要定制的东西，我们模板中心没有，哦！对不起，这一定是我们的工作还不够仔细...<br /> 如果，您要定制的东西，是你在大街上看到的，但是却不知道它叫什么名字....
                    <br /> 如果，您没有心情在我们的模板中心进行搜索，就是想找个人能帮你把事情都干了....
                    <br /> 那么....
                    <br /> 来这里，自助和人工，随时恭候您。
                </p>
          </div>
        </div>
      </div>
      <div className="container supper-app">
        <div className="main">
          <div className="tit">
            <h1 style={{fontSize: '24px'}}>您还可以在手机APP上直接发布需求招标</h1>
          </div>
          <div className="con sup">
            <div className="smbox list1">
              <h2>免费建立e库,一键定制</h2>
              <p>GC会员版APP与PC端用户e库数据对<br/> 接为用户建立一个专属安全永久的云端定制模板库，一次设计永久使用</p>
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
        <div className="subjWrap supper-app xqzb">
          <div className="tit">
            <h1 style={{fontSize: '28px'}}>如何解决您的需求</h1>
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
          <div className="xqzbBtnBox"><Link to="postRequest" className="fbxqBtn btn">立即发布需求</Link></div>
        </div>
        <div className="proRecommend suj">
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

export default connect(
  undefined,
  {fetch: mockFetch }
)(Request);
