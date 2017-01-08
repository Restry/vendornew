import React from 'react';

const CusMap = ({title, description}) => {
  return (
    <div className="actionWrap">
      <div className="main">
        <div className="tit">
          <h1>{title || '定制流程'}</h1>
          <p>{description || '我们有自己的独特的定制流程哦，快来了解下吧！'}
            <a className="red">More&gt;&gt;</a></p>
        </div>
        <div className="con">
          <div className="ind-dz-lc">
            <ul>
              <span className="arrow-l"></span>
              <li>
                <div className="circle radius"> <i className="lc-01"></i> </div>
                <div className="line">
                  <div className="round radius"></div>
                </div>
                <div className="txt">
                  <h4>入驻诚宝通</h4>
                  <p>满足你一切信誉需求</p>
                </div>
              </li>
              <li>
                <div className="circle radius"> <i className="lc-02"></i> </div>
                <div className="line">
                  <div className="round radius"></div>
                </div>
                <div className="txt">
                  <h4>洽谈提升事项</h4>
                  <p>诚宝通与您制定合理方案</p>
                </div>
              </li>
              <li>
                <div className="circle radius"> <i className="lc-03"></i> </div>
                <div className="line">
                  <div className="round radius"></div>
                </div>
                <div className="txt">
                  <h4>一对一培训</h4>
                  <p>保障安全，确认安全的提升方式</p>
                </div>
              </li>
              <li>
                <div className="circle radius"> <i className="lc-04"></i> </div>
                <div className="line">
                  <div className="round radius"></div>
                </div>
                <div className="txt">
                  <h4>开始放单</h4>
                  <p>保证了每一个用户的真实意向</p>
                </div>
              </li>
              <li>
                <div className="circle radius"> <i className="lc-05"></i> </div>
                <div className="line">
                  <div className="round radius"></div>
                </div>
                <div className="txt">
                  <h4>审批威客</h4>
                  <p>安全交易，确保每一单真实且有效</p>
                </div>
              </li>
              <li>
                <div className="circle radius"> <i className="lc-06"></i> </div>
                <div className="line">
                  <div className="round radius"></div>
                </div>
                <div className="txt">
                  <h4>开始流程</h4>
                  <p>用户收货、评价交易完成</p>
                </div>
              </li>
              <span className="arrow-r"></span>
            </ul>
            <div className="clearfixfix"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CusMap;