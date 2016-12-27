import React from 'react';
import moment from 'moment';
moment.locale('zh-CN');
import { Link } from 'react-router';

const OrderCard = ({item, type}) => {
  if (type === 'min') {
    return (
      <li>
        <div className="tit"><span className="name">来源：</span>
          <span className="gsname">{item.creator}</span>
          <span className="pri fr">参考价：￥<em>{item.price || '无'}</em></span></div>
        <div className="con">
          <Link to={'/request/detail/' + item._id}> {item.title} </Link>
        </div>
        <div className="location">
          <div className="time fl">{moment(item.created).format('YYYY/MM/DD HH:mm')}</div>
          <div className="weiz fr"></div>
        </div>
      </li>
    );
  }
  return (
    <li rel="zbd">
      <div className="odr-items">
        <div className="odr-lx zbd"></div>
        <div className="odr-b-t">
          <div className="name"><Link to={'/request/detail/' + item._id}> {item.title} </Link></div>
          <div className="people"><span>发标人：</span><span>{item.creator}</span></div>
        </div>
        <div className="odr-b-c">
          <dl className="odr-b-list">
            <dt>邀请竞标商家</dt>
            {item.raceVendors.map((vendor, i) => {
              return <dd key={i}>{vendor.name}:{moment(vendor.raceTime).toNow()}</dd>;
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
