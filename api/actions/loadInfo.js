import { Information } from './dbSchema';

export default function loadInfo() {
      console.log('Begin test loadinfo component');

  return Information.getSiteInfo();

  // return new Promise((resolve) => {
  //   resolve({
  //     message: 'This came from the api server',
  //     time: Date.now()
  //   });
  // });
}
