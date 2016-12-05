const mongoose = require('mongoose');
const Schema = mongoose.Schema;
import moment from 'moment';
moment.locale('zh-CN');

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
  'residence': Array,
  'phone': String,
  'captcha': String,
  'agreement': Boolean
});

const requestSchema = new Schema({
  'title': { type: String, required: true },
  'category': { type: String, required: true },
  'notes': { type: String, required: true },
  'process': Number,
  'states': { type: String, required: true },
  'vendor': String,
  'order': Number,
  'creator': String,
  'created': { type: Date, required: true },
  'modifed': Date,
  'completeTime': Date,
  'acceptTime ': Date
});

const informationSchema = new Schema({
  'enterprise': Number,
  'services': Number,
  'designer': Number,
  'totalAmount': Number,
  'lastModify': Date
});
informationSchema.virtual('expired').get(function () {
  return moment(this.lastModify).add(1, 'minute') < (new Date());
});


// informationSchema.methods.getSiteInfo = (cb) => {
//   return this.model('Information').find({ type: this.type }, cb);
// }

informationSchema.statics.getSiteInfo = function () {
  const createOrUpdate = (item) => {
    if (!item) {
      const InfoModel = mongoose.model('Information', informationSchema)
      item = new InfoModel({
        enterprise: 1,
        services: 1,
        designer: 1,
        totalAmount: 1,
        lastModify: new Date()
      });
    }
    if (item.expired) {
      item.enterprise += parseInt(Math.random() * 10);
      item.services += parseInt(Math.random() * 50);
      item.designer += parseInt(Math.random() * 50);
      item.totalAmount += parseInt(Math.random() * 1000);
      item.lastModify = new Date();
      return new Promise(resolve => {
        item.save((err, res) => {
          resolve(res);
        });
      })
    }
    return Promise.resolve(item);
  };

  return new Promise(resolve => {
    this.findOne({}, (err, info) => {
      createOrUpdate(info).then(resolve);
    });
  });
};



const User = mongoose.model('User', userSchema);
const Request = mongoose.model('Request', requestSchema);
const Information = mongoose.model('Information', informationSchema);

export default { User, Request, Information };
