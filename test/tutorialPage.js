const fs = require('fs');
const {TextEncoder, TextDecoder} = require('util');
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;
const { JSDOM } = require('jsdom');

const html = fs.readFileSync('../application/Tutorial.html');
const tutorialPage = new JSDOM(html);

module.exports = tutorialPage;