import { expect } from 'chai';
import loadInfo from '../loadInfo';
// import timekeeper from 'timekeeper';
require('./enableConnection');

describe('加载站点信息', () => {
  it('总成交额大于1', (done) => {
    const req = {
      cookies: {
        user: {
        }
      }
    };
    // console.log('Begin test loadinfo');
    return loadInfo(req).then(data => {
      // console.log(data);
      expect(data.info.totalAmount).to.gt(1);
      done();
    }).catch((err) => {
      console.dir(err);
      done();
    });
  });

  it('登陆用户获取信息', (done) => {
    const req = {
      body: {},
      query: {},
      headers: {},
      cookies: { user: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyIkX18iOnsic3RyaWN0TW9kZSI6dHJ1ZSwic2VsZWN0ZWQiOnsiX2lkIjoxLCJlbWFpbCI6MSwibmFtZSI6MSwicGFzc3dvcmQiOjF9LCJnZXR0ZXJzIjp7fSwid2FzUG9wdWxhdGVkIjpmYWxzZSwiYWN0aXZlUGF0aHMiOnsicGF0aHMiOnsicGFzc3dvcmQiOiJtb2RpZnkiLCJlbWFpbCI6ImluaXQiLCJuYW1lIjoiaW5pdCIsIl9pZCI6ImluaXQifSwic3RhdGVzIjp7Imlnbm9yZSI6e30sImRlZmF1bHQiOnt9LCJpbml0Ijp7Im5hbWUiOnRydWUsImVtYWlsIjp0cnVlLCJfaWQiOnRydWV9LCJtb2RpZnkiOnsicGFzc3dvcmQiOnRydWV9LCJyZXF1aXJlIjp7fX0sInN0YXRlTmFtZXMiOlsicmVxdWlyZSIsIm1vZGlmeSIsImluaXQiLCJkZWZhdWx0IiwiaWdub3JlIl19LCJlbWl0dGVyIjp7ImRvbWFpbiI6bnVsbCwiX2V2ZW50cyI6e30sIl9ldmVudHNDb3VudCI6MCwiX21heExpc3RlbmVycyI6MH19LCJpc05ldyI6ZmFsc2UsIl9kb2MiOnsibmFtZSI6IlJlc3RyeSIsImVtYWlsIjoicUBxLmNvbSIsIl9pZCI6IjU4NTJjYmRmYjdkZDkzMjI2NTc0MTIyNiJ9LCJfcHJlcyI6eyIkX19vcmlnaW5hbF9zYXZlIjpbbnVsbCxudWxsXSwiJF9fb3JpZ2luYWxfdmFsaWRhdGUiOltudWxsXSwiJF9fb3JpZ2luYWxfcmVtb3ZlIjpbbnVsbF19LCJfcG9zdHMiOnsiJF9fb3JpZ2luYWxfc2F2ZSI6W10sIiRfX29yaWdpbmFsX3ZhbGlkYXRlIjpbXSwiJF9fb3JpZ2luYWxfcmVtb3ZlIjpbXX0sImlhdCI6MTQ4MjczODY4NywiZXhwIjoxNDgyNzk4Njg3fQ.F2_qBA1gG66G3uGc06Qo5GgeM-PqxvqiyuGX9cNZLt8' }
    };
    const app = {
      get: () => { return 'thupers3crT$12'; }
    };
    return loadInfo(req, null, app).then(data => {
      // console.log(data);
      expect(data.requests.length).to.gt(0);
      done();
    }).catch((err) => {
      console.dir(err);
      done();
    });
  });
});
