import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import * as requestActions from 'redux/modules/request';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import toastr from 'toastr';
import { Tabs, Tab } from 'react-bootstrap';
import { FlowMap, LoadingDots } from 'components';

if (__CLIENT__) {
  require('../../assets/css/applesite.css');
}

@connect(
  (state, ownProps) => {
    const {auth, request} = state;
    if (!request.item.bid) return {};

    const reqInfo = { alreadyRace: false, process: 1, me: {} };
    if (auth.user) {
      const vendors = request.item.raceVendors.filter((vendor) => vendor.name === auth.user.name);
      reqInfo.alreadyRace = vendors.length > 0;
      reqInfo.process = reqInfo.alreadyRace ? vendors[0].process : 1;
      reqInfo.me = reqInfo.alreadyRace ? vendors[0] : {};
    }
    return {
      item: request.item,
      reqInfo
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
    parseInt(_id) && this.props.detail(_id);
  }
  onRace = () => {
    const {race, pushState, reqInfo} = this.props;
    if (reqInfo.alreadyRace) { return; }
    race(this.props.params._id).then((res) => {
      toastr.success('投标成功！');
      pushState('/');
    }).catch((err) => {
      toastr.error(err.msg);
    });
  }
  render() {
    const {item, reqInfo} = this.props;
    if (!item) return <h1 className="center-title">Processing<LoadingDots /></h1>;

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

              <FlowMap process={reqInfo.process} />

              <table className="lc3_b2">
                <tbody>
                  <tr>
                    <td className="td1" width="239px">
                      <span >开始时间：</span>
                      <span>{reqInfo.me.raceTime || '您还没有开始'}</span><br />
                      <span >完成时间：</span>
                      <span>{reqInfo.me.doneTime || '任务还未完成'}</span>
                    </td>
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
                  <td className="a9_td2" ><b>正在进行 ...</b></td>
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
                    <div id="jierenwu" onClick={this.onRace}
                      className={'jiaru_but dt_b4' + (reqInfo.alreadyRace ? ' rw_a8' : '')}>申请接单</div>
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
                      {item.billInfo.type}
                    </td>
                  </tr>
                  <tr>
                    <td className="n1_td1">刷单方式:</td>
                    <td>
                      {item.billInfo.brushType}
                    </td>
                  </tr>
                  <tr>
                    <td className="n1_td1">二次任务间隔:</td>
                    <td>

                      {item.billInfo.taskGap}

                    </td>
                  </tr>
                  <tr>
                    <td className="n1_td1">地区要求:</td>
                    <td>

                      {item.billInfo.areaLimit}
                    </td>
                  </tr>
                  <tr>
                    <td className="n1_td1">小号要求:</td>
                    <td>

                      {item.billInfo.smallAccount}
                    </td>
                  </tr>
                  <tr>
                    <td className="n1_td1">收货要求:</td>
                    <td>

                      {item.billInfo.acceptRequire}
                    </td>
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
                    <td className="anniu">
                      {item.searchWay.type}
                    </td>
                  </tr>
                  <tr>
                    <td className="n1_td1 anniu" >搜索关键词:</td>
                    <td>
                      <span >
                        {item.searchWay.keyWords}

                      </span>									</td>
                  </tr>
                  <tr>
                    <td className="n1_td1 anniu">筛选方式:</td>
                    <td className="anniu">
                      {item.searchWay.filterType}
                    </td>
                  </tr>
                  <tr>
                    <td className="n1_td1 anniu">店铺旺旺:</td>
                    <td>
                      <span >
                        {item.searchWay.wangwang}
                      </span>									</td>
                  </tr>
                  <tr>
                    <td className="n1_td1 anniu" >主宝贝价格:</td>
                    <td>
                      <span >
                        {item.searchWay.price}

                      </span>									</td>
                  </tr>
                  <tr>
                    <td className="n1_td1 anniu">搜索结果图:</td>
                    <td className="anniu">
                      <span >
                        {item.searchWay.screenshots}
                      </span>									</td>
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

                      {item.buyWay.browse}
                    </td>
                  </tr>
                  <tr>
                    <td className="n1_td1">假聊要求:</td>
                    <td>
                      浏览完后需要进行假聊。<br />假聊内容：
                    <div className="chatcontent">
                        {item.buyWay.fakeChat}
                      </div>
                      评价根据要求评。（注意：账号都是假的没必要真的去验证）
                    </td>
                  </tr>
                  <tr>
                    <td className="n1_td1">拍宝贝数量:</td>
                    <td>

                      {item.buyWay.count}

                    </td>
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
                      <span >[]</span>									</td>
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

                      {item.favorableWay.checkTime}

                    </td>
                  </tr>
                  <tr>
                    <td className="n1_td1">好评方式:</td>
                    <td>
                      {item.favorableWay.fav}

                    </td>
                  </tr>
                  <tr>
                    <td className="n1_td1">追评晒图:</td>
                    <td>
                      {item.favorableWay.favAgain}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>


          </Tab>
          <Tab eventKey={2} title="参与人员">
            <div className="sm_zw2">

              {item.raceVendors && item.raceVendors.map((vendor, index) => {
                return (
                  <div key={index} className="row">
                    <div className="col-sm-2">
                      <img className="rw_head2" src={require('../../assets/images/person.jpg')} />
                    </div>
                    <div className="col-sm-2">
                      {vendor.name}
                    </div>
                    <div className="col-sm-2">
                      {vendor.raceTime}
                    </div>
                    <div className="col-sm-2">
                      进行中
                    </div>
                    <div className="col-sm-2">
                      <b>+ {item.points}</b> 元
										</div>
                  </div>);
              })}

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
  pushState: PropTypes.func,
  reqInfo: PropTypes.object
};

export default RequestDetail;
