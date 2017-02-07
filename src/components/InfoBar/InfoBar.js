import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { load } from 'redux/modules/info';

@connect(
  state => ({ info: state.info.data }),
  dispatch => bindActionCreators({ load }, dispatch))
class InfoBar extends Component {


  render() {
    const {info, load} = this.props; // eslint-disable-line no-shadow
    // const styles = require('./InfoBar.scss');
    return (
      <div>
        <div className="actionWrap">
          <div className="main">
            <div className="tit">
              <h1>今日数据</h1>
              <p>诚宝通自上线以来深受市场欢迎，企业用户，服务商家，设计师不断入驻，<br />
                我们每日的交易总额也不断增长，深受用户赞誉
          </p>
            </div>
            <div className="con">
              <div className="date-box">
                <div className="date-itms date-color01">
                  <h2>共有企业用户</h2>
                  <p><span>{info.enterprise}</span>位</p>
                </div>
                <div className="date-itms date-color02">
                  <h2>专业服务商</h2>
                  <p><span>{info.services}</span>家</p>
                </div>
                <div className="date-itms date-color03">
                  <h2>共有设计师</h2>
                  <p><span>{info.designer}</span>位</p>
                </div>
                <div className="date-itms date-color04">
                  <h2>今日总交易额</h2>
                  <p><span>{info.totalAmount}</span>元</p>
                </div>
              </div>
              <div className="clearfixfix"></div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

InfoBar.propTypes = {
  info: PropTypes.object,
  load: PropTypes.func
}

export default InfoBar;
