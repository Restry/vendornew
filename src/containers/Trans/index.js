import React, { Component, PropTypes } from 'react';
import { OrderSlide } from 'components';
import { RequestMore } from 'containers';
import { connect } from 'react-redux';

@connect(
  state => ({
    categories: state.request.categories,
    loading: state.request.loading,
    categoryOfRequestOrders: state.request.requests || []
  }), {})
class Trans extends Component {
  static propTypes = {
    loading: PropTypes.bool,
    categories: PropTypes.array,
    categoryOfRequestOrders: PropTypes.array,
    load: PropTypes.func,
  }

  render() {
    const {loading, categories, categoryOfRequestOrders, load} = this.props;
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

        <OrderSlide loading={loading} categories={categories}
          categoryOfRequestOrders={categoryOfRequestOrders} load={load} />

        <RequestMore />
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

      </div>
    );
  }
}

export default Trans;
