const express = require('express')
const app = express()
const apiMenu = require('./router/menuApi');
const apiUsers = require('./router/usersApi');
const apiAuth = require('./router/authApi');
const apiOrders = require('./router/ordersApi');
const configReqBody = require('./config/reqBody');
const cors = require('cors');
require('dotenv').config();
const port = process.env.PORT || 8081;
configReqBody(app);
app.use(cors());
app.use('/api-menu', apiMenu);
app.use('/api-users', apiUsers);
app.use('/api/auth', apiAuth);
app.use('/api-orders', apiOrders);
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