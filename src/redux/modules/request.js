const LOAD = 'chengbt-platform/request/LOAD';
const LOAD_SUCCESS = 'chengbt-platform/request/LOAD_SUCCESS';
const LOAD_FAIL = 'chengbt-platform/request/LOAD_FAIL';
const ADD = 'chengbt-platform/request/ADD';
const ADD_SUCCESS = 'chengbt-platform/request/ADD_SUCCESS';
const ADD_FAIL = 'chengbt-platform/request/ADD_FAIL';
const REMOVE = 'chengbt-platform/request/REMOVE';
const REMOVE_SUCCESS = 'chengbt-platform/request/REMOVE_SUCCESS';
const REMOVE_FAIL = 'chengbt-platform/request/REMOVE_FAIL';

const DETAIL_SUCCESS = 'chengbt-platform/request/DETAIL_SUCCESS';
const RACE_SUCCESS = 'chengbt-platform/request/RACE_SUCCESS';
const CONFIRM_VENDOR_SUCCESS = 'chengbt-platform/request/CONFIRM_VENDOR_SUCCESS';

const initialState = {
  loaded: false,
  requests: [],
  categories: [{ title: '微信', class: 'wechat' }, { title: '淘宝', class: 'taobao' }],
  item: {}
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD:
      return {
        ...state,
        loading: true
      };
    case LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        requests: action.result
      };
    case LOAD_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        error: action.error
      };
    case ADD:
      return {
        ...state,
        adding: true
      };
    case ADD_SUCCESS:
      return {
        ...state,
        adding: false,
        requests: action.result
      };
    case ADD_FAIL:
      return {
        ...state,
        adding: false,
        requests: null,
        addError: action.error
      };
    case REMOVE:
      return {
        ...state,
        removing: true
      };
    case REMOVE_SUCCESS:
      return {
        ...state,
        removing: false,
        requests: action.result
      };
    case REMOVE_FAIL:
      return {
        ...state,
        removing: false,
        removeError: action.error
      };


    case DETAIL_SUCCESS:
      return {
        ...state,
        loading: false,
        item: action.result[0]
      };

    case RACE_SUCCESS:
      return {
        ...state,
        loading: false,
        item: action.result
      };

    case CONFIRM_VENDOR_SUCCESS:
      return {
        ...state,
        loading: false,
        success: action.result.success
      };
    default:
      return state;
  }
}

export function load(category) {
  return {
    types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
    promise: (client) => client.get('/request/load?category=' + category)
  };
}

export function add(request) {
  return {
    types: [ADD, ADD_SUCCESS, ADD_FAIL],
    promise: (client) => client.post('/request/post', {
      data: {
        request
      }
    })
  };
}

export const confirmVendor = (_id, vendor) => {
  return {
    types: [LOAD, CONFIRM_VENDOR_SUCCESS, LOAD_FAIL],
    promise: (client) => client.post('/request/confirmVendor?_id=' + _id, { data: { ...vendor } })
  };
};


export const detail = (_id) => {
  return {
    types: [LOAD, DETAIL_SUCCESS, LOAD_FAIL],
    promise: (client) => client.get('/request/load?_id=' + _id)
  };
};

export const race = (_id) => {
  return {
    types: [LOAD, RACE_SUCCESS, LOAD_FAIL],
    promise: (client) => client.get('/request/race?_id=' + _id)
  };
};

export function remove(request) {
  return {
    types: [REMOVE, REMOVE_SUCCESS, REMOVE_FAIL],
    promise: (client) => client.get(`/request/remove?id=${request._id}`)
  };
}
