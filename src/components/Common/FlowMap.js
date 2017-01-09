import React from 'react';

const FlowMap = ({process}) => {
  return (
    <div className="jjxq-lc" >
      <div className={'list ' + (process === 1 && 'on')}>
        <span className="radius">1</span><p >申请任务</p>
      </div>
      <div className={'list ' + (process === 2 && 'on')}>
        <span className="radius">2</span><p >做任务</p>
      </div>
      <div className={'list ' + (process === 3 && 'on')}>
        <span className="radius">3</span><p >商家发货</p>
      </div>
      <div className={'list ' + (process === 4 && 'on')}>
        <span className="radius">4</span><p >签收好评</p>
      </div>
      <div className={'list ' + (process === 5 && 'on')}>
        <span className="radius">5</span><p >佣金提现</p>
      </div>
      <div className="clearfix"></div>
    </div>
  );
};

export default FlowMap;
