import { expect } from 'chai';
import loadInfo from '../loadInfo';
// import timekeeper from 'timekeeper';
require('./enableConnection');

describe('加载站点信息', () => {
  it('总成交额大于1', (done) => {
    // console.log('Begin test loadinfo');
    return loadInfo().then(data => {
      // console.log(data);
      expect(data.totalAmount).to.gt(1);
      done();
    });
  });
});
