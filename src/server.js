import path from 'path';
import express from 'express';
const app = express();
import { routes } from './routes';

const __dirname = path.resolve('src');

const port = 4000;

app.use('/', express.static(__dirname + '/static'));

app.use(express.json());
app.use(routes);

app.listen(port, () =>
  console.log(`Server listen on http://localhost:${port}`)
);
