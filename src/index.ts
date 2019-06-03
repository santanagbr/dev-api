import 'reflect-metadata';
import app from './api/app';

const port = 8080;

app.listen(
    port,
  () => console.log(`Listening on port ${port}.`),
);
