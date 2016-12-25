import { Request } from '../dbSchema';
import moment from 'moment';
moment.locale('zh-CN');

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
export const race = (req, pars) => {
  if (!req.session.user) {
    return Promise.reject({ success: false, msg: '用户未登陆！' });
  }
  return new Promise((resolve, reject) => {
    Request.findOne(req.query).exec().then((request, err) => {

      if (err) reject(err);
      const currentUser = req.session.user;
      request.raceTime = new Date();
      currentUser.raceTime = new Date();
      request.raceVendors.push(currentUser);

      // console.log(`query:${JSON.stringify(req.query)}，request：${JSON.stringify(request)},err:${JSON.stringify(err)}`);
      request.save((saveErr) => {
        console.log('save ok?:' + JSON.stringify(saveErr));
        if (saveErr) reject(saveErr);
        resolve(request);
      });
    });
  });

};

export const post = (req, pars, app) => {
  // console.log(`request post: ${JSON.stringify(req.body)}`);
  if (!req.session.user) {
    return Promise.reject({ success: false, msg: '用户未登陆！' });
  }

  const { request } = req.body;
  request.created = req.body.created || (new Date()).toLocaleString();
  request.states = req.body.states || '招标中';
  request.raceDay = request.raceDay || 10;
  request.creator = req.session.user.email;
  const newRequest = new Request(request);

  return new Promise((resolve, reject) => {
    newRequest.save((err) => {
      if (err) reject(err);
      resolve({
        success: true,
        message: 'Successfully added!'
      });
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
