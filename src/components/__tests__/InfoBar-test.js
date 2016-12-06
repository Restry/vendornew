import React from 'react';
import ReactDOM from 'react-dom';
import {renderIntoDocument} from 'react-addons-test-utils';
import { expect} from 'chai';
import { InfoBar } from 'components';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router';
import createStore from 'redux/create';
import ApiClient from 'helpers/ApiClient';
const client = new ApiClient();

describe('InfoBar', () => {
  const mockStore = {
    info: {
      load: () => {},
      loaded: true,
      loading: false,
      data: {
        enterprise: 1,
        services: 1,
        designer: 1,
        totalAmount: 1,
        lastModify: Date.now()
      }
    }
  };
  const store = createStore(browserHistory, client, mockStore);
  const renderer = renderIntoDocument(
    <Provider store={store} key="provider">
      <InfoBar/>
    </Provider>
  );
  const dom = ReactDOM.findDOMNode(renderer);

  it('should render correctly', () => {
    return expect(renderer).to.be.ok;
  });

  it('should render with correct value', () => {
    const text = dom.getElementsByTagName('div')[0].textContent;
    console.log(text);
    expect(text).to.equal(mockStore.info.data.enterprise);
  });

  it('should render with a reload button', () => {
    const text = dom.getElementsByTagName('button')[0].textContent;
    expect(text).to.be.a('string');
  });

});
