import React, { Component, PropTypes } from 'react';
// import { connect } from 'react-redux';
import config from '../../config';
import { Link } from 'react-router';
import Mock from 'mockjs';
const {Random} = Mock;

class NavBar extends Component {

  render() {
    let ranArrs = Mock.mock({
      'array|3-15': [() => { return Random.cname(); }]
    });

    return (

      <div className="egcMenu">
        <div className="egcNavigation facade">
          <div className="m-cnt">
            <div className="nav-logo"> <Link to="/" className="fl logo">
              <img src={require('../../assets/images/logo-indx.png')} /></Link>
              <span className="txt fl">
                {config.app.title}
                &nbsp;&nbsp;&nbsp;&nbsp;一单起订</span></div>
            <div className="hd-nav facade">
              <a href="#">模板中心<em>new<s></s></em></a>

              <Link to="hello">交易数据</Link>
              <Link to="register">行业专属</Link>
              <Link to="request">需求招标</Link>
              <div className="clearfixfix"></div>
            </div>
            <div className="nav-search facade">
              <input type="text" className="nav-sea-ipt fl" placeholder="检索模板、工厂、设计师" />
              <input type="button" value="搜索" className="nav-sea-sub fr" />
              <div className="clearfixfix"></div>
              <div className="sear-keys">
                <span>热门搜索：</span>
                {
                  ranArrs.array.map((res,i) => {
                    return <a key={i}>{res}</a>;
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}
NavBar.propTypes = {
    time: PropTypes.number
  }
export default NavBar;