const mongoose = require('mongoose');
const Schema = mongoose.Schema;
import moment from 'moment';
moment.locale('zh-CN');
import { mock, Random } from 'mockjs';
import autoIncrement from 'mongoose-auto-increment';   // 自增ID 模块
autoIncrement.initialize(mongoose.connection);


// email, pwd are required
// email must be unique
// don't send password with requests
const userSchema = new Schema({
  'email': { type: String, required: true, unique: true },
  'password': { type: String, required: true, select: false },
  'admin': Boolean,
  'prefix': String,
  'acceptCount': Number,
  'needsCount': Number,
  'name': String,
  'safeCode': String,
  'phone': String,
  'captcha': String,
  'points': Number, // 我的点数
  'agreement': Boolean
});

const requestSchema = new Schema({
  'title': { type: String, required: true },
  'category': { type: String, required: true },
  'type': String, // 招标单 还是直接下单（不投入精力来比对哪一家的钱更少）
  'notes': String,
  'process': Number,
  'states': { type: String, required: true },
  'vendor': Object, // 接标人
  'order': Number,
  'price': Number,

  'billInfo': Object,
  'searchWay': Object,
  'buyWay': Object,
  'favorableWay': Object,

  'points': Number, // 任务点数
  'creator': String,
  'raceVendors': Array, // 所有竟标人
  'created': { type: Date, required: true },
  'modifed': Date,
  'raceDay': Number, // 发标人设置的竟标时间
  'completeTime': Date,
  'raceTime': Date, // 开始竟标时间
  'acceptTime ': Date
});

requestSchema.plugin(autoIncrement.plugin, {               // 自增ID配置
  model: 'Request',
  field: 'bid',
  startAt: 1000000,
  incrementBy: 1
});

requestSchema.virtual('leftRaceDay').get(function () {
  if (this.raceTime) {
    return moment(this.raceTime).toNow();  // 多久之内      fromNow 多久之前
  }
  return null;
});


const informationSchema = new Schema({
  'enterprise': Number,
  'services': Number,
  'designer': Number,
  'totalAmount': Number,
  'searchHistory': Array,
  'lastModify': Date
});
informationSchema.virtual('expired').get(function () {
  return moment(this.lastModify).add(1, 'minute') < (new Date());
});


// informationSchema.methods.getSiteInfo = (cb) => {
//   return this.model('Information').find({ type: this.type }, cb);
// }
// 静态方法，直接在类上引用
informationSchema.statics.getSiteInfo = function () {
  // console.log('Begin test loadinfo getSiteInfo');

  const createOrUpdate = (item) => {
    if (!item) {
      const InfoModel = mongoose.model('Information', informationSchema);
      item = new InfoModel({
        enterprise: 1,
        services: 1,
        designer: 1,
        totalAmount: 1,
        searchHistory: [],
        lastModify: new Date()
      });

      return new Promise(resolve => {
        item.save((err, res) => {
          resolve(res);
        });
      });
    }
    if (item.expired) {
      item.enterprise += parseInt(Math.random() * 10);
      item.services += parseInt(Math.random() * 50);
      item.designer += parseInt(Math.random() * 50);
      item.totalAmount += parseInt(Math.random() * 1000);
      item.lastModify = new Date();
      item.searchHistory = mock({ 'data|3-6': [() => { return Random.cname(); }] }).data;

      return new Promise(resolve => {
        item.save((err, res) => {
          resolve(res);
        });
      });
    }
    return Promise.resolve(item);
  };

  return new Promise(resolve => {
    // resolve('nice');
    this.findOne({}, (err, info) => {
      // console.error('error:' + JSON.stringify(err));
      createOrUpdate(info).then(resolve);
    });
  });
};



const User = mongoose.model('User', userSchema);
const Request = mongoose.model('Request', requestSchema);
const Information = mongoose.model('Information', informationSchema);

export default { User, Request, Information };
