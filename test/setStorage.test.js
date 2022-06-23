/**
 * @jest-environment jsdom
 */

 const rewire = require('rewire');
 var properties = rewire("../application/js/properties");
 //jest.spyOn(window, 'alert').mockImplementation(() => {});
 
 const page = require('./homePage');
 
 test('checks setStorage function', () => {
     //properties.setStorage(2);
     console.log('rosterplayername2: ', page.window.document.getElementById('rosterplayername2').innerHTML);
     expect(() => page.window.document.getElementById('rosterplayername2').innerHTML).toBe(null);
     //properties.setStorage(2);
 });
 
 
 