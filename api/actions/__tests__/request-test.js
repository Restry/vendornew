import { expect } from 'chai';
import { request } from '../index';

describe('提交需求测试', () => {
  it('提交成功', () => {
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
    request.post(postData, null, null).then((res) => {
      expect(res.success).to.be.true();
    });
  });

  it('获取微信需求', () => {
    request.load({ query: { category: 'wechat' } }).then((res) => {
      // console.log(`all wechat list : ${JSON.stringify(res)}`);
      expect(res.length).to.be.eq(0);
      expect(res[0].race).to.not.null();
      res[0].race(res[0]._id, { user: 'restry' })
      .then((raceResult) => {
        expect(raceResult.raceVendors.length).to.gt(0);
      });
    });
  });
});

