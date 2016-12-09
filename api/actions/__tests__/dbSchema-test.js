import { expect } from 'chai';
import { Information } from '../dbSchema';

describe('Information Schema Tests', () => {
  it('搜索项大于1', () => {
    const info = new Information();
    expect(info.searchHistory.length).to.eq(0);
  });
});
