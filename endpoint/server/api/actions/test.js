import axios from 'axios';
import { sleep } from 'sleep';
export const endpointWithTimeout10seconds = (req, res) => {
    console.log('this will takes around 10 seconds');
    const io = req.app.get('socketio');

    axios.post('http://localhost:5000/endpointOSB15seconds').then(result => {
      io.sockets.emit('secondData', result.data);
    });
    sleep(10);
    return res.send(JSON.stringify({ consumeThis : 'Light Yagami' }));
};
