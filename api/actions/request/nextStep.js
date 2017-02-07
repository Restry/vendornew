import { Request, User } from '../dbSchema';
import moment from 'moment';
moment.locale('zh-CN');
import auth from '../../utils/auth';

export const nextStep = (req, pars, app) => {

  return auth(req, app).then((result) => {
    if (result) {
      request.creator = result._doc.email;
      const newRequest = new Request(request);
      return newRequest.save();
    }
    return Promise.reject({ success: false, msg: '用户未登陆！' });
  }).then((item, err) => {
    if (err) return Promise.reject(err);
    return Request.find({}).sort('-created').exec();
  });

}