import { Request, User } from '../dbSchema';
import moment from 'moment';
moment.locale('zh-CN');
import auth from '../../utils/auth';
// import { loadInfo } from '../index';


export const load = (req, pars) => {
  // console.log('load in');
  // console.log(`Request req.query: ${JSON.stringify(req.query)}`);
  return Request.find(req.query).sort('-created').exec();

  // return new Promise((resolve, reject) => {
  //  // setTimeout(() => {
  //     Request.find(req.query).exec().then((requests) => {
  //       resolve(requests);
  //     });
  //  // }, 500);
  // });
};
export const race = (req, pars, app) => {
  return auth(req, app).then((result) => {
    if (result.success) {
      // console.log(result._doc.email);
      return Promise.all([
        Request.findOne(req.query).exec(),
        User.findOne({ email: result._doc.email }).exec()]);
    }
    return Promise.reject({ success: false, msg: '用户未登陆！' });
  }).then((results, err) => {
    if (err) return Promise.reject(err);
    const request = results[0];
    const user = results[1];

    const raceUser = req.decodeToken._doc;
    request.raceTime = new Date();
    raceUser.raceTime = new Date();
    raceUser.process = 1;

    user.myBills = user.myBills || [];
    user.myBills.push({ bid: request.bid, title: request.title, process: 1 });

    request.raceVendors.push(raceUser);
    return Promise.all([request.save(), user.save()]);
  }).then((saveErr) => {
    if (saveErr) Promise.reject(saveErr);
    return Request.find({}).sort('-created').exec();
  });
};

export const post = (req, pars, app) => {
  // console.log(`request post: ${JSON.stringify(req.body)}`);
  const { request } = req.body;
  request.created = req.body.created || (new Date()).toLocaleString();
  request.states = req.body.states || '招标中';
  request.raceDay = request.raceDay || 10;
  request.vendor = { email: '' };
  request.raceVendors = [];

  return auth(req, app).then((result) => {
    if (result.success) {
      request.creator = result._doc.email;
      const newRequest = new Request(request);
      return newRequest.save();
    }
    return Promise.reject({ success: false, msg: '用户未登陆！' });
  }).then((item, err) => {
    if (err) return Promise.reject(err);
    return Request.find({}).sort('-created').exec();
  });
};

export const remove = (req, pars, app) => {
  return new Promise((resolve, reject) => {
    Request.remove(req.query, (err, res) => {
      if (err) reject(err);
      resolve(res);
    });
  });
};

export const confirmVendor = (req, pars, app) => {


  return auth(req, app).then((result) => {
    if (result.success) {
      return Request.findOne(req.query).exec();
    }
    return Promise.reject({ success: false, msg: '用户未登陆！' });
  }).then((request, err) => {
    if (err) return Promise.reject(err);
    request.vendor = req.body;

    let email = req.body.email;
    email = email || req.decodeToken._doc.email;

    // console.log(req.decodeToken._doc);

    const vendor = request.raceVendors.filter((item) => item.email === email)[0];
    vendor.process = vendor.process + 1;

    request.markModified('raceVendors');
    return request.save();
  }).then((item, saveErr) => {
    // console.log(JSON.stringify(item));
    if (saveErr) Promise.reject(saveErr);
    return Request.find({
      $or: [{ 'vendor.email': req.decodeToken._doc.email },
      { 'creator': req.decodeToken._doc.email }]
    }).sort('-created').exec();
  });
};

// export nextStep from './nextStep'
