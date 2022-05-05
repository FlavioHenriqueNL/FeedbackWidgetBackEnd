import express from 'express';

const app = express();

app.listen(3333, ()=> {
  console.log("O servidor está rodando...");
})