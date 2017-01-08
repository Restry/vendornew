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
  item: {
    billInfo: {
      type: '远程付款单（由商户远程付款）',
      brushType: '全程电脑刷单',
      taskGap: '做过这个店铺的单子的，15天以内不可以重复做！',
      areaLimit: '不限制',
      smallAccount: '买家累积信用3心以上，一星期内交易量不超过7笔，一个月内交易量不超过15笔。',
      acceptRequire: '必须按物流收货，物流没有到一律禁止提前收货！收到货后2天后再好评！好评内容自由发挥即可！'
    },
    searchWay: {
      type: '用淘宝搜索或其它？',
      keyWords: '输入你宝贝的搜索关键字',
      filterType: '自然搜索，禁止筛选',
      wangwang: '你的旺旺号是多少？',
      price: '宝贝价格？',
      screenshots: ''
    },
    buyWay: {
      browse: '做单过程需要全程截图。货比三家后再进店，货比时每家店铺浏览3分钟以上。货比三家完成后，需要浏览店铺宝贝2-5款。收藏店铺和收藏宝贝（双收藏）。',
      fakeChat: '可以随便问，以正常买家问题提问就可以5个问题以上就可以',
      count: '只拍一个宝贝'
    },
    favorableWay: {
      checkTime: '查看物流是否显示已签收，如果已签收，则可以签收评价。否则禁止提前！提前收货的一律黑名单处理！',
      fav: '自由发挥',
      favAgain: '自由发挥'
    },
  }
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
        requests: action.result || [],
        item: {}
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
    promise: (client) => client.post('/request/confirmVendor?bid=' + _id, { data: { ...vendor } })
  };
};


export const detail = (_id) => {
  return {
    types: [LOAD, DETAIL_SUCCESS, LOAD_FAIL],
    promise: (client) => client.get('/request/load?bid=' + _id)
  };
};

export const race = (_id) => {
  return {
    types: [LOAD, RACE_SUCCESS, LOAD_FAIL],
    promise: (client) => client.get('/request/race?bid=' + _id)
  };
};

export function remove(request) {
  return {
    types: [REMOVE, REMOVE_SUCCESS, REMOVE_FAIL],
    promise: (client) => client.get(`/request/remove?bid=${request._id}`)
  };
}
