import { sleep } from 'sleep';

export const endpointOSB15seconds = (req, res) => {
  console.log('this will takes around 15 seconds');
  sleep(15);
  return res.send(JSON.stringify({ dataFromOSB : '123456' }));
};
