import { expect } from 'chai';
import Login from '../login';
require('./enableConnection');

describe('登陆测试', () => {
  it('登陆成功', () => {
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
      expect(res.success).to.true();
      expect(res.user).to.be.not.null();
    });
  });

  it('登陆失败', () => {
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
      expect(res.success).to.false();
      expect(res.user).to.be.null();
    });
  });
});
