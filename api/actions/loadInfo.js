import { Information, Request } from './dbSchema';
import auth from '../utils/auth';
// ('vendor.email').equals(user.email).or
export default function loadInfo(req, params, app, res) {
  // console.log(req.cookies);
  const returnObj = { success: true, info: {}, requests: [] };

  return Information.getSiteInfo().then((result) => {
    returnObj.info = result;
    return auth(req, app);
  }).then((user) => {
    if (!user) {
      return [];
    }
    console.log(user._doc.email);
    return Request.find({ $or: [{ 'vendor.email': user._doc.email }, { 'creator': user._doc.email }] })
      .sort('-created').exec();
  }).then((items) => {
    returnObj.requests = items;
    return returnObj;
  });

  // return new Promise((resolve) => {
  //   Information.getSiteInfo().then((res) => {
  //     const { user } = req.session;
  //     if (user) {
  //       console.log(user.email);
  //       Request.where('creator').equals(user.email).sort('-created').exec().then((items) => {
  //         resolve({
  //           success: true,
  //           info: res,
  //           requests: items
  //         });
  //       });
  //     }else {
  //       resolve({
  //         success: true,
  //         info: res,
  //         requests: []
  //       });
  //     }
  //   });
  // });
}

