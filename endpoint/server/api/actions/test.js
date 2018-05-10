import axios from 'axios';
import { sleep } from 'sleep';


export const endpoint1 = (req, res) => {
    console.log('ENDPOINT 1, recibe request del FRONTEND y luego llama al OSB');
    const io = req.app.get('socketio');
    console.log('LLAMADA AL OSB, parte 1');
    
    axios.post('http://localhost:5000/endpointOSB', {idTransaction: req.body.idTransaction}  ).then(result => {
    //   io.sockets.emit('secondData', result.data);
        console.log('PRIMERA RESPUESTA, el OSB responde ACK');
    });
    sleep(5);
    return res.send(JSON.stringify({ consumeThis : 'OSB respondio el ACK correctamente.' }));
};


export const notifyTheClientOSBAnswer = (req, result) => {
    console.log('this will send the response to the session io on the socket.io from client');
    console.log(req.body);
    const io = req.app.get('socketio');
    io.sockets.emit('secondData', req.body);
};