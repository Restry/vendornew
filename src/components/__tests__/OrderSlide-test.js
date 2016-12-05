import React from 'react';
import ReactDOM from 'react-dom';
import { renderIntoDocument } from 'react-addons-test-utils';
import { expect } from 'chai';
import { OrderSlide } from 'components';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router';
import createStore from 'redux/create';
import ApiClient from 'helpers/ApiClient';
const client = new ApiClient();

describe('OrderSlide', () => {
  const mockStore = {
    info: {
      load: () => { },
      loaded: true,
      loading: false,
      categoryOfRequestOrders: [{ title: '1111' }, { title: '2222' }]
    }
  };
  const store = createStore(browserHistory, client, mockStore);
  const renderer = renderIntoDocument(
    <Provider store={store} key="provider">
      <OrderSlide />
    </Provider>
  );
  const dom = ReactDOM.findDOMNode(renderer);

  it('是否显示成功', () => {
    return expect(renderer).to.be.ok;
  });

  it('should render with correct value', () => {
    const text = dom.getElementsByTagName('div')[0].textContent;
    console.log(text);
    expect(text).to.equal(mockStore.info.categoryOfRequestOrders[0].title);
  });

  it('类别应该显示出来', () => {
   console.log( dom.getElementsByClassName('clearfixfix')[0].textContent);
    const allCategories = dom.getElementsByTagName('ul')[0].childNodes;
    expect(allCategories).to.be.a('object');
  });

});
