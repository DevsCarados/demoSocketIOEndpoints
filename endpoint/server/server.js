import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { endpoint1, notifyTheClientOSBAnswer }from './api/actions/test';
import socketIO from 'socket.io';

const PORT = process.env.PORT;
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false, limit: '10000mb' }));
app.use(bodyParser.json({ limit: '10000mb' }));

app.post('/endpoint1', endpoint1);

app.post('/endpointUpdateFrontEndClient', notifyTheClientOSBAnswer);


const server = app.listen(PORT, () => {
  console.log(`Running endpoint in PORT => ${PORT}`);
});

const io = socketIO(server);
app.set('socketio', io);
