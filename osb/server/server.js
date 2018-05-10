import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { endpointOSB15seconds }from './api/actions/test';
import io from 'socket.io';

const PORT = process.env.PORT;
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false, limit: '10000mb' }));
app.use(bodyParser.json({ limit: '10000mb' }));

app.post('/endpointOSB15seconds', endpointOSB15seconds);

app.listen(PORT, () => {
  console.log(`Running OSB in PORT => ${PORT}`);
});
