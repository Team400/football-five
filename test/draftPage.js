const fs = require('fs');
const {TextEncoder, TextDecoder} = require('util');
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;
const { JSDOM } = require('jsdom');

const html = fs.readFileSync('../application/draft.html');
const draftPage = new JSDOM(html);

module.exports = draftPage;