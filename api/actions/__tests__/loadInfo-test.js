import { expect } from 'chai';
import loadInfo from '../loadInfo';
// import timekeeper from 'timekeeper';
require('./enableConnection');

describe('加载站点信息', () => {
  it('总成交额大于1', () => {
    const req = {
      session: {
        user: {
        }
      }
    };
    // console.log('Begin test loadinfo');
    return loadInfo(req).then(data => {
      // console.log(data);
      expect(data.info.totalAmount).to.gt(1);
      // done();
    }).catch((err) => {
      console.dir(err);
      // done();
    });
  });

  it('登陆用户获取信息', () => {
    const req = {
      session: {
        user: {
          email: 'q@q.com'
        }
      }
    };

    return loadInfo(req).then(data => {
      // console.log(data);
      expect(data.requests.length).to.gt(0);
      // done();
    }).catch((err) => {
      console.dir(err);
      // done();
    });
  });
});
