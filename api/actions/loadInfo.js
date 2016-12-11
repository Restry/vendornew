import { Information } from './dbSchema';

export default function loadInfo() {
  return Information.getSiteInfo();
  // return new Promise((resolve) => {
  //   resolve({
  //     message: 'This came from the api server',
  //     time: Date.now()
  //   });
  // });
}
