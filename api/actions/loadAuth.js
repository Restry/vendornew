import auth from '../utils/auth';
import { User } from './dbSchema';

export default function loadAuth(req, pars, app) {
  return auth(req, app).then((result) => {
    if (result) {
      return User.findOne({
        email: result._doc.email
      }).select('_id email name myBills').exec();
    }
    return null;
  });
}
