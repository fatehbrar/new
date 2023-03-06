const express = require('express');
const app = express();
const fs = require('fs');

const { ping, SmtpPingStatus } = require('smtp-ping');

app.get('/api', (req, res) => {
  ping(req.query.email, { timeout: 10000, sender: req.query.email })
  .then(result => res.send(result))
  .catch(error => res.send(error));
  //res.send(result)
});

app.listen(3000, () => {
  console.log('server started');
});
