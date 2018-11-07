const express = require('express');
const path = require('path');
const app = express();
const axios = require('axios');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/company/:id', (req, res) => {
  const id = JSON.parse(req.params.id)
    axios.get(`http://localhost:3000/company/${id}`)
    .then((response) => {
      res.status(201).send(response.data);
    })
    .catch((error) => {
      console.log(error);
    })

});

app.get('/stocks/:companyId', (req, res) => {
  const id = JSON.parse(req.params.companyId)
    axios.get(`http://localhost:3004/stocks/${id}`)
    .then((response) => {
      res.status(201).send(response.data);
    })
    .catch((error) => {
      console.log(error);
    })
});

app.get('/companiesJim/:companyId', (req, res) => {
  const id = JSON.parse(req.params.companyId)
    axios.get(`http://localhost:3004/companies/${id}`)
    .then((response) => {
      res.status(201).send(response.data);
    })
    .catch((error) => {
      console.log(error);
    })
});


app.get('/companies/:companyId', (req, res) => {
  const id = JSON.parse(req.params.id)
    axios.get(`http://localhost:3001/companies/${id}`)
    .then((response) => {
      res.status(201).send(response.data);
    })
    .catch((error) => {
      console.log(error);
    })
});

app.get('/users/:id', (req, res) => {
  const id = JSON.parse(req.params.id)
    axios.get(`http://localhost:3001/users/${id}`)
    .then((response) => {
      res.status(201).send(response.data);
    })
    .catch((error) => {
      console.log(error);
    })
});

app.get('/users/:id/:amount', (req, res) => {
  const idParam = req.params.id;
const amountParam = req.params.amount;
    axios.get(`http://localhost:3001/users/${idParam}/${amountParam}`)
    .then((response) => {
      res.status(201).send(response.data);
    })
    .catch((error) => {
      console.log(error);
    })
});

app.get('/companiesKatie/:id', (req, res) => {
  const id = JSON.parse(req.params.id)
    axios.get(`http://localhost:3009/companies/${id}`)
    .then((response) => {
      res.status(201).send(response.data);
    })
    .catch((error) => {
      console.log(error);
    })
});

app.listen(8080, ()=> {
  console.log('Livin\' the dream!');
});
