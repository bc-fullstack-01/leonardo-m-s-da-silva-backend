import path from 'path';
import express from 'express';
export const app = express();
import { routes } from './routes';

const __dirname = path.resolve('src');

app.use('/', express.static(__dirname + '/static'));

app.use(express.json());
app.use(routes);
