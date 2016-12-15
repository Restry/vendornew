import { expect } from 'chai';
import { request } from '../index';
import moment from 'moment';
moment.locale('zh-CN');
import { mock } from 'mockjs';
// require('./enableConnection');
const postData = {
  body: {
    request: mock({
      'category|1': [
        'wechat',
        'taobao'
      ],
      'title': '@city()的@cname()要刷@integer(60, 100)单',
      'type|1': [
        'zbd',
        'zjxd'
      ],
      'notes': '@cparagraph()',
      'process': '@integer(1, 100)',
      'states': '招标中',
      'creator': '@cname()',
      'created': '@datetime()',
      'raceVendors': [],
      'price|1': [
        500,
        1000, 5000, 300, 2559, 689, 20000
      ],
      'order': '@integer(0, 100)',
      'raceDay': '@integer(5, 100)'
    })

  }
};

describe('提交需求测试', () => {
  it('提交成功', (done) => {
    request.post(postData, null, null).then((res) => {
      // console.error('request post success? :' + JSON.stringify(res));
      expect(res.success).eq(true);
      done();
    }, (err) => {
      // console.error('request post error :' + err);
      expect(err.success).to.be.false();
      done();
    });
  });


  it('获取微信需求', (done) => {
    // expect(1).to.gt(0);
    request.load({ query: { category: 'taobao' } }).then((res) => {
      console.log(`all wechat list : ${JSON.stringify(res.length)}`);
      expect(res.length).gt(0);
      done();
    });
  });

  it('投标需求-用户未登陆', (done) => {
    request.race({
      query: { title: postData.body.request.title }, session: {}
    }).catch((err) => {
      expect(err.success).eq(false);
      done();
    });
  });

  it('投标需求', (done) => {
    request.race({
      query: { title: postData.body.request.title }, session: {
        user: mock({ name: '@cname()' })
      }
    }).then((res) => {
      console.log('race done:' + JSON.stringify(res));
      expect(res.raceVendors.length).gt(0);
      done();
    }, (err) => {
      console.log('race error:' + JSON.stringify(err));
      done();
    })
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
