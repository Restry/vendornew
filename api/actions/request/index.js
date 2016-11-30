import { Request } from '../dbSchema';

export const get = (req, pars, app) => {

  console.log(`request get: ${req.body}`)
  return Promise.resolve(req.body);
};

export const post = (req, pars, app) => {

  console.log(`request post: ${req.body}`)
  return Promise.resolve(req.body);
};

export const remove = (req, pars, app) => {

  console.log(`request remove: ${req.body}`)
  return Promise.resolve(req.body);
};