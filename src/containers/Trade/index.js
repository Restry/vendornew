import React, { Component, PropTypes } from 'react';
import { mock, Random } from 'mockjs';
import { connect } from 'react-redux';
import toastr from 'toastr';
import * as requestActions from 'redux/modules/request';
import { load } from 'redux/modules/info';
import { Link } from 'react-router';

if (__CLIENT__) { require('../../assets/css/amend.css'); }

@connect(
  (state, ownProps) => {
    const { requests} = state.info;
    const { user } = state.auth;
    if (!user) return {};
    return {
      myRequests: requests.filter((item) => { return item.creator === user.email; }),
      myVendors: user.myBills || [] // requests.filter((item) => { return item.vendor !== null && item.vendor.email === user.email; })
    };
  }, { loadInfo: load, ...requestActions })
class Trade extends Component {
  chooseVendor = (bid, vendor) => {
    return () => {
      const { confirmVendor, loadInfo} = this.props;
      confirmVendor(bid, vendor).then(res => {
        if (res.success) {
          loadInfo();
        }
      });
    };
  }
  componentDidMount() {
    this.props.loadInfo();
  }

  render() {
    const { myRequests, myVendors} = this.props;
    return (
      <div className="egc-container">
        <div className="find-wrap">

          <div className="factorVirtueBox">
            <div className="factor-ser box-radius fl">
              <div className="tit-find"><span className="font-find fl">我发布的</span>
                <div className="fr fac-orders">投标总数<em>{myRequests.length}</em>单</div>
                <div className="clearfix"></div>
              </div>
              <div className="con-find">
                <table border="0" cellSpacing="0" cellPadding="0" className="egc-tab">
                  <tbody>

                    {myRequests.map((item, index) => {
                      let {raceVendors} = item;
                      raceVendors = raceVendors || [];
                      return (<tr key={index}>
                        <td><a className="fac-odr-img">
                          <img src={Random.image('70x70')} width="70" height="70" /></a>
                          <Link className="fac-odr-name" to={'/request/detail/' + item.bid}> {item.title} </Link>

                          <ul>
                            {!item.vendor.email && raceVendors.map((rv, ri) => {
                              return (<li key={ri}>{rv.name} <a onClick={this.chooseVendor(item.bid, rv)} className="ipt-btn-small-qd">选你了</a></li>);
                            })}
                          </ul>
                        </td>
                        <td align="center"><div className="fac-items-name">
                          <p>发布时间时间</p>
                          <p>{item.created}</p>
                        </div></td>
                        <td align="center"><span className="fac-dz-num"><em>{raceVendors.length}</em>件</span>
                          <div className="fac-items-name">投标人数量</div></td>
                        <td align="center"><div className="star mgwz xing-5"></div>
                          <div className="fac-items-name">客户综价（满分五星）</div></td>
                      </tr>);
                    })}
                    <tr className="die">
                      <td colSpan="4"><div className="listPage">
                        <div className="pageBtn"> <span className="prev">上一页</span> <a >1</a> <a >2</a> <a >3</a> <a >4</a> <a >5</a> <span className="noneb">....</span> <span className="next">下一页</span> <span className="page-skip"><em>&nbsp;&nbsp;共100页&nbsp;&nbsp;&nbsp;&nbsp;到第</em>&nbsp;&nbsp;
                      <input className="jumpto" type="text" />
                          &nbsp;&nbsp;<em>页</em>&nbsp;&nbsp;&nbsp;&nbsp;<a className="btn-skipsearch">确定</a></span> </div>
                      </div></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="tit-find"><span className="font-find fl">我服务过的</span>
                <div className="fr fac-orders">订单总数<em>{myVendors && myVendors.length}</em>单</div>
                <div className="clearfix"></div>
              </div>
              <div className="con-find">
                <table border="0" cellSpacing="0" cellPadding="0" className="egc-tab">
                  <tbody>
                    {myVendors.map((item, index) => {
                      // let {raceVendors} = item;
                      // raceVendors = raceVendors || [];
                      return (<tr key={index}>
                        <td><a className="fac-odr-img">
                          <img src={Random.image('70x70')} width="70" height="70" /></a>
                          <Link className="fac-odr-name" to={'/request/detail/' + item.bid}> {item.title} </Link>

                        </td>
                        <td align="center"><div className="fac-items-name">
                          <p>发布人</p>
                          <p>{item.creator}</p>
                        </div></td>
                        <td align="center"><span className="fac-dz-num"></span>
                          <div className="fac-items-name">投标人数量</div></td>
                        <td align="center"><div className="star mgwz xing-5"></div>
                          <div className="fac-items-name">客户综价（满分五星）</div></td>
                      </tr>);
                    })}
                    <tr className="die">
                      <td colSpan="4"><div className="listPage">
                        <div className="pageBtn"> <span className="prev">上一页</span> <a >1</a> <a >2</a> <a >3</a> <a >4</a> <a >5</a> <span className="noneb">....</span> <span className="next">下一页</span> <span className="page-skip"><em>&nbsp;&nbsp;共100页&nbsp;&nbsp;&nbsp;&nbsp;到第</em>&nbsp;&nbsp;
                      <input className="jumpto" type="text" />
                          &nbsp;&nbsp;<em>页</em>&nbsp;&nbsp;&nbsp;&nbsp;<a className="btn-skipsearch">确定</a>
                        </span>
                        </div>
                      </div></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="factor-hor-news fr">
              <div className="factor-hn-items box-radius">
                <div className="tit-find"><span className="font-find fl">荣誉资质</span>
                  <div className="fr fac-orders"><a >更多<i>></i></a></div>
                  <div className="clearfix"></div>
                </div>
                <div className="con-find">
                  <div className="honor">
                    <div className="imgList"><a><img src={Random.image('100x100')} /></a></div>
                    <div className="imgList"><a><img src={Random.image('100x100')} /></a></div>
                    <div className="imgList"><a><img src={Random.image('100x100')} /></a></div>
                    <div className="imgList"><a><img src={Random.image('100x100')} /></a></div>
                    <div className="clearfix"></div>
                  </div>
                </div>
              </div>
              <div className="factor-hn-items box-radius">
                <div className="tit-find"><span className="font-find fl">发布的文章</span>
                  <div className="fr fac-orders"><a >更多<i>&gt;</i></a></div>
                  <div className="clearfix"></div>
                </div>
                <div className="con-find">
                  <div className="news">
                    <ul>
                      <li><a>精英工厂每日战报</a>
                        <div className="news-time">2015-10-22</div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="clearfix"></div>
          </div>
        </div>

      </div>
    );
  }
}

Trade.propTypes = {
  confirmVendor: PropTypes.func,
  loadInfo: PropTypes.func
};

export default Trade;
