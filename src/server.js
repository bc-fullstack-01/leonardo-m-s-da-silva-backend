import path from 'path';
import express from 'express';
const app = express();

const __dirname = path.resolve('src');

const port = 4000;

app.use('/', express.static(__dirname + '/static'));

app.listen(port, () =>
  console.log(`Server listen on http://localhost:${port}`)
);
