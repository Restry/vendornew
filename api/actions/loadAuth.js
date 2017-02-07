import auth from '../utils/auth';
import { User, Request } from './dbSchema';

export default function loadAuth(req, pars, app) {
  return auth(req, app).then((result) => {
    if (result) {
      return User.findOne({
        email: result._doc.email
      }).select('_id email name myBills').exec();
    }
    return null;
  }).then((user, err) => {
    if (err) return Promise.reject(err);
    const bids = [];
    user.myBills.map((item) => {
      bids.push(item.bid);
    });
    return Promise.all([
      Promise.resolve(user),
      Request.where('bid').in(bids).sort('-created').exec(),
      Request.find({
        $or: [{ 'vendor.email': user.email },
        { 'creator': user.email }]
      }).sort('-created').exec()
    ]);
  });
}
