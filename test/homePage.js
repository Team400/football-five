const fs = require('fs');
const {TextEncoder, TextDecoder} = require('util');
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;
const { JSDOM } = require('jsdom');

const html = fs.readFileSync('../application/home.html');
const homePage = new JSDOM(html);

module.exports = homePage;