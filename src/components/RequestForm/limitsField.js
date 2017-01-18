import React, { PropTypes } from 'react';

const LimitField = ({single, week7, month15, stype, level}) => {
  return (
    <div className="lie_a2">
      {single && <span title="只拍一个宝贝" className="lie_zhou lie_dan">单</span>}
      {week7 && <span title="周交易量不超过7单" className="lie_zhou ">周7</span>}
      {month15 && <span title="月交易量不超过15单" className="lie_zhou lie_yue">月15</span>}
      {stype === 'phone' ? <img title="使用手机刷单" className="lie_img1" src={require('assets/images/shouji.png')} height="28px" /> :
        <img title="使用电脑刷单" className="lie_img1" src={require('assets/images/computer.png')} height="28px" />}
      {level > 1 && <img title={'小号要求' + level} className="lie_img2" src={require('assets/images/b_red_1.gif')} height="16px" />}
    </div>
  );
};

LimitField.propTypes = {

};

export default LimitField;
