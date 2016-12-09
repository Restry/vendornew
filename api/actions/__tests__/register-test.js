import { expect } from 'chai';
import register from '../register';
require('./enableConnection');

describe('注册测试', () => {
  it('注册成功', () => {
    const postUser = {
      body: {
        email: 'test01@qq.com',
        name: 'test-01',
        password: 'testpassword=01'
      },
      session: {}
    };
    const app = {
      get: (par) => {
        return 'key' + par;
      }
    };
    register(postUser, null, app).then((res) => {
      expect(res.success).to.eq(true);
    });
  });
});
