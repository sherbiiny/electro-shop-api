import express from 'express';
import chalk from 'chalk';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World');
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('listening on:', chalk.cyan(`http://localhost:${port}`));
});