/**
 * @jest-environment jsdom
 */

 const rewire = require('rewire');
 var properties = rewire("../application/js/properties");
 //jest.spyOn(window, 'alert').mockImplementation(() => {});
 /* const {TextEncoder, TextDecoder} = require('util');
 global.TextEncoder = TextEncoder;
 global.TextDecoder = TextDecoder;
 const { JSDOM } = require('jsdom');
 const dom = new JSDOM()
 global.document = dom.window.document
 global.window = dom.window */
 
 const page = require('./draftPage');
 
 test('checks setStorage function', () => {
     //properties.setStorage(2);
     //console.log('rosterplayername2: ', page.window.document.getElementById('yourPlayerNames').innerHTML);
     //expect(() => page.window.document.getElementById('yourPlayerNames').innerHTML).toBe(null);
     //properties.setStorage(2);
     console.log('numOfPlayers ', page.window.document.getElementById("numOfPlayers").innerHTML);
     properties.changeRosterNum(10);
     console.log('numOfPlayers ', page.window.document.getElementById("numOfPlayers").innerHTML);

 });
 
 
 