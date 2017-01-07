import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import * as requestActions from 'redux/modules/request';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import { Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router';

@connect(
  (state, ownProps) => {
    return {
      categories: state.request.categories || {},
      loading: state.request.loading,
      categoryOfRequestOrders: state.request.requests || []
    };
  },
  {
    pushState: push,
    ...requestActions
  })
class MoreRequest extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = { activeKey: 0 };
  }


  handleSelect = (activeKey) => {
    event.preventDefault();
    this.setState({ activeKey });
  }


  render() {
    const { activeKey } = this.state;
    const { categories, loading, categoryOfRequestOrders} = this.props;

    return (<div className="m-cnt">
      <Helmet title="需求列表页面" />

      <Nav bsStyle="tabs" activeKey={activeKey} onSelect={this.handleSelect}>
        {categories.map((cate, index) => {
          return (<NavItem key={index} eventKey={index} title={cate.title}>{cate.title}</NavItem>);
        })}
      </Nav>
      <div className="dt_left_a4 dt_a5" >
        <table className="lie_b2" border="0" cellSpacing="0">
          <tbody className="lie_a1">
            <tr className="lie_b1">
              <td width="108px"><b>编号</b></td>
              <td width="94px"><b>任务类型</b></td>
              <td width="110px"><b>发布人</b></td>
              <td width="365px"><b>任务要求</b></td>
              <td width="93px"><b>任务本金</b></td>
              <td width="83px"><b>可赚佣金</b></td>
              <td width="88px"><b>操作</b></td>
            </tr>
            {
              categoryOfRequestOrders.map((item, key) => {
                return (<tr key={key}>
                  <td>
                    <span>
                    <Link to={'/request/detail/' + item.bid}> {item.bid} </Link>
                    </span>
                  </td>
                  <td><span >远程托管</span></td>
                  <td>
                    <div className="mx_a3" >
                    <Link to={'/request/detail/' + item.bid}> {item.title} </Link>
                    </div>
                  </td>
                  <td>
                    <div className="dt_b3">
                      <a title={item.notes}>{item.notes}</a>										</div>
                    <div className="lie_a2">
                      <span title="只拍一个宝贝" className="lie_zhou lie_dan">单</span>
                      <span title="周交易量不超过7单" className="lie_zhou ">周7</span>
                      <span title="月交易量不超过15单" className="lie_zhou lie_yue">月15</span>
                      <img title="使用电脑刷单" className="lie_img1" src={require('assets/images/computer.png')} height="28px" />
                      <img title="小号要求1" className="lie_img2" src={require('assets/images/b_red_1.gif')} height="16px" />
                    </div>
                  </td>
                  <td>
                    <span >无需本金</span>									</td>
                  <td><b >{item.price}</b>元</td>
                  <td className="kgdjskl">
                        <Link to={'/request/detail/' + item.bid}><div id="faburenwu" className="jiaru_but dt_b4">已有人</div> </Link>

                  </td>
                </tr>);
              })
            }


          </tbody>
        </table>
        <div className="fanye">
          <b><a className="now_page">1</a>
            <a >2</a>
            <a >3</a>
            <a >4</a>
            <a >5</a>
            <a >6</a>
            <a >7</a>
            <a >8</a>
            <a >9</a>
            <a >10</a>
            <a >11</a>
            <a >下页</a>
            <a >末页</a>
          </b>
        </div>
      </div>


    </div>);
  }
}

MoreRequest.propTypes = {
  categories: PropTypes.array
};

export default MoreRequest;
