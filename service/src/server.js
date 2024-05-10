const express = require('express')
const app = express()
const apiMenu = require('./router/menuApi');
const configReqBody = require('./config/reqBody');
require('dotenv').config();
const port = process.env.PORT || 8081;
configReqBody(app);
app.use('/', apiMenu);
const server = app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

process.on('SIGTERM', () => {
  console.log("Graceful shutdown")
  server.close()
});

process.on('SIGNINT', () => {
  console.log("Graceful shutdown")
  server.close()
});