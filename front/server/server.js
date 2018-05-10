import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';

const PORT = process.env.PORT;

const app = express();

app.use(bodyParser.urlencoded({ extended: false, limit: '10000mb' }));
app.use(bodyParser.json({ limit: '10000mb' }));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname+'/index.html'));
});

app.listen(PORT, () => {
  console.log(`Running and serving a webpage in PORT => ${PORT}`);
});
