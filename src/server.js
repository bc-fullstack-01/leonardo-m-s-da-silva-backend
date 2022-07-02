import fs from 'fs';
import path from 'path';
import express from 'express';
const app = express();

const port = 4000;

app.get('/', (req, res) => {
  const __dirname = path.resolve('src');
  const pathDir = path.join(__dirname, 'static', 'index.html');
  const content = fs.readFileSync(pathDir, 'utf-8');
  res.send(content);
});

app.listen(port, () =>
  console.log(`Server listen on http://localhost:${port}`)
);
