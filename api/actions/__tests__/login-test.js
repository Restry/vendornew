import { expect } from 'chai';
import Login from '../login';
// require('./enableConnection');

describe('登陆测试', () => {
  it('登陆成功', (done) => {
    const postUser = {
      body: {
        email: 'test01@qq.com',
        password: 'testpassword=01'
      },
      session: {}
    };
    const app = {
      get: (par) => {
        return 'key' + par;
      }
    };
    Login(postUser, null, app).then((res) => {
      console.log(`res.success:${res.success}`);
      expect(res.success).eq(true);
      // expect(res.user).to.be.not.null();
      done();
    }, (res) => {
      console.log(`login resulst:${JSON.stringify(res)}`);
      expect(res.success).to.true();
      done();
    });
  });

  it('登陆失败', (done) => {
    const postUser = {
      body: {
        email: 'test01@qq.com',
        password: 'wrongpwd=01'
      },
      session: {}
    };
    const app = {
      get: (par) => {
        return 'key' + par;
      }
    };
    Login(postUser, null, app).then((res) => {
      expect(res.success).eq(false);
      // e xpect(res.user).eq(null);
      done();
    }, (res) => {
      expect(res.success).eq(false);
      // expect(res.user).eq(null);
      done();
    });
  });
});
