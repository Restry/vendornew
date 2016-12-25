import { Information, Request } from './dbSchema';
import  auth from '../utils/auth';
// ('vendor.email').equals(user.email).or
export default function loadInfo(req, params, app, res) {
  console.log(req.cookies);
  let currentInfo = {success: true, info:{}, requests:[]};
  return new Promise(function (resolve, reject) {
    Information.getSiteInfo().then((result) => {
      currentInfo.info = result;
      return auth(req, app);
    }).then((user)=>{
      if (!user){
        resolve(currentInfo);
        return null;
      }
      return Request.where('creator').equals(user.email).sort('-created').exec();
    }).then((items)=>{
      currentInfo.requests = items;
      resolve(currentInfo);
    }).catch(err=>{
      return Promise.reject(err);
    });
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
