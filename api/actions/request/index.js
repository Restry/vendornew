import { Request } from '../dbSchema';

export const load = (req, pars) => {
  console.log(`request load: ${req.body}`);
  return Request.find({}).exec();

  // return new Promise((resolve, reject) => {
  //   Request.find({}).select('_id title category note').exec().then((requests) => {
  //     resolve(requests);
  //   });
  // });
  // return Promise.resolve(req.body);
};

export const post = (req, pars, app) => {

  console.log(`request post: ${JSON.stringify(req.body)}`);

  const { request } = req.body;
  request.created = (new Date()).toLocaleString();
  request.completeTime = (new Date()).toLocaleString();
  request.states = 1;

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


  // return Promise.reject('any reason to reject by promise test :) ! ');
  // return Promise.resolve(req.body);
};

export const remove = (req, pars, app) => {

  console.log(`request remove: ${req.body}`)
  return Promise.resolve(req.body);
};