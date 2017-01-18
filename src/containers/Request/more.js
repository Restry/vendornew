import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import * as requestActions from 'redux/modules/request';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import { Nav, NavItem, Pagination } from 'react-bootstrap';
import { Link } from 'react-router';
import { LoadingDots, LimitField } from 'components';

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
    this.state = { activeKey: 'tmall', activePage: 1 };
  }


  handleSelect = (activeKey) => {
    event.preventDefault();
    this.setState({ activeKey });
    this.props.load(activeKey);
  }
  handlePagination = (eventKey) => {
    this.setState({
      activePage: eventKey
    });
  }

  render() {
    const { activeKey } = this.state;
    const { categories, loading, categoryOfRequestOrders, title} = this.props;

    return (<div className="m-cnt">
      <Helmet title="需求列表页面" />
      <h1 className="center-title">{title || '最新定制需求'} {loading && <LoadingDots interval={100} dots={20} />}</h1>
      <Nav bsStyle="tabs" activeKey={activeKey} onSelect={this.handleSelect}>
        {categories.map((cate, index) => {
          return (<NavItem key={index} eventKey={cate.class} title={cate.title}>{cate.title}</NavItem>);
        })}
      </Nav>
      <div className="dt_left_a4 dt_a5" >
        <table className="lie_b2" border="0" cellSpacing="0">
          <tbody className="lie_a1">
            <tr className="lie_b1">
              <td width="108px"><b>编号</b></td>
              <td width="94px"><b>任务类型</b></td>
              <td width="110px"><b>发布人</b></td>
              <td><b>任务要求</b></td>
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
                      <Link to={'/request/detail/' + item.bid}> {item.creator} </Link>
                    </div>
                  </td>
                  <td>
                    <div className="dt_b3">
                      <a title={item.title}>{item.title}</a>
                    </div>
                    <LimitField {...item.limits} />
                  </td>
                  <td>
                    <span >无需本金</span>									</td>
                  <td><b >{item.points}</b>元</td>
                  <td className="kgdjskl">
                    <Link to={'/request/detail/' + item.bid}>
                      <div id="faburenwu" className="jiaru_but dt_b4">已有人</div>
                    </Link>

                  </td>
                </tr>);
              })
            }


          </tbody>
        </table>

        <Pagination
          prev
          next
          first
          last
          ellipsis
          boundaryLinks
          items={categoryOfRequestOrders.length}
          maxButtons={5}
          activePage={this.state.activePage}
          onSelect={this.handleSelect} />

      </div>


    </div>);
  }
}

MoreRequest.propTypes = {
  categories: PropTypes.array,
  loading: PropTypes.object,
  categoryOfRequestOrders: PropTypes.array,
  title: PropTypes.string
};

export default MoreRequest;
