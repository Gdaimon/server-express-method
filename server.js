const express = require('express');

const app = express();

const port = process.env.PORT || 3001

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).send({
    host: req.headers.host,
    descripcion: 'Metodo GET',
    query: req.query,
    method: req.method,
    status: res.statusCode
  })
})

app.post('/', (req, res) => {
  res.status(200).send({
    host: req.headers.host,
    descripcion: 'Metodo POST',
    request: req.body,
    method: req.method,
    status: res.statusCode
  })
})

app.listen(port, () => {
  console.log(`Server in port: http://127.0.0.1:${port}`);
})