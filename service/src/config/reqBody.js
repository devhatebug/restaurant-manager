const express = require('express');
const configReqBody = (app) => {
    app.use(express.json({limit: '50mb'}));
    app.use(express.urlencoded({extended: true, limit: '50mb'}));
}

module.exports = configReqBody;