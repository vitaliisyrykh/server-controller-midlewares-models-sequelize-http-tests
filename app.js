const express = require('express');

const app = express();

app.get('/', (req, res) => {
  console.log('requst acepted');
  res.send('<h1> HELP </h1>')
});

app.post('/signin', (req, res) => {
  res.send('pfhtutcnhbhjdfy')
});
app.listen(3004, ()=>{
  console.log("Server start§");
});
