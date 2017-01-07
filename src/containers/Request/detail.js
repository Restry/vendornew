import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import * as requestActions from 'redux/modules/request';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import toastr from 'toastr';
import { Tabs, Tab } from 'react-bootstrap';
import { FlowMap } from 'components';

if (__CLIENT__) {
  require('../../assets/css/applesite.css');
}

@connect(
  (state, ownProps) => {
    return {
      item: state.request.item
    };
  },
  {
    pushState: push,
    ...requestActions
  })
class RequestDetail extends Component {
  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {
    const {_id} = this.props.params;
    this.props.detail(_id);
  }
  onRace = () => {
    const {race, pushState} = this.props;
    race(this.props.params._id).then(res => {
      toastr.error('投标成功！');
      pushState('/');
    }).catch((err) => {
      toastr.error(err.msg);
    });
  }
  render() {
    const {item} = this.props;
    if (!item) return <div />;

    return (
      <div className="m-cnt">
        <Helmet title="需求详情" />


        <div className="rw_a1_head">
          <div className="rw_c1">
            <span>
              任务说明:
            </span>
            <b>[{item.title}]</b>
            {item.notes}
          </div>
          <div className="rw_a2">
            <div className="rw_a5">

              <FlowMap />

              <table className="lc3_b2">
                <tbody>
                  <tr>
                    <td className="td1" width="239px">
                      <span >开始时间：</span>
                      <span>您已做过此单</span><br />
                      <span >完成时间：</span>
                      <span>任务还未完成</span>										</td>
                    <td className="td2" width="239px">
                      商家联系方式：<br />
                      <div >
                        <div className="qqlx2">QQ号:</div>
                        <div className="qqlx3">
                          <span >[ {item.qq} ]</span>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div id="rw_13">
            <table className="lctb1" border="0" cellSpacing="0">
              <tbody>
                <tr>
                  <td className="a9_td1">任务状态:</td>
                  <td className="a9_td2" ><b>已被申请 ...</b></td>
                </tr>
                <tr>
                  <td className="a9_td1">任务佣金:</td>
                  <td className="a9_td2"><b >{item.points}</b> 元</td>
                </tr>
                <tr>
                  <td className="a9_td1">任务本金:</td>
                  <td className="a9_td2">
                    <b >无需本金</b>										</td>
                </tr>
                <tr>
                  <td className="a9_td1">申请条件:</td>
                  <td className="a9_td2">实名认证</td>
                </tr>
                <tr>
                  <td className="a9_td1">操作:</td>
                  <td className="a9_td2">
                    <div id="jierenwu" onClick={this.onRace} className="jiaru_but dt_b4 rw_a8">申请接单</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
          <Tab eventKey={1} title="任务步骤">


            <div className="sm_zw1">
              <div className="bu_biaoti">
                <span>第1步：确认单子信息</span>

              </div>
              <table className="bu_tab" border="0" cellSpacing="0">
                <tbody>
                  <tr>
                    <td className="n1_td1">单子类型:</td>
                    <td>
                      远程托管单<span>（由平台管理人员远程付款）</span>									</td>
                  </tr>
                  <tr>
                    <td className="n1_td1">刷单方式:</td>
                    <td>
                      全程电脑刷单									</td>
                  </tr>
                  <tr>
                    <td className="n1_td1">二次任务间隔:</td>
                    <td>做过这个店铺的单子的，10天以内不可以重复做！</td>
                  </tr>
                  <tr>
                    <td className="n1_td1">地区要求:</td>
                    <td>
                      不限制									</td>
                  </tr>
                  <tr>
                    <td className="n1_td1">小号要求:</td>
                    <td>
                      买家累积信用1心以上，一星期内交易量不超过7笔，一个月内交易量不超过15笔。									</td>
                  </tr>
                  <tr>
                    <td className="n1_td1">浏览要求:</td>
                    <td>
                      做单过程需要全程截图。货比三家后再进店，货比时每家店铺浏览3分钟以上。货比三家完成后，需要浏览店铺宝贝2-5款。									</td>
                  </tr>
                  <tr>
                    <td className="n1_td1">收货要求:</td>
                    <td>
                      成功拍下宝贝后即可收货。收到货后2天后再好评！好评内容自由发挥即可！									</td>
                  </tr>
                </tbody>
              </table>
              <div className="bu_biaoti">
                <span>第2步：搜索并找到宝贝</span>
              </div>
              <table className="bu_tab" border="0" cellSpacing="0">
                <tbody>
                  <tr>
                    <td className="n1_td1 anniu">搜索方式:</td>
                    <td className="anniu">使用淘宝搜索</td>
                  </tr>
                  <tr>
                    <td className="n1_td1 anniu" >搜索关键词:</td>
                    <td>
                      <span >[ {item.productKeywords} ]</span>									</td>
                  </tr>
                  <tr>
                    <td className="n1_td1 anniu">筛选方式:</td>
                    <td className="anniu">
                      自然搜索，禁止筛选。									</td>
                  </tr>
                  <tr>
                    <td className="n1_td1 anniu">店铺旺旺:</td>
                    <td>
                      <span >[ 已经有人在做任务了 ]</span>									</td>
                  </tr>
                  <tr>
                    <td className="n1_td1 anniu" >主宝贝价格:</td>
                    <td>
                      <span >[ {item.productPrice} ]</span>									</td>
                  </tr>
                  <tr>
                    <td className="n1_td1 anniu">搜索结果图:</td>
                    <td className="anniu">
                      <span >[ 已经有人在做任务了 ]</span>									</td>
                  </tr>
                </tbody>
              </table>
              <div className="bu_biaoti">
                <span>第3步：浏览并拍下宝贝</span>
              </div>
              <table className="bu_tab" border="0" cellSpacing="0">
                <tbody>
                  <tr>
                    <td className="n1_td1">浏览要求:</td>
                    <td>
                      做单过程需要全程截图。货比三家后再进店，货比时每家店铺浏览3分钟以上。货比三家完成后，需要浏览店铺宝贝2-5款。									</td>
                  </tr>
                  <tr>
                    <td className="n1_td1">假聊要求:</td>
                    <td>
                      浏览完后需要进行假聊。<br />假聊内容：
                    <div className="chatcontent">
                    {item.chatContent}
                    </div>
                    评价根据要求评。（注意：账号都是假的没必要真的去验证）
                    </td>
                  </tr>
                  <tr>
                    <td className="n1_td1">拍宝贝数量:</td>
                    <td>
                      只拍一个宝贝									</td>
                  </tr>
                </tbody>
              </table>
              <div className="bu_biaoti">
                <span>第4步：等待物流</span>
              </div>
              <table className="bu_tab" border="0" cellSpacing="0">
                <tbody>
                  <tr>
                    <td className="n1_td1">物流状态:</td>
                    <td>
                      <span >[ 已经有人在做任务了 ]</span>									</td>
                  </tr>
                </tbody>
              </table>
              <div className="bu_biaoti">
                <span>第5步：确认收货并按要求进行好评</span>
              </div>
              <table className="bu_tab" border="0" cellSpacing="0">
                <tbody>
                  <tr>
                    <td className="n1_td1">收货时间:</td>
                    <td>
                      成功拍下宝贝后即可收货。									</td>
                  </tr>
                  <tr>
                    <td className="n1_td1">好评方式:</td>
                    <td>
                      自由发挥									</td>
                  </tr>
                  <tr>
                    <td className="n1_td1">追评晒图:</td>
                    <td>
                      自由发挥									</td>
                  </tr>
                </tbody>
              </table>
            </div>


          </Tab>
          <Tab eventKey={2} title="参与人员">


            <div className="sm_zw2">
              <table border="0" cellSpacing="0" >
                <tbody>
                  <tr>
                    <td width="770px" ></td>
                  </tr>

                  {item.raceVendors && item.raceVendors.map((vendor, index) => {
                    return (<tr key={index}>
                      <td width="770px" >
                        <img src="/images/head.jpg" className="rw_head2" />
                        <div className="canyu1">
                          {vendor.name} <img src={require('../../assets/images/person.jpg')} />
                          <span ><b>(进行中)</b></span>
                          <br />
                          <span>{vendor.raceTime}</span>
                        </div>
                        <div className="canyu2">
                          <b>+ {item.price}</b> 元
											</div>
                      </td>
                    </tr>);
                  })}

                </tbody>
              </table>
            </div>

          </Tab>
        </Tabs>



      </div >
    );
  }
}

RequestDetail.propTypes = {
  params: PropTypes.object,
  item: PropTypes.object,
  detail: PropTypes.func,
  race: PropTypes.func,
  pushState: PropTypes.func
};

export default RequestDetail;
