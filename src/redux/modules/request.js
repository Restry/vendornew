const LOAD = 'redux-example/request/LOAD';
const LOAD_SUCCESS = 'redux-example/request/LOAD_SUCCESS';
const LOAD_FAIL = 'redux-example/request/LOAD_FAIL';
const ADD = 'redux-example/request/ADD';
const ADD_SUCCESS = 'redux-example/request/ADD_SUCCESS';
const ADD_FAIL = 'redux-example/request/ADD_FAIL';
const REMOVE = 'redux-example/request/REMOVE';
const REMOVE_SUCCESS = 'redux-example/request/REMOVE_SUCCESS';
const REMOVE_FAIL = 'redux-example/request/REMOVE_FAIL';

const initialState = {
  loaded: false
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
    default:
      return state;
  }
}

export function load() {
  return {
    types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
    promise: (client) => client.get('/request')
  };
}

export function add(request) {
  return {
    types: [ADD, ADD_SUCCESS, ADD_FAIL],
    promise: (client) => client.post('/request', {
      data: {
        request
      }
    })
  };
}

export function remove(request) {
  return {
    types: [REMOVE, REMOVE_SUCCESS, REMOVE_FAIL],
    promise: (client) => client.get(`/request/remove?id=${request._id}`)
  };
}
