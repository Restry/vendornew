import React from 'react';
import moment from 'moment';
moment.locale('zh-CN');

const OrderCard = ({item}) => {
  return (
    <li rel="zbd">
      <div className="odr-items">
        <div className="odr-lx zbd"></div>
        <div className="odr-b-t">
          <div className="name">{item.title}</div>
          <div className="people"><span>发标人：</span><span>{item.creator}</span></div>
        </div>
        <div className="odr-b-c">
          <dl className="odr-b-list">
            <dt>邀请竞标商家</dt>
            {item.raceVendors.map((vendor, i) => {
              return <dd key={i}>{vendor.user}:{moment(vendor.raceTime).toNow()}</dd>;
            })}
          </dl>
        </div>
        <div className="odr-b-b">
          <dl>
            <dd><i className="jbqx"></i>竞标期限:<span>{moment(item.raceTime).toNow()}</span></dd>
            <dd><i className="ti"></i>发标时间:<span>{moment(item.raceTime).format('YYYY/MM/DD HH:mm')}</span></dd>
            <dd><i className="ti"></i>下单时间:<span>{moment(item.created).format('YYYY/MM/DD HH:mm')}</span></dd>
          </dl>
          <div className="lxftime"></div>
        </div>
      </div>
    </li>
  );
};

export default OrderCard;
