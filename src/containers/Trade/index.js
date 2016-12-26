import React, { Component, PropTypes } from 'react';
import { mock, Random } from 'mockjs';
import { connect } from 'react-redux';
import toastr from 'toastr';
import * as requestActions from 'redux/modules/request';
import { load } from 'redux/modules/info';

if (__CLIENT__) { require('../../assets/css/amend.css'); }

@connect(
  (state, ownProps) => {
    const { requests} = state.info;
    const { user } = state.auth;
    return {
      myRequests: requests.filter((item)=>{ return item.creator === user.email; }),
      myVendors: requests.filter((item)=>{ return item.vendor !== null && item.vendor.email === user.email; })
    };
  }, { loadInfo: load, ...requestActions})
class Trade extends Component {
  chooseVendor = (_id, vendor)=>{
    return ()=>{
      const { confirmVendor, loadInfo} = this.props;
      confirmVendor(_id, vendor).then(res=>{
        if (res.success) {
          loadInfo();
        }
      });
    }
  }
  render() {
    const { myRequests, myVendors} = this.props;
    return (
      <div className="egc-container">
  <div className="find-wrap">
    <div className="factorBox box-radius">
      <div className="factorText">
        <div className="fac-info-name"><span>艾德尼广告服务有限公司</span></div>
        <div className="modelSupplier sup-abt fl">
          <div className="model-sup-items">
            <div className="mod-sup">
              <div className="sup-md-logo"> <img src={Random.image('60x60')} width="60" height="60"/>
                <div className="renzheng">认证</div>
              </div>
              <h2><a className="pf-info-btn open"></a><span>小尼商城自营</span></h2>
            </div>
            <div className="md-pf-box">
              <div className="egc-score mg-t-b">
                <div className="scorename">综合评分：</div>
                <div className="scorenum"><span></span>
                  <div className="score-line"></div>
                </div>
                <div className="fenshu"><em>5.0</em>分</div>
              </div>

            </div>
            <div className="supAttention"> <a id="btnAttentionSupplier">+关注</a> <span>已关注：<s id="spNumAttentionSupplier">1</s></span> </div>
          </div>
          <div className="model-sup-items model-cont">
            <div className="ctt-list wz"><span>江苏省</span>　<span>宿迁市</span></div>
            <div className="ctt-list tel"><span>0527-88888888</span></div>
            <div className="ctt-list email"><span>admin@xiaoni.com</span></div>
          </div>
          <div className="md-r-tel">客服电话:400-710-8886</div>
          <div className="model-sup-items"> <a className="model-kf-btn">咨询客服</a> <a id="btnAttentionSupplier" className="model-gz-btn">关注商家</a>
            <div className="clearfix"></div>
          </div>
          <div className="supAttention"><a target="_blank">查看案例</a> </div>
        </div>

      </div>
      <div className="factorAbout">
        <div className="abt-tit">企业介绍</div>
        <div className="abt-con"> “小尼 XIAONI.COM”原为“艾德尼 adneeds”广告需要的意思，后简化为“小尼”品牌，是以“满足经营所需”为宗旨，以“服务政企类客户”为目标的一站式网上采购平台，采取区域电商＋全网电商和O2O的运营模式，从形态上，我们称之为“网上商贸城”。 <br />
          小尼区别于其它的B2B信息网站和综合分类别于其它B2C电商平台，更具专业性，分别从满足办公所需（办公用品、办公家具）、满足营销所需（广告、印刷、礼品）、满足生产（工业品）、生活（福利商品）所需等诸多方面考虑，商品涉及除核心采购（原材料等）之外的标准品和订制类商品。</div>
      </div>
      <div className="clearfix"></div>
    </div>
    <div className="factorVirtueBox">
      <div className="factor-ser box-radius fl">
        <div className="tit-find"><span className="font-find fl">我发布的</span>
          <div className="fr fac-orders">投标总数<em>{myRequests.length}</em>单</div>
          <div className="clearfix"></div>
        </div>
        <div className="con-find">
          <table border="0" cellSpacing="0" cellPadding="0" className="egc-tab">
            <tbody>

            {myRequests.map((item, index)=>{
              let {raceVendors} = item;
              raceVendors = raceVendors || [];
              return (<tr key={index}>
                <td><a className="fac-odr-img">
                <img src={Random.image('70x70')} width="70" height="70" /></a>
                <a className="fac-odr-name">{item.title}</a>
                <ul>
                 { !item.vendor.email && raceVendors.map((rv, ri)=>{
                   return (<li key={ri}>{rv.name} <a onClick={this.chooseVendor(item._id, rv)} className="ipt-btn-small-qd">选你了</a></li>);
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
                      <input className="jumpto" type="text" value="1"/>
                      &nbsp;&nbsp;<em>页</em>&nbsp;&nbsp;&nbsp;&nbsp;<a className="btn-skipsearch">确定</a></span> </div>
                  </div></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="tit-find"><span className="font-find fl">我服务过的</span>
          <div className="fr fac-orders">订单总数<em>{myVendors.length}</em>单</div>
          <div className="clearfix"></div>
        </div>
        <div className="con-find">
          <table border="0" cellSpacing="0" cellPadding="0" className="egc-tab">
            <tbody>
            {myVendors.map((item, index)=>{
              let {raceVendors} = item;
              raceVendors = raceVendors || [];
              return (<tr key={index}>
                <td><a className="fac-odr-img">
                <img src={Random.image('70x70')} width="70" height="70" /></a>
                <a className="fac-odr-name">{item.title}</a>
                </td>
                <td align="center"><div className="fac-items-name">
                    <p>发布人</p>
                    <p>item.creator</p>
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
                      <input className="jumpto" type="text" value="1"/>
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
  loadInfo:PropTypes.func
};

export default Trade;
