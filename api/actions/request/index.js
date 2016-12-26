import { Request } from '../dbSchema';
import moment from 'moment';
moment.locale('zh-CN');
import auth from '../../utils/auth';

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
    if (result) {
      return Request.findOne(req.query).exec();
    }
    return Promise.reject({ success: false, msg: '用户未登陆！' });
  }).then((request, err) => {
    if (err) return Promise.reject(err);

    const currentUser = req.decodeToken._doc;
    request.raceTime = new Date();
    currentUser.raceTime = new Date();
    request.raceVendors.push(currentUser);
    return request.save();
  }).then((saveErr) => {
    if (saveErr) Promise.reject(saveErr);
    return {
      success: true
    };
  });
};

export const post = (req, pars, app) => {
  // console.log(`request post: ${JSON.stringify(req.body)}`);
  const { request } = req.body;
  request.created = req.body.created || (new Date()).toLocaleString();
  request.states = req.body.states || '招标中';
  request.raceDay = request.raceDay || 10;
  request.vendor = { email: '' };

  return auth(req, app).then((result) => {
    if (result) {
      request.creator = result._doc.email;
      const newRequest = new Request(request);
      return newRequest.save();
    }
    return Promise.reject({ success: false, msg: '用户未登陆！' });
  }).then((item, err) => {
    if (err) return Promise.reject(err);
    return ({
      success: true,
      message: 'Successfully added!'
    });
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
    if (result) {
      return Request.findOne(req.query).exec();
    }
    return Promise.reject({ success: false, msg: '用户未登陆！' });
  }).then((request, err) => {
    if (err) return Promise.reject(err);
    request.vendor = req.body;
    return request.save();
  }).then((saveErr) => {
    if (saveErr) Promise.reject(saveErr);
    return {
      success: true
    };
  });
};
