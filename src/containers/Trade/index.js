import React, { Component, PropTypes } from 'react';
import { mock, Random } from 'mockjs';
import { connect } from 'react-redux';
import toastr from 'toastr';
import * as requestActions from 'redux/modules/request';
import { load } from 'redux/modules/auth';
import { Link } from 'react-router';
import { ActionButton, LoadingDots, SLink } from 'components';

if (__CLIENT__) { require('../../assets/css/amend.css'); }

@connect(
  (state, ownProps) => {
    const { requests} = state.request;
    const { user, myVendorRequest, myPostRequest} = state.auth;
    if (!user) return {};
    return {
      user,
      loading: state.request.loading,
      myRequests: myPostRequest || [],
      myVendors: myVendorRequest || [] // requests.filter((item) => { return item.vendor !== null && item.vendor.email === user.email; })
    };
  }, { loadAuth: load, ...requestActions })
class Trade extends Component {

  getCurrentProcess = (item) => {
    if (!item.raceVendors) return 1;
    const currentVendor = item.raceVendors.filter((obj) => obj.email == this.props.user.email);

    return currentVendor[0] && currentVendor[0].process;
  }
  chooseVendor = (bid, vendor) => {
    return () => {
      const { confirmVendor, loadAuth } = this.props;
      confirmVendor(bid, vendor).then(() => {
        loadAuth();
      });
    };
  }
  nextStep = (bid) => {
    return () => {
      const { confirmVendor, loadAuth } = this.props;
      confirmVendor(bid).then(() => {
        loadAuth();
      });
    };
  }
  getVendorStatus = (rv, bid) => {
    switch (rv.process) {
      case 1:
        return <a onClick={this.chooseVendor(bid, rv)} title="用户申请接入此任务" className="ipt-btn-small-qd">批准</a>;
      case 4:
        return <a onClick={this.chooseVendor(bid, rv)} title="用户已完成此任务，请确认好评" className="ipt-btn-small-qd">确认</a>;
      case 5:
        return '已完成';
      default:
        return '---任务进行中---';
    }
  }
  componentDidMount() {
    this.props.loadAuth();
  }
  render() {
    const { myRequests, myVendors, loading} = this.props;
    return (
      <div className="egc-container">
        <div className="find-wrap">

          <div className="factorVirtueBox">
            <div className="factor-ser box-radius fl">
              <div className="tit-find"><span className="font-find fl">我发布的{loading && <LoadingDots interval={100} dots={20} />}</span>
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

                        <td className="request-item-title">
                          <SLink className="fac-odr-name" to={'/request/detail/' + item.bid} max={35} title={item.title}>{item.title}</SLink>
                          <div>
                            <h3>接单人列表</h3>
                            <ul>
                              {raceVendors.length > 0 ? raceVendors.map((rv, ri) => {
                                return (<li key={ri}>{rv.name} {this.getVendorStatus(rv, item.bid)}</li>);
                              }) : '无'}
                            </ul>
                          </div>
                        </td>
                        <td align="center"><div className="fac-items-name">
                          发布时间
                          <p>{new Date(item.created).toLocaleDateString()}</p>
                        </div></td>
                        <td align="center">

                          <div className="fac-items-name">投标人数:<em>{raceVendors.length}</em></div></td>

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
                        <td>
                          <Link className="fac-odr-name" to={'/request/detail/' + item.bid}>{item.title}</Link>
                        </td>
                        <td>
                          <ActionButton step={this.getCurrentProcess(item)} nextStep={this.nextStep(item.bid)} />
                        </td>

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
  loadInfo: PropTypes.func,
  loadAuth: PropTypes.func,
  myRequests: PropTypes.array,
  myVendors: PropTypes.array,
  loading: PropTypes.bool
};

export default Trade;
