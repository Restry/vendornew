import { expect } from 'chai';
import { request } from '../index';
// require('./enableConnection');
const postData = {
  body: {
    request: {
      title: `[需求]Unit Tests:${(new Date()).getTime()}`,
      category: 'wechat',
      type: 'zbd',
      notes: `[需求]Unit Tests :${(new Date()).getTime()} Notes description`,
      process: 0,
      states: '招标中'
    }
  }
};

describe('提交需求测试', () => {
  it('提交成功', (done) => {
    request.post(postData, null, null).then((res) => {
      console.error('request post success? :' + JSON.stringify(res));
      expect(res.success).eq(true);
      done();
    }, (err) => {
      console.error('request post error :' + err);
      expect(err.success).to.be.false();
      done();
    });
  });


  it('获取微信需求', (done) => {
    // expect(1).to.gt(0);
    request.load({ query: { category: 'wechat' } }).then((res) => {
      console.log(`all wechat list : ${JSON.stringify(res)}`);
      expect(res.length).gt(0);
      done();
    });
  });

  it('投标需求', (done) => {

    request.race({
      query: { title: postData.body.request.title }, session: {
        user: {
          name: 'test-user'
        }
      }
    }).then((err, res) => {
      expect(res.raceVendors.length).gt(0);
      done();
    }).catch((err) => {
      console.log('race error:' + JSON.stringify(err));
      done();
    });

    // request.load({ query: { category: 'wechat' } }).then((res) => {
    //   // expect(res[0].race).to.not.null();
    //   // console.dir(res);
    //   expect(res[0].race).not.equal(null);

    //   res[0].race(res[0]._id, { user: 'restry', raceTime: new Date() })
    //     .then((raceResult) => {
    //       console.log(JSON.stringify(raceResult));
    //       expect(raceResult.raceVendors.length).gt(0);
    //       done();
    //     }).catch((err) => {
    //       console.dir(err);
    //       return next(err);
    //     });

    // });
  });

  it('竟标期限值', (done) => {
    request.load({ query: { category: 'wechat' } }).then((res) => {
      // console.dir(res[0].leftRaceDay);
      expect(res[0].leftRaceDay).equal('几秒内');
      done();
    }).catch((err) => {
      console.dir(err);
      done();
    });
  });

  // it('删除测试需求', (done) => {
  //   request.remove({ query: {} }).then((res) => {
  //     // console.dir(res);
  //     expect(res.result.n).gt(0);
  //     done();
  //   });
  // });
});
