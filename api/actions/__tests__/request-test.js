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

  },
  query: {},
  headers: {},
  cookies: {
    user: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyIkX18iOnsic3RyaWN0TW9kZSI6dHJ1ZSwic2VsZWN0ZWQiOnsiX2lkIjoxLCJlbWFpbCI6MSwibmFtZSI6MSwicGFzc3dvcmQiOjF9LCJnZXR0ZXJzIjp7fSwid2FzUG9wdWxhdGVkIjpmYWxzZSwiYWN0aXZlUGF0aHMiOnsicGF0aHMiOnsicGFzc3dvcmQiOiJtb2RpZnkiLCJlbWFpbCI6ImluaXQiLCJuYW1lIjoiaW5pdCIsIl9pZCI6ImluaXQifSwic3RhdGVzIjp7Imlnbm9yZSI6e30sImRlZmF1bHQiOnt9LCJpbml0Ijp7Im5hbWUiOnRydWUsImVtYWlsIjp0cnVlLCJfaWQiOnRydWV9LCJtb2RpZnkiOnsicGFzc3dvcmQiOnRydWV9LCJyZXF1aXJlIjp7fX0sInN0YXRlTmFtZXMiOlsicmVxdWlyZSIsIm1vZGlmeSIsImluaXQiLCJkZWZhdWx0IiwiaWdub3JlIl19LCJlbWl0dGVyIjp7ImRvbWFpbiI6bnVsbCwiX2V2ZW50cyI6e30sIl9ldmVudHNDb3VudCI6MCwiX21heExpc3RlbmVycyI6MH19LCJpc05ldyI6ZmFsc2UsIl9kb2MiOnsibmFtZSI6IlJlc3RyeSIsImVtYWlsIjoicUBxLmNvbSIsIl9pZCI6IjU4NTJjYmRmYjdkZDkzMjI2NTc0MTIyNiJ9LCJfcHJlcyI6eyIkX19vcmlnaW5hbF9zYXZlIjpbbnVsbCxudWxsXSwiJF9fb3JpZ2luYWxfdmFsaWRhdGUiOltudWxsXSwiJF9fb3JpZ2luYWxfcmVtb3ZlIjpbbnVsbF19LCJfcG9zdHMiOnsiJF9fb3JpZ2luYWxfc2F2ZSI6W10sIiRfX29yaWdpbmFsX3ZhbGlkYXRlIjpbXSwiJF9fb3JpZ2luYWxfcmVtb3ZlIjpbXX0sImlhdCI6MTQ4MjczODY4NywiZXhwIjoxNDgyNzk4Njg3fQ.F2_qBA1gG66G3uGc06Qo5GgeM-PqxvqiyuGX9cNZLt8'
  }
};

const app = {
  get: () => { return 'thupers3crT$12'; }
};

describe('提交需求测试', () => {
  it('提交成功', (done) => {
    request.post(postData, null, app).then((res) => {
      // console.error('request post success? :' + JSON.stringify(res));
      expect(res.success).eq(true);
      done();
    }).catch((err) => {
      console.error('request post error :' + err);
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
      query: { title: postData.body.request.title }, cookies: {}
    }).catch((err) => {
      expect(err.success).eq(false);
      done();
    });
  });

  it('投标需求', (done) => {
    request.race({
      query: { title: postData.body.request.title }, cookies: {
        user: postData.cookies.user
      }
    }).then((res) => {
      console.log('race done:' + JSON.stringify(res));
      expect(res.raceVendors.length).gt(0);
      done();
    }, (err) => {
      console.log('race error:' + JSON.stringify(err));
      done();
    });
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
