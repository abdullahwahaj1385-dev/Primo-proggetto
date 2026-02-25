import express from 'express';
import type { Request, Response } from 'express';
import { sottrazione } from './lib/sottrazione.js';
import { somma } from './lib/somma.js';
import { multiplicazione } from './lib/multiplicazione.js';
import { Divisione } from './lib/Divisione.js';

const app = express();
const port = 3000;

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.get('/abdullah', (req: Request, res: Response) => {
  res.send('Ciao sono abdu');
});

app.get('/somma', (req: Request, res: Response) => {
  const num1 = Number(req.query.num1) || 0;
  const num2 = Number(req.query.num2) || 0;
  res.send(somma(num1, num2))
});

app.get('/sottrazione', (req: Request, res: Response) => {
  const num1 = Number(req.query.num1) || 0;
  const num2 = Number(req.query.num2) || 0; 
  res.send(sottrazione(num1, num2))
});

app.get('/multiplicazione', (req: Request, res: Response) => {
  const num1 = Number(req.query.num1) || 0;
  const num2 = Number(req.query.num2) || 0; 
  res.send(multiplicazione(num1, num2));
});

app.get('/Divisione', (req: Request, res: Response) => {
   const num1 = Number(req.query.num1) || 0;
  const num2 = Number(req.query.num2) || 0; 
  res.send(Divisione(num1, num2));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
