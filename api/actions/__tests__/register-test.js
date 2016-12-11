import { expect } from 'chai';
import register from '../register';
// require('./enableConnection');

describe('注册测试', () => {
  it('注册成功', (done) => {
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
      expect(res.success).eq(true);
      done();
    }, (res) => {
      console.log(`register:${res}`);
      expect(res.success).eq(false);
      done();
    });
  });
});
