const ImageKit = require('imagekit');
require('dotenv').config();

const imagekit = new ImageKit({
    publicKey: process.env.PUBLIC_KEY,
    privateKey: process.env.PRIVATE_KEY,
    urlEndpoint: process.env.URL_ENDPOINT
})

module.exports = imagekit;
