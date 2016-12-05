import {expect} from 'chai';
import loadInfo from '../loadInfo';
// import timekeeper from 'timekeeper';

describe('loadInfo', () => {
  it('load current totalamount', () => {
    const now = Date.now();
    // timekeeper.freeze(now);

    return loadInfo().then(data => {
      console.log(data);
      expect(data).to.deep.equal({time: now, message: 'This came from the api server'});
    });
  });
});
 