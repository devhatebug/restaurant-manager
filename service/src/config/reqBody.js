const express = require('express');
const configReqBody = (app) => {
    app.use(express.json());
    app.use(express.urlencoded({extended: true}));
}

module.exports = configReqBody;