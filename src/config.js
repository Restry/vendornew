require('babel-polyfill');

const environment = {
  development: {
    isProduction: false
  },
  production: {
    isProduction: true
  }
}[process.env.NODE_ENV || 'development'];

module.exports = Object.assign({
  host: process.env.HOST || 'localhost',
  port: process.env.PORT || 8001,
  apiHost: process.env.APIHOST || 'localhost',
  apiPort: process.env.APIPORT || 3030,
  db: 'mongodb://cbt:Chengbt2016@usa.chengbt.com/chengbt',
  categories: [
    { title: '天猫', class: 'tmall', text: '天猫', value: 'tmall' },
    { title: '淘宝', class: 'taobao', text: '淘宝', value: 'taobao' }
  ],
  app: {
    title: '诚宝通',
    description: 'All the modern best practices in one example.',
    head: {
      titleTemplate: '诚宝通: %s',
      meta: [
        { name: 'description', content: 'All the modern best practices in one example.' },
        { charset: 'utf-8' },
        { property: 'og:site_name', content: '诚宝通' },
        { property: 'og:image', content: 'https://react-redux.herokuapp.com/logo.jpg' },
        { property: 'og:locale', content: 'zh-CN' },
        { property: 'og:title', content: '诚宝通' },
        { property: 'og:description', content: 'All the modern best practices in one example.' },
        { property: 'og:card', content: 'summary' },
        { property: 'og:site', content: '@erikras' },
        { property: 'og:creator', content: '@erikras' },
        { property: 'og:image:width', content: '200' },
        { property: 'og:image:height', content: '200' }
      ]
    }
  },

}, environment);
