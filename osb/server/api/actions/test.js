import { sleep } from 'sleep';
import axios from 'axios';

export const endpointOSB15seconds = (req, res) => {
  console.log('EL OSB recibe el primer request.');
  sleep(2);


  console.log('Llamada asincrona al segundo endpoint');
  setTimeout(() => {
    console.log('LLAMANDO al segundo endpoint, para informarle que la respuesta ya ha sido obtenida.');
    var respuesta = 'CLIENTE PORTABILIDAD' + Math.random();
    console.log(req.body.idTransaction);
    console.log('INCIA LLAMADA al SEGUNDO ENDPOINT.');
    
    axios.post('http://localhost:3000/endpointUpdateFrontEndClient', {data: respuesta, idTransaction: req.body.idTransaction});
  }, 5000);
  
  return res.send(JSON.stringify({ dataFromOSB : 'ACK, OSB conforme con primer request.' }));
};
